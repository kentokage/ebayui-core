import{t as M,r as j,a as T,d as P,m as S,c as E,s as V,p as B}from"./merge-attrs.9e0d7be9.js";import{_ as K}from"./index.4eb9bcd1.js";import{_ as $}from"./index.8ef6a7cb.js";/* empty css                    */import{_ as A}from"./index.f09b57c3.js";import{r as p}from"./render-tag.1a0b986f.js";import{d as f}from"./dynamic-tag.70156c9d.js";import{_ as L}from"./index.b54ea0ad.js";import{s as z}from"./self-iterator.45abe0c9.js";import{C as R}from"./index.2c18e3c5.js";import{s as W}from"./index.0b516267.js";import{a as F,h as H}from"./index.cfa4da37.js";import{m as N}from"./index.2f593d82.js";const U=Object.assign({},N,{toggleItemChecked(e,t,a){const s=this.isRadio()&&e!==this.state.checkedIndex;this.toggleChecked(e),s?(this.input.collapseOnSelect&&(this.expander.expanded=!1),this.emitComponentEvent({index:e,eventType:"change",el:t,originalEvent:a})):this.type!=="radio"&&(this.input.collapseOnSelect&&(this.expander.expanded=!1),this.emitComponentEvent({index:e,eventType:this.type?"change":"select",el:t,originalEvent:a})),this.rovingTabindex&&(this.tabindexPosition=this.rovingTabindex.items.findIndex(l=>l.tabIndex===0))},handleItemClick(e,t,a){this.toggleItemChecked(e,a,t)},handleMenuKeydown({el:e,originalEvent:t,index:a}){F(t,()=>{this.handleItemClick(a,t,e)}),H(t,()=>{this.expander.expanded=!1,this.focus()})},focus(){this.getComponent("button").el.focus()},handleButtonEscape(){this.expander.expanded=!1},handleExpand(){this.input.disabled||this.emitComponentEvent({eventType:"expand"})},handleCollapse(){this.input.disabled||this.emitComponentEvent({eventType:"collapse"})},handleMenuChange({el:e,originalEvent:t,index:a}){this.toggleItemChecked(a,e,t)},handleMenuSelect({el:e,originalEvent:t,index:a}){this.input.collapseOnSelect&&(this.expander.expanded=!1),this.emitComponentEvent({eventType:"select",el:e,originalEvent:t,index:a})},handleMousedown({el:e,originalEvent:t}){this.emitComponentEvent({eventType:"mousedown",el:e,originalEvent:t})},emitComponentEvent({eventType:e,el:t,originalEvent:a,index:s}){const l=this.getCheckedIndexes(),h=this.type==="checkbox",r={el:t,originalEvent:a};h&&l.length>1?Object.assign(r,{indexes:this.getCheckedIndexes(),checked:this.getCheckedIndexes(),checkedValues:this.getCheckedValues()}):h||this.isRadio()?Object.assign(r,{index:s,checked:this.getCheckedIndexes(),checkedValues:this.getCheckedValues()}):e!=="expand"&&e!=="collapse"&&Object.assign(r,{index:s,checked:[s]}),this.emit(`${e}`,r)},onInput(e){this.state=this.getInputState(e)},onRender(){typeof window<"u"&&this._cleanupMakeup()},onMount(){this._setupMakeup()},onUpdate(){this._setupMakeup()},onDestroy(){this._cleanupMakeup()},_setupMakeup(){this.expander=new W(this.el,{hostSelector:".menu-button__button",contentSelector:".menu-button__menu",focusManagement:"focusable",expandOnClick:!0,autoCollapse:!0,alwaysDoFocusManagement:!0})},_cleanupMakeup(){this.expander&&this.expander.destroy()}});function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),a.push.apply(a,s)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?C(Object(a),!0).forEach(function(s){q(e,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(a,s))})}return e}function q(e,t,a){return t=G(t),t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function G(e){var t=J(e,"string");return typeof t=="symbol"?t:String(t)}function J(e,t){if(typeof e!="object"||e===null)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var s=a.call(e,t||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const m="z7EDWpMx",i=M(m),de=i;var Q=["class","style","type","text","icon","a11yText","noToggleIcon","expanded","reverse","fixWidth","borderless","size","priority","iconTag","disabled","variant","items","label","textAlign","prefixLabel","prefixId","split","collapseOnSelect","transparent"];j.exports.r(m,()=>i);const w=U;i._=T(function(e,t,a,s,l,h){var r=e.prefixId&&s.getElId("label"),u=e.variant==="form",b,o=e.variant==="overflow",d=!1,g=null;e.borderless&&(o=!1,u=!1);var y=e.variant==="icon"||o;c=$;var c;y?c=K:u?(b="form",d=!0):(d=!0,g=e.priority);var x=0;t.be("span",S(B(e,Q),{class:E(["menu-button",e.class]),style:V(e.style)}),"0",s,null,4,{"onexpander-expand":a.d("expander-expand","handleExpand",!1),"onexpander-collapse":a.d("expander-collapse","handleCollapse",!1),onmousedown:a.d("mousedown","handleMousedown",!1)});{const v=n=>{o?p(A,{},n,a,"1"):(e.label?e.prefixLabel?(n.be("span",{class:"menu-button-prefix-label"},"2",s,null,1),n.t(e.prefixLabel,s),n.ee(),f(n,e.label.renderBody,null,null,null,null,a,"3")):(n.be("span",{id:r},"4",s,null,1),f(n,e.label.renderBody,null,null,null,null,a,"5"),n.ee()):(e.icon&&f(n,e.icon,null,null,null,null,a,"6"),e.text&&(n.be("span",{id:r},"7",s,null,1),n.t(e.text,s),n.ee())),d&&!e.noToggleIcon&&p(L,{},n,a,"8"))};c?p(c,{class:["menu-button__button"],size:e.size,priority:g,borderless:e.borderless,variant:b,ariaExpanded:"false",ariaHaspopup:"true",transparent:y&&e.transparent,ariaLabel:e.a11yText,ariaLabelledby:r&&"".concat(e.prefixId," ").concat(r),split:d&&e.split,disabled:e.disabled,noToggleIcon:e.noToggleIcon,renderBody:v},t,a,"@button",[["escape","handleButtonEscape",!1]]):v(t);const k=[];let I=0;for(const n of e.items||[]){let _=I++;n.separator&&x++,k.push(O(O({},n),{},{checked:s.isChecked(_-x),[Symbol.iterator]:z}))}p(R,{classPrefix:"menu-button",type:e.type,reverse:o?!e.reverse:e.reverse,fixWidth:e.fixWidth,tabindex:-1,items:k},t,a,"@content",[["keydown","handleMenuKeydown",!1],["change","handleMenuChange",!1],["select","handleMenuSelect",!1]])}t.ee()},{t:m},w);i.Component=P(w,i._);export{de as C};
//# sourceMappingURL=index.d33c8785.js.map
