import{t as x,r as C,a as p,d as S,p as z,m as w,c as A}from"./merge-attrs.9e0d7be9.js";/* empty css               */import{_ as B}from"./index.0ffc8829.js";import{r as m}from"./render-tag.1a0b986f.js";import{d as f}from"./dynamic-tag.70156c9d.js";import{_ as T}from"./index.7b11c326.js";import{h as H}from"./index.cfa4da37.js";const J={handleClick(a){this.input.disabled||this.emit("click",{originalEvent:a})},handleKeydown(a){H(a,()=>{this.input.disabled||this.emit("escape",{originalEvent:a})})},handleFocus(a){this.emit("focus",{originalEvent:a})},handleBlur(a){this.emit("blur",{originalEvent:a})}},n="in0GADXd",d=x(n),I=d;function K(){return{disabled:this.disabled}}var N=["a11yText","partiallyDisabled","priority","size","split","fluid","fixedHeight","truncate","transparent","bodyState","toJSON","variant","borderless"],O=["primary","secondary","tertiary","delete"],F=["large","small"];C.exports.r(n,()=>J);const v={};d._=p(function(a,e,s,t,L,P){a.toJSON=K;var o=F.includes(a.size)?a.size:null,i=a.priority||"secondary";(a.borderless||a.variant==="form")&&(i="none");var r=a.href?"fake-btn":"btn",l=o&&r+"--"+o,c=a.truncate&&(l?l+"-truncated":r+"--truncated"),g=a.transparent?r+"--transparent":"",b=a.fixedHeight&&(l?l+"-fixed-height":r+"--fixed-height"),_=a.variant||"standard",k=_!=="standard"&&"".concat(r,"--").concat(a.variant),y=a.href?"a":"button",h=a.split||"none",u=z(a,N);e.be(y,w(u,{class:A([a.class,r,a.fluid&&"".concat(r,"--fluid"),c,b,g,k,!c&&!b&&l,h!=="none"&&"".concat(r,"--split-").concat(h),a.borderless&&"".concat(r,"--borderless"),O.includes(i)&&"".concat(r,"--").concat(i)]),"data-ebayui":"",type:y==="button"&&(a.type||"button"),"aria-disabled":a.partiallyDisabled&&"true","aria-label":a.bodyState==="loading"?a.a11yText||"Loading...":a.ariaLabel}),"0",t,null,4,{onclick:s.d("click","handleClick",!1),onkeydown:s.d("keydown","handleKeydown",!1),onfocus:s.d("focus","handleFocus",!1),onblur:s.d("blur","handleBlur",!1)}),a.bodyState==="loading"?(e.be("span",{class:"btn__cell"},"1",t,null,1),m(B,{},e,s,"2"),e.ee()):a.bodyState==="expand"?(e.be("span",{class:"btn__cell"},"3",t,null,1),e.be("span",{class:"btn__text"},"4",t,null,1),f(e,a.renderBody,null,null,null,null,s,"5"),e.ee(),m(T,{},e,s,"6"),e.ee()):f(e,a.renderBody,null,null,null,null,s,"7"),e.ee()},{t:n,s:!0},v);d.Component=S(v,d._);export{I as _};
//# sourceMappingURL=index.8ef6a7cb.js.map
