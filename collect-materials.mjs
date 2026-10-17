// Runs in GitHub Actions. Never fetches source sites from a visitor's browser.
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {load} from 'cheerio';
import {createHash} from 'node:crypto';
export const sources=[
 {id:'water',name:'Water Space',author:'whitewater',home:'https://www.waterwater.moe/',feed:'https://www.waterwater.moe/rss.xml',match:/\/posts\//,body:'.markdown-content',genre:'旅行与美食'},
 {id:'ikangjia',name:'和光同尘',author:'林深时觉寒',home:'https://ikangjia.cn/',feed:'https://ikangjia.cn/rss.xml',match:/\/posts\//,body:'article.prose',genre:'生活'},
 {id:'tuorui',name:'Tuorui Peng',author:'Tuorui Peng',home:'https://tuoruipeng.com/',index:'https://tuoruipeng.com/blog/',match:/\/blog\/\d{4}\/.+/,body:'.prose',genre:'美食与生活'},
 {id:'xiyue',name:'汐月观测站',author:'Xiyue',home:'https://blog.xiyy.de/',feed:'https://blog.xiyy.de/rss.xml',match:/\/posts\//,body:'.markdown-content',genre:'生活随笔'},
 {id:'kelejun',name:'可乐君de小站',author:'可乐君',home:'https://www.kelejun.cn/',match:/\/post\/[^/]+\/?$/,body:'article.inline:eq(1)',genre:'生活与旅行'}
];
const licenseUrl='https://creativecommons.org/licenses/by-nc-sa/4.0/';
const skipTitle=/转载|翻译|版权|隐私|免责声明|友链|友情链接|建站|站点公告|更新日志|博客搭建|API 文档/i;
export function normalize(s){return String(s||'').normalize('NFKC').toLowerCase().replace(/[\s\p{P}]/gu,'')}
export function hash(text){return createHash('sha256').update(normalize(text)).digest('hex')}
export function plain(html){const $=load(html);$('script,style,nav,footer,header,pre,code,blockquote,figure,img,button,svg,iframe').remove();$('br').replaceWith('\n');$('p,h1,h2,h3,h4,li,section').append('\n');return $.root().text().replace(/[\t \u00a0]+/g,' ').replace(/\n\s*\n+/g,'\n\n').trim()}
export function allowedLink(link,source){try{const u=new URL(link,source.home);u.hash='';u.search='';return u.protocol==='https:'&&u.hostname===new URL(source.home).hostname&&source.match.test(u.pathname)?u.href:null}catch{return null}}
export function discover(html,source,xml=false){const $=load(html,xml?{xmlMode:true}:{}),links=[];if(xml)$('item').each((_,item)=>links.push($(item).find('link').first().text()));else $('a[href]').each((_,a)=>links.push($(a).attr('href')));return [...new Set(links.map(x=>allowedLink(x,source)).filter(Boolean))]}
export function parseArticle(html,url,source,siteLicense=false){
 const $=load(html),licenses=$('a[href]').map((_,a)=>$(a).attr('href')).get().filter(h=>/creativecommons\.org\/licenses\//.test(h));
 if(licenses.some(h=>!h.includes('/by-nc-sa/4.0')))return null;
 if(!licenses.some(h=>h.includes('/by-nc-sa/4.0'))&&!siteLicense)return null;
 const title=$('meta[property="og:title"]').attr('content')||$('main h1').last().text().trim()||$('h1').last().text().trim();
 if(!title||skipTitle.test(title))return null;
 let body=$(source.body).first();if(!body.length)return null;
 body=body.clone();body.find('script,style,nav,footer,header,.license-container,.license,.post-meta,.toc,pre,code,blockquote,figure,img,button,svg,iframe,.anchor').remove();
 const text=plain(body.html());if((text.match(/[\u3400-\u9fff]/g)||[]).length<120||text.length>150000)return null;
 const genre=/代码|编程|开发|服务器|数据库|Linux|Docker|配置|插件|框架|博客|网站|算法|API|GitHub|Cloudflare/i.test(title)?'技术':/食|饭|菜|粥|烹饪|汤|肉|咖啡/.test(title)?'美食':/游|旅行|蜜月|云南|城市|海边|旅途/.test(title)?'旅行':/读书|电影|音乐|观影|小说|阅读/.test(title)?'文化':source.genre;
 return {articleId:source.id+':'+new URL(url).pathname,title,text:text.slice(0,5000),genre,source:url,sourceName:source.name,author:source.author,license:'CC BY-NC-SA 4.0 · 非商业 · 节选重排',licenseUrl,licenseEvidence:licenses.length?url:source.home,contentHash:hash(text),collectedAt:new Date().toISOString()};
}
export function mergeArticles(old,added){const out=[],seen=new Set();for(const a of [...old,...added]){const keys=['id:'+a.articleId,'title:'+normalize(a.title),'text:'+hash(a.text)];if(keys.some(k=>seen.has(k)))continue;keys.forEach(k=>seen.add(k));out.push(a)}return out}
async function request(url){const r=await fetch(url,{headers:{'User-Agent':'ShijuPoetryMaterialCollector/1.0 (+https://github.com/ljq15611703653-ship-it/shiju-paper-poetry; CC-licensed text only)'},signal:AbortSignal.timeout(18000)});if(!r.ok)throw Error('HTTP '+r.status);const t=await r.text();if(t.length>15000000)throw Error('response too large');return t}
const shuffle=a=>[...a].sort(()=>Math.random()-.5);
async function readJSON(file,fallback){try{return JSON.parse(await fs.readFile(file,'utf8'))}catch(e){if(e.code==='ENOENT')return fallback;throw e}}
async function writeJSON(file,value){await fs.mkdir(path.dirname(file),{recursive:true});await fs.writeFile(file+'.tmp',JSON.stringify(value));await fs.rename(file+'.tmp',file)}
export async function collect(directory='.',batchPerSource=8){
 const poolFile=path.join(directory,'materials.json'),stateFile=path.join(directory,'collection-state.json');
 const previous=await readJSON(poolFile,{version:1,articles:[]}),state=await readJSON(stateFile,{version:1,sources:{}}),added=[],reports=[];
 await Promise.all(sources.map(async source=>{
  const saved=state.sources[source.id]||{links:[],done:[]};let links=[],home='',discoveryError=null,accepted=0,examined=0;const errors=[];
  try{
   home=await request(source.home);
   const $=load(home);let feed=source.feed||$('link[type="application/rss+xml"]').attr('href');if(feed)feed=new URL(feed,source.home).href;
   if(feed&&new URL(feed).hostname===new URL(source.home).hostname){try{links=discover(await request(feed),source,true)}catch(e){errors.push('feed: '+e.message)}}
   links.push(...discover(home,source));if(source.index)links.push(...discover(await request(source.index),source));
  }catch(e){discoveryError=e.message}
  const catalogue=[...new Set([...saved.links,...links])],done=new Set(saved.done),known=new Set(previous.articles.map(a=>a.source));
  const queue=shuffle(catalogue.filter(url=>!done.has(url)&&!known.has(url)));
  const siteLicense=source.id==='tuorui'&&home.includes('creativecommons.org/licenses/by-nc-sa/4.0/');
  for(const url of queue.slice(0,batchPerSource+4)){
   if(accepted>=batchPerSource)break;examined++;
   try{const article=parseArticle(await request(url),url,source,siteLicense);done.add(url);if(article){added.push(article);accepted++}}catch(e){errors.push(new URL(url).pathname+': '+e.message)}
  }
  state.sources[source.id]={links:catalogue,done:[...done]};reports.push({id:source.id,name:source.name,discovered:catalogue.length,examined,accepted,discoveryError,errors});
 }));
 const articles=mergeArticles(previous.articles,added),now=new Date().toISOString();
 const pool={version:1,checkedAt:now,updatedAt:articles.length>previous.articles.length?now:previous.updatedAt||now,refreshHours:1,added:articles.length-previous.articles.length,articles,reports};
 if(!articles.length)throw Error('No licensed Chinese articles collected; previous publication is retained.');
 await writeJSON(poolFile,pool);await writeJSON(stateFile,state);
 console.log(JSON.stringify({total:articles.length,added:pool.added,reports},null,2));return pool;
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url))await collect(process.argv[2]||'.',Number(process.env.BATCH_PER_SOURCE)||8);
