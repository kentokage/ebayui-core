import{S as y,e as l}from"./index-xLzVGzoy.js";import"./_commonjsHelpers-5-cIlDoe.js";var _=[],v={docs:{story:{inline:!0},source:{type:y.DYNAMIC,language:"marko"}}},N=[l];const{sanitizeStoryContextUpdate:g}=__STORYBOOK_MODULE_PREVIEW_API__;var T=(n,e)=>e.reduce((i,c)=>p=>{let t;const o=c(r=>(t=i({...p,...g(r)}),t),p);return t||(t=i(p)),o===t?t:{component:o.component||p.component,input:{...o.input,renderBody(r){var s;(s=t==null?void 0:t.component)==null||s.render(t.input||{},r)}}}},i=>n(i)),u=new WeakMap,f=new WeakMap;function w(n,e){const i=n.storyFn(),c=(i==null?void 0:i.component)||n.storyContext.component;m(c,n);const p={},t={};for(const r in i.input){const s=i.input[r],a=typeof s=="function"&&h(r);a?t[a]=s:p[r]=s}let o=u.get(e);if(o&&(n.forceRemount||!o.state)&&(o=void 0,d(e)),o){const r=f.get(o);o.input=p,o.update();for(const s in r){const a=r[s];t[s]!==a&&(delete r[s],o.removeListener(s,a))}for(const s in t){const a=t[s];r[s]!==a&&(r[s]=a,o.on(s,a))}}else{o=c.renderSync(p).replaceChildrenOf(e).getComponent(),u.set(e,o);for(const r in t)o.on(r,t[r])}return f.set(o,t),n.showMain(),()=>d(e)}var M=(n,e)=>{const{component:i}=e;return m(i,e),{component:i,input:n}};function m(n,e){if(!n||!n.renderSync)throw new Error(`Expected a component to be specified in the story: "${e.title} > ${e.name}".`)}function h(n){const e=/^on(-)?(.*)$/.exec(n);if(e){const[,i,c]=e;return i?c:c.charAt(0).toLowerCase()+c.slice(1)}return!1}function d(n){const e=u.get(n);e&&(e.destroy(),n.innerHTML="",u.delete(n),f.delete(e))}var k={renderer:"marko",...v};export{N as argTypesEnhancers,T as decorateStory,_ as decorators,k as parameters,M as render,w as renderToCanvas};
