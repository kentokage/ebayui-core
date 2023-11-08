import{r as _,a as g,d as O,t as k,c as n,b as w,p as P}from"./merge-attrs.9e0d7be9.js";import{_ as h,a as j,b as C,c as I}from"./index.5fb5e51b.js";import{r as y}from"./render-tag.1a0b986f.js";import{d as i}from"./dynamic-tag.70156c9d.js";import{_ as R}from"./index.a5276c99.js";const S={handleDismissClick:x("dismiss"),handleDismissKeydown:x("dismiss")};function x(e){return function(l,a){this.emit(e,{originalEvent:a,value:l})}}function u(e,l){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);l&&(r=r.filter(function(b){return Object.getOwnPropertyDescriptor(e,b).enumerable})),a.push.apply(a,r)}return a}function m(e){for(var l=1;l<arguments.length;l++){var a=arguments[l]!=null?arguments[l]:{};l%2?u(Object(a),!0).forEach(function(r){$(e,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))})}return e}function $(e,l,a){return l=K(l),l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function K(e){var l=A(e,"string");return typeof l=="symbol"?l:String(l)}function A(e,l){if(typeof e!="object"||e===null)return e;var a=e[Symbol.toPrimitive];if(a!==void 0){var r=a.call(e,l||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(e)}const f="xQ56JjaK",d=k(f);var E=["status","a11yText","a11yIconText","icon","iconClass","class","root","headerRoot","a11yRoleDescription","prefixClass","title","footer","type","mainRoot","noA11yLabel","a11yDismissText","educationIcon","prominent"];_.exports.r(f,()=>d);const v=S;d._=g(function(e,l,a,r,b,V){var c=e.status,t=e.prefixClass;i(l,e.root||"section",()=>m({"aria-labelledby":!e.noA11yLabel&&r.elId("status"),"aria-roledescription":e.a11yRoleDescription,class:[t,e.class,e.status==="education"&&e.prominent&&"".concat(t,"--education")]},P(e,E)),s=>{e.icon!=="none"&&i(s,e.headerRoot||"div",()=>({class:"".concat(t,"__header"),id:a.elId("status")}),o=>{c==="confirmation"||c==="celebration"?y(h,{a11yText:e.a11yIconText||e.a11yText,a11yVariant:"label",class:e.iconClass},o,a,"2"):c==="attention"?y(j,{a11yVariant:"label",a11yText:e.a11yIconText||e.a11yText,class:e.iconClass},o,a,"3"):c==="information"?y(C,{a11yVariant:"label",a11yText:e.a11yIconText||e.a11yText,class:e.iconClass},o,a,"4"):c==="education"&&e.type==="section"&&i(o,e.educationIcon||I,()=>({"a11y-variant":"label","a11y-text":e.a11yIconText||e.a11yText,class:e.iconClass}),null,null,null,a,"5")},null,null,a,"1"),i(s,e.mainRoot||"div",()=>({class:"".concat(t,"__main")}),o=>{e.title&&i(o,e.title.as||"h2",()=>m(m({},e.title),{},{class:["".concat(t,"__title"),e.title.class]}),T=>{i(T,e.title,null,null,null,null,a,"8")},null,null,a,"7"),i(o,e.renderBody,null,null,null,null,a,"9")},null,null,a,"6"),e.cta&&(s.be("p",{class:n("".concat(t,"__cta"))},"10",r,null,1),s.be("a",w(e.cta),"11",r,null,4),i(s,e.cta,null,null,null,null,a,"12"),s.ee(),s.ee()),e.footer&&!e.a11yDismissText&&(s.be("div",{class:n("".concat(t,"__footer"))},"13",r,null,1),i(s,e.footer,null,null,null,null,a,"14"),s.ee()),!e.footer&&e.a11yDismissText&&(s.be("div",{class:n("".concat(t,"__footer"))},"15",r,null,1),s.be("button",{"aria-label":"".concat(e.a11yDismissText),class:n(["fake-link","".concat(t,"__dismiss")])},"16",r,null,0,{onclick:a.d("click","handleDismissClick",!1),onkeydown:a.d("keydown","handleDismissKeydown",!1)}),y(R,{class:"icon icon--close-16"},s,a,"17"),s.ee(),s.ee())},null,null,a,"0")},{t:f},v);d.Component=O(v,d._);export{d as _};
//# sourceMappingURL=index.03fec6cf.js.map
