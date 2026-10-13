var vf=Object.create;var qc=Object.defineProperty;var Sf=Object.getOwnPropertyDescriptor;var Mf=Object.getOwnPropertyNames;var bf=Object.getPrototypeOf,Ef=Object.prototype.hasOwnProperty;var wf=(i,t)=>()=>(t||i((t={exports:{}}).exports,t),t.exports);var Tf=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Mf(t))!Ef.call(i,s)&&s!==e&&qc(i,s,{get:()=>t[s],enumerable:!(n=Sf(t,s))||n.enumerable});return i};var Af=(i,t,e)=>(e=i!=null?vf(bf(i)):{},Tf(t||!i||!i.__esModule?qc(e,"default",{value:i,enumerable:!0}):e,i));var Ou=wf((pc,mc)=>{(function(i,t){typeof pc=="object"&&typeof mc<"u"?mc.exports=t():typeof define=="function"&&define.amd?define(t):(i=typeof globalThis<"u"?globalThis:i||self,i.polygonClipping=t())})(pc,(function(){"use strict";function i(L,d){var m={label:0,sent:function(){if(A[0]&1)throw A[1];return A[1]},trys:[],ops:[]},S,T,A,O;return O={next:U(0),throw:U(1),return:U(2)},typeof Symbol=="function"&&(O[Symbol.iterator]=function(){return this}),O;function U(X){return function(dt){return Y([X,dt])}}function Y(X){if(S)throw new TypeError("Generator is already executing.");for(;m;)try{if(S=1,T&&(A=X[0]&2?T.return:X[0]?T.throw||((A=T.return)&&A.call(T),0):T.next)&&!(A=A.call(T,X[1])).done)return A;switch(T=0,A&&(X=[X[0]&2,A.value]),X[0]){case 0:case 1:A=X;break;case 4:return m.label++,{value:X[1],done:!1};case 5:m.label++,T=X[1],X=[0];continue;case 7:X=m.ops.pop(),m.trys.pop();continue;default:if(A=m.trys,!(A=A.length>0&&A[A.length-1])&&(X[0]===6||X[0]===2)){m=0;continue}if(X[0]===3&&(!A||X[1]>A[0]&&X[1]<A[3])){m.label=X[1];break}if(X[0]===6&&m.label<A[1]){m.label=A[1],A=X;break}if(A&&m.label<A[2]){m.label=A[2],m.ops.push(X);break}A[2]&&m.ops.pop(),m.trys.pop();continue}X=d.call(L,m)}catch(dt){X=[6,dt],T=0}finally{S=A=0}if(X[0]&5)throw X[1];return{value:X[0]?X[1]:void 0,done:!0}}}var t=(function(){function L(d,m){this.next=null,this.key=d,this.data=m,this.left=null,this.right=null}return L})();function e(L,d){return L>d?1:L<d?-1:0}function n(L,d,m){for(var S=new t(null,null),T=S,A=S;;){var O=m(L,d.key);if(O<0){if(d.left===null)break;if(m(L,d.left.key)<0){var U=d.left;if(d.left=U.right,U.right=d,d=U,d.left===null)break}A.left=d,A=d,d=d.left}else if(O>0){if(d.right===null)break;if(m(L,d.right.key)>0){var U=d.right;if(d.right=U.left,U.left=d,d=U,d.right===null)break}T.right=d,T=d,d=d.right}else break}return T.right=d.left,A.left=d.right,d.left=S.right,d.right=S.left,d}function s(L,d,m,S){var T=new t(L,d);if(m===null)return T.left=T.right=null,T;m=n(L,m,S);var A=S(L,m.key);return A<0?(T.left=m.left,T.right=m,m.left=null):A>=0&&(T.right=m.right,T.left=m,m.right=null),T}function r(L,d,m){var S=null,T=null;if(d){d=n(L,d,m);var A=m(d.key,L);A===0?(S=d.left,T=d.right):A<0?(T=d.right,d.right=null,S=d):(S=d.left,d.left=null,T=d)}return{left:S,right:T}}function o(L,d,m){return d===null?L:(L===null||(d=n(L.key,d,m),d.left=L),d)}function a(L,d,m,S,T){if(L){S(""+d+(m?"\u2514\u2500\u2500 ":"\u251C\u2500\u2500 ")+T(L)+`
`);var A=d+(m?"    ":"\u2502   ");L.left&&a(L.left,A,!1,S,T),L.right&&a(L.right,A,!0,S,T)}}var l=(function(){function L(d){d===void 0&&(d=e),this._root=null,this._size=0,this._comparator=d}return L.prototype.insert=function(d,m){return this._size++,this._root=s(d,m,this._root,this._comparator)},L.prototype.add=function(d,m){var S=new t(d,m);this._root===null&&(S.left=S.right=null,this._size++,this._root=S);var T=this._comparator,A=n(d,this._root,T),O=T(d,A.key);return O===0?this._root=A:(O<0?(S.left=A.left,S.right=A,A.left=null):O>0&&(S.right=A.right,S.left=A,A.right=null),this._size++,this._root=S),this._root},L.prototype.remove=function(d){this._root=this._remove(d,this._root,this._comparator)},L.prototype._remove=function(d,m,S){var T;if(m===null)return null;m=n(d,m,S);var A=S(d,m.key);return A===0?(m.left===null?T=m.right:(T=n(d,m.left,S),T.right=m.right),this._size--,T):m},L.prototype.pop=function(){var d=this._root;if(d){for(;d.left;)d=d.left;return this._root=n(d.key,this._root,this._comparator),this._root=this._remove(d.key,this._root,this._comparator),{key:d.key,data:d.data}}return null},L.prototype.findStatic=function(d){for(var m=this._root,S=this._comparator;m;){var T=S(d,m.key);if(T===0)return m;T<0?m=m.left:m=m.right}return null},L.prototype.find=function(d){return this._root&&(this._root=n(d,this._root,this._comparator),this._comparator(d,this._root.key)!==0)?null:this._root},L.prototype.contains=function(d){for(var m=this._root,S=this._comparator;m;){var T=S(d,m.key);if(T===0)return!0;T<0?m=m.left:m=m.right}return!1},L.prototype.forEach=function(d,m){for(var S=this._root,T=[],A=!1;!A;)S!==null?(T.push(S),S=S.left):T.length!==0?(S=T.pop(),d.call(m,S),S=S.right):A=!0;return this},L.prototype.range=function(d,m,S,T){for(var A=[],O=this._comparator,U=this._root,Y;A.length!==0||U;)if(U)A.push(U),U=U.left;else{if(U=A.pop(),Y=O(U.key,m),Y>0)break;if(O(U.key,d)>=0&&S.call(T,U))return this;U=U.right}return this},L.prototype.keys=function(){var d=[];return this.forEach(function(m){var S=m.key;return d.push(S)}),d},L.prototype.values=function(){var d=[];return this.forEach(function(m){var S=m.data;return d.push(S)}),d},L.prototype.min=function(){return this._root?this.minNode(this._root).key:null},L.prototype.max=function(){return this._root?this.maxNode(this._root).key:null},L.prototype.minNode=function(d){if(d===void 0&&(d=this._root),d)for(;d.left;)d=d.left;return d},L.prototype.maxNode=function(d){if(d===void 0&&(d=this._root),d)for(;d.right;)d=d.right;return d},L.prototype.at=function(d){for(var m=this._root,S=!1,T=0,A=[];!S;)if(m)A.push(m),m=m.left;else if(A.length>0){if(m=A.pop(),T===d)return m;T++,m=m.right}else S=!0;return null},L.prototype.next=function(d){var m=this._root,S=null;if(d.right){for(S=d.right;S.left;)S=S.left;return S}for(var T=this._comparator;m;){var A=T(d.key,m.key);if(A===0)break;A<0?(S=m,m=m.left):m=m.right}return S},L.prototype.prev=function(d){var m=this._root,S=null;if(d.left!==null){for(S=d.left;S.right;)S=S.right;return S}for(var T=this._comparator;m;){var A=T(d.key,m.key);if(A===0)break;A<0?m=m.left:(S=m,m=m.right)}return S},L.prototype.clear=function(){return this._root=null,this._size=0,this},L.prototype.toList=function(){return h(this._root)},L.prototype.load=function(d,m,S){m===void 0&&(m=[]),S===void 0&&(S=!1);var T=d.length,A=this._comparator;if(S&&_(d,m,0,T-1,A),this._root===null)this._root=c(d,m,0,T),this._size=T;else{var O=p(this.toList(),f(d,m),A);T=this._size+T,this._root=u({head:O},0,T)}return this},L.prototype.isEmpty=function(){return this._root===null},Object.defineProperty(L.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(L.prototype,"root",{get:function(){return this._root},enumerable:!0,configurable:!0}),L.prototype.toString=function(d){d===void 0&&(d=function(S){return String(S.key)});var m=[];return a(this._root,"",!0,function(S){return m.push(S)},d),m.join("")},L.prototype.update=function(d,m,S){var T=this._comparator,A=r(d,this._root,T),O=A.left,U=A.right;T(d,m)<0?U=s(m,S,U,T):O=s(m,S,O,T),this._root=o(O,U,T)},L.prototype.split=function(d){return r(d,this._root,this._comparator)},L.prototype[Symbol.iterator]=function(){var d,m,S;return i(this,function(T){switch(T.label){case 0:d=this._root,m=[],S=!1,T.label=1;case 1:return S?[3,6]:d===null?[3,2]:(m.push(d),d=d.left,[3,5]);case 2:return m.length===0?[3,4]:(d=m.pop(),[4,d]);case 3:return T.sent(),d=d.right,[3,5];case 4:S=!0,T.label=5;case 5:return[3,1];case 6:return[2]}})},L})();function c(L,d,m,S){var T=S-m;if(T>0){var A=m+Math.floor(T/2),O=L[A],U=d[A],Y=new t(O,U);return Y.left=c(L,d,m,A),Y.right=c(L,d,A+1,S),Y}return null}function f(L,d){for(var m=new t(null,null),S=m,T=0;T<L.length;T++)S=S.next=new t(L[T],d[T]);return S.next=null,m.next}function h(L){for(var d=L,m=[],S=!1,T=new t(null,null),A=T;!S;)d?(m.push(d),d=d.left):m.length>0?(d=A=A.next=m.pop(),d=d.right):S=!0;return A.next=null,T.next}function u(L,d,m){var S=m-d;if(S>0){var T=d+Math.floor(S/2),A=u(L,d,T),O=L.head;return O.left=A,L.head=L.head.next,O.right=u(L,T+1,m),O}return null}function p(L,d,m){for(var S=new t(null,null),T=S,A=L,O=d;A!==null&&O!==null;)m(A.key,O.key)<0?(T.next=A,A=A.next):(T.next=O,O=O.next),T=T.next;return A!==null?T.next=A:O!==null&&(T.next=O),S.next}function _(L,d,m,S,T){if(!(m>=S)){for(var A=L[m+S>>1],O=m-1,U=S+1;;){do O++;while(T(L[O],A)<0);do U--;while(T(L[U],A)>0);if(O>=U)break;var Y=L[O];L[O]=L[U],L[U]=Y,Y=d[O],d[O]=d[U],d[U]=Y}_(L,d,m,U,T),_(L,d,U+1,S,T)}}let y=(L,d)=>L.ll.x<=d.x&&d.x<=L.ur.x&&L.ll.y<=d.y&&d.y<=L.ur.y,x=(L,d)=>{if(d.ur.x<L.ll.x||L.ur.x<d.ll.x||d.ur.y<L.ll.y||L.ur.y<d.ll.y)return null;let m=L.ll.x<d.ll.x?d.ll.x:L.ll.x,S=L.ur.x<d.ur.x?L.ur.x:d.ur.x,T=L.ll.y<d.ll.y?d.ll.y:L.ll.y,A=L.ur.y<d.ur.y?L.ur.y:d.ur.y;return{ll:{x:m,y:T},ur:{x:S,y:A}}},g=Number.EPSILON;g===void 0&&(g=Math.pow(2,-52));let C=g*g,N=(L,d)=>{if(-g<L&&L<g&&-g<d&&d<g)return 0;let m=L-d;return m*m<C*L*d?0:L<d?-1:1};class w{constructor(){this.reset()}reset(){this.xRounder=new I,this.yRounder=new I}round(d,m){return{x:this.xRounder.round(d),y:this.yRounder.round(m)}}}class I{constructor(){this.tree=new l,this.round(0)}round(d){let m=this.tree.add(d),S=this.tree.prev(m);if(S!==null&&N(m.key,S.key)===0)return this.tree.remove(d),S.key;let T=this.tree.next(m);return T!==null&&N(m.key,T.key)===0?(this.tree.remove(d),T.key):d}}let R=new w,F=11102230246251565e-32,M=134217729,D=(3+8*F)*F;function k(L,d,m,S,T){let A,O,U,Y,X=d[0],dt=S[0],E=0,H=0;dt>X==dt>-X?(A=X,X=d[++E]):(A=dt,dt=S[++H]);let B=0;if(E<L&&H<m)for(dt>X==dt>-X?(O=X+A,U=A-(O-X),X=d[++E]):(O=dt+A,U=A-(O-dt),dt=S[++H]),A=O,U!==0&&(T[B++]=U);E<L&&H<m;)dt>X==dt>-X?(O=A+X,Y=O-A,U=A-(O-Y)+(X-Y),X=d[++E]):(O=A+dt,Y=O-A,U=A-(O-Y)+(dt-Y),dt=S[++H]),A=O,U!==0&&(T[B++]=U);for(;E<L;)O=A+X,Y=O-A,U=A-(O-Y)+(X-Y),X=d[++E],A=O,U!==0&&(T[B++]=U);for(;H<m;)O=A+dt,Y=O-A,U=A-(O-Y)+(dt-Y),dt=S[++H],A=O,U!==0&&(T[B++]=U);return(A!==0||B===0)&&(T[B++]=A),B}function W(L,d){let m=d[0];for(let S=1;S<L;S++)m+=d[S];return m}function $(L){return new Float64Array(L)}let tt=(3+16*F)*F,G=(2+12*F)*F,Q=(9+64*F)*F*F,ot=$(4),rt=$(8),mt=$(12),it=$(16),at=$(4);function pt(L,d,m,S,T,A,O){let U,Y,X,dt,E,H,B,ht,ut,nt,gt,xt,Bt,Dt,se,ae,Ze,Ie,$e=L-T,He=m-T,tn=d-A,Je=S-A;Dt=$e*Je,H=M*$e,B=H-(H-$e),ht=$e-B,H=M*Je,ut=H-(H-Je),nt=Je-ut,se=ht*nt-(Dt-B*ut-ht*ut-B*nt),ae=tn*He,H=M*tn,B=H-(H-tn),ht=tn-B,H=M*He,ut=H-(H-He),nt=He-ut,Ze=ht*nt-(ae-B*ut-ht*ut-B*nt),gt=se-Ze,E=se-gt,ot[0]=se-(gt+E)+(E-Ze),xt=Dt+gt,E=xt-Dt,Bt=Dt-(xt-E)+(gt-E),gt=Bt-ae,E=Bt-gt,ot[1]=Bt-(gt+E)+(E-ae),Ie=xt+gt,E=Ie-xt,ot[2]=xt-(Ie-E)+(gt-E),ot[3]=Ie;let ln=W(4,ot),en=G*O;if(ln>=en||-ln>=en||(E=L-$e,U=L-($e+E)+(E-T),E=m-He,X=m-(He+E)+(E-T),E=d-tn,Y=d-(tn+E)+(E-A),E=S-Je,dt=S-(Je+E)+(E-A),U===0&&Y===0&&X===0&&dt===0)||(en=Q*O+D*Math.abs(ln),ln+=$e*dt+Je*U-(tn*X+He*Y),ln>=en||-ln>=en))return ln;Dt=U*Je,H=M*U,B=H-(H-U),ht=U-B,H=M*Je,ut=H-(H-Je),nt=Je-ut,se=ht*nt-(Dt-B*ut-ht*ut-B*nt),ae=Y*He,H=M*Y,B=H-(H-Y),ht=Y-B,H=M*He,ut=H-(H-He),nt=He-ut,Ze=ht*nt-(ae-B*ut-ht*ut-B*nt),gt=se-Ze,E=se-gt,at[0]=se-(gt+E)+(E-Ze),xt=Dt+gt,E=xt-Dt,Bt=Dt-(xt-E)+(gt-E),gt=Bt-ae,E=Bt-gt,at[1]=Bt-(gt+E)+(E-ae),Ie=xt+gt,E=Ie-xt,at[2]=xt-(Ie-E)+(gt-E),at[3]=Ie;let ks=k(4,ot,4,at,rt);Dt=$e*dt,H=M*$e,B=H-(H-$e),ht=$e-B,H=M*dt,ut=H-(H-dt),nt=dt-ut,se=ht*nt-(Dt-B*ut-ht*ut-B*nt),ae=tn*X,H=M*tn,B=H-(H-tn),ht=tn-B,H=M*X,ut=H-(H-X),nt=X-ut,Ze=ht*nt-(ae-B*ut-ht*ut-B*nt),gt=se-Ze,E=se-gt,at[0]=se-(gt+E)+(E-Ze),xt=Dt+gt,E=xt-Dt,Bt=Dt-(xt-E)+(gt-E),gt=Bt-ae,E=Bt-gt,at[1]=Bt-(gt+E)+(E-ae),Ie=xt+gt,E=Ie-xt,at[2]=xt-(Ie-E)+(gt-E),at[3]=Ie;let Lr=k(ks,rt,4,at,mt);Dt=U*dt,H=M*U,B=H-(H-U),ht=U-B,H=M*dt,ut=H-(H-dt),nt=dt-ut,se=ht*nt-(Dt-B*ut-ht*ut-B*nt),ae=Y*X,H=M*Y,B=H-(H-Y),ht=Y-B,H=M*X,ut=H-(H-X),nt=X-ut,Ze=ht*nt-(ae-B*ut-ht*ut-B*nt),gt=se-Ze,E=se-gt,at[0]=se-(gt+E)+(E-Ze),xt=Dt+gt,E=xt-Dt,Bt=Dt-(xt-E)+(gt-E),gt=Bt-ae,E=Bt-gt,at[1]=Bt-(gt+E)+(E-ae),Ie=xt+gt,E=Ie-xt,at[2]=xt-(Ie-E)+(gt-E),at[3]=Ie;let Dr=k(Lr,mt,4,at,it);return it[Dr-1]}function At(L,d,m,S,T,A){let O=(d-A)*(m-T),U=(L-T)*(S-A),Y=O-U,X=Math.abs(O+U);return Math.abs(Y)>=tt*X?Y:-pt(L,d,m,S,T,A,X)}let Tt=(L,d)=>L.x*d.y-L.y*d.x,jt=(L,d)=>L.x*d.x+L.y*d.y,qt=(L,d,m)=>{let S=At(L.x,L.y,d.x,d.y,m.x,m.y);return S>0?-1:S<0?1:0},$t=L=>Math.sqrt(jt(L,L)),lt=(L,d,m)=>{let S={x:d.x-L.x,y:d.y-L.y},T={x:m.x-L.x,y:m.y-L.y};return Tt(T,S)/$t(T)/$t(S)},ft=(L,d,m)=>{let S={x:d.x-L.x,y:d.y-L.y},T={x:m.x-L.x,y:m.y-L.y};return jt(T,S)/$t(T)/$t(S)},bt=(L,d,m)=>d.y===0?null:{x:L.x+d.x/d.y*(m-L.y),y:m},Ut=(L,d,m)=>d.x===0?null:{x:m,y:L.y+d.y/d.x*(m-L.x)},Mt=(L,d,m,S)=>{if(d.x===0)return Ut(m,S,L.x);if(S.x===0)return Ut(L,d,m.x);if(d.y===0)return bt(m,S,L.y);if(S.y===0)return bt(L,d,m.y);let T=Tt(d,S);if(T==0)return null;let A={x:m.x-L.x,y:m.y-L.y},O=Tt(A,d)/T,U=Tt(A,S)/T,Y=L.x+U*d.x,X=m.x+O*S.x,dt=L.y+U*d.y,E=m.y+O*S.y,H=(Y+X)/2,B=(dt+E)/2;return{x:H,y:B}};class Lt{static compare(d,m){let S=Lt.comparePoints(d.point,m.point);return S!==0?S:(d.point!==m.point&&d.link(m),d.isLeft!==m.isLeft?d.isLeft?1:-1:Ft.compare(d.segment,m.segment))}static comparePoints(d,m){return d.x<m.x?-1:d.x>m.x?1:d.y<m.y?-1:d.y>m.y?1:0}constructor(d,m){d.events===void 0?d.events=[this]:d.events.push(this),this.point=d,this.isLeft=m}link(d){if(d.point===this.point)throw new Error("Tried to link already linked events");let m=d.point.events;for(let S=0,T=m.length;S<T;S++){let A=m[S];this.point.events.push(A),A.point=this.point}this.checkForConsuming()}checkForConsuming(){let d=this.point.events.length;for(let m=0;m<d;m++){let S=this.point.events[m];if(S.segment.consumedBy===void 0)for(let T=m+1;T<d;T++){let A=this.point.events[T];A.consumedBy===void 0&&S.otherSE.point.events===A.otherSE.point.events&&S.segment.consume(A.segment)}}}getAvailableLinkedEvents(){let d=[];for(let m=0,S=this.point.events.length;m<S;m++){let T=this.point.events[m];T!==this&&!T.segment.ringOut&&T.segment.isInResult()&&d.push(T)}return d}getLeftmostComparator(d){let m=new Map,S=T=>{let A=T.otherSE;m.set(T,{sine:lt(this.point,d.point,A.point),cosine:ft(this.point,d.point,A.point)})};return(T,A)=>{m.has(T)||S(T),m.has(A)||S(A);let{sine:O,cosine:U}=m.get(T),{sine:Y,cosine:X}=m.get(A);return O>=0&&Y>=0?U<X?1:U>X?-1:0:O<0&&Y<0?U<X?-1:U>X?1:0:Y<O?-1:Y>O?1:0}}}let _e=0;class Ft{static compare(d,m){let S=d.leftSE.point.x,T=m.leftSE.point.x,A=d.rightSE.point.x,O=m.rightSE.point.x;if(O<S)return 1;if(A<T)return-1;let U=d.leftSE.point.y,Y=m.leftSE.point.y,X=d.rightSE.point.y,dt=m.rightSE.point.y;if(S<T){if(Y<U&&Y<X)return 1;if(Y>U&&Y>X)return-1;let E=d.comparePoint(m.leftSE.point);if(E<0)return 1;if(E>0)return-1;let H=m.comparePoint(d.rightSE.point);return H!==0?H:-1}if(S>T){if(U<Y&&U<dt)return-1;if(U>Y&&U>dt)return 1;let E=m.comparePoint(d.leftSE.point);if(E!==0)return E;let H=d.comparePoint(m.rightSE.point);return H<0?1:H>0?-1:1}if(U<Y)return-1;if(U>Y)return 1;if(A<O){let E=m.comparePoint(d.rightSE.point);if(E!==0)return E}if(A>O){let E=d.comparePoint(m.rightSE.point);if(E<0)return 1;if(E>0)return-1}if(A!==O){let E=X-U,H=A-S,B=dt-Y,ht=O-T;if(E>H&&B<ht)return 1;if(E<H&&B>ht)return-1}return A>O?1:A<O||X<dt?-1:X>dt?1:d.id<m.id?-1:d.id>m.id?1:0}constructor(d,m,S,T){this.id=++_e,this.leftSE=d,d.segment=this,d.otherSE=m,this.rightSE=m,m.segment=this,m.otherSE=d,this.rings=S,this.windings=T}static fromRing(d,m,S){let T,A,O,U=Lt.comparePoints(d,m);if(U<0)T=d,A=m,O=1;else if(U>0)T=m,A=d,O=-1;else throw new Error(`Tried to create degenerate segment at [${d.x}, ${d.y}]`);let Y=new Lt(T,!0),X=new Lt(A,!1);return new Ft(Y,X,[S],[O])}replaceRightSE(d){this.rightSE=d,this.rightSE.segment=this,this.rightSE.otherSE=this.leftSE,this.leftSE.otherSE=this.rightSE}bbox(){let d=this.leftSE.point.y,m=this.rightSE.point.y;return{ll:{x:this.leftSE.point.x,y:d<m?d:m},ur:{x:this.rightSE.point.x,y:d>m?d:m}}}vector(){return{x:this.rightSE.point.x-this.leftSE.point.x,y:this.rightSE.point.y-this.leftSE.point.y}}isAnEndpoint(d){return d.x===this.leftSE.point.x&&d.y===this.leftSE.point.y||d.x===this.rightSE.point.x&&d.y===this.rightSE.point.y}comparePoint(d){if(this.isAnEndpoint(d))return 0;let m=this.leftSE.point,S=this.rightSE.point,T=this.vector();if(m.x===S.x)return d.x===m.x?0:d.x<m.x?1:-1;let A=(d.y-m.y)/T.y,O=m.x+A*T.x;if(d.x===O)return 0;let U=(d.x-m.x)/T.x,Y=m.y+U*T.y;return d.y===Y?0:d.y<Y?-1:1}getIntersection(d){let m=this.bbox(),S=d.bbox(),T=x(m,S);if(T===null)return null;let A=this.leftSE.point,O=this.rightSE.point,U=d.leftSE.point,Y=d.rightSE.point,X=y(m,U)&&this.comparePoint(U)===0,dt=y(S,A)&&d.comparePoint(A)===0,E=y(m,Y)&&this.comparePoint(Y)===0,H=y(S,O)&&d.comparePoint(O)===0;if(dt&&X)return H&&!E?O:!H&&E?Y:null;if(dt)return E&&A.x===Y.x&&A.y===Y.y?null:A;if(X)return H&&O.x===U.x&&O.y===U.y?null:U;if(H&&E)return null;if(H)return O;if(E)return Y;let B=Mt(A,this.vector(),U,d.vector());return B===null||!y(T,B)?null:R.round(B.x,B.y)}split(d){let m=[],S=d.events!==void 0,T=new Lt(d,!0),A=new Lt(d,!1),O=this.rightSE;this.replaceRightSE(A),m.push(A),m.push(T);let U=new Ft(T,O,this.rings.slice(),this.windings.slice());return Lt.comparePoints(U.leftSE.point,U.rightSE.point)>0&&U.swapEvents(),Lt.comparePoints(this.leftSE.point,this.rightSE.point)>0&&this.swapEvents(),S&&(T.checkForConsuming(),A.checkForConsuming()),m}swapEvents(){let d=this.rightSE;this.rightSE=this.leftSE,this.leftSE=d,this.leftSE.isLeft=!0,this.rightSE.isLeft=!1;for(let m=0,S=this.windings.length;m<S;m++)this.windings[m]*=-1}consume(d){let m=this,S=d;for(;m.consumedBy;)m=m.consumedBy;for(;S.consumedBy;)S=S.consumedBy;let T=Ft.compare(m,S);if(T!==0){if(T>0){let A=m;m=S,S=A}if(m.prev===S){let A=m;m=S,S=A}for(let A=0,O=S.rings.length;A<O;A++){let U=S.rings[A],Y=S.windings[A],X=m.rings.indexOf(U);X===-1?(m.rings.push(U),m.windings.push(Y)):m.windings[X]+=Y}S.rings=null,S.windings=null,S.consumedBy=m,S.leftSE.consumedBy=m.leftSE,S.rightSE.consumedBy=m.rightSE}}prevInResult(){return this._prevInResult!==void 0?this._prevInResult:(this.prev?this.prev.isInResult()?this._prevInResult=this.prev:this._prevInResult=this.prev.prevInResult():this._prevInResult=null,this._prevInResult)}beforeState(){if(this._beforeState!==void 0)return this._beforeState;if(!this.prev)this._beforeState={rings:[],windings:[],multiPolys:[]};else{let d=this.prev.consumedBy||this.prev;this._beforeState=d.afterState()}return this._beforeState}afterState(){if(this._afterState!==void 0)return this._afterState;let d=this.beforeState();this._afterState={rings:d.rings.slice(0),windings:d.windings.slice(0),multiPolys:[]};let m=this._afterState.rings,S=this._afterState.windings,T=this._afterState.multiPolys;for(let U=0,Y=this.rings.length;U<Y;U++){let X=this.rings[U],dt=this.windings[U],E=m.indexOf(X);E===-1?(m.push(X),S.push(dt)):S[E]+=dt}let A=[],O=[];for(let U=0,Y=m.length;U<Y;U++){if(S[U]===0)continue;let X=m[U],dt=X.poly;if(O.indexOf(dt)===-1)if(X.isExterior)A.push(dt);else{O.indexOf(dt)===-1&&O.push(dt);let E=A.indexOf(X.poly);E!==-1&&A.splice(E,1)}}for(let U=0,Y=A.length;U<Y;U++){let X=A[U].multiPoly;T.indexOf(X)===-1&&T.push(X)}return this._afterState}isInResult(){if(this.consumedBy)return!1;if(this._isInResult!==void 0)return this._isInResult;let d=this.beforeState().multiPolys,m=this.afterState().multiPolys;switch(Vt.type){case"union":{let S=d.length===0,T=m.length===0;this._isInResult=S!==T;break}case"intersection":{let S,T;d.length<m.length?(S=d.length,T=m.length):(S=m.length,T=d.length),this._isInResult=T===Vt.numMultiPolys&&S<T;break}case"xor":{let S=Math.abs(d.length-m.length);this._isInResult=S%2===1;break}case"difference":{let S=T=>T.length===1&&T[0].isSubject;this._isInResult=S(d)!==S(m);break}default:throw new Error(`Unrecognized operation type found ${Vt.type}`)}return this._isInResult}}class Kt{constructor(d,m,S){if(!Array.isArray(d)||d.length===0)throw new Error("Input geometry is not a valid Polygon or MultiPolygon");if(this.poly=m,this.isExterior=S,this.segments=[],typeof d[0][0]!="number"||typeof d[0][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let T=R.round(d[0][0],d[0][1]);this.bbox={ll:{x:T.x,y:T.y},ur:{x:T.x,y:T.y}};let A=T;for(let O=1,U=d.length;O<U;O++){if(typeof d[O][0]!="number"||typeof d[O][1]!="number")throw new Error("Input geometry is not a valid Polygon or MultiPolygon");let Y=R.round(d[O][0],d[O][1]);Y.x===A.x&&Y.y===A.y||(this.segments.push(Ft.fromRing(A,Y,this)),Y.x<this.bbox.ll.x&&(this.bbox.ll.x=Y.x),Y.y<this.bbox.ll.y&&(this.bbox.ll.y=Y.y),Y.x>this.bbox.ur.x&&(this.bbox.ur.x=Y.x),Y.y>this.bbox.ur.y&&(this.bbox.ur.y=Y.y),A=Y)}(T.x!==A.x||T.y!==A.y)&&this.segments.push(Ft.fromRing(A,T,this))}getSweepEvents(){let d=[];for(let m=0,S=this.segments.length;m<S;m++){let T=this.segments[m];d.push(T.leftSE),d.push(T.rightSE)}return d}}class ie{constructor(d,m){if(!Array.isArray(d))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");this.exteriorRing=new Kt(d[0],this,!0),this.bbox={ll:{x:this.exteriorRing.bbox.ll.x,y:this.exteriorRing.bbox.ll.y},ur:{x:this.exteriorRing.bbox.ur.x,y:this.exteriorRing.bbox.ur.y}},this.interiorRings=[];for(let S=1,T=d.length;S<T;S++){let A=new Kt(d[S],this,!1);A.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=A.bbox.ll.x),A.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=A.bbox.ll.y),A.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=A.bbox.ur.x),A.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=A.bbox.ur.y),this.interiorRings.push(A)}this.multiPoly=m}getSweepEvents(){let d=this.exteriorRing.getSweepEvents();for(let m=0,S=this.interiorRings.length;m<S;m++){let T=this.interiorRings[m].getSweepEvents();for(let A=0,O=T.length;A<O;A++)d.push(T[A])}return d}}class Wt{constructor(d,m){if(!Array.isArray(d))throw new Error("Input geometry is not a valid Polygon or MultiPolygon");try{typeof d[0][0][0]=="number"&&(d=[d])}catch{}this.polys=[],this.bbox={ll:{x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY},ur:{x:Number.NEGATIVE_INFINITY,y:Number.NEGATIVE_INFINITY}};for(let S=0,T=d.length;S<T;S++){let A=new ie(d[S],this);A.bbox.ll.x<this.bbox.ll.x&&(this.bbox.ll.x=A.bbox.ll.x),A.bbox.ll.y<this.bbox.ll.y&&(this.bbox.ll.y=A.bbox.ll.y),A.bbox.ur.x>this.bbox.ur.x&&(this.bbox.ur.x=A.bbox.ur.x),A.bbox.ur.y>this.bbox.ur.y&&(this.bbox.ur.y=A.bbox.ur.y),this.polys.push(A)}this.isSubject=m}getSweepEvents(){let d=[];for(let m=0,S=this.polys.length;m<S;m++){let T=this.polys[m].getSweepEvents();for(let A=0,O=T.length;A<O;A++)d.push(T[A])}return d}}class ne{static factory(d){let m=[];for(let S=0,T=d.length;S<T;S++){let A=d[S];if(!A.isInResult()||A.ringOut)continue;let O=null,U=A.leftSE,Y=A.rightSE,X=[U],dt=U.point,E=[];for(;O=U,U=Y,X.push(U),U.point!==dt;)for(;;){let H=U.getAvailableLinkedEvents();if(H.length===0){let ut=X[0].point,nt=X[X.length-1].point;throw new Error(`Unable to complete output ring starting at [${ut.x}, ${ut.y}]. Last matching segment found ends at [${nt.x}, ${nt.y}].`)}if(H.length===1){Y=H[0].otherSE;break}let B=null;for(let ut=0,nt=E.length;ut<nt;ut++)if(E[ut].point===U.point){B=ut;break}if(B!==null){let ut=E.splice(B)[0],nt=X.splice(ut.index);nt.unshift(nt[0].otherSE),m.push(new ne(nt.reverse()));continue}E.push({index:X.length,point:U.point});let ht=U.getLeftmostComparator(O);Y=H.sort(ht)[0].otherSE;break}m.push(new ne(X))}return m}constructor(d){this.events=d;for(let m=0,S=d.length;m<S;m++)d[m].segment.ringOut=this;this.poly=null}getGeom(){let d=this.events[0].point,m=[d];for(let X=1,dt=this.events.length-1;X<dt;X++){let E=this.events[X].point,H=this.events[X+1].point;qt(E,d,H)!==0&&(m.push(E),d=E)}if(m.length===1)return null;let S=m[0],T=m[1];qt(S,d,T)===0&&m.shift(),m.push(m[0]);let A=this.isExteriorRing()?1:-1,O=this.isExteriorRing()?0:m.length-1,U=this.isExteriorRing()?m.length:-1,Y=[];for(let X=O;X!=U;X+=A)Y.push([m[X].x,m[X].y]);return Y}isExteriorRing(){if(this._isExteriorRing===void 0){let d=this.enclosingRing();this._isExteriorRing=d?!d.isExteriorRing():!0}return this._isExteriorRing}enclosingRing(){return this._enclosingRing===void 0&&(this._enclosingRing=this._calcEnclosingRing()),this._enclosingRing}_calcEnclosingRing(){let d=this.events[0];for(let T=1,A=this.events.length;T<A;T++){let O=this.events[T];Lt.compare(d,O)>0&&(d=O)}let m=d.segment.prevInResult(),S=m?m.prevInResult():null;for(;;){if(!m)return null;if(!S)return m.ringOut;if(S.ringOut!==m.ringOut)return S.ringOut.enclosingRing()!==m.ringOut?m.ringOut:m.ringOut.enclosingRing();m=S.prevInResult(),S=m?m.prevInResult():null}}}class ye{constructor(d){this.exteriorRing=d,d.poly=this,this.interiorRings=[]}addInterior(d){this.interiorRings.push(d),d.poly=this}getGeom(){let d=[this.exteriorRing.getGeom()];if(d[0]===null)return null;for(let m=0,S=this.interiorRings.length;m<S;m++){let T=this.interiorRings[m].getGeom();T!==null&&d.push(T)}return d}}class Oe{constructor(d){this.rings=d,this.polys=this._composePolys(d)}getGeom(){let d=[];for(let m=0,S=this.polys.length;m<S;m++){let T=this.polys[m].getGeom();T!==null&&d.push(T)}return d}_composePolys(d){let m=[];for(let S=0,T=d.length;S<T;S++){let A=d[S];if(!A.poly)if(A.isExteriorRing())m.push(new ye(A));else{let O=A.enclosingRing();O.poly||m.push(new ye(O)),O.poly.addInterior(A)}}return m}}class he{constructor(d){let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ft.compare;this.queue=d,this.tree=new l(m),this.segments=[]}process(d){let m=d.segment,S=[];if(d.consumedBy)return d.isLeft?this.queue.remove(d.otherSE):this.tree.remove(m),S;let T=d.isLeft?this.tree.add(m):this.tree.find(m);if(!T)throw new Error(`Unable to find segment #${m.id} [${m.leftSE.point.x}, ${m.leftSE.point.y}] -> [${m.rightSE.point.x}, ${m.rightSE.point.y}] in SweepLine tree.`);let A=T,O=T,U,Y;for(;U===void 0;)A=this.tree.prev(A),A===null?U=null:A.key.consumedBy===void 0&&(U=A.key);for(;Y===void 0;)O=this.tree.next(O),O===null?Y=null:O.key.consumedBy===void 0&&(Y=O.key);if(d.isLeft){let X=null;if(U){let E=U.getIntersection(m);if(E!==null&&(m.isAnEndpoint(E)||(X=E),!U.isAnEndpoint(E))){let H=this._splitSafely(U,E);for(let B=0,ht=H.length;B<ht;B++)S.push(H[B])}}let dt=null;if(Y){let E=Y.getIntersection(m);if(E!==null&&(m.isAnEndpoint(E)||(dt=E),!Y.isAnEndpoint(E))){let H=this._splitSafely(Y,E);for(let B=0,ht=H.length;B<ht;B++)S.push(H[B])}}if(X!==null||dt!==null){let E=null;X===null?E=dt:dt===null?E=X:E=Lt.comparePoints(X,dt)<=0?X:dt,this.queue.remove(m.rightSE),S.push(m.rightSE);let H=m.split(E);for(let B=0,ht=H.length;B<ht;B++)S.push(H[B])}S.length>0?(this.tree.remove(m),S.push(d)):(this.segments.push(m),m.prev=U)}else{if(U&&Y){let X=U.getIntersection(Y);if(X!==null){if(!U.isAnEndpoint(X)){let dt=this._splitSafely(U,X);for(let E=0,H=dt.length;E<H;E++)S.push(dt[E])}if(!Y.isAnEndpoint(X)){let dt=this._splitSafely(Y,X);for(let E=0,H=dt.length;E<H;E++)S.push(dt[E])}}}this.tree.remove(m)}return S}_splitSafely(d,m){this.tree.remove(d);let S=d.rightSE;this.queue.remove(S);let T=d.split(m);return T.push(S),d.consumedBy===void 0&&this.tree.add(d),T}}let ge=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_QUEUE_SIZE||1e6,V=typeof process<"u"&&process.env.POLYGON_CLIPPING_MAX_SWEEPLINE_SEGMENTS||1e6;class Re{run(d,m,S){Vt.type=d,R.reset();let T=[new Wt(m,!0)];for(let E=0,H=S.length;E<H;E++)T.push(new Wt(S[E],!1));if(Vt.numMultiPolys=T.length,Vt.type==="difference"){let E=T[0],H=1;for(;H<T.length;)x(T[H].bbox,E.bbox)!==null?H++:T.splice(H,1)}if(Vt.type==="intersection")for(let E=0,H=T.length;E<H;E++){let B=T[E];for(let ht=E+1,ut=T.length;ht<ut;ht++)if(x(B.bbox,T[ht].bbox)===null)return[]}let A=new l(Lt.compare);for(let E=0,H=T.length;E<H;E++){let B=T[E].getSweepEvents();for(let ht=0,ut=B.length;ht<ut;ht++)if(A.insert(B[ht]),A.size>ge)throw new Error("Infinite loop when putting segment endpoints in a priority queue (queue size too big).")}let O=new he(A),U=A.size,Y=A.pop();for(;Y;){let E=Y.key;if(A.size===U){let B=E.segment;throw new Error(`Unable to pop() ${E.isLeft?"left":"right"} SweepEvent [${E.point.x}, ${E.point.y}] from segment #${B.id} [${B.leftSE.point.x}, ${B.leftSE.point.y}] -> [${B.rightSE.point.x}, ${B.rightSE.point.y}] from queue.`)}if(A.size>ge)throw new Error("Infinite loop when passing sweep line over endpoints (queue size too big).");if(O.segments.length>V)throw new Error("Infinite loop when passing sweep line over endpoints (too many sweep line segments).");let H=O.process(E);for(let B=0,ht=H.length;B<ht;B++){let ut=H[B];ut.consumedBy===void 0&&A.insert(ut)}U=A.size,Y=A.pop()}R.reset();let X=ne.factory(O.segments);return new Oe(X).getGeom()}}let Vt=new Re;var st={union:function(L){for(var d=arguments.length,m=new Array(d>1?d-1:0),S=1;S<d;S++)m[S-1]=arguments[S];return Vt.run("union",L,m)},intersection:function(L){for(var d=arguments.length,m=new Array(d>1?d-1:0),S=1;S<d;S++)m[S-1]=arguments[S];return Vt.run("intersection",L,m)},xor:function(L){for(var d=arguments.length,m=new Array(d>1?d-1:0),S=1;S<d;S++)m[S-1]=arguments[S];return Vt.run("xor",L,m)},difference:function(L){for(var d=arguments.length,m=new Array(d>1?d-1:0),S=1;S<d;S++)m[S-1]=arguments[S];return Vt.run("difference",L,m)}};return st}))});function Fr(i,t){i.activeBook=t;for(let e of i.books)e.pages||=[],e.id===t?(i.pieces.push(...e.pages),e.pages=[]):(e.pages.push(...i.pieces.filter(n=>n.book===e.id)),i.pieces=i.pieces.filter(n=>n.book!==e.id))}var Sh=0,El=1,Mh=2;var Fi=1,bh=2,ws=3,Fn=0,Fe=1,fn=2,On=0,Ts=1,wl=2,Tl=3,Al=4,Eh=5;var Oi=100,wh=101,Th=102,Ah=103,Ch=104,Rh=200,Ih=201,Ph=202,Lh=203,Cl=204,Rl=205,Dh=206,Nh=207,Uh=208,Fh=209,Oh=210,Bh=211,zh=212,kh=213,Vh=214,oo=0,ao=1,lo=2,us=3,co=4,ho=5,uo=6,fo=7,Il=0,Gh=1,Hh=2,yn=0,Pl=1,Ll=2,Dl=3,cr=4,Nl=5,Ul=6,Fl=7;var Ol=300,gi=301,Bi=302,zo=303,ko=304,hr=306,fs=1e3,Rn=1001,po=1002,De=1003,Wh=1004;var ur=1005;var Ue=1006,Vo=1007;var xi=1008;var Qe=1009,Bl=1010,zl=1011,As=1012,Go=1013,vn=1014,Sn=1015,Mn=1016,Ho=1017,Wo=1018,Cs=1020,kl=35902,Vl=35899,Gl=1021,Hl=1022,dn=1023,Pn=1026,_i=1027,Wl=1028,Xo=1029,yi=1030,qo=1031;var Yo=1033,fr=33776,dr=33777,pr=33778,mr=33779,Zo=35840,$o=35841,Jo=35842,Ko=35843,jo=36196,Qo=37492,ta=37496,ea=37488,na=37489,gr=37490,ia=37491,sa=37808,ra=37809,oa=37810,aa=37811,la=37812,ca=37813,ha=37814,ua=37815,fa=37816,da=37817,pa=37818,ma=37819,ga=37820,xa=37821,_a=36492,ya=36494,va=36495,Sa=36283,Ma=36284,xr=36285,ba=36286;var Zs=2300,mo=2301,so=2302,gl=2303,xl=2400,_l=2401,yl=2402;var Xh=3200;var Ea=0,qh=1,Qn="",Ee="srgb",$s="srgb-linear",Js="linear",ee="srgb";var ro=7680;var Yh=519,Zh=512,$h=513,Jh=514,wa=515,Kh=516,jh=517,Ta=518,Qh=519,tu=35044;var Xl="300 es",_n=2e3,ds=2001;function Cf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Rf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function eu(){let i=Ks("canvas");return i.style.display="block",i}var Yc={},ps=null;function ql(...i){let t="THREE."+i.shift();ps?ps("log",t,...i):console.log(t,...i)}function nu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pt(...i){i=nu(i);let t="THREE."+i.shift();if(ps)ps("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Nt(...i){i=nu(i);let t="THREE."+i.shift();if(ps)ps("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Pi(...i){let t=i.join(" ");t in Yc||(Yc[t]=!0,Pt(...i))}function iu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var su={[oo]:ao,[lo]:uo,[co]:fo,[us]:ho,[ao]:oo,[uo]:lo,[fo]:co,[ho]:us},Ln=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zc=1234567,qs=Math.PI/180,ms=180/Math.PI;function Rs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function Yl(i,t){return(i%t+t)%t}function If(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Pf(i,t,e){return i!==t?(e-i)/(t-i):0}function Ys(i,t,e){return(1-e)*i+e*t}function Lf(i,t,e,n){return Ys(i,t,1-Math.exp(-e*n))}function Df(i,t=1){return t-Math.abs(Yl(i,t*2)-t)}function Nf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Uf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ff(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Of(i,t){return i+Math.random()*(t-i)}function Bf(i){return i*(.5-Math.random())}function zf(i){i!==void 0&&(Zc=i);let t=Zc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kf(i){return i*qs}function Vf(i){return i*ms}function Gf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Hf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),f=o((t+n)/2),h=r((t-n)/2),u=o((t-n)/2),p=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*f,l*h,l*u,a*c);break;case"YZY":i.set(l*u,a*f,l*h,a*c);break;case"ZXZ":i.set(l*h,l*u,a*f,a*c);break;case"XZX":i.set(a*f,l*_,l*p,a*c);break;case"YXY":i.set(l*p,a*f,l*_,a*c);break;case"ZYZ":i.set(l*_,l*p,a*f,a*c);break;default:Pt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function cs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Is={DEG2RAD:qs,RAD2DEG:ms,generateUUID:Rs,clamp:Zt,euclideanModulo:Yl,mapLinear:If,inverseLerp:Pf,lerp:Ys,damp:Lf,pingpong:Df,smoothstep:Nf,smootherstep:Uf,randInt:Ff,randFloat:Of,randFloatSpread:Bf,seededRandom:zf,degToRad:kf,radToDeg:Vf,isPowerOfTwo:Gf,ceilPowerOfTwo:Hf,floorPowerOfTwo:Wf,setQuaternionFromProperEuler:Xf,normalize:Xe,denormalize:cs},Xt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],f=n[s+2],h=n[s+3],u=r[o+0],p=r[o+1],_=r[o+2],y=r[o+3];if(h!==y||l!==u||c!==p||f!==_){let x=l*u+c*p+f*_+h*y;x<0&&(u=-u,p=-p,_=-_,y=-y,x=-x);let g=1-a;if(x<.9995){let C=Math.acos(x),N=Math.sin(C);g=Math.sin(g*C)/N,a=Math.sin(a*C)/N,l=l*g+u*a,c=c*g+p*a,f=f*g+_*a,h=h*g+y*a}else{l=l*g+u*a,c=c*g+p*a,f=f*g+_*a,h=h*g+y*a;let C=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=C,c*=C,f*=C,h*=C}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],f=n[s+3],h=r[o],u=r[o+1],p=r[o+2],_=r[o+3];return t[e]=a*_+f*h+l*p-c*u,t[e+1]=l*_+f*u+c*h-a*p,t[e+2]=c*_+f*p+a*u-l*h,t[e+3]=f*_-a*h-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),f=a(s/2),h=a(r/2),u=l(n/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=u*f*h+c*p*_,this._y=c*p*h-u*f*_,this._z=c*f*_+u*p*h,this._w=c*f*h-u*p*_;break;case"YXZ":this._x=u*f*h+c*p*_,this._y=c*p*h-u*f*_,this._z=c*f*_-u*p*h,this._w=c*f*h+u*p*_;break;case"ZXY":this._x=u*f*h-c*p*_,this._y=c*p*h+u*f*_,this._z=c*f*_+u*p*h,this._w=c*f*h-u*p*_;break;case"ZYX":this._x=u*f*h-c*p*_,this._y=c*p*h+u*f*_,this._z=c*f*_-u*p*h,this._w=c*f*h+u*p*_;break;case"YZX":this._x=u*f*h+c*p*_,this._y=c*p*h+u*f*_,this._z=c*f*_-u*p*h,this._w=c*f*h-u*p*_;break;case"XZY":this._x=u*f*h-c*p*_,this._y=c*p*h-u*f*_,this._z=c*f*_+u*p*h,this._w=c*f*h+u*p*_;break;default:Pt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],f=e[6],h=e[10],u=n+a+h;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(f-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+f)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+o*a+s*c-r*l,this._y=s*f+o*l+r*a-n*c,this._z=r*f+o*c+n*l-s*a,this._w=o*f-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,e=Math.sin(e*c)/f,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($c.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($c.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),f=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*f,this.y=n+l*f+a*c-r*h,this.z=s+l*h+r*f-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Za.copy(this).projectOnVector(t),this.sub(Za)}reflect(t){return this.sub(Za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Za=new Z,$c=new Dn,Ot=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=r,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],f=n[4],h=n[7],u=n[2],p=n[5],_=n[8],y=s[0],x=s[3],g=s[6],C=s[1],N=s[4],w=s[7],I=s[2],R=s[5],F=s[8];return r[0]=o*y+a*C+l*I,r[3]=o*x+a*N+l*R,r[6]=o*g+a*w+l*F,r[1]=c*y+f*C+h*I,r[4]=c*x+f*N+h*R,r[7]=c*g+f*w+h*F,r[2]=u*y+p*C+_*I,r[5]=u*x+p*N+_*R,r[8]=u*g+p*w+_*F,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return e*o*f-e*a*c-n*r*f+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=f*o-a*c,u=a*l-f*r,p=c*r-o*l,_=e*h+n*u+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return t[0]=h*y,t[1]=(s*c-f*n)*y,t[2]=(a*n-s*o)*y,t[3]=u*y,t[4]=(f*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=p*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Pi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($a.makeScale(t,e)),this}rotate(t){return Pi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($a.makeRotation(-t)),this}translate(t,e){return Pi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},$a=new Ot,Jc=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kc=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qf(){let i={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ee&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ee&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qn?Js:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Pi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Pi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$s]:{primaries:t,whitePoint:n,transfer:Js,toXYZ:Jc,fromXYZ:Kc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:t,whitePoint:n,transfer:ee,toXYZ:Jc,fromXYZ:Kc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}}),i}var Jt=qf();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ji,go=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ji===void 0&&(Ji=Ks("canvas")),Ji.width=t.width,Ji.height=t.height;let s=Ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ks("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zn(e[n]/255)*255):e[n]=Zn(e[n]);return{data:e,width:t.width,height:t.height}}else return Pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Yf=0,gs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Rs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ja(s[o].image)):r.push(Ja(s[o]))}else r=Ja(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ja(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?go.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pt("Texture: Unable to serialize Texture."),{})}var Zf=0,Ka=new Z,qe=class i extends Ln{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Rn,s=Rn,r=Ue,o=xi,a=dn,l=Qe,c=i.DEFAULT_ANISOTROPY,f=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zf++}),this.uuid=Rs(),this.name="",this.source=new gs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ka).x}get height(){return this.source.getSize(Ka).y}get depth(){return this.source.getSize(Ka).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Pt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ol)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fs:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fs:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Ol;qe.DEFAULT_ANISOTROPY=1;var me=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],f=l[4],h=l[8],u=l[1],p=l[5],_=l[9],y=l[2],x=l[6],g=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-y)<.01&&Math.abs(_-x)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+y)<.1&&Math.abs(_+x)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let N=(c+1)/2,w=(p+1)/2,I=(g+1)/2,R=(f+u)/4,F=(h+y)/4,M=(_+x)/4;return N>w&&N>I?N<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(N),s=R/n,r=F/n):w>I?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=R/s,r=M/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=F/r,s=M/r),this.set(n,s,r,e),this}let C=Math.sqrt((x-_)*(x-_)+(h-y)*(h-y)+(u-f)*(u-f));return Math.abs(C)<.001&&(C=1),this.x=(x-_)/C,this.y=(h-y)/C,this.z=(u-f)/C,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},xo=class extends Ln{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new qe(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ue,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new gs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},je=class extends xo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},js=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _o=class extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var de=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,l,c,f,h,u,p,_,y,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,f,h,u,p,_,y,x)}set(t,e,n,s,r,o,a,l,c,f,h,u,p,_,y,x){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=f,g[10]=h,g[14]=u,g[3]=p,g[7]=_,g[11]=y,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ki.setFromMatrixColumn(t,0).length(),r=1/Ki.setFromMatrixColumn(t,1).length(),o=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let u=o*f,p=o*h,_=a*f,y=a*h;e[0]=l*f,e[4]=-l*h,e[8]=c,e[1]=p+_*c,e[5]=u-y*c,e[9]=-a*l,e[2]=y-u*c,e[6]=_+p*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*f,p=l*h,_=c*f,y=c*h;e[0]=u+y*a,e[4]=_*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*f,e[9]=-a,e[2]=p*a-_,e[6]=y+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*f,p=l*h,_=c*f,y=c*h;e[0]=u-y*a,e[4]=-o*h,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*f,e[9]=y-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*f,p=o*h,_=a*f,y=a*h;e[0]=l*f,e[4]=_*c-p,e[8]=u*c+y,e[1]=l*h,e[5]=y*c+u,e[9]=p*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,p=o*c,_=a*l,y=a*c;e[0]=l*f,e[4]=y-u*h,e[8]=_*h+p,e[1]=h,e[5]=o*f,e[9]=-a*f,e[2]=-c*f,e[6]=p*h+_,e[10]=u-y*h}else if(t.order==="XZY"){let u=o*l,p=o*c,_=a*l,y=a*c;e[0]=l*f,e[4]=-h,e[8]=c*f,e[1]=u*h+y,e[5]=o*f,e[9]=p*h-_,e[2]=_*h-p,e[6]=a*f,e[10]=y*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($f,t,Jf)}lookAt(t,e,n){let s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),ri.crossVectors(n,nn),ri.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),ri.crossVectors(n,nn)),ri.normalize(),Or.crossVectors(nn,ri),s[0]=ri.x,s[4]=Or.x,s[8]=nn.x,s[1]=ri.y,s[5]=Or.y,s[9]=nn.y,s[2]=ri.z,s[6]=Or.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],f=n[1],h=n[5],u=n[9],p=n[13],_=n[2],y=n[6],x=n[10],g=n[14],C=n[3],N=n[7],w=n[11],I=n[15],R=s[0],F=s[4],M=s[8],D=s[12],k=s[1],W=s[5],$=s[9],tt=s[13],G=s[2],Q=s[6],ot=s[10],rt=s[14],mt=s[3],it=s[7],at=s[11],pt=s[15];return r[0]=o*R+a*k+l*G+c*mt,r[4]=o*F+a*W+l*Q+c*it,r[8]=o*M+a*$+l*ot+c*at,r[12]=o*D+a*tt+l*rt+c*pt,r[1]=f*R+h*k+u*G+p*mt,r[5]=f*F+h*W+u*Q+p*it,r[9]=f*M+h*$+u*ot+p*at,r[13]=f*D+h*tt+u*rt+p*pt,r[2]=_*R+y*k+x*G+g*mt,r[6]=_*F+y*W+x*Q+g*it,r[10]=_*M+y*$+x*ot+g*at,r[14]=_*D+y*tt+x*rt+g*pt,r[3]=C*R+N*k+w*G+I*mt,r[7]=C*F+N*W+w*Q+I*it,r[11]=C*M+N*$+w*ot+I*at,r[15]=C*D+N*tt+w*rt+I*pt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],f=t[2],h=t[6],u=t[10],p=t[14],_=t[3],y=t[7],x=t[11],g=t[15],C=l*p-c*u,N=a*p-c*h,w=a*u-l*h,I=o*p-c*f,R=o*u-l*f,F=o*h-a*f;return e*(y*C-x*N+g*w)-n*(_*C-x*I+g*R)+s*(_*N-y*I+g*F)-r*(_*w-y*R+x*F)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],f=t[10];return e*(o*f-a*c)-n*(r*f-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=t[9],u=t[10],p=t[11],_=t[12],y=t[13],x=t[14],g=t[15],C=e*a-n*o,N=e*l-s*o,w=e*c-r*o,I=n*l-s*a,R=n*c-r*a,F=s*c-r*l,M=f*y-h*_,D=f*x-u*_,k=f*g-p*_,W=h*x-u*y,$=h*g-p*y,tt=u*g-p*x,G=C*tt-N*$+w*W+I*k-R*D+F*M;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Q=1/G;return t[0]=(a*tt-l*$+c*W)*Q,t[1]=(s*$-n*tt-r*W)*Q,t[2]=(y*F-x*R+g*I)*Q,t[3]=(u*R-h*F-p*I)*Q,t[4]=(l*k-o*tt-c*D)*Q,t[5]=(e*tt-s*k+r*D)*Q,t[6]=(x*w-_*F-g*N)*Q,t[7]=(f*F-u*w+p*N)*Q,t[8]=(o*$-a*k+c*M)*Q,t[9]=(n*k-e*$-r*M)*Q,t[10]=(_*R-y*w+g*C)*Q,t[11]=(h*w-f*R-p*C)*Q,t[12]=(a*D-o*W-l*M)*Q,t[13]=(e*W-n*D+s*M)*Q,t[14]=(y*N-_*I-x*C)*Q,t[15]=(f*I-h*N+u*C)*Q,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,f=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,f*a+n,f*l-s*o,0,c*l-s*a,f*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,f=o+o,h=a+a,u=r*c,p=r*f,_=r*h,y=o*f,x=o*h,g=a*h,C=l*c,N=l*f,w=l*h,I=n.x,R=n.y,F=n.z;return s[0]=(1-(y+g))*I,s[1]=(p+w)*I,s[2]=(_-N)*I,s[3]=0,s[4]=(p-w)*R,s[5]=(1-(u+g))*R,s[6]=(x+C)*R,s[7]=0,s[8]=(_+N)*F,s[9]=(x-C)*F,s[10]=(1-(u+y))*F,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ki.set(s[0],s[1],s[2]).length(),a=Ki.set(s[4],s[5],s[6]).length(),l=Ki.set(s[8],s[9],s[10]).length();r<0&&(o=-o),mn.copy(this);let c=1/o,f=1/a,h=1/l;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=f,mn.elements[5]*=f,mn.elements[6]*=f,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,e.setFromRotationMatrix(mn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=_n,l=!1){let c=this.elements,f=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s),_,y;if(l)_=r/(o-r),y=o*r/(o-r);else if(a===_n)_=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===ds)_=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=_n,l=!1){let c=this.elements,f=2/(e-t),h=2/(n-s),u=-(e+t)/(e-t),p=-(n+s)/(n-s),_,y;if(l)_=1/(o-r),y=o/(o-r);else if(a===_n)_=-2/(o-r),y=-(o+r)/(o-r);else if(a===ds)_=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ki=new Z,mn=new de,$f=new Z(0,0,0),Jf=new Z(1,1,1),ri=new Z,Or=new Z,nn=new Z,jc=new de,Qc=new Dn,$n=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],f=s[9],h=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return jc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qc.setFromEuler(this),this.setFromQuaternion(Qc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var xs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kf=0,th=new Z,ji=new Dn,Hn=new de,Br=new Z,Vs=new Z,jf=new Z,Qf=new Dn,eh=new Z(1,0,0),nh=new Z(0,1,0),ih=new Z(0,0,1),sh={type:"added"},td={type:"removed"},Qi={type:"childadded",child:null},ja={type:"childremoved",child:null},Te=class i extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new Z,e=new $n,n=new Dn,s=new Z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new Ot}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(eh,t)}rotateY(t){return this.rotateOnAxis(nh,t)}rotateZ(t){return this.rotateOnAxis(ih,t)}translateOnAxis(t,e){return th.copy(t).applyQuaternion(this.quaternion),this.position.add(th.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(eh,t)}translateY(t){return this.translateOnAxis(nh,t)}translateZ(t){return this.translateOnAxis(ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Br.copy(t):Br.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Vs,Br,this.up):Hn.lookAt(Br,Vs,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),ji.setFromRotationMatrix(Hn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Nt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sh),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(td),ja.child=t,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sh),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,t,jf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,Qf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),f=o(t.images),h=o(t.shapes),u=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let l=[];for(let c in a){let f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Te.DEFAULT_UP=new Z(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var In=class extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}},ed={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let x=e.getJointPose(y,n),g=this._getHandJoint(c,y);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}let f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ed)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new In;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},zr={h:0,s:0,l:0};function Qa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=Yl(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Qa(o,r,t+1/3),this.g=Qa(o,r,t),this.b=Qa(o,r,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ee){function n(r){r!==void 0&&parseFloat(r)<1&&Pt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Pt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Pt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){let n=ru[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Pt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=hs(t.r),this.g=hs(t.g),this.b=hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return Jt.workingToColorSpace(ke.copy(this),t),Math.round(Zt(ke.r*255,0,255))*65536+Math.round(Zt(ke.g*255,0,255))*256+Math.round(Zt(ke.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(ke.copy(this),e);let n=ke.r,s=ke.g,r=ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,f=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Ee){Jt.workingToColorSpace(ke.copy(this),t);let e=ke.r,n=ke.g,s=ke.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(zr);let n=Ys(oi.h,zr.h,e),s=Ys(oi.s,zr.s,e),r=Ys(oi.l,zr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new zt;zt.NAMES=ru;var ys=class extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},gn=new Z,Wn=new Z,tl=new Z,Xn=new Z,ts=new Z,es=new Z,rh=new Z,el=new Z,nl=new Z,il=new Z,sl=new me,rl=new me,ol=new me,hi=class i{constructor(t=new Z,e=new Z,n=new Z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),gn.subVectors(t,e),s.cross(gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){gn.subVectors(s,e),Wn.subVectors(n,e),tl.subVectors(t,e);let o=gn.dot(gn),a=gn.dot(Wn),l=gn.dot(tl),c=Wn.dot(Wn),f=Wn.dot(tl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let u=1/h,p=(c*l-a*f)*u,_=(o*f-a*l)*u;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return sl.setScalar(0),rl.setScalar(0),ol.setScalar(0),sl.fromBufferAttribute(t,e),rl.fromBufferAttribute(t,n),ol.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(sl,r.x),o.addScaledVector(rl,r.y),o.addScaledVector(ol,r.z),o}static isFrontFacing(t,e,n,s){return gn.subVectors(n,e),Wn.subVectors(t,e),gn.cross(Wn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),gn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ts.subVectors(s,n),es.subVectors(r,n),el.subVectors(t,n);let l=ts.dot(el),c=es.dot(el);if(l<=0&&c<=0)return e.copy(n);nl.subVectors(t,s);let f=ts.dot(nl),h=es.dot(nl);if(f>=0&&h<=f)return e.copy(s);let u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(n).addScaledVector(ts,o);il.subVectors(t,r);let p=ts.dot(il),_=es.dot(il);if(_>=0&&p<=_)return e.copy(r);let y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(es,a);let x=f*_-p*h;if(x<=0&&h-f>=0&&p-_>=0)return rh.subVectors(r,s),a=(h-f)/(h-f+(p-_)),e.copy(s).addScaledVector(rh,a);let g=1/(x+y+u);return o=y*g,a=u*g,e.copy(n).addScaledVector(ts,o).addScaledVector(es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Nn=class{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(t.matrixWorld),this.expandByPoint(xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(t.matrixWorld),this.union(kr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xn),xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),Vr.subVectors(this.max,Gs),ns.subVectors(t.a,Gs),is.subVectors(t.b,Gs),ss.subVectors(t.c,Gs),ai.subVectors(is,ns),li.subVectors(ss,is),Ai.subVectors(ns,ss);let e=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Ai.z,Ai.y,ai.z,0,-ai.x,li.z,0,-li.x,Ai.z,0,-Ai.x,-ai.y,ai.x,0,-li.y,li.x,0,-Ai.y,Ai.x,0];return!al(e,ns,is,ss,Vr)||(e=[1,0,0,0,1,0,0,0,1],!al(e,ns,is,ss,Vr))?!1:(Gr.crossVectors(ai,li),e=[Gr.x,Gr.y,Gr.z],al(e,ns,is,ss,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},qn=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],xn=new Z,kr=new Nn,ns=new Z,is=new Z,ss=new Z,ai=new Z,li=new Z,Ai=new Z,Gs=new Z,Vr=new Z,Gr=new Z,Ci=new Z;function al(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ci.fromArray(i,r);let a=s.x*Math.abs(Ci.x)+s.y*Math.abs(Ci.y)+s.z*Math.abs(Ci.z),l=t.dot(Ci),c=e.dot(Ci),f=n.dot(Ci);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var be=new Z,Hr=new Xt,nd=0,un=class extends Ln{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tu,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=cs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Qs=class extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var tr=class extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Le=class extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}},id=new Nn,Hs=new Z,ll=new Z,Li=class{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):id.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Hs.subVectors(t,this.center);let e=Hs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Hs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ll.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Hs.copy(t.center).add(ll)),this.expandByPoint(Hs.copy(t.center).sub(ll))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},sd=0,hn=new de,cl=new Te,rs=new Z,sn=new Nn,Ws=new Nn,Pe=new Z,Ye=class i extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cf(t)?tr:Qs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,n){return hn.makeTranslation(t,e,n),this.applyMatrix4(hn),this}scale(t,e,n){return hn.makeScale(t,e,n),this.applyMatrix4(hn),this}lookAt(t){return cl.lookAt(t),cl.updateMatrix(),this.applyMatrix4(cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Le(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(sn.min,Ws.min),sn.expandByPoint(Pe),Pe.addVectors(sn.max,Ws.max),sn.expandByPoint(Pe)):(sn.expandByPoint(Ws.min),sn.expandByPoint(Ws.max))}sn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Pe.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(t,c),Pe.add(rs)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new un(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let M=0;M<n.count;M++)a[M]=new Z,l[M]=new Z;let c=new Z,f=new Z,h=new Z,u=new Xt,p=new Xt,_=new Xt,y=new Z,x=new Z;function g(M,D,k){c.fromBufferAttribute(n,M),f.fromBufferAttribute(n,D),h.fromBufferAttribute(n,k),u.fromBufferAttribute(r,M),p.fromBufferAttribute(r,D),_.fromBufferAttribute(r,k),f.sub(c),h.sub(c),p.sub(u),_.sub(u);let W=1/(p.x*_.y-_.x*p.y);isFinite(W)&&(y.copy(f).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(W),x.copy(h).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(W),a[M].add(y),a[D].add(y),a[k].add(y),l[M].add(x),l[D].add(x),l[k].add(x))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let M=0,D=C.length;M<D;++M){let k=C[M],W=k.start,$=k.count;for(let tt=W,G=W+$;tt<G;tt+=3)g(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}let N=new Z,w=new Z,I=new Z,R=new Z;function F(M){I.fromBufferAttribute(s,M),R.copy(I);let D=a[M];N.copy(D),N.sub(I.multiplyScalar(I.dot(D))).normalize(),w.crossVectors(R,D);let W=w.dot(l[M])<0?-1:1;o.setXYZW(M,N.x,N.y,N.z,W)}for(let M=0,D=C.length;M<D;++M){let k=C[M],W=k.start,$=k.count;for(let tt=W,G=W+$;tt<G;tt+=3)F(t.getX(tt+0)),F(t.getX(tt+1)),F(t.getX(tt+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new Z,r=new Z,o=new Z,a=new Z,l=new Z,c=new Z,f=new Z,h=new Z;if(t)for(let u=0,p=t.count;u<p;u+=3){let _=t.getX(u+0),y=t.getX(u+1),x=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,x),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,x),a.add(f),l.add(f),c.add(f),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),f.subVectors(o,r),h.subVectors(s,r),f.cross(h),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){let c=a.array,f=a.itemSize,h=a.normalized,u=new c.constructor(l.length*f),p=0,_=0;for(let y=0,x=l.length;y<x;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*f;for(let g=0;g<f;g++)u[_++]=c[p++]}return new un(u,f,h)}if(this.index===null)return Pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let f=0,h=c.length;f<h;f++){let u=c[f],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){let p=c[h];f.push(p.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(e))}let r=t.morphAttributes;for(let c in r){let f=[],h=r[c];for(let u=0,p=h.length;u<p;u++)f.push(h[u].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,f=o.length;c<f;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var hl=new Z,rd=new Z,od=new Ot,rn=class{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=hl.subVectors(n,e).cross(rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(hl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||od.getNormalMatrix(t),s=this.coplanarPoint(hl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ad=0,Jn=class extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=Ts,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Rl,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Pt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Pt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new rn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Xt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Yn=new Z,ul=new Z,Wr=new Z,Xr=new Z,vs=class{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ul.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),Xr.copy(this.origin).sub(ul);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Wr),a=Xr.dot(this.direction),l=-Xr.dot(Wr),c=Xr.lengthSq(),f=Math.abs(1-o*o),h,u,p,_;if(f>0)if(h=o*l-a,u=o*a-l,_=r*f,h>=0)if(u>=-_)if(u<=_){let y=1/f;h*=y,u*=y,p=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u=-r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;else u<=-_?(h=Math.max(0,-(-o*r+a)),u=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c):u<=_?(h=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(h=Math.max(0,-(o*r+a)),u=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+u*(u+2*l)+c);else u=o>0?-r:r,h=Math.max(0,-(o*u+a)),p=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ul).addScaledVector(Wr,u),p}intersectSphere(t,e){if(t.radius<0)return null;Yn.subVectors(t.center,this.origin);let n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),f>=0?(r=(t.min.y-u.y)*f,o=(t.max.y-u.y)*f):(r=(t.max.y-u.y)*f,o=(t.min.y-u.y)*f),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,f=a.z,h=t.x-o.x,u=t.y-o.y,p=t.z-o.z,_=e.x-o.x,y=e.y-o.y,x=e.z-o.z,g=n.x-o.x,C=n.y-o.y,N=n.z-o.z,w=Math.abs(l),I=Math.abs(c),R=Math.abs(f),F,M,D,k,W,$,tt,G,Q,ot,rt,mt;if(w>=I&&w>=R?(D=l,$=h,Q=_,mt=g,l>=0?(F=c,M=f,k=u,W=p,tt=y,G=x,ot=C,rt=N):(F=f,M=c,k=p,W=u,tt=x,G=y,ot=N,rt=C)):I>=R?(D=c,$=u,Q=y,mt=C,c>=0?(F=f,M=l,k=p,W=h,tt=x,G=_,ot=N,rt=g):(F=l,M=f,k=h,W=p,tt=_,G=x,ot=g,rt=N)):(D=f,$=p,Q=x,mt=N,f>=0?(F=l,M=c,k=h,W=u,tt=_,G=y,ot=g,rt=C):(F=c,M=l,k=u,W=h,tt=y,G=_,ot=C,rt=g)),D===0)return null;let it=F/D,at=M/D,pt=1/D,At=k-it*$,Tt=W-at*$,jt=tt-it*Q,qt=G-at*Q,$t=ot-it*mt,lt=rt-at*mt,ft=$t*qt-lt*jt,bt=At*lt-Tt*$t,Ut=jt*Tt-qt*At;if(s){if(ft<0||bt<0||Ut<0)return null}else if((ft<0||bt<0||Ut<0)&&(ft>0||bt>0||Ut>0))return null;let Mt=ft+bt+Ut;if(Mt===0)return null;let Lt=pt*(ft*$+bt*Q+Ut*mt);return(Mt>0?Lt<0:Lt>0)?null:this.at(Lt/Mt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Di=class extends Jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},oh=new de,Ri=new vs,qr=new Li,ah=new Z,Yr=new Z,Zr=new Z,$r=new Z,fl=new Z,Jr=new Z,lh=new Z,Kr=new Z,we=class extends Te{constructor(t=new Ye,e=new Di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Jr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let f=a[l],h=r[l];f!==0&&(fl.fromBufferAttribute(h,t),o?Jr.addScaledVector(fl,f):Jr.addScaledVector(fl.sub(e),f))}e.add(Jr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(r),Ri.copy(t.ray).recast(t.near),!(qr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(qr,ah)===null||Ri.origin.distanceToSquared(ah)>(t.far-t.near)**2))&&(oh.copy(r).invert(),Ri.copy(t.ray).applyMatrix4(oh),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,h=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=u.length;_<y;_++){let x=u[_],g=o[x.materialIndex],C=Math.max(x.start,p.start),N=Math.min(a.count,Math.min(x.start+x.count,p.start+p.count));for(let w=C,I=N;w<I;w+=3){let R=a.getX(w),F=a.getX(w+1),M=a.getX(w+2);s=jr(this,g,t,n,c,f,h,R,F,M),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let x=_,g=y;x<g;x+=3){let C=a.getX(x),N=a.getX(x+1),w=a.getX(x+2);s=jr(this,o,t,n,c,f,h,C,N,w),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=u.length;_<y;_++){let x=u[_],g=o[x.materialIndex],C=Math.max(x.start,p.start),N=Math.min(l.count,Math.min(x.start+x.count,p.start+p.count));for(let w=C,I=N;w<I;w+=3){let R=w,F=w+1,M=w+2;s=jr(this,g,t,n,c,f,h,R,F,M),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let x=_,g=y;x<g;x+=3){let C=x,N=x+1,w=x+2;s=jr(this,o,t,n,c,f,h,C,N,w),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function ld(i,t,e,n,s,r,o,a){let l;if(t.side===Fe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Fn,a),l===null)return null;Kr.copy(a),Kr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Kr);return c<e.near||c>e.far?null:{distance:c,point:Kr.clone(),object:i}}function jr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Yr),i.getVertexPosition(l,Zr),i.getVertexPosition(c,$r);let f=ld(i,t,e,n,Yr,Zr,$r,lh);if(f){let h=new Z;hi.getBarycoord(lh,Yr,Zr,$r,h),s&&(f.uv=hi.getInterpolatedAttribute(s,a,l,c,h,new Xt)),r&&(f.uv1=hi.getInterpolatedAttribute(r,a,l,c,h,new Xt)),o&&(f.normal=hi.getInterpolatedAttribute(o,a,l,c,h,new Z),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new Z,materialIndex:0};hi.getNormal(Yr,Zr,$r,u.normal),f.face=u,f.barycoord=h}return f}var yo=class extends qe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=De,f=De,h,u){super(null,o,a,l,c,f,s,r,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ii=new Li,cd=new Xt(.5,.5),Qr=new Z,Ss=class{constructor(t=new rn,e=new rn,n=new rn,s=new rn,r=new rn,o=new rn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],f=r[4],h=r[5],u=r[6],p=r[7],_=r[8],y=r[9],x=r[10],g=r[11],C=r[12],N=r[13],w=r[14],I=r[15];if(s[0].setComponents(c-o,p-f,g-_,I-C).normalize(),s[1].setComponents(c+o,p+f,g+_,I+C).normalize(),s[2].setComponents(c+a,p+h,g+y,I+N).normalize(),s[3].setComponents(c-a,p-h,g-y,I-N).normalize(),n)s[4].setComponents(l,u,x,w).normalize(),s[5].setComponents(c-l,p-u,g-x,I-w).normalize();else if(s[4].setComponents(c-l,p-u,g-x,I-w).normalize(),e===_n)s[5].setComponents(c+l,p+u,g+x,I+w).normalize();else if(e===ds)s[5].setComponents(l,u,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(t){Ii.center.set(0,0,0);let e=cd.distanceTo(t.center);return Ii.radius=.7071067811865476+e,Ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Qr.x=s.normal.x>0?t.max.x:t.min.x,Qr.y=s.normal.y>0?t.max.y:t.min.y,Qr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ni=class extends Jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},vo=new Z,So=new Z,ch=new de,Xs=new vs,to=new Li,dl=new Z,hh=new Z,Ms=class extends Te{constructor(t=new Ye,e=new Ni){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)vo.fromBufferAttribute(e,s-1),So.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=vo.distanceTo(So);t.setAttribute("lineDistance",new Le(n,1))}else Pt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(s),to.radius+=r,t.ray.intersectsSphere(to)===!1)return;ch.copy(s).invert(),Xs.copy(t.ray).applyMatrix4(ch);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=n.index,u=n.attributes.position;if(f!==null){let p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let y=p,x=_-1;y<x;y+=c){let g=f.getX(y),C=f.getX(y+1),N=eo(this,t,Xs,l,g,C,y);N&&e.push(N)}if(this.isLineLoop){let y=f.getX(_-1),x=f.getX(p),g=eo(this,t,Xs,l,y,x,_-1);g&&e.push(g)}}else{let p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let y=p,x=_-1;y<x;y+=c){let g=eo(this,t,Xs,l,y,y+1,y);g&&e.push(g)}if(this.isLineLoop){let y=eo(this,t,Xs,l,_-1,p,_-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function eo(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(vo.fromBufferAttribute(a,s),So.fromBufferAttribute(a,r),e.distanceSqToSegment(vo,So,dl,hh)>n)return;dl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(dl);if(!(c<t.near||c>t.far))return{distance:c,point:hh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var uh=new Z,fh=new Z,er=class extends Ms{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)uh.fromBufferAttribute(e,s),fh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+uh.distanceTo(fh);t.setAttribute("lineDistance",new Le(n,1))}else Pt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var nr=class extends qe{constructor(t=[],e=gi,n,s,r,o,a,l,c,f){super(t,e,n,s,r,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ui=class extends qe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ui=class extends qe{constructor(t,e,n=vn,s,r,o,a=De,l=De,c,f=Pn,h=1){if(f!==Pn&&f!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:h};super(u,s,r,o,a,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Mo=class extends ui{constructor(t,e=vn,n=gi,s,r,o=De,a=De,l,c=Pn){let f={width:t,height:t,depth:1},h=[f,f,f,f,f,f];super(t,t,e,n,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ir=class extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},fi=class i extends Ye{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],f=[],h=[],u=0,p=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(f,3)),this.setAttribute("uv",new Le(h,2));function _(y,x,g,C,N,w,I,R,F,M,D){let k=w/F,W=I/M,$=w/2,tt=I/2,G=R/2,Q=F+1,ot=M+1,rt=0,mt=0,it=new Z;for(let at=0;at<ot;at++){let pt=at*W-tt;for(let At=0;At<Q;At++){let Tt=At*k-$;it[y]=Tt*C,it[x]=pt*N,it[g]=G,c.push(it.x,it.y,it.z),it[y]=0,it[x]=0,it[g]=R>0?1:-1,f.push(it.x,it.y,it.z),h.push(At/F),h.push(1-at/M),rt+=1}}for(let at=0;at<M;at++)for(let pt=0;pt<F;pt++){let At=u+pt+Q*at,Tt=u+pt+Q*(at+1),jt=u+(pt+1)+Q*(at+1),qt=u+(pt+1)+Q*at;l.push(At,Tt,qt),l.push(Tt,jt,qt),mt+=6}a.addGroup(p,mt,D),p+=mt,u+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Un=class i extends Ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,f=l+1,h=t/a,u=e/l,p=[],_=[],y=[],x=[];for(let g=0;g<f;g++){let C=g*u-o;for(let N=0;N<c;N++){let w=N*h-r;_.push(w,-C,0),y.push(0,0,1),x.push(N/a),x.push(1-g/l)}}for(let g=0;g<l;g++)for(let C=0;C<a;C++){let N=C+c*g,w=C+c*(g+1),I=C+1+c*(g+1),R=C+1+c*g;p.push(N,w,R),p.push(w,I,R)}this.setIndex(p),this.setAttribute("position",new Le(_,3)),this.setAttribute("normal",new Le(y,3)),this.setAttribute("uv",new Le(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function zi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(dh(s))s.isRenderTargetTexture?(Pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(dh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ve(i){let t={};for(let e=0;e<i.length;e++){let n=zi(i[e]);for(let s in n)t[s]=n[s]}return t}function dh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function hd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var ou={clone:zi,merge:Ve},ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends Jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ud,this.fragmentShader=fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zi(t.uniforms),this.uniformsGroups=hd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new zt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new me().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ot().fromArray(s.value);break;case"m4":this.uniforms[n].value=new de().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},bo=class extends on{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Kn=class extends Jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ea,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},sr=class extends Kn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Eo=class extends Jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},wo=class extends Jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function os(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function pl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var di=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},To=class extends di{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xl,endingEnd:xl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case _l:r=t,a=2*e-n;break;case yl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _l:o=t,l=2*n-e;break;case yl:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,f=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*f,this._offsetNext=o*f}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,p=this._weightNext,_=(n-e)/(s-e),y=_*_,x=y*_,g=-u*x+2*u*y-u*_,C=(1+u)*x+(-1.5-2*u)*y+(-.5+u)*_+1,N=(-1-p)*x+(1.5+p)*y+.5*_,w=p*x-p*y;for(let I=0;I!==a;++I)r[I]=g*o[f+I]+C*o[c+I]+N*o[l+I]+w*o[h+I];return r}},Ao=class extends di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=(n-e)/(s-e),h=1-f;for(let u=0;u!==a;++u)r[u]=o[c+u]*h+o[l+u]*f;return r}},Co=class extends di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ro=class extends di{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this.inTangents,h=this.outTangents;if(!f||!h){let _=(n-e)/(s-e),y=1-_;for(let x=0;x!==a;++x)r[x]=o[c+x]*y+o[l+x]*_;return r}let u=a*2,p=t-1;for(let _=0;_!==a;++_){let y=o[c+_],x=o[l+_],g=p*u+_*2,C=h[g],N=h[g+1],w=t*u+_*2,I=f[w],R=f[w+1],F=pd(n,e,C,I,s);r[_]=au(F,y,N,R,x)}return r}};function au(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function dd(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function pd(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=au(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=dd(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var an=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=os(e,this.TimeBufferType),this.values=os(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:os(t.times,Array),values:os(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),pl(t.settings)&&(n.settings={inTangents:os(t.settings.inTangents,Array),outTangents:os(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new To(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ro(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Zs:e=this.InterpolantFactoryMethodDiscrete;break;case mo:e=this.InterpolantFactoryMethodLinear;break;case so:e=this.InterpolantFactoryMethodSmooth;break;case gl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return mo;case this.InterpolantFactoryMethodSmooth:return so;case this.InterpolantFactoryMethodBezier:return gl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;pl(this.settings)&&(ph(this.settings.inTangents,t),ph(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Nt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Nt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Nt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Nt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Rf(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Nt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===so,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],f=t[a+1];if(c!==f&&(a!==1||c!==t[0]))if(s)l=!0;else{let h=a*n,u=h-n,p=h+n;for(let _=0;_!==n;++_){let y=e[h+_];if(y!==e[u+_]||y!==e[p+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,u=o*n;for(let p=0;p!==n;++p)e[u+p]=e[h+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,pl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ph(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=mo;var pi=class extends an{constructor(t,e,n){super(t,e,n)}};pi.prototype.ValueTypeName="bool";pi.prototype.ValueBufferType=Array;pi.prototype.DefaultInterpolation=Zs;pi.prototype.InterpolantFactoryMethodLinear=void 0;pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends an{constructor(t,e,n,s){super(t,e,n,s)}};Io.prototype.ValueTypeName="color";var Po=class extends an{constructor(t,e,n,s){super(t,e,n,s)}};Po.prototype.ValueTypeName="number";var Lo=class extends di{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let f=c+a;c!==f;c+=4)Dn.slerpFlat(r,0,o,c-a,o,c,l);return r}},rr=class extends an{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Lo(this.times,this.values,this.getValueSize(),t)}};rr.prototype.ValueTypeName="quaternion";rr.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends an{constructor(t,e,n){super(t,e,n)}};mi.prototype.ValueTypeName="string";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Zs;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Do=class extends an{constructor(t,e,n,s){super(t,e,n,s)}};Do.prototype.ValueTypeName="vector";var No=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(f){a++,r===!1&&s.onStart!==void 0&&s.onStart(f,o,a),r=!0},this.itemEnd=function(f){o++,s.onProgress!==void 0&&s.onProgress(f,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){let h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,u=c.length;h<u;h+=2){let p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(f))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},lu=new No,Uo=class{constructor(t){this.manager=t!==void 0?t:lu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var or=class extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},bs=class extends or{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ml=new de,mh=new Z,gh=new Z,Fo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ss,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;mh.setFromMatrixPosition(t.matrixWorld),e.position.copy(mh),gh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ml.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ml,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ds||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},no=new Z,io=new Dn,Cn=new Z,ar=class extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(no,io,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,Cn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(no,io,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(no,io,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ci=new Z,xh=new Xt,_h=new Xt,Ke=class extends ar{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,xh,_h),e.subVectors(_h,xh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var jn=class extends ar{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vl=class extends Fo{constructor(){super(new jn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Es=class extends or{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new vl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var as=-90,ls=1,Oo=class extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ke(as,ls,t,e);s.layers=this.layers,this.add(s);let r=new Ke(as,ls,t,e);r.layers=this.layers,this.add(r);let o=new Ke(as,ls,t,e);o.layers=this.layers,this.add(o);let a=new Ke(as,ls,t,e);a.layers=this.layers,this.add(a);let l=new Ke(as,ls,t,e);l.layers=this.layers,this.add(l);let c=new Ke(as,ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,f]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(h,u,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Bo=class extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var $l="\\[\\]\\.:\\/",md=new RegExp("["+$l+"]","g"),Jl="[^"+$l+"]",gd="[^"+$l.replace("\\.","")+"]",xd=/((?:WC+[\/:])*)/.source.replace("WC",Jl),_d=/(WCOD+)?/.source.replace("WCOD",gd),yd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),vd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),Sd=new RegExp("^"+xd+_d+yd+vd+"$"),Md=["material","materials","bones","map"],Sl=class{constructor(t,e,n){let s=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(md,"")}static parseTrackName(t){let e=Sd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Md.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;Nt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=Sl;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jx=new Float32Array(1);var yh=new de,lr=class{constructor(t,e,n=0,s=1/0){this.ray=new vs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new xs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Nt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yh),this}intersectObject(t,e=!0,n=[]){return Ml(t,this,n,e),n.sort(vh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ml(t[s],this,n,e);return n.sort(vh),n}};function vh(i,t){return i.distance-t.distance}function Ml(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Ml(r[o],t,e,!0)}}var bl=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Kl(i,t,e,n){let s=bd(n);switch(e){case Gl:return i*t;case Wl:return i*t/s.components*s.byteLength;case Xo:return i*t/s.components*s.byteLength;case yi:return i*t*2/s.components*s.byteLength;case qo:return i*t*2/s.components*s.byteLength;case Hl:return i*t*3/s.components*s.byteLength;case dn:return i*t*4/s.components*s.byteLength;case Yo:return i*t*4/s.components*s.byteLength;case fr:case dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $o:case Ko:return Math.max(i,16)*Math.max(t,8)/4;case Zo:case Jo:return Math.max(i,8)*Math.max(t,8)/2;case jo:case Qo:case ea:case na:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ta:case gr:case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ra:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case oa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case aa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case la:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ca:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ha:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ua:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case fa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case da:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case pa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ma:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ga:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case xa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _a:case ya:case va:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Sa:case Ma:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xr:case ba:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bd(i){switch(i){case Qe:case Bl:return{byteLength:1,components:1};case As:case zl:case Mn:return{byteLength:2,components:1};case Ho:case Wo:return{byteLength:2,components:4};case vn:case Go:case Sn:return{byteLength:4,components:1};case kl:case Vl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Iu(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function wd(i){let t=new WeakMap;function e(a,l){let c=a.array,f=a.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let f=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,f);else{h.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<h.length;p++){let _=h[u],y=h[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++u,h[u]=y)}h.length=u+1;for(let p=0,_=h.length;p<_;p++){let y=h[p];i.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ad=`#ifdef USE_ALPHAHASH
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
#endif`,Cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Id=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ld=`#ifdef USE_AOMAP
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
#endif`,Dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nd=`#ifdef USE_BATCHING
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
#endif`,Ud=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zd=`#ifdef USE_IRIDESCENCE
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
#endif`,kd=`#ifdef USE_BUMPMAP
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
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$d=`#define PI 3.141592653589793
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
} // validated`,Jd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kd=`vec3 transformedNormal = objectNormal;
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
#endif`,jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,np="gl_FragColor = linearToOutputTexel( gl_FragColor );",ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sp=`#ifdef USE_ENVMAP
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
#endif`,rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,op=`#ifdef USE_ENVMAP
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
#endif`,ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dp=`#ifdef USE_GRADIENTMAP
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
}`,pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_p=`#ifdef USE_ENVMAP
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
#endif`,yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bp=`PhysicalMaterial material;
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
#endif`,Ep=`uniform sampler2D dfgLUT;
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
}`,wp=`
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
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ap=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Rp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Np=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fp=`#if defined( USE_POINTS_UV )
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
#endif`,Op=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`#ifdef USE_MORPHTARGETS
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
#endif`,Hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$p=`#ifdef USE_NORMALMAP
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
#endif`,Jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,em=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,um=`float getShadowMask() {
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
}`,fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dm=`#ifdef USE_SKINNING
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
#endif`,pm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mm=`#ifdef USE_SKINNING
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
#endif`,gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ym=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vm=`#ifdef USE_TRANSMISSION
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
#endif`,Sm=`#ifdef USE_TRANSMISSION
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
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Am=`uniform sampler2D t2D;
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
}`,Cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`#include <common>
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
}`,Dm=`#if DEPTH_PACKING == 3200
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
}`,Nm=`#define DISTANCE
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
}`,Um=`#define DISTANCE
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
}`,Fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Om=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bm=`uniform float scale;
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
}`,zm=`uniform vec3 diffuse;
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
}`,km=`#include <common>
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
}`,Vm=`uniform vec3 diffuse;
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
}`,Gm=`#define LAMBERT
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
}`,Hm=`#define LAMBERT
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
}`,Wm=`#define MATCAP
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
}`,Xm=`#define MATCAP
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
}`,qm=`#define NORMAL
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
}`,Ym=`#define NORMAL
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
}`,Zm=`#define PHONG
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
}`,$m=`#define PHONG
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
}`,Jm=`#define STANDARD
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
}`,Km=`#define STANDARD
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
}`,jm=`#define TOON
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
}`,Qm=`#define TOON
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
}`,tg=`uniform float size;
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
}`,eg=`uniform vec3 diffuse;
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
}`,ng=`#include <common>
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
}`,ig=`uniform vec3 color;
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
}`,sg=`uniform float rotation;
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
}`,rg=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:Td,alphahash_pars_fragment:Ad,alphamap_fragment:Cd,alphamap_pars_fragment:Rd,alphatest_fragment:Id,alphatest_pars_fragment:Pd,aomap_fragment:Ld,aomap_pars_fragment:Dd,batching_pars_vertex:Nd,batching_vertex:Ud,begin_vertex:Fd,beginnormal_vertex:Od,bsdfs:Bd,iridescence_fragment:zd,bumpmap_pars_fragment:kd,clipping_planes_fragment:Vd,clipping_planes_pars_fragment:Gd,clipping_planes_pars_vertex:Hd,clipping_planes_vertex:Wd,color_fragment:Xd,color_pars_fragment:qd,color_pars_vertex:Yd,color_vertex:Zd,common:$d,cube_uv_reflection_fragment:Jd,defaultnormal_vertex:Kd,displacementmap_pars_vertex:jd,displacementmap_vertex:Qd,emissivemap_fragment:tp,emissivemap_pars_fragment:ep,colorspace_fragment:np,colorspace_pars_fragment:ip,envmap_fragment:sp,envmap_common_pars_fragment:rp,envmap_pars_fragment:op,envmap_pars_vertex:ap,envmap_physical_pars_fragment:_p,envmap_vertex:lp,fog_vertex:cp,fog_pars_vertex:hp,fog_fragment:up,fog_pars_fragment:fp,gradientmap_pars_fragment:dp,lightmap_pars_fragment:pp,lights_lambert_fragment:mp,lights_lambert_pars_fragment:gp,lights_pars_begin:xp,lights_toon_fragment:yp,lights_toon_pars_fragment:vp,lights_phong_fragment:Sp,lights_phong_pars_fragment:Mp,lights_physical_fragment:bp,lights_physical_pars_fragment:Ep,lights_fragment_begin:wp,lights_fragment_maps:Tp,lights_fragment_end:Ap,lightprobes_pars_fragment:Cp,logdepthbuf_fragment:Rp,logdepthbuf_pars_fragment:Ip,logdepthbuf_pars_vertex:Pp,logdepthbuf_vertex:Lp,map_fragment:Dp,map_pars_fragment:Np,map_particle_fragment:Up,map_particle_pars_fragment:Fp,metalnessmap_fragment:Op,metalnessmap_pars_fragment:Bp,morphinstance_vertex:zp,morphcolor_vertex:kp,morphnormal_vertex:Vp,morphtarget_pars_vertex:Gp,morphtarget_vertex:Hp,normal_fragment_begin:Wp,normal_fragment_maps:Xp,normal_pars_fragment:qp,normal_pars_vertex:Yp,normal_vertex:Zp,normalmap_pars_fragment:$p,clearcoat_normal_fragment_begin:Jp,clearcoat_normal_fragment_maps:Kp,clearcoat_pars_fragment:jp,iridescence_pars_fragment:Qp,opaque_fragment:tm,packing:em,premultiplied_alpha_fragment:nm,project_vertex:im,dithering_fragment:sm,dithering_pars_fragment:rm,roughnessmap_fragment:om,roughnessmap_pars_fragment:am,shadowmap_pars_fragment:lm,shadowmap_pars_vertex:cm,shadowmap_vertex:hm,shadowmask_pars_fragment:um,skinbase_vertex:fm,skinning_pars_vertex:dm,skinning_vertex:pm,skinnormal_vertex:mm,specularmap_fragment:gm,specularmap_pars_fragment:xm,tonemapping_fragment:_m,tonemapping_pars_fragment:ym,transmission_fragment:vm,transmission_pars_fragment:Sm,uv_pars_fragment:Mm,uv_pars_vertex:bm,uv_vertex:Em,worldpos_vertex:wm,background_vert:Tm,background_frag:Am,backgroundCube_vert:Cm,backgroundCube_frag:Rm,cube_vert:Im,cube_frag:Pm,depth_vert:Lm,depth_frag:Dm,distance_vert:Nm,distance_frag:Um,equirect_vert:Fm,equirect_frag:Om,linedashed_vert:Bm,linedashed_frag:zm,meshbasic_vert:km,meshbasic_frag:Vm,meshlambert_vert:Gm,meshlambert_frag:Hm,meshmatcap_vert:Wm,meshmatcap_frag:Xm,meshnormal_vert:qm,meshnormal_frag:Ym,meshphong_vert:Zm,meshphong_frag:$m,meshphysical_vert:Jm,meshphysical_frag:Km,meshtoon_vert:jm,meshtoon_frag:Qm,points_vert:tg,points_frag:eg,shadow_vert:ng,shadow_frag:ig,sprite_vert:sg,sprite_frag:rg},yt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},zn={basic:{uniforms:Ve([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ve([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new zt(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ve([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ve([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ve([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ve([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ve([yt.points,yt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ve([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ve([yt.common,yt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ve([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ve([yt.sprite,yt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:Ve([yt.common,yt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:Ve([yt.lights,yt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};zn.physical={uniforms:Ve([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Aa={r:0,b:0,g:0},og=new de,Pu=new Ot;Pu.set(-1,0,0,0,1,0,0,0,1);function ag(i,t,e,n,s,r){let o=new zt(0),a=s===!0?0:1,l,c,f=null,h=0,u=null;function p(C){let N=C.isScene===!0?C.background:null;if(N&&N.isTexture){let w=C.backgroundBlurriness>0;N=t.get(N,w)}return N}function _(C){let N=!1,w=p(C);w===null?x(o,a):w&&w.isColor&&(x(w,1),N=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?e.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||N)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(C,N){let w=p(N);w&&(w.isCubeTexture||w.mapping===hr)?(c===void 0&&(c=new we(new fi(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:zi(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=w,c.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(og.makeRotationFromEuler(N.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Pu),c.material.toneMapped=Jt.getTransfer(w.colorSpace)!==ee,(f!==w||h!==w.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=w,h=w.version,u=i.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new we(new Un(2,2),new on({name:"BackgroundMaterial",uniforms:zi(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(w.colorSpace)!==ee,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,f=w,h=w.version,u=i.toneMapping),l.layers.enableAll(),C.unshift(l,l.geometry,l.material,0,0,null))}function x(C,N){C.getRGB(Aa,Zl(i)),e.buffers.color.setClear(Aa.r,Aa.g,Aa.b,N,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(C,N=1){o.set(C),a=N,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(C){a=C,x(o,a)},render:_,addToRenderList:y,dispose:g}}function lg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(W,$,tt,G,Q){let ot=!1,rt=h(W,G,tt,$);r!==rt&&(r=rt,c(r.object)),ot=p(W,G,tt,Q),ot&&_(W,G,tt,Q),Q!==null&&t.update(Q,i.ELEMENT_ARRAY_BUFFER),(ot||o)&&(o=!1,w(W,$,tt,G),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function l(){return i.createVertexArray()}function c(W){return i.bindVertexArray(W)}function f(W){return i.deleteVertexArray(W)}function h(W,$,tt,G){let Q=G.wireframe===!0,ot=n[$.id];ot===void 0&&(ot={},n[$.id]=ot);let rt=W.isInstancedMesh===!0?W.id:0,mt=ot[rt];mt===void 0&&(mt={},ot[rt]=mt);let it=mt[tt.id];it===void 0&&(it={},mt[tt.id]=it);let at=it[Q];return at===void 0&&(at=u(l()),it[Q]=at),at}function u(W){let $=[],tt=[],G=[];for(let Q=0;Q<e;Q++)$[Q]=0,tt[Q]=0,G[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:tt,attributeDivisors:G,object:W,attributes:{},index:null}}function p(W,$,tt,G){let Q=r.attributes,ot=$.attributes,rt=0,mt=tt.getAttributes();for(let it in mt)if(mt[it].location>=0){let pt=Q[it],At=ot[it];if(At===void 0&&(it==="instanceMatrix"&&W.instanceMatrix&&(At=W.instanceMatrix),it==="instanceColor"&&W.instanceColor&&(At=W.instanceColor)),pt===void 0||pt.attribute!==At||At&&pt.data!==At.data)return!0;rt++}return r.attributesNum!==rt||r.index!==G}function _(W,$,tt,G){let Q={},ot=$.attributes,rt=0,mt=tt.getAttributes();for(let it in mt)if(mt[it].location>=0){let pt=ot[it];pt===void 0&&(it==="instanceMatrix"&&W.instanceMatrix&&(pt=W.instanceMatrix),it==="instanceColor"&&W.instanceColor&&(pt=W.instanceColor));let At={};At.attribute=pt,pt&&pt.data&&(At.data=pt.data),Q[it]=At,rt++}r.attributes=Q,r.attributesNum=rt,r.index=G}function y(){let W=r.newAttributes;for(let $=0,tt=W.length;$<tt;$++)W[$]=0}function x(W){g(W,0)}function g(W,$){let tt=r.newAttributes,G=r.enabledAttributes,Q=r.attributeDivisors;tt[W]=1,G[W]===0&&(i.enableVertexAttribArray(W),G[W]=1),Q[W]!==$&&(i.vertexAttribDivisor(W,$),Q[W]=$)}function C(){let W=r.newAttributes,$=r.enabledAttributes;for(let tt=0,G=$.length;tt<G;tt++)$[tt]!==W[tt]&&(i.disableVertexAttribArray(tt),$[tt]=0)}function N(W,$,tt,G,Q,ot,rt){rt===!0?i.vertexAttribIPointer(W,$,tt,Q,ot):i.vertexAttribPointer(W,$,tt,G,Q,ot)}function w(W,$,tt,G){y();let Q=G.attributes,ot=tt.getAttributes(),rt=$.defaultAttributeValues;for(let mt in ot){let it=ot[mt];if(it.location>=0){let at=Q[mt];if(at===void 0&&(mt==="instanceMatrix"&&W.instanceMatrix&&(at=W.instanceMatrix),mt==="instanceColor"&&W.instanceColor&&(at=W.instanceColor)),at!==void 0){let pt=at.normalized,At=at.itemSize,Tt=t.get(at);if(Tt===void 0)continue;let jt=Tt.buffer,qt=Tt.type,$t=Tt.bytesPerElement,lt=qt===i.INT||qt===i.UNSIGNED_INT||at.gpuType===Go;if(at.isInterleavedBufferAttribute){let ft=at.data,bt=ft.stride,Ut=at.offset;if(ft.isInstancedInterleavedBuffer){for(let Mt=0;Mt<it.locationSize;Mt++)g(it.location+Mt,ft.meshPerAttribute);W.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Mt=0;Mt<it.locationSize;Mt++)x(it.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Mt=0;Mt<it.locationSize;Mt++)N(it.location+Mt,At/it.locationSize,qt,pt,bt*$t,(Ut+At/it.locationSize*Mt)*$t,lt)}else{if(at.isInstancedBufferAttribute){for(let ft=0;ft<it.locationSize;ft++)g(it.location+ft,at.meshPerAttribute);W.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ft=0;ft<it.locationSize;ft++)x(it.location+ft);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let ft=0;ft<it.locationSize;ft++)N(it.location+ft,At/it.locationSize,qt,pt,At*$t,At/it.locationSize*ft*$t,lt)}}else if(rt!==void 0){let pt=rt[mt];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(it.location,pt);break;case 3:i.vertexAttrib3fv(it.location,pt);break;case 4:i.vertexAttrib4fv(it.location,pt);break;default:i.vertexAttrib1fv(it.location,pt)}}}}C()}function I(){D();for(let W in n){let $=n[W];for(let tt in $){let G=$[tt];for(let Q in G){let ot=G[Q];for(let rt in ot)f(ot[rt].object),delete ot[rt];delete G[Q]}}delete n[W]}}function R(W){if(n[W.id]===void 0)return;let $=n[W.id];for(let tt in $){let G=$[tt];for(let Q in G){let ot=G[Q];for(let rt in ot)f(ot[rt].object),delete ot[rt];delete G[Q]}}delete n[W.id]}function F(W){for(let $ in n){let tt=n[$];for(let G in tt){let Q=tt[G];if(Q[W.id]===void 0)continue;let ot=Q[W.id];for(let rt in ot)f(ot[rt].object),delete ot[rt];delete Q[W.id]}}}function M(W){for(let $ in n){let tt=n[$],G=W.isInstancedMesh===!0?W.id:0,Q=tt[G];if(Q!==void 0){for(let ot in Q){let rt=Q[ot];for(let mt in rt)f(rt[mt].object),delete rt[mt];delete Q[ot]}delete tt[G],Object.keys(tt).length===0&&delete n[$]}}}function D(){k(),o=!0,r!==s&&(r=s,c(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:k,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfObject:M,releaseStatesOfProgram:F,initAttributes:y,enableAttribute:x,disableUnusedAttributes:C}}function cg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),e.update(c,n,f))}function a(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let u=0;for(let p=0;p<f;p++)u+=c[p];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function hg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let F=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(F){return!(F!==dn&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(F){let M=F===Mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Qe&&F!==Sn&&!M&&n.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",f=l(c);f!==c&&(Pt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let h=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),N=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:C,maxVaryings:N,maxFragmentUniforms:w,maxSamples:I,samples:R}}function ug(i){let t=this,e=null,n=0,s=!1,r=!1,o=new rn,a=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let p=h.length!==0||u||n!==0||s;return s=u,n=h.length,p},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,u){e=f(h,u,0)},this.setState=function(h,u,p){let _=h.clippingPlanes,y=h.clipIntersection,x=h.clipShadows,g=i.get(h);if(!s||_===null||_.length===0||r&&!x)r?f(null):c();else{let C=r?0:n,N=C*4,w=g.clippingState||null;l.value=w,w=f(_,u,N,p);for(let I=0;I!==N;++I)w[I]=e[I];g.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(h,u,p,_){let y=h!==null?h.length:0,x=null;if(y!==0){if(x=l.value,_!==!0||x===null){let g=p+y*4,C=u.matrixWorldInverse;a.getNormalMatrix(C),(x===null||x.length<g)&&(x=new Float32Array(g));for(let N=0,w=p;N!==y;++N,w+=4)o.copy(h[N]).applyMatrix4(C,a),o.normal.toArray(x,w),x[w+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,x}}var Ls=4,fg=6,dg=20,pg=256,_r=new jn,cu=new zt,jl=null,Ql=0,tc=0,ec=!1,mg=new Z,ki=new Z,Ra=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=mg}=r;jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(jl,Ql,tc),this._renderer.xr.enabled=ec,t.scissorTest=!1,Ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),tc=this._renderer.getActiveMipmapLevel(),ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:Mn,format:dn,colorSpace:$s,depthBuffer:!1},s=hu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=gg(r)),this._blurMaterial=_g(r,t,e),this._ggxMaterial=xg(r,t,e)}return s}_compileMaterial(t){let e=new we(new Ye,t);this._renderer.compile(e,_r)}_sceneToCubeUV(t,e,n,s,r){let l=new Ke(90,1,e,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(cu),h.toneMapping=yn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new we(new fi,new Di({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,x=y.material,g=!1,C=t.background;C?C.isColor&&(x.color.copy(C),t.background=null,g=!0):(x.color.copy(cu),g=!0);for(let N=0;N<6;N++){let w=N%3;w===0?(l.up.set(0,c[N],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+f[N],r.y,r.z)):w===1?(l.up.set(0,0,c[N]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+f[N],r.z)):(l.up.set(0,c[N],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+f[N]));let I=this._cubeSize;Ps(s,w*I,N>2?I:0,I,I),h.setRenderTarget(s),g&&h.render(y,l),h.render(t,l)}h.toneMapping=p,h.autoClear=u,t.background=C}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===gi||t.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,_r)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=c*1.25,p=h*u,{_lodMax:_}=this,y=this._sizeLods[n],x=3*y*(n>_-Ls?n-_+Ls:0),g=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=_-e,Ps(r,x,g,3*y,2*y),s.setRenderTarget(r),s.render(a,_r),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-n,Ps(t,x,g,3*y,2*y),s.setRenderTarget(t),s.render(a,_r)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let f=this._sizeLods[s],h=3*f*(s>this._lodMax-Ls?s-this._lodMax+Ls:0),u=4*(this._cubeSize-f);Ps(e,h,u,3*f,2*f),o.setRenderTarget(e),o.render(l,_r)}};function gg(i){let t=[],e=[],n=i,s=i-Ls+1+fg;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,f=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,p=3,_=new Float32Array(p*u*h),y=new Float32Array(p*u*h);for(let g=0;g<h;g++){let C=g%3*2/3-1,N=g>2?0:-1,w=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];_.set(w,p*u*g);for(let I=0;I<u;I++){let R=f[I*2]*2-1,F=f[I*2+1]*2-1;g===0?ki.set(1,F,R):g===1?ki.set(-R,1,-F):g===2?ki.set(-R,F,1):g===3?ki.set(-1,F,-R):g===4?ki.set(-R,-1,F):ki.set(R,F,-1),ki.toArray(y,(g*u+I)*p)}}let x=new Ye;x.setAttribute("position",new un(_,p)),x.setAttribute("outputDirection",new un(y,p)),e.push(new we(x,null)),n>Ls&&n--}return{lodMeshes:e,sizeLods:t}}function hu(i,t,e){let n=new je(i,t,e);return n.texture.mapping=hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function xg(i,t,e){return new on({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function _g(i,t,e){return new on({name:"SphericalGaussianBlur",defines:{SAMPLES:dg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function uu(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pa(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function fu(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Pa(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ia=class extends je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new nr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fi(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:On});r.uniforms.tEquirect.value=e;let o=new we(s,r),a=e.minFilter;return e.minFilter===xi&&(e.minFilter=Ue),new Oo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function yg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?o(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===zo||p===ko)if(t.has(u)){let _=t.get(u).texture;return a(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let y=new Ia(_.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",c),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let p=u.mapping,_=p===zo||p===ko,y=p===gi||p===Bi;if(_||y){let x=e.get(u),g=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Ra(i)),x=_?n.fromEquirectangular(u,x):n.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,e.set(u,x),x.texture;if(x!==void 0)return x.texture;{let C=u.image;return _&&C&&C.height>0||y&&C&&l(C)?(n===null&&(n=new Ra(i)),x=_?n.fromEquirectangular(u):n.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,e.set(u,x),u.addEventListener("dispose",f),x.texture):null}}}return u}function a(u,p){return p===zo?u.mapping=gi:p===ko&&(u.mapping=Bi),u}function l(u){let p=0,_=6;for(let y=0;y<_;y++)u[y]!==void 0&&p++;return p===_}function c(u){let p=u.target;p.removeEventListener("dispose",c);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function f(u){let p=u.target;p.removeEventListener("dispose",f);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function vg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Pi("WebGLRenderer: "+n+" extension not supported."),s}}}function Sg(i,t,e,n){let s={},r=new WeakMap;function o(h){let u=h.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete s[u.id];let p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(h,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(h){let u=h.attributes;for(let p in u)t.update(u[p],i.ARRAY_BUFFER)}function c(h){let u=[],p=h.index,_=h.attributes.position,y=0;if(_===void 0)return;if(p!==null){let C=p.array;y=p.version;for(let N=0,w=C.length;N<w;N+=3){let I=C[N+0],R=C[N+1],F=C[N+2];u.push(I,R,R,F,F,I)}}else{let C=_.array;y=_.version;for(let N=0,w=C.length/3-1;N<w;N+=3){let I=N+0,R=N+1,F=N+2;u.push(I,R,R,F,F,I)}}let x=new(_.count>=65535?tr:Qs)(u,1);x.version=y;let g=r.get(h);g&&t.remove(g),r.set(h,x)}function f(h){let u=r.get(h);if(u){let p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function Mg(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,u){i.drawElements(n,u,r,h*o),e.update(u,n,1)}function c(h,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,h*o,p),e.update(u,n,p))}function f(h,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,h,0,p);let y=0;for(let x=0;x<p;x++)y+=u[x];e.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function bg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Nt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Eg(i,t,e){let n=new WeakMap,s=new me;function r(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0,u=n.get(a);if(u===void 0||u.count!==h){let D=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],C=a.morphAttributes.color||[],N=0;p===!0&&(N=1),_===!0&&(N=2),y===!0&&(N=3);let w=a.attributes.position.count*N,I=1;w>t.maxTextureSize&&(I=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let R=new Float32Array(w*I*4*h),F=new js(R,w,I,h);F.type=Sn,F.needsUpdate=!0;let M=N*4;for(let k=0;k<h;k++){let W=x[k],$=g[k],tt=C[k],G=w*I*4*k;for(let Q=0;Q<W.count;Q++){let ot=Q*M;p===!0&&(s.fromBufferAttribute(W,Q),R[G+ot+0]=s.x,R[G+ot+1]=s.y,R[G+ot+2]=s.z,R[G+ot+3]=0),_===!0&&(s.fromBufferAttribute($,Q),R[G+ot+4]=s.x,R[G+ot+5]=s.y,R[G+ot+6]=s.z,R[G+ot+7]=0),y===!0&&(s.fromBufferAttribute(tt,Q),R[G+ot+8]=s.x,R[G+ot+9]=s.y,R[G+ot+10]=s.z,R[G+ot+11]=tt.itemSize===4?s.w:1)}}u={count:h,texture:F,size:new Xt(w,I)},n.set(a,u),a.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function wg(i,t,e,n,s){let r=new WeakMap;function o(c){let f=s.render.frame,h=c.geometry,u=t.get(c,h);if(r.get(u)!==f&&(t.update(u),r.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==f&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){let p=c.skeleton;r.get(p)!==f&&(p.update(),r.set(p,f))}return u}function a(){r=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:a}}var Tg={[Pl]:"LINEAR_TONE_MAPPING",[Ll]:"REINHARD_TONE_MAPPING",[Dl]:"CINEON_TONE_MAPPING",[cr]:"ACES_FILMIC_TONE_MAPPING",[Ul]:"AGX_TONE_MAPPING",[Fl]:"NEUTRAL_TONE_MAPPING",[Nl]:"CUSTOM_TONE_MAPPING"};function Ag(i,t,e,n,s,r){let o=new je(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ye;c.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Le([0,2,0,0,2,0],2));let f=new bo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new we(c,f),u=new jn(-1,1,1,-1,0,1),p=null,_=null,y=!1,x,g=null,C=[],N=!1;this.setSize=function(w,I){o.setSize(w,I),a!==null&&a.setSize(w,I),l!==null&&l.setSize(w,I);for(let R=0;R<C.length;R++){let F=C[R];F.setSize&&F.setSize(w,I)}},this.setEffects=function(w){C=w,N=C.length>0&&C[0].isRenderPass===!0;let I=o.width,R=o.height;C.length>0&&a===null&&(a=new je(I,R,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),l=new je(I,R,{type:Mn,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<C.length;F++){let M=C[F];M.setSize&&M.setSize(I,R)}},this.begin=function(w,I){if(y||w.toneMapping===yn&&C.length===0)return!1;if(g=I,I!==null){let R=I.width,F=I.height;(o.width!==R||o.height!==F)&&this.setSize(R,F)}return N===!1&&w.setRenderTarget(o),x=w.toneMapping,w.toneMapping=yn,!0},this.hasRenderPass=function(){return N},this.end=function(w,I){w.toneMapping=x,y=!0;let R=o,F=a;for(let M=0;M<C.length;M++){let D=C[M];D.enabled!==!1&&(D.render(w,F,R,I),D.needsSwap!==!1&&(R=F,F=F===a?l:a))}if(p!==w.outputColorSpace||_!==w.toneMapping){p=w.outputColorSpace,_=w.toneMapping,f.defines={},Jt.getTransfer(p)===ee&&(f.defines.SRGB_TRANSFER="");let M=Tg[_];M&&(f.defines[M]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=R.texture,w.setRenderTarget(g),w.render(h,u),g=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var Lu=new qe,sc=new ui(1,1),Du=new js,Nu=new _o,Uu=new nr,du=[],pu=[],mu=new Float32Array(16),gu=new Float32Array(9),xu=new Float32Array(4);function Ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=du[s];if(r===void 0&&(r=new Float32Array(s),du[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function La(i,t){let e=pu[t];e===void 0&&(e=new Int32Array(t),pu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Cg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function Lg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;xu.set(n),i.uniformMatrix2fv(this.addr,!1,xu),Ce(e,n)}}function Dg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;gu.set(n),i.uniformMatrix3fv(this.addr,!1,gu),Ce(e,n)}}function Ng(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;mu.set(n),i.uniformMatrix4fv(this.addr,!1,mu),Ce(e,n)}}function Ug(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function zg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function Hg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sc.compareFunction=e.isReversedDepthBuffer()?Ta:wa,r=sc):r=Lu,e.setTexture2D(t||r,s)}function Wg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Nu,s)}function Xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Uu,s)}function qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Du,s)}function Yg(i){switch(i){case 5126:return Cg;case 35664:return Rg;case 35665:return Ig;case 35666:return Pg;case 35674:return Lg;case 35675:return Dg;case 35676:return Ng;case 5124:case 35670:return Ug;case 35667:case 35671:return Fg;case 35668:case 35672:return Og;case 35669:case 35673:return Bg;case 5125:return zg;case 36294:return kg;case 36295:return Vg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return qg}}function Zg(i,t){i.uniform1fv(this.addr,t)}function $g(i,t){let e=Ns(t,this.size,2);i.uniform2fv(this.addr,e)}function Jg(i,t){let e=Ns(t,this.size,3);i.uniform3fv(this.addr,e)}function Kg(i,t){let e=Ns(t,this.size,4);i.uniform4fv(this.addr,e)}function jg(i,t){let e=Ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Qg(i,t){let e=Ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function t0(i,t){let e=Ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function e0(i,t){i.uniform1iv(this.addr,t)}function n0(i,t){i.uniform2iv(this.addr,t)}function i0(i,t){i.uniform3iv(this.addr,t)}function s0(i,t){i.uniform4iv(this.addr,t)}function r0(i,t){i.uniform1uiv(this.addr,t)}function o0(i,t){i.uniform2uiv(this.addr,t)}function a0(i,t){i.uniform3uiv(this.addr,t)}function l0(i,t){i.uniform4uiv(this.addr,t)}function c0(i,t,e){let n=this.cache,s=t.length,r=La(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=sc:o=Lu;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function h0(i,t,e){let n=this.cache,s=t.length,r=La(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Nu,r[o])}function u0(i,t,e){let n=this.cache,s=t.length,r=La(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Uu,r[o])}function f0(i,t,e){let n=this.cache,s=t.length,r=La(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Du,r[o])}function d0(i){switch(i){case 5126:return Zg;case 35664:return $g;case 35665:return Jg;case 35666:return Kg;case 35674:return jg;case 35675:return Qg;case 35676:return t0;case 5124:case 35670:return e0;case 35667:case 35671:return n0;case 35668:case 35672:return i0;case 35669:case 35673:return s0;case 5125:return r0;case 36294:return o0;case 36295:return a0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return u0;case 36289:case 36303:case 36311:case 36292:return f0}}var rc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yg(e.type)}},oc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=d0(e.type)}},ac=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},nc=/(\w+)(\])?(\[|\.)?/g;function _u(i,t){i.seq.push(t),i.map[t.id]=t}function p0(i,t,e){let n=i.name,s=n.length;for(nc.lastIndex=0;;){let r=nc.exec(n),o=nc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){_u(e,c===void 0?new rc(a,i,t):new oc(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new ac(a),_u(e,h)),e=h}}}var Ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);p0(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function yu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var m0=37297,g0=0;function x0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var vu=new Ot;function _0(i){Jt._getMatrix(vu,Jt.workingColorSpace,i);let t=`mat3( ${vu.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case Js:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return Pt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Su(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+x0(i.getShaderSource(t),a)}else return r}function y0(i,t){let e=_0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var v0={[Pl]:"Linear",[Ll]:"Reinhard",[Dl]:"Cineon",[cr]:"ACESFilmic",[Ul]:"AgX",[Fl]:"Neutral",[Nl]:"Custom"};function S0(i,t){let e=v0[t];return e===void 0?(Pt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ca=new Z;function M0(){Jt.getLuminanceCoefficients(Ca);let i=Ca.x.toFixed(4),t=Ca.y.toFixed(4),e=Ca.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function E0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function w0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function vr(i){return i!==""}function Mu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var T0=/^[ \t]*#include +<([\w\d./]+)>/gm;function lc(i){return i.replace(T0,C0)}var A0=new Map;function C0(i,t){let e=Ht[t];if(e===void 0){let n=A0.get(t);if(n!==void 0)e=Ht[n],Pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return lc(e)}var R0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eu(i){return i.replace(R0,I0)}function I0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var P0={[Fi]:"SHADOWMAP_TYPE_PCF",[ws]:"SHADOWMAP_TYPE_VSM"};function L0(i){return P0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var D0={[gi]:"ENVMAP_TYPE_CUBE",[Bi]:"ENVMAP_TYPE_CUBE",[hr]:"ENVMAP_TYPE_CUBE_UV"};function N0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":D0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var U0={[Bi]:"ENVMAP_MODE_REFRACTION"};function F0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":U0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var O0={[Il]:"ENVMAP_BLENDING_MULTIPLY",[Gh]:"ENVMAP_BLENDING_MIX",[Hh]:"ENVMAP_BLENDING_ADD"};function B0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":O0[i.combine]||"ENVMAP_BLENDING_NONE"}function z0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function k0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=L0(e),c=N0(e),f=F0(e),h=B0(e),u=z0(e),p=b0(e),_=E0(r),y=s.createProgram(),x,g,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vr).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(vr).join(`
`),g.length>0&&(g+=`
`)):(x=[wu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),g=[wu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==yn?S0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,y0("linearToOutputTexel",e.outputColorSpace),M0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vr).join(`
`)),o=lc(o),o=Mu(o,e),o=bu(o,e),a=lc(a),a=Mu(a,e),a=bu(a,e),o=Eu(o),a=Eu(a),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let N=C+x+o,w=C+g+a,I=yu(s,s.VERTEX_SHADER,N),R=yu(s,s.FRAGMENT_SHADER,w);s.attachShader(y,I),s.attachShader(y,R),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function F(W){if(i.debug.checkShaderErrors){let $=s.getProgramInfoLog(y)||"",tt=s.getShaderInfoLog(I)||"",G=s.getShaderInfoLog(R)||"",Q=$.trim(),ot=tt.trim(),rt=G.trim(),mt=!0,it=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(mt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,I,R);else{let at=Su(s,I,"vertex"),pt=Su(s,R,"fragment");Nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+W.name+`
Material Type: `+W.type+`

Program Info Log: `+Q+`
`+at+`
`+pt)}else Q!==""?Pt("WebGLProgram: Program Info Log:",Q):(ot===""||rt==="")&&(it=!1);it&&(W.diagnostics={runnable:mt,programLog:Q,vertexShader:{log:ot,prefix:x},fragmentShader:{log:rt,prefix:g}})}s.deleteShader(I),s.deleteShader(R),M=new Ds(s,y),D=w0(s,y)}let M;this.getUniforms=function(){return M===void 0&&F(this),M};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(y,m0)),k},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=g0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=R,this}var V0=0,cc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new hc(t),e.set(t,n)),n}},hc=class{constructor(t){this.id=V0++,this.code=t,this.usedTimes=0}};function G0(i){return i===yi||i===gr||i===xr}function H0(i,t,e,n,s,r){let o=new xs,a=new cc,l=new Set,c=[],f=new Map,h=n.logarithmicDepthBuffer,u=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function y(M,D,k,W,$,tt){let G=W.fog,Q=$.geometry,ot=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?W.environment:null,rt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,mt=t.get(M.envMap||ot,rt),it=mt&&mt.mapping===hr?mt.image.height:null,at=p[M.type];M.precision!==null&&(u=n.getMaxPrecision(M.precision),u!==M.precision&&Pt("WebGLProgram.getParameters:",M.precision,"not supported, using",u,"instead."));let pt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,At=pt!==void 0?pt.length:0,Tt=0;Q.morphAttributes.position!==void 0&&(Tt=1),Q.morphAttributes.normal!==void 0&&(Tt=2),Q.morphAttributes.color!==void 0&&(Tt=3);let jt,qt,$t,lt;if(at){let Bt=zn[at];jt=Bt.vertexShader,qt=Bt.fragmentShader}else{jt=M.vertexShader,qt=M.fragmentShader;let Bt=a.getVertexShaderStage(M),Dt=a.getFragmentShaderStage(M);a.update(M,Bt,Dt),$t=Bt.id,lt=Dt.id}let ft=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Ut=$.isInstancedMesh===!0,Mt=$.isBatchedMesh===!0,Lt=!!M.map,_e=!!M.matcap,Ft=!!mt,Kt=!!M.aoMap,ie=!!M.lightMap,Wt=!!M.bumpMap&&M.wireframe===!1,ne=!!M.normalMap,ye=!!M.displacementMap,Oe=!!M.emissiveMap,he=!!M.metalnessMap,ge=!!M.roughnessMap,V=M.anisotropy>0,Re=M.clearcoat>0,Vt=M.dispersion>0,P=M.retroreflectivity>0,v=M.iridescence>0,q=M.sheen>0,j=M.transmission>0,st=V&&!!M.anisotropyMap,L=Re&&!!M.clearcoatMap,d=Re&&!!M.clearcoatNormalMap,m=Re&&!!M.clearcoatRoughnessMap,S=v&&!!M.iridescenceMap,T=v&&!!M.iridescenceThicknessMap,A=q&&!!M.sheenColorMap,O=q&&!!M.sheenRoughnessMap,U=!!M.specularMap,Y=!!M.specularColorMap,X=!!M.specularIntensityMap,dt=j&&!!M.transmissionMap,E=j&&!!M.thicknessMap,H=!!M.gradientMap,B=!!M.alphaMap,ht=M.alphaTest>0,ut=!!M.alphaHash,nt=!!M.extensions,gt=yn;M.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(gt=i.toneMapping);let xt={shaderID:at,shaderType:M.type,shaderName:M.name,vertexShader:jt,fragmentShader:qt,defines:M.defines,customVertexShaderID:$t,customFragmentShaderID:lt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:u,batching:Mt,batchingColor:Mt&&$._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&$.instanceColor!==null,instancingMorph:Ut&&$.morphTexture!==null,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!M.alphaToCoverage,map:Lt,matcap:_e,envMap:Ft,envMapMode:Ft&&mt.mapping,envMapCubeUVHeight:it,aoMap:Kt,lightMap:ie,bumpMap:Wt,normalMap:ne,displacementMap:ye,emissiveMap:Oe,normalMapObjectSpace:ne&&M.normalMapType===qh,normalMapTangentSpace:ne&&M.normalMapType===Ea,packedNormalMap:ne&&M.normalMapType===Ea&&G0(M.normalMap.format),metalnessMap:he,roughnessMap:ge,anisotropy:V,anisotropyMap:st,clearcoat:Re,clearcoatMap:L,clearcoatNormalMap:d,clearcoatRoughnessMap:m,dispersion:Vt,retroreflection:P,iridescence:v,iridescenceMap:S,iridescenceThicknessMap:T,sheen:q,sheenColorMap:A,sheenRoughnessMap:O,specularMap:U,specularColorMap:Y,specularIntensityMap:X,transmission:j,transmissionMap:dt,thicknessMap:E,gradientMap:H,opaque:M.transparent===!1&&M.blending===Ts&&M.alphaToCoverage===!1,alphaMap:B,alphaTest:ht,alphaHash:ut,combine:M.combine,mapUv:Lt&&_(M.map.channel),aoMapUv:Kt&&_(M.aoMap.channel),lightMapUv:ie&&_(M.lightMap.channel),bumpMapUv:Wt&&_(M.bumpMap.channel),normalMapUv:ne&&_(M.normalMap.channel),displacementMapUv:ye&&_(M.displacementMap.channel),emissiveMapUv:Oe&&_(M.emissiveMap.channel),metalnessMapUv:he&&_(M.metalnessMap.channel),roughnessMapUv:ge&&_(M.roughnessMap.channel),anisotropyMapUv:st&&_(M.anisotropyMap.channel),clearcoatMapUv:L&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:d&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:m&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:S&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:T&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:A&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:O&&_(M.sheenRoughnessMap.channel),specularMapUv:U&&_(M.specularMap.channel),specularColorMapUv:Y&&_(M.specularColorMap.channel),specularIntensityMapUv:X&&_(M.specularIntensityMap.channel),transmissionMapUv:dt&&_(M.transmissionMap.channel),thicknessMapUv:E&&_(M.thicknessMap.channel),alphaMapUv:B&&_(M.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ne||V),vertexNormals:!!Q.attributes.normal,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!Q.attributes.uv&&(Lt||B),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||Q.attributes.normal===void 0&&ne===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:bt,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:Q.attributes.position!==void 0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Tt,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:tt.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:Lt&&M.map.isVideoTexture===!0&&Jt.getTransfer(M.map.colorSpace)===ee,decodeVideoTextureEmissive:Oe&&M.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(M.emissiveMap.colorSpace)===ee,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===fn,flipSided:M.side===Fe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:nt&&M.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&M.extensions.multiDraw===!0||Mt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function x(M){let D=[];if(M.shaderID?D.push(M.shaderID):(D.push(M.customVertexShaderID),D.push(M.customFragmentShaderID)),M.defines!==void 0)for(let k in M.defines)D.push(k),D.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(g(D,M),C(D,M),D.push(i.outputColorSpace)),D.push(M.customProgramCacheKey),D.join()}function g(M,D){M.push(D.precision),M.push(D.outputColorSpace),M.push(D.envMapMode),M.push(D.envMapCubeUVHeight),M.push(D.mapUv),M.push(D.alphaMapUv),M.push(D.lightMapUv),M.push(D.aoMapUv),M.push(D.bumpMapUv),M.push(D.normalMapUv),M.push(D.displacementMapUv),M.push(D.emissiveMapUv),M.push(D.metalnessMapUv),M.push(D.roughnessMapUv),M.push(D.anisotropyMapUv),M.push(D.clearcoatMapUv),M.push(D.clearcoatNormalMapUv),M.push(D.clearcoatRoughnessMapUv),M.push(D.iridescenceMapUv),M.push(D.iridescenceThicknessMapUv),M.push(D.sheenColorMapUv),M.push(D.sheenRoughnessMapUv),M.push(D.specularMapUv),M.push(D.specularColorMapUv),M.push(D.specularIntensityMapUv),M.push(D.transmissionMapUv),M.push(D.thicknessMapUv),M.push(D.combine),M.push(D.fogExp2),M.push(D.sizeAttenuation),M.push(D.morphTargetsCount),M.push(D.morphAttributeCount),M.push(D.numSunLights),M.push(D.numDirLights),M.push(D.numPointLights),M.push(D.numSpotLights),M.push(D.numSpotLightMaps),M.push(D.numHemiLights),M.push(D.numRectAreaLights),M.push(D.numSunLightShadows),M.push(D.numDirLightShadows),M.push(D.numPointLightShadows),M.push(D.numSpotLightShadows),M.push(D.numSpotLightShadowsWithMaps),M.push(D.numLightProbes),M.push(D.shadowMapType),M.push(D.toneMapping),M.push(D.numClippingPlanes),M.push(D.numClipIntersection),M.push(D.depthPacking)}function C(M,D){o.disableAll(),D.instancing&&o.enable(0),D.instancingColor&&o.enable(1),D.instancingMorph&&o.enable(2),D.matcap&&o.enable(3),D.envMap&&o.enable(4),D.normalMapObjectSpace&&o.enable(5),D.normalMapTangentSpace&&o.enable(6),D.clearcoat&&o.enable(7),D.iridescence&&o.enable(8),D.alphaTest&&o.enable(9),D.vertexColors&&o.enable(10),D.vertexAlphas&&o.enable(11),D.vertexUv1s&&o.enable(12),D.vertexUv2s&&o.enable(13),D.vertexUv3s&&o.enable(14),D.vertexTangents&&o.enable(15),D.anisotropy&&o.enable(16),D.alphaHash&&o.enable(17),D.batching&&o.enable(18),D.dispersion&&o.enable(19),D.retroreflection&&o.enable(24),D.batchingColor&&o.enable(20),D.gradientMap&&o.enable(21),D.packedNormalMap&&o.enable(22),D.vertexNormals&&o.enable(23),M.push(o.mask),o.disableAll(),D.fog&&o.enable(0),D.useFog&&o.enable(1),D.flatShading&&o.enable(2),D.logarithmicDepthBuffer&&o.enable(3),D.reversedDepthBuffer&&o.enable(4),D.skinning&&o.enable(5),D.morphTargets&&o.enable(6),D.morphNormals&&o.enable(7),D.morphColors&&o.enable(8),D.premultipliedAlpha&&o.enable(9),D.shadowMapEnabled&&o.enable(10),D.doubleSided&&o.enable(11),D.flipSided&&o.enable(12),D.useDepthPacking&&o.enable(13),D.dithering&&o.enable(14),D.transmission&&o.enable(15),D.sheen&&o.enable(16),D.opaque&&o.enable(17),D.pointsUvs&&o.enable(18),D.decodeVideoTexture&&o.enable(19),D.decodeVideoTextureEmissive&&o.enable(20),D.alphaToCoverage&&o.enable(21),D.numLightProbeGrids>0&&o.enable(22),D.hasPositionAttribute&&o.enable(23),M.push(o.mask)}function N(M){let D=p[M.type],k;if(D){let W=zn[D];k=ou.clone(W.uniforms)}else k=M.uniforms;return k}function w(M,D){let k=f.get(D);return k!==void 0?++k.usedTimes:(k=new k0(i,D,M,s),c.push(k),f.set(D,k)),k}function I(M){if(--M.usedTimes===0){let D=c.indexOf(M);c[D]=c[c.length-1],c.pop(),f.delete(M.cacheKey),M.destroy()}}function R(M){a.remove(M)}function F(){a.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:N,acquireProgram:w,releaseProgram:I,releaseShaderCache:R,programs:c,dispose:F}}function W0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function X0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Tu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Au(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,_,y,x,g){let C=i[t];return C===void 0?(C={id:u.id,object:u,geometry:p,material:_,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:x,group:g},i[t]=C):(C.id=u.id,C.object=u,C.geometry=p,C.material=_,C.materialVariant=o(u),C.groupOrder=y,C.renderOrder=u.renderOrder,C.z=x,C.group=g),t++,C}function l(u,p,_,y,x,g,C){C.reversedDepth===!0&&(x=-x);let N=a(u,p,_,y,x,g);_.transmission>0?n.push(N):_.transparent===!0?s.push(N):e.push(N)}function c(u,p,_,y,x,g){let C=a(u,p,_,y,x,g);_.transmission>0?n.unshift(C):_.transparent===!0?s.unshift(C):e.unshift(C)}function f(u,p){e.length>1&&e.sort(u||X0),n.length>1&&n.sort(p||Tu),s.length>1&&s.sort(p||Tu)}function h(){for(let u=t,p=i.length;u<p;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:f}}function q0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Au,i.set(n,[o])):s>=r.length?(o=new Au,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Y0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Z,color:new zt};break;case"SpotLight":e={position:new Z,direction:new Z,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[t.id]=e,e}}}function Z0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var $0=0;function J0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function K0(i){let t=new Y0,e=Z0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Z);let s=new Z,r=new de,o=new de;function a(c){let f=0,h=0,u=0;for(let $=0;$<9;$++)n.probe[$].set(0,0,0);let p=0,_=0,y=0,x=0,g=0,C=0,N=0,w=0,I=0,R=0,F=0,M=0,D=0,k=0;c.sort(J0);for(let $=0,tt=c.length;$<tt;$++){let G=c[$],Q=G.color,ot=G.intensity,rt=G.distance,mt=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===yi?mt=G.shadow.map.texture:mt=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)f+=Q.r*ot,h+=Q.g*ot,u+=Q.b*ot;else if(G.isLightProbe){for(let it=0;it<9;it++)n.probe[it].addScaledVector(G.sh.coefficients[it],ot);k++}else if(G.isSunLight){let it=t.get(G);if(it.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){let at=G.shadow,pt=e.get(G);pt.shadowIntensity=at.intensity,pt.shadowBias=at.bias,pt.shadowNormalBias=at.normalBias,pt.shadowRadius=at.radius,pt.shadowMapSize.copy(at.mapSize).multiply(at.getFrameExtents()),n.sunShadow[_]=pt,n.sunShadowMap[_]=mt;let At=at.getViewportCount();for(let Tt=0;Tt<At;Tt++)n.sunShadowMatrix[y+Tt]=at.getMatrix(Tt),n.sunShadowCascade[y+Tt]=at._cascadeData[Tt];y+=At,_++}n.sun[p]=it,p++}else if(G.isDirectionalLight){let it=t.get(G);if(it.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){let at=G.shadow,pt=e.get(G);pt.shadowIntensity=at.intensity,pt.shadowBias=at.bias,pt.shadowNormalBias=at.normalBias,pt.shadowRadius=at.radius,pt.shadowMapSize=at.mapSize,n.directionalShadow[x]=pt,n.directionalShadowMap[x]=mt,n.directionalShadowMatrix[x]=G.shadow.matrix,I++}n.directional[x]=it,x++}else if(G.isSpotLight){let it=t.get(G);it.position.setFromMatrixPosition(G.matrixWorld),it.color.copy(Q).multiplyScalar(ot),it.distance=rt,it.coneCos=Math.cos(G.angle),it.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),it.decay=G.decay,n.spot[C]=it;let at=G.shadow;if(G.map&&(n.spotLightMap[M]=G.map,M++,at.updateMatrices(G),G.castShadow&&D++),n.spotLightMatrix[C]=at.matrix,G.castShadow){let pt=e.get(G);pt.shadowIntensity=at.intensity,pt.shadowBias=at.bias,pt.shadowNormalBias=at.normalBias,pt.shadowRadius=at.radius,pt.shadowMapSize=at.mapSize,n.spotShadow[C]=pt,n.spotShadowMap[C]=mt,F++}C++}else if(G.isRectAreaLight){let it=t.get(G);it.color.copy(Q).multiplyScalar(ot),it.halfWidth.set(G.width*.5,0,0),it.halfHeight.set(0,G.height*.5,0),n.rectArea[N]=it,N++}else if(G.isPointLight){let it=t.get(G);if(it.color.copy(G.color).multiplyScalar(G.intensity),it.distance=G.distance,it.decay=G.decay,G.castShadow){let at=G.shadow,pt=e.get(G);pt.shadowIntensity=at.intensity,pt.shadowBias=at.bias,pt.shadowNormalBias=at.normalBias,pt.shadowRadius=at.radius,pt.shadowMapSize=at.mapSize,pt.shadowCameraNear=at.camera.near,pt.shadowCameraFar=at.camera.far,n.pointShadow[g]=pt,n.pointShadowMap[g]=mt,n.pointShadowMatrix[g]=G.shadow.matrix,R++}n.point[g]=it,g++}else if(G.isHemisphereLight){let it=t.get(G);it.skyColor.copy(G.color).multiplyScalar(ot),it.groundColor.copy(G.groundColor).multiplyScalar(ot),n.hemi[w]=it,w++}}N>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=u;let W=n.hash;(W.sunLength!==p||W.directionalLength!==x||W.pointLength!==g||W.spotLength!==C||W.rectAreaLength!==N||W.hemiLength!==w||W.numSunShadows!==_||W.numDirectionalShadows!==I||W.numPointShadows!==R||W.numSpotShadows!==F||W.numSpotMaps!==M||W.numLightProbes!==k)&&(n.sun.length=p,n.directional.length=x,n.spot.length=C,n.rectArea.length=N,n.point.length=g,n.hemi.length=w,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.directionalShadowMatrix.length=I,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=F,n.spotShadowMap.length=F,n.spotLightMatrix.length=F+M-D,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=k,W.sunLength=p,W.directionalLength=x,W.pointLength=g,W.spotLength=C,W.rectAreaLength=N,W.hemiLength=w,W.numSunShadows=_,W.numDirectionalShadows=I,W.numPointShadows=R,W.numSpotShadows=F,W.numSpotMaps=M,W.numLightProbes=k,n.version=$0++)}function l(c,f){let h=0,u=0,p=0,_=0,y=0,x=0,g=f.matrixWorldInverse;for(let C=0,N=c.length;C<N;C++){let w=c[C];if(w.isSunLight){let I=n.sun[h];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(g),h++}else if(w.isDirectionalLight){let I=n.directional[u];I.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(g),u++}else if(w.isSpotLight){let I=n.spot[_];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(g),I.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(g),_++}else if(w.isRectAreaLight){let I=n.rectArea[y];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),I.halfWidth.set(w.width*.5,0,0),I.halfHeight.set(0,w.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),y++}else if(w.isPointLight){let I=n.point[p];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(g),p++}else if(w.isHemisphereLight){let I=n.hemi[x];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(g),x++}}}return{setup:a,setupView:l,state:n}}function Cu(i){let t=new K0(i),e=[],n=[],s=[];function r(u){h.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function f(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function j0(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Cu(i),t.set(s,[a])):r>=o.length?(a=new Cu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Q0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tx=`uniform sampler2D shadow_pass;
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
}`,ex=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],nx=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Ru=new de,yr=new Z,ic=new Z;function ix(i,t,e){let n=new Ss,s=new Xt,r=new Xt,o=new me,a=new Eo,l=new wo,c={},f=e.maxTextureSize,h={[Fn]:Fe,[Fe]:Fn,[fn]:fn},u=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Q0,fragmentShader:tx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let _=new Ye;_.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new we(_,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fi;let g=this.type;this.render=function(R,F,M){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;this.type===bh&&(Pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fi);let D=i.getRenderTarget(),k=i.getActiveCubeFace(),W=i.getActiveMipmapLevel(),$=i.state;$.setBlending(On),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let tt=g!==this.type;tt&&F.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(Q=>Q.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,Q=R.length;G<Q;G++){let ot=R[G],rt=ot.shadow;if(rt===void 0){Pt("WebGLShadowMap:",ot,"has no shadow.");continue}if(rt.autoUpdate===!1&&rt.needsUpdate===!1)continue;s.copy(rt.mapSize);let mt=rt.getFrameExtents();s.multiply(mt),r.copy(rt.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/mt.x),s.x=r.x*mt.x,rt.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/mt.y),s.y=r.y*mt.y,rt.mapSize.y=r.y));let it=i.state.buffers.depth.getReversed();if(rt.camera._reversedDepth=it,rt.map===null||tt===!0){if(rt.map!==null&&(rt.map.depthTexture!==null&&(rt.map.depthTexture.dispose(),rt.map.depthTexture=null),rt.map.dispose()),this.type===ws){if(ot.isPointLight){Pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}rt.map=new je(s.x,s.y,{format:yi,type:Mn,minFilter:Ue,magFilter:Ue,generateMipmaps:!1}),rt.map.texture.name=ot.name+".shadowMap",rt.map.depthTexture=new ui(s.x,s.y,Sn),rt.map.depthTexture.name=ot.name+".shadowMapDepth",rt.map.depthTexture.format=Pn,rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=De,rt.map.depthTexture.magFilter=De}else ot.isPointLight?(rt.map=new Ia(s.x),rt.map.depthTexture=new Mo(s.x,vn)):(rt.map=new je(s.x,s.y),rt.map.depthTexture=new ui(s.x,s.y,vn)),rt.map.depthTexture.name=ot.name+".shadowMap",rt.map.depthTexture.format=Pn,this.type===Fi?(rt.map.depthTexture.compareFunction=it?Ta:wa,rt.map.depthTexture.minFilter=Ue,rt.map.depthTexture.magFilter=Ue):(rt.map.depthTexture.compareFunction=null,rt.map.depthTexture.minFilter=De,rt.map.depthTexture.magFilter=De);rt.camera.updateProjectionMatrix()}rt.map.isWebGLCubeRenderTarget!==!0&&(rt.map.width!==s.x||rt.map.height!==s.y)&&rt.map.setSize(s.x,s.y);let at=rt.map.isWebGLCubeRenderTarget?6:rt.getViewportCount();ot.isPointLight!==!0&&rt.updateMatrices(ot,M);for(let pt=0;pt<at;pt++){let At=rt.getCamera(pt);if(ot.isPointLight){let Tt=rt.camera,jt=rt.matrix,qt=ot.distance||Tt.far;qt!==Tt.far&&(Tt.far=qt,Tt.updateProjectionMatrix()),yr.setFromMatrixPosition(ot.matrixWorld),Tt.position.copy(yr),ic.copy(Tt.position),ic.add(ex[pt]),Tt.up.copy(nx[pt]),Tt.lookAt(ic),Tt.updateMatrixWorld(),jt.makeTranslation(-yr.x,-yr.y,-yr.z),Ru.multiplyMatrices(Tt.projectionMatrix,Tt.matrixWorldInverse),rt._frustum.setFromProjectionMatrix(Ru,Tt.coordinateSystem,Tt.reversedDepth)}if(rt.map.isWebGLCubeRenderTarget)i.setRenderTarget(rt.map,pt),i.clear();else{pt===0&&(i.setRenderTarget(rt.map),i.clear());let Tt=rt.getViewport(pt);o.set(r.x*Tt.x,r.y*Tt.y,r.x*Tt.z,r.y*Tt.w),$.viewport(o)}n=rt.getFrustum(pt),w(F,M,At,ot,this.type)}rt.isPointLightShadow!==!0&&this.type===ws&&C(rt,M),rt.needsUpdate=!1}g=this.type,x.needsUpdate=!1,i.setRenderTarget(D,k,W)};function C(R,F){let M=t.update(y);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null?R.mapPass=new je(s.x,s.y,{format:yi,type:Mn}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value.set(R.map.width,R.map.height),u.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(F,null,M,u,y,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value.set(R.map.width,R.map.height),p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(F,null,M,p,y,null)}function N(R,F,M,D){let k=null,W=M.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(W!==void 0)k=W;else if(k=M.isPointLight===!0?l:a,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){let $=k.uuid,tt=F.uuid,G=c[$];G===void 0&&(G={},c[$]=G);let Q=G[tt];Q===void 0&&(Q=k.clone(),G[tt]=Q,F.addEventListener("dispose",I)),k=Q}if(k.visible=F.visible,k.wireframe=F.wireframe,D===ws?k.side=F.shadowSide!==null?F.shadowSide:F.side:k.side=F.shadowSide!==null?F.shadowSide:h[F.side],k.alphaMap=F.alphaMap,k.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,k.map=F.map,k.clipShadows=F.clipShadows,k.clippingPlanes=F.clippingPlanes,k.clipIntersection=F.clipIntersection,k.displacementMap=F.displacementMap,k.displacementScale=F.displacementScale,k.displacementBias=F.displacementBias,k.wireframeLinewidth=F.wireframeLinewidth,k.linewidth=F.linewidth,M.isPointLight===!0&&k.isMeshDistanceMaterial===!0){let $=i.properties.get(k);$.light=M}return k}function w(R,F,M,D,k){if(R.visible===!1)return;if(R.layers.test(F.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&k===ws)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,R.matrixWorld);let tt=t.update(R),G=R.material;if(Array.isArray(G)){let Q=tt.groups;for(let ot=0,rt=Q.length;ot<rt;ot++){let mt=Q[ot],it=G[mt.materialIndex];if(it&&it.visible){let at=N(R,it,D,k);R.onBeforeShadow(i,R,F,M,tt,at,mt),i.renderBufferDirect(M,null,tt,at,R,mt),R.onAfterShadow(i,R,F,M,tt,at,mt)}}}else if(G.visible){let Q=N(R,G,D,k);R.onBeforeShadow(i,R,F,M,tt,Q,null),i.renderBufferDirect(M,null,tt,Q,R,null),R.onAfterShadow(i,R,F,M,tt,Q,null)}}let $=R.children;for(let tt=0,G=$.length;tt<G;tt++)w($[tt],F,M,D,k)}function I(R){R.target.removeEventListener("dispose",I);for(let M in c){let D=c[M],k=R.target.uuid;k in D&&(D[k].dispose(),delete D[k])}}}function sx(i,t){function e(){let E=!1,H=new me,B=null,ht=new me(0,0,0,0);return{setMask:function(ut){B!==ut&&!E&&(i.colorMask(ut,ut,ut,ut),B=ut)},setLocked:function(ut){E=ut},setClear:function(ut,nt,gt,xt,Bt){Bt===!0&&(ut*=xt,nt*=xt,gt*=xt),H.set(ut,nt,gt,xt),ht.equals(H)===!1&&(i.clearColor(ut,nt,gt,xt),ht.copy(H))},reset:function(){E=!1,B=null,ht.set(-1,0,0,0)}}}function n(){let E=!1,H=!1,B=null,ht=null,ut=null;return{setReversed:function(nt){if(H!==nt){let gt=t.get("EXT_clip_control");nt?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),H=nt;let xt=ut;ut=null,this.setClear(xt)}},getReversed:function(){return H},setTest:function(nt){nt?ft(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(nt){B!==nt&&!E&&(i.depthMask(nt),B=nt)},setFunc:function(nt){if(H&&(nt=su[nt]),ht!==nt){switch(nt){case oo:i.depthFunc(i.NEVER);break;case ao:i.depthFunc(i.ALWAYS);break;case lo:i.depthFunc(i.LESS);break;case us:i.depthFunc(i.LEQUAL);break;case co:i.depthFunc(i.EQUAL);break;case ho:i.depthFunc(i.GEQUAL);break;case uo:i.depthFunc(i.GREATER);break;case fo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=nt}},setLocked:function(nt){E=nt},setClear:function(nt){ut!==nt&&(ut=nt,H&&(nt=1-nt),i.clearDepth(nt))},reset:function(){E=!1,B=null,ht=null,ut=null,H=!1}}}function s(){let E=!1,H=null,B=null,ht=null,ut=null,nt=null,gt=null,xt=null,Bt=null;return{setTest:function(Dt){E||(Dt?ft(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Dt){H!==Dt&&!E&&(i.stencilMask(Dt),H=Dt)},setFunc:function(Dt,se,ae){(B!==Dt||ht!==se||ut!==ae)&&(i.stencilFunc(Dt,se,ae),B=Dt,ht=se,ut=ae)},setOp:function(Dt,se,ae){(nt!==Dt||gt!==se||xt!==ae)&&(i.stencilOp(Dt,se,ae),nt=Dt,gt=se,xt=ae)},setLocked:function(Dt){E=Dt},setClear:function(Dt){Bt!==Dt&&(i.clearStencil(Dt),Bt=Dt)},reset:function(){E=!1,H=null,B=null,ht=null,ut=null,nt=null,gt=null,xt=null,Bt=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,f={},h={},u={},p=new WeakMap,_=[],y=null,x=!1,g=null,C=null,N=null,w=null,I=null,R=null,F=null,M=new zt(0,0,0),D=0,k=!1,W=null,$=null,tt=null,G=null,Q=null,ot=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),rt=!1,mt=0,it=i.getParameter(i.VERSION);it.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec(it)[1]),rt=mt>=1):it.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),rt=mt>=2);let at=null,pt={},At=i.getParameter(i.SCISSOR_BOX),Tt=i.getParameter(i.VIEWPORT),jt=new me().fromArray(At),qt=new me().fromArray(Tt);function $t(E,H,B,ht){let ut=new Uint8Array(4),nt=i.createTexture();i.bindTexture(E,nt),i.texParameteri(E,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(E,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let gt=0;gt<B;gt++)E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY?i.texImage3D(H,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(H+gt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return nt}let lt={};lt[i.TEXTURE_2D]=$t(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=$t(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=$t(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=$t(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ft(i.DEPTH_TEST),o.setFunc(us),Wt(!1),ne(El),ft(i.CULL_FACE),Kt(On);function ft(E){f[E]!==!0&&(i.enable(E),f[E]=!0)}function bt(E){f[E]!==!1&&(i.disable(E),f[E]=!1)}function Ut(E,H){return u[E]!==H?(i.bindFramebuffer(E,H),u[E]=H,E===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=H),E===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=H),!0):!1}function Mt(E,H){let B=_,ht=!1;if(E){B=p.get(H),B===void 0&&(B=[],p.set(H,B));let ut=E.textures;if(B.length!==ut.length||B[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,gt=ut.length;nt<gt;nt++)B[nt]=i.COLOR_ATTACHMENT0+nt;B.length=ut.length,ht=!0}}else B[0]!==i.BACK&&(B[0]=i.BACK,ht=!0);ht&&i.drawBuffers(B)}function Lt(E){return y!==E?(i.useProgram(E),y=E,!0):!1}let _e={[Oi]:i.FUNC_ADD,[wh]:i.FUNC_SUBTRACT,[Th]:i.FUNC_REVERSE_SUBTRACT};_e[Ah]=i.MIN,_e[Ch]=i.MAX;let Ft={[Rh]:i.ZERO,[Ih]:i.ONE,[Ph]:i.SRC_COLOR,[Cl]:i.SRC_ALPHA,[Oh]:i.SRC_ALPHA_SATURATE,[Uh]:i.DST_COLOR,[Dh]:i.DST_ALPHA,[Lh]:i.ONE_MINUS_SRC_COLOR,[Rl]:i.ONE_MINUS_SRC_ALPHA,[Fh]:i.ONE_MINUS_DST_COLOR,[Nh]:i.ONE_MINUS_DST_ALPHA,[Bh]:i.CONSTANT_COLOR,[zh]:i.ONE_MINUS_CONSTANT_COLOR,[kh]:i.CONSTANT_ALPHA,[Vh]:i.ONE_MINUS_CONSTANT_ALPHA};function Kt(E,H,B,ht,ut,nt,gt,xt,Bt,Dt){if(E===On){x===!0&&(bt(i.BLEND),x=!1);return}if(x===!1&&(ft(i.BLEND),x=!0),E!==Eh){if(E!==g||Dt!==k){if((C!==Oi||I!==Oi)&&(i.blendEquation(i.FUNC_ADD),C=Oi,I=Oi),Dt)switch(E){case Ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wl:i.blendFunc(i.ONE,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Al:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Nt("WebGLState: Invalid blending: ",E);break}else switch(E){case Ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tl:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Al:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",E);break}N=null,w=null,R=null,F=null,M.set(0,0,0),D=0,g=E,k=Dt}return}ut=ut||H,nt=nt||B,gt=gt||ht,(H!==C||ut!==I)&&(i.blendEquationSeparate(_e[H],_e[ut]),C=H,I=ut),(B!==N||ht!==w||nt!==R||gt!==F)&&(i.blendFuncSeparate(Ft[B],Ft[ht],Ft[nt],Ft[gt]),N=B,w=ht,R=nt,F=gt),(xt.equals(M)===!1||Bt!==D)&&(i.blendColor(xt.r,xt.g,xt.b,Bt),M.copy(xt),D=Bt),g=E,k=!1}function ie(E,H){E.side===fn?bt(i.CULL_FACE):ft(i.CULL_FACE);let B=E.side===Fe;H&&(B=!B),Wt(B),E.blending===Ts&&E.transparent===!1?Kt(On):Kt(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),o.setFunc(E.depthFunc),o.setTest(E.depthTest),o.setMask(E.depthWrite),r.setMask(E.colorWrite);let ht=E.stencilWrite;a.setTest(ht),ht&&(a.setMask(E.stencilWriteMask),a.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),a.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),Oe(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(E){W!==E&&(E?i.frontFace(i.CW):i.frontFace(i.CCW),W=E)}function ne(E){E!==Sh?(ft(i.CULL_FACE),E!==$&&(E===El?i.cullFace(i.BACK):E===Mh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),$=E}function ye(E){E!==tt&&(rt&&i.lineWidth(E),tt=E)}function Oe(E,H,B){E?(ft(i.POLYGON_OFFSET_FILL),(G!==H||Q!==B)&&(G=H,Q=B,o.getReversed()&&(H=-H),i.polygonOffset(H,B))):bt(i.POLYGON_OFFSET_FILL)}function he(E){E?ft(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function ge(E){E===void 0&&(E=i.TEXTURE0+ot-1),at!==E&&(i.activeTexture(E),at=E)}function V(E,H,B){B===void 0&&(at===null?B=i.TEXTURE0+ot-1:B=at);let ht=pt[B];ht===void 0&&(ht={type:void 0,texture:void 0},pt[B]=ht),(ht.type!==E||ht.texture!==H)&&(at!==B&&(i.activeTexture(B),at=B),i.bindTexture(E,H||lt[E]),ht.type=E,ht.texture=H)}function Re(){let E=pt[at];E!==void 0&&E.type!==void 0&&(i.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function Vt(){try{i.compressedTexImage2D(...arguments)}catch(E){Nt("WebGLState:",E)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(E){Nt("WebGLState:",E)}}function v(){try{i.texSubImage2D(...arguments)}catch(E){Nt("WebGLState:",E)}}function q(){try{i.texSubImage3D(...arguments)}catch(E){Nt("WebGLState:",E)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(E){Nt("WebGLState:",E)}}function st(){try{i.compressedTexSubImage3D(...arguments)}catch(E){Nt("WebGLState:",E)}}function L(){try{i.texStorage2D(...arguments)}catch(E){Nt("WebGLState:",E)}}function d(){try{i.texStorage3D(...arguments)}catch(E){Nt("WebGLState:",E)}}function m(){try{i.texImage2D(...arguments)}catch(E){Nt("WebGLState:",E)}}function S(){try{i.texImage3D(...arguments)}catch(E){Nt("WebGLState:",E)}}function T(E){return h[E]!==void 0?h[E]:i.getParameter(E)}function A(E,H){h[E]!==H&&(i.pixelStorei(E,H),h[E]=H)}function O(E){jt.equals(E)===!1&&(i.scissor(E.x,E.y,E.z,E.w),jt.copy(E))}function U(E){qt.equals(E)===!1&&(i.viewport(E.x,E.y,E.z,E.w),qt.copy(E))}function Y(E,H){let B=c.get(H);B===void 0&&(B=new WeakMap,c.set(H,B));let ht=B.get(E);ht===void 0&&(ht=i.getUniformBlockIndex(H,E.name),B.set(E,ht))}function X(E,H){let ht=c.get(H).get(E);l.get(H)!==ht&&(i.uniformBlockBinding(H,ht,E.__bindingPointIndex),l.set(H,ht))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},h={},at=null,pt={},u={},p=new WeakMap,_=[],y=null,x=!1,g=null,C=null,N=null,w=null,I=null,R=null,F=null,M=new zt(0,0,0),D=0,k=!1,W=null,$=null,tt=null,G=null,Q=null,jt.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ft,disable:bt,bindFramebuffer:Ut,drawBuffers:Mt,useProgram:Lt,setBlending:Kt,setMaterial:ie,setFlipSided:Wt,setCullFace:ne,setLineWidth:ye,setPolygonOffset:Oe,setScissorTest:he,activeTexture:ge,bindTexture:V,unbindTexture:Re,compressedTexImage2D:Vt,compressedTexImage3D:P,texImage2D:m,texImage3D:S,pixelStorei:A,getParameter:T,updateUBOMapping:Y,uniformBlockBinding:X,texStorage2D:L,texStorage3D:d,texSubImage2D:v,texSubImage3D:q,compressedTexSubImage2D:j,compressedTexSubImage3D:st,scissor:O,viewport:U,reset:dt}}function rx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,f=new WeakMap,h=new Set,u,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,v){return _?new OffscreenCanvas(P,v):Ks("canvas")}function x(P,v,q){let j=1,st=Vt(P);if((st.width>q||st.height>q)&&(j=q/Math.max(st.width,st.height)),j<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let L=Math.floor(j*st.width),d=Math.floor(j*st.height);u===void 0&&(u=y(L,d));let m=v?y(L,d):u;return m.width=L,m.height=d,m.getContext("2d").drawImage(P,0,0,L,d),Pt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+L+"x"+d+")."),m}else return"data"in P&&Pt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),P;return P}function g(P){return P.generateMipmaps}function C(P){i.generateMipmap(P)}function N(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(P,v,q,j,st,L=!1){if(P!==null){if(i[P]!==void 0)return i[P];Pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let d;j&&(d=t.get("EXT_texture_norm16"),d||Pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let m=v;if(v===i.RED&&(q===i.FLOAT&&(m=i.R32F),q===i.HALF_FLOAT&&(m=i.R16F),q===i.UNSIGNED_BYTE&&(m=i.R8),q===i.UNSIGNED_SHORT&&d&&(m=d.R16_EXT),q===i.SHORT&&d&&(m=d.R16_SNORM_EXT)),v===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(m=i.R8UI),q===i.UNSIGNED_SHORT&&(m=i.R16UI),q===i.UNSIGNED_INT&&(m=i.R32UI),q===i.BYTE&&(m=i.R8I),q===i.SHORT&&(m=i.R16I),q===i.INT&&(m=i.R32I)),v===i.RG&&(q===i.FLOAT&&(m=i.RG32F),q===i.HALF_FLOAT&&(m=i.RG16F),q===i.UNSIGNED_BYTE&&(m=i.RG8),q===i.UNSIGNED_SHORT&&d&&(m=d.RG16_EXT),q===i.SHORT&&d&&(m=d.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(m=i.RG8UI),q===i.UNSIGNED_SHORT&&(m=i.RG16UI),q===i.UNSIGNED_INT&&(m=i.RG32UI),q===i.BYTE&&(m=i.RG8I),q===i.SHORT&&(m=i.RG16I),q===i.INT&&(m=i.RG32I)),v===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(m=i.RGB8UI),q===i.UNSIGNED_SHORT&&(m=i.RGB16UI),q===i.UNSIGNED_INT&&(m=i.RGB32UI),q===i.BYTE&&(m=i.RGB8I),q===i.SHORT&&(m=i.RGB16I),q===i.INT&&(m=i.RGB32I)),v===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(m=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(m=i.RGBA16UI),q===i.UNSIGNED_INT&&(m=i.RGBA32UI),q===i.BYTE&&(m=i.RGBA8I),q===i.SHORT&&(m=i.RGBA16I),q===i.INT&&(m=i.RGBA32I)),v===i.RGB&&(q===i.UNSIGNED_SHORT&&d&&(m=d.RGB16_EXT),q===i.SHORT&&d&&(m=d.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(m=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(m=i.R11F_G11F_B10F)),v===i.RGBA){let S=L?Js:Jt.getTransfer(st);q===i.FLOAT&&(m=i.RGBA32F),q===i.HALF_FLOAT&&(m=i.RGBA16F),q===i.UNSIGNED_BYTE&&(m=S===ee?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&d&&(m=d.RGBA16_EXT),q===i.SHORT&&d&&(m=d.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(m=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(m=i.RGB5_A1)}return(m===i.R16F||m===i.R32F||m===i.RG16F||m===i.RG32F||m===i.RGBA16F||m===i.RGBA32F)&&t.get("EXT_color_buffer_float"),m}function I(P,v){let q;return P?v===null||v===vn||v===Cs?q=i.DEPTH24_STENCIL8:v===Sn?q=i.DEPTH32F_STENCIL8:v===As&&(q=i.DEPTH24_STENCIL8,Pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===vn||v===Cs?q=i.DEPTH_COMPONENT24:v===Sn?q=i.DEPTH_COMPONENT32F:v===As&&(q=i.DEPTH_COMPONENT16),q}function R(P,v){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==De&&P.minFilter!==Ue?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function F(P){let v=P.target;v.removeEventListener("dispose",F),D(v),v.isVideoTexture&&f.delete(v),v.isHTMLTexture&&h.delete(v)}function M(P){let v=P.target;v.removeEventListener("dispose",M),W(v)}function D(P){let v=n.get(P);if(v.__webglInit===void 0)return;let q=P.source,j=p.get(q);if(j){let st=j[v.__cacheKey];st.usedTimes--,st.usedTimes===0&&k(P),Object.keys(j).length===0&&p.delete(q)}n.remove(P)}function k(P){let v=n.get(P);i.deleteTexture(v.__webglTexture);let q=P.source,j=p.get(q);delete j[v.__cacheKey],o.memory.textures--}function W(P){let v=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let st=0;st<v.__webglFramebuffer[j].length;st++)i.deleteFramebuffer(v.__webglFramebuffer[j][st]);else i.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)i.deleteFramebuffer(v.__webglFramebuffer[j]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let q=P.textures;for(let j=0,st=q.length;j<st;j++){let L=n.get(q[j]);L.__webglTexture&&(i.deleteTexture(L.__webglTexture),o.memory.textures--),n.remove(q[j])}n.remove(P)}let $=0;function tt(){$=0}function G(){return $}function Q(P){$=P}function ot(){let P=$;return P>=s.maxTextures&&Pt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,P}function rt(P){let v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.colorSpace),v.join()}function mt(P,v){let q=n.get(P);if(P.isVideoTexture&&V(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&q.__version!==P.version){let j=P.image;if(j===null)Pt("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Pt("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(q,P,v);return}}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+v)}function it(P,v){let q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){bt(q,P,v);return}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+v)}function at(P,v){let q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){bt(q,P,v);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+v)}function pt(P,v){let q=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&q.__version!==P.version){Ut(q,P,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+v)}let At={[fs]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[po]:i.MIRRORED_REPEAT},Tt={[De]:i.NEAREST,[Wh]:i.NEAREST_MIPMAP_NEAREST,[ur]:i.NEAREST_MIPMAP_LINEAR,[Ue]:i.LINEAR,[Vo]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},jt={[Zh]:i.NEVER,[Qh]:i.ALWAYS,[$h]:i.LESS,[wa]:i.LEQUAL,[Jh]:i.EQUAL,[Ta]:i.GEQUAL,[Kh]:i.GREATER,[jh]:i.NOTEQUAL};function qt(P,v){if(v.type===Sn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ue||v.magFilter===Vo||v.magFilter===ur||v.magFilter===xi||v.minFilter===Ue||v.minFilter===Vo||v.minFilter===ur||v.minFilter===xi)&&Pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,At[v.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,At[v.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,At[v.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Tt[v.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Tt[v.minFilter]),v.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,jt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===De||v.minFilter!==ur&&v.minFilter!==xi||v.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function $t(P,v){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",F));let j=v.source,st=p.get(j);st===void 0&&(st={},p.set(j,st));let L=rt(v);if(L!==P.__cacheKey){st[L]===void 0&&(st[L]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),st[L].usedTimes++;let d=st[P.__cacheKey];d!==void 0&&(st[P.__cacheKey].usedTimes--,d.usedTimes===0&&k(v)),P.__cacheKey=L,P.__webglTexture=st[L].texture}return q}function lt(P,v,q){return Math.floor(Math.floor(P/q)/v)}function ft(P,v,q,j){let L=P.updateRanges;if(L.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,q,j,v.data);else{L.sort((A,O)=>A.start-O.start);let d=0;for(let A=1;A<L.length;A++){let O=L[d],U=L[A],Y=O.start+O.count,X=lt(U.start,v.width,4),dt=lt(O.start,v.width,4);U.start<=Y+1&&X===dt&&lt(U.start+U.count-1,v.width,4)===X?O.count=Math.max(O.count,U.start+U.count-O.start):(++d,L[d]=U)}L.length=d+1;let m=e.getParameter(i.UNPACK_ROW_LENGTH),S=e.getParameter(i.UNPACK_SKIP_PIXELS),T=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let A=0,O=L.length;A<O;A++){let U=L[A],Y=Math.floor(U.start/4),X=Math.ceil(U.count/4),dt=Y%v.width,E=Math.floor(Y/v.width),H=X,B=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),e.pixelStorei(i.UNPACK_SKIP_ROWS,E),e.texSubImage2D(i.TEXTURE_2D,0,dt,E,H,B,q,j,v.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,m),e.pixelStorei(i.UNPACK_SKIP_PIXELS,S),e.pixelStorei(i.UNPACK_SKIP_ROWS,T)}}function bt(P,v,q){let j=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=i.TEXTURE_3D);let st=$t(P,v),L=v.source;e.bindTexture(j,P.__webglTexture,i.TEXTURE0+q);let d=n.get(L);if(L.version!==d.__version||st===!0){if(e.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let B=Jt.getPrimaries(Jt.workingColorSpace),ht=v.colorSpace===Qn?null:Jt.getPrimaries(v.colorSpace),ut=v.colorSpace===Qn||B===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let S=x(v.image,!1,s.maxTextureSize);S=Re(v,S);let T=r.convert(v.format,v.colorSpace),A=r.convert(v.type),O=w(v.internalFormat,T,A,v.normalized,v.colorSpace,v.isVideoTexture);qt(j,v);let U,Y=v.mipmaps,X=v.isVideoTexture!==!0,dt=d.__version===void 0||st===!0,E=L.dataReady,H=R(v,S);if(v.isDepthTexture)O=I(v.format===_i,v.type),dt&&(X?e.texStorage2D(i.TEXTURE_2D,1,O,S.width,S.height):e.texImage2D(i.TEXTURE_2D,0,O,S.width,S.height,0,T,A,null));else if(v.isDataTexture)if(Y.length>0){X&&dt&&e.texStorage2D(i.TEXTURE_2D,H,O,Y[0].width,Y[0].height);for(let B=0,ht=Y.length;B<ht;B++)U=Y[B],X?E&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,U.width,U.height,T,A,U.data):e.texImage2D(i.TEXTURE_2D,B,O,U.width,U.height,0,T,A,U.data);v.generateMipmaps=!1}else X?(dt&&e.texStorage2D(i.TEXTURE_2D,H,O,S.width,S.height),E&&ft(v,S,T,A)):e.texImage2D(i.TEXTURE_2D,0,O,S.width,S.height,0,T,A,S.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){X&&dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,H,O,Y[0].width,Y[0].height,S.depth);for(let B=0,ht=Y.length;B<ht;B++)if(U=Y[B],v.format!==dn)if(T!==null)if(X){if(E)if(v.layerUpdates.size>0){let ut=Kl(U.width,U.height,v.format,v.type);for(let nt of v.layerUpdates){let gt=U.data.subarray(nt*ut/U.data.BYTES_PER_ELEMENT,(nt+1)*ut/U.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,nt,U.width,U.height,1,T,gt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,U.width,U.height,S.depth,T,U.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,B,O,U.width,U.height,S.depth,0,U.data,0,0);else Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?E&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,U.width,U.height,S.depth,T,A,U.data):e.texImage3D(i.TEXTURE_2D_ARRAY,B,O,U.width,U.height,S.depth,0,T,A,U.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{X&&dt&&e.texStorage2D(i.TEXTURE_2D,H,O,Y[0].width,Y[0].height);for(let B=0,ht=Y.length;B<ht;B++)U=Y[B],v.format!==dn?T!==null?X?E&&e.compressedTexSubImage2D(i.TEXTURE_2D,B,0,0,U.width,U.height,T,U.data):e.compressedTexImage2D(i.TEXTURE_2D,B,O,U.width,U.height,0,U.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?E&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,U.width,U.height,T,A,U.data):e.texImage2D(i.TEXTURE_2D,B,O,U.width,U.height,0,T,A,U.data)}else if(v.isDataArrayTexture)if(X){if(dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,H,O,S.width,S.height,S.depth),E)if(v.layerUpdates.size>0){let B=Kl(S.width,S.height,v.format,v.type);for(let ht of v.layerUpdates){let ut=S.data.subarray(ht*B/S.data.BYTES_PER_ELEMENT,(ht+1)*B/S.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,S.width,S.height,1,T,A,ut)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,S.width,S.height,S.depth,T,A,S.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,O,S.width,S.height,S.depth,0,T,A,S.data);else if(v.isData3DTexture)X?(dt&&e.texStorage3D(i.TEXTURE_3D,H,O,S.width,S.height,S.depth),E&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,S.width,S.height,S.depth,T,A,S.data)):e.texImage3D(i.TEXTURE_3D,0,O,S.width,S.height,S.depth,0,T,A,S.data);else if(v.isFramebufferTexture){if(dt)if(X)e.texStorage2D(i.TEXTURE_2D,H,O,S.width,S.height);else{let B=S.width,ht=S.height;for(let ut=0;ut<H;ut++)e.texImage2D(i.TEXTURE_2D,ut,O,B,ht,0,T,A,null),B>>=1,ht>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let B=i.canvas;if(B.hasAttribute("layoutsubtree")||B.setAttribute("layoutsubtree","true"),S.parentNode!==B){B.appendChild(S),h.add(v),B.onpaint=ht=>{let ut=ht.changedElements;for(let nt of h)ut.includes(nt.image)&&(nt.needsUpdate=!0)},B.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,S);else{let ut=i.RGBA,nt=i.RGBA,gt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ut,nt,gt,S)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Y.length>0){if(X&&dt){let B=Vt(Y[0]);e.texStorage2D(i.TEXTURE_2D,H,O,B.width,B.height)}for(let B=0,ht=Y.length;B<ht;B++)U=Y[B],X?E&&e.texSubImage2D(i.TEXTURE_2D,B,0,0,T,A,U):e.texImage2D(i.TEXTURE_2D,B,O,T,A,U);v.generateMipmaps=!1}else if(X){if(dt){let B=Vt(S);e.texStorage2D(i.TEXTURE_2D,H,O,B.width,B.height)}E&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,T,A,S)}else e.texImage2D(i.TEXTURE_2D,0,O,T,A,S);g(v)&&C(j),d.__version=L.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function Ut(P,v,q){if(v.image.length!==6)return;let j=$t(P,v),st=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+q);let L=n.get(st);if(st.version!==L.__version||j===!0){e.activeTexture(i.TEXTURE0+q);let d=Jt.getPrimaries(Jt.workingColorSpace),m=v.colorSpace===Qn?null:Jt.getPrimaries(v.colorSpace),S=v.colorSpace===Qn||d===m?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,S);let T=v.isCompressedTexture||v.image[0].isCompressedTexture,A=v.image[0]&&v.image[0].isDataTexture,O=[];for(let nt=0;nt<6;nt++)!T&&!A?O[nt]=x(v.image[nt],!0,s.maxCubemapSize):O[nt]=A?v.image[nt].image:v.image[nt],O[nt]=Re(v,O[nt]);let U=O[0],Y=r.convert(v.format,v.colorSpace),X=r.convert(v.type),dt=w(v.internalFormat,Y,X,v.normalized,v.colorSpace),E=v.isVideoTexture!==!0,H=L.__version===void 0||j===!0,B=st.dataReady,ht=R(v,U);qt(i.TEXTURE_CUBE_MAP,v);let ut;if(T){E&&H&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,dt,U.width,U.height);for(let nt=0;nt<6;nt++){ut=O[nt].mipmaps;for(let gt=0;gt<ut.length;gt++){let xt=ut[gt];v.format!==dn?Y!==null?E?B&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,0,0,xt.width,xt.height,Y,xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,dt,xt.width,xt.height,0,xt.data):Pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):E?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,0,0,xt.width,xt.height,Y,X,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt,dt,xt.width,xt.height,0,Y,X,xt.data)}}}else{if(ut=v.mipmaps,E&&H){ut.length>0&&ht++;let nt=Vt(O[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,dt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(A){E?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,O[nt].width,O[nt].height,Y,X,O[nt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,dt,O[nt].width,O[nt].height,0,Y,X,O[nt].data);for(let gt=0;gt<ut.length;gt++){let Bt=ut[gt].image[nt].image;E?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,0,0,Bt.width,Bt.height,Y,X,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,dt,Bt.width,Bt.height,0,Y,X,Bt.data)}}else{E?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Y,X,O[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,dt,Y,X,O[nt]);for(let gt=0;gt<ut.length;gt++){let xt=ut[gt];E?B&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,0,0,Y,X,xt.image[nt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,gt+1,dt,Y,X,xt.image[nt])}}}g(v)&&C(i.TEXTURE_CUBE_MAP),L.__version=st.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function Mt(P,v,q,j,st,L){let d=r.convert(q.format,q.colorSpace),m=r.convert(q.type),S=w(q.internalFormat,d,m,q.normalized,q.colorSpace),T=n.get(v),A=n.get(q);if(A.__renderTarget=v,!T.__hasExternalTextures){let O=Math.max(1,v.width>>L),U=Math.max(1,v.height>>L);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,L,S,O,U,v.depth,0,d,m,null):e.texImage2D(st,L,S,O,U,0,d,m,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),ge(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,st,A.__webglTexture,0,he(v)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,st,A.__webglTexture,L),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(P,v,q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),v.depthBuffer){let j=v.depthTexture,st=j&&j.isDepthTexture?j.type:null,L=I(v.stencilBuffer,st),d=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ge(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(v),L,v.width,v.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(v),L,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,L,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,d,i.RENDERBUFFER,P)}else{let j=v.textures;for(let st=0;st<j.length;st++){let L=j[st],d=r.convert(L.format,L.colorSpace),m=r.convert(L.type),S=w(L.internalFormat,d,m,L.normalized,L.colorSpace);ge(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,he(v),S,v.width,v.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,he(v),S,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,S,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(P,v,q){let j=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=n.get(v.depthTexture);if(st.__renderTarget=v,(!st.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j){if(st.__webglInit===void 0&&(st.__webglInit=!0,v.depthTexture.addEventListener("dispose",F)),st.__webglTexture===void 0){st.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),qt(i.TEXTURE_CUBE_MAP,v.depthTexture);let T=r.convert(v.depthTexture.format),A=r.convert(v.depthTexture.type),O;v.depthTexture.format===Pn?O=i.DEPTH_COMPONENT24:v.depthTexture.format===_i&&(O=i.DEPTH24_STENCIL8);for(let U=0;U<6;U++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0,O,v.width,v.height,0,T,A,null)}}else mt(v.depthTexture,0);let L=st.__webglTexture,d=he(v),m=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,S=v.depthTexture.format===_i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Pn)ge(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,S,m,L,0,d):i.framebufferTexture2D(i.FRAMEBUFFER,S,m,L,0);else if(v.depthTexture.format===_i)ge(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,S,m,L,0,d):i.framebufferTexture2D(i.FRAMEBUFFER,S,m,L,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ft(P){let v=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==P.depthTexture){let j=P.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){let st=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",st)};j.addEventListener("dispose",st),v.__depthDisposeCallback=st}v.__boundDepthTexture=j}if(P.depthTexture&&!v.__autoAllocateDepthBuffer)if(q)for(let j=0;j<6;j++)_e(v.__webglFramebuffer[j],P,j);else{let j=P.texture.mipmaps;j&&j.length>0?_e(v.__webglFramebuffer[0],P,0):_e(v.__webglFramebuffer,P,0)}else if(q){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=i.createRenderbuffer(),Lt(v.__webglDepthbuffer[j],P,!1);else{let st=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=v.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,L),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,L)}}else{let j=P.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Lt(v.__webglDepthbuffer,P,!1);else{let st=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,L=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,L),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,L)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(P,v,q){let j=n.get(P);v!==void 0&&Mt(j.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Ft(P)}function ie(P){let v=P.texture,q=n.get(P),j=n.get(v);P.addEventListener("dispose",M);let st=P.textures,L=P.isWebGLCubeRenderTarget===!0,d=st.length>1;if(d||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=v.version,o.memory.textures++),L){q.__webglFramebuffer=[];for(let m=0;m<6;m++)if(v.mipmaps&&v.mipmaps.length>0){q.__webglFramebuffer[m]=[];for(let S=0;S<v.mipmaps.length;S++)q.__webglFramebuffer[m][S]=i.createFramebuffer()}else q.__webglFramebuffer[m]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){q.__webglFramebuffer=[];for(let m=0;m<v.mipmaps.length;m++)q.__webglFramebuffer[m]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(d)for(let m=0,S=st.length;m<S;m++){let T=n.get(st[m]);T.__webglTexture===void 0&&(T.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&ge(P)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let m=0;m<st.length;m++){let S=st[m];q.__webglColorRenderbuffer[m]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[m]);let T=r.convert(S.format,S.colorSpace),A=r.convert(S.type),O=w(S.internalFormat,T,A,S.normalized,S.colorSpace,P.isXRRenderTarget===!0),U=he(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,U,O,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+m,i.RENDERBUFFER,q.__webglColorRenderbuffer[m])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(q.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(L){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),qt(i.TEXTURE_CUBE_MAP,v);for(let m=0;m<6;m++)if(v.mipmaps&&v.mipmaps.length>0)for(let S=0;S<v.mipmaps.length;S++)Mt(q.__webglFramebuffer[m][S],P,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+m,S);else Mt(q.__webglFramebuffer[m],P,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+m,0);g(v)&&C(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(d){for(let m=0,S=st.length;m<S;m++){let T=st[m],A=n.get(T),O=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(O=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(O,A.__webglTexture),qt(O,T),Mt(q.__webglFramebuffer,P,T,i.COLOR_ATTACHMENT0+m,O,0),g(T)&&C(O)}e.unbindTexture()}else{let m=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(m=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(m,j.__webglTexture),qt(m,v),v.mipmaps&&v.mipmaps.length>0)for(let S=0;S<v.mipmaps.length;S++)Mt(q.__webglFramebuffer[S],P,v,i.COLOR_ATTACHMENT0,m,S);else Mt(q.__webglFramebuffer,P,v,i.COLOR_ATTACHMENT0,m,0);g(v)&&C(m),e.unbindTexture()}P.depthBuffer&&Ft(P)}function Wt(P){let v=P.textures;for(let q=0,j=v.length;q<j;q++){let st=v[q];if(g(st)){let L=N(P),d=n.get(st).__webglTexture;e.bindTexture(L,d),C(L),e.unbindTexture()}}}let ne=[],ye=[];function Oe(P){if(P.samples>0){if(ge(P)===!1){let v=P.textures,q=P.width,j=P.height,st=i.COLOR_BUFFER_BIT,L=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,d=n.get(P),m=v.length>1;if(m)for(let T=0;T<v.length;T++)e.bindFramebuffer(i.FRAMEBUFFER,d.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+T,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,d.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+T,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,d.__webglMultisampledFramebuffer);let S=P.texture.mipmaps;S&&S.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,d.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,d.__webglFramebuffer);for(let T=0;T<v.length;T++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),m){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,d.__webglColorRenderbuffer[T]);let A=n.get(v[T]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,A,0)}i.blitFramebuffer(0,0,q,j,0,0,q,j,st,i.NEAREST),l===!0&&(ne.length=0,ye.length=0,ne.push(i.COLOR_ATTACHMENT0+T),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(ne.push(L),ye.push(L),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ye)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),m)for(let T=0;T<v.length;T++){e.bindFramebuffer(i.FRAMEBUFFER,d.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+T,i.RENDERBUFFER,d.__webglColorRenderbuffer[T]);let A=n.get(v[T]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,d.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+T,i.TEXTURE_2D,A,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,d.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let v=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function he(P){return Math.min(s.maxSamples,P.samples)}function ge(P){let v=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function V(P){let v=o.render.frame;f.get(P)!==v&&(f.set(P,v),P.update())}function Re(P,v){let q=P.colorSpace,j=P.format,st=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==$s&&q!==Qn&&(Jt.getTransfer(q)===ee?(j!==dn||st!==Qe)&&Pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",q)),v}function Vt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=ot,this.resetTextureUnits=tt,this.getTextureUnits=G,this.setTextureUnits=Q,this.setTexture2D=mt,this.setTexture2DArray=it,this.setTexture3D=at,this.setTextureCube=pt,this.rebindTextures=Kt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=ge,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ox(i,t){function e(n,s=Qn){let r,o=Jt.getTransfer(s);if(n===Qe)return i.UNSIGNED_BYTE;if(n===Ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bl)return i.BYTE;if(n===zl)return i.SHORT;if(n===As)return i.UNSIGNED_SHORT;if(n===Go)return i.INT;if(n===vn)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===Gl)return i.ALPHA;if(n===Hl)return i.RGB;if(n===dn)return i.RGBA;if(n===Pn)return i.DEPTH_COMPONENT;if(n===_i)return i.DEPTH_STENCIL;if(n===Wl)return i.RED;if(n===Xo)return i.RED_INTEGER;if(n===yi)return i.RG;if(n===qo)return i.RG_INTEGER;if(n===Yo)return i.RGBA_INTEGER;if(n===fr||n===dr||n===pr||n===mr)if(o===ee)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zo||n===$o||n===Jo||n===Ko)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jo||n===Qo||n===ta||n===ea||n===na||n===gr||n===ia)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jo||n===Qo)return o===ee?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ta)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ea)return r.COMPRESSED_R11_EAC;if(n===na)return r.COMPRESSED_SIGNED_R11_EAC;if(n===gr)return r.COMPRESSED_RG11_EAC;if(n===ia)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===fa||n===da||n===pa||n===ma||n===ga||n===xa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ra)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===aa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===la)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ca)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ha)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ua)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===da)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ma)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ga)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xa)return o===ee?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_a||n===ya||n===va)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_a)return o===ee?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sa||n===Ma||n===xr||n===ba)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ba)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ax=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lx=`
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

}`,uc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ir(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new on({vertexShader:ax,fragmentShader:lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new we(new Un(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fc=class extends Ln{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,u=null,p=null,_=null,y=typeof XRWebGLBinding<"u",x=new uc,g={},C=e.getContextAttributes(),N=null,w=null,I=[],R=[],F=new Xt,M=null,D=null,k=new Ke;k.viewport=new me;let W=new Ke;W.viewport=new me;let $=[k,W],tt=new Bo,G=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(lt){let ft=I[lt];return ft===void 0&&(ft=new _s,I[lt]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(lt){let ft=I[lt];return ft===void 0&&(ft=new _s,I[lt]=ft),ft.getGripSpace()},this.getHand=function(lt){let ft=I[lt];return ft===void 0&&(ft=new _s,I[lt]=ft),ft.getHandSpace()};function ot(lt){let ft=R.indexOf(lt.inputSource);if(ft===-1)return;let bt=I[ft];bt!==void 0&&(bt.update(lt.inputSource,lt.frame,c||o),bt.dispatchEvent({type:lt.type,data:lt.inputSource}))}function rt(){s.removeEventListener("select",ot),s.removeEventListener("selectstart",ot),s.removeEventListener("selectend",ot),s.removeEventListener("squeeze",ot),s.removeEventListener("squeezestart",ot),s.removeEventListener("squeezeend",ot),s.removeEventListener("end",rt),s.removeEventListener("inputsourceschange",mt);for(let lt=0;lt<I.length;lt++){let ft=R[lt];ft!==null&&(R[lt]=null,I[lt].disconnect(ft))}G=null,Q=null,x.reset();for(let lt in g)delete g[lt];if(t.setRenderTarget(N),p=null,u=null,h=null,s=null,w=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(F.width,F.height,!1),D!==null){let lt=D.camera;lt.fov=D.fov,lt.zoom=D.zoom,lt.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(lt){r=lt,n.isPresenting===!0&&Pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(lt){a=lt,n.isPresenting===!0&&Pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(lt){c=lt},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(lt){if(s=lt,s!==null){if(N=t.getRenderTarget(),s.addEventListener("select",ot),s.addEventListener("selectstart",ot),s.addEventListener("selectend",ot),s.addEventListener("squeeze",ot),s.addEventListener("squeezestart",ot),s.addEventListener("squeezeend",ot),s.addEventListener("end",rt),s.addEventListener("inputsourceschange",mt),C.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(F),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ut=null,Mt=null;C.depth&&(Mt=C.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=C.stencil?_i:Pn,Ut=C.stencil?Cs:vn);let Lt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};h=this.getBinding(),u=h.createProjectionLayer(Lt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),w=new je(u.textureWidth,u.textureHeight,{format:dn,type:Qe,depthTexture:new ui(u.textureWidth,u.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:C.stencil,colorSpace:t.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let bt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new je(p.framebufferWidth,p.framebufferHeight,{format:dn,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function mt(lt){for(let ft=0;ft<lt.removed.length;ft++){let bt=lt.removed[ft],Ut=R.indexOf(bt);Ut>=0&&(R[Ut]=null,I[Ut].disconnect(bt))}for(let ft=0;ft<lt.added.length;ft++){let bt=lt.added[ft],Ut=R.indexOf(bt);if(Ut===-1){for(let Lt=0;Lt<I.length;Lt++)if(Lt>=R.length){R.push(bt),Ut=Lt;break}else if(R[Lt]===null){R[Lt]=bt,Ut=Lt;break}if(Ut===-1)break}let Mt=I[Ut];Mt&&Mt.connect(bt)}}let it=new Z,at=new Z;function pt(lt,ft,bt){it.setFromMatrixPosition(ft.matrixWorld),at.setFromMatrixPosition(bt.matrixWorld);let Ut=it.distanceTo(at),Mt=ft.projectionMatrix.elements,Lt=bt.projectionMatrix.elements,_e=Mt[14]/(Mt[10]-1),Ft=Mt[14]/(Mt[10]+1),Kt=(Mt[9]+1)/Mt[5],ie=(Mt[9]-1)/Mt[5],Wt=(Mt[8]-1)/Mt[0],ne=(Lt[8]+1)/Lt[0],ye=_e*Wt,Oe=_e*ne,he=Ut/(-Wt+ne),ge=he*-Wt;if(ft.matrixWorld.decompose(lt.position,lt.quaternion,lt.scale),lt.translateX(ge),lt.translateZ(he),lt.matrixWorld.compose(lt.position,lt.quaternion,lt.scale),lt.matrixWorldInverse.copy(lt.matrixWorld).invert(),Mt[10]===-1)lt.projectionMatrix.copy(ft.projectionMatrix),lt.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{let V=_e+he,Re=Ft+he,Vt=ye-ge,P=Oe+(Ut-ge),v=Kt*Ft/Re*V,q=ie*Ft/Re*V;lt.projectionMatrix.makePerspective(Vt,P,v,q,V,Re),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert()}}function At(lt,ft){ft===null?lt.matrixWorld.copy(lt.matrix):lt.matrixWorld.multiplyMatrices(ft.matrixWorld,lt.matrix),lt.matrixWorldInverse.copy(lt.matrixWorld).invert()}this.updateCamera=function(lt){if(s===null)return;let ft=lt.near,bt=lt.far;x.texture!==null&&(x.depthNear>0&&(ft=x.depthNear),x.depthFar>0&&(bt=x.depthFar)),tt.near=W.near=k.near=ft,tt.far=W.far=k.far=bt,(G!==tt.near||Q!==tt.far)&&(s.updateRenderState({depthNear:tt.near,depthFar:tt.far}),G=tt.near,Q=tt.far),tt.layers.mask=lt.layers.mask|6,k.layers.mask=tt.layers.mask&-5,W.layers.mask=tt.layers.mask&-3;let Ut=lt.parent,Mt=tt.cameras;At(tt,Ut);for(let Lt=0;Lt<Mt.length;Lt++)At(Mt[Lt],Ut);Mt.length===2?pt(tt,k,W):tt.projectionMatrix.copy(k.projectionMatrix),D===null&&lt.isPerspectiveCamera&&(D={camera:lt,fov:lt.fov,zoom:lt.zoom}),Tt(lt,tt,Ut)};function Tt(lt,ft,bt){bt===null?lt.matrix.copy(ft.matrixWorld):(lt.matrix.copy(bt.matrixWorld),lt.matrix.invert(),lt.matrix.multiply(ft.matrixWorld)),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.updateMatrixWorld(!0),lt.projectionMatrix.copy(ft.projectionMatrix),lt.projectionMatrixInverse.copy(ft.projectionMatrixInverse),lt.isPerspectiveCamera&&(lt.fov=ms*2*Math.atan(1/lt.projectionMatrix.elements[5]),lt.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(lt){l=lt,u!==null&&(u.fixedFoveation=lt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=lt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(tt)},this.getCameraTexture=function(lt){return g[lt]};let jt=null;function qt(lt,ft){if(f=ft.getViewerPose(c||o),_=ft,f!==null){let bt=f.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let Ut=!1;bt.length!==tt.cameras.length&&(tt.cameras.length=0,Ut=!0);for(let Ft=0;Ft<bt.length;Ft++){let Kt=bt[Ft],ie=null;if(p!==null)ie=p.getViewport(Kt);else{let ne=h.getViewSubImage(u,Kt);ie=ne.viewport,Ft===0&&(t.setRenderTargetTextures(w,ne.colorTexture,ne.depthStencilTexture),t.setRenderTarget(w))}let Wt=$[Ft];Wt===void 0&&(Wt=new Ke,Wt.layers.enable(Ft),Wt.viewport=new me,$[Ft]=Wt),Wt.matrix.fromArray(Kt.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Kt.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(ie.x,ie.y,ie.width,ie.height),Ft===0&&(tt.matrix.copy(Wt.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),Ut===!0&&tt.cameras.push(Wt)}let Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let Ft=h.getDepthInformation(bt[0]);Ft&&Ft.isValid&&Ft.texture&&x.init(Ft,s.renderState)}if(Mt&&Mt.includes("camera-access")&&y){t.state.unbindTexture(),h=n.getBinding();for(let Ft=0;Ft<bt.length;Ft++){let Kt=bt[Ft].camera;if(Kt){let ie=g[Kt];ie||(ie=new ir,g[Kt]=ie);let Wt=h.getCameraImage(Kt);ie.sourceTexture=Wt}}}}for(let bt=0;bt<I.length;bt++){let Ut=R[bt],Mt=I[bt];Ut!==null&&Mt!==void 0&&Mt.update(Ut,ft,c||o)}jt&&jt(lt,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),_=null}let $t=new Iu;$t.setAnimationLoop(qt),this.setAnimationLoop=function(lt){jt=lt},this.dispose=function(){}}},cx=new de,Fu=new Ot;Fu.set(-1,0,0,0,1,0,0,0,1);function hx(i,t){function e(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,Zl(i)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function s(x,g,C,N,w){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(x,g):g.isMeshLambertMaterial?(r(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(x,g),h(x,g)):g.isMeshPhongMaterial?(r(x,g),f(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(x,g),u(x,g),g.isMeshPhysicalMaterial&&p(x,g,w)):g.isMeshMatcapMaterial?(r(x,g),_(x,g)):g.isMeshDepthMaterial?r(x,g):g.isMeshDistanceMaterial?(r(x,g),y(x,g)):g.isMeshNormalMaterial?r(x,g):g.isLineBasicMaterial?(o(x,g),g.isLineDashedMaterial&&a(x,g)):g.isPointsMaterial?l(x,g,C,N):g.isSpriteMaterial?c(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,e(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Fe&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,e(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Fe&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,e(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,e(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);let C=t.get(g),N=C.envMap,w=C.envMapRotation;N&&(x.envMap.value=N,x.envMapRotation.value.setFromMatrix4(cx.makeRotationFromEuler(w)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Fu),x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,x.aoMapTransform))}function o(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform))}function a(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function l(x,g,C,N){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*C,x.scale.value=N*.5,g.map&&(x.map.value=g.map,e(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function c(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function f(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function h(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function u(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function p(x,g,C){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Fe&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.retroreflectivity>0&&(x.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,x.specularIntensityMapTransform))}function _(x,g){g.matcap&&(x.matcap.value=g.matcap)}function y(x,g){let C=t.get(g).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ux(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,I){let R=I.program;n.uniformBlockBinding(w,R)}function c(w,I){let R=s[w.id];R===void 0&&(x(w),R=f(w),s[w.id]=R,w.addEventListener("dispose",C));let F=I.program;n.updateUBOMapping(w,F);let M=t.render.frame;r[w.id]!==M&&(u(w),r[w.id]=M)}function f(w){let I=h();w.__bindingPointIndex=I;let R=i.createBuffer(),F=w.__size,M=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,F,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,R),R}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){let I=s[w.id],R=w.uniforms,F=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let M=0,D=R.length;M<D;M++){let k=R[M];if(Array.isArray(k))for(let W=0,$=k.length;W<$;W++)p(k[W],M,W,F);else p(k,M,0,F)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,I,R,F){if(y(w,I,R,F)===!0){let M=w.__offset,D=w.value;if(Array.isArray(D)){let k=0;for(let W=0;W<D.length;W++){let $=D[W],tt=g($);_($,w.__data,k),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(k+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(D,w.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,M,w.__data)}}function _(w,I,R){typeof w=="number"||typeof w=="boolean"?I[0]=w:w.isMatrix3?(I[0]=w.elements[0],I[1]=w.elements[1],I[2]=w.elements[2],I[3]=0,I[4]=w.elements[3],I[5]=w.elements[4],I[6]=w.elements[5],I[7]=0,I[8]=w.elements[6],I[9]=w.elements[7],I[10]=w.elements[8],I[11]=0):ArrayBuffer.isView(w)?I.set(new w.constructor(w.buffer,w.byteOffset,I.length)):w.toArray(I,R)}function y(w,I,R,F){let M=w.value,D=I+"_"+R;if(F[D]===void 0)return typeof M=="number"||typeof M=="boolean"?F[D]=M:ArrayBuffer.isView(M)?F[D]=M.slice():F[D]=M.clone(),!0;{let k=F[D];if(typeof M=="number"||typeof M=="boolean"){if(k!==M)return F[D]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(k.equals(M)===!1)return k.copy(M),!0}}return!1}function x(w){let I=w.uniforms,R=0,F=16;for(let D=0,k=I.length;D<k;D++){let W=Array.isArray(I[D])?I[D]:[I[D]];for(let $=0,tt=W.length;$<tt;$++){let G=W[$],Q=Array.isArray(G.value)?G.value:[G.value];for(let ot=0,rt=Q.length;ot<rt;ot++){let mt=Q[ot],it=g(mt),at=R%F,pt=at%it.boundary,At=at+pt;R+=pt,At!==0&&F-At<it.storage&&(R+=F-At),G.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=R,R+=it.storage}}}let M=R%F;return M>0&&(R+=F-M),w.__size=R,w.__cache={},this}function g(w){let I={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(I.boundary=4,I.storage=4):w.isVector2?(I.boundary=8,I.storage=8):w.isVector3||w.isColor?(I.boundary=16,I.storage=12):w.isVector4?(I.boundary=16,I.storage=16):w.isMatrix3?(I.boundary=48,I.storage=48):w.isMatrix4?(I.boundary=64,I.storage=64):w.isTexture?Pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(I.boundary=16,I.storage=w.byteLength):Pt("WebGLRenderer: Unsupported uniform value type.",w),I}function C(w){let I=w.target;I.removeEventListener("dispose",C);let R=o.indexOf(I.__bindingPointIndex);o.splice(R,1),i.deleteBuffer(s[I.id]),delete s[I.id],delete r[I.id]}function N(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:N}}var fx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bn=null;function dx(){return Bn===null&&(Bn=new yo(fx,16,16,yi,Mn),Bn.name="DFG_LUT",Bn.minFilter=Ue,Bn.magFilter=Ue,Bn.wrapS=Rn,Bn.wrapT=Rn,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}var Sr=class{constructor(t={}){let{canvas:e=eu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Qe}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let y=p,x=new Set([Yo,qo,Xo]),g=new Set([Qe,vn,As,Cs,Ho,Wo]),C=new Uint32Array(4),N=new Int32Array(4),w=new Z,I=null,R=null,F=[],M=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,W=!1,$=null,tt=null,G=null,Q=null;this._outputColorSpace=Ee;let ot=0,rt=0,mt=null,it=-1,at=null,pt=new me,At=new me,Tt=null,jt=new zt(0),qt=0,$t=e.width,lt=e.height,ft=1,bt=null,Ut=null,Mt=new me(0,0,$t,lt),Lt=new me(0,0,$t,lt),_e=!1,Ft=new Ss,Kt=!1,ie=!1,Wt=new de,ne=new Z,ye=new me,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},he=!1;function ge(){return mt===null?ft:1}let V=n;function Re(b,z){return e.getContext(b,z)}let Vt,P,v,q,j,st,L,d,m,S,T,A,O,U,Y,X,dt,E,H,B,ht,ut,nt;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Bt,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",se,!1),V===null){let z="webgl2";if(V=Re(z,b),V===null)throw Re(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}gt()}catch(b){throw e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",se,!1),Nt("WebGLRenderer: "+b.message),b}function gt(){Vt=new vg(V),Vt.init(),ht=new ox(V,Vt),P=new hg(V,Vt,t,ht),v=new sx(V,Vt),P.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),tt=V.createFramebuffer(),G=V.createFramebuffer(),Q=V.createFramebuffer(),q=new bg(V),j=new W0,st=new rx(V,Vt,v,j,P,ht,q),L=new yg(k),d=new wd(V),ut=new lg(V,d),m=new Sg(V,d,q,ut),S=new wg(V,m,d,ut,q),E=new Eg(V,P,st),Y=new ug(j),T=new H0(k,L,Vt,P,ut,Y),A=new hx(k,j),O=new q0,U=new j0(Vt),dt=new ag(k,L,v,S,_,l),X=new ix(k,S,P),nt=new ux(V,q,P,v),H=new cg(V,Vt,q),B=new Mg(V,Vt,q),q.programs=T.programs,k.capabilities=P,k.extensions=Vt,k.properties=j,k.renderLists=O,k.shadowMap=X,k.state=v,k.info=q}y!==Qe&&(D=new Ag(y,e.width,e.height,a,s,r));let xt=new fc(k,V);this.xr=xt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let b=Vt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Vt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ft},this.setPixelRatio=function(b){b!==void 0&&(ft=b,this.setSize($t,lt,!1))},this.getSize=function(b){return b.set($t,lt)},this.setSize=function(b,z,et=!0){if(xt.isPresenting){Pt("WebGLRenderer: Can't change size while VR device is presenting.");return}$t=b,lt=z,e.width=Math.floor(b*ft),e.height=Math.floor(z*ft),et===!0&&(e.style.width=b+"px",e.style.height=z+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set($t*ft,lt*ft).floor()},this.setDrawingBufferSize=function(b,z,et){$t=b,lt=z,ft=et,e.width=Math.floor(b*et),e.height=Math.floor(z*et),this.setViewport(0,0,b,z)},this.setEffects=function(b){if(y===Qe){Nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let z=0;z<b.length;z++)if(b[z].isOutputPass===!0){Pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(pt)},this.getViewport=function(b){return b.copy(Mt)},this.setViewport=function(b,z,et,J){b.isVector4?Mt.set(b.x,b.y,b.z,b.w):Mt.set(b,z,et,J),v.viewport(pt.copy(Mt).multiplyScalar(ft).round())},this.getScissor=function(b){return b.copy(Lt)},this.setScissor=function(b,z,et,J){b.isVector4?Lt.set(b.x,b.y,b.z,b.w):Lt.set(b,z,et,J),v.scissor(At.copy(Lt).multiplyScalar(ft).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(b){v.setScissorTest(_e=b)},this.setOpaqueSort=function(b){bt=b},this.setTransparentSort=function(b){Ut=b},this.getClearColor=function(b){return b.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(b=!0,z=!0,et=!0){let J=0;if(b){let K=!1;if(mt!==null){let St=mt.texture.format;K=x.has(St)}if(K){let St=mt.texture.type,wt=g.has(St),vt=dt.getClearColor(),Ct=dt.getClearAlpha(),It=vt.r,Gt=vt.g,Yt=vt.b;wt?(C[0]=It,C[1]=Gt,C[2]=Yt,C[3]=Ct,V.clearBufferuiv(V.COLOR,0,C)):(N[0]=It,N[1]=Gt,N[2]=Yt,N[3]=Ct,V.clearBufferiv(V.COLOR,0,N))}else J|=V.COLOR_BUFFER_BIT}z&&(J|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),et&&(J|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&V.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),$=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Bt,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",se,!1),dt.dispose(),O.dispose(),U.dispose(),j.dispose(),L.dispose(),S.dispose(),ut.dispose(),nt.dispose(),T.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",Je),xt.removeEventListener("sessionend",ln),en.stop()};function Bt(b){b.preventDefault(),ql("WebGLRenderer: Context Lost."),W=!0}function Dt(){ql("WebGLRenderer: Context Restored."),W=!1;let b=q.autoReset,z=X.enabled,et=X.autoUpdate,J=X.needsUpdate,K=X.type;gt(),q.autoReset=b,X.enabled=z,X.autoUpdate=et,X.needsUpdate=J,X.type=K}function se(b){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ae(b){let z=b.target;z.removeEventListener("dispose",ae),Ze(z)}function Ze(b){Ie(b),j.remove(b)}function Ie(b){let z=j.get(b).programs;z!==void 0&&(z.forEach(function(et){T.releaseProgram(et)}),b.isShaderMaterial&&T.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,et,J,K,St){z===null&&(z=Oe);let wt=K.isMesh&&K.matrixWorld.determinantAffine()<0,vt=xf(b,z,et,J,K);v.setMaterial(J,wt);let Ct=et.index,It=1;if(J.wireframe===!0){if(Ct=m.getWireframeAttribute(et),Ct===void 0)return;It=2}let Gt=et.drawRange,Yt=et.attributes.position,Rt=Gt.start*It,te=(Gt.start+Gt.count)*It;St!==null&&(Rt=Math.max(Rt,St.start*It),te=Math.min(te,(St.start+St.count)*It)),Ct!==null?(Rt=Math.max(Rt,0),te=Math.min(te,Ct.count)):Yt!=null&&(Rt=Math.max(Rt,0),te=Math.min(te,Yt.count));let Me=te-Rt;if(Me<0||Me===1/0)return;ut.setup(K,J,vt,et,Ct);let ue,le=H;if(Ct!==null&&(ue=d.get(Ct),le=B,le.setIndex(ue)),K.isMesh)J.wireframe===!0?(v.setLineWidth(J.wireframeLinewidth*ge()),le.setMode(V.LINES)):le.setMode(V.TRIANGLES);else if(K.isLine){let Be=J.linewidth;Be===void 0&&(Be=1),v.setLineWidth(Be*ge()),K.isLineSegments?le.setMode(V.LINES):K.isLineLoop?le.setMode(V.LINE_LOOP):le.setMode(V.LINE_STRIP)}else K.isPoints?le.setMode(V.POINTS):K.isSprite&&le.setMode(V.TRIANGLES);if(K.isBatchedMesh)if(Vt.get("WEBGL_multi_draw"))le.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Be=K._multiDrawStarts,Et=K._multiDrawCounts,We=K._multiDrawCount,Qt=Ct?d.get(Ct).bytesPerElement:1,cn=j.get(J).currentProgram.getUniforms();for(let An=0;An<We;An++)cn.setValue(V,"_gl_DrawID",An),le.render(Be[An]/Qt,Et[An])}else if(K.isInstancedMesh)le.renderInstances(Rt,Me,K.count);else if(et.isInstancedBufferGeometry){let Be=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,Et=Math.min(et.instanceCount,Be);le.renderInstances(Rt,Me,Et)}else le.render(Rt,Me)};function $e(b,z,et,J){$!==null&&b.isNodeMaterial&&$.setObject(J,b),Kt===!0&&Y.setState(b,et,!1),b.transparent===!0&&b.side===fn&&b.forceSinglePass===!1?(b.side=Fe,b.needsUpdate=!0,Ur(b,z,J),b.side=Fn,b.needsUpdate=!0,Ur(b,z,J),b.side=fn):Ur(b,z,J)}this.compile=function(b,z,et=null){et===null&&(et=b),$!==null&&$.renderStart(b,z,et),R=U.get(et),R.init(z),M.push(R),et.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(R.pushLight(K),K.castShadow&&R.pushShadow(K))}),b!==et&&b.traverseVisible(function(K){K.isLight&&K.layers.test(z.layers)&&(R.pushLight(K),K.castShadow&&R.pushShadow(K))}),R.setupLights(),$!==null&&$.updateLights(R.state.lightsArray),ie=this.localClippingEnabled,Kt=Y.init(this.clippingPlanes,ie),Kt===!0&&Y.setGlobalState(this.clippingPlanes,z),$!==null&&X.render(R.state.shadowsArray,et,z);let J=new Set;return b.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let St=K.material;if(St)if(Array.isArray(St))for(let wt=0;wt<St.length;wt++){let vt=St[wt];$e(vt,et,z,K),J.add(vt)}else $e(St,et,z,K),J.add(St)}),R=M.pop(),$!==null&&$.renderEnd(),J},this.compileAsync=function(b,z,et=null){let J=this.compile(b,z,et);return new Promise(K=>{function St(){if(J.forEach(function(wt){let Ct=j.get(wt).currentProgram;(Ct===void 0||Ct.isReady())&&J.delete(wt)}),J.size===0){K(b);return}setTimeout(St,10)}Vt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let He=null;function tn(b){He&&He(b)}function Je(){en.stop()}function ln(){en.start()}let en=new Iu;en.setAnimationLoop(tn),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(b){He=b,xt.setAnimationLoop(b),b===null?en.stop():en.start()},xt.addEventListener("sessionstart",Je),xt.addEventListener("sessionend",ln),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;$!==null&&$.renderStart(b,z);let et=xt.enabled===!0&&xt.isPresenting===!0,J=D!==null&&(mt===null||et)&&D.begin(k,mt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(z),z=xt.getCamera()),b.isScene===!0&&b.onBeforeRender(k,b,z,mt),R=U.get(b,M.length),R.init(z),R.state.textureUnits=st.getTextureUnits(),M.push(R),Wt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ft.setFromProjectionMatrix(Wt,_n,z.reversedDepth),ie=this.localClippingEnabled,Kt=Y.init(this.clippingPlanes,ie),I=O.get(b,F.length),I.init(),F.push(I),xt.enabled===!0&&xt.isPresenting===!0){let wt=k.xr.getDepthSensingMesh();wt!==null&&ks(wt,z,-1/0,k.sortObjects)}ks(b,z,0,k.sortObjects),I.finish(),$!==null&&$.updateLights(R.state.lightsArray),k.sortObjects===!0&&I.sort(bt,Ut),he=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,he&&dt.addToRenderList(I,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Kt===!0&&Y.beginShadows();let K=R.state.shadowsArray;if(X.render(K,b,z),Kt===!0&&Y.endShadows(),(J&&D.hasRenderPass())===!1){let wt=I.opaque,vt=I.transmissive;if(R.setupLights(),z.isArrayCamera){let Ct=z.cameras;if(vt.length>0)for(let It=0,Gt=Ct.length;It<Gt;It++){let Yt=Ct[It];Dr(wt,vt,b,Yt)}he&&dt.render(b);for(let It=0,Gt=Ct.length;It<Gt;It++){let Yt=Ct[It];Lr(I,b,Yt,Yt.viewport)}}else vt.length>0&&Dr(wt,vt,b,z),he&&dt.render(b),Lr(I,b,z)}mt!==null&&rt===0&&(st.updateMultisampleRenderTarget(mt),st.updateRenderTargetMipmap(mt)),J&&D.end(k),b.isScene===!0&&b.onAfterRender(k,b,z),ut.resetDefaultState(),it=-1,at=null,M.pop(),M.length>0?(R=M[M.length-1],st.setTextureUnits(R.state.textureUnits),Kt===!0&&Y.setGlobalState(k.clippingPlanes,R.state.camera)):R=null,F.pop(),F.length>0?I=F[F.length-1]:I=null,$!==null&&$.renderEnd()};function ks(b,z,et,J){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)et=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLightProbeGrid)R.pushLightProbeGrid(b);else if(b.isLight)R.pushLight(b),b.castShadow&&R.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Ft)){J&&ye.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Wt);let wt=S.update(b),vt=b.material;vt.visible&&I.push(b,wt,vt,et,ye.z,null,z)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Ft))){let wt=S.update(b),vt=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ye.copy(b.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),ye.copy(wt.boundingSphere.center)),ye.applyMatrix4(b.matrixWorld).applyMatrix4(Wt)),Array.isArray(vt)){let Ct=wt.groups;for(let It=0,Gt=Ct.length;It<Gt;It++){let Yt=Ct[It],Rt=vt[Yt.materialIndex];Rt&&Rt.visible&&I.push(b,wt,Rt,et,ye.z,Yt,z)}}else vt.visible&&I.push(b,wt,vt,et,ye.z,null,z)}}let St=b.children;for(let wt=0,vt=St.length;wt<vt;wt++)ks(St[wt],z,et,J)}function Lr(b,z,et,J){let{opaque:K,transmissive:St,transparent:wt}=b;R.setupLightsView(et),Kt===!0&&Y.setGlobalState(k.clippingPlanes,et),J&&v.viewport(pt.copy(J)),K.length>0&&Nr(K,z,et),St.length>0&&Nr(St,z,et),wt.length>0&&Nr(wt,z,et),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Dr(b,z,et,J){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[J.id]===void 0){let Rt=Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[J.id]=new je(1,1,{generateMipmaps:!0,type:Rt?Mn:Qe,minFilter:xi,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let St=R.state.transmissionRenderTarget[J.id],wt=J.viewport||pt;St.setSize(wt.z*k.transmissionResolutionScale,wt.w*k.transmissionResolutionScale);let vt=k.getRenderTarget(),Ct=k.getActiveCubeFace(),It=k.getActiveMipmapLevel();k.setRenderTarget(St),k.getClearColor(jt),qt=k.getClearAlpha(),qt<1&&k.setClearColor(16777215,.5),k.clear(),he&&dt.render(et);let Gt=k.toneMapping;k.toneMapping=yn;let Yt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),R.setupLightsView(J),Kt===!0&&Y.setGlobalState(k.clippingPlanes,J),Nr(b,et,J),st.updateMultisampleRenderTarget(St),st.updateRenderTargetMipmap(St),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let te=0,Me=z.length;te<Me;te++){let ue=z[te],{object:le,geometry:Be,material:Et,group:We}=ue;if(Et.side===fn&&le.layers.test(J.layers)){let Qt=Et.side;Et.side=Fe,Et.needsUpdate=!0,Vc(le,et,J,Be,Et,We),Et.side=Qt,Et.needsUpdate=!0,Rt=!0}}Rt===!0&&(st.updateMultisampleRenderTarget(St),st.updateRenderTargetMipmap(St))}k.setRenderTarget(vt,Ct,It),k.setClearColor(jt,qt),Yt!==void 0&&(J.viewport=Yt),k.toneMapping=Gt}function Nr(b,z,et){let J=z.isScene===!0?z.overrideMaterial:null;for(let K=0,St=b.length;K<St;K++){let wt=b[K],{object:vt,geometry:Ct,group:It}=wt,Gt=wt.material;Gt.allowOverride===!0&&J!==null&&(Gt=J),vt.layers.test(et.layers)&&Vc(vt,z,et,Ct,Gt,It)}}function Vc(b,z,et,J,K,St){$!==null&&K.isNodeMaterial&&$.setObject(b,K),b.onBeforeRender(k,z,et,J,K,St),b.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),K.onBeforeRender(k,z,et,J,b,St),K.transparent===!0&&K.side===fn&&K.forceSinglePass===!1?(K.side=Fe,K.needsUpdate=!0,k.renderBufferDirect(et,z,J,K,b,St),K.side=Fn,K.needsUpdate=!0,k.renderBufferDirect(et,z,J,K,b,St),K.side=fn):k.renderBufferDirect(et,z,J,K,b,St),b.onAfterRender(k,z,et,J,K,St)}function Ur(b,z,et){z.isScene!==!0&&(z=Oe);let J=j.get(b),K=R.state.lights,St=R.state.shadowsArray,wt=K.state.version,vt=T.getParameters(b,K.state,St,z,et,R.state.lightProbeGridArray),Ct=T.getProgramCacheKey(vt),It=J.programs;J.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?z.environment:null,J.fog=z.fog;let Gt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;J.envMap=L.get(b.envMap||J.environment,Gt),J.envMapRotation=J.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,It===void 0&&(b.addEventListener("dispose",ae),It=new Map,J.programs=It);let Yt=It.get(Ct);if(Yt!==void 0){if(J.currentProgram===Yt&&J.lightsStateVersion===wt)return Hc(b,vt),Yt}else vt.uniforms=T.getUniforms(b),$!==null&&b.isNodeMaterial&&$.build(b,et,vt),b.onBeforeCompile(vt,k),Yt=T.acquireProgram(vt,Ct),It.set(Ct,Yt),J.uniforms=vt.uniforms;let Rt=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=Y.uniform),Hc(b,vt),J.needsLights=yf(b),J.lightsStateVersion=wt,J.needsLights&&(Rt.ambientLightColor.value=K.state.ambient,Rt.lightProbe.value=K.state.probe,Rt.sunLights.value=K.state.sun,Rt.sunLightShadows.value=K.state.sunShadow,Rt.directionalLights.value=K.state.directional,Rt.directionalLightShadows.value=K.state.directionalShadow,Rt.spotLights.value=K.state.spot,Rt.spotLightShadows.value=K.state.spotShadow,Rt.rectAreaLights.value=K.state.rectArea,Rt.ltc_1.value=K.state.rectAreaLTC1,Rt.ltc_2.value=K.state.rectAreaLTC2,Rt.pointLights.value=K.state.point,Rt.pointLightShadows.value=K.state.pointShadow,Rt.hemisphereLights.value=K.state.hemi,Rt.sunShadowMatrix.value=K.state.sunShadowMatrix,Rt.sunShadowCascade.value=K.state.sunShadowCascade,Rt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Rt.spotLightMatrix.value=K.state.spotLightMatrix,Rt.spotLightMap.value=K.state.spotLightMap,Rt.pointShadowMatrix.value=K.state.pointShadowMatrix),J.lightProbeGrid=R.state.lightProbeGridArray.length>0,J.currentProgram=Yt,J.uniformsList=null,Yt}function Gc(b){if(b.uniformsList===null){let z=b.currentProgram.getUniforms();b.uniformsList=Ds.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Hc(b,z){let et=j.get(b);et.outputColorSpace=z.outputColorSpace,et.batching=z.batching,et.batchingColor=z.batchingColor,et.instancing=z.instancing,et.instancingColor=z.instancingColor,et.instancingMorph=z.instancingMorph,et.skinning=z.skinning,et.morphTargets=z.morphTargets,et.morphNormals=z.morphNormals,et.morphColors=z.morphColors,et.morphTargetsCount=z.morphTargetsCount,et.numClippingPlanes=z.numClippingPlanes,et.numIntersection=z.numClipIntersection,et.vertexAlphas=z.vertexAlphas,et.vertexTangents=z.vertexTangents,et.toneMapping=z.toneMapping}function gf(b,z){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;w.setFromMatrixPosition(z.matrixWorld);for(let et=0,J=b.length;et<J;et++){let K=b[et];if(K.texture!==null&&K.boundingBox.containsPoint(w))return K}return null}function xf(b,z,et,J,K){z.isScene!==!0&&(z=Oe),st.resetTextureUnits();let St=z.fog,wt=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?z.environment:null,vt=mt===null?k.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Jt.workingColorSpace,Ct=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,It=L.get(J.envMap||wt,Ct),Gt=J.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,Yt=!!et.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Rt=!!et.morphAttributes.position,te=!!et.morphAttributes.normal,Me=!!et.morphAttributes.color,ue=yn;J.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(ue=k.toneMapping);let le=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Be=le!==void 0?le.length:0,Et=j.get(J),We=R.state.lights;if(Kt===!0&&(ie===!0||b!==at)){let ce=b===at&&J.id===it;Y.setState(J,b,ce)}let Qt=!1;J.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==We.state.version||Et.outputColorSpace!==vt||K.isBatchedMesh&&Et.batching===!1||!K.isBatchedMesh&&Et.batching===!0||K.isBatchedMesh&&Et.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Et.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Et.instancing===!1||!K.isInstancedMesh&&Et.instancing===!0||K.isSkinnedMesh&&Et.skinning===!1||!K.isSkinnedMesh&&Et.skinning===!0||K.isInstancedMesh&&Et.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Et.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Et.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Et.instancingMorph===!1&&K.morphTexture!==null||Et.envMap!==It||J.fog===!0&&Et.fog!==St||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Y.numPlanes||Et.numIntersection!==Y.numIntersection)||Et.vertexAlphas!==Gt||Et.vertexTangents!==Yt||Et.morphTargets!==Rt||Et.morphNormals!==te||Et.morphColors!==Me||Et.toneMapping!==ue||Et.morphTargetsCount!==Be||!!Et.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(Qt=!0):(Qt=!0,Et.__version=J.version);let cn=Et.currentProgram;Qt===!0&&(cn=Ur(J,z,K),$&&J.isNodeMaterial&&$.onUpdateProgram(J,cn,Et));let An=!1,ni=!1,Zi=!1,re=cn.getUniforms(),ve=Et.uniforms;if(v.useProgram(cn.program)&&(An=!0,ni=!0,Zi=!0),J.id!==it&&(it=J.id,ni=!0),Et.needsLights){let ce=gf(R.state.lightProbeGridArray,K);Et.lightProbeGrid!==ce&&(Et.lightProbeGrid=ce,ni=!0)}if(An||at!==b){v.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),re.setValue(V,"projectionMatrix",b.projectionMatrix),re.setValue(V,"viewMatrix",b.matrixWorldInverse);let si=re.map.cameraPosition;si!==void 0&&si.setValue(V,ne.setFromMatrixPosition(b.matrixWorld)),P.logarithmicDepthBuffer&&re.setValue(V,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&re.setValue(V,"isOrthographic",b.isOrthographicCamera===!0),at!==b&&(at=b,ni=!0,Zi=!0)}if(Et.needsLights&&(We.state.sunShadowMap.length>0&&re.setValue(V,"sunShadowMap",We.state.sunShadowMap,st),We.state.directionalShadowMap.length>0&&re.setValue(V,"directionalShadowMap",We.state.directionalShadowMap,st),We.state.spotShadowMap.length>0&&re.setValue(V,"spotShadowMap",We.state.spotShadowMap,st),We.state.pointShadowMap.length>0&&re.setValue(V,"pointShadowMap",We.state.pointShadowMap,st)),K.isSkinnedMesh){re.setOptional(V,K,"bindMatrix"),re.setOptional(V,K,"bindMatrixInverse");let ce=K.skeleton;ce&&(ce.boneTexture===null&&ce.computeBoneTexture(),re.setValue(V,"boneTexture",ce.boneTexture,st))}K.isBatchedMesh&&(re.setOptional(V,K,"batchingTexture"),re.setValue(V,"batchingTexture",K._matricesTexture,st),re.setOptional(V,K,"batchingIdTexture"),re.setValue(V,"batchingIdTexture",K._indirectTexture,st),re.setOptional(V,K,"batchingColorTexture"),K._colorsTexture!==null&&re.setValue(V,"batchingColorTexture",K._colorsTexture,st));let ii=et.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&E.update(K,et,cn),(ni||Et.receiveShadow!==K.receiveShadow)&&(Et.receiveShadow=K.receiveShadow,re.setValue(V,"receiveShadow",K.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&z.environment!==null&&(ve.envMapIntensity.value=z.environmentIntensity),ve.dfgLUT!==void 0&&(ve.dfgLUT.value=dx()),ni){if(re.setValue(V,"toneMappingExposure",k.toneMappingExposure),Et.needsLights&&_f(ve,Zi),St&&J.fog===!0&&A.refreshFogUniforms(ve,St),A.refreshMaterialUniforms(ve,J,ft,lt,R.state.transmissionRenderTarget[b.id]),Et.needsLights&&Et.lightProbeGrid){let ce=Et.lightProbeGrid;ve.probesSH.value=ce.texture,ve.probesMin.value.copy(ce.boundingBox.min),ve.probesMax.value.copy(ce.boundingBox.max),ve.probesResolution.value.copy(ce.resolution)}Ds.upload(V,Gc(Et),ve,st)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ds.upload(V,Gc(Et),ve,st),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&re.setValue(V,"center",K.center),re.setValue(V,"modelViewMatrix",K.modelViewMatrix),re.setValue(V,"normalMatrix",K.normalMatrix),re.setValue(V,"modelMatrix",K.matrixWorld),J.uniformsGroups!==void 0){let ce=J.uniformsGroups;for(let si=0,$i=ce.length;si<$i;si++){let Xc=ce[si];nt.update(Xc,cn),nt.bind(Xc,cn)}}return cn}function _f(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.sunLights.needsUpdate=z,b.sunLightShadows.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function yf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return ot},this.getActiveMipmapLevel=function(){return rt},this.getRenderTarget=function(){return mt},this.setRenderTargetTextures=function(b,z,et){let J=j.get(b);J.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),j.get(b.texture).__webglTexture=z,j.get(b.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:et,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,z){let et=j.get(b);et.__webglFramebuffer=z,et.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,et=0){mt=b,ot=z,rt=et;let J=null,K=!1,St=!1;if(b){let vt=j.get(b);if(vt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(V.FRAMEBUFFER,vt.__webglFramebuffer),pt.copy(b.viewport),At.copy(b.scissor),Tt=b.scissorTest,v.viewport(pt),v.scissor(At),v.setScissorTest(Tt),it=-1;return}else if(vt.__webglFramebuffer===void 0)st.setupRenderTarget(b);else if(vt.__hasExternalTextures)st.rebindTextures(b,j.get(b.texture).__webglTexture,j.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Gt=b.depthTexture;if(vt.__boundDepthTexture!==Gt){if(Gt!==null&&j.has(Gt)&&(b.width!==Gt.image.width||b.height!==Gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(b)}}let Ct=b.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(St=!0);let It=j.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(It[z])?J=It[z][et]:J=It[z],K=!0):b.samples>0&&st.useMultisampledRTT(b)===!1?J=j.get(b).__webglMultisampledFramebuffer:Array.isArray(It)?J=It[et]:J=It,pt.copy(b.viewport),At.copy(b.scissor),Tt=b.scissorTest}else pt.copy(Mt).multiplyScalar(ft).floor(),At.copy(Lt).multiplyScalar(ft).floor(),Tt=_e;if(et!==0&&(J=tt),v.bindFramebuffer(V.FRAMEBUFFER,J)&&v.drawBuffers(b,J),v.viewport(pt),v.scissor(At),v.setScissorTest(Tt),K){let vt=j.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+z,vt.__webglTexture,et)}else if(St){let vt=z;for(let Ct=0;Ct<b.textures.length;Ct++){let It=j.get(b.textures[Ct]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ct,It.__webglTexture,et,vt)}}else if(b!==null&&et!==0){let vt=j.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,vt.__webglTexture,et)}it=-1};function Wc(b){let z=j.get(b);return(z.__readFormat!==b.format||z.__readType!==b.type)&&(z.__readFormat=b.format,z.__readType=b.type,z.__formatReadable=P.textureFormatReadable(b.format),z.__typeReadable=P.textureTypeReadable(b.type)),z}this.readRenderTargetPixels=function(b,z,et,J,K,St,wt,vt=0){if(!(b&&b.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=j.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct){v.bindFramebuffer(V.FRAMEBUFFER,Ct);try{let It=b.textures[vt],Gt=It.format,Yt=It.type;b.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+vt);let Rt=Wc(It);if(Rt.__formatReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-J&&et>=0&&et<=b.height-K&&V.readPixels(z,et,J,K,ht.convert(Gt),ht.convert(Yt),St)}finally{let It=mt!==null?j.get(mt).__webglFramebuffer:null;v.bindFramebuffer(V.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(b,z,et,J,K,St,wt,vt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=j.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&wt!==void 0&&(Ct=Ct[wt]),Ct)if(z>=0&&z<=b.width-J&&et>=0&&et<=b.height-K){v.bindFramebuffer(V.FRAMEBUFFER,Ct);let It=b.textures[vt],Gt=It.format,Yt=It.type;b.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+vt);let Rt=Wc(It);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,te),V.bufferData(V.PIXEL_PACK_BUFFER,St.byteLength,V.STREAM_READ),V.readPixels(z,et,J,K,ht.convert(Gt),ht.convert(Yt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Me=mt!==null?j.get(mt).__webglFramebuffer:null;v.bindFramebuffer(V.FRAMEBUFFER,Me);let ue=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await iu(V,ue,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,te),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,St),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(te),V.deleteSync(ue),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,z=null,et=0){let J=Math.pow(2,-et),K=Math.floor(b.image.width*J),St=Math.floor(b.image.height*J),wt=z!==null?z.x:0,vt=z!==null?z.y:0;st.setTexture2D(b,0),V.copyTexSubImage2D(V.TEXTURE_2D,et,0,0,wt,vt,K,St),v.unbindTexture()},this.copyTextureToTexture=function(b,z,et=null,J=null,K=0,St=0){let wt,vt,Ct,It,Gt,Yt,Rt,te,Me,ue=b.isCompressedTexture?b.mipmaps[St]:b.image;if(et!==null)wt=et.max.x-et.min.x,vt=et.max.y-et.min.y,Ct=et.isBox3?et.max.z-et.min.z:1,It=et.min.x,Gt=et.min.y,Yt=et.isBox3?et.min.z:0;else{let ve=Math.pow(2,-K);wt=Math.floor(ue.width*ve),vt=Math.floor(ue.height*ve),b.isDataArrayTexture?Ct=ue.depth:b.isData3DTexture?Ct=Math.floor(ue.depth*ve):Ct=1,It=0,Gt=0,Yt=0}J!==null?(Rt=J.x,te=J.y,Me=J.z):(Rt=0,te=0,Me=0);let le=ht.convert(z.format),Be=ht.convert(z.type),Et;z.isData3DTexture?(st.setTexture3D(z,0),Et=V.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(st.setTexture2DArray(z,0),Et=V.TEXTURE_2D_ARRAY):(st.setTexture2D(z,0),Et=V.TEXTURE_2D),v.activeTexture(V.TEXTURE0),v.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,z.flipY),v.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),v.pixelStorei(V.UNPACK_ALIGNMENT,z.unpackAlignment);let We=v.getParameter(V.UNPACK_ROW_LENGTH),Qt=v.getParameter(V.UNPACK_IMAGE_HEIGHT),cn=v.getParameter(V.UNPACK_SKIP_PIXELS),An=v.getParameter(V.UNPACK_SKIP_ROWS),ni=v.getParameter(V.UNPACK_SKIP_IMAGES);v.pixelStorei(V.UNPACK_ROW_LENGTH,ue.width),v.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ue.height),v.pixelStorei(V.UNPACK_SKIP_PIXELS,It),v.pixelStorei(V.UNPACK_SKIP_ROWS,Gt),v.pixelStorei(V.UNPACK_SKIP_IMAGES,Yt);let Zi=b.isDataArrayTexture||b.isData3DTexture,re=z.isDataArrayTexture||z.isData3DTexture;if(b.isDepthTexture){let ve=j.get(b),ii=j.get(z),ce=j.get(ve.__renderTarget),si=j.get(ii.__renderTarget);v.bindFramebuffer(V.READ_FRAMEBUFFER,ce.__webglFramebuffer),v.bindFramebuffer(V.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let $i=0;$i<Ct;$i++)Zi&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,j.get(b).__webglTexture,K,Yt+$i),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,j.get(z).__webglTexture,St,Me+$i)),V.blitFramebuffer(It,Gt,wt,vt,Rt,te,wt,vt,V.DEPTH_BUFFER_BIT,V.NEAREST);v.bindFramebuffer(V.READ_FRAMEBUFFER,null),v.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(K!==0||b.isRenderTargetTexture||j.has(b)){let ve=j.get(b),ii=j.get(z);v.bindFramebuffer(V.READ_FRAMEBUFFER,G),v.bindFramebuffer(V.DRAW_FRAMEBUFFER,Q);for(let ce=0;ce<Ct;ce++)Zi?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ve.__webglTexture,K,Yt+ce):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ve.__webglTexture,K),re?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ii.__webglTexture,St,Me+ce):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ii.__webglTexture,St),K!==0?V.blitFramebuffer(It,Gt,wt,vt,Rt,te,wt,vt,V.COLOR_BUFFER_BIT,V.NEAREST):re?V.copyTexSubImage3D(Et,St,Rt,te,Me+ce,It,Gt,wt,vt):V.copyTexSubImage2D(Et,St,Rt,te,It,Gt,wt,vt);v.bindFramebuffer(V.READ_FRAMEBUFFER,null),v.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else re?b.isDataTexture||b.isData3DTexture?V.texSubImage3D(Et,St,Rt,te,Me,wt,vt,Ct,le,Be,ue.data):z.isCompressedArrayTexture?V.compressedTexSubImage3D(Et,St,Rt,te,Me,wt,vt,Ct,le,ue.data):V.texSubImage3D(Et,St,Rt,te,Me,wt,vt,Ct,le,Be,ue):b.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,St,Rt,te,wt,vt,le,Be,ue.data):b.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,St,Rt,te,ue.width,ue.height,le,ue.data):V.texSubImage2D(V.TEXTURE_2D,St,Rt,te,wt,vt,le,Be,ue);v.pixelStorei(V.UNPACK_ROW_LENGTH,We),v.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Qt),v.pixelStorei(V.UNPACK_SKIP_PIXELS,cn),v.pixelStorei(V.UNPACK_SKIP_ROWS,An),v.pixelStorei(V.UNPACK_SKIP_IMAGES,ni),St===0&&z.generateMipmaps&&V.generateMipmap(Et),v.unbindTexture()},this.initRenderTarget=function(b){j.get(b).__webglFramebuffer===void 0&&st.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?st.setTextureCube(b,0):b.isData3DTexture?st.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?st.setTexture2DArray(b,0):st.setTexture2D(b,0),v.unbindTexture()},this.resetState=function(){ot=0,rt=0,mt=null,v.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}};var yc=Af(Ou(),1);function _c(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=zu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=_x(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let f=a,h=l;for(let u=e;u<s;u+=e){let p=i[u],_=i[u+1];p<a&&(a=p),_<l&&(l=_),p>f&&(f=p),_>h&&(h=_)}c=Math.max(f-a,h-l),c=c!==0?32767/c:0}return br(r,o,e,a,l,c,0),o}function zu(i,t,e,n,s){let r;if(s===Rx(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Bu(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Bu(o/n|0,i[o],i[o+1],r);return r&&Us(r,r.next)&&(wr(r),r=r.next),r}function Vi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Us(e,e.next)||xe(e.prev,e,e.next)===0)){if(wr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function br(i,t,e,n,s,r,o){if(!i)return;!o&&r&&bx(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?mx(i,n,s,r):px(i)){t.push(l.i,i.i,c.i),wr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=gx(Vi(i),t),br(i,t,e,n,s,r,2)):o===2&&xx(i,t,e,n,s,r):br(Vi(i),t,e,n,s,r,1);break}}}function px(i){let t=i.prev,e=i,n=i.next;if(xe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,f=Math.min(s,r,o),h=Math.min(a,l,c),u=Math.max(s,r,o),p=Math.max(a,l,c),_=n.next;for(;_!==t;){if(_.x>=f&&_.x<=u&&_.y>=h&&_.y<=p&&Mr(s,a,r,l,o,c,_.x,_.y)&&xe(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function mx(i,t,e,n){let s=i.prev,r=i,o=i.next;if(xe(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,f=s.y,h=r.y,u=o.y,p=Math.min(a,l,c),_=Math.min(f,h,u),y=Math.max(a,l,c),x=Math.max(f,h,u),g=gc(p,_,t,e,n),C=gc(y,x,t,e,n),N=i.prevZ,w=i.nextZ;for(;N&&N.z>=g&&w&&w.z<=C;){if(N.x>=p&&N.x<=y&&N.y>=_&&N.y<=x&&N!==s&&N!==o&&Mr(a,f,l,h,c,u,N.x,N.y)&&xe(N.prev,N,N.next)>=0||(N=N.prevZ,w.x>=p&&w.x<=y&&w.y>=_&&w.y<=x&&w!==s&&w!==o&&Mr(a,f,l,h,c,u,w.x,w.y)&&xe(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;N&&N.z>=g;){if(N.x>=p&&N.x<=y&&N.y>=_&&N.y<=x&&N!==s&&N!==o&&Mr(a,f,l,h,c,u,N.x,N.y)&&xe(N.prev,N,N.next)>=0)return!1;N=N.prevZ}for(;w&&w.z<=C;){if(w.x>=p&&w.x<=y&&w.y>=_&&w.y<=x&&w!==s&&w!==o&&Mr(a,f,l,h,c,u,w.x,w.y)&&xe(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function gx(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Us(n,s)&&Vu(n,e,e.next,s)&&Er(n,s)&&Er(s,n)&&(t.push(n.i,e.i,s.i),wr(e),wr(e.next),e=i=s),e=e.next}while(e!==i);return Vi(e)}function xx(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Tx(o,a)){let l=Gu(o,a);o=Vi(o,o.next),l=Vi(l,l.next),br(o,t,e,n,s,r,0),br(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function _x(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=zu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(wx(c))}s.sort(yx);for(let r=0;r<s.length;r++)e=vx(s[r],e);return e}function yx(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function vx(i,t){let e=Sx(i,t);if(!e)return t;let n=Gu(e,i);return Vi(n,n.next),Vi(e,e.next)}function Sx(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Us(i,e))return e;do{if(Us(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,f=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&ku(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let h=Math.abs(s-e.y)/(n-e.x);Er(e,i)&&(h<f||h===f&&(e.x>o.x||e.x===o.x&&Mx(o,e)))&&(o=e,f=h)}e=e.next}while(e!==a);return o}function Mx(i,t){return xe(i.prev,i,t.prev)<0&&xe(t.next,i,i.next)<0}function bx(i,t,e,n){let s=i;do s.z===0&&(s.z=gc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ex(s)}function Ex(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function gc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function wx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ku(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Mr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&ku(i,t,e,n,s,r,o,a)}function Tx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Ax(i,t)&&(Er(i,t)&&Er(t,i)&&Cx(i,t)&&(xe(i.prev,i,t.prev)||xe(i,t.prev,t))||Us(i,t)&&xe(i.prev,i,i.next)>0&&xe(t.prev,t,t.next)>0)}function xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Us(i,t){return i.x===t.x&&i.y===t.y}function Vu(i,t,e,n){let s=Na(xe(i,t,e)),r=Na(xe(i,t,n)),o=Na(xe(e,n,i)),a=Na(xe(e,n,t));return!!(s!==r&&o!==a||s===0&&Da(i,e,t)||r===0&&Da(i,n,t)||o===0&&Da(e,i,n)||a===0&&Da(e,t,n))}function Da(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Na(i){return i>0?1:i<0?-1:0}function Ax(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Vu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Er(i,t){return xe(i.prev,i,i.next)<0?xe(i,t,i.next)>=0&&xe(i,i.prev,t)>=0:xe(i,t,i.prev)<0||xe(i,i.next,t)<0}function Cx(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Gu(i,t){let e=xc(i.i,i.x,i.y),n=xc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Bu(i,t,e,n){let s=xc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function wr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Rx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function Hu(i){let t=[],e=[],n=i[0][0].length,s=0,r=0;for(let o of i){for(let a of o)for(let l=0;l<n;l++)t.push(a[l]);r&&(s+=r,e.push(s)),r=o.length}return{vertices:t,holes:e,dimensions:n}}var Wu=(i,t)=>[[[-i/2,-t/2],[i/2,-t/2],[i/2,t/2],[-i/2,t/2],[-i/2,-t/2]]];function Gi(i){return i.reduce((t,e,n)=>t+(n?-1:1)*Math.abs(e.reduce((s,r,o)=>{let a=e[(o+1)%e.length];return s+r[0]*a[1]-a[0]*r[1]},0)/2),0)}function ti(i,t){let e=n=>{let s=!1;for(let r=0,o=n.length-1;r<n.length;o=r++){let a=n[r],l=n[o];a[1]>i[1]!=l[1]>i[1]&&i[0]<(l[0]-a[0])*(i[1]-a[1])/(l[1]-a[1])+a[0]&&(s=!s)}return s};return e(t[0])&&!t.slice(1).some(e)}function vc(i,t,e=.014){if(t.length<2)return[i];let n=[];for(let r=1;r<t.length;r++){let o=t[r-1],a=t[r],l=a[0]-o[0],c=a[1]-o[1],f=Math.hypot(l,c);if(f<.002)continue;let h=-c/f*e/2,u=l/f*e/2;n.push([[[o[0]+h,o[1]+u],[a[0]+h,a[1]+u],[a[0]-h,a[1]-u],[o[0]-h,o[1]-u],[o[0]+h,o[1]+u]]])}return n.length?yc.default.difference(i,...n).filter(r=>Gi(r)>.002):[i]}function Sc(i,t=.22){let e=[],n=i[0],s=Math.min(...n.map(f=>f[0])),r=Math.max(...n.map(f=>f[0])),o=Math.min(...n.map(f=>f[1])),a=Math.max(...n.map(f=>f[1])),l=Math.max(1,Math.ceil((r-s)/t)),c=Math.max(1,Math.ceil((a-o)/t));for(let f=0;f<l;f++)for(let h=0;h<c;h++){let u=s+(r-s)*f/l,p=s+(r-s)*(f+1)/l,_=o+(a-o)*h/c,y=o+(a-o)*(h+1)/c,x=[[[u,_],[p,_],[p,y],[u,y],[u,_]]],g=yc.default.intersection(i,x);for(let C of g){let N=Hu(C),w=_c(N.vertices,N.holes,2);for(let I of w)e.push(N.vertices[I*2],N.vertices[I*2+1])}}return e}var kn=(i,t=Date.now())=>({wet:t-i<2e4,amount:Math.max(0,Math.min(1,1-(t-i)/2e4))});function Tr(i,t){let e=new Set([i]),n=!0;for(;n;){n=!1;for(let[s,r]of t)e.has(s)!==e.has(r)&&(e.add(s),e.add(r),n=!0)}return e}var Ix;function Xu(){return Ix??=new Promise((i,t)=>{let e=indexedDB.open("paper-poetry-studio",1);e.onupgradeneeded=()=>{e.result.createObjectStore("state"),e.result.createObjectStore("images")},e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)})}async function Mc(i,t){let e=await Xu();return new Promise((n,s)=>{let r=e.transaction(i).objectStore(i).get(t);r.onsuccess=()=>n(r.result),r.onerror=()=>s(r.error)})}async function Ua(i,t,e){let n=await Xu();return new Promise((s,r)=>{let o=n.transaction(i,"readwrite");o.objectStore(i).put(e,t),o.oncomplete=s,o.onerror=()=>r(o.error),o.onabort=()=>r(o.error)})}async function Fa(i){let t;try{t=await Mc("images",i)}catch{}if(!t){let n=await fetch(i,{signal:AbortSignal.timeout(16e3)});if(!n.ok)throw Error("\u56FE\u7247\u6682\u65F6\u65E0\u6CD5\u8BFB\u53D6");t=await n.blob();try{await Ua("images",i,t)}catch{}}let e=URL.createObjectURL(t);try{let n=new Image;return n.src=e,await n.decode(),n}finally{URL.revokeObjectURL(e)}}function Px(i){return()=>(i=Math.imul(i,1664525)+1013904223|0,(i>>>0)/4294967296)}var Hi=(i,t,e)=>Math.max(t,Math.min(e,i)),Ar=class{constructor(t,e,n=1){this.paper=e,this.map=[],this.rest=[];let s=new Map;for(let a=0;a<t.length;a+=2){let l=t[a].toFixed(5)+","+t[a+1].toFixed(5),c=s.get(l);c===void 0&&(c=this.rest.length/3,s.set(l,c),this.rest.push(t[a],t[a+1],0)),this.map.push(c)}this.rest=new Float64Array(this.rest),this.pos=new Float64Array(this.rest),this.prev=new Float64Array(this.rest),this.edges=[],this.bends=[],this.neighbors=Array.from({length:this.rest.length/3},()=>new Set);let r=new Map;for(let a=0;a<this.map.length;a+=3){let l=this.map.slice(a,a+3);for(let c=0;c<3;c++){let f=l[c],h=l[(c+1)%3],u=l[(c+2)%3],p=Math.min(f,h)+","+Math.max(f,h);if(r.has(p)){let _=r.get(p);this.bends.push({a:_.opp,b:u,c:f,d:h,lambda:0,fibre:0})}else{let _=Math.hypot(this.rest[f*3]-this.rest[h*3],this.rest[f*3+1]-this.rest[h*3+1]),y={a:f,b:h,len:_,opp:u,lambda:0};r.set(p,y),this.edges.push(y),this.neighbors[f].add(h),this.neighbors[h].add(f)}}}let o=Px(n);this.fibre=new Float64Array(this.rest.length/3);for(let a=0;a<this.fibre.length;a++)this.fibre[a]=o()*2-1;for(let a=0;a<3;a++){let l=this.fibre.slice();for(let c=0;c<this.fibre.length;c++){let f=l[c]*2;for(let h of this.neighbors[c])f+=l[h];this.fibre[c]=f/(this.neighbors[c].size+2)}}for(let a of this.bends)a.fibre=.6+o()*.8;for(let a=0;a<this.fibre.length;a++){let l=this.rest[a*3],c=this.rest[a*3+1];this.pos[a*3+2]=Math.pow(Math.abs(l)/(e.w/2),6)*(e.old||.1)*.035+this.fibre[a]*.0015}this.prev.set(this.pos),e.physicsVersion===2&&e.physics?.length===this.pos.length&&(this.pos.set(e.physics),this.prev.set(this.pos)),this.moisture=new Float64Array(this.fibre.length),this.shrink=new Float64Array(this.fibre.length),this.contact=new Float64Array(this.fibre.length),this.sampleCache=new Map,this.dirty=!0,this.lastMoisture=0,this.awake=2}moistureUpdate(t){this.moisture.fill(0),this.shrink.fill(0),this.contact.fill(0);for(let e=0;e<this.fibre.length;e++){let n=this.rest[e*3],s=this.rest[e*3+1];for(let r of this.paper.glue){let o=(r.x-n)**2+(r.y-s)**2;if(o>.8)continue;let a=Math.exp(-o/(.045+r.r*r.r*3)),l=Hi((t-r.born)/2e4,0,1),c=r.contact??0;this.moisture[e]+=a*(1-l)*.27,this.shrink[e]+=a*l*(.004+c*.007)*(1+this.fibre[e]*.3),this.contact[e]=Math.max(this.contact[e],c*a)}}for(let e=0;e<this.fibre.length;e++)this.moisture[e]=Math.min(1,this.moisture[e]),this.shrink[e]=Math.min(this.paper.fragment?.022:.04,this.shrink[e]);this.lastMoisture=t}step(t,e){let n=this.paper;if(n.heldRigid)return!1;let s=n.fragment?n.laminated?3:8:n.book?1.4:1.8;if((n.glue.some(f=>kn(f.born,e).wet)||n.pin||n.turning)&&(this.awake=2),this.awake<=0&&!this.dirty)return!1;this.awake-=t,(e-this.lastMoisture>120||this.dirty)&&this.moistureUpdate(e),this.dirty=!1,t=Math.min(t,1/30);let o=2,a=t/o,l=this.fibre.length,c=-1;if(n.pin){let f=1/0;for(let h=0;h<l;h++){let u=(this.rest[h*3]-n.pin.x)**2+(this.rest[h*3+1]-n.pin.y)**2;u<f&&(f=u,c=h)}}for(let f=0;f<o;f++){let h=this.pos,u=this.prev;for(let p=0;p<l;p++){let _=p*3;for(let y=0;y<3;y++){let x=h[_+y];h[_+y]+=Hi(h[_+y]-u[_+y],-.018,.018)*.82,u[_+y]=x}h[_+2]-=2.3*a*a}for(let p of this.edges)p.lambda=0;for(let p of this.bends)p.lambda=0;for(let p=0;p<5;p++){for(let _ of this.edges){let y=_.a*3,x=_.b*3,g=h[y]-h[x],C=h[y+1]-h[x+1],N=h[y+2]-h[x+2],w=Math.hypot(g,C,N);if(w<1e-8)continue;let I=_.len*(1-(this.shrink[_.a]+this.shrink[_.b])*.5),R=(2e-6+5e-5*(this.moisture[_.a]+this.moisture[_.b]))/(a*a*s),F=(-(w-I)-R*_.lambda)/(2+R);_.lambda+=F,F=Hi(F,-_.len*.075,_.len*.075);let M=F/w;for(let[D,k]of[[0,g],[1,C],[2,N]])h[y+D]+=M*k,h[x+D]-=M*k}for(let _ of this.bends){let y=_.a*3,x=_.b*3,g=_.c*3,C=_.d*3,N=h[C]-h[g],w=h[C+1]-h[g+1],I=h[C+2]-h[g+2],R=h[y]-h[g],F=h[y+1]-h[g+1],M=h[y+2]-h[g+2],D=w*M-I*F,k=I*R-N*M,W=N*F-w*R,$=Math.hypot(D,k,W);if($<1e-8)continue;D/=$,k/=$,W/=$,W<0&&(D=-D,k=-k,W=-W);let tt=(this.shrink[_.a]+this.shrink[_.b]+this.shrink[_.c]+this.shrink[_.d])*.25,G=(this.moisture[_.a]+this.moisture[_.b])*.5,Q=Hi((n.turns-20)*12e-5,0,.007),ot=Math.pow(Math.abs(this.rest[y])/(n.w/2),8)+Math.pow(Math.abs(this.rest[y+1])/(n.h/2),8),rt=tt*_.fibre*.2+ot*(Q+(n.old||.1)*6e-4),mt=(h[y]+h[x]-h[g]-h[C])*.5,it=(h[y+1]+h[x+1]-h[g+1]-h[C+1])*.5,at=(h[y+2]+h[x+2]-h[g+2]-h[C+2])*.5,pt=(9e-5+G*.0018)/(a*a*s),At=(-(mt*D+it*k+at*W-rt)-pt*_.lambda)/(1+pt);At=Hi(At,-.0025,.0025),_.lambda+=At;for(let[Tt,jt]of[[y,.5],[x,.5],[g,-.5],[C,-.5]])h[Tt]+=jt*D*At,h[Tt+1]+=jt*k*At,h[Tt+2]+=jt*W*At}for(let _=0;_<l;_++){let y=_*3;if(n.book&&this.rest[y]<-n.w/2+.035)h[y]=this.rest[y],h[y+1]=this.rest[y+1],h[y+2]=0;else if(_===c)h[y]=this.rest[y]+(n.pin.dx||0)*.015,h[y+1]=this.rest[y+1]+(n.pin.dy||0)*.015,h[y+2]=n.pin.lift;else{let g=n.pin?Math.exp(-((this.rest[y]-n.pin.x)**2+(this.rest[y+1]-n.pin.y)**2)/.04):0;g>.15&&(h[y+2]+=(n.pin.lift*g-h[y+2])*.16),this.contact[_]>.65&&(h[y]+=(this.rest[y]-h[y])*.14,h[y+1]+=(this.rest[y+1]-h[y+1])*.14,h[y+2]*=.4),h[y+2]<0&&(h[y+2]=0),n.pin||(h[y]+=(this.rest[y]-h[y])*.001,h[y+1]+=(this.rest[y+1]-h[y+1])*.001)}Number.isFinite(h[y]+h[y+1]+h[y+2])||(h[y]=this.rest[y],h[y+1]=this.rest[y+1],h[y+2]=0),h[y+2]=Hi(h[y+2],0,2)}}}return!0}sample(t,e){let n=t.toFixed(3)+","+e.toFixed(3),s=this.sampleCache.get(n);if(!s){s=[];for(let a=0;a<this.fibre.length;a++){let l=(this.rest[a*3]-t)**2+(this.rest[a*3+1]-e)**2;(s.length<3||l<s.at(-1).d)&&(s.push({i:a,d:l}),s.sort((c,f)=>c.d-f.d),s.length=Math.min(3,s.length))}this.sampleCache.size>6e3&&this.sampleCache.clear(),this.sampleCache.set(n,s)}let r=0,o=[0,0,0];for(let{i:a,d:l}of s){let c=1/(l+1e-4);r+=c;for(let f=0;f<3;f++)o[f]+=this.pos[a*3+f]*c}return o.map(a=>a/r)}snapshot(){return Array.from(this.pos)}};function qu(i,t,e,n){let s=i.glue,r=[];for(let h=0;h<s.length;h++){let u=s[h],p=kn(u.born,n);p.wet&&(u.vx??=0,u.vy??=0,u.wet=p.amount,r.push(h))}if(!r.length)return;let o=.22,a=new Map,l=(h,u)=>`${Math.floor(h/o)},${Math.floor(u/o)}`;for(let h of r){let u=s[h],p=l(u.x,u.y);a.has(p)||a.set(p,[]),a.get(p).push(h)}let c=h=>{let u=Math.floor(h.x/o),p=Math.floor(h.y/o),_=[];for(let y=-1;y<=1;y++)for(let x=-1;x<=1;x++)_.push(...a.get(`${u+y},${p+x}`)||[]);return _},f=new Map;for(let h of r){let u=s[h],p=0;for(let _ of c(u)){let y=s[_],x=Math.hypot(u.x-y.x,u.y-y.y);x<o&&(p+=(1-x/o)**2)}f.set(h,p)}for(let h of r){let u=s[h],p=0,_=0;for(let C of c(u)){if(h===C)continue;let N=s[C],w=u.x-N.x,I=u.y-N.y,R=Math.hypot(w,I);if(R<1e-5||R>=o)continue;let F=((f.get(h)+f.get(C))*.5-2.4)*.018*(1-R/o),M=-.007*(1-R/o);p+=(F+M)*w/R,_+=(F+M)*I/R,p+=(N.vx-u.vx)*.06*(1-u.wet),_+=(N.vy-u.vy)*.06*(1-u.wet)}if(i.pin||i.turning){let C=t.sample(u.x+.04,u.y),N=t.sample(u.x-.04,u.y),w=t.sample(u.x,u.y+.04),I=t.sample(u.x,u.y-.04);p-=(C[2]-N[2])/.08*.09,_-=(w[2]-I[2])/.08*.09,p-=Math.sin(i.turning||0)*.1}let y=Math.exp(-e*(4+Math.pow(1-u.wet,3)*65));u.vx=(u.vx+p*e)*y,u.vy=(u.vy+_*e)*y;let x=u.x+u.vx*e,g=u.y+u.vy*e;ti([x,g],i.poly)?(u.x=x,u.y=g):(u.vx*=-.15,u.vy*=-.15),u.r=Hi(.045+Math.sqrt(f.get(h))*.017,.045,.115)}t.awake=2}var Oa=class{constructor(t,e){this.w=t,this.h=e,this.canvas=document.createElement("canvas"),this.canvas.width=384,this.canvas.height=Math.round(384*e/t),this.texture=new Ui(this.canvas),this.texture.colorSpace=Ee,this.geometry=new Un(t,e,48,64),this.material=new sr({map:this.texture,transparent:!0,opacity:.83,alphaTest:.045,roughness:.1,metalness:0,clearcoat:1,clearcoatRoughness:.05,side:fn,depthWrite:!1}),this.mesh=new we(this.geometry,this.material),this.mesh.renderOrder=4,this.base=this.geometry.attributes.position.array.slice(),this.last=0,this.count=0}update(t,e,n,s=!1){if(!t.glue.length){this.mesh.visible=!1;return}if(this.mesh.visible=!0,!s&&n-this.last<90)return;this.last=n;let r=this.canvas,o=r.getContext("2d"),a=r.width/this.w;o.clearRect(0,0,r.width,r.height);let l=0;for(let h of t.glue){let u=kn(h.born,n).amount;l=Math.max(l,u);let p=(h.x/this.w+.5)*r.width,_=(.5-h.y/this.h)*r.height,y=(h.r+.045)*a,x=o.createRadialGradient(p,_,0,p,_,y);x.addColorStop(0,"rgba(250,246,218,.8)"),x.addColorStop(.65,"rgba(247,241,209,.7)"),x.addColorStop(1,"rgba(247,241,209,0)"),o.fillStyle=x,o.beginPath(),o.arc(p,_,y,0,Math.PI*2),o.fill()}let c=o.getImageData(0,0,r.width,r.height);for(let h=3;h<c.data.length;h+=4){let u=c.data[h]/255;c.data[h]=u>.11?Math.min(255,(u-.11)*450)*(l*.35+.6):0}o.putImageData(c,0,0),o.globalCompositeOperation="destination-in",o.beginPath();for(let h of t.poly)h.forEach(([u,p],_)=>{let y=(u/this.w+.5)*r.width,x=(.5-p/this.h)*r.height;_?o.lineTo(y,x):o.moveTo(y,x)}),o.closePath();o.fill("evenodd"),o.globalCompositeOperation="source-over",this.texture.needsUpdate=!0;let f=this.geometry.attributes.position;for(let h=0;h<f.count;h++){let u=this.base[h*3],p=this.base[h*3+1],_=0;for(let x of t.glue){let g=(u-x.x)**2+(p-x.y)**2;g<.08&&(_+=Math.exp(-g/(x.r+.03)**2)*.012)}let y=e.sample(u,p);f.setXYZ(h,y[0],y[1],y[2]+.012+Math.min(.047,_))}f.needsUpdate=!0,this.geometry.computeVertexNormals(),this.geometry.computeBoundingSphere(),this.material.roughness=.08+(1-l)*.82,this.material.clearcoat=l,this.material.opacity=.55+l*.3}dispose(){this.texture.dispose(),this.geometry.dispose(),this.material.dispose()}};function Yu(i,t,e){let n=i.attributes.position,s=new Float32Array(e*3);for(let o=0;o<n.count;o+=3){let a=n.getX(o+1)-n.getX(o),l=n.getY(o+1)-n.getY(o),c=n.getZ(o+1)-n.getZ(o),f=n.getX(o+2)-n.getX(o),h=n.getY(o+2)-n.getY(o),u=n.getZ(o+2)-n.getZ(o),p=l*u-c*h,_=c*f-a*u,y=a*h-l*f;for(let x=0;x<3;x++){let g=t[o+x]*3;s[g]+=p,s[g+1]+=_,s[g+2]+=y}}let r=i.attributes.normal;for(let o=0;o<r.count;o++){let a=t[o]*3,l=Math.hypot(s[a],s[a+1],s[a+2])||1;r.setXYZ(o,s[a]/l,s[a+1]/l,s[a+2]/l)}r.needsUpdate=!0}var Lx=["\u6708\u7403","\u68EE\u6797","\u6D77\u6D0B","\u5019\u9E1F","\u4E91","\u6625\u5929","\u73CA\u745A","\u8774\u8776","\u82B1","\u68A6","\u98CE","\u6CB3\u6D41","\u58F0\u97F3","\u6781\u5149","\u96EA","\u5C9B\u5C7F","\u90AE\u7968","\u822A\u6D77","\u96E8","\u82D4\u85D3","\u706B\u5C71","\u706F\u5854","\u8336","\u9CB8","\u6C34\u5F69\u753B","\u56DB\u5B63"],bc=i=>[...i].sort(()=>Math.random()-.5);async function Dx(){let i=bc(Lx).slice(0,10).join("|"),t="https://zh.wikipedia.org/w/api.php?"+new URLSearchParams({action:"query",format:"json",origin:"*",prop:"extracts|info",inprop:"url",explaintext:"1",exintro:"1",redirects:"1",titles:i}),e=await fetch(t,{signal:AbortSignal.timeout(7e3)});if(!e.ok)throw Error();let n=await e.json();return Object.values(n.query.pages).filter(s=>s.extract?.length>60).map(s=>({title:s.title,text:s.extract.slice(0,2600),source:s.fullurl,author:"\u7EF4\u57FA\u767E\u79D1\u8D21\u732E\u8005",license:"\u77E5\u8BC6\u5171\u4EAB\u7F72\u540D\u2014\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/"}))}async function Nx(){let i="https://api.github.com/repos/chinese-poetry/chinese-poetry/contents/"+encodeURI("\u5E7D\u68A6\u5F71/youmengying.json"),t=await fetch(i,{signal:AbortSignal.timeout(1e4)});if(!t.ok)throw Error();let e=await t.json(),n=JSON.parse(new TextDecoder().decode(Uint8Array.from(atob(e.content.replace(/\s/g,"")),r=>r.charCodeAt(0))));return bc(n.map((r,o)=>o)).slice(0,10).map(r=>({title:n[r].content.replace(/[（(].*/,"").split(/[，。；：]/)[0].slice(0,14),text:Array.from({length:5},(o,a)=>n[(r+a)%n.length].content).join(`

`),author:"\u5F20\u6F6E",source:"https://github.com/chinese-poetry/chinese-poetry/tree/master/"+encodeURI("\u5E7D\u68A6\u5F71"),license:"\u53E4\u7C4D\u539F\u6587\u4E3A\u516C\u6709\u9886\u57DF\uFF1B\u6570\u636E\u6574\u7406\u4F7F\u7528 MIT \u8BB8\u53EF",licenseUrl:"https://github.com/chinese-poetry/chinese-poetry/blob/master/LICENSE"}))}async function Ux(){let i=await fetch("https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&cc0=1&limit=10&skip="+Math.floor(Math.random()*1e4),{signal:AbortSignal.timeout(1e4)});if(!i.ok)throw Error();return(await i.json()).data.filter(e=>e.share_license_status==="CC0"&&e.images?.web?.url).map(e=>({image:e.images.web.url,imageSource:e.url||"https://www.clevelandart.org/art/"+e.accession_number,imageAuthor:e.creators?.map(n=>n.description).join("\u3001")||"\u4F5A\u540D",imageLicense:"\u516C\u6709\u9886\u57DF \xB7 CC0"}))}async function Zu(i){i("\u6B63\u5728\u7FFB\u627E\u516C\u5F00\u7684\u4E2D\u6587\u6587\u7AE0\u4E0E\u9986\u85CF\u56FE\u7247\u2026");let[t,e,n]=await Promise.allSettled([Dx(),Nx(),Ux()]),s=await fetch("./seed.json").then(c=>c.json()),r=t.status==="fulfilled"?t.value:[],o=e.status==="fulfilled"?e.value:bc(s),a=n.status==="fulfilled"?n.value:[],l=[];for(let c=0;c<10;c++){let f=r[c]||o[c%o.length],h=a[c]||s[c%s.length];l.push({...f,image:h.image,imageSource:h.imageSource,imageAuthor:h.imageAuthor,imageLicense:h.imageLicense,fallbackImage:s[c%s.length].image,fallbackImageSource:s[c%s.length].imageSource,fallbackImageAuthor:s[c%s.length].imageAuthor,seed:Math.floor(Math.random()*1e8),layout:Math.floor(Math.random()*5)})}return{id:crypto.randomUUID(),created:Date.now(),pages:l,live:!!r.length||e.status==="fulfilled",note:r.length?"\u5DF2\u53D6\u5230\u5B9E\u65F6\u4E2D\u6587\u6587\u7AE0 \xB7 \u914D\u516C\u6709\u9886\u57DF\u56FE\u7247":e.status==="fulfilled"?"\u5DF2\u53D6\u5230\u4E2D\u6587\u53E4\u7C4D\u9009\u7BC7 \xB7 \u914D\u516C\u6709\u9886\u57DF\u56FE\u7247":"\u7F51\u7EDC\u6682\u4E0D\u53EF\u7528 \xB7 \u5DF2\u8F7D\u5165\u7F13\u5B58\u4E2D\u6587\u520A"}}function $u(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}function Fs(i=768,t=1080){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function Cr(i){let t=new Ui(i);return t.colorSpace=Ee,t.anisotropy=8,t}function bn(i,t,e,n,s,r,o=1.65,a=1e3){i.font=`${r}px "Noto Serif SC", "Microsoft YaHei", Georgia, serif`;let l=/[\u3400-\u9fff]/.test(t)?Array.from(t):t.split(/(\s+)/),c="";for(let f of l){if(i.measureText(c+f).width>s&&c&&(i.fillText(c,e,n),n+=r*o,c="",n>a))return n;c+=f}return n<=a&&i.fillText(c,e,n),n+r*o}function Ju(){let i=Fs(2048,2048),t=i.getContext("2d"),e=$u(87);t.fillStyle="#b59a77",t.fillRect(0,0,2048,2048);for(let n=0;n<8;n++){let s=n*256,r=t.createLinearGradient(0,s,0,s+256);r.addColorStop(0,"rgba(75,45,21,.12)"),r.addColorStop(.08,"rgba(255,235,201,.06)"),r.addColorStop(.7,"rgba(136,91,47,.015)"),r.addColorStop(1,"rgba(69,42,17,.15)"),t.fillStyle=r,t.fillRect(0,s,2048,256);for(let o=0;o<95;o++){let a=s+e()*256;t.beginPath(),t.moveTo(0,a);for(let l=0;l<=2048;l+=32)t.lineTo(l,a+Math.sin(l/180+o)*e()*7);t.strokeStyle=`rgba(${e()>.5?"63,39,21":"255,239,210"},${e()*.07})`,t.lineWidth=.5+e()*2,t.stroke()}t.fillStyle="#70553538",t.fillRect(0,s,2048,1)}for(let n=0;n<25e3;n++)t.fillStyle=`rgba(63,40,15,${e()*.05})`,t.fillRect(e()*2048,e()*2048,1+e()*12,.5);return i}function Ec(i,t,e=!1){let n=Fs(),s=n.getContext("2d"),r=$u(i.seed||12),o=i.old??.2,a=i.type||"magazine";s.fillStyle=a==="kraft"?"#b99866":a==="lined"?"#f4efdb":a==="white"?"#faf8f0":`hsl(43 39% ${96-o*11}%)`,s.fillRect(0,0,768,1080);for(let l=0;l<21e3;l++)s.fillStyle=`rgba(${r()>.5?"77,60,35":"255,255,244"},${r()*.08})`,s.fillRect(r()*768,r()*1080,.6+r()*2,.5+r()*2);if(a==="lined"){s.strokeStyle="#8c9eac66",s.lineWidth=1;for(let l=102;l<1050;l+=39)s.beginPath(),s.moveTo(0,l),s.lineTo(768,l),s.stroke();s.strokeStyle="#c58e8055",s.beginPath(),s.moveTo(90,0),s.lineTo(90,1080),s.stroke()}if(a==="magazine"&&!e){let l=i.layout||0,c=i.title||"\u62FE\u53E5 \xB7 \u81EA\u7136\u6765\u4FE1",f=i.text||"",h=["#496355","#b15d43","#46473f","#6d7d8b","#785d44"][l];s.fillStyle="#6e6a5b",s.font="13px sans-serif",s.fillText("\u62FE \u53E5   /   \u5076 \u7136 \u7684 \u6587 \u5B57",45,42),s.textAlign="right",s.fillText(String(i.index||1).padStart(2,"0")+"  \u2014  \u7EB8 \u4E0A \u6F2B \u6E38",720,42),s.textAlign="left",s.fillStyle=h;let u=bn(s,c,44,105,680,l===2?58:l===1?33:43,1.28,235);s.strokeStyle=h,s.lineWidth=1,s.beginPath(),s.moveTo(45,u+5),s.lineTo(720,u+5),s.stroke();let p=u+29,_=(y,x,g,C)=>{if(!t)return;s.save(),s.beginPath(),s.rect(y,x,g,C),s.clip();let N=Math.max(g/t.width,C/t.height);s.filter="saturate(0.65) contrast(.95)",s.drawImage(t,y+(g-t.width*N)/2,x+(C-t.height*N)/2,t.width*N,t.height*N),s.restore()};if(s.fillStyle="#3c3b33",l===0){_(45,p,678,360),s.fillStyle=h;let y=bn(s,f.slice(0,65),45,p+403,678,26,1.45,p+495);s.fillStyle="#3d3d35",bn(s,f.slice(65),45,y+20,678,17,1.65,1010)}else if(l===1)_(376,p,346,480),bn(s,f,45,p+20,303,20,1.75,1e3),bn(s,f.slice(410),376,p+515,346,17,1.7,1e3);else if(l===2)s.fillStyle=h,bn(s,f.slice(0,120),45,p+20,670,28,1.55,p+245),_(45,p+280,430,330),s.fillStyle="#4d4b42",bn(s,f.slice(120),498,p+290,218,16,1.6,1e3);else if(l===3){_(45,p,678,480);let y=p+515;s.fillStyle="#45443a",bn(s,f.slice(0,600),45,y,320,18,1.6,1010),bn(s,f.slice(600),401,y,321,18,1.6,1010)}else _(45,p,260,260),s.fillStyle=h,bn(s,f.slice(0,140),333,p+20,389,24,1.6,p+270),s.fillStyle="#49483e",bn(s,f.slice(140),45,p+310,677,21,1.75,1008);s.fillStyle="#6f6b5d",s.font="11px sans-serif",s.fillText("\u516C \u5F00 \u9986 \u85CF  /  \u88C1 \u526A \xB7 \u6536 \u85CF \xB7 \u62FC \u8D34",45,1048)}if(a==="magazine"){s.save(),s.globalAlpha=.035,s.translate(768,0),s.scale(-1,1),s.fillStyle="#483a2c";for(let l=150;l<980;l+=24)s.font="14px Georgia",s.fillText((i.text||"\u5728\u5E73\u51E1\u65E5\u5B50\u7684\u5B89\u9759\u4E4B\u4E2D\uFF0C\u62FE\u8D77\u4E00\u884C\u5076\u7136\u7684\u6587\u5B57\u3002").slice(l%200,l%200+75),40,l);s.restore()}if(o>0){let l=s.createRadialGradient(380,530,260,380,530,690);l.addColorStop(0,"#86592100"),l.addColorStop(1,`rgba(119,78,20,${o*.27})`),s.fillStyle=l,s.fillRect(0,0,768,1080);for(let c=0;c<o*9;c++){let f=r()*768,h=r()*1080,u=8+r()*90,p=s.createRadialGradient(f,h,0,f,h,u);p.addColorStop(0,`rgba(106,69,27,${o*.07})`),p.addColorStop(1,"#71512000"),s.fillStyle=p,s.fillRect(f-u,h-u,u*2,u*2)}}return n}function Ku(i=[]){let t=Fs(1024,1024),e=t.getContext("2d");e.fillStyle="#52665a",e.fillRect(0,0,1024,1024),e.strokeStyle="#bbc3a752";for(let n=24;n<1024;n+=32)e.lineWidth=n%128===24?1:.6,e.beginPath(),e.moveTo(n,0),e.lineTo(n,1024),e.moveTo(0,n),e.lineTo(1024,n),e.stroke();e.strokeStyle="#d4d6ba80",e.strokeRect(24,24,976,976),e.fillStyle="#c6cbb1",e.font="12px sans-serif",e.fillText("\u62FE \u53E5  /  \u81EA \u6108 \u5F0F \u88C1 \u5207 \u57AB \u677F",40,998),e.strokeStyle="#d5d9c78a",e.lineWidth=1.5;for(let n of i)e.beginPath(),n.forEach(([s,r],o)=>o?e.lineTo((s/5.7+.5)*1024,(.5-r/5)*1024):e.moveTo((s/5.7+.5)*1024,(.5-r/5)*1024)),e.stroke();return t}var _t=i=>document.querySelector(i),Wa=i=>[...document.querySelectorAll(i)],Bs=_t("#desk"),Ne=_t("#scene"),Pc=document.createElement("div");Pc.id="zoom-controls";Pc.innerHTML="<button id=zoom-out title=\u7F29\u5C0F>\u2212</button><button id=zoom-reset title=\u6062\u590D\u5168\u684C>100%</button><button id=zoom-in title=\u653E\u5927>\uFF0B</button>";Bs.append(Pc);var Vn=new ys,Gn;try{Gn=new Sr({canvas:Ne,antialias:!0,alpha:!1,preserveDrawingBuffer:!0})}catch(i){throw _t("#loading span").textContent="\u6D4F\u89C8\u5668\u672A\u80FD\u542F\u52A8 3D\uFF0C\u8BF7\u5F00\u542F\u786C\u4EF6\u52A0\u901F\u540E\u91CD\u8BD5\u3002",i}Gn.setPixelRatio(Math.min(devicePixelRatio,2));Gn.shadowMap.enabled=!0;Gn.shadowMap.type=Fi;Gn.outputColorSpace=Ee;Gn.setClearColor("#b99d7a");Gn.toneMapping=cr;Gn.toneMappingExposure=1.05;var pe=new jn(-8,8,6,-6,.1,70);pe.up.set(0,0,1);pe.position.set(0,-9,23);pe.lookAt(0,0,0);Vn.add(new bs(16775920,9404787,2.4));var Ti=new Es(16774623,3);Ti.position.set(-5,4,13);Ti.castShadow=!0;Ti.shadow.mapSize.set(2048,2048);Object.assign(Ti.shadow.camera,{left:-12,right:12,top:10,bottom:-10,near:.1,far:40});Ti.shadow.bias=-5e-4;Ti.shadow.normalBias=.025;Ti.shadow.radius=4;Vn.add(Ti);var Fx=Ju(),Ir=Cr(Fx);Ir.wrapS=Ir.wrapT=fs;Ir.repeat.set(2,2);var Lc=new we(new Un(45,35),new Kn({map:Ir,roughness:.83,color:14272170}));Lc.position.z=-.1;Lc.receiveShadow=!0;Vn.add(Lc);var ct={version:1,sources:{},pieces:[],bonds:[],basket:[],mat:null,books:[],nextZ:.3},Se=new Map,za=new Map,wc=new Map,zs=null,Mi="hand",kt=null,Xi=[],bi=[],Pr=[],ju,Qu,JS=performance.now();var Ei=()=>crypto.randomUUID(),KS=new Te,Dc=new lr,tf=new Xt,ef=new rn(new Z(0,0,1),0),Tc={white:"\u767D\u7EB8",lined:"\u884C\u7EB8",kraft:"\u725B\u76AE\u7EB8"},pn=null,Wi=null,qi=[],Si=null;function oe(i){_t("#toast").textContent=i,_t("#toast").classList.add("visible"),clearTimeout(Qu),Qu=setTimeout(()=>_t("#toast").classList.remove("visible"),4300)}function En(i){_t("#loading").hidden=!i,i&&(_t("#loading span").textContent=i)}function wi(i){return structuredClone(i)}function rf(){for(let i of ct.pieces){let t=Se.get(i.id);t?.physics&&(i.physics=t.physics.snapshot(),i.physicsVersion=2)}}function wn(){rf(),bi.push(wi(ct)),bi.length>15&&bi.shift(),Pr=[],Xa()}function Xa(){_t("#undo").disabled=!bi.length,_t("#redo").disabled=!Pr.length}function Ge(){clearTimeout(ju),ju=setTimeout(async()=>{try{rf(),await Ua("state","workspace",wi(ct)),_t("#save-status").innerHTML="<i></i> \u5DF2\u4FDD\u5B58 \xB7 \u8BCD\u8BED\u7BD3\u5B50\u4E5F\u4F1A\u7559\u5728\u8FD9\u91CC"}catch{_t("#save-status").textContent="\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u4E0B\u8F7D\u5DE5\u4F5C\u53F0\u5907\u4EFD",oe("\u6D4F\u89C8\u5668\u5B58\u50A8\u7A7A\u95F4\u4E0D\u8DB3\u6216\u88AB\u7981\u7528\uFF0C\u8BF7\u4E0B\u8F7D\u5907\u4EFD\u3002")}},500)}function Va(i,t,e,n={}){let s=ct.sources[i];return{id:Ei(),source:i,x:t,y:e,z:.25,rot:0,w:s.w||3,h:s.h||4.3,poly:Wu(s.w||3,s.h||4.3),glue:[],turns:0,flip:0,...n}}async function Ox(i){if(za.has(i))return za.get(i);let t=ct.sources[i],e=null;if(t.image?.startsWith("./assets/art-")&&(t.image=t.image.replace("./assets/","./")),t.image)try{wc.has(t.image)||wc.set(t.image,Fa(t.image).catch(()=>null)),e=await wc.get(t.image)}catch{}if(!e&&t.fallbackImage)try{e=await Fa(t.fallbackImage),t.image=t.fallbackImage,t.imageSource=t.fallbackImageSource,t.imageAuthor=t.fallbackImageAuthor,t.imageLicense="\u516C\u6709\u9886\u57DF \xB7 CC0"}catch{}let n=Ec(t,e),s=Ec(t.type==="magazine"?{...t,title:t.title+" / \u7EED\u9875",layout:((t.layout||0)+2)%5}:t,e),r={front:n,back:s,frontTex:Cr(n),backTex:Cr(s)};return za.set(i,r),r}function Bx(i,t,e){let n=Sc(i),s=[],r=[];for(let a=0;a<n.length;a+=2)s.push(n[a],n[a+1],0),r.push(n[a]/t+.5,n[a+1]/e+.5);let o=new Ye;return o.setAttribute("position",new Le(s,3)),o.setAttribute("uv",new Le(r,2)),o.computeVertexNormals(),o.userData.xy=n,o}async function qa(i){let t=await Ox(i.source);if(!ct.pieces.some(p=>p.id===i.id))return;let e=new In,n=Bx(i.poly,i.w,i.h),s=new Kn({map:t.frontTex,side:Fn,roughness:.96,color:16777215}),r=new we(n,s);r.castShadow=!0,r.receiveShadow=!0,r.userData.id=i.id,e.add(r);let o=n.clone();o.userData.xy=n.userData.xy;for(let p=0;p<o.attributes.uv.count;p++)o.attributes.uv.setX(p,1-o.attributes.uv.getX(p));let a=new we(o,new Kn({map:t.backTex,side:Fe,roughness:1}));a.castShadow=!0,a.receiveShadow=!0,a.userData.id=i.id,e.add(a);let l=[];for(let p of i.poly)for(let _=0;_<p.length-1;_++){let y=p[_],x=p[_+1],g=Math.max(1,Math.ceil(Math.hypot(x[0]-y[0],x[1]-y[1])/.15));for(let C=0;C<g;C++){let N=[y[0]+(x[0]-y[0])*C/g,y[1]+(x[1]-y[1])*C/g],w=[y[0]+(x[0]-y[0])*(C+1)/g,y[1]+(x[1]-y[1])*(C+1)/g];l.push(...N,0,...w,0)}}let c=new Ye;c.setAttribute("position",new Le(l,3));let f=new er(c,new Ni({color:12036493,transparent:!0,opacity:.56}));e.add(f);let h=new Oa(i.w,i.h);e.add(h.mesh),Vn.add(e);let u=new Ar(n.userData.xy,{...i,old:ct.sources[i.source].old},ct.sources[i.source].seed);i.cutFrozen&&(u.awake=0),Se.set(i.id,{group:e,mesh:r,back:a,edge:f,film:h,baseEdge:l,last:0,physics:u}),ei(i,Date.now(),!0),i.cutFrozen&&(u.awake=0,u.dirty=!1),af()}function Nc(i){i.film?.texture.dispose(),Vn.remove(i.group),i.group.traverse(t=>{t.geometry?.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(e=>e.dispose()):t.material.dispose())})}async function Yi(){Fr(ct,ct.activeBook??ct.books.at(-1)?.id);for(let i of Se.values())Nc(i);Se.clear(),await Promise.all(ct.pieces.map(qa)),Fc(),Oc(),Xx(),Tn(null),Ge()}function zx(i,t,e,n){return Se.get(i.id)?.physics.sample(t,e)||[t,e,0]}function ei(i,t,e=!1){let n=Se.get(i.id);if(!n)return;n.group.position.set(i.x,i.y,i.z),n.group.rotation.set(0,-(i.turning??i.flip??0),i.rot);let s=!!i.pin||!!i.turning,r=i.glue.some(a=>kn(a.born,t).wet);if(!e&&!s&&!r&&n.physics.awake<=0&&n.last===i.turns)return;n.last=i.turns,n.physics.paper=i,e&&(n.physics.dirty=!0,n.physics.awake=2);for(let[a,l]of[[n.mesh,.007],[n.back,-.007]]){let c=a.geometry.attributes.position,f=a.geometry.userData.xy;for(let h=0;h<c.count;h++){let u=n.physics.map[h]*3,p=n.physics.pos;c.setXYZ(h,p[u],p[u+1],p[u+2]+l)}c.needsUpdate=!0,Yu(a.geometry,n.physics.map,n.physics.fibre.length),a.geometry.computeBoundingSphere()}let o=n.edge.geometry.attributes.position;for(let a=0;a<o.count;a++){let l=zx(i,n.baseEdge[a*3],n.baseEdge[a*3+1],t);o.setXYZ(a,l[0],l[1],l[2]+(Math.cos(i.flip||0)<0?-.022:.022))}o.needsUpdate=!0,n.film.update(i,n.physics,t,e)}function of(i){let t=Ne.getBoundingClientRect();tf.set((i.clientX-t.left)/t.width*2-1,-(i.clientY-t.top)/t.height*2+1),Dc.setFromCamera(tf,pe)}function Os(i,t=0){return of(i),ef.constant=-t,Dc.ray.intersectPlane(ef,new Z)}function Ac(i){of(i);let t=[...Se.values()].flatMap(n=>[n.mesh,n.back]),e=Dc.intersectObjects(t)[0];if(e){let n=ct.pieces.find(r=>r.id===e.object.userData.id),s=Se.get(n.id);return{p:n,local:s.group.worldToLocal(e.point.clone()),world:e.point}}return null}function Rr(i,t){let e=Se.get(i.id);return e.group.updateMatrixWorld(!0),e.group.worldToLocal(t.clone())}function Cc(i,t,e,n=.01){let s=Se.get(i.id);return s.group.updateMatrixWorld(!0),s.group.localToWorld(new Z(t,e,n))}function Tn(i){zs=i;let t=ct.pieces.find(e=>e.id===i);_t("#selection").hidden=!t,t&&(_t("#selection-name").textContent=ct.sources[t.source].title||Tc[ct.sources[t.source].type]||"\u7EB8\u7247",_t("#detach").hidden=!t.book,_t("#store-piece").hidden=!!t.book,_t("#page-info").textContent=t.book?`\u7B2C ${t.page+1} / 10 \u7BC7 \xB7 \u8FD9\u9875\u7FFB\u8FC7 ${t.turns} \u6B21`:`${t.glue.length?"\u6709\u80F6\u75D5 \xB7 ":""}${ct.bonds.some(e=>e.includes(t.id))?"\u5DF2\u7C98\u5408\u7684\u7EB8\u7EC4":"\u4E00\u7247\u81EA\u7531\u7684\u7EB8"}`)}function af(){for(let i of ct.pieces){let t=Se.get(i.id);if(!t)continue;let e=Mi==="knife"&&(i.hasCuts||i.fragment||!i.book||Gi(i.poly)<i.w*i.h-1e-4);t.edge.material.color.set(e?13904166:12036493),t.edge.material.opacity=e?1:.46,t.edge.material.depthWrite=!1,t.edge.renderOrder=e?3:0}}function ka(i){Mi=i,af(),Wa("[data-tool]").forEach(t=>t.classList.toggle("active",t.dataset.tool===i)),_t("#hint").textContent={hand:"\u634F\u4F4F\u9875\u8FB9\u7FFB\u9605 \xB7 \u62D6\u7A7A\u767D\u684C\u9762\u5E73\u79FB \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 Shift \u62AC\u9AD8\u7EB8\u5F20",knife:"\u7EA2\u7EBF\u6807\u51FA\u5207\u53E3\u4E0E\u7EB8\u7247\u8FB9\u7F18 \xB7 \u5200\u53E3\u9760\u8FD1\u8FB9\u7F18\u4F1A\u5438\u9644 \xB7 \u8F6E\u5ED3\u95ED\u5408\u540E\u81EA\u52A8\u6210\u4E3A\u65B0\u7EB8\u7247",glue:"\u6309\u4F4F\u6D82\u80F6 \xB7 \u653E\u4E0B\u53E6\u4E00\u5F20\u7EB8\u7C98\u5408 \xB7 \u6E7F\u80F6 20 \u79D2\u5185\u9010\u6E10\u5E72\u71E5\uFF0C\u5E72\u540E\u4E0D\u518D\u7C98\u65B0\u7EB8"}[i],Ne.style.cursor=i==="knife"?"crosshair":i==="glue"?"cell":"grab"}function Uc(){Wi&&(Vn.remove(Wi),Wi.geometry.dispose(),Wi.material.dispose()),!(Xi.length<2)&&(Wi=new Ms(new Ye().setFromPoints(Xi.map(i=>new Z(i.x,i.y,i.z+.1))),new Ni({color:Mi==="knife"?15721676:14738369,depthTest:!1,transparent:!0,opacity:.9})),Wi.renderOrder=100,Vn.add(Wi))}function Ba(i,t){if(t.hidden)return!1;let e=t.getBoundingClientRect();return i.clientX>=e.left&&i.clientX<=e.right&&i.clientY>=e.top&&i.clientY<=e.bottom}function lf(i){if(!i)return;let t=i.p,e=t.glue.at(-1),n=i.local.x,s=i.local.y;if(!(e&&Math.hypot(e.x-n,e.y-s)<.055&&Date.now()-e.born<1e3)){if(t.glue.length>=1e3){oe("\u8FD9\u5F20\u7EB8\u7684\u80F6\u6C34\u5DF2\u7ECF\u8DB3\u591F\u591A\u4E86");return}t.glue.push({x:n,y:s,born:Date.now(),r:.065+Math.random()*.025,side:Math.cos(t.flip||0)<0?-1:1}),ei(t,Date.now(),!0),Ge()}}Ne.addEventListener("pointerdown",i=>{if(i.button!==0||kt)return;let t=Ac(i);if(Mi==="hand"&&!t){if(ct.mat){let r=Os(i),o=ct.mat;if(Math.abs(r.x-o.x)<2.85&&Math.abs(r.y-o.y)<2.5){wn(),kt={type:"mat",start:r,base:{x:o.x,y:o.y}},Ne.setPointerCapture(i.pointerId);return}}Tn(null),kt={type:"pan",sx:i.clientX,sy:i.clientY,camera:pe.position.clone()},Ne.setPointerCapture(i.pointerId),Ne.style.cursor="grabbing";return}if(wn(),Ne.setPointerCapture(i.pointerId),Mi==="knife"){Xi=[Os(i)],kt={type:"knife"},Uc();return}if(!t)return;if(Tn(t.p.id),Mi==="glue"){kt={type:"glue"},lf(t);return}let e=t.p,n=Tr(e.id,ct.bonds),s=Os(i,e.z);if(e.cutFrozen){delete e.cutFrozen;let r=Se.get(e.id);r.physics.awake=2}e.book?(kt={type:"turn",p:e,start:s,initialFlip:e.flip||0,initialX:e.x,initialZ:e.z,local:t.local.clone(),moved:0},e.pin={x:t.local.x,y:t.local.y,lift:0,dx:0,dy:0}):(kt={type:"move",p:e,start:s,local:t.local.clone(),ids:n,bases:new Map(ct.pieces.filter(r=>n.has(r.id)).map(r=>[r.id,{x:r.x,y:r.y,z:r.z}])),moved:0},e.settling=!1,delete e.turning,e.heldRigid=!0,delete e.pin,Bs.classList.add("dragging"),Ne.style.cursor="grabbing")});Ne.addEventListener("pointermove",i=>{if(!kt){Ne.style.cursor=Mi==="hand"?Ac(i)?"grab":"default":Mi==="knife"?"crosshair":"cell";return}if(kt.type==="pan"){let r=(pe.right-pe.left)/pe.zoom/Ne.clientWidth;pe.position.x=kt.camera.x-(i.clientX-kt.sx)*r,pe.position.y=kt.camera.y+(i.clientY-kt.sy)*r*.93,pe.position.z=kt.camera.z+(i.clientY-kt.sy)*r*.364,pe.updateMatrixWorld();return}if(kt.type==="glue"){lf(Ac(i));return}if(kt.type==="knife"){let r=Os(i);r&&r.distanceTo(Xi.at(-1))>.035&&(Xi.push(r),Uc());return}if(kt.type==="mat"){let r=Os(i);ct.mat.x=kt.base.x+r.x-kt.start.x,ct.mat.y=kt.base.y+r.y-kt.start.y,hf();return}let t=kt.p,e=Os(i,t.z);if(!e)return;if(kt.type==="turn"){let r=ct.books.find(l=>l.id===t.book),o=e.x-kt.start.x;kt.moved=Math.max(kt.moved,Math.abs(o));let a=Is.clamp(kt.initialFlip-o/t.w*Math.PI,0,Math.PI);t.turning=a,t.x=r.x+Math.cos(a)*t.w/2,t.z=.25+Math.sin(a)*t.w/2,t.pin.lift=Math.sin(a)*.55+Math.min(.7,Math.max(0,e.y-kt.start.y)*.5),t.pin.dx=o,t.pin.dy=e.y-kt.start.y,ei(t,Date.now(),!0);return}let n=e.x-kt.start.x,s=e.y-kt.start.y;kt.moved=Math.max(kt.moved,Math.hypot(n,s));for(let r of ct.pieces.filter(o=>kt.ids.has(o.id))){let o=kt.bases.get(r.id);r.x=Is.clamp(o.x+n,-9,9),r.y=Is.clamp(o.y+s,-5.8,5.8),r.z=o.z+(i.shiftKey?1.1:.16),r.heldRigid=!0,delete r.pin,r.settling=!1,delete r.turning,ei(r,Date.now(),!0)}});async function cf(i,t=!1){if(!kt)return;let e=kt;if(kt=null,Bs.classList.remove("dragging"),Ne.hasPointerCapture(i.pointerId)&&Ne.releasePointerCapture(i.pointerId),Ne.style.cursor="grab",e.type==="pan")return;if(e.type==="knife"){t||await Gx(Xi),Xi=[],Uc(),Ge();return}if(e.type==="glue"){Rc(),Ge();return}if(e.type==="mat"){Ge();return}let n=e.p;if(e.type==="turn"){let a=n.turning??e.initialFlip,l=t?e.initialFlip:a>Math.PI*.5?Math.PI:0,c=ct.books.find(f=>f.id===n.book);n.flip=l,n.turning=a,n.hingeVelocity=0,n.pin=void 0,n.settling=!0,l!==e.initialFlip&&(n.turns++,oe(n.turns===21?"\u7EB8\u9875\u5F00\u59CB\u7559\u4E0B\u4E00\u70B9\u7FFB\u9605\u7684\u75D5\u8FF9\u3002":"\u7EB8\u9875\u7FFB\u8FC7\u53BB\u4E86")),ei(n,Date.now(),!0),Tn(n.id),Ge();return}let s=ct.pieces.filter(a=>e.ids.has(a.id)),r=Math.min(...s.map(a=>a.z)),o=Math.max(...s.map(a=>kx({...a,z:r},e.ids)));for(let a of s)delete a.pin,delete a.heldRigid,a.z=o+a.z-r,ei(a,Date.now(),!0);!t&&Ba(i,_t("#export-drop"))?(qi=[...e.ids],df()):!t&&(Ba(i,_t("#basket"))||Ba(i,_t("#basket-drop"))||Ba(i,_t("#basket-toggle")))?uf(n.id):(Rc(),Tn(n.id)),Ge()}Ne.addEventListener("pointerup",i=>cf(i));Ne.addEventListener("pointercancel",i=>cf(i,!0));function Ga(i){return .16+(Math.cos(i.flip||0)<0?i.page:10-i.page)*.019}function kx(i,t){let e=.075;ct.mat&&Math.abs(i.x-ct.mat.x)<3.8&&Math.abs(i.y-ct.mat.y)<3.3&&(e=.17);for(let s of ct.pieces){if(t.has(s.id)||s.book&&Math.cos(s.flip||0)<0&&i.x>s.x+s.w/2)continue;let r=Rr(s,new Z(i.x,i.y,s.z));ti([r.x,r.y],s.poly)&&(e=Math.max(e,s.z+.023))}let n=Math.min(...ct.pieces.filter(s=>t.has(s.id)).map(s=>s.z));return e+Math.max(0,i.z-n)}function Rc(){let i=Date.now(),t=0;for(let e of ct.pieces)if(!(e.pin||e.turning))for(let n of e.glue){let s=kn(n.born,i);if(!s.wet)continue;let r=Cc(e,n.x,n.y);for(let o of ct.pieces){if(o.id===e.id||o.pin||o.turning||Math.abs(e.z-o.z)>.1||ct.bonds.some(l=>l.includes(e.id)&&l.includes(o.id)))continue;let a=Rr(o,r);if(ti([a.x,a.y],o.poly)){ct.bonds.push([e.id,o.id]),e.laminated=!0,o.laminated=!0,Se.get(e.id).physics.dirty=!0,Se.get(o.id).physics.dirty=!0,n.contact=s.amount,n.bondedAt=i,(e.book||o.book)&&(e.book=null,o.book=null),t++;break}}}t&&(oe("\u7C98\u4F4F\u4E86\u3002\u80F6\u6C34\u4F1A\u7EE7\u7EED\u6536\u7F29\u3001\u8D77\u76B1\uFF0C\u76F4\u5230\u5E72\u900F\u3002"),Ge())}function Vx(i,t){if(!(i.length<2)){if(i.length>5&&Math.hypot(i[0][0]-i.at(-1)[0],i[0][1]-i.at(-1)[1])<.15){i.push([...i[0]]);return}for(let e of[0,i.length-1]){let n=i[e];if(!ti(n,t))continue;let s=null,r=.12;for(let o of t)for(let a=1;a<o.length;a++){let l=o[a-1],c=o[a],f=c[0]-l[0],h=c[1]-l[1],u=f*f+h*h;if(u<1e-10)continue;let p=Math.max(0,Math.min(1,((n[0]-l[0])*f+(n[1]-l[1])*h)/u)),_=[l[0]+f*p,l[1]+h*p],y=Math.hypot(n[0]-_[0],n[1]-_[1]);y<r&&(r=y,s=_)}if(s){let o=Math.max(r,1e-5);i[e]=[s[0]+(s[0]-n[0])/o*.025,s[1]+(s[1]-n[1])/o*.025]}}}}async function Gx(i){if(!(i.length<2)){En("\u88C1\u5F00\u7EB8\u5F20\u7EA4\u7EF4\u2026");try{let l=function(c,f){s.push(c.id),e++;for(let h of f){let u=c.book&&h[0].some(y=>y[0]<-c.w/2+.025),p={...wi(c),physics:void 0,parentId:c.id,fragment:!0,hasCuts:!0,id:Ei(),poly:h,book:u?c.book:null,glue:c.glue.filter(y=>ti([y.x,y.y],h))},_=Se.get(c.id)?.physics;if(_){let y=new Ar(Sc(h),p,ct.sources[c.source].seed);for(let x=0;x<y.rest.length;x+=3){let g=_.sample(y.rest[x],y.rest[x+1]);y.pos.set(g,x)}p.physics=y.snapshot(),p.physicsVersion=2,p.cutFrozen=!0,p.pin=void 0,p.turning=void 0,p.settling=!1}n.push(p)}},t=wi(ct.bonds),e=0,n=[],s=[],r=ct.mat,o=i.map(c=>[c.x,c.y]),a=!1;for(let c of[...ct.pieces].sort((f,h)=>h.z-f.z)){let f=i.map(p=>{let _=Rr(c,new Z(p.x,p.y,c.z));return[_.x,_.y]});Vx(f,c.poly);let h=f;if(r&&c.z<.14){let p=[];for(let _=0;_<i.length;_++)Math.abs(i[_].x-r.x)<2.85&&Math.abs(i[_].y-r.y)<2.5?a=!0:p.push(f[_]);if(p.length!==f.length){h=[];let _=[],y=[];for(let g=0;g<i.length;g++)Math.abs(i[g].x-r.x)<2.85&&Math.abs(i[g].y-r.y)<2.5?(y.length>1&&_.push(y),y=[]):y.push(f[g]);y.length>1&&_.push(y);let x=[c.poly];for(let g of _)x=x.flatMap(C=>vc(C,g));if(Math.abs(x.reduce((g,C)=>g+Gi(C),0)-Gi(c.poly))<1e-5)continue;l(c,x);continue}}if(h.length<2)continue;let u=vc(c.poly,h);Math.abs(u.reduce((p,_)=>p+Gi(_),0)-Gi(c.poly))<1e-5||l(c,u)}if(r){let c=[];for(let f of i)Math.abs(f.x-r.x)<2.85&&Math.abs(f.y-r.y)<2.5?(c.push([f.x-r.x,f.y-r.y]),a=!0):(c.length>1&&r.scratches.push(c),c=[]);c.length>1&&r.scratches.push(c),a&&Fc()}if(e){let c=new Set(s);ct.pieces=ct.pieces.filter(h=>!c.has(h.id)),ct.bonds=ct.bonds.filter(h=>!h.some(u=>c.has(u)));for(let h of s){let u=Se.get(h);u&&Nc(u),Se.delete(h)}ct.pieces.push(...n),await Promise.all(n.map(qa));for(let[h,u]of t){let p=ct.pieces.filter(y=>y.id===h||y.parentId===h),_=ct.pieces.filter(y=>y.id===u||y.parentId===u);for(let y of p)for(let x of _)(y.glue.some(C=>C.contact!==void 0&&ti((()=>{let N=Rr(x,Cc(y,C.x,C.y));return[N.x,N.y]})(),x.poly))||x.glue.some(C=>C.contact!==void 0&&ti((()=>{let N=Rr(y,Cc(x,C.x,C.y));return[N.x,N.y]})(),y.poly)))&&!ct.bonds.some(C=>C.includes(y.id)&&C.includes(x.id))&&ct.bonds.push([y.id,x.id])}Rc();let f=n.find(h=>!h.book);Tn(f?.id||null),oe(`\u88C1\u5F00\u4E86 ${e} \u5C42\u7EB8${a?"\uFF0C\u57AB\u677F\u7559\u4E0B\u4E86\u4E00\u9053\u5212\u75D5":"\u3002\u6CA1\u6709\u57AB\u677F\uFF0C\u4E0B\u9762\u7684\u7EB8\u4E5F\u4F1A\u88AB\u5207\u5F00"}`)}else oe(a?"\u5200\u5C16\u5728\u57AB\u677F\u4E0A\u7559\u4E0B\u4E86\u5212\u75D5":"\u5212\u8FC7\u7EB8\u5F20\uFF0C\u5207\u53E3\u8FDE\u5230\u8FB9\u7F18\u6216\u95ED\u5408\u540E\u5C31\u80FD\u53D6\u4E0B\u7EB8\u7247\u3002")}catch(t){oe("\u8FD9\u6B21\u5207\u53E3\u592A\u590D\u6742\uFF0C\u8BF7\u5206\u51E0\u5200\u88C1\u5207\u3002"),console.error(t)}finally{En(null)}}}function Fc(){pn&&(Vn.remove(pn),pn.geometry.dispose(),pn.material.map.dispose(),pn.material.dispose(),pn=null),ct.mat&&(pn=new we(new fi(5.7,5,.08),new Kn({map:Cr(Ku(ct.mat.scratches)),roughness:.9})),pn.castShadow=!0,pn.receiveShadow=!0,Vn.add(pn),hf())}function hf(){pn&&ct.mat&&pn.position.set(ct.mat.x,ct.mat.y,.06)}async function Hx(i){wn();let t=Ei();ct.sources[t]={type:i,title:Tc[i],seed:Math.floor(Math.random()*1e8),old:i==="kraft"?.3:.025,w:3.45,h:4.8};let e=Va(t,2.8+(Math.random()-.5)*.8,(Math.random()-.5)*.5,{rot:(Math.random()-.5)*.17,z:.25+ct.pieces.filter(n=>!n.book).length*.018});ct.pieces.push(e),await qa(e),Tn(e.id),Ge(),oe("\u4E00\u5F20\u65B0\u7684"+Tc[i]+"\u3002\u634F\u4F4F\u4EFB\u610F\u4F4D\u7F6E\u8BD5\u8BD5\u3002")}async function Wx(){if(!kt){_t("#magazine").disabled=!0,En("\u6B63\u5728\u5BFB\u627E\u4E0B\u4E00\u672C\u6742\u5FD7\u2026");try{let i=await Zu(En);wn();let t={id:i.id,x:-2.4,y:.35,title:"\u6742\u5FD7 "+(ct.books.length+1)};ct.books.push(t),Fr(ct,t.id);for(let e=0;e<i.pages.length;e++){let n=Ei();ct.sources[n]={...i.pages[e],type:"magazine",index:e+1,w:2.9,h:4.25,old:.1+Math.random()*.7};let s=Va(n,t.x+(e===0?-1:1)*1.45,t.y,{book:t.id,page:e,flip:e===0?Math.PI:0,rot:0});s.z=Ga(s),ct.pieces.push(s)}await Yi(),oe("\u65E7\u6742\u5FD7\u5DF2\u6536\u5165\u4E66\u67B6\u3002"+i.note),Tn(ct.pieces.find(e=>e.book===t.id&&e.page===1)?.id)}catch(i){oe("\u7D20\u6750\u6682\u65F6\u53D6\u4E0D\u5230\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002"),console.error(i)}finally{_t("#magazine").disabled=!1,En(null)}}}function Xx(){let i=_t("#shelf-items");i.replaceChildren(),_t("#shelf-count").textContent=ct.books.filter(t=>t.id!==ct.activeBook).length;for(let[t,e]of ct.books.entries()){let n=document.createElement("div");n.className="shelf-book";let s=document.createElement("strong"),r=document.createElement("small"),o=document.createElement("button"),a=e.id===ct.activeBook?ct.pieces.filter(l=>l.book===e.id):e.pages||[];s.textContent=e.title||"\u6742\u5FD7 "+(t+1),r.textContent=a.length?ct.sources[a[0].source].title:"\u4E66\u9875\u5DF2\u5168\u90E8\u53D6\u4E0B",o.textContent=e.id===ct.activeBook?"\u6B63\u5728\u684C\u4E0A":"\u6362\u5230\u684C\u4E0A",o.disabled=e.id===ct.activeBook||!a.length,o.onclick=async()=>{if(!kt){wn(),En("\u6B63\u5728\u4ECE\u4E66\u67B6\u53D6\u51FA\u2026");try{Fr(ct,e.id),await Yi(),oe("\u5DF2\u6362\u4E0A"+s.textContent+"\uFF0C\u88C1\u53E3\u548C\u7FFB\u9605\u75D5\u8FF9\u90FD\u4FDD\u7559\u4E86\u3002")}finally{En(null)}}},n.append(s,r,o),i.append(n)}}function qx(i){let t=za.get(i.source),e=Fs(320,320),n=e.getContext("2d"),s=i.poly.flat(),r=Math.min(...s.map(f=>f[0])),o=Math.max(...s.map(f=>f[0])),a=Math.min(...s.map(f=>f[1])),l=Math.max(...s.map(f=>f[1])),c=270/Math.max(o-r,l-a);n.translate(160,160),n.scale(c,-c),n.translate(-(o+r)/2,-(l+a)/2),n.beginPath();for(let f of i.poly)f.forEach((h,u)=>u?n.lineTo(...h):n.moveTo(...h)),n.closePath();return n.clip("evenodd"),n.translate(-i.w/2,i.h/2),n.scale(1,-1),t&&n.drawImage(t.front,0,0,i.w,i.h),e.toDataURL()}function uf(i){let t=ct.pieces.find(s=>s.id===i);if(!t||t.book){oe("\u5148\u628A\u7EB8\u7247\u88C1\u4E0B\u6765\uFF0C\u6216\u70B9\u51FB\u201C\u53D6\u4E0B\u6574\u9875\u201D\u3002");return}let e=Tr(i,ct.bonds),n=ct.pieces.filter(s=>e.has(s.id));ct.basket.push({id:Ei(),name:ct.sources[t.source].title||"\u62FE\u5230\u7684\u7EB8\u7247",pieces:wi(n),bonds:ct.bonds.filter(s=>s.every(r=>e.has(r))),thumb:qx(t)}),ct.pieces=ct.pieces.filter(s=>!e.has(s.id)),ct.bonds=ct.bonds.filter(s=>!s.some(r=>e.has(r)));for(let s of e){let r=Se.get(s);r&&Nc(r),Se.delete(s)}Tn(null),Oc(),Ge(),oe("\u5DF2\u6536\u5165\u8BCD\u8BED\u7BD3\u5B50\uFF0C\u4E0B\u6B21\u6253\u5F00\u8FD8\u80FD\u7528\u3002")}function Oc(){_t("#basket-count").textContent=_t("#basket-total").textContent=ct.basket.length;let i=_t("#basket-items");if(i.replaceChildren(),!ct.basket.length){let t=document.createElement("div");t.className="empty-basket",t.innerHTML="<b>\u2667</b>\u8FD8\u6CA1\u6709\u62FE\u8D77\u7684\u53E5\u5B50",i.append(t)}for(let t of ct.basket){let e=document.createElement("div");e.className="basket-card";let n=new Image;n.src=t.thumb,n.alt=t.name;let s=document.createElement("footer"),r=document.createElement("span"),o=document.createElement("button");r.textContent=t.name,o.textContent="\u53D6\u51FA \u2197",o.onclick=async()=>{wn();let a=t.pieces[0],l=2.8-a.x,c=-a.y,f=Math.min(...t.pieces.map(h=>h.z));for(let h of t.pieces)h.x+=l,h.y+=c,h.z=h.z-f+.3,ct.pieces.push(h);ct.bonds.push(...t.bonds),ct.basket=ct.basket.filter(h=>h.id!==t.id),await Promise.all(t.pieces.map(qa)),Oc(),Tn(a.id),Ge(),oe("\u53D6\u56DE\u6765\u4E86\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u88C1\u526A\u3002")},s.append(r,o),e.append(n,s),i.append(e)}}function Ha(i){let t=ct.pieces.find(r=>r.id===zs);if(!t)return;if(t.book){oe("\u5148\u53D6\u4E0B\u6574\u9875\uFF0C\u518D\u65CB\u8F6C\u6446\u653E\u3002");return}wn();let e=Tr(t.id,ct.bonds),n=t.x,s=t.y;for(let r of ct.pieces.filter(o=>e.has(o.id))){let o=r.x-n,a=r.y-s;r.x=n+o*Math.cos(i)-a*Math.sin(i),r.y=s+o*Math.sin(i)+a*Math.cos(i),r.rot+=i,ei(r,Date.now(),!0)}Ge()}function Bc(i=ct.pieces){return[...new Set(i.map(t=>t.source))].map(t=>ct.sources[t]).filter(t=>t.source)}function Yx(i=ct.pieces){return Bc(i).map(t=>`${t.title}
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
\u5176\u4F59\u539F\u521B\u90E8\u5206\u7684\u6743\u5229\u7531\u521B\u4F5C\u8005\u4FDD\u7559\u3002`}function zc(i,t,e){let n=i instanceof Blob?i:new Blob([i],{type:e}),s=URL.createObjectURL(n),r=document.createElement("a");r.href=s,r.download=t,r.click(),setTimeout(()=>URL.revokeObjectURL(s),3e3)}function vi(i){return String(i||"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ff(i,t){_t("#info-title").textContent=i,_t("#info-content").innerHTML=t,_t("#info-dialog").showModal()}function df(){if(!qi.length){oe("\u5148\u9009\u4E2D\u4E00\u5F20\u7EB8\u6216\u4E00\u7EC4\u7C98\u597D\u7684\u4F5C\u54C1\u3002");return}_t("#export-drop").hidden=!0,_t("#export-dialog").showModal(),kc()}function kc(){Si||(Si=new Sr({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),Si.setSize(1400,1100),Si.outputColorSpace=Ee,_t("#export-preview").append(Si.domElement));let i=new ys;i.add(new bs(16776175,11182999,2.7));let t=new Es(16777215,2);t.position.set(-3,5,10),i.add(t);let e=new In;i.add(e);let n=ct.pieces.filter(f=>qi.includes(f.id));if(!n.length)return;let s=new Nn;for(let f of n){let h=Se.get(f.id);h.group.updateMatrixWorld(!0),s.expandByObject(h.group);let u=h.group.clone();u.position.copy(h.group.position),u.rotation.copy(h.group.rotation),e.add(u)}let r=s.getCenter(new Z),o=s.getSize(new Z);for(let f of e.children)f.position.sub(r);e.rotation.z=Number(_t("#export-angle").value)*Math.PI/180,e.rotation.x=Number(_t("#export-tilt").value)*Math.PI/180;let a=Math.max(o.x,o.y)*.8+1,l=new jn(-a*1.273,a*1.273,a,-a,.1,60);l.position.set(0,0,20),l.lookAt(0,0,0);let c=_t("#export-bg").value;if(c==="wood"){let f=new we(new Un(40,40),new Di({map:Ir}));f.position.z=-2,i.add(f)}else c==="paper"&&(i.background=new zt("#f5f0e5"));Si.setClearColor(0,0),Si.render(i,l),_t("#angle-value").textContent=_t("#export-angle").value+"\xB0"}async function Zx(){if(!qi.length)return;kc();let i=ct.pieces.filter(a=>qi.includes(a.id)),t=Bc(i),e=t.flatMap(a=>[`${a.title} \u2014 ${a.author} \xB7 ${a.license}`,a.source,`\u914D\u56FE\uFF1A${a.imageAuthor||a.author} \xB7 ${a.imageLicense||"Public domain"} \xB7 ${a.imageSource||a.source}`]);t.some(a=>a.licenseUrl?.includes("/by-sa/"))&&e.push("\u6587\u5B57\u6539\u7F16\u4E0E\u62FC\u8D34\uFF1A\u77E5\u8BC6\u5171\u4EAB\u7F72\u540D\u2014\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB 4.0 \xB7 https://creativecommons.org/licenses/by-sa/4.0/");let s=e.length?60+e.length*20:0,r=Fs(1400,1100+s),o=r.getContext("2d");o.drawImage(Si.domElement,0,0),s&&(o.fillStyle="#f5f0e5",o.fillRect(0,1100,1400,s),o.fillStyle="#686b5b",o.font="13px sans-serif",o.fillText("\u62FE\u53E5 / \u7D20\u6750\u51FA\u5904 \xB7 \u6458\u5F55\u3001\u88C1\u5207\u4E0E\u91CD\u65B0\u7F16\u6392",30,1130),e.forEach((a,l)=>o.fillText(a,30,1155+l*20,1340))),r.toBlob(a=>{zc(a,"\u62FE\u53E5-"+new Date().toISOString().slice(0,10)+".png","image/png"),oe("\u4F5C\u54C1\u56FE\u7247\u5DF2\u5BFC\u51FA\u3002")},"image/png")}_t("#shelf-toggle").onclick=()=>{_t("#shelf").hidden=!_t("#shelf").hidden};_t("#magazine").onclick=Wx;Wa("[data-paper]").forEach(i=>i.onclick=()=>Hx(i.dataset.paper));Wa("[data-tool]").forEach(i=>i.onclick=()=>ka(i.dataset.tool));_t("#rotate-left").onclick=()=>Ha(Math.PI/18);_t("#rotate-right").onclick=()=>Ha(-Math.PI/18);_t("#mat").onclick=()=>{wn(),ct.mat?oe("\u57AB\u677F\u5DF2\u7ECF\u5728\u684C\u4E0A\uFF0C\u62D6\u52A8\u9732\u51FA\u7684\u90E8\u5206\u5C31\u80FD\u79FB\u52A8\u3002"):(ct.mat={x:2.6,y:0,scratches:[]},Fc(),oe("\u57AB\u677F\u653E\u597D\u4E86\uFF0C\u53EF\u62D6\u52A8\u9732\u51FA\u7684\u90E8\u5206\u79FB\u52A8\u3002\u653E\u5728\u5B83\u4E0A\u9762\u7684\u7EB8\u4ECD\u80FD\u5207\u5F00\u3002")),Ge()};_t("#detach").onclick=()=>{let i=ct.pieces.find(t=>t.id===zs);i&&(wn(),i.book=null,i.fragment=!0,i.flip=0,i.x=2,i.y=.1,i.z=.4,ei(i,Date.now(),!0),Tn(i.id),Ge(),oe("\u6574\u9875\u5DF2\u53D6\u4E0B\uFF0C\u53EF\u4EE5\u81EA\u7531\u88C1\u526A\u3002"))};_t("#store-piece").onclick=()=>{wn(),uf(zs)};_t("#basket-toggle").onclick=()=>{_t("#basket").hidden=!_t("#basket").hidden};Wa("[data-close]").forEach(i=>i.onclick=()=>_t("#"+i.dataset.close).hidden=!0);_t("#undo").onclick=async()=>{!bi.length||kt||(Pr.push(wi(ct)),ct=bi.pop(),await Yi(),Xa(),oe("\u5DF2\u64A4\u9500"))};_t("#redo").onclick=async()=>{!Pr.length||kt||(bi.push(wi(ct)),ct=Pr.pop(),await Yi(),Xa(),oe("\u5DF2\u91CD\u505A"))};_t("#export-open").onclick=()=>{_t("#export-drop").hidden=!1,oe("\u628A\u4F5C\u54C1\u62D6\u8FDB\u53F3\u4E0A\u65B9\u6846\u5185\uFF0C\u6216\u9009\u4E2D\u540E\u70B9\u51FB\u201C\u4F7F\u7528\u5F53\u524D\u9009\u4E2D\u4F5C\u54C1\u201D\u3002")};_t("#export-cancel").onclick=()=>_t("#export-drop").hidden=!0;function pf(){if(!zs){oe("\u5148\u70B9\u51FB\u684C\u4E0A\u7684\u4E00\u5F20\u7EB8\u3002");return}qi=[...Tr(zs,ct.bonds)],df()}_t("#export-current").onclick=pf;_t("#export-selected").onclick=pf;_t("#export-close").onclick=()=>_t("#export-dialog").close();["angle","tilt","bg"].forEach(i=>_t("#export-"+i).oninput=kc);_t("#export-download").onclick=Zx;_t("#export-credits").onclick=()=>zc(Yx(ct.pieces.filter(i=>qi.includes(i.id))),"\u62FE\u53E5-\u7D20\u6750\u51FA\u5904.txt","text/plain;charset=utf-8");_t("#info-close").onclick=()=>_t("#info-dialog").close();_t("#sources").onclick=()=>ff("\u6BCF\u4E00\u7247\u7EB8\uFF0C\u90FD\u6709\u6765\u5904","<p>\u6587\u5B57\u4F7F\u7528\u53EF\u6539\u7F16\u7684\u5F00\u653E\u8BB8\u53EF\u5185\u5BB9\uFF0C\u9986\u85CF\u914D\u56FE\u53EA\u9009\u62E9\u6807\u8BB0\u4E3A\u516C\u6709\u9886\u57DF\u7684\u56FE\u50CF\u3002\u6742\u5FD7\u6392\u7248\u4E0E\u9009\u56FE\u4E3A\u91CD\u65B0\u7EC4\u5408\uFF0C\u914D\u56FE\u4E0D\u4E00\u5B9A\u5BF9\u5E94\u6587\u7AE0\u5185\u5BB9\u3002</p>"+Bc([...ct.pieces,...ct.basket.flatMap(i=>i.pieces)]).map(i=>`<article><strong>${vi(i.title)}</strong><small>${vi(i.author)} \xB7 ${vi(i.license)}</small><a href="${vi(i.source)}" target="_blank" rel="noopener">\u6587\u7AE0\u4E0E\u4F5C\u8005\u8BB0\u5F55 \u2197</a> \xB7 <a href="${vi(i.licenseUrl)}" target="_blank" rel="noopener">\u4F7F\u7528\u8BB8\u53EF \u2197</a><small>\u914D\u56FE\uFF1A${vi(i.imageAuthor)} \xB7 ${vi(i.imageLicense)}</small><a href="${vi(i.imageSource)}" target="_blank" rel="noopener">\u56FE\u50CF\u51FA\u5904 \u2197</a></article>`).join(""));_t("#help").onclick=()=>ff("\u4E00\u5F20\u684C\u5B50\u7684\u4F7F\u7528\u65B9\u6CD5","<h3>\u7FFB\u9605\u4E0E\u634F\u7EB8</h3><p>\u7528\u300C\u624B\u300D\u6309\u4F4F\u6742\u5FD7\u4E00\u9875\u7684\u5916\u4FA7\uFF0C\u5411\u4E66\u810A\u53E6\u4E00\u4FA7\u62D6\u52A8\u7FFB\u9875\u3002\u6563\u9875\u70B9\u54EA\u91CC\u5C31\u4ECE\u54EA\u91CC\u634F\u8D77\uFF0C\u62D6\u52A8\u6446\u653E\uFF1B\u6309\u4F4F Shift \u53EF\u62AC\u5F97\u66F4\u9AD8\u3002Q / E \u65CB\u8F6C\u9009\u4E2D\u7684\u6563\u9875\u3002\u62D6\u52A8\u7A7A\u767D\u684C\u9762\u53EF\u5E73\u79FB\u955C\u5934\uFF0C\u6EDA\u8F6E\u7F29\u653E\uFF1B\u89C6\u89D2\u65B9\u5411\u56FA\u5B9A\u3002</p><h3>\u88C1\u51FA\u4E00\u4E2A\u8BCD</h3><p>\u5207\u6362\u300C\u88C1\u7EB8\u5200\u300D\uFF0C\u6309\u4F4F\u753B\u4E00\u6761\u5207\u7EBF\u3002\u5207\u7EBF\u901A\u5230\u7EB8\u5F20\u4E24\u4FA7\u8FB9\u7F18\uFF0C\u6216\u8005\u7ED5\u6210\u95ED\u5408\u8F6E\u5ED3\uFF0C\u5C31\u80FD\u5206\u79BB\u7EB8\u7247\u3002\u7EB8\u7247\u53EF\u4EE5\u7EE7\u7EED\u88C1\u3002\u6CA1\u6709\u57AB\u677F\u65F6\u4F1A\u5207\u5230\u4E0B\u5C42\uFF1B\u57AB\u677F\u672C\u8EAB\u4F1A\u7559\u4E0B\u5200\u75D5\u3002</p><h3>\u7C98\u8D77\u6765\uFF0C\u7B49\u4E00\u4F1A\u513F</h3><p>\u9009\u300C\u80F6\u6C34\u300D\u6309\u4F4F\u6D82\u62B9\uFF0C20 \u79D2\u5185\u5C06\u7EB8\u53E0\u4E0A\u53BB\u3002\u80F6\u6C34\u9010\u6E10\u53D8\u5E72\u5E76\u7275\u52A8\u7EB8\u9762\u6536\u7F29\u3001\u8D77\u76B1\u3001\u7FD8\u8FB9\u3002\u6E7F\u5EA6\u4E0D\u540C\uFF0C\u63A5\u89E6\u65F6\u7684\u7C98\u5408\u4E0E\u76B1\u8936\u4E5F\u4E0D\u540C\u3002\u5E72\u80F6\u4E0D\u7C98\u65B0\u7EB8\uFF0C\u5DF2\u7C98\u597D\u7684\u7EB8\u7EC4\u4E00\u8D77\u79FB\u52A8\u3002\u62AC\u8D77\u6E7F\u80F6\u7EB8\u65F6\u80F6\u6DB2\u4F1A\u7F13\u6162\u6D41\u52A8\u3002</p><h3>\u628A\u5076\u7136\u6536\u85CF\u8D77\u6765</h3><p>\u62D6\u52A8\u6563\u9875\u6216\u7EB8\u7247\u5230\u5DE6\u4E0B\u65B9\u8BCD\u8BED\u7BD3\u5B50\u533A\u57DF\uFF0C\u6216\u9009\u4E2D\u540E\u70B9\u300C\u653E\u5165\u7BD3\u5B50\u300D\u3002\u70B9\u51FB\u4FA7\u8FB9\u680F\u8BCD\u8BED\u7BD3\u5B50\uFF0C\u53EF\u4EE5\u518D\u6B21\u53D6\u51FA\uFF0C\u7EE7\u7EED\u88C1\u526A\u3002\u5DE5\u4F5C\u53F0\u548C\u7BD3\u5B50\u81EA\u52A8\u4FDD\u5B58\u5728\u672C\u6D4F\u89C8\u5668\uFF1B\u6E05\u7406\u7F51\u7AD9\u6570\u636E\u4F1A\u6E05\u9664\u5B83\u4EEC\uFF0C\u5EFA\u8BAE\u5076\u5C14\u4E0B\u8F7D\u5907\u4EFD\u3002</p><h3>\u5E26\u8D70\u4E00\u9996\u8BD7</h3><p>\u70B9\u51FB\u300C\u5BFC\u51FA\u4E00\u9996\u8BD7\u300D\uFF0C\u628A\u7EB8\u6216\u7C98\u597D\u7684\u4F5C\u54C1\u62D6\u8FDB\u5BFC\u51FA\u533A\u57DF\uFF0C\u518D\u8C03\u6574\u4F5C\u54C1\u89D2\u5EA6\u3001\u503E\u89D2\u548C\u80CC\u666F\u3002\u5BFC\u51FA PNG \u4FDD\u5B58\u5230\u672C\u5730\uFF0C\u5E76\u9644\u4E0A\u7D20\u6750\u51FA\u5904\u3002</p><p>H \u624B \xB7 K \u5200 \xB7 G \u80F6\u6C34 \xB7 Q / E \u65CB\u8F6C \xB7 Ctrl+Z \u64A4\u9500 \xB7 Ctrl+Shift+Z \u91CD\u505A\u3002\u63A8\u8350\u7535\u8111\u9F20\u6807\u64CD\u4F5C\uFF0C\u4E5F\u652F\u6301\u89E6\u63A7\u62D6\u52A8\u3002</p>");_t("#backup").onclick=()=>zc(JSON.stringify(ct),"\u62FE\u53E5-\u5DE5\u4F5C\u53F0\u5907\u4EFD.json","application/json");_t("#restore").onchange=async i=>{let t=i.target.files[0];if(t)try{let e=JSON.parse(await t.text());if(e.version!==1||!Array.isArray(e.pieces)||!Array.isArray(e.basket)||!e.sources||e.pieces.length>1e3)throw Error();wn(),ct=e,En("\u6B63\u5728\u6062\u590D\u7EB8\u5F20\u2026"),await Yi(),oe("\u5DE5\u4F5C\u53F0\u548C\u8BCD\u8BED\u7BD3\u5B50\u5DF2\u6062\u590D")}catch{oe("\u65E0\u6CD5\u8BFB\u53D6\u8FD9\u4E2A\u5907\u4EFD\u6587\u4EF6\u3002")}finally{En(null),i.target.value=""}};addEventListener("keydown",i=>{if(!(document.querySelector("dialog[open]")||/INPUT|TEXTAREA|SELECT/.test(i.target.tagName))){if(i.ctrlKey||i.metaKey){i.key.toLowerCase()==="z"&&(i.preventDefault(),_t(i.shiftKey?"#redo":"#undo").click());return}i.key.toLowerCase()==="h"&&ka("hand"),i.key.toLowerCase()==="k"&&ka("knife"),i.key.toLowerCase()==="g"&&ka("glue"),i.key.toLowerCase()==="q"&&Ha(Math.PI/18),i.key.toLowerCase()==="e"&&Ha(-Math.PI/18),i.key==="Escape"&&(_t("#basket").hidden=!0,_t("#export-drop").hidden=!0)}});function Ya(i){pe.zoom=Is.clamp(i,.65,3),pe.updateProjectionMatrix(),_t("#zoom-reset").textContent=Math.round(pe.zoom*100)+"%"}_t("#zoom-in").onclick=()=>Ya(pe.zoom*1.2);_t("#zoom-out").onclick=()=>Ya(pe.zoom/1.2);_t("#zoom-reset").onclick=()=>{pe.position.set(0,-9,23),Ya(1)};Ne.addEventListener("wheel",i=>{i.preventDefault(),Ya(pe.zoom*Math.exp(-i.deltaY*.0015))},{passive:!1});function mf(){let i=Bs.clientWidth,t=Bs.clientHeight;Gn.setSize(i,t,!1);let e=i/t,n=Math.max(7.4,5.1*e),s=n/e;pe.left=-n,pe.right=n,pe.top=s,pe.bottom=-s,pe.updateProjectionMatrix()}new ResizeObserver(mf).observe(Bs);mf();var nf=0,sf=performance.now();function Ic(i){requestAnimationFrame(Ic);let t=Date.now(),e=Math.min((i-sf)/1e3,.033);sf=i;for(let n of ct.pieces){let s=Se.get(n.id);if(s){if(n.settling){n.hingeVelocity+=(n.flip-n.turning)*50*e-n.hingeVelocity*12*e,n.turning+=n.hingeVelocity*e;let r=ct.books.find(o=>o.id===n.book);r&&(n.x=r.x+Math.cos(n.turning)*n.w/2,n.z=Ga(n)+Math.sin(n.turning)*n.w/2),Math.abs(n.flip-n.turning)<.002&&Math.abs(n.hingeVelocity)<.02&&(n.turning=void 0,n.settling=!1,n.z=Ga(n),Ge())}s.physics.paper=n,!n.heldRigid&&(!n.fragment||n.laminated||n.glue.some(r=>kn(r.born,t).wet))&&(qu(n,s.physics,e,t),s.physics.step(e,t)),ei(n,t)}}if(i-nf>500){nf=i;let n=ct.pieces.flatMap(s=>s.glue).filter(s=>kn(s.born,t).wet);if(_t("#glue-status").hidden=!n.length,n.length){let s=Math.max(...n.map(r=>Math.max(0,20-(t-r.born)/1e3)));_t("#glue-status").textContent="\u80F6\u6C34\u6B63\u5728\u53D8\u5E72 \xB7 "+s.toFixed(1)+" \u79D2 "+(s<7?"\uFF0F \u534A\u5E72\u5FAE\u76B1":"\uFF0F \u6E7F\u6DA6\u53EF\u7C98"),Ge()}}Gn.render(Vn,pe)}async function $x(){try{let i=await Mc("state","workspace");if(i?.version===1){if(ct=i,!ct.chineseOnly){let t=await fetch("./seed.json").then(n=>n.json()),e=0;for(let n of Object.values(ct.sources))n.type==="magazine"&&Object.assign(n,t[e++%t.length]);ct.chineseOnly=!0}await Yi(),oe("\u684C\u4E0A\u7684\u7EB8\u548C\u8BCD\u8BED\u7BD3\u5B50\uFF0C\u90FD\u8FD8\u5728\u3002")}else{let t=await fetch("./seed.json").then(s=>s.json()),e={id:Ei(),x:-2.4,y:.35};ct.books.push(e);for(let s=0;s<10;s++){let r=t[s%t.length],o=Ei();ct.sources[o]={...r,type:"magazine",index:s+1,seed:s*1927+39,old:.15+s%4*.12,layout:s%5,w:2.9,h:4.25};let a=Va(o,e.x+(s===0?-1:1)*1.45,e.y,{book:e.id,page:s,flip:s===0?Math.PI:0});a.z=Ga(a),ct.pieces.push(a)}let n=Ei();ct.sources[n]={type:"white",title:"\u767D\u7EB8",seed:80,old:.02,w:3.45,h:4.8},ct.pieces.push(Va(n,2.75,-.1,{rot:-.08})),await Yi(),bi=[],Xa()}En(null),requestAnimationFrame(Ic)}catch(i){console.error(i),En(null),oe("\u6062\u590D\u5DE5\u4F5C\u53F0\u5931\u8D25\uFF0C\u53EF\u4EE5\u7528\u5907\u4EFD\u6062\u590D\u6216\u91CD\u65B0\u53D6\u7EB8\u3002"),requestAnimationFrame(Ic)}}document.addEventListener("visibilitychange",()=>{document.hidden&&Ua("state","workspace",wi(ct)).catch(()=>{})});$x();
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
