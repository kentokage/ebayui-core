import{t as g}from"./index.bcb3df20.js";import{a as f}from"./utils.f000f876.js";import{t as h,r as x,a as v,d as T,p as O}from"./merge-attrs.9e0d7be9.js";import{d as k}from"./dynamic-tag.70156c9d.js";import{_ as B}from"./index.8ef6a7cb.js";import{r as c}from"./render-tag.1a0b986f.js";import{C as E}from"./index.d33c8785.js";import"./_commonjsHelpers.b8add541.js";import"./_commonjs-dynamic-modules.30ae7933.js";/* empty css               */import"./index.0ffc8829.js";import"./index.e64e9ede.js";import"./index.aa2d3137.js";/* empty css             */import"./index.7b11c326.js";import"./index.cfa4da37.js";import"./index.4eb9bcd1.js";/* empty css                    *//* empty css             */import"./index.50b31a36.js";/* empty css                    */import"./index.f09b57c3.js";import"./index.b54ea0ad.js";import"./self-iterator.45abe0c9.js";import"./index.2c18e3c5.js";/* empty css             */import"./index.6c3a3a4b.js";import"./index.b652c17c.js";import"./index.6c907e4a.js";import"./index.1549cc8a.js";import"./index.34cc28ab.js";import"./index.2f593d82.js";import"./index.0b516267.js";import"./index.8e5d5614.js";const S={};function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),o.push.apply(o,r)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?p(Object(o),!0).forEach(function(r){_(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function _(e,t,o){return t=w(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function w(e){var t=V(e,"string");return typeof t=="symbol"?t:String(t)}function V(e,t){if(typeof e!="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const s="7VzXNbX0",i=h(s),j=i;var P=["a11yText","partiallyDisabled","fluid","fixedHeight","truncate","transparent","bodyState","variant","a11yButtonLoadingText","a11yMenuText","button","href"];x.exports.r(s,()=>i);const b=S;i._=v(function(e,t,o,r,l,z){t.be("span",{class:"split-button"},"0",r,null,1),c(B,{split:"start",type:"button",size:e.size,disabled:e.disabled,priority:e.priority,bodyState:e.bodyState,href:e.href,a11yText:e.a11yButtonLoadingText,renderBody:n=>{n.be("span",{class:"btn__cell"},"2",r,null,1),n.be("span",{class:"btn__text"},"3",r,null,1),k(n,e.renderBody,null,null,null,null,o,"4"),n.ee(),n.ee()}},t,o,"1",[["click","emit",!1,["click"]],["escape","emit",!1,["escape"]],["focus","emit",!1,["focus"]],["blur","emit",!1,["blur"]]]),c(E,d(d({a11yText:e.a11yMenuText},O(e,P)),{},{split:"end",reverse:!0,variant:"button"}),t,o,"5",[["collapse","emit",!1,["collapse"]],["expand","emit",!1,["expand"]],["change","emit",!1,["change"]],["select","emit",!1,["select"]]]),t.ee()},{t:s},b);i.Component=T(b,i._);const C=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-split-button
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1.0
    </span>
</h1>

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/buttons-ebay-split-button)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/buttons-ebay-split-button)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-split-button/examples)
`,D=e=>({input:f(e)}),be={title:"buttons/ebay-split-button",component:j,parameters:{docs:{description:{component:C}}},argTypes:{renderBody:"Button",href:{description:"url for link behaviour (switches to anchor tag)",control:{type:"text"}},size:{options:["large","regular"],description:"",table:{defaultValue:{summary:"none"}},type:{category:"Options"}},priority:{options:["primary","secondary","tertiary","none"],description:"",table:{defaultValue:{summary:"secondary"}},type:{category:"Options"}},bodyState:{description:"when state is loading, adds progress spinner. when user interacts with button, reset should be called to reset aria-live state. default is none",options:["none","loading","reset"],control:{type:"select"},table:{defaultValue:{summary:"none"}},type:{category:"Options"}},a11yButtonLoadingText:{description:"aria label for button when bodyState === loading",table:{defaultValue:""},control:{type:"text"},type:{category:"Options"}},a11yMenuText:{description:"aria label for menu button part",table:{defaultValue:""},control:{type:"text"},type:{category:"Options"}},type:{control:{type:"select"},options:["none","radio","checkbox"],description:'Can be "radio" / "checkbox"'},disabled:{description:"",control:{type:"boolean"},table:{category:"Toggles",defaultValue:{summary:"false"}}},"partially-disabled":{description:"programmatically disabled, but remains keyboard focusable",control:{type:"boolean"},table:{defaultValue:{summary:"false"},category:"Toggles"}},onClick:{action:"on-click",description:"Triggered on click",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onEscape:{action:"on-escape",description:"Triggered on escape key",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onFocus:{action:"on-focus",description:"Triggered on focus",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onBlur:{action:"on-blur",description:"Triggered on blur",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:""}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}},onChange:{action:"on-change",description:"Triggered on item checked change, (checkbox/radio type only)",table:{category:"Events",defaultValue:{summary:"radio: { el, index, checked } | checkbox: { el, [indexes], [checked] }"}}},onSelect:{action:"on-select",description:"Triggered on item clicked (non radio/checkbox)",table:{category:"Events",defaultValue:{summary:"{ el, index, checked }"}}},spread:{control:{type:"object"},description:"Additional attributes being passed to component",table:{category:"Other"}}}},a=D.bind({});a.args={renderBody:"Button",a11yMenuText:"Menu",items:[{renderBody:"item 1 that has very long text"},{renderBody:"item 2"},{renderBody:"item 3"}]};a.parameters={docs:{source:{code:g("ebay-split-button",a.args,{items:"item"})}}};var u,m,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
  // input: {
  //     ...args,
  //     spread: null,
  //     ...args.spread,
  //     renderBody(out) {
  //         out.html(args.renderBody);
  //     },
  // },
})`,...(y=(m=a.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const ge=["Standard"];export{a as Standard,ge as __namedExportsOrder,be as default};
//# sourceMappingURL=split-button.stories.29ba93e1.js.map
