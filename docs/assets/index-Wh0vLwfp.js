import{r as Ct,b as Et,g as z,p as wt,i as Ht,d as Ot,t as At}from"./registry-EgEQwbXk.js";import{_ as K}from"./dynamic-tag-7vXwaVzE.js";import{_ as Vt}from"./index-YaSSGaP-.js";import{_ as It}from"./render-tag-_0PNNh6Y.js";import{s as jt}from"./index-l3FQEXUN.js";import{s as zt}from"./index-ERL0bCNR.js";const Xt={tourtip:"region",tooltip:"tooltip",infotip:"tooltip"};class Yt extends Marko.Component{handleCloseButton(e){this.emit("overlay-close",{originalEvent:e})}}const ut="lqFcW5yW",lt=At(ut);function qt(){}Ct.r(ut,()=>Yt);const Tt={};lt._=Et(function(t,e,n,o,i,s){t.toJSON=qt;const{id:r,type:l,heading:c,content:a,footer:p,a11yCloseText:u}=t;if(e.be("span",{id:r,class:z(`${l}__overlay`),role:Xt[l],"aria-labelledby":l==="tourtip"&&c&&o.elId("tourtip-label")},"0",o,null,0),e.e("span",{class:z(`${l}__pointer`)},"1",o,0,1),e.be("span",{class:z(`${l}__mask`)},"2",o,null,1),e.be("span",{class:z(`${l}__cell`)},"3",o,null,1),e.be("span",{class:z(`${l}__content`)},"4",o,null,1),c){const{as:h,class:f,renderBody:d,id:m,...x}=c;K(e,h||"span",()=>({...wt(x),class:[`${l}__heading`,f],id:n.elId("tourtip-label")}),g=>{K(g,d,null,null,null,null,n,"6")},null,null,n,"5")}if(a){const h=Object.keys(a).length>1&&"span";h?e.be(h,Ht(wt(a)),"7",o,null,4):e.bf("f_7",o),K(e,a.renderBody,null,null,null,null,n,"8"),h?e.ee():e.ef()}e.ee(),l!=="tooltip"&&(e.be("button",{"aria-label":u,class:z(["icon-btn","icon-btn--transparent",`${l}__close`]),type:"button"},"9",o,null,0,{onclick:n.d("click","handleCloseButton",!1)}),It(Vt,{},e,n,"10"),e.ee()),p&&(e.be("span",{class:z([`${l}__footer`,p.class])},"11",o,null,1),K(e,p,null,null,null,null,n,"12"),e.ee()),e.ee(),e.ee(),e.ee()},{t:ut,s:!0},Tt);lt.Component=Ot(Tt,lt._);const N=Math.min,$=Math.max,nt=Math.round,et=Math.floor,V=t=>({x:t,y:t}),Jt={left:"right",right:"left",bottom:"top",top:"bottom"},Ut={start:"end",end:"start"};function ct(t,e,n){return $(t,N(e,n))}function U(t,e){return typeof t=="function"?t(e):t}function D(t){return t.split("-")[0]}function Q(t){return t.split("-")[1]}function kt(t){return t==="x"?"y":"x"}function dt(t){return t==="y"?"height":"width"}function Z(t){return["top","bottom"].includes(D(t))?"y":"x"}function pt(t){return kt(Z(t))}function Kt(t,e,n){n===void 0&&(n=!1);const o=Q(t),i=pt(t),s=dt(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=ot(r)),[r,ot(r)]}function Gt(t){const e=ot(t);return[at(t),e,at(e)]}function at(t){return t.replace(/start|end/g,e=>Ut[e])}function Qt(t,e,n){const o=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?s:r;default:return[]}}function Zt(t,e,n,o){const i=Q(t);let s=Qt(D(t),n==="start",o);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(at)))),s}function ot(t){return t.replace(/left|right|bottom|top/g,e=>Jt[e])}function te(t){return{top:0,right:0,bottom:0,left:0,...t}}function ht(t){return typeof t!="number"?te(t):{top:t,right:t,bottom:t,left:t}}function q(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function bt(t,e,n){let{reference:o,floating:i}=t;const s=Z(e),r=pt(e),l=dt(r),c=D(e),a=s==="y",p=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,h=o[l]/2-i[l]/2;let f;switch(c){case"top":f={x:p,y:o.y-i.height};break;case"bottom":f={x:p,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:u};break;case"left":f={x:o.x-i.width,y:u};break;default:f={x:o.x,y:o.y}}switch(Q(e)){case"start":f[r]-=h*(n&&a?-1:1);break;case"end":f[r]+=h*(n&&a?-1:1);break}return f}const ee=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,l=s.filter(Boolean),c=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:p,y:u}=bt(a,o,c),h=o,f={},d=0;for(let m=0;m<l.length;m++){const{name:x,fn:g}=l[m],{x:y,y:w,data:v,reset:b}=await g({x:p,y:u,initialPlacement:o,placement:h,strategy:i,middlewareData:f,rects:a,platform:r,elements:{reference:t,floating:e}});if(p=y??p,u=w??u,f={...f,[x]:{...f[x],...v}},b&&d<=50){d++,typeof b=="object"&&(b.placement&&(h=b.placement),b.rects&&(a=b.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):b.rects),{x:p,y:u}=bt(a,h,c)),m=-1;continue}}return{x:p,y:u,placement:h,strategy:i,middlewareData:f}};async function St(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:p="viewport",elementContext:u="floating",altBoundary:h=!1,padding:f=0}=U(e,t),d=ht(f),x=l[h?u==="floating"?"reference":"floating":u],g=q(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(x)))==null||n?x:x.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:a,rootBoundary:p,strategy:c})),y=u==="floating"?{...r.floating,x:o,y:i}:r.reference,w=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),v=await(s.isElement==null?void 0:s.isElement(w))?await(s.getScale==null?void 0:s.getScale(w))||{x:1,y:1}:{x:1,y:1},b=q(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:y,offsetParent:w,strategy:c}):y);return{top:(g.top-b.top+d.top)/v.y,bottom:(b.bottom-g.bottom+d.bottom)/v.y,left:(g.left-b.left+d.left)/v.x,right:(b.right-g.right+d.right)/v.x}}const ne=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:r,elements:l,middlewareData:c}=e,{element:a,padding:p=0}=U(t,e)||{};if(a==null)return{};const u=ht(p),h={x:n,y:o},f=pt(i),d=dt(f),m=await r.getDimensions(a),x=f==="y",g=x?"top":"left",y=x?"bottom":"right",w=x?"clientHeight":"clientWidth",v=s.reference[d]+s.reference[f]-h[f]-s.floating[d],b=h[f]-s.reference[f],C=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a));let A=C?C[w]:0;(!A||!await(r.isElement==null?void 0:r.isElement(C)))&&(A=l.floating[w]||s.floating[d]);const P=v/2-b/2,j=A/2-m[d]/2-1,_=N(u[g],j),F=N(u[y],j),E=_,M=A-m[d]-F,R=A/2-m[d]/2+P,O=ct(E,R,M),T=!c.arrow&&Q(i)!=null&&R!=O&&s.reference[d]/2-(R<E?_:F)-m[d]/2<0,L=T?R<E?R-E:R-M:0;return{[f]:h[f]+L,data:{[f]:O,centerOffset:R-O-L,...T&&{alignmentOffset:L}},reset:T}}}),oe=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:s,rects:r,initialPlacement:l,platform:c,elements:a}=e,{mainAxis:p=!0,crossAxis:u=!0,fallbackPlacements:h,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:d="none",flipAlignment:m=!0,...x}=U(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const g=D(i),y=D(l)===l,w=await(c.isRTL==null?void 0:c.isRTL(a.floating)),v=h||(y||!m?[ot(l)]:Gt(l));!h&&d!=="none"&&v.push(...Zt(l,m,d,w));const b=[l,...v],C=await St(e,x),A=[];let P=((o=s.flip)==null?void 0:o.overflows)||[];if(p&&A.push(C[g]),u){const E=Kt(i,r,w);A.push(C[E[0]],C[E[1]])}if(P=[...P,{placement:i,overflows:A}],!A.every(E=>E<=0)){var j,_;const E=(((j=s.flip)==null?void 0:j.index)||0)+1,M=b[E];if(M)return{data:{index:E,overflows:P},reset:{placement:M}};let R=(_=P.filter(O=>O.overflows[0]<=0).sort((O,T)=>O.overflows[1]-T.overflows[1])[0])==null?void 0:_.placement;if(!R)switch(f){case"bestFit":{var F;const O=(F=P.map(T=>[T.placement,T.overflows.filter(L=>L>0).reduce((L,rt)=>L+rt,0)]).sort((T,L)=>T[1]-L[1])[0])==null?void 0:F[0];O&&(R=O);break}case"initialPlacement":R=l;break}if(i!==R)return{reset:{placement:R}}}return{}}}};function Lt(t){const e=N(...t.map(s=>s.left)),n=N(...t.map(s=>s.top)),o=$(...t.map(s=>s.right)),i=$(...t.map(s=>s.bottom));return{x:e,y:n,width:o-e,height:i-n}}function ie(t){const e=t.slice().sort((i,s)=>i.y-s.y),n=[];let o=null;for(let i=0;i<e.length;i++){const s=e[i];!o||s.y-o.y>o.height/2?n.push([s]):n[n.length-1].push(s),o=s}return n.map(i=>q(Lt(i)))}const se=function(t){return t===void 0&&(t={}),{name:"inline",options:t,async fn(e){const{placement:n,elements:o,rects:i,platform:s,strategy:r}=e,{padding:l=2,x:c,y:a}=U(t,e),p=Array.from(await(s.getClientRects==null?void 0:s.getClientRects(o.reference))||[]),u=ie(p),h=q(Lt(p)),f=ht(l);function d(){if(u.length===2&&u[0].left>u[1].right&&c!=null&&a!=null)return u.find(x=>c>x.left-f.left&&c<x.right+f.right&&a>x.top-f.top&&a<x.bottom+f.bottom)||h;if(u.length>=2){if(Z(n)==="y"){const _=u[0],F=u[u.length-1],E=D(n)==="top",M=_.top,R=F.bottom,O=E?_.left:F.left,T=E?_.right:F.right,L=T-O,rt=R-M;return{top:M,bottom:R,left:O,right:T,width:L,height:rt,x:O,y:M}}const x=D(n)==="left",g=$(...u.map(_=>_.right)),y=N(...u.map(_=>_.left)),w=u.filter(_=>x?_.left===y:_.right===g),v=w[0].top,b=w[w.length-1].bottom,C=y,A=g,P=A-C,j=b-v;return{top:v,bottom:b,left:C,right:A,width:P,height:j,x:C,y:v}}return h}const m=await s.getElementRects({reference:{getBoundingClientRect:d},floating:o.floating,strategy:r});return i.reference.x!==m.reference.x||i.reference.y!==m.reference.y||i.reference.width!==m.reference.width||i.reference.height!==m.reference.height?{reset:{rects:m}}:{}}}};async function re(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=D(n),l=Q(n),c=Z(n)==="y",a=["left","top"].includes(r)?-1:1,p=s&&c?-1:1,u=U(e,t);let{mainAxis:h,crossAxis:f,alignmentAxis:d}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof d=="number"&&(f=l==="end"?d*-1:d),c?{x:f*p,y:h*a}:{x:h*a,y:f*p}}const le=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:l}=e,c=await re(e,t);return r===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:s+c.y,data:{...c,placement:r}}}}},ce=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:l={fn:x=>{let{x:g,y}=x;return{x:g,y}}},...c}=U(t,e),a={x:n,y:o},p=await St(e,c),u=Z(D(i)),h=kt(u);let f=a[h],d=a[u];if(s){const x=h==="y"?"top":"left",g=h==="y"?"bottom":"right",y=f+p[x],w=f-p[g];f=ct(y,f,w)}if(r){const x=u==="y"?"top":"left",g=u==="y"?"bottom":"right",y=d+p[x],w=d-p[g];d=ct(y,d,w)}const m=l.fn({...e,[h]:f,[u]:d});return{...m,data:{x:m.x-n,y:m.y-o}}}}};function I(t){return $t(t)?(t.nodeName||"").toLowerCase():"#document"}function k(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function H(t){var e;return(e=($t(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function $t(t){return t instanceof Node||t instanceof k(t).Node}function W(t){return t instanceof Element||t instanceof k(t).Element}function B(t){return t instanceof HTMLElement||t instanceof k(t).HTMLElement}function vt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof k(t).ShadowRoot}function tt(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=S(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function ae(t){return["table","td","th"].includes(I(t))}function mt(t){const e=gt(),n=S(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function fe(t){let e=J(t);for(;B(e)&&!it(e);){if(mt(e))return e;e=J(e)}return null}function gt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function it(t){return["html","body","#document"].includes(I(t))}function S(t){return k(t).getComputedStyle(t)}function st(t){return W(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function J(t){if(I(t)==="html")return t;const e=t.assignedSlot||t.parentNode||vt(t)&&t.host||H(t);return vt(e)?e.host:e}function Bt(t){const e=J(t);return it(e)?t.ownerDocument?t.ownerDocument.body:t.body:B(e)&&tt(e)?e:Bt(e)}function G(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Bt(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=k(i);return s?e.concat(r,r.visualViewport||[],tt(i)?i:[],r.frameElement&&n?G(r.frameElement):[]):e.concat(i,G(i,[],n))}function Pt(t){const e=S(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=B(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,l=nt(n)!==s||nt(o)!==r;return l&&(n=s,o=r),{width:n,height:o,$:l}}function xt(t){return W(t)?t:t.contextElement}function Y(t){const e=xt(t);if(!B(e))return V(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=Pt(e);let r=(s?nt(n.width):n.width)/o,l=(s?nt(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const ue=V(0);function Ft(t){const e=k(t);return!gt()||!e.visualViewport?ue:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function de(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==k(t)?!1:e}function X(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=xt(t);let r=V(1);e&&(o?W(o)&&(r=Y(o)):r=Y(t));const l=de(s,n,o)?Ft(s):V(0);let c=(i.left+l.x)/r.x,a=(i.top+l.y)/r.y,p=i.width/r.x,u=i.height/r.y;if(s){const h=k(s),f=o&&W(o)?k(o):o;let d=h.frameElement;for(;d&&o&&f!==h;){const m=Y(d),x=d.getBoundingClientRect(),g=S(d),y=x.left+(d.clientLeft+parseFloat(g.paddingLeft))*m.x,w=x.top+(d.clientTop+parseFloat(g.paddingTop))*m.y;c*=m.x,a*=m.y,p*=m.x,u*=m.y,c+=y,a+=w,d=k(d).frameElement}}return q({width:p,height:u,x:c,y:a})}function pe(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=B(n),s=H(n);if(n===s)return e;let r={scrollLeft:0,scrollTop:0},l=V(1);const c=V(0);if((i||!i&&o!=="fixed")&&((I(n)!=="body"||tt(s))&&(r=st(n)),B(n))){const a=X(n);l=Y(n),c.x=a.x+n.clientLeft,c.y=a.y+n.clientTop}return{width:e.width*l.x,height:e.height*l.y,x:e.x*l.x-r.scrollLeft*l.x+c.x,y:e.y*l.y-r.scrollTop*l.y+c.y}}function he(t){return Array.from(t.getClientRects())}function Mt(t){return X(H(t)).left+st(t).scrollLeft}function me(t){const e=H(t),n=st(t),o=t.ownerDocument.body,i=$(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=$(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Mt(t);const l=-n.scrollTop;return S(o).direction==="rtl"&&(r+=$(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:l}}function ge(t,e){const n=k(t),o=H(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,l=0,c=0;if(i){s=i.width,r=i.height;const a=gt();(!a||a&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:s,height:r,x:l,y:c}}function xe(t,e){const n=X(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=B(t)?Y(t):V(1),r=t.clientWidth*s.x,l=t.clientHeight*s.y,c=i*s.x,a=o*s.y;return{width:r,height:l,x:c,y:a}}function _t(t,e,n){let o;if(e==="viewport")o=ge(t,n);else if(e==="document")o=me(H(t));else if(W(e))o=xe(e,n);else{const i=Ft(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return q(o)}function Nt(t,e){const n=J(t);return n===e||!W(n)||it(n)?!1:S(n).position==="fixed"||Nt(n,e)}function ye(t,e){const n=e.get(t);if(n)return n;let o=G(t,[],!1).filter(l=>W(l)&&I(l)!=="body"),i=null;const s=S(t).position==="fixed";let r=s?J(t):t;for(;W(r)&&!it(r);){const l=S(r),c=mt(r);!c&&l.position==="fixed"&&(i=null),(s?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||tt(r)&&!c&&Nt(t,r))?o=o.filter(p=>p!==r):i=l,r=J(r)}return e.set(t,o),o}function we(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?ye(e,this._c):[].concat(n),o],l=r[0],c=r.reduce((a,p)=>{const u=_t(e,p,i);return a.top=$(u.top,a.top),a.right=N(u.right,a.right),a.bottom=N(u.bottom,a.bottom),a.left=$(u.left,a.left),a},_t(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function be(t){return Pt(t)}function ve(t,e,n){const o=B(e),i=H(e),s=n==="fixed",r=X(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const c=V(0);if(o||!o&&!s)if((I(e)!=="body"||tt(i))&&(l=st(e)),o){const a=X(e,!0,s,e);c.x=a.x+e.clientLeft,c.y=a.y+e.clientTop}else i&&(c.x=Mt(i));return{x:r.left+l.scrollLeft-c.x,y:r.top+l.scrollTop-c.y,width:r.width,height:r.height}}function Rt(t,e){return!B(t)||S(t).position==="fixed"?null:e?e(t):t.offsetParent}function Dt(t,e){const n=k(t);if(!B(t))return n;let o=Rt(t,e);for(;o&&ae(o)&&S(o).position==="static";)o=Rt(o,e);return o&&(I(o)==="html"||I(o)==="body"&&S(o).position==="static"&&!mt(o))?n:o||fe(t)||n}const _e=async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||Dt,s=this.getDimensions;return{reference:ve(e,await i(n),o),floating:{x:0,y:0,...await s(n)}}};function Re(t){return S(t).direction==="rtl"}const Ce={convertOffsetParentRelativeRectToViewportRelativeRect:pe,getDocumentElement:H,getClippingRect:we,getOffsetParent:Dt,getElementRects:_e,getClientRects:he,getDimensions:be,getScale:Y,isElement:W,isRTL:Re};function Ee(t,e){let n=null,o;const i=H(t);function s(){clearTimeout(o),n&&n.disconnect(),n=null}function r(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const{left:a,top:p,width:u,height:h}=t.getBoundingClientRect();if(l||e(),!u||!h)return;const f=et(p),d=et(i.clientWidth-(a+u)),m=et(i.clientHeight-(p+h)),x=et(a),y={rootMargin:-f+"px "+-d+"px "+-m+"px "+-x+"px",threshold:$(0,N(1,c))||1};let w=!0;function v(b){const C=b[0].intersectionRatio;if(C!==c){if(!w)return r();C?r(!1,C):o=setTimeout(()=>{r(!1,1e-7)},100)}w=!1}try{n=new IntersectionObserver(v,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(v,y)}n.observe(t)}return r(!0),s}function Oe(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,a=xt(t),p=i||s?[...a?G(a):[],...G(e)]:[];p.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),s&&g.addEventListener("resize",n)});const u=a&&l?Ee(a,n):null;let h=-1,f=null;r&&(f=new ResizeObserver(g=>{let[y]=g;y&&y.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{f&&f.observe(e)})),n()}),a&&!c&&f.observe(a),f.observe(e));let d,m=c?X(t):null;c&&x();function x(){const g=X(t);m&&(g.x!==m.x||g.y!==m.y||g.width!==m.width||g.height!==m.height)&&n(),m=g,d=requestAnimationFrame(x)}return n(),()=>{p.forEach(g=>{i&&g.removeEventListener("scroll",n),s&&g.removeEventListener("resize",n)}),u&&u(),f&&f.disconnect(),f=null,c&&cancelAnimationFrame(d)}}const Ae=(t,e,n)=>{const o=new Map,i={platform:Ce,...n},s={...i.platform,_c:o};return ee(t,e,{...i,platform:s})},Te={left:"right","left-top":"right-start","left-bottom":"right-end",right:"left","right-top":"left-start","right-bottom":"left-end",top:"bottom","top-left":"bottom-start","top-right":"bottom-end","bottom-right":"top-end","bottom-left":"top-start",bottom:"top"};class ke extends Marko.Component{handleExpand(){this.emit("base-expand"),this.updateTip()}handleCollapse(){this.emit("base-collapse")}onMount(){this._setupBaseTooltip()}onUpdate(){this._setupBaseTooltip()}onInput(e){e.open===!0?this.action="expand":e.open===!1&&(this.action="collapse")}onRender(){typeof window<"u"&&this._cleanupMakeup()}collapse(){this._expander.expanded=!1}expand(){this._expander.expanded=!0}isExpanded(){return this._expander.expanded}onDestroy(){this._cleanupMakeup()}_setupExpander(e,n){const{input:o}=this,{type:i}=o,s=this.getEl("container"),r=i==="tooltip",l=i==="infotip",c=i==="tourtip",a=s==null?void 0:s.getElementsByClassName(i)[0];e&&!c&&(this._expander=new jt(a,{hostSelector:n,contentSelector:`.${i}__overlay`,expandedClass:`${i}--expanded`,focusManagement:null,expandOnFocus:r,expandOnHover:r&&!o.noHover,expandOnClick:l,autoCollapse:r}),r&&!e.hasAttribute("aria-describedby")&&e.setAttribute("aria-describedby",o.overlayId)),this.hostEl&&this.overlayEl&&(this.updateTip(),this.cleanup=Oe(this.hostEl,this.overlayEl,this.update.bind(this)))}updateTip(){Ae(this.hostEl,this.overlayEl,{placement:this.input.placement||Te[this.input.pointer??"bottom"],middleware:[le(this.input.offset||6),se(),oe(),ce(),ne({element:this.arrowEl,padding:20})]}).then(({x:e,y:n,placement:o,middlewareData:i})=>{var c,a,p,u;Object.assign(((c=this.overlayEl)==null?void 0:c.style)||{},{left:`${e}px`,top:`${n}px`});const s=(a=i.arrow)==null?void 0:a.x,r=(p=i.arrow)==null?void 0:p.y,l={top:"bottom",strategy:"fixed",right:"left",bottom:"top",left:"right"}[o.split("-")[0]];Object.assign(((u=this.arrowEl)==null?void 0:u.style)||{},{left:s!=null?`${s}px`:"",top:r!=null?`${r}px`:"",right:"",bottom:"",[l||""]:"-4px"})})}_setupBaseTooltip(){var i,s,r;const{type:e}=this.input,o=`.${`${e}__host`}`;this.hostEl=((i=this.el)==null?void 0:i.querySelector(o))||null,this.overlayEl=((s=this.el)==null?void 0:s.querySelector(`.${e}__overlay`))||null,this.arrowEl=((r=this.el)==null?void 0:r.querySelector(`.${e}__pointer`))||null,this.input.type!=="dialog--mini"&&this._setupMakeup(),this.action&&this._expander&&(this.action==="expand"?this.expand():this.action==="collapse"&&this.collapse(),this.action=null)}_setupMakeup(){const{input:e}=this,{type:n}=e,o=this.getEl("container"),i=`${n}__host`,s=`.${i}`;let r=o==null?void 0:o.querySelector(s);r?this._setupExpander(r,s):(this.cancelFocus&&this.cancelFocus(),this.cancelFocus=zt(o,!1,l=>{const c=l[0];c&&(r=c,c.classList.contains(i)||c.classList.add(i)),this._setupExpander(r,s)}))}_cleanupMakeup(){this.cancelFocus&&this.cancelFocus(),this._expander&&(this._expander.destroy(),this._expander=void 0),this.cleanup&&(this.cleanup(),this.cleanup=void 0)}}const yt="r0ag73au",ft=At(yt);function Se(){return{type:this.type,noHover:this.noHover,overlayId:this.overlayId}}Ct.r(yt,()=>ke);const Wt={};ft._=Et(function(t,e,n,o,i,s){t.toJSON=Se;const{overlayStyle:r,renderBody:l}=t;e.be("span",{"overlay-style":r},"@container",o,null,0,{"onexpander-expand":n.d("expander-expand","handleExpand",!1),"onexpander-collapse":n.d("expander-collapse","handleCollapse",!1)}),K(e,l,null,null,null,null,n,"0"),e.ee()},{t:yt,s:!0},Wt);ft.Component=Ot(Wt,ft._);export{ft as _,lt as a};
