import{e as K,C as P,_ as V,f as W}from"./merge-attrs.9e0d7be9.js";var X=V,Y=P.exports,$=Y.R_,q=W,L=K.exports.NOOP,u=function(){return L},I=1,T=typeof document>"u",F=function(r,v,R,i,f,d,_,l,O){if(v){v.default&&(v=v.default);var a=R&&R(),n=_&&_.r_;if(typeof v=="string")i?(r.bh_(v,a,l,_,x(_,O,d)),i(r),r.bi_()):r.bj_(v,a,l,_,x(_,O,d));else{a==null?a={renderBody:i}:typeof a=="object"&&(a=z(a),i&&(a.renderBody=i));var E=v._||(v.renderer?v.renderer.renderer||v.renderer:v.render);if(E)r.c(_,l,O),E(a,r),r._X_=null;else{var C=v&&v.renderBody||v,S=typeof C=="function";if(S){var j=_?_.t_:0,w=j&I,h=C===L,J=T?w:h;if(r.bf(l,n,J),!h&&S){var b=$(r),N=b.n_,G=b.o_;b.n_=new q(n,N.id+"-"+N.aK_(l),G),C.toJSON=u,f?C.apply(null,[r].concat(f,a)):C(r,a),b.n_=N}r.ef()}else r.error("Invalid dynamic tag value")}}}else i&&(r.bf(l,n,T&&_&&_.t_&I),i(r),r.ef())};function z(e){var r={};for(var v in e)r[X.bg_(v)]=e[v];return r}function x(e,r,v){var R=r?r.length:0;if(R===0)return v;for(var i=v||{},f,d=R;d--;)f=r[d],i["on"+f[0]]=e.d(f[0],f[1],f[2],f[3]);return i}export{F as d};
//# sourceMappingURL=dynamic-tag.70156c9d.js.map
