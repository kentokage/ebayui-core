import{t as M}from"./index-iqhZMf16.js";import{a as O}from"./utils-NX-dnf4r.js";import{t as U,r as j,b as z,f as J,p as P,g as Z,d as q}from"./registry-EgEQwbXk.js";import{_ as G}from"./index-gv9zfHFq.js";import{_ as g}from"./render-tag-_0PNNh6Y.js";import"./preserve-attrs-lolIpBRv.js";import{_ as h}from"./self-iterator-6yU_KG2T.js";import{_}from"./repeatable-jmdwKenu.js";import{_ as L}from"./dynamic-tag-7vXwaVzE.js";import{C as Q}from"./index-9uStv6YZ.js";import{s as X}from"./index-l3FQEXUN.js";import{a as Y}from"./index-whtpiCcX.js";import{M as ee,s as te}from"./index-j-rYSiF3.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./index-eucXA0ea.js";/* empty css             */import"./index-VMW53XGO.js";/* empty css              */import"./index-KK8ZDf8t.js";import"./index-CBP7JnaX.js";import"./index-2U8dVrs-.js";import"./index-sDZ0BqWo.js";import"./index-j_KV6Utw.js";import"./index-J8CKH9U9.js";import"./index-QGVtTfuc.js";import"./index-ERL0bCNR.js";const oe=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-filter-menu-button
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/buttons-ebay-filter-menu-button)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/buttons-ebay-filter-menu-button)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-filter-menu-button/examples)
`;class ae extends ee{onCreate(){te(this)}handleMenuKeydown({originalEvent:e}){Y(e,()=>this._expander.expanded=!1)}handleMenuChange({checkedIndex:e,el:o,originalEvent:t,index:d,currentChecked:c}){e!==void 0&&this.toggleChecked(e),this._emitComponentEvent("change",t,{el:o,index:d,currentChecked:c})}handleFooterButtonClick(){this._emitComponentEvent("footer-click"),this._expander.expanded=!1}handleFormSubmit({originalEvent:e}){this._emitComponentEvent("form-submit",e)}handleExpand({originalEvent:e}){this._emitComponentEvent("expand",e)}handleCollapse({originalEvent:e}){this.getEl("button").focus(),this._emitComponentEvent("collapse",e)}onInput(e){e.items=e.items||[],this.state=this.getInputState(e)}onMount(){this._setupMakeup()}onUpdate(){this._setupMakeup()}onRender(){typeof window<"u"&&this._cleanupMakeup()}onDestroy(){this._cleanupMakeup()}_emitComponentEvent(e,o,t){const{el:d,index:c,currentChecked:p}=t||{};switch(e){case"expand":this.emit(e);break;case"change":case"collapse":case"form-submit":case"footer-click":{const u=this.getCheckedValues();this.emit(e,{el:d,checked:u,originalEvent:o,index:c,currentChecked:p});break}}}_setupMakeup(){this._expander=new X(this.getEl("container"),{hostSelector:".filter-menu-button__button",contentSelector:".filter-menu-button__menu",focusManagement:"interactive",expandOnClick:!0,autoCollapse:!0,alwaysDoFocusManagement:!0})}_cleanupMakeup(){this._expander&&(this._expander.destroy(),this._expander=void 0)}}const y="xEJNHZBs",l=U(y),re=l;j.r(y,()=>l);const T=ae;l._=z(function(m,e,o,t,d,c){const{variant:p,class:u,a11yText:F,a11yFooterText:b,text:V,footer:n,footerText:f,disabled:A,formName:N,formAction:R,formMethod:D,items:K,type:W,...$}=m;e.be("span",J(P($),{class:Z(["filter-menu-button",u])}),"@container",t,null,4,{"onexpander-expand":o.d("expander-expand","handleExpand",!1),"onexpander-collapse":o.d("expander-collapse","handleCollapse",!1)});{e.be("button",{type:"button",class:"filter-menu-button__button",disabled:A,"aria-expanded":"false","aria-haspopup":"true","aria-label":F,"aria-pressed":t.getCheckedValues().some(Boolean)&&"true"},"@button",t,null,0,{pa:["aria-expanded"]}),e.be("span",{class:"filter-menu-button__button-cell"},"0",t,null,1),e.be("span",{class:"filter-menu-button__button-text"},"1",t,null,1),e.t(V,t),e.ee(),g(G,{},e,o,"2"),e.ee(),e.ee();let i=null;const x=[];let H=0;for(const s of K||[]){let I=H++;x.push({...s,checked:t.isChecked(I),[Symbol.iterator]:h})}f?i=_(i,{...n,a11yFooterText:b,renderBody:s=>{s.t(f,t)},[Symbol.iterator]:h}):n&&(i=_(i,{...n,a11yFooterText:b||n.a11yFooterText,renderBody:s=>{L(s,n.renderBody,null,null,null,null,o,"4")},[Symbol.iterator]:h})),g(Q,{classPrefix:"filter-menu-button",variant:p,type:W,formName:N,formAction:R,formMethod:D,footerText:f,a11yFooterText:b,items:x,footer:i},e,o,"3",[["keydown","handleMenuKeydown",!1],["change","handleMenuChange",!1],["form-submit","handleFormSubmit",!1],["footer-click","handleFooterButtonClick",!1]])}e.ee()},{t:y},T);l.Component=q(T,l._);const S=m=>({input:O(m)}),Ae={title:"buttons/ebay-filter-menu-button",component:re,parameters:{docs:{description:{component:oe}}},argTypes:{text:{control:{type:"text"},description:"button text"},type:{options:["radio","checkbox"],control:{type:"select"},description:'Can be "radio" / "checkbox"'},a11yText:{control:{type:"text"},description:"a11y text for the button"},pressed:{control:{type:"boolean"},description:"whether button is pressed (default is `false`)",table:{disable:!0}},expanded:{control:{type:"boolean"},description:"whether content is expanded (Note: not supported as initial attribute) ",table:{disable:!0}},disabled:{control:{type:"boolean"},description:"Will disable the entire dropdown (disables the ebay-button label) if set to true"},variant:{control:{type:"text"},description:'"" (default) / "form"'},item:{table:{category:"@attribute tags"}},formName:{control:{type:"text"},description:"forms `name` attribute",table:{category:'when variant="form"'}},formAction:{control:{type:"text"},description:"forms `action` attribute",table:{category:'when variant="form"'}},checked:{control:{type:"boolean"},description:"whether or not the item is checked",table:{category:"@item attributes"}},value:{table:{category:"@item attributes"},control:{type:"text"},description:"the items value (returned in emitted events when checked)"},onCollapse:{action:"on-collapse",description:"Triggered on menu collapse",table:{category:"Events",defaultValue:{summary:"{ checked, originalEvent }"}}},onExpand:{action:"on-expand",description:"Triggered on menu expand",table:{category:"Events",defaultValue:{summary:""}}},onChange:{action:"on-change",description:"Triggered on item clicked",table:{category:"Events",defaultValue:{summary:"{ el, selected, index, currentChecked, checked }"}}},footerClick:{action:"on-footer-click",description:"Triggered on footer clicked",table:{category:"Events",defaultValue:{summary:"{ checked, originalEvent }"}}},formSubmit:{action:"on-form-submit",description:'when using `variant="form"`, and form is submitted (emits current checked state)',table:{category:"Events",defaultValue:{summary:"{ checked, originalEvent }"}}},footer:{name:"@footer",table:{category:"@attribute tags"}}}},a=S.bind({});a.args={text:"text",items:[{value:"item 1",renderBody:"item 1"},{value:"item 2",renderBody:"item 2"},{value:"item 3",renderBody:"item 3"}],a11yText:"filter menu button a11y text"};a.parameters={docs:{source:{code:M("ebay-filter-menu-button",a.args)}}};const r=S.bind({});r.args={text:"text",items:[{value:"item 1",renderBody:"item 1"},{value:"item 2",renderBody:"item 2"},{value:"item 3",renderBody:"item 3"}],a11yText:"filter menu button a11y text",footer:{renderBody:"Apply",a11yFooterText:"footer button a11y text"}};r.parameters={docs:{source:{code:M("ebay-filter-menu-button",r.args)}}};var k,C,v;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(v=(C=a.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var E,w,B;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  input: addRenderBodies(args)
})`,...(B=(w=r.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};const Ne=["Default","WithFooter"];export{a as Default,r as WithFooter,Ne as __namedExportsOrder,Ae as default};
