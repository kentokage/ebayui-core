function s(r){if(r&&typeof r=="object"){if(Array.isArray(r))return r.map(s);const n={};for(const e in r)n[e]=s(r[e]);const{renderBody:o}=n;return typeof o=="string"&&(n.renderBody=e=>e.html?e.html(o):e.write(o)),n}return r}function a(r,n,o={}){const e=t=>({input:s(t),component:r});return e.args=Object.assign({},o),e.parameters={docs:{source:{code:n}}},e}export{s as a,a as b};
//# sourceMappingURL=utils.f000f876.js.map
