import{t as S}from"./index.bcb3df20.js";import{r as w,a as O,d as _,t as v}from"./merge-attrs.9e0d7be9.js";import{s as T}from"./self-iterator.45abe0c9.js";import{v as P}from"./v-element.18e65e73.js";import{d as B}from"./dynamic-tag.70156c9d.js";import{_ as E}from"./index.1bc8b97e.js";import{r as p}from"./render-tag.1a0b986f.js";import{_ as C}from"./index.8ef6a7cb.js";import"./_commonjsHelpers.b8add541.js";import"./_commonjs-dynamic-modules.30ae7933.js";/* empty css                    */import"./index.a5276c99.js";import"./index.aa2d3137.js";/* empty css             */import"./index.f495492d.js";import"./preserve-attrs.c8bb8439.js";import"./index.8e5d5614.js";import"./index.cfa4da37.js";/* empty css               */import"./index.0ffc8829.js";import"./index.e64e9ede.js";import"./index.7b11c326.js";const k=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-panel-dialog
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v2.0.0
    </span>
</h1>

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/dialogs-ebay-panel-dialog)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/dialogs-ebay-panel-dialog)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-panel-dialog/examples)
`;function d(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),o.push.apply(o,r)}return o}function u(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?d(Object(o),!0).forEach(function(r){$(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function $(e,t,o){return t=q(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function q(e){var t=K(e,"string");return typeof t=="symbol"?t:String(t)}function K(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const c="b5JCxfT/",s=v(c);w.exports.r(c,()=>s);const j={};s._=O(function(e,t,o,r,i,D){p(E,u(u({},e),{},{open:e.open,classPrefix:"panel-dialog",class:[e.class,"panel-dialog--mask-fade-slow"],windowClass:["panel-dialog__window--slide",e.position==="end"&&"panel-dialog__window--end"],renderBody:n=>{B(n,e.renderBody,null,null,null,null,o,"1")}}),t,o,"0",[["open","emit",!1,["open"]],["close","emit",!1,["close"]]])},{t:c,i:!0},j);s.Component=_(j,s._);function f(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),o.push.apply(o,r)}return o}function y(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?f(Object(o),!0).forEach(function(r){A(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function A(e,t,o){return t=N(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function N(e){var t=V(e,"string");return typeof t=="symbol"?t:String(t)}function V(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const m="QbWuXwpe",l=v(m),W=l,z=P("p",null,"1",null,1,0).t("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),F=P("p",null,"2",null,1,0).e("a",{href:"http://www.ebay.com"},"3",null,1,0).t("www.ebay.com");w.exports.r(m,()=>l);const x={onCreate(){this.state={open:!1}},openDialog(){this.state.open=!0},closeDialog(){this.state.open=!1,this.emit("close")}};l._=O(function(e,t,o,r,i,D){p(s,y(y({a11yCloseText:"Close Dialog",open:i.open},e),{},{header:{renderBody:n=>{n.t("Heading",r)},[Symbol.iterator]:T},renderBody:n=>{n.n(z,r),n.n(F,r)}}),t,o,"0",[["close","closeDialog",!1],["open","emit",!1,["open"]]]),p(C,{renderBody:n=>{n.t("Open Dialog",r)}},t,o,"4",[["click","openDialog",!1]])},{t:m},x);l.Component=_(x,l._);const H=e=>({input:{...e,renderBody:e.renderBody?t=>{t.html(e.renderBody)}:null}}),me={title:"dialogs/ebay-panel-dialog",component:W,parameters:{docs:{description:{component:k}}},argTypes:{open:{type:"boolean",control:{type:"boolean"},description:"Whether dialog is open.",table:{disable:!0}},position:{control:{type:"text"},description:'"end" or "start", defaults to "start", the position of the panel, either at the start (left side) of the page, or end (right side) of the page.'},focus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog opens (defaults to close button)"},closeFocus:{control:{type:"text"},description:"An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened"},a11yCloseText:{control:{type:"text"},description:"A11y text for close button and mask."},onOpen:{action:"on-open",description:"Triggered on dialog opened",table:{category:"Events",defaultValue:{summary:""}}},onClose:{action:"on-close",description:"Triggered on dialog closed.",table:{category:"Events",defaultValue:{summary:""}}}}},a=H.bind({});a.args={};a.parameters={docs:{source:{code:S("ebay-panel-dialog",a.args)}}};var g,b,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const de=["Default"];export{a as Default,de as __namedExportsOrder,me as default};
//# sourceMappingURL=panel-dialog.stories.4bdb294f.js.map
