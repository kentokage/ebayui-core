function c(r,a,f={},i="",n=!1){const o=i+"	",{body:e,attrs:s}=d(a,f,o);let t=r;return n&&(t=`@${f[t]||t}`),`<${t+s+(e?`>
${e.replace(/^|\n/gm,`$&${o}`)}
</${t}>`:"/>")}`}function d(r,a,f){let i="",n="";for(const o in r)if(Object.prototype.hasOwnProperty.call(r,o)&&o!=="renderBody"){const e=r[o],s=o.replace(/([a-z])([A-Z])/g,(t,y,$)=>`${y}-${$.toLowerCase()}`);if(Array.isArray(e))for(const t of e)n+=c(s,t,a,f,!0);else e&&typeof e=="object"?o==="spread"?Object.keys(e).forEach(t=>{i+=` ${t}=${JSON.stringify(e[t])}`}):n+=c(s,e,a,f,!0):i+=` ${s}=${JSON.stringify(e)}`}return r.renderBody&&(n+=r.renderBody),{attrs:i,body:n}}export{c as t};
//# sourceMappingURL=index.bcb3df20.js.map
