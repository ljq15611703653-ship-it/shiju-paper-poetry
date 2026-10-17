var Bf=Object.create;var jc=Object.defineProperty;var zf=Object.getOwnPropertyDescriptor;var kf=Object.getOwnPropertyNames;var Vf=Object.getPrototypeOf,Gf=Object.prototype.hasOwnProperty;var Hf=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var Wf=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of kf(t))!Gf.call(n,s)&&s!==e&&jc(n,s,{get:()=>t[s],enumerable:!(i=zf(t,s))||i.enumerable});return n};var Qc=(n,t,e)=>(e=n!=null?Bf(Vf(n)):{},Wf(t||!n||!n.__esModule?jc(e,"default",{value:n,enumerable:!0}):e,n));var Ec=Hf((Sc,bc)=>{(function(n,t){typeof Sc=="object"&&typeof bc<"u"?bc.exports=t():typeof define=="function"&&define.amd?define(t):(n=typeof globalThis<"u"?globalThis:n||self,n.polygonClipping=t())})(Sc,(function(){"use strict";function n(L,d){var m={label:0,sent:function(){if(A[0]&1)throw A[1];return A[1]},trys:[],ops:[]},M,T,A,O;return O={next:U(0),throw:U(1),return:U(2)},typeof Symbol=="function"&&(O[Symbol.iterator]=function(){return this}),O;function U(X){return function(dt){return Y([X,dt])}}function Y(X){if(M)throw new TypeError("Generator is already executing.");for(;m;)try{if(M=1,T&&(A=X[0]&2?T.return:X[0]?T.throw||((A=T.return)&&A.call(T),0):T.next)&&!(A=A.call(T,X[1])).done)return A;switch(T=0,A&&(X=[X[0]&2,A.value]),X[0]){case 0:case 1:A=X;break;case 4:return m.label++,{value:X[1],done:!1};case 5:m.label++,T=X[1],X=[0];continue;case 7:X=m.ops.pop(),m.trys.pop();continue;default:if(A=m.trys,!(A=A.length>0&&A[A.length-1])&&(X[0]===6||X[0]===2)){m=0;continue}if(X[0]===3&&(!A||X[1]>A[0]&&X[1]<A[3])){m.label=X[1];break}if(X[0]===6&&m.label<A[1]){m.label=A[1],A=X;break}if(A&&m.label<A[2]){m.label=A[2],m.ops.push(X);break}A[2]&&m.ops.pop(),m.trys.pop();continue}X=d.call(L,m)}catch(dt){X=[6,dt],T=0}finally{M=A=0}if(X[0]&5)throw X[1];return{value:X[0]?X[1]:void 0,done:!0}}}var t=(function(){function L(d,m){this.next=null,this.key=d,this.data=m,this.left=null,this.right=null}return L})();function e(L,d){return L>d?1:L<d?-1:0}function i(L,d,m){for(var M=new t(null,null),T=M,A=M;;){var O=m(L,d.key);if(O<0){if(d.left===null)break;if(m(L,d.left.key)<0){var U=d.left;if(d.left=U.right,U.right=d,d=U,d.left===null)break}A.left=d,A=d,d=d.left}else if(O>0){if(d.right===null)break;if(m(L,d.right.key)>0){var U=d.right;if(d.right=U.left,U.left=d,d=U,d.right===null)break}T.right=d,T=d,d=d.right}else break}return T.right=d.left,A.left=d.right,d.left=M.right,d.right=M.left,d}function s(L,d,m,M){var T=new t(L,d);if(m===null)return T.left=T.right=null,T;m=i(L,m,M);var A=M(L,m.key);return A<0?(T.left=m.left,T.right=m,m.left=null):A>=0&&(T.right=m.right,T.left=m,m.right=null),T}function r(L,d,m){var M=null,T=null;if(d){d=i(L,d,m);var A=m(d.key,L);A===0?(M=d.left,T=d.right):A<0?(T=d.right,d.right=null,M=d):(M=d.left,d.left=null,T=d)}return{left:M,right:T}}function o(L,d,m){return d===null?L:(L===null||(d=i(L.key,d,m),d.left=L),d)}function a(L,d,m,M,T){if(L){M(""+d+(m?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+T(L)+`
`);var A=d+(m?"    ":"\u2502   ");L.left&&a(L.left,A,!1,M,T),L.right&&a(L.right,A,!0,M,T)}}var l=(function(){function L(d){d===void 0&&(d=e),this._root=null,this._size=0,this._comparator=d}return L.prototype.insert=function(d,m){return this._size++,this._root=s(d,m,this._root,this._comparator)},L.prototype.add=function(d,m){var M=new t(d,m);this._root===null&&(M.left=M.right=null,this._size++,this._root=M);var T=this._comparator,A=i(d,this._root,T),O=T(d,A.key);return O===0?this._root=A:(O<0?(M.left=A.left,M.right=A,A.left=null):O>0&&(M.right=A.right,M.left=A,A.right=null),this._size++,this._root=M),this._root},L.prototype.remove=function(d){this._root=this._remove(d,this._root,this._comparator)},L.prototype._remove=function(d,m,M){var T;if(m===null)return null;m=i(d,m,M);var A=M(d,m.key);return A===0?(m.left===null?T=m.right:(T=i(d,m.left,M),T.right=m.right),this._size--,T):m},L.prototype.pop=function(){var d=this._root;if(d){for(;d.left;)d=d.left;return this._root=i(d.key,this._root,this._comparator),this._root=this._remove(d.key,this._root,this._comparator),{key:d.key,data:d.data}}return null},L.prototype.findStatic=function(d){for(var m=this._root,M=this._comparator;m;){var T=M(d,m.key);if(T===0)return m;T<0?m=m.left:m=m.right}return null},L.prototype.find=function(d){return this._root&&(this._root=i(d,this._root,this._comparator),this._comparator(d,this._root.key)!==0)?null:this._root},L.prototype.contains=function(d){for(var m=this._root,M=this._comparator;m;){var T=M(d,m.key);if(T===0)return!0;T<0?m=m.left:m=m.right}return!1},L.prototype.forEach=function(d,m){for(var M=this._root,T=[],A=!1;!A;)M!==null?(T.push(M),M=M.left):T.length!==0?(M=T.pop(),d.call(m,M),M=M.right):A=!0;return this},L.prototype.range=function(d,m,M,T){for(var A=[],O=this._comparator,U=this._root,Y;A.length!==0||U;)if(U)A.push(U),U=U.left;else{if(U=A.pop(),Y=O(U.key,m),Y>0)break;if(O(U.key,d)>=0&&M.call(T,U))return this;U=U.right}return this},L.prototype.keys=function(){var d=[];return this.forEach(function(m){var M=m.key;return d.push(M)}),d},L.prototype.values=function(){var d=[];return this.forEach(function(m){var M=m.data;return d.push(M)}),d},L.prototype.min=function(){return this._root?this.minNode(this._root).key:null},L.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},L.prototype.minNode=function(d){if(d===void 0&&(d=this._root),d)for(;d.left;)d=d.left;return d},L.prototype.maxNode=function(d){if(d===void 0&&(d=this._root),d)for(;d.right;)d=d.right;return d},L.prototype.at=function(d){for(var m=this._root,M=!1,T=0,A=[];!M;)if(m)A.push(m),m=m.left;else if(A.length>0){if(m=A.pop(),T===d)return m;T++,m=m.right}else M=!0;return null},L.prototype.next=function(d){var m=this._root,M=null;if(d.right){for(M=d.right;M.left;)M=M.left;return M}for(var T=this._comparator;m;){var A=T(d.key,m.key);if(A===0)break;A<0?(M=m,m=m.left):m=m.right}return M},L.prototype.prev=function(d){var m=this._root,M=null;if(d.left!==null){for(M=d.left;M.right;)M=M.right;return M}for(var T=this._comparator;m;){var A=T(d.key,m.key);if(A===0)break;A<0?m=m.left:(M=m,m=m.right)}return M},L.prototype.clear=function(){return this._root=null,this._size=0,this},L.prototype.toList=function(){return f(this._root)},L.prototype.load=function(d,m,M){m===void 0&&(m=[]),M===void 0&&(M=!1);var T=d.length,A=this._comparator;if(M&&_(d,m,0,T-1,A),this._root===null)this._root=c(d,m,0,T),this._size=T;else{var O=p(this.toList(),h(d,m),A);T=this._size+T,this._root=u({head:O},0,T)}return this},L.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(L.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(L.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),L.prototype.toString=function(d){d===void 0&&(d=function(M){return String(M.key)});var m=[];return a(this._root,"",!0,function(M){return m.push(M)},d),m.join("")},L.prototype.update=function(d,m,M){var T=this._comparator,A=r(d,this._root,T),O=A.left,U=A.right;T(d,m)<0?U=s(m,M,U,T):O=s(m,M,O,T),this._root=o(O,U,T)},L.prototype.split=function(d){return r(d,this._root,this._comparator)},L.prototype[Symbol.iterator]=function(){var d,m,M;return n(this,function(T){switch(T.label){case 0:d=this._root,m=[],M=!1,T.label=1;case 1:return M?[3,6]:d===null?[3,2]:(m.push(d),d=d.left,[3,5]);case 2:return m.length===0?[3,4]:(d=m.pop(),[4,d]);case 3:return T.sent(),d=d.right,[3,5];case 4:M=!0,T.label=5;case 5:return[3,1];case 6:return[2]}})},L})();function c(L,d,m,M){var T=M-m;if(T>0){var A=m+Math.floor(T/2),O=L[A],U=d[A],Y=new t(O,U);return Y.left=c(L,d,m,A),Y.right=c(L,d,A+1,M),Y}return null}function h(L,d){for(var m=new t(null,null),M=m,T=0;T<L.length;T++)M=M.next=new t(L[T],d[T]);return M.next=null,m.next}function f(L){for(var d=L,m=[],M=!1,T=new t(null,null),A=T;!M;)d?(m.push(d),d=d.left):m.length>0?(d=A=A.next=m.pop(),d=d.right):M=!0;return A.next=null,T.next}function u(L,d,m){var M=m-d;if(M>0){var T=d+Math.floor(M/2),A=u(L,d,T),O=L.head;return O.left=A,L.head=L.head.next,O.right=u(L,T+1,m),O}return null}function p(L,d,m){for(var M=new t(null,null),T=M,A=L,O=d;A!==null&&O!==null;)m(A.key,O.key)<0?(T.next=A,A=A.next):(T.next=O,O=O.next),T=T.next;return A!==null?T.next=A:O!==null&&(T.next=O),M.next}function _(L,d,m,M,T){if(!(m>=M)){for(var A=L[m+M>>1],O=m-1,U=M+1;;){do O++;while(T(L[O],A)<0);do U--;while(T(L[U],A)>0);if(O>=U)break;var Y=L[O];L[O]=L[U],L[U]=Y,Y=d[O],d[O]=d[U],d[U]=Y}_(L,d,m,U,T),_(L,d,U+1,M,T)}}let v=(L,d)=>L.ll.x<=d.x&&d.x<=L.ur.x&&L.ll.y<=d.y&&d.y<=L.ur.y,x=(L,d)=>{if(d.ur.x<L.ll.x||L.ur.x<d.ll.x||d.ur.y<L.ll.y||L.ur.y<d.ll.y)return null;let m=L.ll.x<d.ll.x?d.ll.x:L.ll.x,M=L.ur.x<d.ur.x?L.ur.x:d.ur.x,T=L.ll.y<d.ll.y?d.ll.y:L.ll.y,A=L.ur.y<d.ur.y?L.ur.y:d.ur.y;return{ll:{x:m,y:T},ur:{x:M,y:A}}},g=Number.EPSILON;g===void 0&&(g=Math.pow(2,-52));let C=g*g,D=(L,d)=>{if(-g<L&&L<g&&-g<d&&d<g)return 0;let m=L-d;return m*m<C*L*d?0:L<d?-1:1};class w{constructor(){this.reset()}reset(){this.xRounder=new I,this.yRounder=new I}round(d,m){return{x:this.xRounder.round(d),y:this.yRounder.round(m)}}}class I{constructor(){this.tree=new l,this.round(0)}round(d){let m=this.tree.add(d),M=this.tree.prev(m);if(M!==null&&D(m.key,M.key)===0)return this.tree.remove(d),M.key;let T=this.tree.next(m);return T!==null&&D(m.key,T.key)===0?(this.tree.remove(d),T.key):d}}let R=new w,F=11102230246251565e-32,S=134217729,N=(3+8*F)*F;function k(L,d,m,M,T){let A,O,U,Y,X=d[0],dt=M[0],E=0,H=0;dt>X==dt>-X?(A=X,X=d[++E]):(A=dt,dt=M[++H]);let B=0;if(E<L&&H<m)for(dt>X==dt>-X?(O=X+A,U=A-(O-X),X=d[++E]):(O=dt+A,U=A-(O-dt),dt=M[++H]),A=O,U!==0&&(T[B++]=U);E<L&&H<m;)dt>X==dt>-X?(O=A+X,Y=O-A,U=A-(O-Y)+(X-Y),X=d[++E]):(O=A+dt,Y=O-A,U=A-(O-Y)+(dt-Y),dt=M[++H]),A=O,U!==0&&(T[B++]=U);for(;E<L;)O=A+X,Y=O-A,U=A-(O-Y)+(X-Y),X=d[++E],A=O,U!==0&&(T[B++]=U);for(;H<m;)O=A+dt,Y=O-A,U=A-(O-Y)+(dt-Y),dt=M[++H],A=O,U!==0&&(T[B++]=U);return(A!==0||B===0)&&(T[B++]=A),B}function W(L,d){let m=d[0];for(let M=1;M<L;M++)m+=d[M];return m}function $(L){return new Float64Array(L)}let tt=(3+16*F)*F,G=(2+12*F)*F,Q=(9+64*F)*F*F,ot=$(4),rt=$(8),mt=$(12),it=$(16),at=$(4);function pt(L,d,m,M,T,A,O){let U,Y,X,dt,E,H,B,ht,ut,nt,gt,xt,zt,Dt,re,le,$e,Ie,Je=L-T,He=m-T,en=d-A,Ke=M-A;Dt=Je*Ke,H=S*Je,B=H-(H-Je),ht=Je-B,H=S*Ke,ut=H-(H-Ke),nt=Ke-ut,re=ht*nt-(Dt-B*ut-ht*ut-B*nt),le=en*He,H=S*en,B=H-(H-en),ht=en-B,H=S*He,ut=H-(H-He),nt=He-ut,$e=ht*nt-(le-B*ut-ht*ut-B*nt),gt=re-$e,E=re-gt,ot[0]=re-(gt+E)+(E-$e),xt=Dt+gt,E=xt-Dt,zt=Dt-(xt-E)+(gt-E),gt=zt-le,E=zt-gt,ot[1]=zt-(gt+E)+(E-le),Ie=xt+gt,E=Ie-xt,ot[2]=xt-(Ie-E)+(gt-E),ot[3]=Ie;let ln=W(4,ot),nn=G*O;if(ln>=nn||-ln>=nn||(E=L-Je,U=L-(Je+E)+(E-T),E=m-He,X=m-(He+E)+(E-T),E=d-en,Y=d-(en+E)+(E-A),E=M-Ke,dt=M-(Ke+E)+(E-A),U===0&&Y===0&&X===0&&dt===0)||(nn=Q*O+N*Math.abs(ln),ln+=Je*dt+Ke*U-(en*X+He*Y),ln>=nn||-ln>=nn))return ln;Dt=U*Ke,H=S*U,B=H-(H-U),ht=U-B,H=S*Ke,ut=H-(H-Ke),nt=Ke-ut,re=ht*nt-(Dt-B*ut-ht*ut-B*nt),le=Y*He,H=S*Y,B=H-(H-Y),ht=Y-B,H=S*He,ut=H-(H-He),nt=He-ut,$e=ht*nt-(le-B*ut-ht*ut-B*nt),gt=re-$e,E=re-gt,at[0]=re-(gt+E)+(E-$e),xt=Dt+gt,E=xt-Dt,zt=Dt-(xt-E)+(gt-E),gt=zt-le,E=zt-gt,at[1]=zt-(gt+E)+(E-le),Ie=xt+gt,E=Ie-xt,at[2]=xt-(Ie-E)+(gt-E),at[3]=Ie;let Hs=k(4,ot,4,at,rt);Dt=Je*dt,H=S*Je,B=H-(H-Je),ht=Je-B,H=S*dt,ut=H-(H-dt),nt=dt-ut,re=ht*nt-(Dt-B*ut-ht*ut-B*nt),le=en*X,H=S*en,B=H-(H-en),ht=en-B,H=S*X,ut=H-(H-X),nt=X-ut,$e=ht*nt-(le-B*ut-ht*ut-B*nt),gt=re-$e,E=re-gt,at[0]=re-(gt+E)+(E-$e),xt=Dt+gt,E=xt-Dt,zt=Dt-(xt-E)+(gt-E),gt=zt-le,E=zt-gt,at[1]=zt-(gt+E)+(E-le),Ie=xt+gt,E=Ie-xt,at[2]=xt-(Ie-E)+(gt-E),at[3]=Ie;let Or=k(Hs,rt,4,at,mt);Dt=U*dt,H=S*U,B=H-(H-U),ht=U-B,H=S*dt,ut=H-(H-dt),nt=dt-ut,re=ht*nt-(Dt-B*ut-ht*ut-B*nt),le=Y*X,H=S*Y,B=H-(H-Y),ht=Y-B,H=S*X,ut=H-(H-X),nt=X-ut,$e=ht*nt-(le-B*ut-ht*ut-B*nt),gt=re-$e,E=re-gt,at[0]=re-(gt+E)+(E-$e),xt=Dt+gt,E=xt-Dt,zt=Dt-(xt-E)+(gt-E),gt=zt-le,E=zt-gt,at[1]=zt-(gt+E)+(E-le),Ie=xt+gt,E=Ie-xt,at[2]=xt-(Ie-E)+(gt-E),at[3]=Ie;let Br=k(Or,mt,4,at,it);return it[Br-1]}function At(L,d,m,M,T,A){let O=(d-A)*(m-T),U=(L-T)*(M-A),Y=O-U,X=Math.abs(O+U);return Math.abs(Y)>=tt*X?Y:-pt(L,d,m,M,T,A,X)}let Tt=(L,d)=>L.x*d.y-L.y*d.x,jt=(L,d)=>L.x*d.x+L.y*d.y,qt=(L,d,m)=>{let M=At(L.x,L.y,d.x,d.y,m.x,m.y);return M>0?-1:M<0?1:0},$t=L=>Math.sqrt(jt(L,L)),lt=(L,d,m)=>{let M={x:d.x-L.x,y:d.y-L.y},T={x:m.x-L.x,y:m.y-L.y};return Tt(T,M)/$t(T)/$t(M)},ft=(L,d,m)=>{let M={x:d.x-L.x,y:d.y-L.y},T={x:m.x-L.x,y:m.y-L.y};return jt(T,M)/$t(T)/$t(M)},bt=(L,d,m)=>d.y===0?null:{x:L.x+d.x/d.y*(m-L.y),y:m},Ft=(L,d,m)=>d.x===0?null:{x:m,y:L.y+d.y/d.x*(m-L.x)},St=(L,d,m,M)=>{if(d.x===0)return Ft(m,M,L.x);if(M.x===0)return Ft(L,d,m.x);if(d.y===0)return bt(m,M,L.y);if(M.y===0)return bt(L,d,m.y);let T=Tt(d,M);if(T==0)return null;let A={x:m.x-L.x,y:m.y-L.y},O=Tt(A,d)/T,U=Tt(A,M)/T,Y=L.x+U*d.x,X=m.x+O*M.x,dt=L.y+U*d.y,E=m.y+O*M.y,H=(Y+X)/2,B=(dt+E)/2;return{x:H,y:B}};class Lt{static compare(d,m){let M=Lt.comparePoints(d.point,m.point);return M!==0?M:(d.point!==m.point&&d.link(m),d.isLeft!==m.isLeft?d.isLeft?1:-1:Ot.compare(d.segment,m.segment))}static comparePoints(d,m){return d.x<m.x?-1:d.x>m.x?1:d.y<m.y?-1:d.y>m.y?1:0}constructor(d,m){d.events===void 0?d.events=[this]:d.events.push(this),this.point=d,this.isLeft=m}link(d){if(d.point===this.point)throw new Error("Tried to link already linked events");let m=d.point.events;for(let M=0,T=m.length;M<T;M++){let A=m[M];this.point.events.push(A),A.point=this.point}this.checkForConsuming()}checkForConsuming(){let d=this.point.events.length;for(let m=0;m<d;m++){let M=this.point.events[m];if(M.segment.consumedBy===void 0)for(let T=m+1;T<d;T++){let A=this.point.events[T];A.consumedBy===void 0&&M.otherSE.point.events===A.otherSE.point.events&&M.segment.consume(A.segment)}}}getAvailableLinkedEvents(){let d=[];for(let m=0,M=this.point.events.length;m<M;m++){let T=this.point.events[m];T!==this&&!T.segment.ringOut&&T.segment.isInResult()&&d.push(T)}return d}getLeftmostComparator(d){let m=new Map,M=T=>{let A=T.otherSE;m.set(T,{sine:lt(this.point,d.point,A.point),cosine:ft(this.point,d.point,A.point)})};return(T,A)=>{m.has(T)||M(T),m.has(A)||M(A);let{sine:O,cosine:U}=m.get(T),{sine:Y,cosine:X}=m.get(A);return O>=0&&Y>=0?U<X?1:U>X?-1:0:O<0&&Y<0?U<X?-1:U>X?1:0:Y<O?-1:Y>O?1:0}}}let ye=0;class Ot{static compare(d,m){let M=d.leftSE.point.x,T=m.leftSE.point.x,A=d.rightSE.point.x,O=m.rightSE.point.x;if(O<M)return 1;if(A<T)return-1;let U=d.leftSE.point.y,Y=m.leftSE.point.y,X=d.rightSE.point.y,dt=m.rightSE.point.y;if(M<T){if(Y<U&&Y<X)return 1;if(Y>U&&Y>X)return-1;let E=d.comparePoint(m.leftSE.point);if(E<0)return 1;if(E>0)return-1;let H=m.comparePoint(d.rightSE.point);return H!==0?H:-1}if(M>T){if(U<Y&&U<dt)return-1;if(U>Y&&U>dt)return 1;let E=m.comparePoint(d.leftSE.point);if(E!==0)return E;let H=d.comparePoint(m.rightSE.point);return H<0?1:H>0?-1:1}if(U<Y)return-1;if(U>Y)return 1;if(A<O){let E=m.comparePoint(d.rightSE.point);if(E!==0)return E}if(A>O){let E=d.comparePoint(m.rightSE.point);if(E<0)return 1;if(E>0)return-1}if(A!==O){let E=X-U,H=A-M,B=dt-Y,ht=O-T;if(E>H&&B<ht)return 1;if(E<H&&B>ht)return-1}return A>O?1:A<O||X<dt?-1:X>dt?1:d.id<m.id?-1:d.id>m.id?1:0}constructor(d,m,M,T){this.id=++ye,this.leftSE=d,d.segment=this,d.otherSE=m,this.rightSE=m,m.segment=this,m.otherSE=d,this.rings=M,this.windings=T}static fromRing(d,m,M){let T,A,O,U=Lt.comparePoints(d,m);if(U<0)T=d,A=m,O=1;else if(U>0)T=m,A=d,O=-1;else throw new Error(`Tried to create degenerate segment at [${d.x}, ${d.y}]`);let Y=new Lt(T,!0),X=new Lt(A,!1);return new Ot(Y,X,[M],[O])}replaceRightSE(d){this.rightSE=d,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let d=this.leftSE.point.y,m=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:d<m?d:m},ur:{x:this.rightSE.point.x,y:d>m?d:m}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(d){return d.x===this.leftSE.point.x&&d.y===this.leftSE.point.y||d.x===this.rightSE.point.x&&d.y===this.rightSE.point.y}comparePoint(d){if(this.isAnEndpoint(d))return 0;let m=this.leftSE.point,M=this.rightSE.point,T=this.vector();if(m.x===M.x)return d.x===m.x?0:d.x<m.x?1:-1;let A=(d.y-m.y)/T.y,O=m.x+A*T.x;if(d.x===O)return 0;let U=(d.x-m.x)/T.x,Y=m.y+U*T.y;return d.y===Y?0:d.y<Y?-1:1}getIntersection(d){let m=this.bbox(),M=d.bbox(),T=x(m,M);if(T===null)return null;let A=this.leftSE.point,O=this.rightSE.point,U=d.leftSE.point,Y=d.rightSE.point,X=v(m,U)&&this.comparePoint(U)===0,dt=v(M,A)&&d.comparePoint(A)===0,E=v(m,Y)&&this.comparePoint(Y)===0,H=v(M,O)&&d.comparePoint(O)===0;if(dt&&X)return H&&!E?O:!H&&E?Y:null;if(dt)return E&&A.x===Y.x&&A.y===Y.y?null:A;if(X)return H&&O.x===U.x&&O.y===U.y?null:U;if(H&&E)return null;if(H)return O;if(E)return Y;let B=St(A,this.vector(),U,d.vector());return B===null||!v(T,B)?null:R.round(B.x,B.y)}split(d){let m=[],M=d.events!==void 0,T=new Lt(d,!0),A=new Lt(d,!1),O=this.rightSE;this.replaceRightSE(A),m.push(A),m.push(T);let U=new Ot(T,O,this.rings.slice(),this.windings.slice());return Lt.comparePoints(U.leftSE.point,U.rightSE.point)>0&&U.swapEvents(),Lt.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),M&&(T.checkForConsuming(),A.checkForConsuming()),m}swapEvents(){let d=this.rightSE;this.rightSE=this.leftSE,this.leftSE=d,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let m=0,M=this.windings.length;m<M;m++)this.windings[m]*=-1}consume(d){let m=this,M=d;for(;m.consumedBy;)m=m.consumedBy;for(;M.consumedBy;)M=M.consumedBy;let T=Ot.compare(m,M);if(T!==0){if(T>0){let A=m;m=M,M=A}if(m.prev===M){let A=m;m=M,M=A}for(let A=0,O=M.rings.length;A<O;A++){let U=M.rings[A],Y=M.windings[A],X=m.rings.indexOf(U);X===-1?(m.rings.push(U),m.windings.push(Y)):m.windings[X]+=Y}M.rings=null,M.windings=null,M.consumedBy=m,M.leftSE.consumedBy=m.leftSE,M.rightSE.consumedBy=m.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let d=this.prev.consumedBy||this.prev;this._beforeState=d.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let d=this.beforeState();this._afterState={rings:d.rings.slice(0),windings:d.windings.slice(0),multiPolys:[]};let m=this._afterState.rings,M=this._afterState.windings,T=this._afterState.multiPolys;for(let U=0,Y=this.rings.length;U<Y;U++){let X=this.rings[U],dt=this.windings[U],E=m.indexOf(X);E===-1?(m.push(X),M.push(dt)):M[E]+=dt}let A=[],O=[];for(let U=0,Y=m.length;U<Y;U++){if(M[U]===0)continue;let X=m[U],dt=X.poly;if(O.indexOf(dt)===-1)if(X.isExterior)A.push(dt);else{O.indexOf(dt)===-1&&O.push(dt);let E=A.indexOf(X.poly);E!==-1&&A.splice(E,1)}}for(let U=0,Y=A.length;U<Y;U++){let X=A[U].multiPoly;T.indexOf(X)===-1&&T.push(X)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let d=this.beforeState().multiPolys,m=this.afterState().multiPolys;switch(Vt.type){case"union":{let M=d.length===0,T=m.length===0;this._isInResult=M!==T;break}case"intersection":{let M,T;d.length<m.length?(M=d.length,T=m.length):(M=m.length,T=d.length),this._isInResult=T===Vt.numMultiPolys&&M<T;break}case"xor":{let M=Math.abs(d.length-m.length);this._isInResult=M%2===1;break}case"difference":{let M=T=>T.length===1&&T[0].isSubject;this._isInResult=M(d)!==M(m);break}default:throw new Error(`Unrecognized operation type found ${Vt.type}`)}return this._isInResult}}class Kt{constructor(d,m,M){if(!Array.isArray(d)||d.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=m,this.isExterior=M,this.segments=[],typeof d[0][0]!="number"||typeof d[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let T=R.round(d[0][0],d[0][1]);this.bbox={ll:{x:T.x,y:T.y},ur:{x:T.x,y:T.y}};let A=T;for(let O=1,U=d.length;O<U;O++){if(typeof d[O][0]!="number"||typeof d[O][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let Y=R.round(d[O][0],d[O][1]);Y.x===A.x&&Y.y===A.y||(this.segments.push(Ot.fromRing(A,Y,this)),Y.x<this.bbox.ll.x&&(this.bbox.ll.x=Y.x),Y.y<this.bbox.ll.y&&(this.bbox.ll.y=Y.y),Y.x>this.bbox.ur.x&&(this.bbox.ur.x=Y.x),Y.y>this.bbox.ur.y&&(this.bbox.ur.y=Y.y),A=Y)}(T.x!==A.x||T.y!==A.y)&&this.segments.push(Ot.fromRing(A,T,this))}getSweepEvents(){let d=[];for(let m=0,M=this.segments.length;m<M;m++){let T=this.segments[m];d.push(T.leftSE),d.push(T.rightSE)}return d}}class se{constructor(d,m){if(!Array.isArray(d))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new Kt(d[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let M=1,T=d.length;M<T;M++){let A=new Kt(d[M],this,!1);A.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=A.bbox.ll.x),A.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=A.bbox.ll.y),A.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=A.bbox.ur.x),A.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=A.bbox.ur.y),this.interiorRings.push(A)}this.multiPoly=m}getSweepEvents(){let d=this.exteriorRing.getSweepEvents();for(let m=0,M=this.interiorRings.length;m<M;m++){let T=this.interiorRings[m].getSweepEvents();for(let A=0,O=T.length;A<O;A++)d.push(T[A])}return d}}class Wt{constructor(d,m){if(!Array.isArray(d))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof d[0][0][0]=="number"&&(d=[d])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let M=0,T=d.length;M<T;M++){let A=new se(d[M],this);A.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=A.bbox.ll.x),A.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=A.bbox.ll.y),A.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=A.bbox.ur.x),A.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=A.bbox.ur.y),this.polys.push(A)}this.isSubject=m}getSweepEvents(){let d=[];for(let m=0,M=this.polys.length;m<M;m++){let T=this.polys[m].getSweepEvents();for(let A=0,O=T.length;A<O;A++)d.push(T[A])}return d}}class ne{static factory(d){let m=[];for(let M=0,T=d.length;M<T;M++){let A=d[M];if(!A.isInResult()||A.ringOut)continue;let O=null,U=A.leftSE,Y=A.rightSE,X=[U],dt=U.point,E=[];for(;O=U,U=Y,X.push(U),U.point!==dt;)for(;;){let H=U.getAvailableLinkedEvents();if(H.length===0){let ut=X[0].point,nt=X[X.length-1].point;throw new Error(`Unable to complete output ring starting at [${ut.x}, ${ut.y}]. Last matching segment found ends at [${nt.x}, ${nt.y}].`)}if(H.length===1){Y=H[0].otherSE;break}let B=null;for(let ut=0,nt=E.length;ut<nt;ut++)if(E[ut].point===U.point){B=ut;break}if(B!==null){let ut=E.splice(B)[0],nt=X.splice(ut.index);nt.unshift(nt[0].otherSE),m.push(new ne(nt.reverse()));continue}E.push({index:X.length,point:U.point});let ht=U.getLeftmostComparator(O);Y=H.sort(ht)[0].otherSE;break}m.push(new ne(X))}return m}constructor(d){this.events=d;for(let m=0,M=d.length;m<M;m++)d[m].segment.ringOut=this;this.poly=null}getGeom(){let d=this.events[0].point,m=[d];for(let X=1,dt=this.events.length-1;X<dt;X++){let E=this.events[X].point,H=this.events[X+1].point;qt(E,d,H)!==0&&(m.push(E),d=E)}if(m.length===1)return null;let M=m[0],T=m[1];qt(M,d,T)===0&&m.shift(),m.push(m[0]);let A=this.isExteriorRing()?1:-1,O=this.isExteriorRing()?0:m.length-1,U=this.isExteriorRing()?m.length:-1,Y=[];for(let X=O;X!=U;X+=A)Y.push([m[X].x,m[X].y]);return Y}isExteriorRing(){if(this._isExteriorRing===void 0){let d=this.enclosingRing();this._isExteriorRing=d?!d.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let d=this.events[0];for(let T=1,A=this.events.length;T<A;T++){let O=this.events[T];Lt.compare(d,O)>0&&(d=O)}let m=d.segment.prevInResult(),M=m?m.prevInResult():null;for(;;){if(!m)return null;if(!M)return m.ringOut;if(M.ringOut!==m.ringOut)return M.ringOut.enclosingRing()!==m.ringOut?m.ringOut:m.ringOut.enclosingRing();m=M.prevInResult(),M=m?m.prevInResult():null}}}class ve{constructor(d){this.exteriorRing=d,d.poly=this,this.interiorRings=[]}addInterior(d){this.interiorRings.push(d),d.poly=this}getGeom(){let d=[this.exteriorRing.getGeom()];if(d[0]===null)return null;for(let m=0,M=this.interiorRings.length;m<M;m++){let T=this.interiorRings[m].getGeom();T!==null&&d.push(T)}return d}}class Oe{constructor(d){this.rings=d,this.polys=this._composePolys(d)}getGeom(){let d=[];for(let m=0,M=this.polys.length;m<M;m++){let T=this.polys[m].getGeom();T!==null&&d.push(T)}return d}_composePolys(d){let m=[];for(let M=0,T=d.length;M<T;M++){let A=d[M];if(!A.poly)if(A.isExteriorRing())m.push(new ve(A));else{let O=A.enclosingRing();O.poly||m.push(new ve(O)),O.poly.addInterior(A)}}return m}}class ue{constructor(d){let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ot.compare;this.queue=d,this.tree=new l(m),this.segments=[]}process(d){let m=d.segment,M=[];if(d.consumedBy)return d.isLeft?this.queue.remove(d.otherSE):this.tree.remove(m),M;let T=d.isLeft?this.tree.add(m):this.tree.find(m);if(!T)throw new Error(`Unable to find segment #${m.id} [${m.leftSE.point.x}, ${m.leftSE.point.y}] -> [${m.rightSE.point.x}, ${m.rightSE.point.y}] in SweepLine tree.`);let A=T,O=T,U,Y;for(;U===void 0;)A=this.tree.prev(A),A===null?U=null:A.key.consumedBy===void 0&&(U=A.key);for(;Y===void 0;)O=this.tree.next(O),O===null?Y=null:O.key.consumedBy===void 0&&(Y=O.key);if(d.isLeft){let X=null;if(U){let E=U.getIntersection(m);if(E!==null&&(m.isAnEndpoint(E)||(X=E),!U.isAnEndpoint(E))){let H=this._splitSafely(U,E);for(let B=0,ht=H.length;B<ht;B++)M.push(H[B])}}let dt=null;if(Y){let E=Y.getIntersection(m);if(E!==null&&(m.isAnEndpoint(E)||(dt=E),!Y.isAnEndpoint(E))){let H=this._splitSafely(Y,E);for(let B=0,ht=H.length;B<ht;B++)M.push(H[B])}}if(X!==null||dt!==null){let E=null;X===null?E=dt:dt===null?E=X:E=Lt.comparePoints(X,dt)<=0?X:dt,this.queue.remove(m.rightSE),M.push(m.rightSE);let H=m.split(E);for(let B=0,ht=H.length;B<ht;B++)M.push(H[B])}M.length>0?(this.tree.remove(m),M.push(d)):(this.segments.push(m),m.prev=U)}else{if(U&&Y){let X=U.getIntersection(Y);if(X!==null){if(!U.isAnEndpoint(X)){let dt=this._splitSafely(U,X);for(let E=0,H=dt.length;E<H;E++)M.push(dt[E])}if(!Y.isAnEndpoint(X)){let dt=this._splitSafely(Y,X);for(let E=0,H=dt.length;E<H;E++)M.push(dt[E])}}}this.tree.remove(m)}return M}_splitSafely(d,m){this.tree.remove(d);let M=d.rightSE;this.queue.remove(M);let T=d.split(m);return T.push(M),d.consumedBy===void 0&&this.tree.add(d),T}}let ge=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,V=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class Re{run(d,m,M){Vt.type=d,R.reset();let T=[new Wt(m,!0)];for(let E=0,H=M.length;E<H;E++)T.push(new Wt(M[E],!1));if(Vt.numMultiPolys=T.length,Vt.type==="difference"){let E=T[0],H=1;for(;H<T.length;)x(T[H].bbox,E.bbox)!==null?H++:T.splice(H,1)}if(Vt.type==="intersection")for(let E=0,H=T.length;E<H;E++){let B=T[E];for(let ht=E+1,ut=T.length;ht<ut;ht++)if(x(B.bbox,T[ht].bbox)===null)return[]}let A=new l(Lt.compare);for(let E=0,H=T.length;E<H;E++){let B=T[E].getSweepEvents();for(let ht=0,ut=B.length;ht<ut;ht++)if(A.insert(B[ht]),A.size>ge)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let O=new ue(A),U=A.size,Y=A.pop();for(;Y;){let E=Y.key;if(A.size===U){let B=E.segment;throw new Error(`Unable to pop() ${E.isLeft?"left":"right"} SweepEvent [${E.point.x}, ${E.point.y}] from segment #${B.id} [${B.leftSE.point.x}, ${B.leftSE.point.y}] -> [${B.rightSE.point.x}, ${B.rightSE.point.y}] from queue.`)}if(A.size>ge)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(O.segments.length>V)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let H=O.process(E);for(let B=0,ht=H.length;B<ht;B++){let ut=H[B];ut.consumedBy===void 0&&A.insert(ut)}U=A.size,Y=A.pop()}R.reset();let X=ne.factory(O.segments);return new Oe(X).getGeom()}}let Vt=new Re;var st={union:function(L){for(var d=arguments.length,m=new Array(d>1?d-1:0),M=1;M<d;M++)m[M-1]=arguments[M];return Vt.run("union",L,m)},intersection:function(L){for(var d=arguments.length,m=new Array(d>1?d-1:0),M=1;M<d;M++)m[M-1]=arguments[M];return Vt.run("intersection",L,m)},xor:function(L){for(var d=arguments.length,m=new Array(d>1?d-1:0),M=1;M<d;M++)m[M-1]=arguments[M];return Vt.run("xor",L,m)},difference:function(L){for(var d=arguments.length,m=new Array(d>1?d-1:0),M=1;M<d;M++)m[M-1]=arguments[M];return Vt.run("difference",L,m)}};return st}))});var Ch=0,Pl=1,Rh=2;var zi=1,Ih=2,Rs=3,Fn=0,Fe=1,fn=2,On=0,Is=1,Ll=2,Dl=3,Nl=4,Ph=5;var ki=100,Lh=101,Dh=102,Nh=103,Uh=104,Fh=200,Oh=201,Bh=202,zh=203,Ul=204,Fl=205,kh=206,Vh=207,Gh=208,Hh=209,Wh=210,Xh=211,qh=212,Yh=213,Zh=214,ho=0,uo=1,fo=2,ms=3,po=4,mo=5,go=6,xo=7,Ol=0,$h=1,Jh=2,yn=0,Bl=1,zl=2,kl=3,ur=4,Vl=5,Gl=6,Hl=7;var Wl=300,_i=301,Vi=302,Ho=303,Wo=304,fr=306,gs=1e3,Rn=1001,_o=1002,De=1003,Kh=1004;var dr=1005;var Ue=1006,Xo=1007;var yi=1008;var tn=1009,Xl=1010,ql=1011,Ps=1012,qo=1013,vn=1014,Mn=1015,Sn=1016,Yo=1017,Zo=1018,Ls=1020,Yl=35902,Zl=35899,$l=1021,Jl=1022,dn=1023,Pn=1026,vi=1027,Kl=1028,$o=1029,Mi=1030,Jo=1031;var Ko=1033,pr=33776,mr=33777,gr=33778,xr=33779,jo=35840,Qo=35841,ta=35842,ea=35843,na=36196,ia=37492,sa=37496,ra=37488,oa=37489,_r=37490,aa=37491,la=37808,ca=37809,ha=37810,ua=37811,fa=37812,da=37813,pa=37814,ma=37815,ga=37816,xa=37817,_a=37818,ya=37819,va=37820,Ma=37821,Sa=36492,ba=36494,Ea=36495,wa=36283,Ta=36284,yr=36285,Aa=36286;var Ks=2300,yo=2301,lo=2302,bl=2303,El=2400,wl=2401,Tl=2402;var jh=3200;var Ca=0,Qh=1,jn="",Ee="srgb",js="srgb-linear",Qs="linear",ee="srgb";var co=7680;var tu=519,eu=512,nu=513,iu=514,Ra=515,su=516,ru=517,Ia=518,ou=519,au=35044;var jl="300 es",_n=2e3,xs=2001;function Xf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function qf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function tr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lu(){let n=tr("canvas");return n.style.display="block",n}var th={},_s=null;function Ql(...n){let t="THREE."+n.shift();_s?_s("log",t,...n):console.log(t,...n)}function cu(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Pt(...n){n=cu(n);let t="THREE."+n.shift();if(_s)_s("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Nt(...n){n=cu(n);let t="THREE."+n.shift();if(_s)_s("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ni(...n){let t=n.join(" ");t in th||(th[t]=!0,Pt(...n))}function hu(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var uu={[ho]:uo,[fo]:go,[po]:xo,[ms]:mo,[uo]:ho,[go]:fo,[xo]:po,[mo]:ms},Ln=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eh=1234567,$s=Math.PI/180,ys=180/Math.PI;function Ds(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]).toLowerCase()}function Zt(n,t,e){return Math.max(t,Math.min(e,n))}function tc(n,t){return(n%t+t)%t}function Yf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Zf(n,t,e){return n!==t?(e-n)/(t-n):0}function Js(n,t,e){return(1-e)*n+e*t}function $f(n,t,e,i){return Js(n,t,1-Math.exp(-e*i))}function Jf(n,t=1){return t-Math.abs(tc(n,t*2)-t)}function Kf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function jf(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Qf(n,t){return n+Math.floor(Math.random()*(t-n+1))}function td(n,t){return n+Math.random()*(t-n)}function ed(n){return n*(.5-Math.random())}function nd(n){n!==void 0&&(eh=n);let t=eh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function id(n){return n*$s}function sd(n){return n*ys}function rd(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function od(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ad(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ld(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),f=r((t-i)/2),u=o((t-i)/2),p=r((i-t)/2),_=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*f,l*u,a*c);break;case"YZY":n.set(l*u,a*h,l*f,a*c);break;case"ZXZ":n.set(l*f,l*u,a*h,a*c);break;case"XZX":n.set(a*h,l*_,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*_,a*c);break;case"ZYZ":n.set(l*_,l*p,a*h,a*c);break;default:Pt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ds(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Gi={DEG2RAD:$s,RAD2DEG:ys,generateUUID:Ds,clamp:Zt,euclideanModulo:tc,mapLinear:Yf,inverseLerp:Zf,lerp:Js,damp:$f,pingpong:Jf,smoothstep:Kf,smootherstep:jf,randInt:Qf,randFloat:td,randFloatSpread:ed,seededRandom:nd,degToRad:id,radToDeg:sd,isPowerOfTwo:rd,ceilPowerOfTwo:od,floorPowerOfTwo:ad,setQuaternionFromProperEuler:ld,normalize:Xe,denormalize:ds},Xt=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3];if(f!==v||l!==u||c!==p||h!==_){let x=l*u+c*p+h*_+f*v;x<0&&(u=-u,p=-p,_=-_,v=-v,x=-x);let g=1-a;if(x<.9995){let C=Math.acos(x),D=Math.sin(C);g=Math.sin(g*C)/D,a=Math.sin(a*C)/D,l=l*g+u*a,c=c*g+p*a,h=h*g+_*a,f=f*g+v*a}else{l=l*g+u*a,c=c*g+p*a,h=h*g+_*a,f=f*g+v*a;let C=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=C,c*=C,h*=C,f*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],u=r[o+1],p=r[o+2],_=r[o+3];return t[e]=a*_+h*f+l*p-c*u,t[e+1]=l*_+h*u+c*f-a*p,t[e+2]=c*_+h*p+a*u-l*f,t[e+3]=h*_-a*f-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),u=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*p*_,this._y=c*p*f-u*h*_,this._z=c*h*_+u*p*f,this._w=c*h*f-u*p*_;break;case"YXZ":this._x=u*h*f+c*p*_,this._y=c*p*f-u*h*_,this._z=c*h*_-u*p*f,this._w=c*h*f+u*p*_;break;case"ZXY":this._x=u*h*f-c*p*_,this._y=c*p*f+u*h*_,this._z=c*h*_+u*p*f,this._w=c*h*f-u*p*_;break;case"ZYX":this._x=u*h*f-c*p*_,this._y=c*p*f+u*h*_,this._z=c*h*_-u*p*f,this._w=c*h*f+u*p*_;break;case"YZX":this._x=u*h*f+c*p*_,this._y=c*p*f+u*h*_,this._z=c*h*_-u*p*f,this._w=c*h*f-u*p*_;break;case"XZY":this._x=u*h*f-c*p*_,this._y=c*p*f-u*h*_,this._z=c*h*_+u*p*f,this._w=c*h*f+u*p*_;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=i+a+f;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){let p=2*Math.sqrt(1+i-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){let p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return el.copy(this).projectOnVector(t),this.sub(el)}reflect(t){return this.sub(el.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Zt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},el=new Z,nh=new Dn,Bt=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],p=i[5],_=i[8],v=s[0],x=s[3],g=s[6],C=s[1],D=s[4],w=s[7],I=s[2],R=s[5],F=s[8];return r[0]=o*v+a*C+l*I,r[3]=o*x+a*D+l*R,r[6]=o*g+a*w+l*F,r[1]=c*v+h*C+f*I,r[4]=c*x+h*D+f*R,r[7]=c*g+h*w+f*F,r[2]=u*v+p*C+_*I,r[5]=u*x+p*D+_*R,r[8]=u*g+p*w+_*F,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,p=c*r-o*l,_=e*f+i*u+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/_;return t[0]=f*v,t[1]=(s*c-h*i)*v,t[2]=(a*i-s*o)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ni("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nl.makeScale(t,e)),this}rotate(t){return Ni("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nl.makeRotation(-t)),this}translate(t,e){return Ni("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},nl=new Bt,ih=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cd(){let n={enabled:!0,workingColorSpace:js,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ee&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ee&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?Qs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ni("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ni("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[js]:{primaries:t,whitePoint:i,transfer:Qs,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:t,whitePoint:i,transfer:ee,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}}),n}var Jt=cd();function Yn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ps(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ts,vo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ts===void 0&&(ts=tr("canvas")),ts.width=t.width,ts.height=t.height;let s=ts.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ts}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=tr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Yn(e[i]/255)*255):e[i]=Yn(e[i]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hd=0,vs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Ds(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(il(s[o].image)):r.push(il(s[o]))}else r=il(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function il(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}var ud=0,sl=new Z,Ye=class n extends Ln{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Rn,s=Rn,r=Ue,o=yi,a=dn,l=tn,c=n.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Ds(),this.name="",this.source=new vs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sl).x}get height(){return this.source.getSize(sl).y}get depth(){return this.source.getSize(sl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gs:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case _o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gs:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case _o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Wl;Ye.DEFAULT_ANISOTROPY=1;var me=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],_=l[9],v=l[2],x=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(_-x)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(_+x)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let D=(c+1)/2,w=(p+1)/2,I=(g+1)/2,R=(h+u)/4,F=(f+v)/4,S=(_+x)/4;return D>w&&D>I?D<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(D),s=R/i,r=F/i):w>I?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=R/s,r=S/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=F/r,s=S/r),this.set(i,s,r,e),this}let C=Math.sqrt((x-_)*(x-_)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(C)<.001&&(C=1),this.x=(x-_)/C,this.y=(f-v)/C,this.z=(u-h)/C,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Zt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Mo=class extends Ln{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new Ye(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ue,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new vs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends Mo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},er=class extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var So=class extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ie=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,o,a,l,c,h,f,u,p,_,v,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,f,u,p,_,v,x)}set(t,e,i,s,r,o,a,l,c,h,f,u,p,_,v,x){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=p,g[7]=_,g[11]=v,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/es.setFromMatrixColumn(t,0).length(),r=1/es.setFromMatrixColumn(t,1).length(),o=1/es.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=o*h,p=o*f,_=a*h,v=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=p+_*c,e[5]=u-v*c,e[9]=-a*l,e[2]=v-u*c,e[6]=_+p*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,p=l*f,_=c*h,v=c*f;e[0]=u+v*a,e[4]=_*a-p,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=p*a-_,e[6]=v+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,p=l*f,_=c*h,v=c*f;e[0]=u-v*a,e[4]=-o*f,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,p=o*f,_=a*h,v=a*f;e[0]=l*h,e[4]=_*c-p,e[8]=u*c+v,e[1]=l*f,e[5]=v*c+u,e[9]=p*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,p=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=v-u*f,e[8]=_*f+p,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*f+_,e[10]=u-v*f}else if(t.order==="XZY"){let u=o*l,p=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+v,e[5]=o*h,e[9]=p*f-_,e[2]=_*f-p,e[6]=a*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fd,t,dd)}lookAt(t,e,i){let s=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),oi.crossVectors(i,sn),oi.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),oi.crossVectors(i,sn)),oi.normalize(),Vr.crossVectors(sn,oi),s[0]=oi.x,s[4]=Vr.x,s[8]=sn.x,s[1]=oi.y,s[5]=Vr.y,s[9]=sn.y,s[2]=oi.z,s[6]=Vr.z,s[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],p=i[13],_=i[2],v=i[6],x=i[10],g=i[14],C=i[3],D=i[7],w=i[11],I=i[15],R=s[0],F=s[4],S=s[8],N=s[12],k=s[1],W=s[5],$=s[9],tt=s[13],G=s[2],Q=s[6],ot=s[10],rt=s[14],mt=s[3],it=s[7],at=s[11],pt=s[15];return r[0]=o*R+a*k+l*G+c*mt,r[4]=o*F+a*W+l*Q+c*it,r[8]=o*S+a*$+l*ot+c*at,r[12]=o*N+a*tt+l*rt+c*pt,r[1]=h*R+f*k+u*G+p*mt,r[5]=h*F+f*W+u*Q+p*it,r[9]=h*S+f*$+u*ot+p*at,r[13]=h*N+f*tt+u*rt+p*pt,r[2]=_*R+v*k+x*G+g*mt,r[6]=_*F+v*W+x*Q+g*it,r[10]=_*S+v*$+x*ot+g*at,r[14]=_*N+v*tt+x*rt+g*pt,r[3]=C*R+D*k+w*G+I*mt,r[7]=C*F+D*W+w*Q+I*it,r[11]=C*S+D*$+w*ot+I*at,r[15]=C*N+D*tt+w*rt+I*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],p=t[14],_=t[3],v=t[7],x=t[11],g=t[15],C=l*p-c*u,D=a*p-c*f,w=a*u-l*f,I=o*p-c*h,R=o*u-l*h,F=o*f-a*h;return e*(v*C-x*D+g*w)-i*(_*C-x*I+g*R)+s*(_*D-v*I+g*F)-r*(_*w-v*R+x*F)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],p=t[11],_=t[12],v=t[13],x=t[14],g=t[15],C=e*a-i*o,D=e*l-s*o,w=e*c-r*o,I=i*l-s*a,R=i*c-r*a,F=s*c-r*l,S=h*v-f*_,N=h*x-u*_,k=h*g-p*_,W=f*x-u*v,$=f*g-p*v,tt=u*g-p*x,G=C*tt-D*$+w*W+I*k-R*N+F*S;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Q=1/G;return t[0]=(a*tt-l*$+c*W)*Q,t[1]=(s*$-i*tt-r*W)*Q,t[2]=(v*F-x*R+g*I)*Q,t[3]=(u*R-f*F-p*I)*Q,t[4]=(l*k-o*tt-c*N)*Q,t[5]=(e*tt-s*k+r*N)*Q,t[6]=(x*w-_*F-g*D)*Q,t[7]=(h*F-u*w+p*D)*Q,t[8]=(o*$-a*k+c*S)*Q,t[9]=(i*k-e*$-r*S)*Q,t[10]=(_*R-v*w+g*C)*Q,t[11]=(f*w-h*R-p*C)*Q,t[12]=(a*N-o*W-l*S)*Q,t[13]=(e*W-i*N+s*S)*Q,t[14]=(v*D-_*I-x*C)*Q,t[15]=(h*I-f*D+u*C)*Q,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,p=r*h,_=r*f,v=o*h,x=o*f,g=a*f,C=l*c,D=l*h,w=l*f,I=i.x,R=i.y,F=i.z;return s[0]=(1-(v+g))*I,s[1]=(p+w)*I,s[2]=(_-D)*I,s[3]=0,s[4]=(p-w)*R,s[5]=(1-(u+g))*R,s[6]=(x+C)*R,s[7]=0,s[8]=(_+D)*F,s[9]=(x-C)*F,s[10]=(1-(u+v))*F,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=es.set(s[0],s[1],s[2]).length(),a=es.set(s[4],s[5],s[6]).length(),l=es.set(s[8],s[9],s[10]).length();r<0&&(o=-o),mn.copy(this);let c=1/o,h=1/a,f=1/l;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=h,mn.elements[5]*=h,mn.elements[6]*=h,mn.elements[8]*=f,mn.elements[9]*=f,mn.elements[10]*=f,e.setFromRotationMatrix(mn),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=_n,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),p=(i+s)/(i-s),_,v;if(l)_=r/(o-r),v=o*r/(o-r);else if(a===_n)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===xs)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=_n,l=!1){let c=this.elements,h=2/(e-t),f=2/(i-s),u=-(e+t)/(e-t),p=-(i+s)/(i-s),_,v;if(l)_=1/(o-r),v=o/(o-r);else if(a===_n)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===xs)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},es=new Z,mn=new ie,fd=new Z(0,0,0),dd=new Z(1,1,1),oi=new Z,Vr=new Z,sn=new Z,rh=new ie,oh=new Dn,Zn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oh.setFromEuler(this),this.setFromQuaternion(oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var Ms=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},pd=0,ah=new Z,ns=new Dn,Gn=new ie,Gr=new Z,Ws=new Z,md=new Z,gd=new Dn,lh=new Z(1,0,0),ch=new Z(0,1,0),hh=new Z(0,0,1),uh={type:"added"},xd={type:"removed"},is={type:"childadded",child:null},rl={type:"childremoved",child:null},Te=class n extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new Z,e=new Zn,i=new Dn,s=new Z(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Bt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ms,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(lh,t)}rotateY(t){return this.rotateOnAxis(ch,t)}rotateZ(t){return this.rotateOnAxis(hh,t)}translateOnAxis(t,e){return ah.copy(t).applyQuaternion(this.quaternion),this.position.add(ah.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lh,t)}translateY(t){return this.translateOnAxis(ch,t)}translateZ(t){return this.translateOnAxis(hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Gr.copy(t):Gr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Ws,Gr,this.up):Gn.lookAt(Gr,Ws,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(Gn),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Nt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uh),is.child=t,this.dispatchEvent(is),is.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xd),rl.child=t,this.dispatchEvent(rl),rl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uh),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,md),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,gd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Te.DEFAULT_UP=new Z(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=class extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}},_d={type:"move"},Ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let v of t.hand.values()){let x=e.getJointPose(v,i),g=this._getHandJoint(c,v);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_d)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new In;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function ol(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var kt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Jt.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Jt.workingColorSpace){if(t=tc(t,1),e=Zt(e,0,1),i=Zt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ol(o,r,t+1/3),this.g=ol(o,r,t),this.b=ol(o,r,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ee){function i(r){r!==void 0&&parseFloat(r)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){let i=fu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return Jt.workingToColorSpace(ke.copy(this),t),Math.round(Zt(ke.r*255,0,255))*65536+Math.round(Zt(ke.g*255,0,255))*256+Math.round(Zt(ke.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(ke.copy(this),e);let i=ke.r,s=ke.g,r=ke.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Ee){Jt.workingToColorSpace(ke.copy(this),t);let e=ke.r,i=ke.g,s=ke.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(Hr);let i=Js(ai.h,Hr.h,e),s=Js(ai.s,Hr.s,e),r=Js(ai.l,Hr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new kt;kt.NAMES=fu;var bs=class extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},gn=new Z,Hn=new Z,al=new Z,Wn=new Z,ss=new Z,rs=new Z,fh=new Z,ll=new Z,cl=new Z,hl=new Z,ul=new me,fl=new me,dl=new me,ui=class n{constructor(t=new Z,e=new Z,i=new Z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),gn.subVectors(t,e),s.cross(gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){gn.subVectors(s,e),Hn.subVectors(i,e),al.subVectors(t,e);let o=gn.dot(gn),a=gn.dot(Hn),l=gn.dot(al),c=Hn.dot(Hn),h=Hn.dot(al),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,p=(c*l-a*h)*u,_=(o*h-a*l)*u;return r.set(1-p-_,_,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return ul.setScalar(0),fl.setScalar(0),dl.setScalar(0),ul.fromBufferAttribute(t,e),fl.fromBufferAttribute(t,i),dl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ul,r.x),o.addScaledVector(fl,r.y),o.addScaledVector(dl,r.z),o}static isFrontFacing(t,e,i,s){return gn.subVectors(i,e),Hn.subVectors(t,e),gn.cross(Hn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),gn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;ss.subVectors(s,i),rs.subVectors(r,i),ll.subVectors(t,i);let l=ss.dot(ll),c=rs.dot(ll);if(l<=0&&c<=0)return e.copy(i);cl.subVectors(t,s);let h=ss.dot(cl),f=rs.dot(cl);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(ss,o);hl.subVectors(t,r);let p=ss.dot(hl),_=rs.dot(hl);if(_>=0&&p<=_)return e.copy(r);let v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(rs,a);let x=h*_-p*f;if(x<=0&&f-h>=0&&p-_>=0)return fh.subVectors(r,s),a=(f-h)/(f-h+(p-_)),e.copy(s).addScaledVector(fh,a);let g=1/(x+v+u);return o=v*g,a=u*g,e.copy(i).addScaledVector(ss,o).addScaledVector(rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Nn=class{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wr.copy(i.boundingBox)),Wr.applyMatrix4(t.matrixWorld),this.union(Wr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xs),Xr.subVectors(this.max,Xs),os.subVectors(t.a,Xs),as.subVectors(t.b,Xs),ls.subVectors(t.c,Xs),li.subVectors(as,os),ci.subVectors(ls,as),Ii.subVectors(os,ls);let e=[0,-li.z,li.y,0,-ci.z,ci.y,0,-Ii.z,Ii.y,li.z,0,-li.x,ci.z,0,-ci.x,Ii.z,0,-Ii.x,-li.y,li.x,0,-ci.y,ci.x,0,-Ii.y,Ii.x,0];return!pl(e,os,as,ls,Xr)||(e=[1,0,0,0,1,0,0,0,1],!pl(e,os,as,ls,Xr))?!1:(qr.crossVectors(li,ci),e=[qr.x,qr.y,qr.z],pl(e,os,as,ls,Xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Xn=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],xn=new Z,Wr=new Nn,os=new Z,as=new Z,ls=new Z,li=new Z,ci=new Z,Ii=new Z,Xs=new Z,Xr=new Z,qr=new Z,Pi=new Z;function pl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Pi.fromArray(n,r);let a=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),l=t.dot(Pi),c=e.dot(Pi),h=i.dot(Pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var be=new Z,Yr=new Xt,yd=0,un=class extends Ln{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=au,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Yr.fromBufferAttribute(this,e),Yr.applyMatrix3(t),this.setXY(e,Yr.x,Yr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ds(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Xe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),i=Xe(i,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var nr=class extends un{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ir=class extends un{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Le=class extends un{constructor(t,e,i){super(new Float32Array(t),e,i)}},vd=new Nn,qs=new Z,ml=new Z,Ui=class{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):vd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qs.subVectors(t,this.center);let e=qs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(qs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ml.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qs.copy(t.center).add(ml)),this.expandByPoint(qs.copy(t.center).sub(ml))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Md=0,hn=new ie,gl=new Te,cs=new Z,rn=new Nn,Ys=new Nn,Pe=new Z,Ze=class n extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xf(t)?ir:nr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Bt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,i){return hn.makeTranslation(t,e,i),this.applyMatrix4(hn),this}scale(t,e,i){return hn.makeScale(t,e,i),this.applyMatrix4(hn),this}lookAt(t){return gl.lookAt(t),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Le(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let i=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(rn.min,Ys.min),rn.expandByPoint(Pe),Pe.addVectors(rn.max,Ys.max),rn.expandByPoint(Pe)):(rn.expandByPoint(Ys.min),rn.expandByPoint(Ys.max))}rn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Pe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pe.fromBufferAttribute(a,c),l&&(cs.fromBufferAttribute(t,c),Pe.add(cs)),s=Math.max(s,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new un(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new Z,l[S]=new Z;let c=new Z,h=new Z,f=new Z,u=new Xt,p=new Xt,_=new Xt,v=new Z,x=new Z;function g(S,N,k){c.fromBufferAttribute(i,S),h.fromBufferAttribute(i,N),f.fromBufferAttribute(i,k),u.fromBufferAttribute(r,S),p.fromBufferAttribute(r,N),_.fromBufferAttribute(r,k),h.sub(c),f.sub(c),p.sub(u),_.sub(u);let W=1/(p.x*_.y-_.x*p.y);isFinite(W)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(W),x.copy(f).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(W),a[S].add(v),a[N].add(v),a[k].add(v),l[S].add(x),l[N].add(x),l[k].add(x))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let S=0,N=C.length;S<N;++S){let k=C[S],W=k.start,$=k.count;for(let tt=W,G=W+$;tt<G;tt+=3)g(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}let D=new Z,w=new Z,I=new Z,R=new Z;function F(S){I.fromBufferAttribute(s,S),R.copy(I);let N=a[S];D.copy(N),D.sub(I.multiplyScalar(I.dot(N))).normalize(),w.crossVectors(R,N);let W=w.dot(l[S])<0?-1:1;o.setXYZW(S,D.x,D.y,D.z,W)}for(let S=0,N=C.length;S<N;++S){let k=C[S],W=k.start,$=k.count;for(let tt=W,G=W+$;tt<G;tt+=3)F(t.getX(tt+0)),F(t.getX(tt+1)),F(t.getX(tt+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new Z,r=new Z,o=new Z,a=new Z,l=new Z,c=new Z,h=new Z,f=new Z;if(t)for(let u=0,p=t.count;u<p;u+=3){let _=t.getX(u+0),v=t.getX(u+1),x=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,x),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,x),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h),p=0,_=0;for(let v=0,x=l.length;v<x;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*h;for(let g=0;g<h;g++)u[_++]=c[p++]}return new un(u,h,f)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){let u=c[h],p=t(u,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let p=c[f];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var xl=new Z,Sd=new Z,bd=new Bt,qe=class{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=xl.subVectors(i,e).cross(Sd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(xl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||bd.getNormalMatrix(t),s=this.coplanarPoint(xl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Ed=0,$n=class extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=Is,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Fl,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=co,this.stencilZFail=co,this.stencilZPass=co,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new qe().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Xt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var qn=new Z,_l=new Z,Zr=new Z,$r=new Z,fi=class{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){_l.copy(t).add(e).multiplyScalar(.5),Zr.copy(e).sub(t).normalize(),$r.copy(this.origin).sub(_l);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Zr),a=$r.dot(this.direction),l=-$r.dot(Zr),c=$r.lengthSq(),h=Math.abs(1-o*o),f,u,p,_;if(h>0)if(f=o*l-a,u=o*a-l,_=r*h,f>=0)if(u>=-_)if(u<=_){let v=1/h;f*=v,u*=v,p=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u<=-_?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c):u<=_?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(_l).addScaledVector(Zr,u),p}intersectSphere(t,e){if(t.radius<0)return null;qn.subVectors(t.center,this.origin);let i=qn.dot(this.direction),s=qn.dot(qn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,f=t.x-o.x,u=t.y-o.y,p=t.z-o.z,_=e.x-o.x,v=e.y-o.y,x=e.z-o.z,g=i.x-o.x,C=i.y-o.y,D=i.z-o.z,w=Math.abs(l),I=Math.abs(c),R=Math.abs(h),F,S,N,k,W,$,tt,G,Q,ot,rt,mt;if(w>=I&&w>=R?(N=l,$=f,Q=_,mt=g,l>=0?(F=c,S=h,k=u,W=p,tt=v,G=x,ot=C,rt=D):(F=h,S=c,k=p,W=u,tt=x,G=v,ot=D,rt=C)):I>=R?(N=c,$=u,Q=v,mt=C,c>=0?(F=h,S=l,k=p,W=f,tt=x,G=_,ot=D,rt=g):(F=l,S=h,k=f,W=p,tt=_,G=x,ot=g,rt=D)):(N=h,$=p,Q=x,mt=D,h>=0?(F=l,S=c,k=f,W=u,tt=_,G=v,ot=g,rt=C):(F=c,S=l,k=u,W=f,tt=v,G=_,ot=C,rt=g)),N===0)return null;let it=F/N,at=S/N,pt=1/N,At=k-it*$,Tt=W-at*$,jt=tt-it*Q,qt=G-at*Q,$t=ot-it*mt,lt=rt-at*mt,ft=$t*qt-lt*jt,bt=At*lt-Tt*$t,Ft=jt*Tt-qt*At;if(s){if(ft<0||bt<0||Ft<0)return null}else if((ft<0||bt<0||Ft<0)&&(ft>0||bt>0||Ft>0))return null;let St=ft+bt+Ft;if(St===0)return null;let Lt=pt*(ft*$+bt*Q+Ft*mt);return(St>0?Lt<0:Lt>0)?null:this.at(Lt/St,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Fi=class extends $n{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},dh=new ie,Li=new fi,Jr=new Ui,ph=new Z,Kr=new Z,jr=new Z,Qr=new Z,yl=new Z,to=new Z,mh=new Z,eo=new Z,we=class extends Te{constructor(t=new Ze,e=new Fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){to.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],f=r[l];h!==0&&(yl.fromBufferAttribute(f,t),o?to.addScaledVector(yl,h):to.addScaledVector(yl.sub(e),h))}e.add(to)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jr.copy(i.boundingSphere),Jr.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(Jr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Jr,ph)===null||Li.origin.distanceToSquared(ph)>(t.far-t.near)**2))&&(dh.copy(r).invert(),Li.copy(t.ray).applyMatrix4(dh),!(i.boundingBox!==null&&Li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=u.length;_<v;_++){let x=u[_],g=o[x.materialIndex],C=Math.max(x.start,p.start),D=Math.min(a.count,Math.min(x.start+x.count,p.start+p.count));for(let w=C,I=D;w<I;w+=3){let R=a.getX(w),F=a.getX(w+1),S=a.getX(w+2);s=no(this,g,t,i,c,h,f,R,F,S),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let x=_,g=v;x<g;x+=3){let C=a.getX(x),D=a.getX(x+1),w=a.getX(x+2);s=no(this,o,t,i,c,h,f,C,D,w),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=u.length;_<v;_++){let x=u[_],g=o[x.materialIndex],C=Math.max(x.start,p.start),D=Math.min(l.count,Math.min(x.start+x.count,p.start+p.count));for(let w=C,I=D;w<I;w+=3){let R=w,F=w+1,S=w+2;s=no(this,g,t,i,c,h,f,R,F,S),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let x=_,g=v;x<g;x+=3){let C=x,D=x+1,w=x+2;s=no(this,o,t,i,c,h,f,C,D,w),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function wd(n,t,e,i,s,r,o,a){let l;if(t.side===Fe?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Fn,a),l===null)return null;eo.copy(a),eo.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(eo);return c<e.near||c>e.far?null:{distance:c,point:eo.clone(),object:n}}function no(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Kr),n.getVertexPosition(l,jr),n.getVertexPosition(c,Qr);let h=wd(n,t,e,i,Kr,jr,Qr,mh);if(h){let f=new Z;ui.getBarycoord(mh,Kr,jr,Qr,f),s&&(h.uv=ui.getInterpolatedAttribute(s,a,l,c,f,new Xt)),r&&(h.uv1=ui.getInterpolatedAttribute(r,a,l,c,f,new Xt)),o&&(h.normal=ui.getInterpolatedAttribute(o,a,l,c,f,new Z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new Z,materialIndex:0};ui.getNormal(Kr,jr,Qr,u.normal),h.face=u,h.barycoord=f}return h}var bo=class extends Ye{constructor(t=null,e=1,i=1,s,r,o,a,l,c=De,h=De,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Di=new Ui,Td=new Xt(.5,.5),io=new Z,Es=class{constructor(t=new qe,e=new qe,i=new qe,s=new qe,r=new qe,o=new qe){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=_n,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],p=r[7],_=r[8],v=r[9],x=r[10],g=r[11],C=r[12],D=r[13],w=r[14],I=r[15];if(s[0].setComponents(c-o,p-h,g-_,I-C).normalize(),s[1].setComponents(c+o,p+h,g+_,I+C).normalize(),s[2].setComponents(c+a,p+f,g+v,I+D).normalize(),s[3].setComponents(c-a,p-f,g-v,I-D).normalize(),i)s[4].setComponents(l,u,x,w).normalize(),s[5].setComponents(c-l,p-u,g-x,I-w).normalize();else if(s[4].setComponents(c-l,p-u,g-x,I-w).normalize(),e===_n)s[5].setComponents(c+l,p+u,g+x,I+w).normalize();else if(e===xs)s[5].setComponents(l,u,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){Di.center.set(0,0,0);let e=Td.distanceTo(t.center);return Di.radius=.7071067811865476+e,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(io.x=s.normal.x>0?t.max.x:t.min.x,io.y=s.normal.y>0?t.max.y:t.min.y,io.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(io)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Oi=class extends $n{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Eo=new Z,wo=new Z,gh=new ie,Zs=new fi,so=new Ui,vl=new Z,xh=new Z,ws=class extends Te{constructor(t=new Ze,e=new Oi){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Eo.fromBufferAttribute(e,s-1),wo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Eo.distanceTo(wo);t.setAttribute("lineDistance",new Le(i,1))}else Pt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(s),so.radius+=r,t.ray.intersectsSphere(so)===!1)return;gh.copy(s).invert(),Zs.copy(t.ray).applyMatrix4(gh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let v=p,x=_-1;v<x;v+=c){let g=h.getX(v),C=h.getX(v+1),D=ro(this,t,Zs,l,g,C,v);D&&e.push(D)}if(this.isLineLoop){let v=h.getX(_-1),x=h.getX(p),g=ro(this,t,Zs,l,v,x,_-1);g&&e.push(g)}}else{let p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=p,x=_-1;v<x;v+=c){let g=ro(this,t,Zs,l,v,v+1,v);g&&e.push(g)}if(this.isLineLoop){let v=ro(this,t,Zs,l,_-1,p,_-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ro(n,t,e,i,s,r,o){let a=n.geometry.attributes.position;if(Eo.fromBufferAttribute(a,s),wo.fromBufferAttribute(a,r),e.distanceSqToSegment(Eo,wo,vl,xh)>i)return;vl.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(vl);if(!(c<t.near||c>t.far))return{distance:c,point:xh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var _h=new Z,yh=new Z,sr=class extends ws{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)_h.fromBufferAttribute(e,s),yh.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+_h.distanceTo(yh);t.setAttribute("lineDistance",new Le(i,1))}else Pt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var rr=class extends Ye{constructor(t=[],e=_i,i,s,r,o,a,l,c,h){super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Bi=class extends Ye{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var di=class extends Ye{constructor(t,e,i=vn,s,r,o,a=De,l=De,c,h=Pn,f=1){if(h!==Pn&&h!==vi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new vs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},To=class extends di{constructor(t,e=vn,i=_i,s,r,o=De,a=De,l,c=Pn){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},or=class extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},pi=class n extends Ze{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],f=[],u=0,p=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(f,2));function _(v,x,g,C,D,w,I,R,F,S,N){let k=w/F,W=I/S,$=w/2,tt=I/2,G=R/2,Q=F+1,ot=S+1,rt=0,mt=0,it=new Z;for(let at=0;at<ot;at++){let pt=at*W-tt;for(let At=0;At<Q;At++){let Tt=At*k-$;it[v]=Tt*C,it[x]=pt*D,it[g]=G,c.push(it.x,it.y,it.z),it[v]=0,it[x]=0,it[g]=R>0?1:-1,h.push(it.x,it.y,it.z),f.push(At/F),f.push(1-at/S),rt+=1}}for(let at=0;at<S;at++)for(let pt=0;pt<F;pt++){let At=u+pt+Q*at,Tt=u+pt+Q*(at+1),jt=u+(pt+1)+Q*(at+1),qt=u+(pt+1)+Q*at;l.push(At,Tt,qt),l.push(Tt,jt,qt),mt+=6}a.addGroup(p,mt,N),p+=mt,u+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Un=class n extends Ze{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,p=[],_=[],v=[],x=[];for(let g=0;g<h;g++){let C=g*u-o;for(let D=0;D<c;D++){let w=D*f-r;_.push(w,-C,0),v.push(0,0,1),x.push(D/a),x.push(1-g/l)}}for(let g=0;g<l;g++)for(let C=0;C<a;C++){let D=C+c*g,w=C+c*(g+1),I=C+1+c*(g+1),R=C+1+c*g;p.push(D,w,R),p.push(w,I,R)}this.setIndex(p),this.setAttribute("position",new Le(_,3)),this.setAttribute("normal",new Le(v,3)),this.setAttribute("uv",new Le(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function Hi(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(vh(s))s.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(vh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Ve(n){let t={};for(let e=0;e<n.length;e++){let i=Hi(n[e]);for(let s in i)t[s]=i[s]}return t}function vh(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ad(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ec(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var du={clone:Hi,merge:Ve},Cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends $n{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cd,this.fragmentShader=Rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=Ad(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new kt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Xt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new Z().fromArray(s.value);break;case"v4":this.uniforms[i].value=new me().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Bt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ie().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ao=class extends on{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Jn=class extends $n{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ca,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ar=class extends Jn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Co=class extends $n{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ro=class extends $n{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function hs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Ml(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var mi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Io=class extends mi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:El,endingEnd:El}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case wl:r=t,a=2*e-i;break;case Tl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case wl:o=t,l=2*i-e;break;case Tl:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,_=(i-e)/(s-e),v=_*_,x=v*_,g=-u*x+2*u*v-u*_,C=(1+u)*x+(-1.5-2*u)*v+(-.5+u)*_+1,D=(-1-p)*x+(1.5+p)*v+.5*_,w=p*x-p*v;for(let I=0;I!==a;++I)r[I]=g*o[h+I]+C*o[c+I]+D*o[l+I]+w*o[f+I];return r}},Po=class extends mi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),f=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*f+o[l+u]*h;return r}},Lo=class extends mi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Do=class extends mi{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let _=(i-e)/(s-e),v=1-_;for(let x=0;x!==a;++x)r[x]=o[c+x]*v+o[l+x]*_;return r}let u=a*2,p=t-1;for(let _=0;_!==a;++_){let v=o[c+_],x=o[l+_],g=p*u+_*2,C=f[g],D=f[g+1],w=t*u+_*2,I=h[w],R=h[w+1],F=Pd(i,e,C,I,s);r[_]=pu(F,v,D,R,x)}return r}};function pu(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Id(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Pd(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=pu(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Id(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var an=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=hs(e,this.TimeBufferType),this.values=hs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:hs(t.times,Array),values:hs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Ml(t.settings)&&(i.settings={inTangents:hs(t.settings.inTangents,Array),outTangents:hs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Lo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Po(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Do(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ks:e=this.InterpolantFactoryMethodDiscrete;break;case yo:e=this.InterpolantFactoryMethodLinear;break;case lo:e=this.InterpolantFactoryMethodSmooth;break;case bl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Pt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return yo;case this.InterpolantFactoryMethodSmooth:return lo;case this.InterpolantFactoryMethodBezier:return bl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Ml(this.settings)&&(Mh(this.settings.inTangents,t),Mh(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Nt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Nt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Nt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Nt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&qf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Nt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===lo,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*i,u=f-i,p=f+i;for(let _=0;_!==i;++_){let v=e[f+_];if(v!==e[u+_]||v!==e[p+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*i,u=o*i;for(let p=0;p!==i;++p)e[u+p]=e[f+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ml(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Mh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=yo;var gi=class extends an{constructor(t,e,i){super(t,e,i)}};gi.prototype.ValueTypeName="bool";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=Ks;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var No=class extends an{constructor(t,e,i,s){super(t,e,i,s)}};No.prototype.ValueTypeName="color";var Uo=class extends an{constructor(t,e,i,s){super(t,e,i,s)}};Uo.prototype.ValueTypeName="number";var Fo=class extends mi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Dn.slerpFlat(r,0,o,c-a,o,c,l);return r}},lr=class extends an{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Fo(this.times,this.values,this.getValueSize(),t)}};lr.prototype.ValueTypeName="quaternion";lr.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends an{constructor(t,e,i){super(t,e,i)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Ks;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oo=class extends an{constructor(t,e,i,s){super(t,e,i,s)}};Oo.prototype.ValueTypeName="vector";var Bo=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},mu=new Bo,zo=class{constructor(t){this.manager=t!==void 0?t:mu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};zo.DEFAULT_MATERIAL_NAME="__DEFAULT";var cr=class extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ts=class extends cr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Sl=new ie,Sh=new Z,bh=new Z,ko=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sh),bh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(bh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Sl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===xs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Sl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},oo=new Z,ao=new Dn,Cn=new Z,hr=class extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(oo,ao,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,ao,Cn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(oo,ao,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oo,ao,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},hi=new Z,Eh=new Xt,wh=new Xt,je=class extends hr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ys*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(hi.x,hi.y).multiplyScalar(-t/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-t/hi.z)}getViewSize(t,e){return this.getViewBounds(t,Eh,wh),e.subVectors(wh,Eh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($s*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Kn=class extends hr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Al=class extends ko{constructor(){super(new Kn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},As=class extends cr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Al}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var us=-90,fs=1,Vo=class extends Te{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new je(us,fs,t,e);s.layers=this.layers,this.add(s);let r=new je(us,fs,t,e);r.layers=this.layers,this.add(r);let o=new je(us,fs,t,e);o.layers=this.layers,this.add(o);let a=new je(us,fs,t,e);a.layers=this.layers,this.add(a);let l=new je(us,fs,t,e);l.layers=this.layers,this.add(l);let c=new je(us,fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===_n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Go=class extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var nc="\\[\\]\\.:\\/",Ld=new RegExp("["+nc+"]","g"),ic="[^"+nc+"]",Dd="[^"+nc.replace("\\.","")+"]",Nd=/((?:WC+[\/:])*)/.source.replace("WC",ic),Ud=/(WCOD+)?/.source.replace("WCOD",Dd),Fd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ic),Od=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ic),Bd=new RegExp("^"+Nd+Ud+Fd+Od+"$"),zd=["material","materials","bones","map"],Cl=class{constructor(t,e,i){let s=i||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},de=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ld,"")}static parseTrackName(t){let e=Bd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);zd.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Nt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=Cl;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var g_=new Float32Array(1);var Th=new ie,Cs=class{constructor(t,e,i=0,s=1/0){this.ray=new fi(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Ms,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Nt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Th.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Th),this}intersectObject(t,e=!0,i=[]){return Rl(t,this,i,e),i.sort(Ah),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Rl(t[s],this,i,e);return i.sort(Ah),i}};function Ah(n,t){return n.distance-t.distance}function Rl(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Rl(r[o],t,e,!0)}}var Il=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};function sc(n,t,e,i){let s=kd(i);switch(e){case $l:return n*t;case Kl:return n*t/s.components*s.byteLength;case $o:return n*t/s.components*s.byteLength;case Mi:return n*t*2/s.components*s.byteLength;case Jo:return n*t*2/s.components*s.byteLength;case Jl:return n*t*3/s.components*s.byteLength;case dn:return n*t*4/s.components*s.byteLength;case Ko:return n*t*4/s.components*s.byteLength;case pr:case mr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case gr:case xr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Qo:case ea:return Math.max(n,16)*Math.max(t,8)/4;case jo:case ta:return Math.max(n,8)*Math.max(t,8)/2;case na:case ia:case ra:case oa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case sa:case _r:case aa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case la:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ca:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ha:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ua:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case fa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case da:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case pa:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ma:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ga:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case xa:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case _a:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ya:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case va:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ma:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Sa:case ba:case Ea:return Math.ceil(n/4)*Math.ceil(t/4)*16;case wa:case Ta:return Math.ceil(n/4)*Math.ceil(t/4)*8;case yr:case Aa:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kd(n){switch(n){case tn:case Xl:return{byteLength:1,components:1};case Ps:case ql:case Sn:return{byteLength:2,components:1};case Yo:case Zo:return{byteLength:2,components:4};case vn:case qo:case Mn:return{byteLength:4,components:1};case Yl:case Zl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ou(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Gd(n){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,h);else{f.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<f.length;p++){let _=f[u],v=f[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++u,f[u]=v)}f.length=u+1;for(let p=0,_=f.length;p<_;p++){let v=f[p];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$d=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ep=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,np=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ip=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ip=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Np=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Up=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Op=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,om=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,fm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_m=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Cm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Um=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Om=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Km=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ig=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,og=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ag=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ug=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:Hd,alphahash_pars_fragment:Wd,alphamap_fragment:Xd,alphamap_pars_fragment:qd,alphatest_fragment:Yd,alphatest_pars_fragment:Zd,aomap_fragment:$d,aomap_pars_fragment:Jd,batching_pars_vertex:Kd,batching_vertex:jd,begin_vertex:Qd,beginnormal_vertex:tp,bsdfs:ep,iridescence_fragment:np,bumpmap_pars_fragment:ip,clipping_planes_fragment:sp,clipping_planes_pars_fragment:rp,clipping_planes_pars_vertex:op,clipping_planes_vertex:ap,color_fragment:lp,color_pars_fragment:cp,color_pars_vertex:hp,color_vertex:up,common:fp,cube_uv_reflection_fragment:dp,defaultnormal_vertex:pp,displacementmap_pars_vertex:mp,displacementmap_vertex:gp,emissivemap_fragment:xp,emissivemap_pars_fragment:_p,colorspace_fragment:yp,colorspace_pars_fragment:vp,envmap_fragment:Mp,envmap_common_pars_fragment:Sp,envmap_pars_fragment:bp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Up,envmap_vertex:wp,fog_vertex:Tp,fog_pars_vertex:Ap,fog_fragment:Cp,fog_pars_fragment:Rp,gradientmap_pars_fragment:Ip,lightmap_pars_fragment:Pp,lights_lambert_fragment:Lp,lights_lambert_pars_fragment:Dp,lights_pars_begin:Np,lights_toon_fragment:Fp,lights_toon_pars_fragment:Op,lights_phong_fragment:Bp,lights_phong_pars_fragment:zp,lights_physical_fragment:kp,lights_physical_pars_fragment:Vp,lights_fragment_begin:Gp,lights_fragment_maps:Hp,lights_fragment_end:Wp,lightprobes_pars_fragment:Xp,logdepthbuf_fragment:qp,logdepthbuf_pars_fragment:Yp,logdepthbuf_pars_vertex:Zp,logdepthbuf_vertex:$p,map_fragment:Jp,map_pars_fragment:Kp,map_particle_fragment:jp,map_particle_pars_fragment:Qp,metalnessmap_fragment:tm,metalnessmap_pars_fragment:em,morphinstance_vertex:nm,morphcolor_vertex:im,morphnormal_vertex:sm,morphtarget_pars_vertex:rm,morphtarget_vertex:om,normal_fragment_begin:am,normal_fragment_maps:lm,normal_pars_fragment:cm,normal_pars_vertex:hm,normal_vertex:um,normalmap_pars_fragment:fm,clearcoat_normal_fragment_begin:dm,clearcoat_normal_fragment_maps:pm,clearcoat_pars_fragment:mm,iridescence_pars_fragment:gm,opaque_fragment:xm,packing:_m,premultiplied_alpha_fragment:ym,project_vertex:vm,dithering_fragment:Mm,dithering_pars_fragment:Sm,roughnessmap_fragment:bm,roughnessmap_pars_fragment:Em,shadowmap_pars_fragment:wm,shadowmap_pars_vertex:Tm,shadowmap_vertex:Am,shadowmask_pars_fragment:Cm,skinbase_vertex:Rm,skinning_pars_vertex:Im,skinning_vertex:Pm,skinnormal_vertex:Lm,specularmap_fragment:Dm,specularmap_pars_fragment:Nm,tonemapping_fragment:Um,tonemapping_pars_fragment:Fm,transmission_fragment:Om,transmission_pars_fragment:Bm,uv_pars_fragment:zm,uv_pars_vertex:km,uv_vertex:Vm,worldpos_vertex:Gm,background_vert:Hm,background_frag:Wm,backgroundCube_vert:Xm,backgroundCube_frag:qm,cube_vert:Ym,cube_frag:Zm,depth_vert:$m,depth_frag:Jm,distance_vert:Km,distance_frag:jm,equirect_vert:Qm,equirect_frag:tg,linedashed_vert:eg,linedashed_frag:ng,meshbasic_vert:ig,meshbasic_frag:sg,meshlambert_vert:rg,meshlambert_frag:og,meshmatcap_vert:ag,meshmatcap_frag:lg,meshnormal_vert:cg,meshnormal_frag:hg,meshphong_vert:ug,meshphong_frag:fg,meshphysical_vert:dg,meshphysical_frag:pg,meshtoon_vert:mg,meshtoon_frag:gg,points_vert:xg,points_frag:_g,shadow_vert:yg,shadow_frag:vg,sprite_vert:Mg,sprite_frag:Sg},yt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},zn={basic:{uniforms:Ve([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ve([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ve([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ve([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ve([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ve([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ve([yt.points,yt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ve([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ve([yt.common,yt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ve([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ve([yt.sprite,yt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:Ve([yt.common,yt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:Ve([yt.lights,yt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};zn.physical={uniforms:Ve([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Pa={r:0,b:0,g:0},bg=new ie,Bu=new Bt;Bu.set(-1,0,0,0,1,0,0,0,1);function Eg(n,t,e,i,s,r){let o=new kt(0),a=s===!0?0:1,l,c,h=null,f=0,u=null;function p(C){let D=C.isScene===!0?C.background:null;if(D&&D.isTexture){let w=C.backgroundBlurriness>0;D=t.get(D,w)}return D}function _(C){let D=!1,w=p(C);w===null?x(o,a):w&&w.isColor&&(x(w,1),D=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?e.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||D)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(C,D){let w=p(D);w&&(w.isCubeTexture||w.mapping===fr)?(c===void 0&&(c=new we(new pi(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Hi(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bg.makeRotationFromEuler(D.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Bu),c.material.toneMapped=Jt.getTransfer(w.colorSpace)!==ee,(h!==w||f!==w.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,u=n.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new we(new Un(2,2),new on({name:"BackgroundMaterial",uniforms:Hi(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(w.colorSpace)!==ee,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=w,f=w.version,u=n.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function x(C,D){C.getRGB(Pa,ec(n)),e.buffers.color.setClear(Pa.r,Pa.g,Pa.b,D,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(C,D=1){o.set(C),a=D,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(C){a=C,x(o,a)},render:_,addToRenderList:v,dispose:g}}function wg(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(W,$,tt,G,Q){let ot=!1,rt=f(W,G,tt,$);r!==rt&&(r=rt,c(r.object)),ot=p(W,G,tt,Q),ot&&_(W,G,tt,Q),Q!==null&&t.update(Q,n.ELEMENT_ARRAY_BUFFER),(ot||o)&&(o=!1,w(W,$,tt,G),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function l(){return n.createVertexArray()}function c(W){return n.bindVertexArray(W)}function h(W){return n.deleteVertexArray(W)}function f(W,$,tt,G){let Q=G.wireframe===!0,ot=i[$.id];ot===void 0&&(ot={},i[$.id]=ot);let rt=W.isInstancedMesh===!0?W.id:0,mt=ot[rt];mt===void 0&&(mt={},ot[rt]=mt);let it=mt[tt.id];it===void 0&&(it={},mt[tt.id]=it);let at=it[Q];return at===void 0&&(at=u(l()),it[Q]=at),at}function u(W){let $=[],tt=[],G=[];for(let Q=0;Q<e;Q++)$[Q]=0,tt[Q]=0,G[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:tt,attributeDivisors:G,object:W,attributes:{},index:null}}function p(W,$,tt,G){let Q=r.attributes,ot=$.attributes,rt=0,mt=tt.getAttributes();for(let it in mt)if(mt[it].location>=0){let pt=Q[it],At=ot[it];if(At===void 0&&(it==="instanceMatrix"&&W.instanceMatrix&&(At=W.instanceMatrix),it==="instanceColor"&&W.instanceColor&&(At=W.instanceColor)),pt===void 0||pt.attribute!==At||At&&pt.data!==At.data)return!0;rt++}return r.attributesNum!==rt||r.index!==G}function _(W,$,tt,G){let Q={},ot=$.attributes,rt=0,mt=tt.getAttributes();for(let it in mt)if(mt[it].location>=0){let pt=ot[it];pt===void 0&&(it==="instanceMatrix"&&W.instanceMatrix&&(pt=W.instanceMatrix),it==="instanceColor"&&W.instanceColor&&(pt=W.instanceColor));let At={};At.attribute=pt,pt&&pt.data&&(At.data=pt.data),Q[it]=At,rt++}r.attributes=Q,r.attributesNum=rt,r.index=G}function v(){let W=r.newAttributes;for(let $=0,tt=W.length;$<tt;$++)W[$]=0}function x(W){g(W,0)}function g(W,$){let tt=r.newAttributes,G=r.enabledAttributes,Q=r.attributeDivisors;tt[W]=1,G[W]===0&&(n.enableVertexAttribArray(W),G[W]=1),Q[W]!==$&&(n.vertexAttribDivisor(W,$),Q[W]=$)}function C(){let W=r.newAttributes,$=r.enabledAttributes;for(let tt=0,G=$.length;tt<G;tt++)$[tt]!==W[tt]&&(n.disableVertexAttribArray(tt),$[tt]=0)}function D(W,$,tt,G,Q,ot,rt){rt===!0?n.vertexAttribIPointer(W,$,tt,Q,ot):n.vertexAttribPointer(W,$,tt,G,Q,ot)}function w(W,$,tt,G){v();let Q=G.attributes,ot=tt.getAttributes(),rt=$.defaultAttributeValues;for(let mt in ot){let it=ot[mt];if(it.location>=0){let at=Q[mt];if(at===void 0&&(mt==="instanceMatrix"&&W.instanceMatrix&&(at=W.instanceMatrix),mt==="instanceColor"&&W.instanceColor&&(at=W.instanceColor)),at!==void 0){let pt=at.normalized,At=at.itemSize,Tt=t.get(at);if(Tt===void 0)continue;let jt=Tt.buffer,qt=Tt.type,$t=Tt.bytesPerElement,lt=qt===n.INT||qt===n.UNSIGNED_INT||at.gpuType===qo;if(at.isInterleavedBufferAttribute){let ft=at.data,bt=ft.stride,Ft=at.offset;if(ft.isInstancedInterleavedBuffer){for(let St=0;St<it.locationSize;St++)g(it.location+St,ft.meshPerAttribute);W.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let St=0;St<it.locationSize;St++)x(it.location+St);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let St=0;St<it.locationSize;St++)D(it.location+St,At/it.locationSize,qt,pt,bt*$t,(Ft+At/it.locationSize*St)*$t,lt)}else{if(at.isInstancedBufferAttribute){for(let ft=0;ft<it.locationSize;ft++)g(it.location+ft,at.meshPerAttribute);W.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ft=0;ft<it.locationSize;ft++)x(it.location+ft);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let ft=0;ft<it.locationSize;ft++)D(it.location+ft,At/it.locationSize,qt,pt,At*$t,At/it.locationSize*ft*$t,lt)}}else if(rt!==void 0){let pt=rt[mt];if(pt!==void 0)switch(pt.length){case 2:n.vertexAttrib2fv(it.location,pt);break;case 3:n.vertexAttrib3fv(it.location,pt);break;case 4:n.vertexAttrib4fv(it.location,pt);break;default:n.vertexAttrib1fv(it.location,pt)}}}}C()}function I(){N();for(let W in i){let $=i[W];for(let tt in $){let G=$[tt];for(let Q in G){let ot=G[Q];for(let rt in ot)h(ot[rt].object),delete ot[rt];delete G[Q]}}delete i[W]}}function R(W){if(i[W.id]===void 0)return;let $=i[W.id];for(let tt in $){let G=$[tt];for(let Q in G){let ot=G[Q];for(let rt in ot)h(ot[rt].object),delete ot[rt];delete G[Q]}}delete i[W.id]}function F(W){for(let $ in i){let tt=i[$];for(let G in tt){let Q=tt[G];if(Q[W.id]===void 0)continue;let ot=Q[W.id];for(let rt in ot)h(ot[rt].object),delete ot[rt];delete Q[W.id]}}}function S(W){for(let $ in i){let tt=i[$],G=W.isInstancedMesh===!0?W.id:0,Q=tt[G];if(Q!==void 0){for(let ot in Q){let rt=Q[ot];for(let mt in rt)h(rt[mt].object),delete rt[mt];delete Q[ot]}delete tt[G],Object.keys(tt).length===0&&delete i[$]}}}function N(){k(),o=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:k,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfObject:S,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:x,disableUnusedAttributes:C}}function Tg(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Ag(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let F=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(F){return!(F!==dn&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(F){let S=F===Sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==tn&&F!==Mn&&!S&&i.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Pt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:C,maxVaryings:D,maxFragmentUniforms:w,maxSamples:I,samples:R}}function Cg(n){let t=this,e=null,i=0,s=!1,r=!1,o=new qe,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let p=f.length!==0||u||i!==0||s;return s=u,i=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,p){let _=f.clippingPlanes,v=f.clipIntersection,x=f.clipShadows,g=n.get(f);if(!s||_===null||_.length===0||r&&!x)r?h(null):c();else{let C=r?0:i,D=C*4,w=g.clippingState||null;l.value=w,w=h(_,u,D,p);for(let I=0;I!==D;++I)w[I]=e[I];g.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,p,_){let v=f!==null?f.length:0,x=null;if(v!==0){if(x=l.value,_!==!0||x===null){let g=p+v*4,C=u.matrixWorldInverse;a.getNormalMatrix(C),(x===null||x.length<g)&&(x=new Float32Array(g));for(let D=0,w=p;D!==v;++D,w+=4)o.copy(f[D]).applyMatrix4(C,a),o.normal.toArray(x,w),x[w+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,x}}var Us=4,Rg=6,Ig=20,Pg=256,vr=new Kn,gu=new kt,rc=null,oc=0,ac=0,lc=!1,Lg=new Z,Wi=new Z,Da=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Lg}=r;rc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(rc,oc,ac),this._renderer.xr.enabled=lc,t.scissorTest=!1,Ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===Vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),rc=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),ac=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:Sn,format:dn,colorSpace:js,depthBuffer:!1},s=xu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xu(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Dg(r)),this._blurMaterial=Ug(r,t,e),this._ggxMaterial=Ng(r,t,e)}return s}_compileMaterial(t){let e=new we(new Ze,t);this._renderer.compile(e,vr)}_sceneToCubeUV(t,e,i,s,r){let l=new je(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(gu),f.toneMapping=yn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new we(new pi,new Fi({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,x=v.material,g=!1,C=t.background;C?C.isColor&&(x.color.copy(C),t.background=null,g=!0):(x.color.copy(gu),g=!0);for(let D=0;D<6;D++){let w=D%3;w===0?(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[D],r.y,r.z)):w===1?(l.up.set(0,0,c[D]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[D],r.z)):(l.up.set(0,c[D],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[D]));let I=this._cubeSize;Ns(s,w*I,D>2?I:0,I,I),f.setRenderTarget(s),g&&f.render(v,l),f.render(t,l)}f.toneMapping=p,f.autoClear=u,t.background=C}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===_i||t.mapping===Vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_u());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ns(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,vr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,p=f*u,{_lodMax:_}=this,v=this._sizeLods[i],x=3*v*(i>_-Us?i-_+Us:0),g=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=_-e,Ns(r,x,g,3*v,2*v),s.setRenderTarget(r),s.render(a,vr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,Ns(t,x,g,3*v,2*v),s.setRenderTarget(t),s.render(a,vr)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Us?s-this._lodMax+Us:0),u=4*(this._cubeSize-h);Ns(e,f,u,3*h,2*h),o.setRenderTarget(e),o.render(l,vr)}};function Dg(n){let t=[],e=[],i=n,s=n-Us+1+Rg;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,p=3,_=new Float32Array(p*u*f),v=new Float32Array(p*u*f);for(let g=0;g<f;g++){let C=g%3*2/3-1,D=g>2?0:-1,w=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];_.set(w,p*u*g);for(let I=0;I<u;I++){let R=h[I*2]*2-1,F=h[I*2+1]*2-1;g===0?Wi.set(1,F,R):g===1?Wi.set(-R,1,-F):g===2?Wi.set(-R,F,1):g===3?Wi.set(-1,F,-R):g===4?Wi.set(-R,-1,F):Wi.set(R,F,-1),Wi.toArray(v,(g*u+I)*p)}}let x=new Ze;x.setAttribute("position",new un(_,p)),x.setAttribute("outputDirection",new un(v,p)),e.push(new we(x,null)),i>Us&&i--}return{lodMeshes:e,sizeLods:t}}function xu(n,t,e){let i=new Qe(n,t,e);return i.texture.mapping=fr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ns(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ng(n,t,e){return new on({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Pg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ua(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ug(n,t,e){return new on({name:"SphericalGaussianBlur",defines:{SAMPLES:Ig,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ua(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function _u(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function yu(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ua(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Na=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new rr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new pi(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:Hi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fe,blending:On});r.uniforms.tEquirect.value=e;let o=new we(s,r),a=e.minFilter;return e.minFilter===yi&&(e.minFilter=Ue),new Vo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function Fg(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,p=!1){return u==null?null:p?o(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===Ho||p===Wo)if(t.has(u)){let _=t.get(u).texture;return a(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let v=new Na(_.height);return v.fromEquirectangularTexture(n,u),t.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let p=u.mapping,_=p===Ho||p===Wo,v=p===_i||p===Vi;if(_||v){let x=e.get(u),g=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new Da(n)),x=_?i.fromEquirectangular(u,x):i.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,e.set(u,x),x.texture;if(x!==void 0)return x.texture;{let C=u.image;return _&&C&&C.height>0||v&&C&&l(C)?(i===null&&(i=new Da(n)),x=_?i.fromEquirectangular(u):i.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,e.set(u,x),u.addEventListener("dispose",h),x.texture):null}}}return u}function a(u,p){return p===Ho?u.mapping=_i:p===Wo&&(u.mapping=Vi),u}function l(u){let p=0,_=6;for(let v=0;v<_;v++)u[v]!==void 0&&p++;return p===_}function c(u){let p=u.target;p.removeEventListener("dispose",c);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Og(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ni("WebGLRenderer: "+i+" extension not supported."),s}}}function Bg(n,t,e,i){let s={},r=new WeakMap;function o(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let p in u)t.update(u[p],n.ARRAY_BUFFER)}function c(f){let u=[],p=f.index,_=f.attributes.position,v=0;if(_===void 0)return;if(p!==null){let C=p.array;v=p.version;for(let D=0,w=C.length;D<w;D+=3){let I=C[D+0],R=C[D+1],F=C[D+2];u.push(I,R,R,F,F,I)}}else{let C=_.array;v=_.version;for(let D=0,w=C.length/3-1;D<w;D+=3){let I=D+0,R=D+1,F=D+2;u.push(I,R,R,F,F,I)}}let x=new(_.count>=65535?ir:nr)(u,1);x.version=v;let g=r.get(f);g&&t.remove(g),r.set(f,x)}function h(f){let u=r.get(f);if(u){let p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function zg(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*o),e.update(u,i,1)}function c(f,u,p){p!==0&&(n.drawElementsInstanced(i,u,r,f*o,p),e.update(u,i,p))}function h(f,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,p);let v=0;for(let x=0;x<p;x++)v+=u[x];e.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function kg(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Nt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Vg(n,t,e){let i=new WeakMap,s=new me;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==f){let N=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",N)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],C=a.morphAttributes.color||[],D=0;p===!0&&(D=1),_===!0&&(D=2),v===!0&&(D=3);let w=a.attributes.position.count*D,I=1;w>t.maxTextureSize&&(I=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let R=new Float32Array(w*I*4*f),F=new er(R,w,I,f);F.type=Mn,F.needsUpdate=!0;let S=D*4;for(let k=0;k<f;k++){let W=x[k],$=g[k],tt=C[k],G=w*I*4*k;for(let Q=0;Q<W.count;Q++){let ot=Q*S;p===!0&&(s.fromBufferAttribute(W,Q),R[G+ot+0]=s.x,R[G+ot+1]=s.y,R[G+ot+2]=s.z,R[G+ot+3]=0),_===!0&&(s.fromBufferAttribute($,Q),R[G+ot+4]=s.x,R[G+ot+5]=s.y,R[G+ot+6]=s.z,R[G+ot+7]=0),v===!0&&(s.fromBufferAttribute(tt,Q),R[G+ot+8]=s.x,R[G+ot+9]=s.y,R[G+ot+10]=s.z,R[G+ot+11]=tt.itemSize===4?s.w:1)}}u={count:f,texture:F,size:new Xt(w,I)},i.set(a,u),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Gg(n,t,e,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Hg={[Bl]:"LINEAR_TONE_MAPPING",[zl]:"REINHARD_TONE_MAPPING",[kl]:"CINEON_TONE_MAPPING",[ur]:"ACES_FILMIC_TONE_MAPPING",[Gl]:"AGX_TONE_MAPPING",[Hl]:"NEUTRAL_TONE_MAPPING",[Vl]:"CUSTOM_TONE_MAPPING"};function Wg(n,t,e,i,s,r){let o=new Qe(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ze;c.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Le([0,2,0,0,2,0],2));let h=new Ao({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new we(c,h),u=new Kn(-1,1,1,-1,0,1),p=null,_=null,v=!1,x,g=null,C=[],D=!1;this.setSize=function(w,I){o.setSize(w,I),a!==null&&a.setSize(w,I),l!==null&&l.setSize(w,I);for(let R=0;R<C.length;R++){let F=C[R];F.setSize&&F.setSize(w,I)}},this.setEffects=function(w){C=w,D=C.length>0&&C[0].isRenderPass===!0;let I=o.width,R=o.height;C.length>0&&a===null&&(a=new Qe(I,R,{type:Sn,depthBuffer:!1,stencilBuffer:!1}),l=new Qe(I,R,{type:Sn,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<C.length;F++){let S=C[F];S.setSize&&S.setSize(I,R)}},this.begin=function(w,I){if(v||w.toneMapping===yn&&C.length===0)return!1;if(g=I,I!==null){let R=I.width,F=I.height;(o.width!==R||o.height!==F)&&this.setSize(R,F)}return D===!1&&w.setRenderTarget(o),x=w.toneMapping,w.toneMapping=yn,!0},this.hasRenderPass=function(){return D},this.end=function(w,I){w.toneMapping=x,v=!0;let R=o,F=a;for(let S=0;S<C.length;S++){let N=C[S];N.enabled!==!1&&(N.render(w,F,R,I),N.needsSwap!==!1&&(R=F,F=F===a?l:a))}if(p!==w.outputColorSpace||_!==w.toneMapping){p=w.outputColorSpace,_=w.toneMapping,h.defines={},Jt.getTransfer(p)===ee&&(h.defines.SRGB_TRANSFER="");let S=Hg[_];S&&(h.defines[S]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=R.texture,w.setRenderTarget(g),w.render(f,u),g=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var zu=new Ye,uc=new di(1,1),ku=new er,Vu=new So,Gu=new rr,vu=[],Mu=[],Su=new Float32Array(16),bu=new Float32Array(9),Eu=new Float32Array(4);function Os(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=vu[s];if(r===void 0&&(r=new Float32Array(s),vu[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ae(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ce(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Fa(n,t){let e=Mu[t];e===void 0&&(e=new Int32Array(t),Mu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Xg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function qg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2fv(this.addr,t),Ce(e,t)}}function Yg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;n.uniform3fv(this.addr,t),Ce(e,t)}}function Zg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4fv(this.addr,t),Ce(e,t)}}function $g(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,i))return;Eu.set(i),n.uniformMatrix2fv(this.addr,!1,Eu),Ce(e,i)}}function Jg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,i))return;bu.set(i),n.uniformMatrix3fv(this.addr,!1,bu),Ce(e,i)}}function Kg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ae(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,i))return;Su.set(i),n.uniformMatrix4fv(this.addr,!1,Su),Ce(e,i)}}function jg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Qg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2iv(this.addr,t),Ce(e,t)}}function t0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3iv(this.addr,t),Ce(e,t)}}function e0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4iv(this.addr,t),Ce(e,t)}}function n0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function i0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;n.uniform2uiv(this.addr,t),Ce(e,t)}}function s0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;n.uniform3uiv(this.addr,t),Ce(e,t)}}function r0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;n.uniform4uiv(this.addr,t),Ce(e,t)}}function o0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(uc.compareFunction=e.isReversedDepthBuffer()?Ia:Ra,r=uc):r=zu,e.setTexture2D(t||r,s)}function a0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Vu,s)}function l0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Gu,s)}function c0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ku,s)}function h0(n){switch(n){case 5126:return Xg;case 35664:return qg;case 35665:return Yg;case 35666:return Zg;case 35674:return $g;case 35675:return Jg;case 35676:return Kg;case 5124:case 35670:return jg;case 35667:case 35671:return Qg;case 35668:case 35672:return t0;case 35669:case 35673:return e0;case 5125:return n0;case 36294:return i0;case 36295:return s0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}function u0(n,t){n.uniform1fv(this.addr,t)}function f0(n,t){let e=Os(t,this.size,2);n.uniform2fv(this.addr,e)}function d0(n,t){let e=Os(t,this.size,3);n.uniform3fv(this.addr,e)}function p0(n,t){let e=Os(t,this.size,4);n.uniform4fv(this.addr,e)}function m0(n,t){let e=Os(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function g0(n,t){let e=Os(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function x0(n,t){let e=Os(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function _0(n,t){n.uniform1iv(this.addr,t)}function y0(n,t){n.uniform2iv(this.addr,t)}function v0(n,t){n.uniform3iv(this.addr,t)}function M0(n,t){n.uniform4iv(this.addr,t)}function S0(n,t){n.uniform1uiv(this.addr,t)}function b0(n,t){n.uniform2uiv(this.addr,t)}function E0(n,t){n.uniform3uiv(this.addr,t)}function w0(n,t){n.uniform4uiv(this.addr,t)}function T0(n,t,e){let i=this.cache,s=t.length,r=Fa(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Ce(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=uc:o=zu;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function A0(n,t,e){let i=this.cache,s=t.length,r=Fa(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Ce(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Vu,r[o])}function C0(n,t,e){let i=this.cache,s=t.length,r=Fa(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Ce(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Gu,r[o])}function R0(n,t,e){let i=this.cache,s=t.length,r=Fa(e,s);Ae(i,r)||(n.uniform1iv(this.addr,r),Ce(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ku,r[o])}function I0(n){switch(n){case 5126:return u0;case 35664:return f0;case 35665:return d0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return x0;case 5124:case 35670:return _0;case 35667:case 35671:return y0;case 35668:case 35672:return v0;case 35669:case 35673:return M0;case 5125:return S0;case 36294:return b0;case 36295:return E0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return R0}}var fc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=h0(e.type)}},dc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=I0(e.type)}},pc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},cc=/(\w+)(\])?(\[|\.)?/g;function wu(n,t){n.seq.push(t),n.map[t.id]=t}function P0(n,t,e){let i=n.name,s=i.length;for(cc.lastIndex=0;;){let r=cc.exec(i),o=cc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){wu(e,c===void 0?new fc(a,n,t):new dc(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new pc(a),wu(e,f)),e=f}}}var Fs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);P0(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function Tu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var L0=37297,D0=0;function N0(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Au=new Bt;function U0(n){Jt._getMatrix(Au,Jt.workingColorSpace,n);let t=`mat3( ${Au.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(n)){case Qs:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Cu(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+N0(n.getShaderSource(t),a)}else return r}function F0(n,t){let e=U0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var O0={[Bl]:"Linear",[zl]:"Reinhard",[kl]:"Cineon",[ur]:"ACESFilmic",[Gl]:"AgX",[Hl]:"Neutral",[Vl]:"Custom"};function B0(n,t){let e=O0[t];return e===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var La=new Z;function z0(){Jt.getLuminanceCoefficients(La);let n=La.x.toFixed(4),t=La.y.toFixed(4),e=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function V0(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function G0(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Sr(n){return n!==""}function Ru(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Iu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var H0=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(n){return n.replace(H0,X0)}var W0=new Map;function X0(n,t){let e=Ht[t];if(e===void 0){let i=W0.get(t);if(i!==void 0)e=Ht[i],Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return mc(e)}var q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pu(n){return n.replace(q0,Y0)}function Y0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Lu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Z0={[zi]:"SHADOWMAP_TYPE_PCF",[Rs]:"SHADOWMAP_TYPE_VSM"};function $0(n){return Z0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var J0={[_i]:"ENVMAP_TYPE_CUBE",[Vi]:"ENVMAP_TYPE_CUBE",[fr]:"ENVMAP_TYPE_CUBE_UV"};function K0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":J0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var j0={[Vi]:"ENVMAP_MODE_REFRACTION"};function Q0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":j0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var tx={[Ol]:"ENVMAP_BLENDING_MULTIPLY",[$h]:"ENVMAP_BLENDING_MIX",[Jh]:"ENVMAP_BLENDING_ADD"};function ex(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":tx[n.combine]||"ENVMAP_BLENDING_NONE"}function nx(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function ix(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=$0(e),c=K0(e),h=Q0(e),f=ex(e),u=nx(e),p=k0(e),_=V0(r),v=s.createProgram(),x,g,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Sr).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Sr).join(`
`),g.length>0&&(g+=`
`)):(x=[Lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),g=[Lu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==yn?B0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,F0("linearToOutputTexel",e.outputColorSpace),z0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sr).join(`
`)),o=mc(o),o=Ru(o,e),o=Iu(o,e),a=mc(a),a=Ru(a,e),a=Iu(a,e),o=Pu(o),a=Pu(a),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let D=C+x+o,w=C+g+a,I=Tu(s,s.VERTEX_SHADER,D),R=Tu(s,s.FRAGMENT_SHADER,w);s.attachShader(v,I),s.attachShader(v,R),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function F(W){if(n.debug.checkShaderErrors){let $=s.getProgramInfoLog(v)||"",tt=s.getShaderInfoLog(I)||"",G=s.getShaderInfoLog(R)||"",Q=$.trim(),ot=tt.trim(),rt=G.trim(),mt=!0,it=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(mt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,I,R);else{let at=Cu(s,I,"vertex"),pt=Cu(s,R,"fragment");Nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+Q+`
`+at+`
`+pt)}else Q!==""?Pt("WebGLProgram: Program Info Log:",Q):(ot===""||rt==="")&&(it=!1);it&&(W.diagnostics={runnable:mt,programLog:Q,vertexShader:{log:ot,prefix:x},fragmentShader:{log:rt,prefix:g}})}s.deleteShader(I),s.deleteShader(R),S=new Fs(s,v),N=G0(s,v)}let S;this.getUniforms=function(){return S===void 0&&F(this),S};let N;this.getAttributes=function(){return N===void 0&&F(this),N};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(v,L0)),k},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=D0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=R,this}var sx=0,gc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new xc(t),e.set(t,i)),i}},xc=class{constructor(t){this.id=sx++,this.code=t,this.usedTimes=0}};function rx(n){return n===Mi||n===_r||n===yr}function ox(n,t,e,i,s,r){let o=new Ms,a=new gc,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function v(S,N,k,W,$,tt){let G=W.fog,Q=$.geometry,ot=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?W.environment:null,rt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,mt=t.get(S.envMap||ot,rt),it=mt&&mt.mapping===fr?mt.image.height:null,at=p[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&Pt("WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));let pt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,At=pt!==void 0?pt.length:0,Tt=0;Q.morphAttributes.position!==void 0&&(Tt=1),Q.morphAttributes.normal!==void 0&&(Tt=2),Q.morphAttributes.color!==void 0&&(Tt=3);let jt,qt,$t,lt;if(at){let zt=zn[at];jt=zt.vertexShader,qt=zt.fragmentShader}else{jt=S.vertexShader,qt=S.fragmentShader;let zt=a.getVertexShaderStage(S),Dt=a.getFragmentShaderStage(S);a.update(S,zt,Dt),$t=zt.id,lt=Dt.id}let ft=n.getRenderTarget(),bt=n.state.buffers.depth.getReversed(),Ft=$.isInstancedMesh===!0,St=$.isBatchedMesh===!0,Lt=!!S.map,ye=!!S.matcap,Ot=!!mt,Kt=!!S.aoMap,se=!!S.lightMap,Wt=!!S.bumpMap&&S.wireframe===!1,ne=!!S.normalMap,ve=!!S.displacementMap,Oe=!!S.emissiveMap,ue=!!S.metalnessMap,ge=!!S.roughnessMap,V=S.anisotropy>0,Re=S.clearcoat>0,Vt=S.dispersion>0,P=S.retroreflectivity>0,y=S.iridescence>0,q=S.sheen>0,j=S.transmission>0,st=V&&!!S.anisotropyMap,L=Re&&!!S.clearcoatMap,d=Re&&!!S.clearcoatNormalMap,m=Re&&!!S.clearcoatRoughnessMap,M=y&&!!S.iridescenceMap,T=y&&!!S.iridescenceThicknessMap,A=q&&!!S.sheenColorMap,O=q&&!!S.sheenRoughnessMap,U=!!S.specularMap,Y=!!S.specularColorMap,X=!!S.specularIntensityMap,dt=j&&!!S.transmissionMap,E=j&&!!S.thicknessMap,H=!!S.gradientMap,B=!!S.alphaMap,ht=S.alphaTest>0,ut=!!S.alphaHash,nt=!!S.extensions,gt=yn;S.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(gt=n.toneMapping);let xt={shaderID:at,shaderType:S.type,shaderName:S.name,vertexShader:jt,fragmentShader:qt,defines:S.defines,customVertexShaderID:$t,customFragmentShaderID:lt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:St,batchingColor:St&&$._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&$.instanceColor!==null,instancingMorph:Ft&&$.morphTexture!==null,outputColorSpace:ft===null?n.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Lt,matcap:ye,envMap:Ot,envMapMode:Ot&&mt.mapping,envMapCubeUVHeight:it,aoMap:Kt,lightMap:se,bumpMap:Wt,normalMap:ne,displacementMap:ve,emissiveMap:Oe,normalMapObjectSpace:ne&&S.normalMapType===Qh,normalMapTangentSpace:ne&&S.normalMapType===Ca,packedNormalMap:ne&&S.normalMapType===Ca&&rx(S.normalMap.format),metalnessMap:ue,roughnessMap:ge,anisotropy:V,anisotropyMap:st,clearcoat:Re,clearcoatMap:L,clearcoatNormalMap:d,clearcoatRoughnessMap:m,dispersion:Vt,retroreflection:P,iridescence:y,iridescenceMap:M,iridescenceThicknessMap:T,sheen:q,sheenColorMap:A,sheenRoughnessMap:O,specularMap:U,specularColorMap:Y,specularIntensityMap:X,transmission:j,transmissionMap:dt,thicknessMap:E,gradientMap:H,opaque:S.transparent===!1&&S.blending===Is&&S.alphaToCoverage===!1,alphaMap:B,alphaTest:ht,alphaHash:ut,combine:S.combine,mapUv:Lt&&_(S.map.channel),aoMapUv:Kt&&_(S.aoMap.channel),lightMapUv:se&&_(S.lightMap.channel),bumpMapUv:Wt&&_(S.bumpMap.channel),normalMapUv:ne&&_(S.normalMap.channel),displacementMapUv:ve&&_(S.displacementMap.channel),emissiveMapUv:Oe&&_(S.emissiveMap.channel),metalnessMapUv:ue&&_(S.metalnessMap.channel),roughnessMapUv:ge&&_(S.roughnessMap.channel),anisotropyMapUv:st&&_(S.anisotropyMap.channel),clearcoatMapUv:L&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:d&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:m&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:M&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:T&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:A&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:O&&_(S.sheenRoughnessMap.channel),specularMapUv:U&&_(S.specularMap.channel),specularColorMapUv:Y&&_(S.specularColorMap.channel),specularIntensityMapUv:X&&_(S.specularIntensityMap.channel),transmissionMapUv:dt&&_(S.transmissionMap.channel),thicknessMapUv:E&&_(S.thicknessMap.channel),alphaMapUv:B&&_(S.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ne||V),vertexNormals:!!Q.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!Q.attributes.uv&&(Lt||B),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||Q.attributes.normal===void 0&&ne===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:bt,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Tt,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:tt.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:gt,decodeVideoTexture:Lt&&S.map.isVideoTexture===!0&&Jt.getTransfer(S.map.colorSpace)===ee,decodeVideoTextureEmissive:Oe&&S.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(S.emissiveMap.colorSpace)===ee,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===fn,flipSided:S.side===Fe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:nt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&S.extensions.multiDraw===!0||St)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function x(S){let N=[];if(S.shaderID?N.push(S.shaderID):(N.push(S.customVertexShaderID),N.push(S.customFragmentShaderID)),S.defines!==void 0)for(let k in S.defines)N.push(k),N.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(g(N,S),C(N,S),N.push(n.outputColorSpace)),N.push(S.customProgramCacheKey),N.join()}function g(S,N){S.push(N.precision),S.push(N.outputColorSpace),S.push(N.envMapMode),S.push(N.envMapCubeUVHeight),S.push(N.mapUv),S.push(N.alphaMapUv),S.push(N.lightMapUv),S.push(N.aoMapUv),S.push(N.bumpMapUv),S.push(N.normalMapUv),S.push(N.displacementMapUv),S.push(N.emissiveMapUv),S.push(N.metalnessMapUv),S.push(N.roughnessMapUv),S.push(N.anisotropyMapUv),S.push(N.clearcoatMapUv),S.push(N.clearcoatNormalMapUv),S.push(N.clearcoatRoughnessMapUv),S.push(N.iridescenceMapUv),S.push(N.iridescenceThicknessMapUv),S.push(N.sheenColorMapUv),S.push(N.sheenRoughnessMapUv),S.push(N.specularMapUv),S.push(N.specularColorMapUv),S.push(N.specularIntensityMapUv),S.push(N.transmissionMapUv),S.push(N.thicknessMapUv),S.push(N.combine),S.push(N.fogExp2),S.push(N.sizeAttenuation),S.push(N.morphTargetsCount),S.push(N.morphAttributeCount),S.push(N.numSunLights),S.push(N.numDirLights),S.push(N.numPointLights),S.push(N.numSpotLights),S.push(N.numSpotLightMaps),S.push(N.numHemiLights),S.push(N.numRectAreaLights),S.push(N.numSunLightShadows),S.push(N.numDirLightShadows),S.push(N.numPointLightShadows),S.push(N.numSpotLightShadows),S.push(N.numSpotLightShadowsWithMaps),S.push(N.numLightProbes),S.push(N.shadowMapType),S.push(N.toneMapping),S.push(N.numClippingPlanes),S.push(N.numClipIntersection),S.push(N.depthPacking)}function C(S,N){o.disableAll(),N.instancing&&o.enable(0),N.instancingColor&&o.enable(1),N.instancingMorph&&o.enable(2),N.matcap&&o.enable(3),N.envMap&&o.enable(4),N.normalMapObjectSpace&&o.enable(5),N.normalMapTangentSpace&&o.enable(6),N.clearcoat&&o.enable(7),N.iridescence&&o.enable(8),N.alphaTest&&o.enable(9),N.vertexColors&&o.enable(10),N.vertexAlphas&&o.enable(11),N.vertexUv1s&&o.enable(12),N.vertexUv2s&&o.enable(13),N.vertexUv3s&&o.enable(14),N.vertexTangents&&o.enable(15),N.anisotropy&&o.enable(16),N.alphaHash&&o.enable(17),N.batching&&o.enable(18),N.dispersion&&o.enable(19),N.retroreflection&&o.enable(24),N.batchingColor&&o.enable(20),N.gradientMap&&o.enable(21),N.packedNormalMap&&o.enable(22),N.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),N.fog&&o.enable(0),N.useFog&&o.enable(1),N.flatShading&&o.enable(2),N.logarithmicDepthBuffer&&o.enable(3),N.reversedDepthBuffer&&o.enable(4),N.skinning&&o.enable(5),N.morphTargets&&o.enable(6),N.morphNormals&&o.enable(7),N.morphColors&&o.enable(8),N.premultipliedAlpha&&o.enable(9),N.shadowMapEnabled&&o.enable(10),N.doubleSided&&o.enable(11),N.flipSided&&o.enable(12),N.useDepthPacking&&o.enable(13),N.dithering&&o.enable(14),N.transmission&&o.enable(15),N.sheen&&o.enable(16),N.opaque&&o.enable(17),N.pointsUvs&&o.enable(18),N.decodeVideoTexture&&o.enable(19),N.decodeVideoTextureEmissive&&o.enable(20),N.alphaToCoverage&&o.enable(21),N.numLightProbeGrids>0&&o.enable(22),N.hasPositionAttribute&&o.enable(23),S.push(o.mask)}function D(S){let N=p[S.type],k;if(N){let W=zn[N];k=du.clone(W.uniforms)}else k=S.uniforms;return k}function w(S,N){let k=h.get(N);return k!==void 0?++k.usedTimes:(k=new ix(n,N,S,s),c.push(k),h.set(N,k)),k}function I(S){if(--S.usedTimes===0){let N=c.indexOf(S);c[N]=c[c.length-1],c.pop(),h.delete(S.cacheKey),S.destroy()}}function R(S){a.remove(S)}function F(){a.dispose()}return{getParameters:v,getProgramCacheKey:x,getUniforms:D,acquireProgram:w,releaseProgram:I,releaseShaderCache:R,programs:c,dispose:F}}function ax(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function lx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Du(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Nu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,_,v,x,g){let C=n[t];return C===void 0?(C={id:u.id,object:u,geometry:p,material:_,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:x,group:g},n[t]=C):(C.id=u.id,C.object=u,C.geometry=p,C.material=_,C.materialVariant=o(u),C.groupOrder=v,C.renderOrder=u.renderOrder,C.z=x,C.group=g),t++,C}function l(u,p,_,v,x,g,C){C.reversedDepth===!0&&(x=-x);let D=a(u,p,_,v,x,g);_.transmission>0?i.push(D):_.transparent===!0?s.push(D):e.push(D)}function c(u,p,_,v,x,g){let C=a(u,p,_,v,x,g);_.transmission>0?i.unshift(C):_.transparent===!0?s.unshift(C):e.unshift(C)}function h(u,p){e.length>1&&e.sort(u||lx),i.length>1&&i.sort(p||Du),s.length>1&&s.sort(p||Du)}function f(){for(let u=t,p=n.length;u<p;u++){let _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function cx(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Nu,n.set(i,[o])):s>=r.length?(o=new Nu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function hx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Z,color:new kt};break;case"SpotLight":e={position:new Z,direction:new Z,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return n[t.id]=e,e}}}function ux(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var fx=0;function dx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function px(n){let t=new hx,e=ux(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);let s=new Z,r=new ie,o=new ie;function a(c){let h=0,f=0,u=0;for(let $=0;$<9;$++)i.probe[$].set(0,0,0);let p=0,_=0,v=0,x=0,g=0,C=0,D=0,w=0,I=0,R=0,F=0,S=0,N=0,k=0;c.sort(dx);for(let $=0,tt=c.length;$<tt;$++){let G=c[$],Q=G.color,ot=G.intensity,rt=G.distance,mt=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Mi?mt=G.shadow.map.texture:mt=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)h+=Q.r*ot,f+=Q.g*ot,u+=Q.b*ot;else if(G.isLightProbe){for(let it=0;it<9;it++)i.probe[it].addScaledVector(G.sh.coefficients[it],ot);k++}else if(G.isSunLight){let it=t.get(G);if(it.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){let at=G.shadow,pt=e.get(G);pt.shadowIntensity=at.intensity,pt.shadowBias=at.bias,pt.shadowNormalBias=at.normalBias,pt.shadowRadius=at.radius,pt.shadowMapSize.copy(at.mapSize).multiply(at.getFrameExtents()),i.sunShadow[_]=pt,i.sunShadowMap[_]=mt;let At=at.getViewportCount();for(let Tt=0;Tt<At;Tt++)i.sunShadowMatrix[v+Tt]=at.getMatrix(Tt),i.sunShadowCascade[v+Tt]=at._cascadeData[Tt];v+=At,_++}i.sun[p]=it,p++}else if(G.isDirectionalLight){let it=t.get(G);if(it.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){let at=G.shadow,pt=e.get(G);pt.shadowIntensity=at.intensity,pt.shadowBias=at.bias,pt.shadowNormalBias=at.normalBias,pt.shadowRadius=at.radius,pt.shadowMapSize=at.mapSize,i.directionalShadow[x]=pt,i.directionalShadowMap[x]=mt,i.directionalShadowMatrix[x]=G.shadow.matrix,I++}i.directional[x]=it,x++}else if(G.isSpotLight){let it=t.get(G);it.position.setFromMatrixPosition(G.matrixWorld),it.color.copy(Q).multiplyScalar(ot),it.distance=rt,it.coneCos=Math.cos(G.angle),it.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),it.decay=G.decay,i.spot[C]=it;let at=G.shadow;if(G.map&&(i.spotLightMap[S]=G.map,S++,at.updateMatrices(G),G.castShadow&&N++),i.spotLightMatrix[C]=at.matrix,G.castShadow){let pt=e.get(G);pt.shadowIntensity=at.intensity,pt.shadowBias=at.bias,pt.shadowNormalBias=at.normalBias,pt.shadowRadius=at.radius,pt.shadowMapSize=at.mapSize,i.spotShadow[C]=pt,i.spotShadowMap[C]=mt,F++}C++}else if(G.isRectAreaLight){let it=t.get(G);it.color.copy(Q).multiplyScalar(ot),it.halfWidth.set(G.width*.5,0,0),it.halfHeight.set(0,G.height*.5,0),i.rectArea[D]=it,D++}else if(G.isPointLight){let it=t.get(G);if(it.color.copy(G.color).multiplyScalar(G.intensity),it.distance=G.distance,it.decay=G.decay,G.castShadow){let at=G.shadow,pt=e.get(G);pt.shadowIntensity=at.intensity,pt.shadowBias=at.bias,pt.shadowNormalBias=at.normalBias,pt.shadowRadius=at.radius,pt.shadowMapSize=at.mapSize,pt.shadowCameraNear=at.camera.near,pt.shadowCameraFar=at.camera.far,i.pointShadow[g]=pt,i.pointShadowMap[g]=mt,i.pointShadowMatrix[g]=G.shadow.matrix,R++}i.point[g]=it,g++}else if(G.isHemisphereLight){let it=t.get(G);it.skyColor.copy(G.color).multiplyScalar(ot),it.groundColor.copy(G.groundColor).multiplyScalar(ot),i.hemi[w]=it,w++}}D>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let W=i.hash;(W.sunLength!==p||W.directionalLength!==x||W.pointLength!==g||W.spotLength!==C||W.rectAreaLength!==D||W.hemiLength!==w||W.numSunShadows!==_||W.numDirectionalShadows!==I||W.numPointShadows!==R||W.numSpotShadows!==F||W.numSpotMaps!==S||W.numLightProbes!==k)&&(i.sun.length=p,i.directional.length=x,i.spot.length=C,i.rectArea.length=D,i.point.length=g,i.hemi.length=w,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.directionalShadowMatrix.length=I,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=F,i.spotShadowMap.length=F,i.spotLightMatrix.length=F+S-N,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=k,W.sunLength=p,W.directionalLength=x,W.pointLength=g,W.spotLength=C,W.rectAreaLength=D,W.hemiLength=w,W.numSunShadows=_,W.numDirectionalShadows=I,W.numPointShadows=R,W.numSpotShadows=F,W.numSpotMaps=S,W.numLightProbes=k,i.version=fx++)}function l(c,h){let f=0,u=0,p=0,_=0,v=0,x=0,g=h.matrixWorldInverse;for(let C=0,D=c.length;C<D;C++){let w=c[C];if(w.isSunLight){let I=i.sun[f];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(g),f++}else if(w.isDirectionalLight){let I=i.directional[u];I.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(g),u++}else if(w.isSpotLight){let I=i.spot[_];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(g),I.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(g),_++}else if(w.isRectAreaLight){let I=i.rectArea[v];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),I.halfWidth.set(w.width*.5,0,0),I.halfHeight.set(0,w.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),v++}else if(w.isPointLight){let I=i.point[p];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(g),p++}else if(w.isHemisphereLight){let I=i.hemi[x];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:i}}function Uu(n){let t=new px(n),e=[],i=[],s=[];function r(u){f.camera=u,e.length=0,i.length=0,s.length=0}function o(u){e.push(u)}function a(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function mx(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Uu(n),t.set(s,[a])):r>=o.length?(a=new Uu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var gx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_x=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],yx=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Fu=new ie,Mr=new Z,hc=new Z;function vx(n,t,e){let i=new Es,s=new Xt,r=new Xt,o=new me,a=new Co,l=new Ro,c={},h=e.maxTextureSize,f={[Fn]:Fe,[Fe]:Fn,[fn]:fn},u=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:gx,fragmentShader:xx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let _=new Ze;_.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new we(_,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zi;let g=this.type;this.render=function(R,F,S){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;this.type===Ih&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zi);let N=n.getRenderTarget(),k=n.getActiveCubeFace(),W=n.getActiveMipmapLevel(),$=n.state;$.setBlending(On),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let tt=g!==this.type;tt&&F.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(Q=>Q.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,Q=R.length;G<Q;G++){let ot=R[G],rt=ot.shadow;if(rt===void 0){Pt("WebGLShadowMap:",ot,"has no shadow.");continue}if(rt.autoUpdate===!1&&rt.needsUpdate===!1)continue;s.copy(rt.mapSize);let mt=rt.getFrameExtents();s.multiply(mt),r.copy(rt.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/mt.x),s.x=r.x*mt.x,rt.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/mt.y),s.y=r.y*mt.y,rt.mapSize.y=r.y));let it=n.state.buffers.depth.getReversed();if(rt.camera._reversedDepth=it,rt.map===null||tt===!0){if(rt.map!==null&&(rt.map.depthTexture!==null&&(rt.map.depthTexture.dispose(),rt.map.depthTexture=null),rt.map.dispose()),this.type===Rs){if(ot.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}rt.map=new Qe(s.x,s.y,{format:Mi,type:Sn,minFilter:Ue,magFilter:Ue,generateMipmaps:!1}),rt.map.texture.name=ot.name+".shadowMap",rt.map.depthTexture=new di(s.x,s.y,Mn),rt.map.depthTexture.name=ot.name+".shadowMapDepth",rt.map.depthTexture.format=Pn,rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=De,rt.map.depthTexture.magFilter=De}else ot.isPointLight?(rt.map=new Na(s.x),rt.map.depthTexture=new To(s.x,vn)):(rt.map=new Qe(s.x,s.y),rt.map.depthTexture=new di(s.x,s.y,vn)),rt.map.depthTexture.name=ot.name+".shadowMap",rt.map.depthTexture.format=Pn,this.type===zi?(rt.map.depthTexture.compareFunction=it?Ia:Ra,rt.map.depthTexture.minFilter=Ue,rt.map.depthTexture.magFilter=Ue):(rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=De,rt.map.depthTexture.magFilter=De);rt.camera.updateProjectionMatrix()}rt.map.isWebGLCubeRenderTarget!==!0&&(rt.map.width!==s.x||rt.map.height!==s.y)&&rt.map.setSize(s.x,s.y);let at=rt.map.isWebGLCubeRenderTarget?6:rt.getViewportCount();ot.isPointLight!==!0&&rt.updateMatrices(ot,S);for(let pt=0;pt<at;pt++){let At=rt.getCamera(pt);if(ot.isPointLight){let Tt=rt.camera,jt=rt.matrix,qt=ot.distance||Tt.far;qt!==Tt.far&&(Tt.far=qt,Tt.updateProjectionMatrix()),Mr.setFromMatrixPosition(ot.matrixWorld),Tt.position.copy(Mr),hc.copy(Tt.position),hc.add(_x[pt]),Tt.up.copy(yx[pt]),Tt.lookAt(hc),Tt.updateMatrixWorld(),jt.makeTranslation(-Mr.x,-Mr.y,-Mr.z),Fu.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),rt._frustum.setFromProjectionMatrix(Fu,Tt.coordinateSystem,Tt.reversedDepth)}if(rt.map.isWebGLCubeRenderTarget)n.setRenderTarget(rt.map,pt),n.clear();else{pt===0&&(n.setRenderTarget(rt.map),n.clear());let Tt=rt.getViewport(pt);o.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),$.viewport(o)}i=rt.getFrustum(pt),w(F,S,At,ot,this.type)}rt.isPointLightShadow!==!0&&this.type===Rs&&C(rt,S),rt.needsUpdate=!1}g=this.type,x.needsUpdate=!1,n.setRenderTarget(N,k,W)};function C(R,F){let S=t.update(v);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null?R.mapPass=new Qe(s.x,s.y,{format:Mi,type:Sn}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(F,null,S,u,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value.set(R.map.width,R.map.height),p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(F,null,S,p,v,null)}function D(R,F,S,N){let k=null,W=S.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(W!==void 0)k=W;else if(k=S.isPointLight===!0?l:a,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){let $=k.uuid,tt=F.uuid,G=c[$];G===void 0&&(G={},c[$]=G);let Q=G[tt];Q===void 0&&(Q=k.clone(),G[tt]=Q,F.addEventListener("dispose",I)),k=Q}if(k.visible=F.visible,k.wireframe=F.wireframe,N===Rs?k.side=F.shadowSide!==null?F.shadowSide:F.side:k.side=F.shadowSide!==null?F.shadowSide:f[F.side],k.alphaMap=F.alphaMap,k.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,k.map=F.map,k.clipShadows=F.clipShadows,k.clippingPlanes=F.clippingPlanes,k.clipIntersection=F.clipIntersection,k.displacementMap=F.displacementMap,k.displacementScale=F.displacementScale,k.displacementBias=F.displacementBias,k.wireframeLinewidth=F.wireframeLinewidth,k.linewidth=F.linewidth,S.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let $=n.properties.get(k);$.light=S}return k}function w(R,F,S,N,k){if(R.visible===!1)return;if(R.layers.test(F.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&k===Rs)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,R.matrixWorld);let tt=t.update(R),G=R.material;if(Array.isArray(G)){let Q=tt.groups;for(let ot=0,rt=Q.length;ot<rt;ot++){let mt=Q[ot],it=G[mt.materialIndex];if(it&&it.visible){let at=D(R,it,N,k);R.onBeforeShadow(n,R,F,S,tt,at,mt),n.renderBufferDirect(S,null,tt,at,R,mt),R.onAfterShadow(n,R,F,S,tt,at,mt)}}}else if(G.visible){let Q=D(R,G,N,k);R.onBeforeShadow(n,R,F,S,tt,Q,null),n.renderBufferDirect(S,null,tt,Q,R,null),R.onAfterShadow(n,R,F,S,tt,Q,null)}}let $=R.children;for(let tt=0,G=$.length;tt<G;tt++)w($[tt],F,S,N,k)}function I(R){R.target.removeEventListener("dispose",I);for(let S in c){let N=c[S],k=R.target.uuid;k in N&&(N[k].dispose(),delete N[k])}}}function Mx(n,t){function e(){let E=!1,H=new me,B=null,ht=new me(0,0,0,0);return{setMask:function(ut){B!==ut&&!E&&(n.colorMask(ut,ut,ut,ut),B=ut)},setLocked:function(ut){E=ut},setClear:function(ut,nt,gt,xt,zt){zt===!0&&(ut*=xt,nt*=xt,gt*=xt),H.set(ut,nt,gt,xt),ht.equals(H)===!1&&(n.clearColor(ut,nt,gt,xt),ht.copy(H))},reset:function(){E=!1,B=null,ht.set(-1,0,0,0)}}}function i(){let E=!1,H=!1,B=null,ht=null,ut=null;return{setReversed:function(nt){if(H!==nt){let gt=t.get("EXT_clip_control");nt?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),H=nt;let xt=ut;ut=null,this.setClear(xt)}},getReversed:function(){return H},setTest:function(nt){nt?ft(n.DEPTH_TEST):bt(n.DEPTH_TEST)},setMask:function(nt){B!==nt&&!E&&(n.depthMask(nt),B=nt)},setFunc:function(nt){if(H&&(nt=uu[nt]),ht!==nt){switch(nt){case ho:n.depthFunc(n.NEVER);break;case uo:n.depthFunc(n.ALWAYS);break;case fo:n.depthFunc(n.LESS);break;case ms:n.depthFunc(n.LEQUAL);break;case po:n.depthFunc(n.EQUAL);break;case mo:n.depthFunc(n.GEQUAL);break;case go:n.depthFunc(n.GREATER);break;case xo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ht=nt}},setLocked:function(nt){E=nt},setClear:function(nt){ut!==nt&&(ut=nt,H&&(nt=1-nt),n.clearDepth(nt))},reset:function(){E=!1,B=null,ht=null,ut=null,H=!1}}}function s(){let E=!1,H=null,B=null,ht=null,ut=null,nt=null,gt=null,xt=null,zt=null;return{setTest:function(Dt){E||(Dt?ft(n.STENCIL_TEST):bt(n.STENCIL_TEST))},setMask:function(Dt){H!==Dt&&!E&&(n.stencilMask(Dt),H=Dt)},setFunc:function(Dt,re,le){(B!==Dt||ht!==re||ut!==le)&&(n.stencilFunc(Dt,re,le),B=Dt,ht=re,ut=le)},setOp:function(Dt,re,le){(nt!==Dt||gt!==re||xt!==le)&&(n.stencilOp(Dt,re,le),nt=Dt,gt=re,xt=le)},setLocked:function(Dt){E=Dt},setClear:function(Dt){zt!==Dt&&(n.clearStencil(Dt),zt=Dt)},reset:function(){E=!1,H=null,B=null,ht=null,ut=null,nt=null,gt=null,xt=null,zt=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},p=new WeakMap,_=[],v=null,x=!1,g=null,C=null,D=null,w=null,I=null,R=null,F=null,S=new kt(0,0,0),N=0,k=!1,W=null,$=null,tt=null,G=null,Q=null,ot=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),rt=!1,mt=0,it=n.getParameter(n.VERSION);it.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec(it)[1]),rt=mt>=1):it.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),rt=mt>=2);let at=null,pt={},At=n.getParameter(n.SCISSOR_BOX),Tt=n.getParameter(n.VIEWPORT),jt=new me().fromArray(At),qt=new me().fromArray(Tt);function $t(E,H,B,ht){let ut=new Uint8Array(4),nt=n.createTexture();n.bindTexture(E,nt),n.texParameteri(E,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(E,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let gt=0;gt<B;gt++)E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY?n.texImage3D(H,0,n.RGBA,1,1,ht,0,n.RGBA,n.UNSIGNED_BYTE,ut):n.texImage2D(H+gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ut);return nt}let lt={};lt[n.TEXTURE_2D]=$t(n.TEXTURE_2D,n.TEXTURE_2D,1),lt[n.TEXTURE_CUBE_MAP]=$t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[n.TEXTURE_2D_ARRAY]=$t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),lt[n.TEXTURE_3D]=$t(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ft(n.DEPTH_TEST),o.setFunc(ms),Wt(!1),ne(Pl),ft(n.CULL_FACE),Kt(On);function ft(E){h[E]!==!0&&(n.enable(E),h[E]=!0)}function bt(E){h[E]!==!1&&(n.disable(E),h[E]=!1)}function Ft(E,H){return u[E]!==H?(n.bindFramebuffer(E,H),u[E]=H,E===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=H),E===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=H),!0):!1}function St(E,H){let B=_,ht=!1;if(E){B=p.get(H),B===void 0&&(B=[],p.set(H,B));let ut=E.textures;if(B.length!==ut.length||B[0]!==n.COLOR_ATTACHMENT0){for(let nt=0,gt=ut.length;nt<gt;nt++)B[nt]=n.COLOR_ATTACHMENT0+nt;B.length=ut.length,ht=!0}}else B[0]!==n.BACK&&(B[0]=n.BACK,ht=!0);ht&&n.drawBuffers(B)}function Lt(E){return v!==E?(n.useProgram(E),v=E,!0):!1}let ye={[ki]:n.FUNC_ADD,[Lh]:n.FUNC_SUBTRACT,[Dh]:n.FUNC_REVERSE_SUBTRACT};ye[Nh]=n.MIN,ye[Uh]=n.MAX;let Ot={[Fh]:n.ZERO,[Oh]:n.ONE,[Bh]:n.SRC_COLOR,[Ul]:n.SRC_ALPHA,[Wh]:n.SRC_ALPHA_SATURATE,[Gh]:n.DST_COLOR,[kh]:n.DST_ALPHA,[zh]:n.ONE_MINUS_SRC_COLOR,[Fl]:n.ONE_MINUS_SRC_ALPHA,[Hh]:n.ONE_MINUS_DST_COLOR,[Vh]:n.ONE_MINUS_DST_ALPHA,[Xh]:n.CONSTANT_COLOR,[qh]:n.ONE_MINUS_CONSTANT_COLOR,[Yh]:n.CONSTANT_ALPHA,[Zh]:n.ONE_MINUS_CONSTANT_ALPHA};function Kt(E,H,B,ht,ut,nt,gt,xt,zt,Dt){if(E===On){x===!0&&(bt(n.BLEND),x=!1);return}if(x===!1&&(ft(n.BLEND),x=!0),E!==Ph){if(E!==g||Dt!==k){if((C!==ki||I!==ki)&&(n.blendEquation(n.FUNC_ADD),C=ki,I=ki),Dt)switch(E){case Is:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ll:n.blendFunc(n.ONE,n.ONE);break;case Dl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Nt("WebGLState: Invalid blending: ",E);break}else switch(E){case Is:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ll:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Dl:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nl:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",E);break}D=null,w=null,R=null,F=null,S.set(0,0,0),N=0,g=E,k=Dt}return}ut=ut||H,nt=nt||B,gt=gt||ht,(H!==C||ut!==I)&&(n.blendEquationSeparate(ye[H],ye[ut]),C=H,I=ut),(B!==D||ht!==w||nt!==R||gt!==F)&&(n.blendFuncSeparate(Ot[B],Ot[ht],Ot[nt],Ot[gt]),D=B,w=ht,R=nt,F=gt),(xt.equals(S)===!1||zt!==N)&&(n.blendColor(xt.r,xt.g,xt.b,zt),S.copy(xt),N=zt),g=E,k=!1}function se(E,H){E.side===fn?bt(n.CULL_FACE):ft(n.CULL_FACE);let B=E.side===Fe;H&&(B=!B),Wt(B),E.blending===Is&&E.transparent===!1?Kt(On):Kt(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),o.setFunc(E.depthFunc),o.setTest(E.depthTest),o.setMask(E.depthWrite),r.setMask(E.colorWrite);let ht=E.stencilWrite;a.setTest(ht),ht&&(a.setMask(E.stencilWriteMask),a.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),a.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),Oe(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?ft(n.SAMPLE_ALPHA_TO_COVERAGE):bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(E){W!==E&&(E?n.frontFace(n.CW):n.frontFace(n.CCW),W=E)}function ne(E){E!==Ch?(ft(n.CULL_FACE),E!==$&&(E===Pl?n.cullFace(n.BACK):E===Rh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):bt(n.CULL_FACE),$=E}function ve(E){E!==tt&&(rt&&n.lineWidth(E),tt=E)}function Oe(E,H,B){E?(ft(n.POLYGON_OFFSET_FILL),(G!==H||Q!==B)&&(G=H,Q=B,o.getReversed()&&(H=-H),n.polygonOffset(H,B))):bt(n.POLYGON_OFFSET_FILL)}function ue(E){E?ft(n.SCISSOR_TEST):bt(n.SCISSOR_TEST)}function ge(E){E===void 0&&(E=n.TEXTURE0+ot-1),at!==E&&(n.activeTexture(E),at=E)}function V(E,H,B){B===void 0&&(at===null?B=n.TEXTURE0+ot-1:B=at);let ht=pt[B];ht===void 0&&(ht={type:void 0,texture:void 0},pt[B]=ht),(ht.type!==E||ht.texture!==H)&&(at!==B&&(n.activeTexture(B),at=B),n.bindTexture(E,H||lt[E]),ht.type=E,ht.texture=H)}function Re(){let E=pt[at];E!==void 0&&E.type!==void 0&&(n.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function Vt(){try{n.compressedTexImage2D(...arguments)}catch(E){Nt("WebGLState:",E)}}function P(){try{n.compressedTexImage3D(...arguments)}catch(E){Nt("WebGLState:",E)}}function y(){try{n.texSubImage2D(...arguments)}catch(E){Nt("WebGLState:",E)}}function q(){try{n.texSubImage3D(...arguments)}catch(E){Nt("WebGLState:",E)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(E){Nt("WebGLState:",E)}}function st(){try{n.compressedTexSubImage3D(...arguments)}catch(E){Nt("WebGLState:",E)}}function L(){try{n.texStorage2D(...arguments)}catch(E){Nt("WebGLState:",E)}}function d(){try{n.texStorage3D(...arguments)}catch(E){Nt("WebGLState:",E)}}function m(){try{n.texImage2D(...arguments)}catch(E){Nt("WebGLState:",E)}}function M(){try{n.texImage3D(...arguments)}catch(E){Nt("WebGLState:",E)}}function T(E){return f[E]!==void 0?f[E]:n.getParameter(E)}function A(E,H){f[E]!==H&&(n.pixelStorei(E,H),f[E]=H)}function O(E){jt.equals(E)===!1&&(n.scissor(E.x,E.y,E.z,E.w),jt.copy(E))}function U(E){qt.equals(E)===!1&&(n.viewport(E.x,E.y,E.z,E.w),qt.copy(E))}function Y(E,H){let B=c.get(H);B===void 0&&(B=new WeakMap,c.set(H,B));let ht=B.get(E);ht===void 0&&(ht=n.getUniformBlockIndex(H,E.name),B.set(E,ht))}function X(E,H){let ht=c.get(H).get(E);l.get(H)!==ht&&(n.uniformBlockBinding(H,ht,E.__bindingPointIndex),l.set(H,ht))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},at=null,pt={},u={},p=new WeakMap,_=[],v=null,x=!1,g=null,C=null,D=null,w=null,I=null,R=null,F=null,S=new kt(0,0,0),N=0,k=!1,W=null,$=null,tt=null,G=null,Q=null,jt.set(0,0,n.canvas.width,n.canvas.height),qt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ft,disable:bt,bindFramebuffer:Ft,drawBuffers:St,useProgram:Lt,setBlending:Kt,setMaterial:se,setFlipSided:Wt,setCullFace:ne,setLineWidth:ve,setPolygonOffset:Oe,setScissorTest:ue,activeTexture:ge,bindTexture:V,unbindTexture:Re,compressedTexImage2D:Vt,compressedTexImage3D:P,texImage2D:m,texImage3D:M,pixelStorei:A,getParameter:T,updateUBOMapping:Y,uniformBlockBinding:X,texStorage2D:L,texStorage3D:d,texSubImage2D:y,texSubImage3D:q,compressedTexSubImage2D:j,compressedTexSubImage3D:st,scissor:O,viewport:U,reset:dt}}function Sx(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,h=new WeakMap,f=new Set,u,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(P,y){return _?new OffscreenCanvas(P,y):tr("canvas")}function x(P,y,q){let j=1,st=Vt(P);if((st.width>q||st.height>q)&&(j=q/Math.max(st.width,st.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let L=Math.floor(j*st.width),d=Math.floor(j*st.height);u===void 0&&(u=v(L,d));let m=y?v(L,d):u;return m.width=L,m.height=d,m.getContext("2d").drawImage(P,0,0,L,d),Pt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+L+"x"+d+")."),m}else return"data"in P&&Pt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),P;return P}function g(P){return P.generateMipmaps}function C(P){n.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(P,y,q,j,st,L=!1){if(P!==null){if(n[P]!==void 0)return n[P];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let d;j&&(d=t.get("EXT_texture_norm16"),d||Pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let m=y;if(y===n.RED&&(q===n.FLOAT&&(m=n.R32F),q===n.HALF_FLOAT&&(m=n.R16F),q===n.UNSIGNED_BYTE&&(m=n.R8),q===n.UNSIGNED_SHORT&&d&&(m=d.R16_EXT),q===n.SHORT&&d&&(m=d.R16_SNORM_EXT)),y===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(m=n.R8UI),q===n.UNSIGNED_SHORT&&(m=n.R16UI),q===n.UNSIGNED_INT&&(m=n.R32UI),q===n.BYTE&&(m=n.R8I),q===n.SHORT&&(m=n.R16I),q===n.INT&&(m=n.R32I)),y===n.RG&&(q===n.FLOAT&&(m=n.RG32F),q===n.HALF_FLOAT&&(m=n.RG16F),q===n.UNSIGNED_BYTE&&(m=n.RG8),q===n.UNSIGNED_SHORT&&d&&(m=d.RG16_EXT),q===n.SHORT&&d&&(m=d.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(m=n.RG8UI),q===n.UNSIGNED_SHORT&&(m=n.RG16UI),q===n.UNSIGNED_INT&&(m=n.RG32UI),q===n.BYTE&&(m=n.RG8I),q===n.SHORT&&(m=n.RG16I),q===n.INT&&(m=n.RG32I)),y===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(m=n.RGB8UI),q===n.UNSIGNED_SHORT&&(m=n.RGB16UI),q===n.UNSIGNED_INT&&(m=n.RGB32UI),q===n.BYTE&&(m=n.RGB8I),q===n.SHORT&&(m=n.RGB16I),q===n.INT&&(m=n.RGB32I)),y===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(m=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(m=n.RGBA16UI),q===n.UNSIGNED_INT&&(m=n.RGBA32UI),q===n.BYTE&&(m=n.RGBA8I),q===n.SHORT&&(m=n.RGBA16I),q===n.INT&&(m=n.RGBA32I)),y===n.RGB&&(q===n.UNSIGNED_SHORT&&d&&(m=d.RGB16_EXT),q===n.SHORT&&d&&(m=d.RGB16_SNORM_EXT),q===n.UNSIGNED_INT_5_9_9_9_REV&&(m=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(m=n.R11F_G11F_B10F)),y===n.RGBA){let M=L?Qs:Jt.getTransfer(st);q===n.FLOAT&&(m=n.RGBA32F),q===n.HALF_FLOAT&&(m=n.RGBA16F),q===n.UNSIGNED_BYTE&&(m=M===ee?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT&&d&&(m=d.RGBA16_EXT),q===n.SHORT&&d&&(m=d.RGBA16_SNORM_EXT),q===n.UNSIGNED_SHORT_4_4_4_4&&(m=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(m=n.RGB5_A1)}return(m===n.R16F||m===n.R32F||m===n.RG16F||m===n.RG32F||m===n.RGBA16F||m===n.RGBA32F)&&t.get("EXT_color_buffer_float"),m}function I(P,y){let q;return P?y===null||y===vn||y===Ls?q=n.DEPTH24_STENCIL8:y===Mn?q=n.DEPTH32F_STENCIL8:y===Ps&&(q=n.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===vn||y===Ls?q=n.DEPTH_COMPONENT24:y===Mn?q=n.DEPTH_COMPONENT32F:y===Ps&&(q=n.DEPTH_COMPONENT16),q}function R(P,y){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==De&&P.minFilter!==Ue?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function F(P){let y=P.target;y.removeEventListener("dispose",F),N(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&f.delete(y)}function S(P){let y=P.target;y.removeEventListener("dispose",S),W(y)}function N(P){let y=i.get(P);if(y.__webglInit===void 0)return;let q=P.source,j=p.get(q);if(j){let st=j[y.__cacheKey];st.usedTimes--,st.usedTimes===0&&k(P),Object.keys(j).length===0&&p.delete(q)}i.remove(P)}function k(P){let y=i.get(P);n.deleteTexture(y.__webglTexture);let q=P.source,j=p.get(q);delete j[y.__cacheKey],o.memory.textures--}function W(P){let y=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let st=0;st<y.__webglFramebuffer[j].length;st++)n.deleteFramebuffer(y.__webglFramebuffer[j][st]);else n.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)n.deleteFramebuffer(y.__webglFramebuffer[j]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let q=P.textures;for(let j=0,st=q.length;j<st;j++){let L=i.get(q[j]);L.__webglTexture&&(n.deleteTexture(L.__webglTexture),o.memory.textures--),i.remove(q[j])}i.remove(P)}let $=0;function tt(){$=0}function G(){return $}function Q(P){$=P}function ot(){let P=$;return P>=s.maxTextures&&Pt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,P}function rt(P){let y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function mt(P,y){let q=i.get(P);if(P.isVideoTexture&&V(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&q.__version!==P.version){let j=P.image;if(j===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(q,P,y);return}}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+y)}function it(P,y){let q=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){bt(q,P,y);return}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+y)}function at(P,y){let q=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){bt(q,P,y);return}e.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+y)}function pt(P,y){let q=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&q.__version!==P.version){Ft(q,P,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+y)}let At={[gs]:n.REPEAT,[Rn]:n.CLAMP_TO_EDGE,[_o]:n.MIRRORED_REPEAT},Tt={[De]:n.NEAREST,[Kh]:n.NEAREST_MIPMAP_NEAREST,[dr]:n.NEAREST_MIPMAP_LINEAR,[Ue]:n.LINEAR,[Xo]:n.LINEAR_MIPMAP_NEAREST,[yi]:n.LINEAR_MIPMAP_LINEAR},jt={[eu]:n.NEVER,[ou]:n.ALWAYS,[nu]:n.LESS,[Ra]:n.LEQUAL,[iu]:n.EQUAL,[Ia]:n.GEQUAL,[su]:n.GREATER,[ru]:n.NOTEQUAL};function qt(P,y){if(y.type===Mn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ue||y.magFilter===Xo||y.magFilter===dr||y.magFilter===yi||y.minFilter===Ue||y.minFilter===Xo||y.minFilter===dr||y.minFilter===yi)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,At[y.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,At[y.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,At[y.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Tt[y.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Tt[y.minFilter]),y.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,jt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===De||y.minFilter!==dr&&y.minFilter!==yi||y.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");n.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function $t(P,y){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",F));let j=y.source,st=p.get(j);st===void 0&&(st={},p.set(j,st));let L=rt(y);if(L!==P.__cacheKey){st[L]===void 0&&(st[L]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),st[L].usedTimes++;let d=st[P.__cacheKey];d!==void 0&&(st[P.__cacheKey].usedTimes--,d.usedTimes===0&&k(y)),P.__cacheKey=L,P.__webglTexture=st[L].texture}return q}function lt(P,y,q){return Math.floor(Math.floor(P/q)/y)}function ft(P,y,q,j){let L=P.updateRanges;if(L.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,q,j,y.data);else{L.sort((A,O)=>A.start-O.start);let d=0;for(let A=1;A<L.length;A++){let O=L[d],U=L[A],Y=O.start+O.count,X=lt(U.start,y.width,4),dt=lt(O.start,y.width,4);U.start<=Y+1&&X===dt&&lt(U.start+U.count-1,y.width,4)===X?O.count=Math.max(O.count,U.start+U.count-O.start):(++d,L[d]=U)}L.length=d+1;let m=e.getParameter(n.UNPACK_ROW_LENGTH),M=e.getParameter(n.UNPACK_SKIP_PIXELS),T=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let A=0,O=L.length;A<O;A++){let U=L[A],Y=Math.floor(U.start/4),X=Math.ceil(U.count/4),dt=Y%y.width,E=Math.floor(Y/y.width),H=X,B=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(n.UNPACK_SKIP_ROWS,E),e.texSubImage2D(n.TEXTURE_2D,0,dt,E,H,B,q,j,y.data)}P.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,m),e.pixelStorei(n.UNPACK_SKIP_PIXELS,M),e.pixelStorei(n.UNPACK_SKIP_ROWS,T)}}function bt(P,y,q){let j=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=n.TEXTURE_3D);let st=$t(P,y),L=y.source;e.bindTexture(j,P.__webglTexture,n.TEXTURE0+q);let d=i.get(L);if(L.version!==d.__version||st===!0){if(e.activeTexture(n.TEXTURE0+q),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let B=Jt.getPrimaries(Jt.workingColorSpace),ht=y.colorSpace===jn?null:Jt.getPrimaries(y.colorSpace),ut=y.colorSpace===jn||B===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let M=x(y.image,!1,s.maxTextureSize);M=Re(y,M);let T=r.convert(y.format,y.colorSpace),A=r.convert(y.type),O=w(y.internalFormat,T,A,y.normalized,y.colorSpace,y.isVideoTexture);qt(j,y);let U,Y=y.mipmaps,X=y.isVideoTexture!==!0,dt=d.__version===void 0||st===!0,E=L.dataReady,H=R(y,M);if(y.isDepthTexture)O=I(y.format===vi,y.type),dt&&(X?e.texStorage2D(n.TEXTURE_2D,1,O,M.width,M.height):e.texImage2D(n.TEXTURE_2D,0,O,M.width,M.height,0,T,A,null));else if(y.isDataTexture)if(Y.length>0){X&&dt&&e.texStorage2D(n.TEXTURE_2D,H,O,Y[0].width,Y[0].height);for(let B=0,ht=Y.length;B<ht;B++)U=Y[B],X?E&&e.texSubImage2D(n.TEXTURE_2D,B,0,0,U.width,U.height,T,A,U.data):e.texImage2D(n.TEXTURE_2D,B,O,U.width,U.height,0,T,A,U.data);y.generateMipmaps=!1}else X?(dt&&e.texStorage2D(n.TEXTURE_2D,H,O,M.width,M.height),E&&ft(y,M,T,A)):e.texImage2D(n.TEXTURE_2D,0,O,M.width,M.height,0,T,A,M.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){X&&dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,H,O,Y[0].width,Y[0].height,M.depth);for(let B=0,ht=Y.length;B<ht;B++)if(U=Y[B],y.format!==dn)if(T!==null)if(X){if(E)if(y.layerUpdates.size>0){let ut=sc(U.width,U.height,y.format,y.type);for(let nt of y.layerUpdates){let gt=U.data.subarray(nt*ut/U.data.BYTES_PER_ELEMENT,(nt+1)*ut/U.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,nt,U.width,U.height,1,T,gt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,U.width,U.height,M.depth,T,U.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,B,O,U.width,U.height,M.depth,0,U.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?E&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,B,0,0,0,U.width,U.height,M.depth,T,A,U.data):e.texImage3D(n.TEXTURE_2D_ARRAY,B,O,U.width,U.height,M.depth,0,T,A,U.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{X&&dt&&e.texStorage2D(n.TEXTURE_2D,H,O,Y[0].width,Y[0].height);for(let B=0,ht=Y.length;B<ht;B++)U=Y[B],y.format!==dn?T!==null?X?E&&e.compressedTexSubImage2D(n.TEXTURE_2D,B,0,0,U.width,U.height,T,U.data):e.compressedTexImage2D(n.TEXTURE_2D,B,O,U.width,U.height,0,U.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?E&&e.texSubImage2D(n.TEXTURE_2D,B,0,0,U.width,U.height,T,A,U.data):e.texImage2D(n.TEXTURE_2D,B,O,U.width,U.height,0,T,A,U.data)}else if(y.isDataArrayTexture)if(X){if(dt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,H,O,M.width,M.height,M.depth),E)if(y.layerUpdates.size>0){let B=sc(M.width,M.height,y.format,y.type);for(let ht of y.layerUpdates){let ut=M.data.subarray(ht*B/M.data.BYTES_PER_ELEMENT,(ht+1)*B/M.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ht,M.width,M.height,1,T,A,ut)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,M.width,M.height,M.depth,T,A,M.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,O,M.width,M.height,M.depth,0,T,A,M.data);else if(y.isData3DTexture)X?(dt&&e.texStorage3D(n.TEXTURE_3D,H,O,M.width,M.height,M.depth),E&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,M.width,M.height,M.depth,T,A,M.data)):e.texImage3D(n.TEXTURE_3D,0,O,M.width,M.height,M.depth,0,T,A,M.data);else if(y.isFramebufferTexture){if(dt)if(X)e.texStorage2D(n.TEXTURE_2D,H,O,M.width,M.height);else{let B=M.width,ht=M.height;for(let ut=0;ut<H;ut++)e.texImage2D(n.TEXTURE_2D,ut,O,B,ht,0,T,A,null),B>>=1,ht>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let B=n.canvas;if(B.hasAttribute("layoutsubtree")||B.setAttribute("layoutsubtree","true"),M.parentNode!==B){B.appendChild(M),f.add(y),B.onpaint=ht=>{let ut=ht.changedElements;for(let nt of f)ut.includes(nt.image)&&(nt.needsUpdate=!0)},B.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,M);else{let ut=n.RGBA,nt=n.RGBA,gt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ut,nt,gt,M)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Y.length>0){if(X&&dt){let B=Vt(Y[0]);e.texStorage2D(n.TEXTURE_2D,H,O,B.width,B.height)}for(let B=0,ht=Y.length;B<ht;B++)U=Y[B],X?E&&e.texSubImage2D(n.TEXTURE_2D,B,0,0,T,A,U):e.texImage2D(n.TEXTURE_2D,B,O,T,A,U);y.generateMipmaps=!1}else if(X){if(dt){let B=Vt(M);e.texStorage2D(n.TEXTURE_2D,H,O,B.width,B.height)}E&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,T,A,M)}else e.texImage2D(n.TEXTURE_2D,0,O,T,A,M);g(y)&&C(j),d.__version=L.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Ft(P,y,q){if(y.image.length!==6)return;let j=$t(P,y),st=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+q);let L=i.get(st);if(st.version!==L.__version||j===!0){e.activeTexture(n.TEXTURE0+q);let d=Jt.getPrimaries(Jt.workingColorSpace),m=y.colorSpace===jn?null:Jt.getPrimaries(y.colorSpace),M=y.colorSpace===jn||d===m?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,M);let T=y.isCompressedTexture||y.image[0].isCompressedTexture,A=y.image[0]&&y.image[0].isDataTexture,O=[];for(let nt=0;nt<6;nt++)!T&&!A?O[nt]=x(y.image[nt],!0,s.maxCubemapSize):O[nt]=A?y.image[nt].image:y.image[nt],O[nt]=Re(y,O[nt]);let U=O[0],Y=r.convert(y.format,y.colorSpace),X=r.convert(y.type),dt=w(y.internalFormat,Y,X,y.normalized,y.colorSpace),E=y.isVideoTexture!==!0,H=L.__version===void 0||j===!0,B=st.dataReady,ht=R(y,U);qt(n.TEXTURE_CUBE_MAP,y);let ut;if(T){E&&H&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,dt,U.width,U.height);for(let nt=0;nt<6;nt++){ut=O[nt].mipmaps;for(let gt=0;gt<ut.length;gt++){let xt=ut[gt];y.format!==dn?Y!==null?E?B&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,0,0,xt.width,xt.height,Y,xt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,dt,xt.width,xt.height,0,xt.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):E?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,0,0,xt.width,xt.height,Y,X,xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,dt,xt.width,xt.height,0,Y,X,xt.data)}}}else{if(ut=y.mipmaps,E&&H){ut.length>0&&ht++;let nt=Vt(O[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,dt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(A){E?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,O[nt].width,O[nt].height,Y,X,O[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,dt,O[nt].width,O[nt].height,0,Y,X,O[nt].data);for(let gt=0;gt<ut.length;gt++){let zt=ut[gt].image[nt].image;E?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,0,0,zt.width,zt.height,Y,X,zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,dt,zt.width,zt.height,0,Y,X,zt.data)}}else{E?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Y,X,O[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,dt,Y,X,O[nt]);for(let gt=0;gt<ut.length;gt++){let xt=ut[gt];E?B&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,0,0,Y,X,xt.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,dt,Y,X,xt.image[nt])}}}g(y)&&C(n.TEXTURE_CUBE_MAP),L.__version=st.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function St(P,y,q,j,st,L){let d=r.convert(q.format,q.colorSpace),m=r.convert(q.type),M=w(q.internalFormat,d,m,q.normalized,q.colorSpace),T=i.get(y),A=i.get(q);if(A.__renderTarget=y,!T.__hasExternalTextures){let O=Math.max(1,y.width>>L),U=Math.max(1,y.height>>L);st===n.TEXTURE_3D||st===n.TEXTURE_2D_ARRAY?e.texImage3D(st,L,M,O,U,y.depth,0,d,m,null):e.texImage2D(st,L,M,O,U,0,d,m,null)}e.bindFramebuffer(n.FRAMEBUFFER,P),ge(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,st,A.__webglTexture,0,ue(y)):(st===n.TEXTURE_2D||st>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,st,A.__webglTexture,L),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(P,y,q){if(n.bindRenderbuffer(n.RENDERBUFFER,P),y.depthBuffer){let j=y.depthTexture,st=j&&j.isDepthTexture?j.type:null,L=I(y.stencilBuffer,st),d=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ge(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(y),L,y.width,y.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(y),L,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,L,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,d,n.RENDERBUFFER,P)}else{let j=y.textures;for(let st=0;st<j.length;st++){let L=j[st],d=r.convert(L.format,L.colorSpace),m=r.convert(L.type),M=w(L.internalFormat,d,m,L.normalized,L.colorSpace);ge(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue(y),M,y.width,y.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,ue(y),M,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,M,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(P,y,q){let j=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=i.get(y.depthTexture);if(st.__renderTarget=y,(!st.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j){if(st.__webglInit===void 0&&(st.__webglInit=!0,y.depthTexture.addEventListener("dispose",F)),st.__webglTexture===void 0){st.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,st.__webglTexture),qt(n.TEXTURE_CUBE_MAP,y.depthTexture);let T=r.convert(y.depthTexture.format),A=r.convert(y.depthTexture.type),O;y.depthTexture.format===Pn?O=n.DEPTH_COMPONENT24:y.depthTexture.format===vi&&(O=n.DEPTH24_STENCIL8);for(let U=0;U<6;U++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,O,y.width,y.height,0,T,A,null)}}else mt(y.depthTexture,0);let L=st.__webglTexture,d=ue(y),m=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+q:n.TEXTURE_2D,M=y.depthTexture.format===vi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===Pn)ge(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,M,m,L,0,d):n.framebufferTexture2D(n.FRAMEBUFFER,M,m,L,0);else if(y.depthTexture.format===vi)ge(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,M,m,L,0,d):n.framebufferTexture2D(n.FRAMEBUFFER,M,m,L,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ot(P){let y=i.get(P),q=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){let j=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){let st=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",st)};j.addEventListener("dispose",st),y.__depthDisposeCallback=st}y.__boundDepthTexture=j}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(q)for(let j=0;j<6;j++)ye(y.__webglFramebuffer[j],P,j);else{let j=P.texture.mipmaps;j&&j.length>0?ye(y.__webglFramebuffer[0],P,0):ye(y.__webglFramebuffer,P,0)}else if(q){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=n.createRenderbuffer(),Lt(y.__webglDepthbuffer[j],P,!1);else{let st=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,L=y.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,L),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,L)}}else{let j=P.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Lt(y.__webglDepthbuffer,P,!1);else{let st=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,L=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,L),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,L)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Kt(P,y,q){let j=i.get(P);y!==void 0&&St(j.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&Ot(P)}function se(P){let y=P.texture,q=i.get(P),j=i.get(y);P.addEventListener("dispose",S);let st=P.textures,L=P.isWebGLCubeRenderTarget===!0,d=st.length>1;if(d||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=y.version,o.memory.textures++),L){q.__webglFramebuffer=[];for(let m=0;m<6;m++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[m]=[];for(let M=0;M<y.mipmaps.length;M++)q.__webglFramebuffer[m][M]=n.createFramebuffer()}else q.__webglFramebuffer[m]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let m=0;m<y.mipmaps.length;m++)q.__webglFramebuffer[m]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(d)for(let m=0,M=st.length;m<M;m++){let T=i.get(st[m]);T.__webglTexture===void 0&&(T.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&ge(P)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let m=0;m<st.length;m++){let M=st[m];q.__webglColorRenderbuffer[m]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[m]);let T=r.convert(M.format,M.colorSpace),A=r.convert(M.type),O=w(M.internalFormat,T,A,M.normalized,M.colorSpace,P.isXRRenderTarget===!0),U=ue(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,U,O,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+m,n.RENDERBUFFER,q.__webglColorRenderbuffer[m])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),Lt(q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(L){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),qt(n.TEXTURE_CUBE_MAP,y);for(let m=0;m<6;m++)if(y.mipmaps&&y.mipmaps.length>0)for(let M=0;M<y.mipmaps.length;M++)St(q.__webglFramebuffer[m][M],P,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+m,M);else St(q.__webglFramebuffer[m],P,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+m,0);g(y)&&C(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(d){for(let m=0,M=st.length;m<M;m++){let T=st[m],A=i.get(T),O=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(O=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(O,A.__webglTexture),qt(O,T),St(q.__webglFramebuffer,P,T,n.COLOR_ATTACHMENT0+m,O,0),g(T)&&C(O)}e.unbindTexture()}else{let m=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(m=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(m,j.__webglTexture),qt(m,y),y.mipmaps&&y.mipmaps.length>0)for(let M=0;M<y.mipmaps.length;M++)St(q.__webglFramebuffer[M],P,y,n.COLOR_ATTACHMENT0,m,M);else St(q.__webglFramebuffer,P,y,n.COLOR_ATTACHMENT0,m,0);g(y)&&C(m),e.unbindTexture()}P.depthBuffer&&Ot(P)}function Wt(P){let y=P.textures;for(let q=0,j=y.length;q<j;q++){let st=y[q];if(g(st)){let L=D(P),d=i.get(st).__webglTexture;e.bindTexture(L,d),C(L),e.unbindTexture()}}}let ne=[],ve=[];function Oe(P){if(P.samples>0){if(ge(P)===!1){let y=P.textures,q=P.width,j=P.height,st=n.COLOR_BUFFER_BIT,L=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,d=i.get(P),m=y.length>1;if(m)for(let T=0;T<y.length;T++)e.bindFramebuffer(n.FRAMEBUFFER,d.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+T,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,d.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+T,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,d.__webglMultisampledFramebuffer);let M=P.texture.mipmaps;M&&M.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,d.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,d.__webglFramebuffer);for(let T=0;T<y.length;T++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(st|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(st|=n.STENCIL_BUFFER_BIT)),m){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,d.__webglColorRenderbuffer[T]);let A=i.get(y[T]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,A,0)}n.blitFramebuffer(0,0,q,j,0,0,q,j,st,n.NEAREST),l===!0&&(ne.length=0,ve.length=0,ne.push(n.COLOR_ATTACHMENT0+T),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ne.push(L),ve.push(L),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ve)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),m)for(let T=0;T<y.length;T++){e.bindFramebuffer(n.FRAMEBUFFER,d.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+T,n.RENDERBUFFER,d.__webglColorRenderbuffer[T]);let A=i.get(y[T]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,d.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+T,n.TEXTURE_2D,A,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,d.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let y=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function ue(P){return Math.min(s.maxSamples,P.samples)}function ge(P){let y=i.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function V(P){let y=o.render.frame;h.get(P)!==y&&(h.set(P,y),P.update())}function Re(P,y){let q=P.colorSpace,j=P.format,st=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==js&&q!==jn&&(Jt.getTransfer(q)===ee?(j!==dn||st!==tn)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",q)),y}function Vt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=ot,this.resetTextureUnits=tt,this.getTextureUnits=G,this.setTextureUnits=Q,this.setTexture2D=mt,this.setTexture2DArray=it,this.setTexture3D=at,this.setTextureCube=pt,this.rebindTextures=Kt,this.setupRenderTarget=se,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ge,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function bx(n,t){function e(i,s=jn){let r,o=Jt.getTransfer(s);if(i===tn)return n.UNSIGNED_BYTE;if(i===Yo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Xl)return n.BYTE;if(i===ql)return n.SHORT;if(i===Ps)return n.UNSIGNED_SHORT;if(i===qo)return n.INT;if(i===vn)return n.UNSIGNED_INT;if(i===Mn)return n.FLOAT;if(i===Sn)return n.HALF_FLOAT;if(i===$l)return n.ALPHA;if(i===Jl)return n.RGB;if(i===dn)return n.RGBA;if(i===Pn)return n.DEPTH_COMPONENT;if(i===vi)return n.DEPTH_STENCIL;if(i===Kl)return n.RED;if(i===$o)return n.RED_INTEGER;if(i===Mi)return n.RG;if(i===Jo)return n.RG_INTEGER;if(i===Ko)return n.RGBA_INTEGER;if(i===pr||i===mr||i===gr||i===xr)if(o===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jo||i===Qo||i===ta||i===ea)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===jo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ea)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===na||i===ia||i===sa||i===ra||i===oa||i===_r||i===aa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===na||i===ia)return o===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===sa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ra)return r.COMPRESSED_R11_EAC;if(i===oa)return r.COMPRESSED_SIGNED_R11_EAC;if(i===_r)return r.COMPRESSED_RG11_EAC;if(i===aa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===la||i===ca||i===ha||i===ua||i===fa||i===da||i===pa||i===ma||i===ga||i===xa||i===_a||i===ya||i===va||i===Ma)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===la)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ca)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ha)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ua)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===da)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ma)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ga)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_a)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ya)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===va)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ma)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sa||i===ba||i===Ea)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Sa)return o===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ea)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wa||i===Ta||i===yr||i===Aa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===wa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ta)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Aa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ls?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Ex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,_c=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new or(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new on({vertexShader:Ex,fragmentShader:wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new Un(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yc=class extends Ln{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,_=null,v=typeof XRWebGLBinding<"u",x=new _c,g={},C=e.getContextAttributes(),D=null,w=null,I=[],R=[],F=new Xt,S=null,N=null,k=new je;k.viewport=new me;let W=new je;W.viewport=new me;let $=[k,W],tt=new Go,G=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let ft=I[lt];return ft===void 0&&(ft=new Ss,I[lt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(lt){let ft=I[lt];return ft===void 0&&(ft=new Ss,I[lt]=ft),ft.getGripSpace()},this.getHand=function(lt){let ft=I[lt];return ft===void 0&&(ft=new Ss,I[lt]=ft),ft.getHandSpace()};function ot(lt){let ft=R.indexOf(lt.inputSource);if(ft===-1)return;let bt=I[ft];bt!==void 0&&(bt.update(lt.inputSource,lt.frame,c||o),bt.dispatchEvent({type:lt.type,data:lt.inputSource}))}function rt(){s.removeEventListener("select",ot),s.removeEventListener("selectstart",ot),s.removeEventListener("selectend",ot),s.removeEventListener("squeeze",ot),s.removeEventListener("squeezestart",ot),s.removeEventListener("squeezeend",ot),s.removeEventListener("end",rt),s.removeEventListener("inputsourceschange",mt);for(let lt=0;lt<I.length;lt++){let ft=R[lt];ft!==null&&(R[lt]=null,I[lt].disconnect(ft))}G=null,Q=null,x.reset();for(let lt in g)delete g[lt];if(t.setRenderTarget(D),p=null,u=null,f=null,s=null,w=null,$t.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(F.width,F.height,!1),N!==null){let lt=N.camera;lt.fov=N.fov,lt.zoom=N.zoom,lt.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){r=lt,i.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){a=lt,i.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(lt){c=lt},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(D=t.getRenderTarget(),s.addEventListener("select",ot),s.addEventListener("selectstart",ot),s.addEventListener("selectend",ot),s.addEventListener("squeeze",ot),s.addEventListener("squeezestart",ot),s.addEventListener("squeezeend",ot),s.addEventListener("end",rt),s.addEventListener("inputsourceschange",mt),C.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(F),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ft=null,St=null;C.depth&&(St=C.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=C.stencil?vi:Pn,Ft=C.stencil?Ls:vn);let Lt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Lt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),w=new Qe(u.textureWidth,u.textureHeight,{format:dn,type:tn,depthTexture:new di(u.textureWidth,u.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let bt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Qe(p.framebufferWidth,p.framebufferHeight,{format:dn,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function mt(lt){for(let ft=0;ft<lt.removed.length;ft++){let bt=lt.removed[ft],Ft=R.indexOf(bt);Ft>=0&&(R[Ft]=null,I[Ft].disconnect(bt))}for(let ft=0;ft<lt.added.length;ft++){let bt=lt.added[ft],Ft=R.indexOf(bt);if(Ft===-1){for(let Lt=0;Lt<I.length;Lt++)if(Lt>=R.length){R.push(bt),Ft=Lt;break}else if(R[Lt]===null){R[Lt]=bt,Ft=Lt;break}if(Ft===-1)break}let St=I[Ft];St&&St.connect(bt)}}let it=new Z,at=new Z;function pt(lt,ft,bt){it.setFromMatrixPosition(ft.matrixWorld),at.setFromMatrixPosition(bt.matrixWorld);let Ft=it.distanceTo(at),St=ft.projectionMatrix.elements,Lt=bt.projectionMatrix.elements,ye=St[14]/(St[10]-1),Ot=St[14]/(St[10]+1),Kt=(St[9]+1)/St[5],se=(St[9]-1)/St[5],Wt=(St[8]-1)/St[0],ne=(Lt[8]+1)/Lt[0],ve=ye*Wt,Oe=ye*ne,ue=Ft/(-Wt+ne),ge=ue*-Wt;if(ft.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(ge),lt.translateZ(ue),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),St[10]===-1)lt.projectionMatrix.copy(ft.projectionMatrix),lt.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{let V=ye+ue,Re=Ot+ue,Vt=ve-ge,P=Oe+(Ft-ge),y=Kt*Ot/Re*V,q=se*Ot/Re*V;lt.projectionMatrix.makePerspective(Vt,P,y,q,V,Re),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function At(lt,ft){ft===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(ft.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;let ft=lt.near,bt=lt.far;x.texture!==null&&(x.depthNear>0&&(ft=x.depthNear),x.depthFar>0&&(bt=x.depthFar)),tt.near=W.near=k.near=ft,tt.far=W.far=k.far=bt,(G!==tt.near||Q!==tt.far)&&(s.updateRenderState({depthNear:tt.near,depthFar:tt.far}),G=tt.near,Q=tt.far),tt.layers.mask=lt.layers.mask|6,k.layers.mask=tt.layers.mask&-5,W.layers.mask=tt.layers.mask&-3;let Ft=lt.parent,St=tt.cameras;At(tt,Ft);for(let Lt=0;Lt<St.length;Lt++)At(St[Lt],Ft);St.length===2?pt(tt,k,W):tt.projectionMatrix.copy(k.projectionMatrix),N===null&&lt.isPerspectiveCamera&&(N={camera:lt,fov:lt.fov,zoom:lt.zoom}),Tt(lt,tt,Ft)};function Tt(lt,ft,bt){bt===null?lt.matrix.copy(ft.matrixWorld):(lt.matrix.copy(bt.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(ft.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(ft.projectionMatrix),lt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=ys*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(lt){l=lt,u!==null&&(u.fixedFoveation=lt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=lt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(tt)},this.getCameraTexture=function(lt){return g[lt]};let jt=null;function qt(lt,ft){if(h=ft.getViewerPose(c||o),_=ft,h!==null){let bt=h.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let Ft=!1;bt.length!==tt.cameras.length&&(tt.cameras.length=0,Ft=!0);for(let Ot=0;Ot<bt.length;Ot++){let Kt=bt[Ot],se=null;if(p!==null)se=p.getViewport(Kt);else{let ne=f.getViewSubImage(u,Kt);se=ne.viewport,Ot===0&&(t.setRenderTargetTextures(w,ne.colorTexture,ne.depthStencilTexture),t.setRenderTarget(w))}let Wt=$[Ot];Wt===void 0&&(Wt=new je,Wt.layers.enable(Ot),Wt.viewport=new me,$[Ot]=Wt),Wt.matrix.fromArray(Kt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Kt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(se.x,se.y,se.width,se.height),Ot===0&&(tt.matrix.copy(Wt.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),Ft===!0&&tt.cameras.push(Wt)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();let Ot=f.getDepthInformation(bt[0]);Ot&&Ot.isValid&&Ot.texture&&x.init(Ot,s.renderState)}if(St&&St.includes("camera-access")&&v){t.state.unbindTexture(),f=i.getBinding();for(let Ot=0;Ot<bt.length;Ot++){let Kt=bt[Ot].camera;if(Kt){let se=g[Kt];se||(se=new or,g[Kt]=se);let Wt=f.getCameraImage(Kt);se.sourceTexture=Wt}}}}for(let bt=0;bt<I.length;bt++){let Ft=R[bt],St=I[bt];Ft!==null&&St!==void 0&&St.update(Ft,ft,c||o)}jt&&jt(lt,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),_=null}let $t=new Ou;$t.setAnimationLoop(qt),this.setAnimationLoop=function(lt){jt=lt},this.dispose=function(){}}},Tx=new ie,Hu=new Bt;Hu.set(-1,0,0,0,1,0,0,0,1);function Ax(n,t){function e(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function i(x,g){g.color.getRGB(x.fogColor.value,ec(n)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function s(x,g,C,D,w){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(x,g):g.isMeshLambertMaterial?(r(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(x,g),f(x,g)):g.isMeshPhongMaterial?(r(x,g),h(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(x,g),u(x,g),g.isMeshPhysicalMaterial&&p(x,g,w)):g.isMeshMatcapMaterial?(r(x,g),_(x,g)):g.isMeshDepthMaterial?r(x,g):g.isMeshDistanceMaterial?(r(x,g),v(x,g)):g.isMeshNormalMaterial?r(x,g):g.isLineBasicMaterial?(o(x,g),g.isLineDashedMaterial&&a(x,g)):g.isPointsMaterial?l(x,g,C,D):g.isSpriteMaterial?c(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,e(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Fe&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,e(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Fe&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,e(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,e(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);let C=t.get(g),D=C.envMap,w=C.envMapRotation;D&&(x.envMap.value=D,x.envMapRotation.value.setFromMatrix4(Tx.makeRotationFromEuler(w)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Hu),x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,x.aoMapTransform))}function o(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform))}function a(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function l(x,g,C,D){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*C,x.scale.value=D*.5,g.map&&(x.map.value=g.map,e(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function c(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function h(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function f(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function u(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function p(x,g,C){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Fe&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.retroreflectivity>0&&(x.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,x.specularIntensityMapTransform))}function _(x,g){g.matcap&&(x.matcap.value=g.matcap)}function v(x,g){let C=t.get(g).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Cx(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,I){let R=I.program;i.uniformBlockBinding(w,R)}function c(w,I){let R=s[w.id];R===void 0&&(x(w),R=h(w),s[w.id]=R,w.addEventListener("dispose",C));let F=I.program;i.updateUBOMapping(w,F);let S=t.render.frame;r[w.id]!==S&&(u(w),r[w.id]=S)}function h(w){let I=f();w.__bindingPointIndex=I;let R=n.createBuffer(),F=w.__size,S=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,F,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,I,R),R}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){let I=s[w.id],R=w.uniforms,F=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,I);for(let S=0,N=R.length;S<N;S++){let k=R[S];if(Array.isArray(k))for(let W=0,$=k.length;W<$;W++)p(k[W],S,W,F);else p(k,S,0,F)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,I,R,F){if(v(w,I,R,F)===!0){let S=w.__offset,N=w.value;if(Array.isArray(N)){let k=0;for(let W=0;W<N.length;W++){let $=N[W],tt=g($);_($,w.__data,k),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(k+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(N,w.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,w.__data)}}function _(w,I,R){typeof w=="number"||typeof w=="boolean"?I[0]=w:w.isMatrix3?(I[0]=w.elements[0],I[1]=w.elements[1],I[2]=w.elements[2],I[3]=0,I[4]=w.elements[3],I[5]=w.elements[4],I[6]=w.elements[5],I[7]=0,I[8]=w.elements[6],I[9]=w.elements[7],I[10]=w.elements[8],I[11]=0):ArrayBuffer.isView(w)?I.set(new w.constructor(w.buffer,w.byteOffset,I.length)):w.toArray(I,R)}function v(w,I,R,F){let S=w.value,N=I+"_"+R;if(F[N]===void 0)return typeof S=="number"||typeof S=="boolean"?F[N]=S:ArrayBuffer.isView(S)?F[N]=S.slice():F[N]=S.clone(),!0;{let k=F[N];if(typeof S=="number"||typeof S=="boolean"){if(k!==S)return F[N]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(k.equals(S)===!1)return k.copy(S),!0}}return!1}function x(w){let I=w.uniforms,R=0,F=16;for(let N=0,k=I.length;N<k;N++){let W=Array.isArray(I[N])?I[N]:[I[N]];for(let $=0,tt=W.length;$<tt;$++){let G=W[$],Q=Array.isArray(G.value)?G.value:[G.value];for(let ot=0,rt=Q.length;ot<rt;ot++){let mt=Q[ot],it=g(mt),at=R%F,pt=at%it.boundary,At=at+pt;R+=pt,At!==0&&F-At<it.storage&&(R+=F-At),G.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=R,R+=it.storage}}}let S=R%F;return S>0&&(R+=F-S),w.__size=R,w.__cache={},this}function g(w){let I={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(I.boundary=4,I.storage=4):w.isVector2?(I.boundary=8,I.storage=8):w.isVector3||w.isColor?(I.boundary=16,I.storage=12):w.isVector4?(I.boundary=16,I.storage=16):w.isMatrix3?(I.boundary=48,I.storage=48):w.isMatrix4?(I.boundary=64,I.storage=64):w.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(I.boundary=16,I.storage=w.byteLength):Pt("WebGLRenderer: Unsupported uniform value type.",w),I}function C(w){let I=w.target;I.removeEventListener("dispose",C);let R=o.indexOf(I.__bindingPointIndex);o.splice(R,1),n.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function D(){for(let w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:D}}var Rx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bn=null;function Ix(){return Bn===null&&(Bn=new bo(Rx,16,16,Mi,Sn),Bn.name="DFG_LUT",Bn.minFilter=Ue,Bn.magFilter=Ue,Bn.wrapS=Rn,Bn.wrapT=Rn,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}var br=class{constructor(t={}){let{canvas:e=lu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=tn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;let v=p,x=new Set([Ko,Jo,$o]),g=new Set([tn,vn,Ps,Ls,Yo,Zo]),C=new Uint32Array(4),D=new Int32Array(4),w=new Z,I=null,R=null,F=[],S=[],N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,W=!1,$=null,tt=null,G=null,Q=null;this._outputColorSpace=Ee;let ot=0,rt=0,mt=null,it=-1,at=null,pt=new me,At=new me,Tt=null,jt=new kt(0),qt=0,$t=e.width,lt=e.height,ft=1,bt=null,Ft=null,St=new me(0,0,$t,lt),Lt=new me(0,0,$t,lt),ye=!1,Ot=new Es,Kt=!1,se=!1,Wt=new ie,ne=new Z,ve=new me,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function ge(){return mt===null?ft:1}let V=i;function Re(b,z){return e.getContext(b,z)}let Vt,P,y,q,j,st,L,d,m,M,T,A,O,U,Y,X,dt,E,H,B,ht,ut,nt;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",zt,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",re,!1),V===null){let z="webgl2";if(V=Re(z,b),V===null)throw Re(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}gt()}catch(b){throw e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",re,!1),Nt("WebGLRenderer: "+b.message),b}function gt(){Vt=new Og(V),Vt.init(),ht=new bx(V,Vt),P=new Ag(V,Vt,t,ht),y=new Mx(V,Vt),P.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),tt=V.createFramebuffer(),G=V.createFramebuffer(),Q=V.createFramebuffer(),q=new kg(V),j=new ax,st=new Sx(V,Vt,y,j,P,ht,q),L=new Fg(k),d=new Gd(V),ut=new wg(V,d),m=new Bg(V,d,q,ut),M=new Gg(V,m,d,ut,q),E=new Vg(V,P,st),Y=new Cg(j),T=new ox(k,L,Vt,P,ut,Y),A=new Ax(k,j),O=new cx,U=new mx(Vt),dt=new Eg(k,L,y,M,_,l),X=new vx(k,M,P),nt=new Cx(V,q,P,y),H=new Tg(V,Vt,q),B=new zg(V,Vt,q),q.programs=T.programs,k.capabilities=P,k.extensions=Vt,k.properties=j,k.renderLists=O,k.shadowMap=X,k.state=y,k.info=q}v!==tn&&(N=new Wg(v,e.width,e.height,a,s,r));let xt=new yc(k,V);this.xr=xt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let b=Vt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Vt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ft},this.setPixelRatio=function(b){b!==void 0&&(ft=b,this.setSize($t,lt,!1))},this.getSize=function(b){return b.set($t,lt)},this.setSize=function(b,z,et=!0){if(xt.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}$t=b,lt=z,e.width=Math.floor(b*ft),e.height=Math.floor(z*ft),et===!0&&(e.style.width=b+"px",e.style.height=z+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set($t*ft,lt*ft).floor()},this.setDrawingBufferSize=function(b,z,et){$t=b,lt=z,ft=et,e.width=Math.floor(b*et),e.height=Math.floor(z*et),this.setViewport(0,0,b,z)},this.setEffects=function(b){if(v===tn){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let z=0;z<b.length;z++)if(b[z].isOutputPass===!0){Pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(pt)},this.getViewport=function(b){return b.copy(St)},this.setViewport=function(b,z,et,J){b.isVector4?St.set(b.x,b.y,b.z,b.w):St.set(b,z,et,J),y.viewport(pt.copy(St).multiplyScalar(ft).round())},this.getScissor=function(b){return b.copy(Lt)},this.setScissor=function(b,z,et,J){b.isVector4?Lt.set(b.x,b.y,b.z,b.w):Lt.set(b,z,et,J),y.scissor(At.copy(Lt).multiplyScalar(ft).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(b){y.setScissorTest(ye=b)},this.setOpaqueSort=function(b){bt=b},this.setTransparentSort=function(b){Ft=b},this.getClearColor=function(b){return b.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(b=!0,z=!0,et=!0){let J=0;if(b){let K=!1;if(mt!==null){let Mt=mt.texture.format;K=x.has(Mt)}if(K){let Mt=mt.texture.type,wt=g.has(Mt),vt=dt.getClearColor(),Ct=dt.getClearAlpha(),It=vt.r,Gt=vt.g,Yt=vt.b;wt?(C[0]=It,C[1]=Gt,C[2]=Yt,C[3]=Ct,V.clearBufferuiv(V.COLOR,0,C)):(D[0]=It,D[1]=Gt,D[2]=Yt,D[3]=Ct,V.clearBufferiv(V.COLOR,0,D))}else J|=V.COLOR_BUFFER_BIT}z&&(J|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(J|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&V.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),$=b},this.dispose=function(){e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",re,!1),dt.dispose(),O.dispose(),U.dispose(),j.dispose(),L.dispose(),M.dispose(),ut.dispose(),nt.dispose(),T.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",Ke),xt.removeEventListener("sessionend",ln),nn.stop()};function zt(b){b.preventDefault(),Ql("WebGLRenderer: Context Lost."),W=!0}function Dt(){Ql("WebGLRenderer: Context Restored."),W=!1;let b=q.autoReset,z=X.enabled,et=X.autoUpdate,J=X.needsUpdate,K=X.type;gt(),q.autoReset=b,X.enabled=z,X.autoUpdate=et,X.needsUpdate=J,X.type=K}function re(b){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function le(b){let z=b.target;z.removeEventListener("dispose",le),$e(z)}function $e(b){Ie(b),j.remove(b)}function Ie(b){let z=j.get(b).programs;z!==void 0&&(z.forEach(function(et){T.releaseProgram(et)}),b.isShaderMaterial&&T.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,et,J,K,Mt){z===null&&(z=Oe);let wt=K.isMesh&&K.matrixWorld.determinantAffine()<0,vt=Uf(b,z,et,J,K);y.setMaterial(J,wt);let Ct=et.index,It=1;if(J.wireframe===!0){if(Ct=m.getWireframeAttribute(et),Ct===void 0)return;It=2}let Gt=et.drawRange,Yt=et.attributes.position,Rt=Gt.start*It,te=(Gt.start+Gt.count)*It;Mt!==null&&(Rt=Math.max(Rt,Mt.start*It),te=Math.min(te,(Mt.start+Mt.count)*It)),Ct!==null?(Rt=Math.max(Rt,0),te=Math.min(te,Ct.count)):Yt!=null&&(Rt=Math.max(Rt,0),te=Math.min(te,Yt.count));let Se=te-Rt;if(Se<0||Se===1/0)return;ut.setup(K,J,vt,et,Ct);let fe,ce=H;if(Ct!==null&&(fe=d.get(Ct),ce=B,ce.setIndex(fe)),K.isMesh)J.wireframe===!0?(y.setLineWidth(J.wireframeLinewidth*ge()),ce.setMode(V.LINES)):ce.setMode(V.TRIANGLES);else if(K.isLine){let Be=J.linewidth;Be===void 0&&(Be=1),y.setLineWidth(Be*ge()),K.isLineSegments?ce.setMode(V.LINES):K.isLineLoop?ce.setMode(V.LINE_LOOP):ce.setMode(V.LINE_STRIP)}else K.isPoints?ce.setMode(V.POINTS):K.isSprite&&ce.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(Vt.get("WEBGL_multi_draw"))ce.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Be=K._multiDrawStarts,Et=K._multiDrawCounts,We=K._multiDrawCount,Qt=Ct?d.get(Ct).bytesPerElement:1,cn=j.get(J).currentProgram.getUniforms();for(let An=0;An<We;An++)cn.setValue(V,"_gl_DrawID",An),ce.render(Be[An]/Qt,Et[An])}else if(K.isInstancedMesh)ce.renderInstances(Rt,Se,K.count);else if(et.isInstancedBufferGeometry){let Be=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Et=Math.min(et.instanceCount,Be);ce.renderInstances(Rt,Se,Et)}else ce.render(Rt,Se)};function Je(b,z,et,J){$!==null&&b.isNodeMaterial&&$.setObject(J,b),Kt===!0&&Y.setState(b,et,!1),b.transparent===!0&&b.side===fn&&b.forceSinglePass===!1?(b.side=Fe,b.needsUpdate=!0,kr(b,z,J),b.side=Fn,b.needsUpdate=!0,kr(b,z,J),b.side=fn):kr(b,z,J)}this.compile=function(b,z,et=null){et===null&&(et=b),$!==null&&$.renderStart(b,z,et),R=U.get(et),R.init(z),S.push(R),et.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(R.pushLight(K),K.castShadow&&R.pushShadow(K))}),b!==et&&b.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(R.pushLight(K),K.castShadow&&R.pushShadow(K))}),R.setupLights(),$!==null&&$.updateLights(R.state.lightsArray),se=this.localClippingEnabled,Kt=Y.init(this.clippingPlanes,se),Kt===!0&&Y.setGlobalState(this.clippingPlanes,z),$!==null&&X.render(R.state.shadowsArray,et,z);let J=new Set;return b.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Mt=K.material;if(Mt)if(Array.isArray(Mt))for(let wt=0;wt<Mt.length;wt++){let vt=Mt[wt];Je(vt,et,z,K),J.add(vt)}else Je(Mt,et,z,K),J.add(Mt)}),R=S.pop(),$!==null&&$.renderEnd(),J},this.compileAsync=function(b,z,et=null){let J=this.compile(b,z,et);return new Promise(K=>{function Mt(){if(J.forEach(function(wt){let Ct=j.get(wt).currentProgram;(Ct===void 0||Ct.isReady())&&J.delete(wt)}),J.size===0){K(b);return}setTimeout(Mt,10)}Vt.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let He=null;function en(b){He&&He(b)}function Ke(){nn.stop()}function ln(){nn.start()}let nn=new Ou;nn.setAnimationLoop(en),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(b){He=b,xt.setAnimationLoop(b),b===null?nn.stop():nn.start()},xt.addEventListener("sessionstart",Ke),xt.addEventListener("sessionend",ln),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;$!==null&&$.renderStart(b,z);let et=xt.enabled===!0&&xt.isPresenting===!0,J=N!==null&&(mt===null||et)&&N.begin(k,mt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(z),z=xt.getCamera()),b.isScene===!0&&b.onBeforeRender(k,b,z,mt),R=U.get(b,S.length),R.init(z),R.state.textureUnits=st.getTextureUnits(),S.push(R),Wt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ot.setFromProjectionMatrix(Wt,_n,z.reversedDepth),se=this.localClippingEnabled,Kt=Y.init(this.clippingPlanes,se),I=O.get(b,F.length),I.init(),F.push(I),xt.enabled===!0&&xt.isPresenting===!0){let wt=k.xr.getDepthSensingMesh();wt!==null&&Hs(wt,z,-1/0,k.sortObjects)}Hs(b,z,0,k.sortObjects),I.finish(),$!==null&&$.updateLights(R.state.lightsArray),k.sortObjects===!0&&I.sort(bt,Ft),ue=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,ue&&dt.addToRenderList(I,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Kt===!0&&Y.beginShadows();let K=R.state.shadowsArray;if(X.render(K,b,z),Kt===!0&&Y.endShadows(),(J&&N.hasRenderPass())===!1){let wt=I.opaque,vt=I.transmissive;if(R.setupLights(),z.isArrayCamera){let Ct=z.cameras;if(vt.length>0)for(let It=0,Gt=Ct.length;It<Gt;It++){let Yt=Ct[It];Br(wt,vt,b,Yt)}ue&&dt.render(b);for(let It=0,Gt=Ct.length;It<Gt;It++){let Yt=Ct[It];Or(I,b,Yt,Yt.viewport)}}else vt.length>0&&Br(wt,vt,b,z),ue&&dt.render(b),Or(I,b,z)}mt!==null&&rt===0&&(st.updateMultisampleRenderTarget(mt),st.updateRenderTargetMipmap(mt)),J&&N.end(k),b.isScene===!0&&b.onAfterRender(k,b,z),ut.resetDefaultState(),it=-1,at=null,S.pop(),S.length>0?(R=S[S.length-1],st.setTextureUnits(R.state.textureUnits),Kt===!0&&Y.setGlobalState(k.clippingPlanes,R.state.camera)):R=null,F.pop(),F.length>0?I=F[F.length-1]:I=null,$!==null&&$.renderEnd()};function Hs(b,z,et,J){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)et=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLightProbeGrid)R.pushLightProbeGrid(b);else if(b.isLight)R.pushLight(b),b.castShadow&&R.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Ot)){J&&ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Wt);let wt=M.update(b),vt=b.material;vt.visible&&I.push(b,wt,vt,et,ve.z,null,z)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Ot))){let wt=M.update(b),vt=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ve.copy(b.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),ve.copy(wt.boundingSphere.center)),ve.applyMatrix4(b.matrixWorld).applyMatrix4(Wt)),Array.isArray(vt)){let Ct=wt.groups;for(let It=0,Gt=Ct.length;It<Gt;It++){let Yt=Ct[It],Rt=vt[Yt.materialIndex];Rt&&Rt.visible&&I.push(b,wt,Rt,et,ve.z,Yt,z)}}else vt.visible&&I.push(b,wt,vt,et,ve.z,null,z)}}let Mt=b.children;for(let wt=0,vt=Mt.length;wt<vt;wt++)Hs(Mt[wt],z,et,J)}function Or(b,z,et,J){let{opaque:K,transmissive:Mt,transparent:wt}=b;R.setupLightsView(et),Kt===!0&&Y.setGlobalState(k.clippingPlanes,et),J&&y.viewport(pt.copy(J)),K.length>0&&zr(K,z,et),Mt.length>0&&zr(Mt,z,et),wt.length>0&&zr(wt,z,et),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Br(b,z,et,J){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[J.id]===void 0){let Rt=Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[J.id]=new Qe(1,1,{generateMipmaps:!0,type:Rt?Sn:tn,minFilter:yi,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let Mt=R.state.transmissionRenderTarget[J.id],wt=J.viewport||pt;Mt.setSize(wt.z*k.transmissionResolutionScale,wt.w*k.transmissionResolutionScale);let vt=k.getRenderTarget(),Ct=k.getActiveCubeFace(),It=k.getActiveMipmapLevel();k.setRenderTarget(Mt),k.getClearColor(jt),qt=k.getClearAlpha(),qt<1&&k.setClearColor(16777215,.5),k.clear(),ue&&dt.render(et);let Gt=k.toneMapping;k.toneMapping=yn;let Yt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),R.setupLightsView(J),Kt===!0&&Y.setGlobalState(k.clippingPlanes,J),zr(b,et,J),st.updateMultisampleRenderTarget(Mt),st.updateRenderTargetMipmap(Mt),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let te=0,Se=z.length;te<Se;te++){let fe=z[te],{object:ce,geometry:Be,material:Et,group:We}=fe;if(Et.side===fn&&ce.layers.test(J.layers)){let Qt=Et.side;Et.side=Fe,Et.needsUpdate=!0,Yc(ce,et,J,Be,Et,We),Et.side=Qt,Et.needsUpdate=!0,Rt=!0}}Rt===!0&&(st.updateMultisampleRenderTarget(Mt),st.updateRenderTargetMipmap(Mt))}k.setRenderTarget(vt,Ct,It),k.setClearColor(jt,qt),Yt!==void 0&&(J.viewport=Yt),k.toneMapping=Gt}function zr(b,z,et){let J=z.isScene===!0?z.overrideMaterial:null;for(let K=0,Mt=b.length;K<Mt;K++){let wt=b[K],{object:vt,geometry:Ct,group:It}=wt,Gt=wt.material;Gt.allowOverride===!0&&J!==null&&(Gt=J),vt.layers.test(et.layers)&&Yc(vt,z,et,Ct,Gt,It)}}function Yc(b,z,et,J,K,Mt){$!==null&&K.isNodeMaterial&&$.setObject(b,K),b.onBeforeRender(k,z,et,J,K,Mt),b.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),K.onBeforeRender(k,z,et,J,b,Mt),K.transparent===!0&&K.side===fn&&K.forceSinglePass===!1?(K.side=Fe,K.needsUpdate=!0,k.renderBufferDirect(et,z,J,K,b,Mt),K.side=Fn,K.needsUpdate=!0,k.renderBufferDirect(et,z,J,K,b,Mt),K.side=fn):k.renderBufferDirect(et,z,J,K,b,Mt),b.onAfterRender(k,z,et,J,K,Mt)}function kr(b,z,et){z.isScene!==!0&&(z=Oe);let J=j.get(b),K=R.state.lights,Mt=R.state.shadowsArray,wt=K.state.version,vt=T.getParameters(b,K.state,Mt,z,et,R.state.lightProbeGridArray),Ct=T.getProgramCacheKey(vt),It=J.programs;J.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?z.environment:null,J.fog=z.fog;let Gt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;J.envMap=L.get(b.envMap||J.environment,Gt),J.envMapRotation=J.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,It===void 0&&(b.addEventListener("dispose",le),It=new Map,J.programs=It);let Yt=It.get(Ct);if(Yt!==void 0){if(J.currentProgram===Yt&&J.lightsStateVersion===wt)return $c(b,vt),Yt}else vt.uniforms=T.getUniforms(b),$!==null&&b.isNodeMaterial&&$.build(b,et,vt),b.onBeforeCompile(vt,k),Yt=T.acquireProgram(vt,Ct),It.set(Ct,Yt),J.uniforms=vt.uniforms;let Rt=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=Y.uniform),$c(b,vt),J.needsLights=Of(b),J.lightsStateVersion=wt,J.needsLights&&(Rt.ambientLightColor.value=K.state.ambient,Rt.lightProbe.value=K.state.probe,Rt.sunLights.value=K.state.sun,Rt.sunLightShadows.value=K.state.sunShadow,Rt.directionalLights.value=K.state.directional,Rt.directionalLightShadows.value=K.state.directionalShadow,Rt.spotLights.value=K.state.spot,Rt.spotLightShadows.value=K.state.spotShadow,Rt.rectAreaLights.value=K.state.rectArea,Rt.ltc_1.value=K.state.rectAreaLTC1,Rt.ltc_2.value=K.state.rectAreaLTC2,Rt.pointLights.value=K.state.point,Rt.pointLightShadows.value=K.state.pointShadow,Rt.hemisphereLights.value=K.state.hemi,Rt.sunShadowMatrix.value=K.state.sunShadowMatrix,Rt.sunShadowCascade.value=K.state.sunShadowCascade,Rt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Rt.spotLightMatrix.value=K.state.spotLightMatrix,Rt.spotLightMap.value=K.state.spotLightMap,Rt.pointShadowMatrix.value=K.state.pointShadowMatrix),J.lightProbeGrid=R.state.lightProbeGridArray.length>0,J.currentProgram=Yt,J.uniformsList=null,Yt}function Zc(b){if(b.uniformsList===null){let z=b.currentProgram.getUniforms();b.uniformsList=Fs.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function $c(b,z){let et=j.get(b);et.outputColorSpace=z.outputColorSpace,et.batching=z.batching,et.batchingColor=z.batchingColor,et.instancing=z.instancing,et.instancingColor=z.instancingColor,et.instancingMorph=z.instancingMorph,et.skinning=z.skinning,et.morphTargets=z.morphTargets,et.morphNormals=z.morphNormals,et.morphColors=z.morphColors,et.morphTargetsCount=z.morphTargetsCount,et.numClippingPlanes=z.numClippingPlanes,et.numIntersection=z.numClipIntersection,et.vertexAlphas=z.vertexAlphas,et.vertexTangents=z.vertexTangents,et.toneMapping=z.toneMapping}function Nf(b,z){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;w.setFromMatrixPosition(z.matrixWorld);for(let et=0,J=b.length;et<J;et++){let K=b[et];if(K.texture!==null&&K.boundingBox.containsPoint(w))return K}return null}function Uf(b,z,et,J,K){z.isScene!==!0&&(z=Oe),st.resetTextureUnits();let Mt=z.fog,wt=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?z.environment:null,vt=mt===null?k.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Jt.workingColorSpace,Ct=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,It=L.get(J.envMap||wt,Ct),Gt=J.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Yt=!!et.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Rt=!!et.morphAttributes.position,te=!!et.morphAttributes.normal,Se=!!et.morphAttributes.color,fe=yn;J.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(fe=k.toneMapping);let ce=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Be=ce!==void 0?ce.length:0,Et=j.get(J),We=R.state.lights;if(Kt===!0&&(se===!0||b!==at)){let he=b===at&&J.id===it;Y.setState(J,b,he)}let Qt=!1;J.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==We.state.version||Et.outputColorSpace!==vt||K.isBatchedMesh&&Et.batching===!1||!K.isBatchedMesh&&Et.batching===!0||K.isBatchedMesh&&Et.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Et.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Et.instancing===!1||!K.isInstancedMesh&&Et.instancing===!0||K.isSkinnedMesh&&Et.skinning===!1||!K.isSkinnedMesh&&Et.skinning===!0||K.isInstancedMesh&&Et.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Et.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Et.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Et.instancingMorph===!1&&K.morphTexture!==null||Et.envMap!==It||J.fog===!0&&Et.fog!==Mt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Y.numPlanes||Et.numIntersection!==Y.numIntersection)||Et.vertexAlphas!==Gt||Et.vertexTangents!==Yt||Et.morphTargets!==Rt||Et.morphNormals!==te||Et.morphColors!==Se||Et.toneMapping!==fe||Et.morphTargetsCount!==Be||!!Et.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(Qt=!0):(Qt=!0,Et.__version=J.version);let cn=Et.currentProgram;Qt===!0&&(cn=kr(J,z,K),$&&J.isNodeMaterial&&$.onUpdateProgram(J,cn,Et));let An=!1,ii=!1,ji=!1,oe=cn.getUniforms(),Me=Et.uniforms;if(y.useProgram(cn.program)&&(An=!0,ii=!0,ji=!0),J.id!==it&&(it=J.id,ii=!0),Et.needsLights){let he=Nf(R.state.lightProbeGridArray,K);Et.lightProbeGrid!==he&&(Et.lightProbeGrid=he,ii=!0)}if(An||at!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),oe.setValue(V,"projectionMatrix",b.projectionMatrix),oe.setValue(V,"viewMatrix",b.matrixWorldInverse);let ri=oe.map.cameraPosition;ri!==void 0&&ri.setValue(V,ne.setFromMatrixPosition(b.matrixWorld)),P.logarithmicDepthBuffer&&oe.setValue(V,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&oe.setValue(V,"isOrthographic",b.isOrthographicCamera===!0),at!==b&&(at=b,ii=!0,ji=!0)}if(Et.needsLights&&(We.state.sunShadowMap.length>0&&oe.setValue(V,"sunShadowMap",We.state.sunShadowMap,st),We.state.directionalShadowMap.length>0&&oe.setValue(V,"directionalShadowMap",We.state.directionalShadowMap,st),We.state.spotShadowMap.length>0&&oe.setValue(V,"spotShadowMap",We.state.spotShadowMap,st),We.state.pointShadowMap.length>0&&oe.setValue(V,"pointShadowMap",We.state.pointShadowMap,st)),K.isSkinnedMesh){oe.setOptional(V,K,"bindMatrix"),oe.setOptional(V,K,"bindMatrixInverse");let he=K.skeleton;he&&(he.boneTexture===null&&he.computeBoneTexture(),oe.setValue(V,"boneTexture",he.boneTexture,st))}K.isBatchedMesh&&(oe.setOptional(V,K,"batchingTexture"),oe.setValue(V,"batchingTexture",K._matricesTexture,st),oe.setOptional(V,K,"batchingIdTexture"),oe.setValue(V,"batchingIdTexture",K._indirectTexture,st),oe.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&oe.setValue(V,"batchingColorTexture",K._colorsTexture,st));let si=et.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&E.update(K,et,cn),(ii||Et.receiveShadow!==K.receiveShadow)&&(Et.receiveShadow=K.receiveShadow,oe.setValue(V,"receiveShadow",K.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&z.environment!==null&&(Me.envMapIntensity.value=z.environmentIntensity),Me.dfgLUT!==void 0&&(Me.dfgLUT.value=Ix()),ii){if(oe.setValue(V,"toneMappingExposure",k.toneMappingExposure),Et.needsLights&&Ff(Me,ji),Mt&&J.fog===!0&&A.refreshFogUniforms(Me,Mt),A.refreshMaterialUniforms(Me,J,ft,lt,R.state.transmissionRenderTarget[b.id]),Et.needsLights&&Et.lightProbeGrid){let he=Et.lightProbeGrid;Me.probesSH.value=he.texture,Me.probesMin.value.copy(he.boundingBox.min),Me.probesMax.value.copy(he.boundingBox.max),Me.probesResolution.value.copy(he.resolution)}Fs.upload(V,Zc(Et),Me,st)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Fs.upload(V,Zc(Et),Me,st),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&oe.setValue(V,"center",K.center),oe.setValue(V,"modelViewMatrix",K.modelViewMatrix),oe.setValue(V,"normalMatrix",K.normalMatrix),oe.setValue(V,"modelMatrix",K.matrixWorld),J.uniformsGroups!==void 0){let he=J.uniformsGroups;for(let ri=0,Qi=he.length;ri<Qi;ri++){let Kc=he[ri];nt.update(Kc,cn),nt.bind(Kc,cn)}}return cn}function Ff(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.sunLights.needsUpdate=z,b.sunLightShadows.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function Of(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return ot},this.getActiveMipmapLevel=function(){return rt},this.getRenderTarget=function(){return mt},this.setRenderTargetTextures=function(b,z,et){let J=j.get(b);J.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),j.get(b.texture).__webglTexture=z,j.get(b.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:et,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,z){let et=j.get(b);et.__webglFramebuffer=z,et.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,et=0){mt=b,ot=z,rt=et;let J=null,K=!1,Mt=!1;if(b){let vt=j.get(b);if(vt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(V.FRAMEBUFFER,vt.__webglFramebuffer),pt.copy(b.viewport),At.copy(b.scissor),Tt=b.scissorTest,y.viewport(pt),y.scissor(At),y.setScissorTest(Tt),it=-1;return}else if(vt.__webglFramebuffer===void 0)st.setupRenderTarget(b);else if(vt.__hasExternalTextures)st.rebindTextures(b,j.get(b.texture).__webglTexture,j.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Gt=b.depthTexture;if(vt.__boundDepthTexture!==Gt){if(Gt!==null&&j.has(Gt)&&(b.width!==Gt.image.width||b.height!==Gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(b)}}let Ct=b.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(Mt=!0);let It=j.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(It[z])?J=It[z][et]:J=It[z],K=!0):b.samples>0&&st.useMultisampledRTT(b)===!1?J=j.get(b).__webglMultisampledFramebuffer:Array.isArray(It)?J=It[et]:J=It,pt.copy(b.viewport),At.copy(b.scissor),Tt=b.scissorTest}else pt.copy(St).multiplyScalar(ft).floor(),At.copy(Lt).multiplyScalar(ft).floor(),Tt=ye;if(et!==0&&(J=tt),y.bindFramebuffer(V.FRAMEBUFFER,J)&&y.drawBuffers(b,J),y.viewport(pt),y.scissor(At),y.setScissorTest(Tt),K){let vt=j.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+z,vt.__webglTexture,et)}else if(Mt){let vt=z;for(let Ct=0;Ct<b.textures.length;Ct++){let It=j.get(b.textures[Ct]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ct,It.__webglTexture,et,vt)}}else if(b!==null&&et!==0){let vt=j.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,vt.__webglTexture,et)}it=-1};function Jc(b){let z=j.get(b);return(z.__readFormat!==b.format||z.__readType!==b.type)&&(z.__readFormat=b.format,z.__readType=b.type,z.__formatReadable=P.textureFormatReadable(b.format),z.__typeReadable=P.textureTypeReadable(b.type)),z}this.readRenderTargetPixels=function(b,z,et,J,K,Mt,wt,vt=0){if(!(b&&b.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=j.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct){y.bindFramebuffer(V.FRAMEBUFFER,Ct);try{let It=b.textures[vt],Gt=It.format,Yt=It.type;b.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+vt);let Rt=Jc(It);if(Rt.__formatReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-J&&et>=0&&et<=b.height-K&&V.readPixels(z,et,J,K,ht.convert(Gt),ht.convert(Yt),Mt)}finally{let It=mt!==null?j.get(mt).__webglFramebuffer:null;y.bindFramebuffer(V.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(b,z,et,J,K,Mt,wt,vt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=j.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct)if(z>=0&&z<=b.width-J&&et>=0&&et<=b.height-K){y.bindFramebuffer(V.FRAMEBUFFER,Ct);let It=b.textures[vt],Gt=It.format,Yt=It.type;b.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+vt);let Rt=Jc(It);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,te),V.bufferData(V.PIXEL_PACK_BUFFER,Mt.byteLength,V.STREAM_READ),V.readPixels(z,et,J,K,ht.convert(Gt),ht.convert(Yt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Se=mt!==null?j.get(mt).__webglFramebuffer:null;y.bindFramebuffer(V.FRAMEBUFFER,Se);let fe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await hu(V,fe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,te),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Mt),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(te),V.deleteSync(fe),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,z=null,et=0){let J=Math.pow(2,-et),K=Math.floor(b.image.width*J),Mt=Math.floor(b.image.height*J),wt=z!==null?z.x:0,vt=z!==null?z.y:0;st.setTexture2D(b,0),V.copyTexSubImage2D(V.TEXTURE_2D,et,0,0,wt,vt,K,Mt),y.unbindTexture()},this.copyTextureToTexture=function(b,z,et=null,J=null,K=0,Mt=0){let wt,vt,Ct,It,Gt,Yt,Rt,te,Se,fe=b.isCompressedTexture?b.mipmaps[Mt]:b.image;if(et!==null)wt=et.max.x-et.min.x,vt=et.max.y-et.min.y,Ct=et.isBox3?et.max.z-et.min.z:1,It=et.min.x,Gt=et.min.y,Yt=et.isBox3?et.min.z:0;else{let Me=Math.pow(2,-K);wt=Math.floor(fe.width*Me),vt=Math.floor(fe.height*Me),b.isDataArrayTexture?Ct=fe.depth:b.isData3DTexture?Ct=Math.floor(fe.depth*Me):Ct=1,It=0,Gt=0,Yt=0}J!==null?(Rt=J.x,te=J.y,Se=J.z):(Rt=0,te=0,Se=0);let ce=ht.convert(z.format),Be=ht.convert(z.type),Et;z.isData3DTexture?(st.setTexture3D(z,0),Et=V.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(st.setTexture2DArray(z,0),Et=V.TEXTURE_2D_ARRAY):(st.setTexture2D(z,0),Et=V.TEXTURE_2D),y.activeTexture(V.TEXTURE0),y.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(V.UNPACK_ALIGNMENT,z.unpackAlignment);let We=y.getParameter(V.UNPACK_ROW_LENGTH),Qt=y.getParameter(V.UNPACK_IMAGE_HEIGHT),cn=y.getParameter(V.UNPACK_SKIP_PIXELS),An=y.getParameter(V.UNPACK_SKIP_ROWS),ii=y.getParameter(V.UNPACK_SKIP_IMAGES);y.pixelStorei(V.UNPACK_ROW_LENGTH,fe.width),y.pixelStorei(V.UNPACK_IMAGE_HEIGHT,fe.height),y.pixelStorei(V.UNPACK_SKIP_PIXELS,It),y.pixelStorei(V.UNPACK_SKIP_ROWS,Gt),y.pixelStorei(V.UNPACK_SKIP_IMAGES,Yt);let ji=b.isDataArrayTexture||b.isData3DTexture,oe=z.isDataArrayTexture||z.isData3DTexture;if(b.isDepthTexture){let Me=j.get(b),si=j.get(z),he=j.get(Me.__renderTarget),ri=j.get(si.__renderTarget);y.bindFramebuffer(V.READ_FRAMEBUFFER,he.__webglFramebuffer),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let Qi=0;Qi<Ct;Qi++)ji&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,j.get(b).__webglTexture,K,Yt+Qi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,j.get(z).__webglTexture,Mt,Se+Qi)),V.blitFramebuffer(It,Gt,wt,vt,Rt,te,wt,vt,V.DEPTH_BUFFER_BIT,V.NEAREST);y.bindFramebuffer(V.READ_FRAMEBUFFER,null),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||b.isRenderTargetTexture||j.has(b)){let Me=j.get(b),si=j.get(z);y.bindFramebuffer(V.READ_FRAMEBUFFER,G),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,Q);for(let he=0;he<Ct;he++)ji?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Me.__webglTexture,K,Yt+he):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Me.__webglTexture,K),oe?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,si.__webglTexture,Mt,Se+he):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,si.__webglTexture,Mt),K!==0?V.blitFramebuffer(It,Gt,wt,vt,Rt,te,wt,vt,V.COLOR_BUFFER_BIT,V.NEAREST):oe?V.copyTexSubImage3D(Et,Mt,Rt,te,Se+he,It,Gt,wt,vt):V.copyTexSubImage2D(Et,Mt,Rt,te,It,Gt,wt,vt);y.bindFramebuffer(V.READ_FRAMEBUFFER,null),y.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else oe?b.isDataTexture||b.isData3DTexture?V.texSubImage3D(Et,Mt,Rt,te,Se,wt,vt,Ct,ce,Be,fe.data):z.isCompressedArrayTexture?V.compressedTexSubImage3D(Et,Mt,Rt,te,Se,wt,vt,Ct,ce,fe.data):V.texSubImage3D(Et,Mt,Rt,te,Se,wt,vt,Ct,ce,Be,fe):b.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Mt,Rt,te,wt,vt,ce,Be,fe.data):b.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Mt,Rt,te,fe.width,fe.height,ce,fe.data):V.texSubImage2D(V.TEXTURE_2D,Mt,Rt,te,wt,vt,ce,Be,fe);y.pixelStorei(V.UNPACK_ROW_LENGTH,We),y.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Qt),y.pixelStorei(V.UNPACK_SKIP_PIXELS,cn),y.pixelStorei(V.UNPACK_SKIP_ROWS,An),y.pixelStorei(V.UNPACK_SKIP_IMAGES,ii),Mt===0&&z.generateMipmaps&&V.generateMipmap(Et),y.unbindTexture()},this.initRenderTarget=function(b){j.get(b).__webglFramebuffer===void 0&&st.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?st.setTextureCube(b,0):b.isData3DTexture?st.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?st.setTexture2DArray(b,0):st.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){ot=0,rt=0,mt=null,y.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}};function Mc(n,t){let e=new ie().copy(t).invert();return new fi(new Z().fromArray(n.origin),new Z().fromArray(n.direction)).applyMatrix4(e).intersectPlane(new qe(new Z(0,0,1),0),new Z)}var Qu=Qc(Ec(),1);var Cc=Qc(Ec(),1);function Ac(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Xu(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Ux(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let h=a,f=l;for(let u=e;u<s;u+=e){let p=n[u],_=n[u+1];p<a&&(a=p),_<l&&(l=_),p>h&&(h=p),_>f&&(f=_)}c=Math.max(h-a,f-l),c=c!==0?32767/c:0}return wr(r,o,e,a,l,c,0),o}function Xu(n,t,e,i,s){let r;if(s===qx(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Wu(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Wu(o/i|0,n[o],n[o+1],r);return r&&Bs(r,r.next)&&(Ar(r),r=r.next),r}function Xi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Bs(e,e.next)||xe(e.prev,e,e.next)===0)){if(Ar(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function wr(n,t,e,i,s,r,o){if(!n)return;!o&&r&&kx(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Lx(n,i,s,r):Px(n)){t.push(l.i,n.i,c.i),Ar(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Dx(Xi(n),t),wr(n,t,e,i,s,r,2)):o===2&&Nx(n,t,e,i,s,r):wr(Xi(n),t,e,i,s,r,1);break}}}function Px(n){let t=n.prev,e=n,i=n.next;if(xe(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,h=Math.min(s,r,o),f=Math.min(a,l,c),u=Math.max(s,r,o),p=Math.max(a,l,c),_=i.next;for(;_!==t;){if(_.x>=h&&_.x<=u&&_.y>=f&&_.y<=p&&Er(s,a,r,l,o,c,_.x,_.y)&&xe(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Lx(n,t,e,i){let s=n.prev,r=n,o=n.next;if(xe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,p=Math.min(a,l,c),_=Math.min(h,f,u),v=Math.max(a,l,c),x=Math.max(h,f,u),g=wc(p,_,t,e,i),C=wc(v,x,t,e,i),D=n.prevZ,w=n.nextZ;for(;D&&D.z>=g&&w&&w.z<=C;){if(D.x>=p&&D.x<=v&&D.y>=_&&D.y<=x&&D!==s&&D!==o&&Er(a,h,l,f,c,u,D.x,D.y)&&xe(D.prev,D,D.next)>=0||(D=D.prevZ,w.x>=p&&w.x<=v&&w.y>=_&&w.y<=x&&w!==s&&w!==o&&Er(a,h,l,f,c,u,w.x,w.y)&&xe(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;D&&D.z>=g;){if(D.x>=p&&D.x<=v&&D.y>=_&&D.y<=x&&D!==s&&D!==o&&Er(a,h,l,f,c,u,D.x,D.y)&&xe(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;w&&w.z<=C;){if(w.x>=p&&w.x<=v&&w.y>=_&&w.y<=x&&w!==s&&w!==o&&Er(a,h,l,f,c,u,w.x,w.y)&&xe(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function Dx(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Bs(i,s)&&Yu(i,e,e.next,s)&&Tr(i,s)&&Tr(s,i)&&(t.push(i.i,e.i,s.i),Ar(e),Ar(e.next),e=n=s),e=e.next}while(e!==n);return Xi(e)}function Nx(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Hx(o,a)){let l=Zu(o,a);o=Xi(o,o.next),l=Xi(l,l.next),wr(o,t,e,i,s,r,0),wr(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Ux(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Xu(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Gx(c))}s.sort(Fx);for(let r=0;r<s.length;r++)e=Ox(s[r],e);return e}function Fx(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Ox(n,t){let e=Bx(n,t);if(!e)return t;let i=Zu(e,n);return Xi(i,i.next),Xi(e,e.next)}function Bx(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(Bs(n,e))return e;do{if(Bs(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&qu(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let f=Math.abs(s-e.y)/(i-e.x);Tr(e,n)&&(f<h||f===h&&(e.x>o.x||e.x===o.x&&zx(o,e)))&&(o=e,h=f)}e=e.next}while(e!==a);return o}function zx(n,t){return xe(n.prev,n,t.prev)<0&&xe(t.next,n,n.next)<0}function kx(n,t,e,i){let s=n;do s.z===0&&(s.z=wc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Vx(s)}function Vx(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function wc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Gx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function qu(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Er(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&qu(n,t,e,i,s,r,o,a)}function Hx(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Wx(n,t)&&(Tr(n,t)&&Tr(t,n)&&Xx(n,t)&&(xe(n.prev,n,t.prev)||xe(n,t.prev,t))||Bs(n,t)&&xe(n.prev,n,n.next)>0&&xe(t.prev,t,t.next)>0)}function xe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Bs(n,t){return n.x===t.x&&n.y===t.y}function Yu(n,t,e,i){let s=Ba(xe(n,t,e)),r=Ba(xe(n,t,i)),o=Ba(xe(e,i,n)),a=Ba(xe(e,i,t));return!!(s!==r&&o!==a||s===0&&Oa(n,e,t)||r===0&&Oa(n,i,t)||o===0&&Oa(e,n,i)||a===0&&Oa(e,t,i))}function Oa(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ba(n){return n>0?1:n<0?-1:0}function Wx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Yu(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Tr(n,t){return xe(n.prev,n,n.next)<0?xe(n,t,n.next)>=0&&xe(n,n.prev,t)>=0:xe(n,t,n.prev)<0||xe(n,n.next,t)<0}function Xx(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Zu(n,t){let e=Tc(n.i,n.x,n.y),i=Tc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Wu(n,t,e,i){let s=Tc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Ar(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Tc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function qx(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}function $u(n){let t=[],e=[],i=n[0][0].length,s=0,r=0;for(let o of n){for(let a of o)for(let l=0;l<i;l++)t.push(a[l]);r&&(s+=r,e.push(s)),r=o.length}return{vertices:t,holes:e,dimensions:i}}var Ju=(n,t)=>[[[-n/2,-t/2],[n/2,-t/2],[n/2,t/2],[-n/2,t/2],[-n/2,-t/2]]];function Qn(n){return n.reduce((t,e,i)=>t+(i?-1:1)*Math.abs(e.reduce((s,r,o)=>{let a=e[(o+1)%e.length];return s+r[0]*a[1]-a[0]*r[1]},0)/2),0)}function Si(n,t){let e=i=>{let s=!1;for(let r=0,o=i.length-1;r<i.length;o=r++){let a=i[r],l=i[o];a[1]>n[1]!=l[1]>n[1]&&n[0]<(l[0]-a[0])*(n[1]-a[1])/(l[1]-a[1])+a[0]&&(s=!s)}return s};return e(t[0])&&!t.slice(1).some(e)}function Rc(n,t,e=.014){if(t.length<2)return[n];let i=[];for(let r=1;r<t.length;r++){let o=t[r-1],a=t[r],l=a[0]-o[0],c=a[1]-o[1],h=Math.hypot(l,c);if(h<.002)continue;let f=-c/h*e/2,u=l/h*e/2;i.push([[[o[0]+f,o[1]+u],[a[0]+f,a[1]+u],[a[0]-f,a[1]-u],[o[0]-f,o[1]-u],[o[0]+f,o[1]+u]]])}return i.length?Cc.default.difference(n,...i).filter(r=>Qn(r)>.002):[n]}function Ic(n,t=.22){let e=[],i=n[0],s=Math.min(...i.map(h=>h[0])),r=Math.max(...i.map(h=>h[0])),o=Math.min(...i.map(h=>h[1])),a=Math.max(...i.map(h=>h[1])),l=Math.max(1,Math.ceil((r-s)/t)),c=Math.max(1,Math.ceil((a-o)/t));for(let h=0;h<l;h++)for(let f=0;f<c;f++){let u=s+(r-s)*h/l,p=s+(r-s)*(h+1)/l,_=o+(a-o)*f/c,v=o+(a-o)*(f+1)/c,x=[[[u,_],[p,_],[p,v],[u,v],[u,_]]],g=Cc.default.intersection(n,x);for(let C of g){let D=$u(C),w=Ac(D.vertices,D.holes,2);for(let I of w)e.push(D.vertices[I*2],D.vertices[I*2+1])}}return e}var ti=(n,t=Date.now())=>({wet:t-n<2e4,amount:Math.max(0,Math.min(1,1-(t-n)/2e4))});function zs(n,t){let e=new Set([n]),i=!0;for(;i;){i=!1;for(let[s,r]of t)e.has(s)!==e.has(r)&&(e.add(s),e.add(r),i=!0)}return e}var Cr=-.1,qi=Cr+.009,za=.1,Yx=za+.009,Rr=.018;function Ku(n){let t=Math.cos(n.rot||0),e=Math.sin(n.rot||0),i=Math.cos(n.turning??n.flip??0);return n.poly.map(s=>s.map(([r,o])=>[n.x+i*(t*r-e*o),n.y+e*r+t*o]))}function ju(n,t){if(Math.abs(Math.cos(n.turning??n.flip??0))<.001||Math.abs(Math.cos(t.turning??t.flip??0))<.001)return!1;let e=Ku(n),i=Ku(t),s=a=>[Math.min(...a[0].map(l=>l[0])),Math.max(...a[0].map(l=>l[0])),Math.min(...a[0].map(l=>l[1])),Math.max(...a[0].map(l=>l[1]))],r=s(e),o=s(i);return r[0]>=o[1]||o[0]>=r[1]||r[2]>=o[3]||o[2]>=r[3]?!1:Qu.default.intersection(e,i).some(a=>Qn(a)>1e-7)}function tf(n,t){let e=n.turning??n.flip??0,i=Math.sin(e),s=Math.cos(e),r=Math.cos(n.rot||0),o=Math.sin(n.rot||0),a=0,l=0;if(t)for(let h=0;h<t.length;h+=3){let f=i*(r*t[h]-o*t[h+1])+s*t[h+2];a=Math.min(a,f),l=Math.max(l,f)}let c=n.glue?.length?.064:0;return a-=s<0?c:0,l+=s>=0?c:0,{low:a,high:l}}function ef(n,t,e=()=>({low:0,high:0}),i=null){let s=Math.min(...n.map(a=>a.z)),r=qi,o=i&&{x:i.x,y:i.y,poly:[[[-2.85,-2.5],[2.85,-2.5],[2.85,2.5],[-2.85,2.5],[-2.85,-2.5]]]};for(let a of n){let l=a.z-s,c=e(a).low;r=Math.max(r,qi-l-c),o&&ju(a,o)&&(r=Math.max(r,Yx-l-c));for(let h of t)ju(a,h)&&(r=Math.max(r,h.z+e(h).high+Rr-l-c))}return r}function ka(n,t){n.activeBook=t;for(let e of n.books)e.pages||=[],e.id===t?(n.pieces.push(...e.pages),e.pages=[]):(e.pages.push(...n.pieces.filter(i=>i.book===e.id)),n.pieces=n.pieces.filter(i=>i.book!==e.id))}var Zx;function nf(){return Zx??=new Promise((n,t)=>{let e=indexedDB.open("paper-poetry-studio",1);e.onupgradeneeded=()=>{e.result.createObjectStore("state"),e.result.createObjectStore("images")},e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)})}async function Pc(n,t){let e=await nf();return new Promise((i,s)=>{let r=e.transaction(n).objectStore(n).get(t);r.onsuccess=()=>i(r.result),r.onerror=()=>s(r.error)})}async function Va(n,t,e){let i=await nf();return new Promise((s,r)=>{let o=i.transaction(n,"readwrite");o.objectStore(n).put(e,t),o.oncomplete=s,o.onerror=()=>r(o.error),o.onabort=()=>r(o.error)})}async function Ga(n){let t;try{t=await Pc("images",n)}catch{}if(!t){let i=await fetch(n,{signal:AbortSignal.timeout(16e3)});if(!i.ok)throw Error("\u56FE\u7247\u6682\u65F6\u65E0\u6CD5\u8BFB\u53D6");t=await i.blob();try{await Va("images",n,t)}catch{}}let e=URL.createObjectURL(t);try{let i=new Image;return i.src=e,await i.decode(),i}finally{URL.revokeObjectURL(e)}}function $x(n){return()=>(n=Math.imul(n,1664525)+1013904223|0,(n>>>0)/4294967296)}var Yi=(n,t,e)=>Math.max(t,Math.min(e,n)),Ir=class{constructor(t,e,i=1){this.paper=e,this.map=[],this.rest=[];let s=new Map;for(let a=0;a<t.length;a+=2){let l=t[a].toFixed(5)+","+t[a+1].toFixed(5),c=s.get(l);c===void 0&&(c=this.rest.length/3,s.set(l,c),this.rest.push(t[a],t[a+1],0)),this.map.push(c)}this.rest=new Float64Array(this.rest),this.pos=new Float64Array(this.rest),this.prev=new Float64Array(this.rest),this.edges=[],this.bends=[],this.neighbors=Array.from({length:this.rest.length/3},()=>new Set);let r=new Map;for(let a=0;a<this.map.length;a+=3){let l=this.map.slice(a,a+3);for(let c=0;c<3;c++){let h=l[c],f=l[(c+1)%3],u=l[(c+2)%3],p=Math.min(h,f)+","+Math.max(h,f);if(r.has(p)){let _=r.get(p);this.bends.push({a:_.opp,b:u,c:h,d:f,lambda:0,fibre:0})}else{let _=Math.hypot(this.rest[h*3]-this.rest[f*3],this.rest[h*3+1]-this.rest[f*3+1]),v={a:h,b:f,len:_,opp:u,lambda:0};r.set(p,v),this.edges.push(v),this.neighbors[h].add(f),this.neighbors[f].add(h)}}}let o=$x(i);this.fibre=new Float64Array(this.rest.length/3);for(let a=0;a<this.fibre.length;a++)this.fibre[a]=o()*2-1;for(let a=0;a<3;a++){let l=this.fibre.slice();for(let c=0;c<this.fibre.length;c++){let h=l[c]*2;for(let f of this.neighbors[c])h+=l[f];this.fibre[c]=h/(this.neighbors[c].size+2)}}for(let a of this.bends)a.fibre=.6+o()*.8;for(let a=0;a<this.fibre.length;a++){let l=this.rest[a*3],c=this.rest[a*3+1];this.pos[a*3+2]=Math.pow(Math.abs(l)/(e.w/2),6)*(e.old||.1)*.035+this.fibre[a]*.0015}this.prev.set(this.pos),e.physicsVersion===2&&e.physics?.length===this.pos.length&&(this.pos.set(e.physics),this.prev.set(this.pos)),e.laminated||(this.pos.set(this.rest),this.prev.set(this.rest)),this.moisture=new Float64Array(this.fibre.length),this.shrink=new Float64Array(this.fibre.length),this.contact=new Float64Array(this.fibre.length),this.sampleCache=new Map,this.dirty=!0,this.lastMoisture=0,this.awake=2}moistureUpdate(t){if(this.moisture.fill(0),this.shrink.fill(0),this.contact.fill(0),!this.paper.laminated){this.lastMoisture=t;return}for(let e=0;e<this.fibre.length;e++){let i=this.rest[e*3],s=this.rest[e*3+1];for(let r of this.paper.glue){let o=(r.x-i)**2+(r.y-s)**2;if(o>.8)continue;let a=Math.exp(-o/(.045+r.r*r.r*3)),l=Yi((t-r.born)/2e4,0,1),c=r.contact??0;this.moisture[e]+=a*(1-l)*.27,this.shrink[e]+=a*l*(.002+c*.0035)*(1+this.fibre[e]*.3),this.contact[e]=Math.max(this.contact[e],c*a)}}for(let e=0;e<this.fibre.length;e++)this.moisture[e]=Math.min(1,this.moisture[e]),this.shrink[e]=Math.min(this.paper.fragment?.011:.02,this.shrink[e]);this.lastMoisture=t}step(t,e){let i=this.paper;if(i.heldRigid||!i.laminated)return!1;let s=i.fragment?i.laminated?3:8:i.book?1.4:1.8;if((i.glue.some(h=>ti(h.born,e).wet)||i.pin||i.turning)&&(this.awake=2),this.awake<=0&&!this.dirty)return!1;this.awake-=t,(e-this.lastMoisture>120||this.dirty)&&this.moistureUpdate(e),this.dirty=!1,t=Math.min(t,1/30);let o=2,a=t/o,l=this.fibre.length,c=-1;if(i.pin){let h=1/0;for(let f=0;f<l;f++){let u=(this.rest[f*3]-i.pin.x)**2+(this.rest[f*3+1]-i.pin.y)**2;u<h&&(h=u,c=f)}}for(let h=0;h<o;h++){let f=this.pos,u=this.prev;for(let p=0;p<l;p++){let _=p*3;for(let v=0;v<3;v++){let x=f[_+v];f[_+v]+=Yi(f[_+v]-u[_+v],-.018,.018)*.82,u[_+v]=x}f[_+2]-=2.3*a*a}for(let p of this.edges)p.lambda=0;for(let p of this.bends)p.lambda=0;for(let p=0;p<5;p++){for(let _ of this.edges){let v=_.a*3,x=_.b*3,g=f[v]-f[x],C=f[v+1]-f[x+1],D=f[v+2]-f[x+2],w=Math.hypot(g,C,D);if(w<1e-8)continue;let I=_.len*(1-(this.shrink[_.a]+this.shrink[_.b])*.5),R=(2e-6+5e-5*(this.moisture[_.a]+this.moisture[_.b]))/(a*a*s),F=(-(w-I)-R*_.lambda)/(2+R);_.lambda+=F,F=Yi(F,-_.len*.075,_.len*.075);let S=F/w;for(let[N,k]of[[0,g],[1,C],[2,D]])f[v+N]+=S*k,f[x+N]-=S*k}for(let _ of this.bends){let v=_.a*3,x=_.b*3,g=_.c*3,C=_.d*3,D=f[C]-f[g],w=f[C+1]-f[g+1],I=f[C+2]-f[g+2],R=f[v]-f[g],F=f[v+1]-f[g+1],S=f[v+2]-f[g+2],N=w*S-I*F,k=I*R-D*S,W=D*F-w*R,$=Math.hypot(N,k,W);if($<1e-8)continue;N/=$,k/=$,W/=$,W<0&&(N=-N,k=-k,W=-W);let tt=(this.shrink[_.a]+this.shrink[_.b]+this.shrink[_.c]+this.shrink[_.d])*.25,G=(this.moisture[_.a]+this.moisture[_.b])*.5,Q=Yi((i.turns-20)*12e-5,0,.007),ot=Math.pow(Math.abs(this.rest[v])/(i.w/2),8)+Math.pow(Math.abs(this.rest[v+1])/(i.h/2),8),rt=tt*_.fibre*.2+ot*(Q+(i.old||.1)*6e-4),mt=(f[v]+f[x]-f[g]-f[C])*.5,it=(f[v+1]+f[x+1]-f[g+1]-f[C+1])*.5,at=(f[v+2]+f[x+2]-f[g+2]-f[C+2])*.5,pt=(9e-5+G*.0018)/(a*a*s),At=(-(mt*N+it*k+at*W-rt)-pt*_.lambda)/(1+pt);At=Yi(At,-.0025,.0025),_.lambda+=At;for(let[Tt,jt]of[[v,.5],[x,.5],[g,-.5],[C,-.5]])f[Tt]+=jt*N*At,f[Tt+1]+=jt*k*At,f[Tt+2]+=jt*W*At}for(let _=0;_<l;_++){let v=_*3;if(i.book&&this.rest[v]<-i.w/2+.035)f[v]=this.rest[v],f[v+1]=this.rest[v+1],f[v+2]=0;else if(_===c)f[v]=this.rest[v]+(i.pin.dx||0)*.015,f[v+1]=this.rest[v+1]+(i.pin.dy||0)*.015,f[v+2]=i.pin.lift;else{let g=i.pin?Math.exp(-((this.rest[v]-i.pin.x)**2+(this.rest[v+1]-i.pin.y)**2)/.04):0;g>.15&&(f[v+2]+=(i.pin.lift*g-f[v+2])*.16),this.contact[_]>.65&&(f[v]+=(this.rest[v]-f[v])*.14,f[v+1]+=(this.rest[v+1]-f[v+1])*.14,f[v+2]*=.4),f[v+2]<0&&(f[v+2]=0),i.pin||(f[v]+=(this.rest[v]-f[v])*.001,f[v+1]+=(this.rest[v+1]-f[v+1])*.001)}Number.isFinite(f[v]+f[v+1]+f[v+2])||(f[v]=this.rest[v],f[v+1]=this.rest[v+1],f[v+2]=0),f[v+2]=Yi(f[v+2],0,2)}}}return!0}sample(t,e){let i=t.toFixed(3)+","+e.toFixed(3),s=this.sampleCache.get(i);if(!s){s=[];for(let a=0;a<this.fibre.length;a++){let l=(this.rest[a*3]-t)**2+(this.rest[a*3+1]-e)**2;(s.length<3||l<s.at(-1).d)&&(s.push({i:a,d:l}),s.sort((c,h)=>c.d-h.d),s.length=Math.min(3,s.length))}this.sampleCache.size>6e3&&this.sampleCache.clear(),this.sampleCache.set(i,s)}let r=0,o=[0,0,0];for(let{i:a,d:l}of s){let c=1/(l+1e-4);r+=c;for(let h=0;h<3;h++)o[h]+=this.pos[a*3+h]*c}return o.map(a=>a/r)}snapshot(){return Array.from(this.pos)}};function sf(n,t,e,i){let s=n.glue,r=[];for(let f=0;f<s.length;f++){let u=s[f],p=ti(u.born,i);p.wet&&(u.vx??=0,u.vy??=0,u.wet=p.amount,r.push(f))}if(!r.length)return;let o=.22,a=new Map,l=(f,u)=>`${Math.floor(f/o)},${Math.floor(u/o)}`;for(let f of r){let u=s[f],p=l(u.x,u.y);a.has(p)||a.set(p,[]),a.get(p).push(f)}let c=f=>{let u=Math.floor(f.x/o),p=Math.floor(f.y/o),_=[];for(let v=-1;v<=1;v++)for(let x=-1;x<=1;x++)_.push(...a.get(`${u+v},${p+x}`)||[]);return _},h=new Map;for(let f of r){let u=s[f],p=0;for(let _ of c(u)){let v=s[_],x=Math.hypot(u.x-v.x,u.y-v.y);x<o&&(p+=(1-x/o)**2)}h.set(f,p)}for(let f of r){let u=s[f],p=0,_=0;for(let C of c(u)){if(f===C)continue;let D=s[C],w=u.x-D.x,I=u.y-D.y,R=Math.hypot(w,I);if(R<1e-5||R>=o)continue;let F=((h.get(f)+h.get(C))*.5-2.4)*.018*(1-R/o),S=-.007*(1-R/o);p+=(F+S)*w/R,_+=(F+S)*I/R,p+=(D.vx-u.vx)*.06*(1-u.wet),_+=(D.vy-u.vy)*.06*(1-u.wet)}if(n.pin||n.turning){let C=t.sample(u.x+.04,u.y),D=t.sample(u.x-.04,u.y),w=t.sample(u.x,u.y+.04),I=t.sample(u.x,u.y-.04);p-=(C[2]-D[2])/.08*.09,_-=(w[2]-I[2])/.08*.09,p-=Math.sin(n.turning||0)*.1}let v=Math.exp(-e*(4+Math.pow(1-u.wet,3)*65));u.vx=(u.vx+p*e)*v,u.vy=(u.vy+_*e)*v;let x=u.x+u.vx*e,g=u.y+u.vy*e;Si([x,g],n.poly)?(u.x=x,u.y=g):(u.vx*=-.15,u.vy*=-.15),u.r=Yi(.045+Math.sqrt(h.get(f))*.017,.045,.115)}t.awake=2}var Ha=class{constructor(t,e){this.w=t,this.h=e,this.canvas=document.createElement("canvas"),this.canvas.width=384,this.canvas.height=Math.round(384*e/t),this.texture=new Bi(this.canvas),this.texture.colorSpace=Ee,this.geometry=new Un(t,e,48,64),this.material=new ar({map:this.texture,transparent:!0,opacity:.83,alphaTest:.045,roughness:.1,metalness:0,clearcoat:1,clearcoatRoughness:.05,side:fn,depthWrite:!1}),this.mesh=new we(this.geometry,this.material),this.mesh.renderOrder=4,this.base=this.geometry.attributes.position.array.slice(),this.last=0,this.count=0}update(t,e,i,s=!1){if(!t.glue.length){this.mesh.visible=!1;return}if(this.mesh.visible=!0,!s&&i-this.last<90)return;this.last=i;let r=this.canvas,o=r.getContext("2d"),a=r.width/this.w;o.clearRect(0,0,r.width,r.height);let l=0;for(let f of t.glue){let u=ti(f.born,i).amount;l=Math.max(l,u);let p=(f.x/this.w+.5)*r.width,_=(.5-f.y/this.h)*r.height,v=(f.r+.045)*a,x=o.createRadialGradient(p,_,0,p,_,v);x.addColorStop(0,"rgba(250,246,218,.8)"),x.addColorStop(.65,"rgba(247,241,209,.7)"),x.addColorStop(1,"rgba(247,241,209,0)"),o.fillStyle=x,o.beginPath(),o.arc(p,_,v,0,Math.PI*2),o.fill()}let c=o.getImageData(0,0,r.width,r.height);for(let f=3;f<c.data.length;f+=4){let u=c.data[f]/255;c.data[f]=u>.11?Math.min(255,(u-.11)*450)*(l*.35+.6):0}o.putImageData(c,0,0),o.globalCompositeOperation="destination-in",o.beginPath();for(let f of t.poly)f.forEach(([u,p],_)=>{let v=(u/this.w+.5)*r.width,x=(.5-p/this.h)*r.height;_?o.lineTo(v,x):o.moveTo(v,x)}),o.closePath();o.fill("evenodd"),o.globalCompositeOperation="source-over",this.texture.needsUpdate=!0;let h=this.geometry.attributes.position;for(let f=0;f<h.count;f++){let u=this.base[f*3],p=this.base[f*3+1],_=0;for(let x of t.glue){let g=(u-x.x)**2+(p-x.y)**2;g<.08&&(_+=Math.exp(-g/(x.r+.03)**2)*.012)}let v=e.sample(u,p);h.setXYZ(f,v[0],v[1],v[2]+.012+Math.min(.047,_))}h.needsUpdate=!0,this.geometry.computeVertexNormals(),this.geometry.computeBoundingSphere(),this.material.roughness=.08+(1-l)*.82,this.material.clearcoat=l,this.material.opacity=.55+l*.3}dispose(){this.texture.dispose(),this.geometry.dispose(),this.material.dispose()}};function rf(n,t,e){let i=n.attributes.position,s=new Float32Array(e*3);for(let o=0;o<i.count;o+=3){let a=i.getX(o+1)-i.getX(o),l=i.getY(o+1)-i.getY(o),c=i.getZ(o+1)-i.getZ(o),h=i.getX(o+2)-i.getX(o),f=i.getY(o+2)-i.getY(o),u=i.getZ(o+2)-i.getZ(o),p=l*u-c*f,_=c*h-a*u,v=a*f-l*h;for(let x=0;x<3;x++){let g=t[o+x]*3;s[g]+=p,s[g+1]+=_,s[g+2]+=v}}let r=n.attributes.normal;for(let o=0;o<r.count;o++){let a=t[o]*3,l=Math.hypot(s[a],s[a+1],s[a+2])||1;r.setXYZ(o,s[a]/l,s[a+1]/l,s[a+2]/l)}r.needsUpdate=!0}var Jx=[["\u96E8\u505C\u4E4B\u540E\u7684\u8857\u9053",`\u96E8\u505C\u4E4B\u540E\uFF0C\u8857\u9053\u6CA1\u6709\u7ACB\u523B\u6062\u590D\u539F\u6765\u7684\u6837\u5B50\u3002\u6C34\u7559\u5728\u7816\u7F1D\u91CC\uFF0C\u5546\u5E97\u7684\u706F\u5012\u6620\u5728\u8DEF\u9762\u4E0A\uFF0C\u4E00\u4E2A\u7EA2\u8272\u7684\u62DB\u724C\u88AB\u811A\u6B65\u8E29\u6210\u8BB8\u591A\u5C0F\u7247\u3002\u6709\u4EBA\u6536\u8D77\u4F1E\uFF0C\u6709\u4EBA\u4ECD\u628A\u4F1E\u4E3E\u7740\uFF0C\u50CF\u662F\u8FD8\u9700\u8981\u4E00\u4E2A\u81EA\u5DF1\u7684\u5C4B\u9876\u3002

\u6211\u5728\u516C\u4EA4\u7AD9\u65C1\u7B49\u4E86\u4E00\u4F1A\u513F\u3002\u8F66\u7A97\u4E0A\u7684\u96FE\u88AB\u4E58\u5BA2\u64E6\u51FA\u4E00\u4E2A\u5706\uFF0C\u5706\u91CC\u9762\u662F\u53E6\u4E00\u5F20\u5B89\u9759\u7684\u8138\u3002\u57CE\u5E02\u5F88\u5927\uFF0C\u4F46\u8FD9\u4E00\u523B\uFF0C\u6211\u80FD\u542C\u89C1\u7684\u53EA\u6709\u978B\u5E95\u7ECF\u8FC7\u79EF\u6C34\u7684\u58F0\u97F3\u3002

\u62D0\u89D2\u7684\u5C0F\u5E97\u5F00\u59CB\u5F80\u5916\u642C\u6905\u5B50\u3002\u8001\u677F\u7528\u6BDB\u5DFE\u62B9\u53BB\u684C\u9762\u7684\u6C34\uFF0C\u52A8\u4F5C\u5F88\u6162\uFF0C\u597D\u50CF\u4ECA\u5929\u624D\u521A\u521A\u5F00\u59CB\u3002\u6E7F\u6389\u7684\u62A5\u7EB8\u644A\u5728\u95E8\u53E3\uFF0C\u58A8\u8272\u548C\u5929\u7A7A\u4E00\u6837\u6DE1\u3002\u6211\u4EEC\u603B\u8BF4\u5929\u6C14\u8FC7\u53BB\u4E86\uFF0C\u5176\u5B9E\u5B83\u53EA\u662F\u6362\u4E86\u4E00\u4E2A\u5730\u65B9\uFF0C\u505C\u5728\u6811\u53F6\u3001\u8896\u53E3\u548C\u8BB0\u5FC6\u91CC\u3002`],["\u628A\u7A97\u6237\u7559\u7ED9\u98CE",`\u642C\u8FDB\u65B0\u623F\u95F4\u7684\u7B2C\u4E00\u5929\uFF0C\u6211\u5148\u6253\u5F00\u4E86\u7A97\u6237\u3002\u7A97\u5916\u6CA1\u6709\u4EC0\u4E48\u7279\u522B\u7684\u666F\u8272\uFF0C\u51E0\u680B\u697C\uFF0C\u4E00\u68F5\u6811\uFF0C\u4E00\u622A\u770B\u4E0D\u5230\u5C3D\u5934\u7684\u9A6C\u8DEF\u3002\u98CE\u5374\u5E26\u6765\u4E86\u8BB8\u591A\u7EC6\u5C0F\u7684\u6D88\u606F\uFF1A\u697C\u4E0B\u996D\u83DC\u7684\u9999\u6C14\u3001\u8FDC\u5904\u6253\u7403\u7684\u58F0\u97F3\u3001\u6D17\u8863\u7C89\u6652\u5E72\u540E\u7684\u6C14\u5473\u3002

\u684C\u5B50\u6446\u5728\u54EA\u91CC\uFF0C\u540E\u6765\u6539\u8FC7\u597D\u51E0\u6B21\u3002\u53EA\u6709\u7A97\u8FB9\u4E00\u76F4\u7A7A\u7740\u3002\u6211\u60F3\u7ED9\u4E00\u4E9B\u65E0\u6CD5\u5B89\u6392\u7684\u4E8B\u60C5\u7559\u51FA\u4F4D\u7F6E\uFF0C\u4F8B\u5982\u508D\u665A\u7A81\u7136\u51FA\u73B0\u7684\u665A\u971E\uFF0C\u4F8B\u5982\u96E8\u6C34\u6CBF\u7740\u73BB\u7483\u6ED1\u4E0B\u6765\u7684\u8DEF\u7EBF\u3002

\u623F\u95F4\u9010\u6E10\u6709\u4E86\u751F\u6D3B\u7684\u75D5\u8FF9\u3002\u676F\u5B50\u4E0B\u7559\u7740\u6D45\u6D45\u7684\u6C34\u5708\uFF0C\u4E66\u9875\u4E2D\u5939\u7740\u4E00\u5F20\u8F66\u7968\u3002\u4EBA\u5E76\u4E0D\u9700\u8981\u628A\u6240\u6709\u7A7A\u767D\u90FD\u586B\u6EE1\u3002\u6709\u65F6\uFF0C\u4E00\u5F20\u7A7A\u6905\u5B50\u548C\u4E00\u6247\u6253\u5F00\u7684\u7A97\u6237\uFF0C\u5C31\u8DB3\u591F\u8BA9\u4E00\u4E2A\u4E0B\u5348\u53D8\u5F97\u5BBD\u655E\u3002`],["\u6700\u540E\u4E00\u73ED\u5730\u94C1",`\u6700\u540E\u4E00\u73ED\u5730\u94C1\u91CC\uFF0C\u4E58\u5BA2\u4E4B\u95F4\u9694\u7740\u5F88\u8FDC\u7684\u7A7A\u4F4D\u3002\u8F66\u53A2\u8D70\u8FC7\u96A7\u9053\uFF0C\u706F\u5149\u628A\u6BCF\u4E2A\u4EBA\u7684\u5F71\u5B50\u8D34\u5728\u73BB\u7483\u4E0A\u3002\u767D\u5929\u5FD9\u788C\u7684\u57CE\u5E02\u5728\u8FD9\u4E00\u523B\u7F29\u5C0F\u6210\u51E0\u5F20\u5EA7\u6905\u3001\u4E00\u4E2A\u80CC\u5305\u548C\u5C4F\u5E55\u4E0A\u7F13\u6162\u53D8\u5316\u7684\u7AD9\u540D\u3002

\u4E00\u4E2A\u5E74\u8F7B\u4EBA\u62B1\u7740\u4E00\u675F\u82B1\uFF0C\u82B1\u88AB\u5305\u88C5\u7EB8\u906E\u4F4F\u4E86\u4E00\u534A\u3002\u53E6\u4E00\u4F4D\u4E58\u5BA2\u7761\u7740\u4E86\uFF0C\u5934\u968F\u7740\u8F66\u8EAB\u8F7B\u8F7B\u6643\u52A8\u3002\u6CA1\u6709\u4EBA\u6025\u7740\u8BF4\u8BDD\uFF0C\u5E7F\u64AD\u7684\u58F0\u97F3\u50CF\u4ECE\u5F88\u8FDC\u7684\u5730\u65B9\u4F20\u6765\u3002

\u51FA\u7AD9\u65F6\uFF0C\u98CE\u6BD4\u51FA\u95E8\u524D\u51C9\u4E86\u4E00\u4E9B\u3002\u4FBF\u5229\u5E97\u8FD8\u4EAE\u7740\uFF0C\u8DEF\u53E3\u6709\u4EBA\u63A8\u7740\u81EA\u884C\u8F66\u7B49\u706F\u3002\u4E00\u5929\u5DF2\u7ECF\u63A5\u8FD1\u7ED3\u675F\uFF0C\u4ECD\u6709\u8BB8\u591A\u4E8B\u60C5\u5728\u7EE7\u7EED\uFF1A\u9762\u5305\u6B63\u5728\u70E4\uFF0C\u6811\u53F6\u6B63\u5728\u843D\u4E0B\uFF0C\u6709\u4EBA\u5728\u56DE\u5BB6\u7684\u8DEF\u4E0A\u91CD\u65B0\u60F3\u8D77\u4E00\u53E5\u6CA1\u6709\u8BF4\u51FA\u53E3\u7684\u8BDD\u3002`],["\u7ED9\u6162\u4E00\u70B9\u7684\u65E9\u6668",`\u95F9\u949F\u54CD\u8FC7\u4E4B\u540E\uFF0C\u6211\u6CA1\u6709\u7ACB\u523B\u8D77\u5E8A\u3002\u7A97\u5E18\u628A\u9633\u5149\u7B5B\u6210\u4E86\u67D4\u8F6F\u7684\u989C\u8272\uFF0C\u697C\u4E0B\u6709\u4EBA\u62D6\u52A8\u6905\u5B50\uFF0C\u9694\u58C1\u4F20\u6765\u70E7\u6C34\u7684\u58F0\u97F3\u3002\u65E9\u6668\u5E76\u975E\u603B\u8981\u4ECE\u5954\u8DD1\u5F00\u59CB\uFF0C\u5B83\u4E5F\u53EF\u4EE5\u5148\u662F\u4E00\u53E3\u6E29\u6C34\uFF0C\u6216\u662F\u628A\u7A97\u53F0\u4E0A\u7684\u7070\u5C18\u64E6\u6389\u3002

\u65E9\u9910\u53EA\u505A\u4E86\u7B80\u5355\u7684\u4E1C\u897F\u3002\u9762\u5305\u8FB9\u7F18\u6709\u4E00\u70B9\u7126\uFF0C\u9E21\u86CB\u6CA1\u6709\u714E\u6210\u5B8C\u6574\u7684\u5706\u3002\u6211\u628A\u76D8\u5B50\u653E\u5728\u684C\u4E0A\uFF0C\u770B\u70ED\u6C14\u4E00\u70B9\u70B9\u6D88\u5931\u3002\u90A3\u4E9B\u6CA1\u6709\u505A\u597D\u7684\u7EC6\u8282\uFF0C\u5E76\u4E0D\u59A8\u788D\u8FD9\u662F\u4E00\u987F\u65E9\u9910\u3002

\u8D70\u51FA\u95E8\u65F6\uFF0C\u7535\u68AF\u6BD4\u5E73\u65F6\u665A\u6765\u4E86\u4E00\u4F1A\u513F\u3002\u6211\u5FFD\u7136\u53D1\u73B0\uFF0C\u7B49\u5F85\u5E76\u4E0D\u53EA\u6709\u4E00\u79CD\u8868\u60C5\u3002\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5728\u7B49\u5F85\u7684\u65F6\u5019\u89C2\u5BDF\u5149\u7EBF\uFF0C\u542C\u89C1\u4E00\u53EA\u9E1F\uFF0C\u6216\u8005\u53EA\u662F\u628A\u547C\u5438\u653E\u6162\u3002\u4ECA\u5929\u8FD8\u6709\u5F88\u591A\u4E8B\u60C5\uFF0C\u4F46\u4E0D\u5FC5\u540C\u65F6\u53D1\u751F\u3002`],["\u4E00\u5C01\u6CA1\u6709\u5730\u5740\u7684\u4FE1",`\u6574\u7406\u62BD\u5C49\u65F6\uFF0C\u6211\u627E\u5230\u51E0\u5F20\u6CA1\u6709\u5BC4\u51FA\u7684\u4FE1\u7EB8\u3002\u7EB8\u4E0A\u53EA\u6709\u65E5\u671F\u548C\u5F00\u5934\uFF0C\u540E\u9762\u7684\u7A7A\u767D\u6BD4\u5199\u4E0B\u7684\u5B57\u66F4\u591A\u3002\u6211\u5DF2\u7ECF\u4E0D\u8BB0\u5F97\u5F53\u65F6\u60F3\u628A\u4FE1\u5BC4\u7ED9\u8C01\uFF0C\u5374\u8BB0\u5F97\u90A3\u79CD\u627E\u4E0D\u5230\u5408\u9002\u53E5\u5B50\u7684\u5FC3\u60C5\u3002

\u540E\u6765\u6211\u4EEC\u4E60\u60EF\u7528\u5F88\u77ED\u7684\u6D88\u606F\u8054\u7CFB\u3002\u4E00\u4E2A\u8868\u60C5\uFF0C\u4E00\u5F20\u7167\u7247\uFF0C\u51E0\u53E5\u5306\u5FD9\u7684\u95EE\u5019\u3002\u6D88\u606F\u62B5\u8FBE\u5F97\u5F88\u5FEB\uFF0C\u4F46\u67D0\u4E9B\u8BDD\u4ECD\u7136\u9700\u8981\u7ED5\u5F88\u8FDC\u7684\u8DEF\uFF0C\u624D\u4F1A\u4ECE\u5FC3\u91CC\u8D70\u5230\u5634\u8FB9\u3002

\u6211\u6CA1\u6709\u628A\u65E7\u4FE1\u8865\u5B8C\u3002\u65B0\u7684\u65E5\u5B50\u65E0\u6CD5\u66FF\u8FC7\u53BB\u5199\u51FA\u7ED3\u5C3E\u3002\u6211\u53EA\u662F\u628A\u4FE1\u7EB8\u6298\u597D\uFF0C\u653E\u56DE\u62BD\u5C49\uFF0C\u8BA9\u5B83\u4EEC\u7EE7\u7EED\u62E5\u6709\u672A\u5B8C\u6210\u7684\u90E8\u5206\u3002\u6709\u4E9B\u7A7A\u767D\u4E0D\u662F\u9057\u6F0F\uFF0C\u800C\u662F\u90A3\u65F6\u5019\u7684\u6211\u4EEC\uFF0C\u786E\u5B9E\u8FD8\u4E0D\u77E5\u9053\u600E\u6837\u8868\u8FBE\u3002`],["\u6D77\u8FB9\u6CA1\u6709\u65F6\u523B\u8868",`\u5230\u6D77\u8FB9\u7684\u65F6\u5019\uFF0C\u5929\u8272\u5DF2\u7ECF\u6697\u4E0B\u6765\u3002\u6C99\u6EE9\u4E0A\u7559\u4E0B\u8BB8\u591A\u811A\u5370\uFF0C\u6D77\u6C34\u4E00\u6B21\u6B21\u9760\u8FD1\uFF0C\u53C8\u628A\u5B83\u4EEC\u5E26\u8D70\u3002\u8FD9\u91CC\u6CA1\u6709\u4EBA\u50AC\u4FC3\u6D6A\u82B1\uFF0C\u4E5F\u6CA1\u6709\u4E00\u5757\u724C\u5B50\u544A\u8BC9\u98CE\u5E94\u8BE5\u51E0\u70B9\u8F6C\u5411\u3002

\u6211\u6361\u8D77\u4E00\u5C0F\u5757\u88AB\u78E8\u5706\u7684\u73BB\u7483\u3002\u5B83\u66FE\u7ECF\u5C5E\u4E8E\u4EC0\u4E48\u4E1C\u897F\uFF0C\u5982\u4ECA\u5DF2\u7ECF\u770B\u4E0D\u51FA\u6765\u4E86\u3002\u6F2B\u957F\u7684\u6C34\u58F0\u53BB\u6389\u4E86\u950B\u5229\u7684\u90E8\u5206\uFF0C\u53EA\u7559\u4E0B\u4E00\u4E2A\u6D45\u7EFF\u8272\u7684\u5F62\u72B6\uFF0C\u653E\u5728\u624B\u5FC3\u91CC\uFF0C\u50CF\u4E00\u6EF4\u6682\u65F6\u4E0D\u4F1A\u6D41\u8D70\u7684\u6C34\u3002

\u8FDC\u5904\u6709\u4EBA\u558A\u540C\u4F34\u7684\u540D\u5B57\u3002\u58F0\u97F3\u88AB\u98CE\u5439\u6563\uFF0C\u6700\u540E\u53EA\u5269\u51E0\u4E2A\u6A21\u7CCA\u7684\u97F3\u8282\u3002\u6D77\u5E76\u4E0D\u56DE\u7B54\u6211\u4EEC\u7684\u95EE\u9898\uFF0C\u4F46\u5B83\u8BA9\u95EE\u9898\u53D8\u5F97\u6CA1\u6709\u90A3\u4E48\u62E5\u6324\u3002\u56DE\u53BB\u7684\u8DEF\u4E0A\uFF0C\u978B\u5B50\u91CC\u88C5\u7740\u4E00\u70B9\u6C99\uFF0C\u53E3\u888B\u91CC\u88C5\u7740\u4E00\u4E2A\u6CA1\u6709\u7528\u5904\u3001\u5374\u820D\u4E0D\u5F97\u6254\u6389\u7684\u665A\u4E0A\u3002`],["\u65E7\u4E66\u5E97\u7684\u4E0B\u5348",`\u65E7\u4E66\u5E97\u85CF\u5728\u4E00\u6761\u4E0D\u592A\u70ED\u95F9\u7684\u8DEF\u4E0A\u3002\u95E8\u53E3\u6CA1\u6709\u9192\u76EE\u7684\u62DB\u724C\uFF0C\u53EA\u6709\u51E0\u7BB1\u6253\u6298\u7684\u4E66\u3002\u63A8\u95E8\u8FDB\u53BB\u7684\u65F6\u5019\uFF0C\u94C3\u94DB\u8F7B\u8F7B\u54CD\u4E86\u4E00\u58F0\uFF0C\u5E97\u4E3B\u62AC\u5934\u770B\u4E86\u770B\uFF0C\u53C8\u7EE7\u7EED\u8BFB\u624B\u91CC\u7684\u90A3\u4E00\u9875\u3002

\u4E66\u67B6\u4E4B\u95F4\u7684\u8FC7\u9053\u5F88\u7A84\uFF0C\u8F6C\u8EAB\u65F6\u9700\u8981\u8BA9\u80CC\u5305\u5148\u8FC7\u53BB\u3002\u4E00\u672C\u65C5\u884C\u624B\u518C\u91CC\u5939\u7740\u8FC7\u53BB\u7684\u8F66\u7968\uFF0C\u53E6\u4E00\u672C\u4E66\u7684\u6249\u9875\u4E0A\u5199\u7740\u964C\u751F\u4EBA\u7684\u540D\u5B57\u3002\u4E66\u8FD8\u6CA1\u6709\u88AB\u6253\u5F00\uFF0C\u5DF2\u7ECF\u5148\u8BB2\u4E86\u4E00\u5C0F\u6BB5\u522B\u4EBA\u7684\u751F\u6D3B\u3002

\u6211\u6700\u540E\u4E70\u4E86\u4E00\u672C\u5E76\u4E0D\u5728\u8BA1\u5212\u91CC\u7684\u4E66\u3002\u4ED8\u6B3E\u65F6\uFF0C\u9633\u5149\u4ECE\u95E8\u53E3\u79FB\u5230\u4E86\u67DC\u53F0\u8FB9\u3002\u8BFB\u4E66\u6709\u65F6\u50CF\u8D70\u8FDB\u4E00\u6761\u5C94\u8DEF\uFF1A\u6211\u4EEC\u539F\u672C\u53EA\u60F3\u627E\u4E00\u4E2A\u7B54\u6848\uFF0C\u5374\u9047\u89C1\u4E86\u65B0\u7684\u95EE\u9898\uFF0C\u6216\u8005\u4E00\u6BB5\u6682\u65F6\u4E0D\u7528\u89E3\u91CA\u7684\u5B89\u9759\u3002`],["\u57CE\u5E02\u91CC\u7684\u5C0F\u82B1\u56ED",`\u5C0F\u82B1\u56ED\u5728\u4E24\u680B\u697C\u4E4B\u95F4\uFF0C\u9762\u79EF\u4E0D\u5927\uFF0C\u53EA\u6709\u51E0\u5F20\u957F\u6905\u548C\u51E0\u7247\u79CD\u6EE1\u690D\u7269\u7684\u571F\u5730\u3002\u6E05\u6668\u6709\u4EBA\u6765\u6D47\u6C34\uFF0C\u508D\u665A\u6709\u4EBA\u5750\u7740\u4F11\u606F\u3002\u82B1\u76C6\u4E0A\u5199\u7740\u690D\u7269\u7684\u540D\u5B57\uFF0C\u6709\u4E9B\u5B57\u88AB\u96E8\u6D17\u6DE1\u4E86\uFF0C\u9700\u8981\u51D1\u8FD1\u624D\u80FD\u770B\u6E05\u3002

\u6211\u559C\u6B22\u89C2\u5BDF\u90A3\u4E9B\u957F\u5F97\u4E0D\u6574\u9F50\u7684\u53F6\u5B50\u3002\u540C\u4E00\u6839\u679D\u6761\u4E0A\uFF0C\u6709\u7684\u53F6\u7247\u5411\u7740\u8DEF\u706F\uFF0C\u6709\u7684\u671D\u7740\u5899\u58C1\u3002\u690D\u7269\u6CA1\u6709\u6309\u7167\u4E00\u5F20\u7EDF\u4E00\u7684\u56FE\u7EB8\u751F\u6D3B\uFF0C\u5B83\u4EEC\u53EA\u662F\u5C3D\u91CF\u627E\u5230\u53EF\u4EE5\u751F\u957F\u7684\u65B9\u5411\u3002

\u4E0B\u73ED\u7684\u4EBA\u4ECE\u65C1\u8FB9\u7ECF\u8FC7\uFF0C\u5076\u5C14\u505C\u4E0B\u6765\u95FB\u4E00\u95FB\u82B1\u3002\u505C\u7559\u53EA\u6709\u51E0\u79D2\uFF0C\u5374\u8BA9\u56DE\u5BB6\u7684\u8DEF\u53D8\u957F\u4E86\u4E00\u70B9\u3002\u57CE\u5E02\u91CC\u7684\u7A7A\u5730\u5F88\u5BB9\u6613\u88AB\u586B\u6EE1\uFF0C\u80FD\u7559\u4E0B\u4E00\u5757\u8BA9\u6839\u987B\u3001\u6606\u866B\u548C\u4EBA\u7684\u76EE\u5149\u5171\u540C\u7ECF\u8FC7\u7684\u5730\u65B9\uFF0C\u662F\u4E00\u79CD\u5C0F\u5C0F\u7684\u8010\u5FC3\u3002`],["\u4E00\u7897\u6C64\u7684\u8DDD\u79BB",`\u9505\u91CC\u7684\u6C64\u5F00\u59CB\u5192\u6CE1\u65F6\uFF0C\u7A97\u5916\u521A\u597D\u4EAE\u8D77\u4E86\u7B2C\u4E00\u76CF\u8DEF\u706F\u3002\u53A8\u623F\u5F88\u5C0F\uFF0C\u8F6C\u8EAB\u5C31\u80FD\u78B0\u5230\u51B0\u7BB1\u3002\u5207\u597D\u7684\u83DC\u653E\u5728\u76D8\u5B50\u91CC\uFF0C\u6848\u677F\u8FB9\u6709\u51E0\u6EF4\u6C34\uFF0C\u6CA1\u6709\u4EC0\u4E48\u9700\u8981\u62CD\u7167\u7684\u573A\u9762\u3002

\u670B\u53CB\u6253\u7535\u8BDD\u6765\uFF0C\u95EE\u6211\u6700\u8FD1\u8FC7\u5F97\u600E\u6837\u3002\u6211\u770B\u7740\u9505\u91CC\u7684\u70ED\u6C14\uFF0C\u8BF4\u4ECA\u5929\u716E\u4E86\u4E00\u7897\u6C64\u3002\u6211\u4EEC\u804A\u4E86\u5F88\u4E45\uFF0C\u8BF4\u5DE5\u4F5C\u7684\u7410\u4E8B\uFF0C\u4E5F\u8BF4\u697C\u4E0B\u65B0\u5F00\u7684\u5E97\u3002\u751F\u6D3B\u7684\u5927\u90E8\u5206\u5185\u5BB9\uFF0C\u5176\u5B9E\u5C31\u662F\u8FD9\u4E9B\u5F88\u96BE\u5F52\u7EB3\u7684\u5C0F\u4E8B\u3002

\u6302\u65AD\u7535\u8BDD\uFF0C\u6C64\u5DF2\u7ECF\u716E\u597D\u3002\u6211\u76DB\u4E86\u4E24\u7897\uFF0C\u53E6\u4E00\u7897\u7559\u7740\u660E\u5929\u3002\u8DDD\u79BB\u5E76\u6CA1\u6709\u56E0\u4E3A\u4E00\u6B21\u901A\u8BDD\u6D88\u5931\uFF0C\u4F46\u5728\u67D0\u4E2A\u77ED\u6682\u7684\u65F6\u523B\uFF0C\u6211\u89C9\u5F97\u8FD9\u5F20\u684C\u5B50\u8DB3\u591F\u5927\uFF0C\u5927\u5230\u53EF\u4EE5\u653E\u4E0B\u4E00\u7897\u6C64\uFF0C\u4E5F\u53EF\u4EE5\u653E\u4E0B\u4E00\u4E2A\u8FDC\u65B9\u7684\u4EBA\u3002`],["\u5730\u56FE\u4E0A\u7684\u7A7A\u767D\u5904",`\u65C5\u884C\u4E4B\u524D\uFF0C\u6211\u5728\u5730\u56FE\u4E0A\u6807\u51FA\u4E86\u8BB8\u591A\u5730\u65B9\u3002\u771F\u6B63\u5230\u8FBE\u4E4B\u540E\uFF0C\u5374\u5728\u7B2C\u4E00\u6761\u5C94\u8DEF\u5C31\u504F\u79BB\u4E86\u8BA1\u5212\u3002\u5C0F\u5DF7\u91CC\u6709\u4EBA\u4FEE\u7406\u6536\u97F3\u673A\uFF0C\u95E8\u53E3\u5806\u7740\u989C\u8272\u4E0D\u540C\u7684\u5851\u6599\u6905\u5B50\uFF0C\u4E00\u53EA\u732B\u8EBA\u5728\u6536\u4E0D\u5230\u9633\u5149\u7684\u5730\u65B9\u3002

\u8FD9\u4E9B\u4E1C\u897F\u5728\u5730\u56FE\u4E0A\u6CA1\u6709\u540D\u5B57\uFF0C\u4E5F\u4E0D\u4F1A\u6210\u4E3A\u653B\u7565\u91CC\u7684\u91CD\u70B9\u3002\u6211\u7AD9\u5728\u90A3\u91CC\u770B\u4E86\u4E00\u4F1A\u513F\uFF0C\u542C\u6536\u97F3\u673A\u91CC\u65AD\u65AD\u7EED\u7EED\u7684\u6B4C\u58F0\u3002\u964C\u751F\u7684\u57CE\u5E02\u5FFD\u7136\u4E0D\u518D\u53EA\u662F\u51E0\u4E2A\u53EF\u4EE5\u6253\u5361\u7684\u5750\u6807\u3002

\u540E\u6765\u6211\u4ECD\u7136\u53BB\u4E86\u90A3\u4E9B\u8457\u540D\u7684\u5730\u65B9\uFF0C\u5374\u6700\u5E38\u60F3\u8D77\u90A3\u6761\u5C0F\u5DF7\u3002\u5730\u56FE\u5E2E\u52A9\u6211\u4EEC\u627E\u5230\u65B9\u5411\uFF0C\u800C\u8BB0\u5FC6\u5F80\u5F80\u6765\u81EA\u6682\u65F6\u5931\u53BB\u65B9\u5411\u7684\u51E0\u5206\u949F\u3002\u6709\u65F6\uFF0C\u503C\u5F97\u5E26\u56DE\u5BB6\u7684\u4E1C\u897F\uFF0C\u6070\u597D\u53D1\u751F\u5728\u8BA1\u5212\u6CA1\u6709\u8986\u76D6\u7684\u7A7A\u767D\u5904\u3002`],["\u58F0\u97F3\u4E5F\u6709\u989C\u8272",`\u6709\u4EBA\u5728\u697C\u4E0B\u7EC3\u4E60\u4E50\u5668\uFF0C\u540C\u4E00\u6BB5\u65CB\u5F8B\u53CD\u590D\u505C\u5728\u76F8\u540C\u7684\u5730\u65B9\u3002\u5F00\u59CB\u65F6\uFF0C\u6211\u89C9\u5F97\u90A3\u58F0\u97F3\u6253\u65AD\u4E86\u4E0B\u5348\u3002\u542C\u5F97\u4E45\u4E86\uFF0C\u5374\u80FD\u5206\u8FA8\u6BCF\u4E00\u6B21\u91CD\u6765\u7684\u7EC6\u5C0F\u53D8\u5316\uFF1A\u4E00\u4E2A\u97F3\u66F4\u7A33\u4E86\uFF0C\u4E00\u4E2A\u505C\u987F\u7F29\u77ED\u4E86\u3002

\u96E8\u58F0\u3001\u952E\u76D8\u58F0\u3001\u6D17\u8863\u673A\u7ED3\u675F\u5DE5\u4F5C\u7684\u63D0\u793A\u58F0\uFF0C\u5E73\u65F6\u90FD\u88AB\u6211\u4EEC\u653E\u5728\u751F\u6D3B\u7684\u80CC\u666F\u91CC\u3002\u5F53\u623F\u95F4\u7A81\u7136\u5B89\u9759\u4E0B\u6765\uFF0C\u8FD9\u4E9B\u58F0\u97F3\u624D\u663E\u51FA\u5404\u81EA\u7684\u5F62\u72B6\u3002\u5B83\u4EEC\u50CF\u4E0D\u540C\u989C\u8272\u7684\u7EBF\uFF0C\u7A7F\u8FC7\u540C\u4E00\u4E2A\u666E\u901A\u7684\u65E5\u5B50\u3002

\u665A\u4E0A\uFF0C\u697C\u4E0B\u7684\u65CB\u5F8B\u7EC8\u4E8E\u5B8C\u6574\u5730\u54CD\u4E86\u4E00\u904D\u3002\u6CA1\u6709\u638C\u58F0\uFF0C\u4E5F\u6CA1\u6709\u4EBA\u5BA3\u5E03\u7EC3\u4E60\u7ED3\u675F\u3002\u6211\u5408\u4E0A\u7535\u8111\uFF0C\u89C9\u5F97\u8FD9\u4E00\u5929\u867D\u7136\u6CA1\u6709\u53D1\u751F\u4EC0\u4E48\u5927\u4E8B\uFF0C\u4F46\u786E\u5B9E\u6709\u4E00\u4E9B\u4E1C\u897F\uFF0C\u7ECF\u8FC7\u4E86\u8BB8\u591A\u6B21\u5C1D\u8BD5\uFF0C\u6162\u6162\u53D8\u5F97\u4E0D\u540C\u3002`],["\u7B49\u4E00\u9897\u79CD\u5B50\u9192\u6765",`\u628A\u79CD\u5B50\u57CB\u8FDB\u82B1\u76C6\u4EE5\u540E\uFF0C\u6700\u521D\u51E0\u5929\u51E0\u4E4E\u6CA1\u6709\u53D8\u5316\u3002\u6211\u6BCF\u5929\u770B\u4E00\u773C\u571F\u9762\uFF0C\u6D47\u4E00\u70B9\u6C34\uFF0C\u518D\u628A\u82B1\u76C6\u653E\u56DE\u7A97\u8FB9\u3002\u7B49\u5F85\u6CA1\u6709\u8FDB\u5EA6\u6761\uFF0C\u571F\u58E4\u4E5F\u4E0D\u4F1A\u544A\u8BC9\u6211\u5730\u4E0B\u53D1\u751F\u4E86\u4EC0\u4E48\u3002

\u7B2C\u4E03\u5929\uFF0C\u76C6\u8FB9\u51FA\u73B0\u4E86\u4E00\u4E2A\u5F88\u5C0F\u7684\u7EFF\u8272\u5F2F\u94A9\u3002\u5B83\u5E76\u6CA1\u6709\u7A81\u7136\u957F\u6210\u7167\u7247\u91CC\u7684\u6837\u5B50\uFF0C\u53EA\u662F\u8270\u96BE\u5730\u4ECE\u571F\u91CC\u62AC\u8D77\u5934\u3002\u5149\u7EBF\u7167\u5728\u5AE9\u53F6\u4E0A\uFF0C\u53F6\u7247\u8584\u5F97\u8FD1\u4E4E\u900F\u660E\u3002

\u540E\u6765\u6211\u53D1\u73B0\uFF0C\u7167\u987E\u690D\u7269\u9700\u8981\u7684\u5E76\u4E0D\u53EA\u662F\u70ED\u60C5\uFF0C\u8FD8\u9700\u8981\u63A5\u53D7\u7F13\u6162\u3002\u6C34\u4E0D\u80FD\u56E0\u4E3A\u7740\u6025\u5C31\u591A\u6D47\uFF0C\u53F6\u5B50\u4E5F\u4E0D\u80FD\u9760\u50AC\u4FC3\u5C55\u5F00\u3002\u6211\u4EEC\u7ED9\u5B83\u5408\u9002\u7684\u6761\u4EF6\uFF0C\u7136\u540E\u628A\u5269\u4E0B\u7684\u90E8\u5206\u4EA4\u8FD8\u7ED9\u65F6\u95F4\u3002\u8FD9\u4EF6\u5C0F\u4E8B\uFF0C\u8BA9\u6211\u91CD\u65B0\u5B66\u4E60\u4E86\u600E\u6837\u671F\u5F85\u3002`],["\u7167\u7247\u4E4B\u5916\u7684\u98CE\u666F",`\u7167\u7247\u91CC\u662F\u4E00\u5EA7\u6865\uFF0C\u6865\u4E0B\u9762\u7684\u6C34\u5F88\u5E73\u9759\u3002\u62CD\u4E0B\u5B83\u7684\u90A3\u4E00\u79D2\uFF0C\u6211\u4EE5\u4E3A\u81EA\u5DF1\u4FDD\u5B58\u4E86\u5B8C\u6574\u7684\u98CE\u666F\u3002\u56DE\u5BB6\u540E\u518D\u770B\uFF0C\u624D\u53D1\u73B0\u7167\u7247\u91CC\u6CA1\u6709\u5F53\u65F6\u7684\u51B7\u98CE\uFF0C\u6CA1\u6709\u65C1\u8FB9\u4EBA\u7684\u7B11\u58F0\uFF0C\u4E5F\u6CA1\u6709\u8D70\u4E86\u5F88\u4E45\u4E4B\u540E\u811A\u5E95\u7684\u9178\u3002

\u7167\u7247\u80FD\u7559\u4E0B\u8BB8\u591A\u7EC6\u8282\uFF0C\u4E5F\u4F1A\u6084\u6084\u4E22\u6389\u8BB8\u591A\u4E1C\u897F\u3002\u4E00\u5F20\u770B\u8D77\u6765\u666E\u901A\u7684\u753B\u9762\uFF0C\u53EF\u80FD\u88C5\u7740\u53EA\u6709\u62CD\u6444\u8005\u77E5\u9053\u7684\u6545\u4E8B\uFF1B\u4E00\u5F20\u6F02\u4EAE\u7684\u753B\u9762\uFF0C\u4E5F\u672A\u5FC5\u4EE3\u8868\u90A3\u5929\u8FC7\u5F97\u8F7B\u677E\u3002

\u6211\u5F00\u59CB\u5728\u7167\u7247\u65C1\u8FB9\u5199\u51E0\u4E2A\u5B57\u3002\u4E0D\u662F\u89E3\u91CA\u5730\u70B9\u548C\u65E5\u671F\uFF0C\u800C\u662F\u8BB0\u4E0B\u90A3\u5929\u53D1\u751F\u7684\u4E00\u4EF6\u5C0F\u4E8B\u3002\u4F8B\u5982\u5728\u8F66\u7AD9\u5403\u4E86\u4E00\u5757\u5F88\u751C\u7684\u9762\u5305\uFF0C\u4F8B\u5982\u6709\u4EBA\u5E2E\u6211\u6361\u8D77\u4E86\u5E3D\u5B50\u3002\u98CE\u666F\u4E0D\u53EA\u5728\u955C\u5934\u91CC\uFF0C\u4E5F\u5728\u6211\u4EEC\u7ECF\u8FC7\u5B83\u65F6\u7559\u4E0B\u7684\u611F\u53D7\u91CC\u3002`],["\u4FEE\u597D\u4E00\u76CF\u706F",`\u53F0\u706F\u4E0D\u4EAE\u4E86\uFF0C\u6211\u539F\u672C\u6253\u7B97\u76F4\u63A5\u6362\u4E00\u76CF\u3002\u62C6\u5F00\u5E95\u5EA7\u624D\u53D1\u73B0\uFF0C\u53EA\u662F\u4E00\u5904\u63A5\u7EBF\u677E\u4E86\u3002\u87BA\u4E1D\u653E\u5728\u5C0F\u789F\u5B50\u91CC\uFF0C\u684C\u9762\u94FA\u4E86\u4E00\u5F20\u65E7\u62A5\u7EB8\uFF0C\u539F\u672C\u719F\u6089\u7684\u4E1C\u897F\u663E\u9732\u51FA\u4ECE\u672A\u89C1\u8FC7\u7684\u5185\u90E8\u3002

\u4FEE\u7406\u7684\u8FC7\u7A0B\u6BD4\u60F3\u8C61\u4E2D\u6162\u3002\u6211\u67E5\u4E86\u8BF4\u660E\uFF0C\u91CD\u65B0\u6574\u7406\u7EBF\u8DEF\uFF0C\u62E7\u7D27\u6700\u540E\u4E00\u9897\u87BA\u4E1D\u3002\u706F\u518D\u6B21\u4EAE\u8D77\u6765\u65F6\uFF0C\u623F\u95F4\u7684\u6837\u5B50\u6CA1\u6709\u6539\u53D8\uFF0C\u6211\u770B\u5B83\u7684\u65B9\u5F0F\u5374\u6539\u53D8\u4E86\u3002

\u6211\u4EEC\u5E38\u5E38\u4E60\u60EF\u66FF\u6362\uFF0C\u5FD8\u8BB0\u8BB8\u591A\u4E1C\u897F\u8FD8\u53EF\u4EE5\u4FEE\u590D\u3002\u4E00\u76CF\u706F\u3001\u4E00\u628A\u6905\u5B50\u3001\u4E00\u4EF6\u5F00\u7EBF\u7684\u8863\u670D\uFF0C\u90FD\u53EF\u80FD\u56E0\u4E3A\u4E00\u70B9\u65F6\u95F4\u548C\u6CE8\u610F\u7EE7\u7EED\u966A\u4F34\u6211\u4EEC\u3002\u7559\u4E0B\u5B83\u4EEC\uFF0C\u5E76\u4E0D\u603B\u662F\u56E0\u4E3A\u8282\u7701\uFF0C\u4E5F\u56E0\u4E3A\u65E7\u7269\u8BB0\u5F55\u7740\u67D0\u79CD\u4E0D\u80FD\u76F4\u63A5\u8D2D\u4E70\u7684\u719F\u6089\u3002`],["\u5728\u591C\u91CC\u6563\u6B65",`\u591C\u91CC\u6563\u6B65\uFF0C\u4E0D\u9700\u8981\u8D70\u5230\u54EA\u91CC\u3002\u8D70\u8FC7\u719F\u6089\u7684\u8DEF\u53E3\uFF0C\u7ED5\u8FC7\u5DF2\u7ECF\u5173\u95E8\u7684\u5E97\uFF0C\u518D\u4ECE\u53E6\u4E00\u6761\u8DEF\u56DE\u6765\u3002\u767D\u5929\u663E\u5F97\u5306\u5FD9\u7684\u8857\u9053\uFF0C\u5230\u4E86\u591C\u91CC\u4F1A\u9732\u51FA\u4E00\u4E9B\u5E73\u65F6\u770B\u4E0D\u89C1\u7684\u7EC6\u8282\u3002

\u8DEF\u706F\u4E0B\u9762\u6709\u4E00\u5C0F\u5757\u4EAE\u5730\uFF0C\u98DE\u866B\u56F4\u7740\u5B83\u6253\u8F6C\u3002\u697C\u4E0A\u7684\u7A97\u6237\u6709\u7684\u4EAE\u7740\uFF0C\u6709\u7684\u5DF2\u7ECF\u7184\u706D\u3002\u6211\u4EEC\u7ECF\u8FC7\u522B\u4EBA\u7684\u751F\u6D3B\uFF0C\u5374\u53EA\u80FD\u770B\u89C1\u4E00\u4E2A\u7A97\u6846\u91CC\u7684\u5149\u3002

\u8D70\u7D2F\u4E86\uFF0C\u5C31\u5728\u957F\u6905\u4E0A\u5750\u4E00\u4F1A\u513F\u3002\u624B\u673A\u653E\u5728\u53E3\u888B\u91CC\uFF0C\u4E0D\u6025\u7740\u62FF\u51FA\u6765\u3002\u98CE\u7ECF\u8FC7\u6811\u53F6\uFF0C\u6709\u4E00\u9635\u5F88\u8F7B\u7684\u58F0\u54CD\u3002\u767D\u5929\u6CA1\u6709\u60F3\u6E05\u695A\u7684\u4E8B\u60C5\uFF0C\u6B64\u523B\u4E5F\u672A\u5FC5\u6709\u7B54\u6848\uFF0C\u4F46\u5B83\u4EEC\u5DF2\u7ECF\u53EF\u4EE5\u5B89\u9759\u5730\u653E\u5728\u8EAB\u8FB9\uFF0C\u4E0D\u518D\u5360\u6EE1\u6574\u4E2A\u623F\u95F4\u3002`],["\u7559\u4E00\u5F20\u7A7A\u767D\u7EB8",`\u684C\u4E0A\u6709\u4E00\u5F20\u7A7A\u767D\u7EB8\u3002\u6211\u539F\u672C\u51C6\u5907\u5728\u4E0A\u9762\u5199\u4E0B\u4ECA\u5929\u5FC5\u987B\u5B8C\u6210\u7684\u4E8B\u60C5\uFF0C\u6700\u540E\u5374\u53EA\u753B\u4E86\u4E00\u4E2A\u5F88\u5C0F\u7684\u5706\u3002\u5706\u4E0D\u592A\u5706\uFF0C\u8FB9\u7F18\u6709\u4E00\u5904\u65AD\u5F00\uFF0C\u770B\u8D77\u6765\u50CF\u4E00\u9897\u8FD8\u6CA1\u6709\u51B3\u5B9A\u5F62\u72B6\u7684\u79CD\u5B50\u3002

\u5199\u8BA1\u5212\u8BA9\u4EBA\u5B89\u5FC3\uFF0C\u4F46\u751F\u6D3B\u603B\u4F1A\u4ECE\u5217\u8868\u7684\u8FB9\u4E0A\u957F\u51FA\u53BB\u3002\u4E00\u4E2A\u7A81\u7136\u5230\u6765\u7684\u7535\u8BDD\uFF0C\u4E00\u573A\u6CA1\u6709\u9884\u62A5\u7684\u96E8\uFF0C\u4E00\u53E5\u8BFB\u5230\u4E4B\u540E\u820D\u4E0D\u5F97\u653E\u4E0B\u7684\u8BDD\uFF0C\u90FD\u53EF\u80FD\u6539\u53D8\u539F\u6765\u7684\u5B89\u6392\u3002

\u6211\u628A\u7A7A\u767D\u7EB8\u7559\u5728\u624B\u8FB9\uFF0C\u5141\u8BB8\u5B83\u6682\u65F6\u6CA1\u6709\u7528\u9014\u3002\u4E5F\u8BB8\u660E\u5929\u5199\u4E00\u5C01\u4FE1\uFF0C\u4E5F\u8BB8\u88C1\u4E0B\u4E00\u89D2\uFF0C\u4E5F\u8BB8\u53EA\u662F\u8BB0\u4E00\u4E2A\u7535\u8BDD\u53F7\u7801\u3002\u7A7A\u767D\u4E0D\u662F\u7F3A\u5C11\u4EC0\u4E48\uFF0C\u800C\u662F\u4ECD\u7136\u53EF\u4EE5\u6210\u4E3A\u5F88\u591A\u4E1C\u897F\u3002\u6211\u4EEC\u5076\u5C14\u4E5F\u9700\u8981\u7ED9\u81EA\u5DF1\u7559\u51FA\u8FD9\u6837\u7684\u4F59\u5730\u3002`]],of=Jx.map(([n,t])=>({title:n,text:t,author:"\u62FE\u53E5 \xB7 \u539F\u521B\u767D\u8BDD\u7D20\u6750\uFF08AI \u8F85\u52A9\u521B\u4F5C\uFF09",source:"https://github.com/ljq15611703653-ship-it/shiju-paper-poetry/blob/main/README.md",license:"\u539F\u521B\u62FC\u8D34\u7D20\u6750 \xB7 CC0",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/"}));var Kx=["\u6708\u7403","\u68EE\u6797","\u6D77\u6D0B","\u5019\u9E1F","\u4E91","\u6625\u5929","\u73CA\u745A","\u8774\u8776","\u82B1","\u68A6","\u98CE","\u6CB3\u6D41","\u58F0\u97F3","\u6781\u5149","\u96EA","\u5C9B\u5C7F","\u90AE\u7968","\u822A\u6D77","\u96E8","\u82D4\u85D3","\u706B\u5C71","\u706F\u5854","\u8336","\u9CB8","\u6C34\u5F69\u753B","\u56DB\u5B63"],af=n=>[...n].sort(()=>Math.random()-.5);async function jx(){let n=af(Kx).slice(0,10).join("|"),t="https://zh.wikipedia.org/w/api.php?"+new URLSearchParams({action:"query",format:"json",origin:"*",prop:"extracts|info",inprop:"url",explaintext:"1",exintro:"1",redirects:"1",titles:n}),e=await fetch(t,{signal:AbortSignal.timeout(7e3)});if(!e.ok)throw Error();let i=await e.json();return Object.values(i.query.pages).filter(s=>s.extract?.length>60).map(s=>({title:s.title,text:s.extract.slice(0,2600),source:s.fullurl,author:"\u7EF4\u57FA\u767E\u79D1\u8D21\u732E\u8005",license:"\u77E5\u8BC6\u5171\u4EAB\u7F72\u540D\u2014\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/"}))}async function Qx(){let n=await fetch("https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&cc0=1&limit=10&skip="+Math.floor(Math.random()*1e4),{signal:AbortSignal.timeout(1e4)});if(!n.ok)throw Error();return(await n.json()).data.filter(e=>e.share_license_status==="CC0"&&e.images?.web?.url).map(e=>({image:e.images.web.url,imageSource:e.url||"https://www.clevelandart.org/art/"+e.accession_number,imageAuthor:e.creators?.map(i=>i.description).join("\u3001")||"\u4F5A\u540D",imageLicense:"\u516C\u6709\u9886\u57DF \xB7 CC0"}))}async function lf(n){n("\u6B63\u5728\u5BFB\u627E\u4E2D\u6587\u73B0\u4EE3\u6587\u7AE0\u4E0E\u9986\u85CF\u56FE\u7247\u2026");let[t,e]=await Promise.allSettled([jx(),Qx()]),i=await fetch("./seed.json").then(l=>l.json()),s=t.status==="fulfilled"?t.value:[],r=af(of),o=e.status==="fulfilled"?e.value:[],a=[];for(let l=0;l<10;l++){let c=s[l]||r[l%r.length],h=o[l]||i[l%i.length];a.push({...c,image:h.image,imageSource:h.imageSource,imageAuthor:h.imageAuthor,imageLicense:h.imageLicense,fallbackImage:i[l%i.length].image,fallbackImageSource:i[l%i.length].imageSource,fallbackImageAuthor:i[l%i.length].imageAuthor,seed:Math.floor(Math.random()*1e8),layout:Math.floor(Math.random()*5)})}return{id:crypto.randomUUID(),created:Date.now(),pages:a,live:!!s.length,note:s.length?"\u5DF2\u53D6\u5230\u5B9E\u65F6\u4E2D\u6587\u6587\u7AE0 \xB7 \u7F3A\u7BC7\u7528\u539F\u521B\u767D\u8BDD\u8865\u9F50":"\u7F51\u7EDC\u6682\u4E0D\u53EF\u7528 \xB7 \u5DF2\u8F7D\u5165\u539F\u521B\u767D\u8BDD\u520A\uFF08\u975E\u6293\u53D6\u6587\u7AE0\uFF09"}}function cf(n){return()=>{n|=0,n=n+1831565813|0;let t=Math.imul(n^n>>>15,1|n);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}function ks(n=768,t=1080){let e=document.createElement("canvas");return e.width=n,e.height=t,e}function Pr(n){let t=new Bi(n);return t.colorSpace=Ee,t.anisotropy=8,t}function bn(n,t,e,i,s,r,o=1.65,a=1e3){n.font=`${r}px "Noto Serif SC", "Microsoft YaHei", Georgia, serif`;let l=/[\u3400-\u9fff]/.test(t)?Array.from(t):t.split(/(\s+)/),c="";for(let h of l){if(n.measureText(c+h).width>s&&c&&(n.fillText(c,e,i),i+=r*o,c="",i>a))return i;c+=h}return i<=a&&n.fillText(c,e,i),i+r*o}function hf(){let n=ks(2048,2048),t=n.getContext("2d"),e=cf(87);t.fillStyle="#b59a77",t.fillRect(0,0,2048,2048);for(let i=0;i<8;i++){let s=i*256,r=t.createLinearGradient(0,s,0,s+256);r.addColorStop(0,"rgba(75,45,21,.12)"),r.addColorStop(.08,"rgba(255,235,201,.06)"),r.addColorStop(.7,"rgba(136,91,47,.015)"),r.addColorStop(1,"rgba(69,42,17,.15)"),t.fillStyle=r,t.fillRect(0,s,2048,256);for(let o=0;o<95;o++){let a=s+e()*256;t.beginPath(),t.moveTo(0,a);for(let l=0;l<=2048;l+=32)t.lineTo(l,a+Math.sin(l/180+o)*e()*7);t.strokeStyle=`rgba(${e()>.5?"63,39,21":"255,239,210"},${e()*.07})`,t.lineWidth=.5+e()*2,t.stroke()}t.fillStyle="#70553538",t.fillRect(0,s,2048,1)}for(let i=0;i<25e3;i++)t.fillStyle=`rgba(63,40,15,${e()*.05})`,t.fillRect(e()*2048,e()*2048,1+e()*12,.5);return n}function Lc(n,t,e=!1){let i=ks(),s=i.getContext("2d"),r=cf(n.seed||12),o=n.old??.2,a=n.type||"magazine";s.fillStyle=a==="kraft"?"#b99866":a==="lined"?"#f4efdb":a==="white"?"#faf8f0":`hsl(43 39% ${96-o*11}%)`,s.fillRect(0,0,768,1080);for(let l=0;l<21e3;l++)s.fillStyle=`rgba(${r()>.5?"77,60,35":"255,255,244"},${r()*.08})`,s.fillRect(r()*768,r()*1080,.6+r()*2,.5+r()*2);if(a==="lined"){s.strokeStyle="#8c9eac66",s.lineWidth=1;for(let l=102;l<1050;l+=39)s.beginPath(),s.moveTo(0,l),s.lineTo(768,l),s.stroke();s.strokeStyle="#c58e8055",s.beginPath(),s.moveTo(90,0),s.lineTo(90,1080),s.stroke()}if(a==="magazine"&&!e){let l=n.layout||0,c=n.title||"\u62FE\u53E5 \xB7 \u81EA\u7136\u6765\u4FE1",h=n.text||"",f=["#496355","#b15d43","#46473f","#6d7d8b","#785d44"][l];s.fillStyle="#6e6a5b",s.font="13px sans-serif",s.fillText("\u62FE \u53E5   /   \u5076 \u7136 \u7684 \u6587 \u5B57",45,42),s.textAlign="right",s.fillText(String(n.index||1).padStart(2,"0")+"  \u2014  \u7EB8 \u4E0A \u6F2B \u6E38",720,42),s.textAlign="left",s.fillStyle=f;let u=bn(s,c,44,105,680,l===2?58:l===1?33:43,1.28,235);s.strokeStyle=f,s.lineWidth=1,s.beginPath(),s.moveTo(45,u+5),s.lineTo(720,u+5),s.stroke();let p=u+29,_=(v,x,g,C)=>{if(!t)return;s.save(),s.beginPath(),s.rect(v,x,g,C),s.clip();let D=Math.max(g/t.width,C/t.height);s.filter="saturate(0.65) contrast(.95)",s.drawImage(t,v+(g-t.width*D)/2,x+(C-t.height*D)/2,t.width*D,t.height*D),s.restore()};if(s.fillStyle="#3c3b33",l===0){_(45,p,678,360),s.fillStyle=f;let v=bn(s,h.slice(0,65),45,p+403,678,26,1.45,p+495);s.fillStyle="#3d3d35",bn(s,h.slice(65),45,v+20,678,17,1.65,1010)}else if(l===1)_(376,p,346,480),bn(s,h,45,p+20,303,20,1.75,1e3),bn(s,h.slice(410),376,p+515,346,17,1.7,1e3);else if(l===2)s.fillStyle=f,bn(s,h.slice(0,120),45,p+20,670,28,1.55,p+245),_(45,p+280,430,330),s.fillStyle="#4d4b42",bn(s,h.slice(120),498,p+290,218,16,1.6,1e3);else if(l===3){_(45,p,678,480);let v=p+515;s.fillStyle="#45443a",bn(s,h.slice(0,600),45,v,320,18,1.6,1010),bn(s,h.slice(600),401,v,321,18,1.6,1010)}else _(45,p,260,260),s.fillStyle=f,bn(s,h.slice(0,140),333,p+20,389,24,1.6,p+270),s.fillStyle="#49483e",bn(s,h.slice(140),45,p+310,677,21,1.75,1008);s.fillStyle="#6f6b5d",s.font="11px sans-serif",s.fillText("\u516C \u5F00 \u9986 \u85CF  /  \u88C1 \u526A \xB7 \u6536 \u85CF \xB7 \u62FC \u8D34",45,1048)}if(a==="magazine"){s.save(),s.globalAlpha=.035,s.translate(768,0),s.scale(-1,1),s.fillStyle="#483a2c";for(let l=150;l<980;l+=24)s.font="14px Georgia",s.fillText((n.text||"\u5728\u5E73\u51E1\u65E5\u5B50\u7684\u5B89\u9759\u4E4B\u4E2D\uFF0C\u62FE\u8D77\u4E00\u884C\u5076\u7136\u7684\u6587\u5B57\u3002").slice(l%200,l%200+75),40,l);s.restore()}if(o>0){let l=s.createRadialGradient(380,530,260,380,530,690);l.addColorStop(0,"#86592100"),l.addColorStop(1,`rgba(119,78,20,${o*.27})`),s.fillStyle=l,s.fillRect(0,0,768,1080);for(let c=0;c<o*9;c++){let h=r()*768,f=r()*1080,u=8+r()*90,p=s.createRadialGradient(h,f,0,h,f,u);p.addColorStop(0,`rgba(106,69,27,${o*.07})`),p.addColorStop(1,"#71512000"),s.fillStyle=p,s.fillRect(h-u,f-u,u*2,u*2)}}return i}function uf(n=[]){let t=ks(1024,1024),e=t.getContext("2d");e.fillStyle="#52665a",e.fillRect(0,0,1024,1024),e.strokeStyle="#bbc3a752";for(let i=24;i<1024;i+=32)e.lineWidth=i%128===24?1:.6,e.beginPath(),e.moveTo(i,0),e.lineTo(i,1024),e.moveTo(0,i),e.lineTo(1024,i),e.stroke();e.strokeStyle="#d4d6ba80",e.strokeRect(24,24,976,976),e.fillStyle="#c6cbb1",e.font="12px sans-serif",e.fillText("\u62FE \u53E5  /  \u81EA \u6108 \u5F0F \u88C1 \u5207 \u57AB \u677F",40,998),e.strokeStyle="#d5d9c78a",e.lineWidth=1.5;for(let i of n)e.beginPath(),i.forEach(([s,r],o)=>o?e.lineTo((s/5.7+.5)*1024,(.5-r/5)*1024):e.moveTo((s/5.7+.5)*1024,(.5-r/5)*1024)),e.stroke();return t}var _t=n=>document.querySelector(n),Ja=n=>[...document.querySelectorAll(n)],Vs=_t("#desk"),Ne=_t("#scene"),Bc=document.createElement("div");Bc.id="zoom-controls";Bc.innerHTML="<button id=zoom-out title=\u7F29\u5C0F>\u2212</button><button id=zoom-reset title=\u6062\u590D\u5168\u684C>100%</button><button id=zoom-in title=\u653E\u5927>\uFF0B</button>";Vs.append(Bc);var kn=new bs,Vn;try{Vn=new br({canvas:Ne,antialias:!0,alpha:!1,preserveDrawingBuffer:!0})}catch(n){throw _t("#loading span").textContent="\u6D4F\u89C8\u5668\u672A\u80FD\u542F\u52A8 3D\uFF0C\u8BF7\u5F00\u542F\u786C\u4EF6\u52A0\u901F\u540E\u91CD\u8BD5\u3002",n}Vn.setPixelRatio(Math.min(devicePixelRatio,2));Vn.shadowMap.enabled=!0;Vn.shadowMap.type=zi;Vn.outputColorSpace=Ee;Vn.setClearColor("#b99d7a");Vn.toneMapping=ur;Vn.toneMappingExposure=1.05;var pe=new Kn(-8,8,6,-6,.1,70);pe.up.set(0,0,1);pe.position.set(0,-9,23);pe.lookAt(0,0,0);kn.add(new Ts(16775920,9404787,2.4));var ni=new As(16774623,3);ni.position.set(-2.5,3,18);ni.castShadow=!0;ni.shadow.mapSize.set(2048,2048);Object.assign(ni.shadow.camera,{left:-12,right:12,top:10,bottom:-10,near:.1,far:40});ni.shadow.bias=-2e-5;ni.shadow.normalBias=.002;ni.shadow.intensity=.38;ni.shadow.radius=2;kn.add(ni);var t_=hf(),Lr=Pr(t_);Lr.wrapS=Lr.wrapT=gs;Lr.repeat.set(2,2);var zc=new we(new Un(45,35),new Jn({map:Lr,roughness:.83,color:14272170}));zc.position.z=Cr;zc.receiveShadow=!0;kn.add(zc);var ct={version:1,sources:{},pieces:[],bonds:[],basket:[],mat:null,books:[],nextZ:.3},_e=new Map,Xa=new Map,Dc=new Map,Gs=null,wi="hand",Ut=null,$i=[],Ti=[],Dr=[],ff,df,bS=performance.now();var Ai=()=>crypto.randomUUID(),ES=new Te,Nr=new Cs,pf=new Xt,mf=new qe(new Z(0,0,1),0),Nc={white:"\u767D\u7EB8",lined:"\u884C\u7EB8",kraft:"\u725B\u76AE\u7EB8"},pn=null,Zi=null,Ji=[],Ei=null;function ae(n){_t("#toast").textContent=n,_t("#toast").classList.add("visible"),clearTimeout(df),df=setTimeout(()=>_t("#toast").classList.remove("visible"),4300)}function En(n){_t("#loading").hidden=!n,n&&(_t("#loading span").textContent=n)}function Ci(n){return structuredClone(n)}function yf(){for(let n of ct.pieces){let t=_e.get(n.id);t?.physics&&(n.physics=t.physics.snapshot(),n.physicsVersion=2)}}function wn(){yf(),Ti.push(Ci(ct)),Ti.length>15&&Ti.shift(),Dr=[],Ka()}function Ka(){_t("#undo").disabled=!Ti.length,_t("#redo").disabled=!Dr.length}function Ge(){clearTimeout(ff),ff=setTimeout(async()=>{try{yf(),await Va("state","workspace",Ci(ct)),_t("#save-status").innerHTML="<i></i> \u5DF2\u4FDD\u5B58 \xB7 \u8BCD\u8BED\u7BD3\u5B50\u4E5F\u4F1A\u7559\u5728\u8FD9\u91CC"}catch{_t("#save-status").textContent="\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u4E0B\u8F7D\u5DE5\u4F5C\u53F0\u5907\u4EFD",ae("\u6D4F\u89C8\u5668\u5B58\u50A8\u7A7A\u95F4\u4E0D\u8DB3\u6216\u88AB\u7981\u7528\uFF0C\u8BF7\u4E0B\u8F7D\u5907\u4EFD\u3002")}},500)}function Ya(n,t,e,i={}){let s=ct.sources[n];return{id:Ai(),source:n,x:t,y:e,z:.25,rot:0,w:s.w||3,h:s.h||4.3,poly:Ju(s.w||3,s.h||4.3),glue:[],turns:0,flip:0,...i}}async function e_(n){if(Xa.has(n))return Xa.get(n);let t=ct.sources[n],e=null;if(t.image?.startsWith("./assets/art-")&&(t.image=t.image.replace("./assets/","./")),t.image)try{Dc.has(t.image)||Dc.set(t.image,Ga(t.image).catch(()=>null)),e=await Dc.get(t.image)}catch{}if(!e&&t.fallbackImage)try{e=await Ga(t.fallbackImage),t.image=t.fallbackImage,t.imageSource=t.fallbackImageSource,t.imageAuthor=t.fallbackImageAuthor,t.imageLicense="\u516C\u6709\u9886\u57DF \xB7 CC0"}catch{}let i=Lc(t,e),s=Lc(t.type==="magazine"?{...t,title:t.title+" / \u7EED\u9875",layout:((t.layout||0)+2)%5}:t,e),r={front:i,back:s,frontTex:Pr(i),backTex:Pr(s)};return Xa.set(n,r),r}function n_(n,t,e){let i=Ic(n),s=[],r=[];for(let a=0;a<i.length;a+=2)s.push(i[a],i[a+1],0),r.push(i[a]/t+.5,i[a+1]/e+.5);let o=new Ze;return o.setAttribute("position",new Le(s,3)),o.setAttribute("uv",new Le(r,2)),o.computeVertexNormals(),o.userData.xy=i,o}async function ja(n){let t=await e_(n.source);if(!ct.pieces.some(p=>p.id===n.id))return;let e=new In,i=n_(n.poly,n.w,n.h),s=new Jn({map:t.frontTex,side:Fn,roughness:.96,color:16777215}),r=new we(i,s);r.castShadow=!0,r.receiveShadow=!0,r.userData.id=n.id,e.add(r);let o=i.clone();o.userData.xy=i.userData.xy;for(let p=0;p<o.attributes.uv.count;p++)o.attributes.uv.setX(p,1-o.attributes.uv.getX(p));let a=new we(o,new Jn({map:t.backTex,side:Fe,roughness:1}));a.castShadow=!0,a.receiveShadow=!0,a.userData.id=n.id,e.add(a);let l=[];for(let p of n.poly)for(let _=0;_<p.length-1;_++){let v=p[_],x=p[_+1],g=Math.max(1,Math.ceil(Math.hypot(x[0]-v[0],x[1]-v[1])/.15));for(let C=0;C<g;C++){let D=[v[0]+(x[0]-v[0])*C/g,v[1]+(x[1]-v[1])*C/g],w=[v[0]+(x[0]-v[0])*(C+1)/g,v[1]+(x[1]-v[1])*(C+1)/g];l.push(...D,0,...w,0)}}let c=new Ze;c.setAttribute("position",new Le(l,3));let h=new sr(c,new Oi({color:12036493,transparent:!0,opacity:.56}));e.add(h);let f=new Ha(n.w,n.h);e.add(f.mesh),kn.add(e);let u=new Ir(i.userData.xy,{...n,old:ct.sources[n.source].old},ct.sources[n.source].seed);n.cutFrozen&&(u.awake=0),_e.set(n.id,{group:e,mesh:r,back:a,edge:h,film:f,baseEdge:l,last:0,physics:u}),ei(n,Date.now(),!0),n.cutFrozen&&(u.awake=0,u.dirty=!1),Sf()}function kc(n){n.film?.texture.dispose(),kn.remove(n.group),n.group.traverse(t=>{t.geometry?.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())})}async function Ki(){ka(ct,ct.activeBook??ct.books.at(-1)?.id);for(let n of ct.pieces)n.book&&!n.settling&&n.turning===void 0&&(n.z=Qa(n));for(let n of _e.values())kc(n);_e.clear(),await Promise.all(ct.pieces.map(ja)),Gc(),Af(),Hc(),h_(),Tn(null),Ge()}function i_(n,t,e,i){return _e.get(n.id)?.physics.sample(t,e)||[t,e,0]}function ei(n,t,e=!1){let i=_e.get(n.id);if(!i)return;i.group.position.set(n.x,n.y,n.z),i.group.rotation.set(0,-(n.turning??n.flip??0),n.rot);let s=!n.book&&!n.laminated&&!n.heldRigid&&Math.abs(n.z+Tf(n).low-qi)<.004;i.mesh.castShadow=i.back.castShadow=!s;let r=!!n.pin||!!n.turning,o=n.glue.some(l=>ti(l.born,t).wet);if(!e&&!r&&!o&&i.physics.awake<=0&&i.last===n.turns)return;i.last=n.turns,i.physics.paper=n,e&&(i.physics.dirty=!0,i.physics.awake=2);for(let[l,c]of[[i.mesh,.007],[i.back,-.007]]){let h=l.geometry.attributes.position,f=l.geometry.userData.xy;for(let u=0;u<h.count;u++){let p=i.physics.map[u]*3,_=i.physics.pos;h.setXYZ(u,_[p],_[p+1],_[p+2]+c)}h.needsUpdate=!0,rf(l.geometry,i.physics.map,i.physics.fibre.length),l.geometry.computeBoundingSphere()}let a=i.edge.geometry.attributes.position;for(let l=0;l<a.count;l++){let c=i_(n,i.baseEdge[l*3],i.baseEdge[l*3+1],t);a.setXYZ(l,c[0],c[1],c[2]+(Math.cos(n.turning??n.flip??0)<0?-.009:.009))}a.needsUpdate=!0,i.film.update(n,i.physics,t,e)}function vf(n){let t=Ne.getBoundingClientRect();pf.set((n.clientX-t.left)/t.width*2-1,-(n.clientY-t.top)/t.height*2+1),Nr.setFromCamera(pf,pe)}function Ur(n,t=Cr){return vf(n),mf.constant=-t,Nr.ray.intersectPlane(mf,new Z)}function Za(n){vf(n);let t=[..._e.values()].flatMap(i=>[i.mesh,i.back]),e=Nr.intersectObjects(t)[0];if(e){let i=ct.pieces.find(r=>r.id===e.object.userData.id),s=_e.get(i.id);return{p:i,local:s.group.worldToLocal(e.point.clone()),world:e.point}}return null}function Fr(n,t){let e=_e.get(n.id);return e.group.updateMatrixWorld(!0),e.group.worldToLocal(t.clone())}function Uc(n,t,e,i=.01){let s=_e.get(n.id);return s.group.updateMatrixWorld(!0),s.group.localToWorld(new Z(t,e,i))}function Mf(n){let t=Za(n),e=t?t.world.clone():Ur(n,Ut?.knifeZ??Cr);return e?(Ut&&t&&(Ut.knifeZ=e.z),e.cutRay={origin:Nr.ray.origin.toArray(),direction:Nr.ray.direction.toArray()},e):null}function s_(n,t){let e=_e.get(t.id);if(e.group.updateMatrixWorld(!0),!n.cutRay)return Fr(t,n);let s=new Cs(new Z().fromArray(n.cutRay.origin),new Z().fromArray(n.cutRay.direction)).intersectObjects([e.mesh,e.back])[0];return s?e.group.worldToLocal(s.point.clone()):Mc(n.cutRay,e.group.matrixWorld)||Fr(t,n)}function r_(n){return n.cutRay&&Mc(n.cutRay,new ie().makeTranslation(0,0,za))||n}function Tn(n){Gs=n;let t=ct.pieces.find(e=>e.id===n);_t("#selection").hidden=!t,t&&(_t("#selection-name").textContent=ct.sources[t.source].title||Nc[ct.sources[t.source].type]||"\u7EB8\u7247",_t("#detach").hidden=!t.book,_t("#store-piece").hidden=!!t.book,_t("#page-info").textContent=t.book?`\u7B2C ${t.page+1} / 10 \u7BC7 \xB7 \u8FD9\u9875\u7FFB\u8FC7 ${t.turns} \u6B21`:`${t.glue.length?"\u6709\u80F6\u75D5 \xB7 ":""}${ct.bonds.some(e=>e.includes(t.id))?"\u5DF2\u7C98\u5408\u7684\u7EB8\u7EC4":"\u4E00\u7247\u81EA\u7531\u7684\u7EB8"}`)}function Sf(){for(let n of ct.pieces){let t=_e.get(n.id);if(!t)continue;let e=wi==="knife"&&(n.hasCuts||n.fragment||!n.book||Qn(n.poly)<n.w*n.h-1e-4);t.edge.material.color.set(e?13904166:12036493),t.edge.material.opacity=e?1:.46,t.edge.material.depthWrite=!1,t.edge.renderOrder=e?3:0}}function qa(n){wi=n,Sf(),Ja("[data-tool]").forEach(t=>t.classList.toggle("active",t.dataset.tool===n)),_t("#hint").textContent={hand:"\u634F\u4F4F\u9875\u8FB9\u7FFB\u9605 \xB7 \u62D6\u7A7A\u767D\u684C\u9762\u5E73\u79FB \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 Shift \u62AC\u9AD8\u7EB8\u5F20",knife:"\u7EA2\u7EBF\u6807\u51FA\u5207\u53E3\u4E0E\u7EB8\u7247\u8FB9\u7F18 \xB7 \u5200\u53E3\u9760\u8FD1\u8FB9\u7F18\u4F1A\u5438\u9644 \xB7 \u8F6E\u5ED3\u95ED\u5408\u540E\u81EA\u52A8\u6210\u4E3A\u65B0\u7EB8\u7247",glue:"\u6309\u4F4F\u6D82\u80F6 \xB7 \u653E\u4E0B\u53E6\u4E00\u5F20\u7EB8\u7C98\u5408 \xB7 \u6E7F\u80F6 20 \u79D2\u5185\u9010\u6E10\u5E72\u71E5\uFF0C\u5E72\u540E\u4E0D\u518D\u7C98\u65B0\u7EB8"}[n],Ne.style.cursor=n==="knife"?"crosshair":n==="glue"?"cell":"grab"}function Vc(){Zi&&(kn.remove(Zi),Zi.geometry.dispose(),Zi.material.dispose()),!($i.length<2)&&(Zi=new ws(new Ze().setFromPoints($i.map(n=>new Z(n.x,n.y,n.z))),new Oi({color:wi==="knife"?15721676:14738369,depthTest:!1,transparent:!0,opacity:.9})),Zi.renderOrder=100,kn.add(Zi))}function Wa(n,t){if(t.hidden)return!1;let e=t.getBoundingClientRect();return n.clientX>=e.left&&n.clientX<=e.right&&n.clientY>=e.top&&n.clientY<=e.bottom}function bf(n){if(!n)return;let t=n.p,e=t.glue.at(-1),i=n.local.x,s=n.local.y;if(!(e&&Math.hypot(e.x-i,e.y-s)<.055&&Date.now()-e.born<1e3)){if(t.glue.length>=1e3){ae("\u8FD9\u5F20\u7EB8\u7684\u80F6\u6C34\u5DF2\u7ECF\u8DB3\u591F\u591A\u4E86");return}t.glue.push({x:i,y:s,born:Date.now(),r:.065+Math.random()*.025,side:Math.cos(t.flip||0)<0?-1:1}),ei(t,Date.now(),!0),Ge()}}Ne.addEventListener("pointerdown",n=>{if(n.button!==0||Ut)return;let t=Za(n);if(wi==="hand"&&!t){if(ct.mat){let r=Ur(n),o=ct.mat;if(Math.abs(r.x-o.x)<2.85&&Math.abs(r.y-o.y)<2.5){wn(),Ut={type:"mat",start:r,base:{x:o.x,y:o.y}},Ne.setPointerCapture(n.pointerId);return}}Tn(null),Ut={type:"pan",sx:n.clientX,sy:n.clientY,camera:pe.position.clone()},Ne.setPointerCapture(n.pointerId),Ne.style.cursor="grabbing";return}if(wn(),Ne.setPointerCapture(n.pointerId),wi==="knife"){let r=Mf(n);$i=[r],Ut={type:"knife",knifeZ:r.z},Vc();return}if(!t)return;if(Tn(t.p.id),wi==="glue"){Ut={type:"glue"},bf(t);return}let e=t.p,i=zs(e.id,ct.bonds),s=Ur(n,e.z);if(e.cutFrozen){delete e.cutFrozen;let r=_e.get(e.id);r.physics.awake=2}e.book?(Ut={type:"turn",p:e,start:s,initialFlip:e.flip||0,initialX:e.x,initialZ:e.z,local:t.local.clone(),moved:0},e.pin={x:t.local.x,y:t.local.y,lift:0,dx:0,dy:0}):(Ut={type:"move",p:e,start:s,local:t.local.clone(),ids:i,bases:new Map(ct.pieces.filter(r=>i.has(r.id)).map(r=>[r.id,{x:r.x,y:r.y,z:r.z}])),moved:0},e.settling=!1,delete e.turning,e.heldRigid=!0,delete e.pin,Vs.classList.add("dragging"),Ne.style.cursor="grabbing")});Ne.addEventListener("pointermove",n=>{if(!Ut){Ne.style.cursor=wi==="hand"?Za(n)?"grab":"default":wi==="knife"?"crosshair":"cell";return}if(Ut.type==="pan"){let r=(pe.right-pe.left)/pe.zoom/Ne.clientWidth;pe.position.x=Ut.camera.x-(n.clientX-Ut.sx)*r,pe.position.y=Ut.camera.y+(n.clientY-Ut.sy)*r*.93,pe.position.z=Ut.camera.z+(n.clientY-Ut.sy)*r*.364,pe.updateMatrixWorld();return}if(Ut.type==="glue"){bf(Za(n));return}if(Ut.type==="knife"){let r=Mf(n);r&&r.distanceTo($i.at(-1))>.035&&($i.push(r),Vc());return}if(Ut.type==="mat"){let r=Ur(n);ct.mat.x=Ut.base.x+r.x-Ut.start.x,ct.mat.y=Ut.base.y+r.y-Ut.start.y,Cf();return}let t=Ut.p,e=Ur(n,t.z);if(!e)return;if(Ut.type==="turn"){let r=ct.books.find(l=>l.id===t.book),o=e.x-Ut.start.x;Ut.moved=Math.max(Ut.moved,Math.abs(o));let a=Gi.clamp(Ut.initialFlip-o/t.w*Math.PI,0,Math.PI);t.turning=a,t.x=r.x+Math.cos(a)*t.w/2,t.z=wf(t,a),t.pin.lift=Math.sin(a)*.55+Math.min(.7,Math.max(0,e.y-Ut.start.y)*.5),t.pin.dx=o,t.pin.dy=e.y-Ut.start.y,ei(t,Date.now(),!0);return}let i=e.x-Ut.start.x,s=e.y-Ut.start.y;Ut.moved=Math.max(Ut.moved,Math.hypot(i,s));for(let r of ct.pieces.filter(o=>Ut.ids.has(o.id))){let o=Ut.bases.get(r.id);r.x=Gi.clamp(o.x+i,-9,9),r.y=Gi.clamp(o.y+s,-5.8,5.8),r.z=o.z+(n.shiftKey?1.1:.16),r.heldRigid=!0,delete r.pin,r.settling=!1,delete r.turning,ei(r,Date.now(),!0)}Ri(Ut.ids,n.shiftKey?1.1:.16)});async function Ef(n,t=!1){if(!Ut)return;let e=Ut;if(Ut=null,Vs.classList.remove("dragging"),Ne.hasPointerCapture(n.pointerId)&&Ne.releasePointerCapture(n.pointerId),Ne.style.cursor="grab",e.type==="pan")return;if(e.type==="knife"){t||await a_($i),$i=[],Vc(),Ge();return}if(e.type==="glue"){Fc(),Ge();return}if(e.type==="mat"){Ge();return}let i=e.p;if(e.type==="turn"){let r=i.turning??e.initialFlip,o=t?e.initialFlip:r>Math.PI*.5?Math.PI:0,a=ct.books.find(l=>l.id===i.book);i.flip=o,i.turning=r,i.hingeVelocity=0,i.pin=void 0,i.settling=!0,o!==e.initialFlip&&(i.turns++,ae(i.turns===21?"\u7EB8\u9875\u5F00\u59CB\u7559\u4E0B\u4E00\u70B9\u7FFB\u9605\u7684\u75D5\u8FF9\u3002":"\u7EB8\u9875\u7FFB\u8FC7\u53BB\u4E86")),ei(i,Date.now(),!0),Tn(i.id),Ge();return}let s=ct.pieces.filter(r=>e.ids.has(r.id));for(let r of s)delete r.pin,delete r.heldRigid;Ri(e.ids),!t&&Wa(n,_t("#export-drop"))?(Ji=[...e.ids],Pf()):!t&&(Wa(n,_t("#basket"))||Wa(n,_t("#basket-drop"))||Wa(n,_t("#basket-toggle")))?Rf(i.id):(Fc(),Tn(i.id)),Ge()}Ne.addEventListener("pointerup",n=>Ef(n));Ne.addEventListener("pointercancel",n=>Ef(n,!0));function Qa(n){return qi+(Math.cos(n.flip||0)<0?n.page:9-n.page)*Rr}function wf(n,t){let e=qi+(9-n.page)*Rr,i=qi+n.page*Rr;return e+(i-e)*t/Math.PI+Math.sin(t)*(n.w/2+.14)}function Tf(n){return tf(n,_e.get(n.id)?.physics.pos)}function Ri(n,t=0,e=null,i=!1){let s=ct.pieces.filter(l=>n.has(l.id));if(!s.length)return;let r=Math.min(...s.map(l=>l.z)),o=ef(s,e||ct.pieces.filter(l=>!n.has(l.id)),Tf,ct.mat)+t,a=i?Math.max(0,o-r):o-r;if(!(a<1e-4&&i))for(let l of s)l.z+=a,ei(l,Date.now(),!0)}function Af(){let n=new Set,t=ct.pieces.filter(e=>e.book&&e.turning===void 0&&!e.settling);for(let e of[...ct.pieces].filter(i=>!i.book).sort((i,s)=>i.z-s.z)){if(n.has(e.id))continue;let i=zs(e.id,ct.bonds),s=ct.pieces.filter(o=>i.has(o.id));for(let o of i)n.add(o);if(s.some(o=>o.heldRigid))continue;let r=[];for(let o of[...s].sort((a,l)=>a.z-l.z))Ri(new Set([o.id]),0,r,!0),r.push(o);Ri(i,0,t,!1),t.push(...s)}}function Fc(){let n=Date.now(),t=0;for(let e of ct.pieces)if(!(e.pin||e.turning))for(let i of e.glue){let s=ti(i.born,n);if(!s.wet)continue;let r=Uc(e,i.x,i.y);for(let o of ct.pieces){if(o.id===e.id||o.pin||o.turning||Math.abs(e.z-o.z)>.1||ct.bonds.some(l=>l.includes(e.id)&&l.includes(o.id)))continue;let a=Fr(o,r);if(Si([a.x,a.y],o.poly)){ct.bonds.push([e.id,o.id]),e.laminated=!0,o.laminated=!0,_e.get(e.id).physics.dirty=!0,_e.get(o.id).physics.dirty=!0,i.contact=s.amount,i.bondedAt=n,(e.book||o.book)&&(e.book=null,o.book=null),t++;break}}}t&&(ae("\u7C98\u4F4F\u4E86\u3002\u80F6\u6C34\u4F1A\u7EE7\u7EED\u6536\u7F29\u3001\u8D77\u76B1\uFF0C\u76F4\u5230\u5E72\u900F\u3002"),Ge())}function o_(n,t){if(!(n.length<2)){if(n.length>5&&Math.hypot(n[0][0]-n.at(-1)[0],n[0][1]-n.at(-1)[1])<.15){n.push([...n[0]]);return}for(let e of[0,n.length-1]){let i=n[e];if(!Si(i,t))continue;let s=null,r=.12;for(let o of t)for(let a=1;a<o.length;a++){let l=o[a-1],c=o[a],h=c[0]-l[0],f=c[1]-l[1],u=h*h+f*f;if(u<1e-10)continue;let p=Math.max(0,Math.min(1,((i[0]-l[0])*h+(i[1]-l[1])*f)/u)),_=[l[0]+h*p,l[1]+f*p],v=Math.hypot(i[0]-_[0],i[1]-_[1]);v<r&&(r=v,s=_)}if(s){let o=Math.max(r,1e-5);n[e]=[s[0]+(s[0]-i[0])/o*.025,s[1]+(s[1]-i[1])/o*.025]}}}}async function a_(n){if(!(n.length<2)){En("\u88C1\u5F00\u7EB8\u5F20\u7EA4\u7EF4\u2026");try{let c=function(h,f){s.push(h.id),e++;for(let u of f){let p=h.book&&u[0].some(x=>x[0]<-h.w/2+.025),_={...Ci(h),physics:void 0,parentId:h.id,fragment:!0,hasCuts:!0,id:Ai(),poly:u,book:p?h.book:null,glue:h.glue.filter(x=>Si([x.x,x.y],u))},v=_e.get(h.id)?.physics;if(v){let x=new Ir(Ic(u),_,ct.sources[h.source].seed);for(let g=0;g<x.rest.length;g+=3){let C=v.sample(x.rest[g],x.rest[g+1]);_.laminated&&x.pos.set(C,g)}_.physics=x.snapshot(),_.physicsVersion=2,_.cutFrozen=!0,_.pin=void 0,_.turning=void 0,_.settling=!1}i.push(_)}},t=Ci(ct.bonds),e=0,i=[],s=[],r=ct.mat,o=n.map(h=>r_(h)),a=o.map(h=>[h.x,h.y]),l=!1;for(let h of[...ct.pieces].sort((f,u)=>u.z-f.z)){let f=n.map(_=>{let v=s_(_,h);return[v.x,v.y]});o_(f,h.poly);let u=f;if(r&&h.z<za){let _=[];for(let v=0;v<n.length;v++)Math.abs(o[v].x-r.x)<2.85&&Math.abs(o[v].y-r.y)<2.5?l=!0:_.push(f[v]);if(_.length!==f.length){u=[];let v=[],x=[];for(let C=0;C<n.length;C++)Math.abs(n[C].x-r.x)<2.85&&Math.abs(n[C].y-r.y)<2.5?(x.length>1&&v.push(x),x=[]):x.push(f[C]);x.length>1&&v.push(x);let g=[h.poly];for(let C of v)g=g.flatMap(D=>Rc(D,C));if(Math.abs(g.reduce((C,D)=>C+Qn(D),0)-Qn(h.poly))<1e-5)continue;c(h,g);continue}}if(u.length<2)continue;let p=Rc(h.poly,u);Math.abs(p.reduce((_,v)=>_+Qn(v),0)-Qn(h.poly))<1e-5||c(h,p)}if(r){let h=[];for(let f of o)Math.abs(f.x-r.x)<2.85&&Math.abs(f.y-r.y)<2.5?(h.push([f.x-r.x,f.y-r.y]),l=!0):(h.length>1&&r.scratches.push(h),h=[]);h.length>1&&r.scratches.push(h),l&&Gc()}if(e){let h=new Set(s);ct.pieces=ct.pieces.filter(u=>!h.has(u.id)),ct.bonds=ct.bonds.filter(u=>!u.some(p=>h.has(p)));for(let u of s){let p=_e.get(u);p&&kc(p),_e.delete(u)}ct.pieces.push(...i),await Promise.all(i.map(ja));for(let[u,p]of t){let _=ct.pieces.filter(x=>x.id===u||x.parentId===u),v=ct.pieces.filter(x=>x.id===p||x.parentId===p);for(let x of _)for(let g of v)(x.glue.some(D=>D.contact!==void 0&&Si((()=>{let w=Fr(g,Uc(x,D.x,D.y));return[w.x,w.y]})(),g.poly))||g.glue.some(D=>D.contact!==void 0&&Si((()=>{let w=Fr(x,Uc(g,D.x,D.y));return[w.x,w.y]})(),x.poly)))&&!ct.bonds.some(D=>D.includes(x.id)&&D.includes(g.id))&&ct.bonds.push([x.id,g.id])}Fc();let f=i.find(u=>!u.book);Tn(f?.id||null),ae(`\u88C1\u5F00\u4E86 ${e} \u5C42\u7EB8${l?"\uFF0C\u57AB\u677F\u7559\u4E0B\u4E86\u4E00\u9053\u5212\u75D5":"\u3002\u6CA1\u6709\u57AB\u677F\uFF0C\u4E0B\u9762\u7684\u7EB8\u4E5F\u4F1A\u88AB\u5207\u5F00"}`)}else ae(l?"\u5200\u5C16\u5728\u57AB\u677F\u4E0A\u7559\u4E0B\u4E86\u5212\u75D5":"\u5212\u8FC7\u7EB8\u5F20\uFF0C\u5207\u53E3\u8FDE\u5230\u8FB9\u7F18\u6216\u95ED\u5408\u540E\u5C31\u80FD\u53D6\u4E0B\u7EB8\u7247\u3002")}catch(t){ae("\u8FD9\u6B21\u5207\u53E3\u592A\u590D\u6742\uFF0C\u8BF7\u5206\u51E0\u5200\u88C1\u5207\u3002"),console.error(t)}finally{En(null)}}}function Gc(){pn&&(kn.remove(pn),pn.geometry.dispose(),pn.material.map.dispose(),pn.material.dispose(),pn=null),ct.mat&&(pn=new we(new pi(5.7,5,.08),new Jn({map:Pr(uf(ct.mat.scratches)),roughness:.9})),pn.castShadow=!0,pn.receiveShadow=!0,kn.add(pn),Cf())}function Cf(){pn&&ct.mat&&pn.position.set(ct.mat.x,ct.mat.y,.06)}async function l_(n){wn();let t=Ai();ct.sources[t]={type:n,title:Nc[n],seed:Math.floor(Math.random()*1e8),old:n==="kraft"?.3:.025,w:3.45,h:4.8};let e=Ya(t,2.8+(Math.random()-.5)*.8,(Math.random()-.5)*.5,{rot:(Math.random()-.5)*.17,z:.25+ct.pieces.filter(i=>!i.book).length*.018});ct.pieces.push(e),await ja(e),Ri(new Set([e.id])),Tn(e.id),Ge(),ae("\u4E00\u5F20\u65B0\u7684"+Nc[n]+"\u3002\u634F\u4F4F\u4EFB\u610F\u4F4D\u7F6E\u8BD5\u8BD5\u3002")}async function c_(){if(!Ut){_t("#magazine").disabled=!0,En("\u6B63\u5728\u5BFB\u627E\u4E0B\u4E00\u672C\u6742\u5FD7\u2026");try{let n=await lf(En);wn();let t={id:n.id,x:-2.4,y:.35,title:"\u6742\u5FD7 "+(ct.books.length+1)};ct.books.push(t),ka(ct,t.id);for(let e=0;e<n.pages.length;e++){let i=Ai();ct.sources[i]={...n.pages[e],type:"magazine",index:e+1,w:2.9,h:4.25,old:.1+Math.random()*.7};let s=Ya(i,t.x+(e===0?-1:1)*1.45,t.y,{book:t.id,page:e,flip:e===0?Math.PI:0,rot:0});s.z=Qa(s),ct.pieces.push(s)}await Ki(),ae("\u65E7\u6742\u5FD7\u5DF2\u6536\u5165\u4E66\u67B6\u3002"+n.note),Tn(ct.pieces.find(e=>e.book===t.id&&e.page===1)?.id)}catch(n){ae("\u7D20\u6750\u6682\u65F6\u53D6\u4E0D\u5230\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002"),console.error(n)}finally{_t("#magazine").disabled=!1,En(null)}}}function h_(){let n=_t("#shelf-items");n.replaceChildren(),_t("#shelf-count").textContent=ct.books.filter(t=>t.id!==ct.activeBook).length;for(let[t,e]of ct.books.entries()){let i=document.createElement("div");i.className="shelf-book";let s=document.createElement("strong"),r=document.createElement("small"),o=document.createElement("button"),a=e.id===ct.activeBook?ct.pieces.filter(l=>l.book===e.id):e.pages||[];s.textContent=e.title||"\u6742\u5FD7 "+(t+1),r.textContent=a.length?ct.sources[a[0].source].title:"\u4E66\u9875\u5DF2\u5168\u90E8\u53D6\u4E0B",o.textContent=e.id===ct.activeBook?"\u6B63\u5728\u684C\u4E0A":"\u6362\u5230\u684C\u4E0A",o.disabled=e.id===ct.activeBook||!a.length,o.onclick=async()=>{if(!Ut){wn(),En("\u6B63\u5728\u4ECE\u4E66\u67B6\u53D6\u51FA\u2026");try{ka(ct,e.id),await Ki(),ae("\u5DF2\u6362\u4E0A"+s.textContent+"\uFF0C\u88C1\u53E3\u548C\u7FFB\u9605\u75D5\u8FF9\u90FD\u4FDD\u7559\u4E86\u3002")}finally{En(null)}}},i.append(s,r,o),n.append(i)}}function u_(n){let t=Xa.get(n.source),e=ks(320,320),i=e.getContext("2d"),s=n.poly.flat(),r=Math.min(...s.map(h=>h[0])),o=Math.max(...s.map(h=>h[0])),a=Math.min(...s.map(h=>h[1])),l=Math.max(...s.map(h=>h[1])),c=270/Math.max(o-r,l-a);i.translate(160,160),i.scale(c,-c),i.translate(-(o+r)/2,-(l+a)/2),i.beginPath();for(let h of n.poly)h.forEach((f,u)=>u?i.lineTo(...f):i.moveTo(...f)),i.closePath();return i.clip("evenodd"),i.translate(-n.w/2,n.h/2),i.scale(1,-1),t&&i.drawImage(t.front,0,0,n.w,n.h),e.toDataURL()}function Rf(n){let t=ct.pieces.find(s=>s.id===n);if(!t||t.book){ae("\u5148\u628A\u7EB8\u7247\u88C1\u4E0B\u6765\uFF0C\u6216\u70B9\u51FB\u201C\u53D6\u4E0B\u6574\u9875\u201D\u3002");return}let e=zs(n,ct.bonds),i=ct.pieces.filter(s=>e.has(s.id));ct.basket.push({id:Ai(),name:ct.sources[t.source].title||"\u62FE\u5230\u7684\u7EB8\u7247",pieces:Ci(i),bonds:ct.bonds.filter(s=>s.every(r=>e.has(r))),thumb:u_(t)}),ct.pieces=ct.pieces.filter(s=>!e.has(s.id)),ct.bonds=ct.bonds.filter(s=>!s.some(r=>e.has(r)));for(let s of e){let r=_e.get(s);r&&kc(r),_e.delete(s)}Tn(null),Hc(),Ge(),ae("\u5DF2\u6536\u5165\u8BCD\u8BED\u7BD3\u5B50\uFF0C\u4E0B\u6B21\u6253\u5F00\u8FD8\u80FD\u7528\u3002")}function Hc(){_t("#basket-count").textContent=_t("#basket-total").textContent=ct.basket.length;let n=_t("#basket-items");if(n.replaceChildren(),!ct.basket.length){let t=document.createElement("div");t.className="empty-basket",t.innerHTML="<b>\u2667</b>\u8FD8\u6CA1\u6709\u62FE\u8D77\u7684\u53E5\u5B50",n.append(t)}for(let t of ct.basket){let e=document.createElement("div");e.className="basket-card";let i=new Image;i.src=t.thumb,i.alt=t.name;let s=document.createElement("footer"),r=document.createElement("span"),o=document.createElement("button");r.textContent=t.name,o.textContent="\u53D6\u51FA \u2197",o.onclick=async()=>{wn();let a=t.pieces[0],l=2.8-a.x,c=-a.y,h=Math.min(...t.pieces.map(f=>f.z));for(let f of t.pieces)f.x+=l,f.y+=c,f.z=f.z-h+.3,ct.pieces.push(f);ct.bonds.push(...t.bonds),ct.basket=ct.basket.filter(f=>f.id!==t.id),await Promise.all(t.pieces.map(ja)),Ri(new Set(t.pieces.map(f=>f.id))),Hc(),Tn(a.id),Ge(),ae("\u53D6\u56DE\u6765\u4E86\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u88C1\u526A\u3002")},s.append(r,o),e.append(i,s),n.append(e)}}function $a(n){let t=ct.pieces.find(r=>r.id===Gs);if(!t)return;if(t.book){ae("\u5148\u53D6\u4E0B\u6574\u9875\uFF0C\u518D\u65CB\u8F6C\u6446\u653E\u3002");return}wn();let e=zs(t.id,ct.bonds),i=t.x,s=t.y;for(let r of ct.pieces.filter(o=>e.has(o.id))){let o=r.x-i,a=r.y-s;r.x=i+o*Math.cos(n)-a*Math.sin(n),r.y=s+o*Math.sin(n)+a*Math.cos(n),r.rot+=n,ei(r,Date.now(),!0)}Ri(e),Ge()}function Wc(n=ct.pieces){return[...new Set(n.map(t=>t.source))].map(t=>ct.sources[t]).filter(t=>t.source)}function f_(n=ct.pieces){return Wc(n).map(t=>`${t.title}
\u6587\u5B57\uFF1A${t.author}
${t.source}
\u8BB8\u53EF\uFF1A${t.license} ${t.licenseUrl}
\u914D\u56FE\uFF1A${t.imageAuthor||t.author}
${t.imageSource||t.source}
\u56FE\u7247\u8BB8\u53EF\uFF1A${t.imageLicense||"Public domain"}
\u5904\u7406\uFF1A\u8282\u9009\u3001\u6392\u7248\u3001\u88C1\u5207\u53CA\u62FC\u8D34\u3002
`).join(`
`)+`
\u5305\u542B\u7EF4\u57FA\u767E\u79D1\u6539\u7F16\u6587\u5B57\u7684\u4F5C\u54C1\u6309 CC BY-SA 4.0 \u5206\u4EAB\uFF1Ahttps://creativecommons.org/licenses/by-sa/4.0/
\u5176\u4F59\u539F\u521B\u90E8\u5206\u7684\u6743\u5229\u7531\u521B\u4F5C\u8005\u4FDD\u7559\u3002`}function Xc(n,t,e){let i=n instanceof Blob?n:new Blob([n],{type:e}),s=URL.createObjectURL(i),r=document.createElement("a");r.href=s,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(s),3e3)}function bi(n){return String(n||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function If(n,t){_t("#info-title").textContent=n,_t("#info-content").innerHTML=t,_t("#info-dialog").showModal()}function Pf(){if(!Ji.length){ae("\u5148\u9009\u4E2D\u4E00\u5F20\u7EB8\u6216\u4E00\u7EC4\u7C98\u597D\u7684\u4F5C\u54C1\u3002");return}_t("#export-drop").hidden=!0,_t("#export-dialog").showModal(),qc()}function qc(){Ei||(Ei=new br({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),Ei.setSize(1400,1100),Ei.outputColorSpace=Ee,_t("#export-preview").append(Ei.domElement));let n=new bs;n.add(new Ts(16776175,11182999,2.7));let t=new As(16777215,2);t.position.set(-3,5,10),n.add(t);let e=new In;n.add(e);let i=ct.pieces.filter(h=>Ji.includes(h.id));if(!i.length)return;let s=new Nn;for(let h of i){let f=_e.get(h.id);f.group.updateMatrixWorld(!0),s.expandByObject(f.group);let u=f.group.clone();u.position.copy(f.group.position),u.rotation.copy(f.group.rotation),e.add(u)}let r=s.getCenter(new Z),o=s.getSize(new Z);for(let h of e.children)h.position.sub(r);e.rotation.z=Number(_t("#export-angle").value)*Math.PI/180,e.rotation.x=Number(_t("#export-tilt").value)*Math.PI/180;let a=Math.max(o.x,o.y)*.8+1,l=new Kn(-a*1.273,a*1.273,a,-a,.1,60);l.position.set(0,0,20),l.lookAt(0,0,0);let c=_t("#export-bg").value;if(c==="wood"){let h=new we(new Un(40,40),new Fi({map:Lr}));h.position.z=-2,n.add(h)}else c==="paper"&&(n.background=new kt("#f5f0e5"));Ei.setClearColor(0,0),Ei.render(n,l),_t("#angle-value").textContent=_t("#export-angle").value+"\xB0"}async function d_(){if(!Ji.length)return;qc();let n=ct.pieces.filter(a=>Ji.includes(a.id)),t=Wc(n),e=t.flatMap(a=>[`${a.title} \u2014 ${a.author} \xB7 ${a.license}`,a.source,`\u914D\u56FE\uFF1A${a.imageAuthor||a.author} \xB7 ${a.imageLicense||"Public domain"} \xB7 ${a.imageSource||a.source}`]);t.some(a=>a.licenseUrl?.includes("/by-sa/"))&&e.push("\u6587\u5B57\u6539\u7F16\u4E0E\u62FC\u8D34\uFF1A\u77E5\u8BC6\u5171\u4EAB\u7F72\u540D\u2014\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB 4.0 \xB7 https://creativecommons.org/licenses/by-sa/4.0/");let s=e.length?60+e.length*20:0,r=ks(1400,1100+s),o=r.getContext("2d");o.drawImage(Ei.domElement,0,0),s&&(o.fillStyle="#f5f0e5",o.fillRect(0,1100,1400,s),o.fillStyle="#686b5b",o.font="13px sans-serif",o.fillText("\u62FE\u53E5 / \u7D20\u6750\u51FA\u5904 \xB7 \u6458\u5F55\u3001\u88C1\u5207\u4E0E\u91CD\u65B0\u7F16\u6392",30,1130),e.forEach((a,l)=>o.fillText(a,30,1155+l*20,1340))),r.toBlob(a=>{Xc(a,"\u62FE\u53E5-"+new Date().toISOString().slice(0,10)+".png","image/png"),ae("\u4F5C\u54C1\u56FE\u7247\u5DF2\u5BFC\u51FA\u3002")},"image/png")}_t("#shelf-toggle").onclick=()=>{_t("#shelf").hidden=!_t("#shelf").hidden};_t("#magazine").onclick=c_;Ja("[data-paper]").forEach(n=>n.onclick=()=>l_(n.dataset.paper));Ja("[data-tool]").forEach(n=>n.onclick=()=>qa(n.dataset.tool));_t("#rotate-left").onclick=()=>$a(Math.PI/18);_t("#rotate-right").onclick=()=>$a(-Math.PI/18);_t("#mat").onclick=()=>{wn(),ct.mat?ae("\u57AB\u677F\u5DF2\u7ECF\u5728\u684C\u4E0A\uFF0C\u62D6\u52A8\u9732\u51FA\u7684\u90E8\u5206\u5C31\u80FD\u79FB\u52A8\u3002"):(ct.mat={x:2.6,y:0,scratches:[]},Gc(),ae("\u57AB\u677F\u653E\u597D\u4E86\uFF0C\u53EF\u62D6\u52A8\u9732\u51FA\u7684\u90E8\u5206\u79FB\u52A8\u3002\u653E\u5728\u5B83\u4E0A\u9762\u7684\u7EB8\u4ECD\u80FD\u5207\u5F00\u3002")),Ge()};_t("#detach").onclick=()=>{let n=ct.pieces.find(t=>t.id===Gs);n&&(wn(),n.book=null,n.fragment=!0,n.flip=0,n.x=2,n.y=.1,n.z=.4,ei(n,Date.now(),!0),Ri(new Set([n.id])),Tn(n.id),Ge(),ae("\u6574\u9875\u5DF2\u53D6\u4E0B\uFF0C\u53EF\u4EE5\u81EA\u7531\u88C1\u526A\u3002"))};_t("#store-piece").onclick=()=>{wn(),Rf(Gs)};_t("#basket-toggle").onclick=()=>{_t("#basket").hidden=!_t("#basket").hidden};Ja("[data-close]").forEach(n=>n.onclick=()=>_t("#"+n.dataset.close).hidden=!0);_t("#undo").onclick=async()=>{!Ti.length||Ut||(Dr.push(Ci(ct)),ct=Ti.pop(),await Ki(),Ka(),ae("\u5DF2\u64A4\u9500"))};_t("#redo").onclick=async()=>{!Dr.length||Ut||(Ti.push(Ci(ct)),ct=Dr.pop(),await Ki(),Ka(),ae("\u5DF2\u91CD\u505A"))};_t("#export-open").onclick=()=>{_t("#export-drop").hidden=!1,ae("\u628A\u4F5C\u54C1\u62D6\u8FDB\u53F3\u4E0A\u65B9\u6846\u5185\uFF0C\u6216\u9009\u4E2D\u540E\u70B9\u51FB\u201C\u4F7F\u7528\u5F53\u524D\u9009\u4E2D\u4F5C\u54C1\u201D\u3002")};_t("#export-cancel").onclick=()=>_t("#export-drop").hidden=!0;function Lf(){if(!Gs){ae("\u5148\u70B9\u51FB\u684C\u4E0A\u7684\u4E00\u5F20\u7EB8\u3002");return}Ji=[...zs(Gs,ct.bonds)],Pf()}_t("#export-current").onclick=Lf;_t("#export-selected").onclick=Lf;_t("#export-close").onclick=()=>_t("#export-dialog").close();["angle","tilt","bg"].forEach(n=>_t("#export-"+n).oninput=qc);_t("#export-download").onclick=d_;_t("#export-credits").onclick=()=>Xc(f_(ct.pieces.filter(n=>Ji.includes(n.id))),"\u62FE\u53E5-\u7D20\u6750\u51FA\u5904.txt","text/plain;charset=utf-8");_t("#info-close").onclick=()=>_t("#info-dialog").close();_t("#sources").onclick=()=>If("\u6BCF\u4E00\u7247\u7EB8\uFF0C\u90FD\u6709\u6765\u5904","<p>\u6587\u5B57\u4F7F\u7528\u53EF\u6539\u7F16\u7684\u5F00\u653E\u8BB8\u53EF\u5185\u5BB9\uFF0C\u9986\u85CF\u914D\u56FE\u53EA\u9009\u62E9\u6807\u8BB0\u4E3A\u516C\u6709\u9886\u57DF\u7684\u56FE\u50CF\u3002\u6742\u5FD7\u6392\u7248\u4E0E\u9009\u56FE\u4E3A\u91CD\u65B0\u7EC4\u5408\uFF0C\u914D\u56FE\u4E0D\u4E00\u5B9A\u5BF9\u5E94\u6587\u7AE0\u5185\u5BB9\u3002</p>"+Wc([...ct.pieces,...ct.basket.flatMap(n=>n.pieces)]).map(n=>`<article><strong>${bi(n.title)}</strong><small>${bi(n.author)} \xB7 ${bi(n.license)}</small><a href="${bi(n.source)}" target="_blank" rel="noopener">\u6587\u7AE0\u4E0E\u4F5C\u8005\u8BB0\u5F55 \u2197</a> \xB7 <a href="${bi(n.licenseUrl)}" target="_blank" rel="noopener">\u4F7F\u7528\u8BB8\u53EF \u2197</a><small>\u914D\u56FE\uFF1A${bi(n.imageAuthor)} \xB7 ${bi(n.imageLicense)}</small><a href="${bi(n.imageSource)}" target="_blank" rel="noopener">\u56FE\u50CF\u51FA\u5904 \u2197</a></article>`).join(""));_t("#help").onclick=()=>If("\u4E00\u5F20\u684C\u5B50\u7684\u4F7F\u7528\u65B9\u6CD5","<h3>\u7FFB\u9605\u4E0E\u634F\u7EB8</h3><p>\u7528\u300C\u624B\u300D\u6309\u4F4F\u6742\u5FD7\u4E00\u9875\u7684\u5916\u4FA7\uFF0C\u5411\u4E66\u810A\u53E6\u4E00\u4FA7\u62D6\u52A8\u7FFB\u9875\u3002\u6563\u9875\u70B9\u54EA\u91CC\u5C31\u4ECE\u54EA\u91CC\u634F\u8D77\uFF0C\u62D6\u52A8\u6446\u653E\uFF1B\u6309\u4F4F Shift \u53EF\u62AC\u5F97\u66F4\u9AD8\u3002Q / E \u65CB\u8F6C\u9009\u4E2D\u7684\u6563\u9875\u3002\u62D6\u52A8\u7A7A\u767D\u684C\u9762\u53EF\u5E73\u79FB\u955C\u5934\uFF0C\u6EDA\u8F6E\u7F29\u653E\uFF1B\u89C6\u89D2\u65B9\u5411\u56FA\u5B9A\u3002</p><h3>\u88C1\u51FA\u4E00\u4E2A\u8BCD</h3><p>\u5207\u6362\u300C\u88C1\u7EB8\u5200\u300D\uFF0C\u6309\u4F4F\u753B\u4E00\u6761\u5207\u7EBF\u3002\u5207\u7EBF\u901A\u5230\u7EB8\u5F20\u4E24\u4FA7\u8FB9\u7F18\uFF0C\u6216\u8005\u7ED5\u6210\u95ED\u5408\u8F6E\u5ED3\uFF0C\u5C31\u80FD\u5206\u79BB\u7EB8\u7247\u3002\u7EB8\u7247\u53EF\u4EE5\u7EE7\u7EED\u88C1\u3002\u6CA1\u6709\u57AB\u677F\u65F6\u4F1A\u5207\u5230\u4E0B\u5C42\uFF1B\u57AB\u677F\u672C\u8EAB\u4F1A\u7559\u4E0B\u5200\u75D5\u3002</p><h3>\u7C98\u8D77\u6765\uFF0C\u7B49\u4E00\u4F1A\u513F</h3><p>\u9009\u300C\u80F6\u6C34\u300D\u6309\u4F4F\u6D82\u62B9\uFF0C20 \u79D2\u5185\u5C06\u7EB8\u53E0\u4E0A\u53BB\u3002\u80F6\u6C34\u9010\u6E10\u53D8\u5E72\u5E76\u7275\u52A8\u7EB8\u9762\u6536\u7F29\u3001\u8D77\u76B1\u3001\u7FD8\u8FB9\u3002\u6E7F\u5EA6\u4E0D\u540C\uFF0C\u63A5\u89E6\u65F6\u7684\u7C98\u5408\u4E0E\u76B1\u8936\u4E5F\u4E0D\u540C\u3002\u5E72\u80F6\u4E0D\u7C98\u65B0\u7EB8\uFF0C\u5DF2\u7C98\u597D\u7684\u7EB8\u7EC4\u4E00\u8D77\u79FB\u52A8\u3002\u62AC\u8D77\u6E7F\u80F6\u7EB8\u65F6\u80F6\u6DB2\u4F1A\u7F13\u6162\u6D41\u52A8\u3002</p><h3>\u628A\u5076\u7136\u6536\u85CF\u8D77\u6765</h3><p>\u62D6\u52A8\u6563\u9875\u6216\u7EB8\u7247\u5230\u5DE6\u4E0B\u65B9\u8BCD\u8BED\u7BD3\u5B50\u533A\u57DF\uFF0C\u6216\u9009\u4E2D\u540E\u70B9\u300C\u653E\u5165\u7BD3\u5B50\u300D\u3002\u70B9\u51FB\u4FA7\u8FB9\u680F\u8BCD\u8BED\u7BD3\u5B50\uFF0C\u53EF\u4EE5\u518D\u6B21\u53D6\u51FA\uFF0C\u7EE7\u7EED\u88C1\u526A\u3002\u5DE5\u4F5C\u53F0\u548C\u7BD3\u5B50\u81EA\u52A8\u4FDD\u5B58\u5728\u672C\u6D4F\u89C8\u5668\uFF1B\u6E05\u7406\u7F51\u7AD9\u6570\u636E\u4F1A\u6E05\u9664\u5B83\u4EEC\uFF0C\u5EFA\u8BAE\u5076\u5C14\u4E0B\u8F7D\u5907\u4EFD\u3002</p><h3>\u5E26\u8D70\u4E00\u9996\u8BD7</h3><p>\u70B9\u51FB\u300C\u5BFC\u51FA\u4E00\u9996\u8BD7\u300D\uFF0C\u628A\u7EB8\u6216\u7C98\u597D\u7684\u4F5C\u54C1\u62D6\u8FDB\u5BFC\u51FA\u533A\u57DF\uFF0C\u518D\u8C03\u6574\u4F5C\u54C1\u89D2\u5EA6\u3001\u503E\u89D2\u548C\u80CC\u666F\u3002\u5BFC\u51FA PNG \u4FDD\u5B58\u5230\u672C\u5730\uFF0C\u5E76\u9644\u4E0A\u7D20\u6750\u51FA\u5904\u3002</p><p>H \u624B \xB7 K \u5200 \xB7 G \u80F6\u6C34 \xB7 Q / E \u65CB\u8F6C \xB7 Ctrl+Z \u64A4\u9500 \xB7 Ctrl+Shift+Z \u91CD\u505A\u3002\u63A8\u8350\u7535\u8111\u9F20\u6807\u64CD\u4F5C\uFF0C\u4E5F\u652F\u6301\u89E6\u63A7\u62D6\u52A8\u3002</p>");_t("#backup").onclick=()=>Xc(JSON.stringify(ct),"\u62FE\u53E5-\u5DE5\u4F5C\u53F0\u5907\u4EFD.json","application/json");_t("#restore").onchange=async n=>{let t=n.target.files[0];if(t)try{let e=JSON.parse(await t.text());if(e.version!==1||!Array.isArray(e.pieces)||!Array.isArray(e.basket)||!e.sources||e.pieces.length>1e3)throw Error();wn(),ct=e,En("\u6B63\u5728\u6062\u590D\u7EB8\u5F20\u2026"),await Ki(),ae("\u5DE5\u4F5C\u53F0\u548C\u8BCD\u8BED\u7BD3\u5B50\u5DF2\u6062\u590D")}catch{ae("\u65E0\u6CD5\u8BFB\u53D6\u8FD9\u4E2A\u5907\u4EFD\u6587\u4EF6\u3002")}finally{En(null),n.target.value=""}};addEventListener("keydown",n=>{if(!(document.querySelector("dialog[open]")||/INPUT|TEXTAREA|SELECT/.test(n.target.tagName))){if(n.ctrlKey||n.metaKey){n.key.toLowerCase()==="z"&&(n.preventDefault(),_t(n.shiftKey?"#redo":"#undo").click());return}n.key.toLowerCase()==="h"&&qa("hand"),n.key.toLowerCase()==="k"&&qa("knife"),n.key.toLowerCase()==="g"&&qa("glue"),n.key.toLowerCase()==="q"&&$a(Math.PI/18),n.key.toLowerCase()==="e"&&$a(-Math.PI/18),n.key==="Escape"&&(_t("#basket").hidden=!0,_t("#export-drop").hidden=!0)}});function tl(n){pe.zoom=Gi.clamp(n,.65,3),pe.updateProjectionMatrix(),_t("#zoom-reset").textContent=Math.round(pe.zoom*100)+"%"}_t("#zoom-in").onclick=()=>tl(pe.zoom*1.2);_t("#zoom-out").onclick=()=>tl(pe.zoom/1.2);_t("#zoom-reset").onclick=()=>{pe.position.set(0,-9,23),tl(1)};Ne.addEventListener("wheel",n=>{n.preventDefault(),tl(pe.zoom*Math.exp(-n.deltaY*.0015))},{passive:!1});function Df(){let n=Vs.clientWidth,t=Vs.clientHeight;Vn.setSize(n,t,!1);let e=n/t,i=Math.max(7.4,5.1*e),s=i/e;pe.left=-i,pe.right=i,pe.top=s,pe.bottom=-s,pe.updateProjectionMatrix()}new ResizeObserver(Df).observe(Vs);Df();var gf=0,xf=0,_f=performance.now();function Oc(n){requestAnimationFrame(Oc);let t=Date.now(),e=Math.min((n-_f)/1e3,.033);_f=n;for(let i of ct.pieces){let s=_e.get(i.id);if(s){if(i.settling){i.hingeVelocity+=(i.flip-i.turning)*50*e-i.hingeVelocity*12*e,i.turning=Gi.clamp(i.turning+i.hingeVelocity*e,0,Math.PI);let r=ct.books.find(o=>o.id===i.book);r&&(i.x=r.x+Math.cos(i.turning)*i.w/2,i.z=wf(i,i.turning)),Math.abs(i.flip-i.turning)<.002&&Math.abs(i.hingeVelocity)<.02&&(i.turning=void 0,i.settling=!1,i.z=Qa(i),Ge())}s.physics.paper=i,i.heldRigid||(sf(i,s.physics,e,t),i.laminated&&s.physics.step(e,t)),ei(i,t)}}if(n-gf>120&&!Ut&&(gf=n,Af()),n-xf>500){xf=n;let i=ct.pieces.flatMap(s=>s.glue).filter(s=>ti(s.born,t).wet);if(_t("#glue-status").hidden=!i.length,i.length){let s=Math.max(...i.map(r=>Math.max(0,20-(t-r.born)/1e3)));_t("#glue-status").textContent="\u80F6\u6C34\u6B63\u5728\u53D8\u5E72 \xB7 "+s.toFixed(1)+" \u79D2 "+(s<7?"\uFF0F \u534A\u5E72\u5FAE\u76B1":"\uFF0F \u6E7F\u6DA6\u53EF\u7C98"),Ge()}}Vn.render(kn,pe)}async function p_(){try{let n=await Pc("state","workspace");if(n?.version===1){if(ct=n,!ct.chineseOnly){let t=await fetch("./seed.json").then(i=>i.json()),e=0;for(let i of Object.values(ct.sources))i.type==="magazine"&&Object.assign(i,t[e++%t.length]);ct.chineseOnly=!0}await Ki(),ae("\u684C\u4E0A\u7684\u7EB8\u548C\u8BCD\u8BED\u7BD3\u5B50\uFF0C\u90FD\u8FD8\u5728\u3002")}else{let t=await fetch("./seed.json").then(s=>s.json()),e={id:Ai(),x:-2.4,y:.35};ct.books.push(e);for(let s=0;s<10;s++){let r=t[s%t.length],o=Ai();ct.sources[o]={...r,type:"magazine",index:s+1,seed:s*1927+39,old:.15+s%4*.12,layout:s%5,w:2.9,h:4.25};let a=Ya(o,e.x+(s===0?-1:1)*1.45,e.y,{book:e.id,page:s,flip:s===0?Math.PI:0});a.z=Qa(a),ct.pieces.push(a)}let i=Ai();ct.sources[i]={type:"white",title:"\u767D\u7EB8",seed:80,old:.02,w:3.45,h:4.8},ct.pieces.push(Ya(i,2.75,-.1,{rot:-.08})),await Ki(),Ti=[],Ka()}En(null),requestAnimationFrame(Oc)}catch(n){console.error(n),En(null),ae("\u6062\u590D\u5DE5\u4F5C\u53F0\u5931\u8D25\uFF0C\u53EF\u4EE5\u7528\u5907\u4EFD\u6062\u590D\u6216\u91CD\u65B0\u53D6\u7EB8\u3002"),requestAnimationFrame(Oc)}}document.addEventListener("visibilitychange",()=>{document.hidden&&Va("state","workspace",Ci(ct)).catch(()=>{})});p_();
/*! Bundled license information:

polygon-clipping/dist/polygon-clipping.umd.js:
  (**
   * splaytree v3.1.2
   * Fast Splay tree for Node and browser
   *
   * @author Alexander Milevski <info@w8r.name>
   * @license MIT
   * @preserve
   *)
  (*! *****************************************************************************
      Copyright (c) Microsoft Corporation. All rights reserved.
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use
      this file except in compliance with the License. You may obtain a copy of the
      License at http://www.apache.org/licenses/LICENSE-2.0
  
      THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
      WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
      MERCHANTABLITY OR NON-INFRINGEMENT.
  
      See the Apache Version 2.0 License for specific language governing permissions
      and limitations under the License.
      ***************************************************************************** *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
