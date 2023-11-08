import{c}from"./index.1549cc8a.js";import{s as o}from"./index.34cc28ab.js";const l={activeDescendantClassName:"active-descendant",autoInit:"none",autoReset:"none",autoScroll:!1,axis:"both",wrap:!1};function d(e){const{items:t,toIndex:s}=e.detail,i=t[s];i&&(i.classList.add(this._options.activeDescendantClassName),this._focusEl.setAttribute("aria-activedescendant",i.id)),this._el.dispatchEvent(new CustomEvent("activeDescendantInit",{detail:e.detail}))}function h(e){const{fromIndex:t,toIndex:s}=e.detail,i=this.items[t],n=this.items[s];i&&i.classList.remove(this._options.activeDescendantClassName),n&&(n.classList.add(this._options.activeDescendantClassName),this._focusEl.setAttribute("aria-activedescendant",n.id),this._options.autoScroll&&this._containerEl&&(this._containerEl.scrollTop=n.offsetTop-this._containerEl.offsetHeight/2)),this._el.dispatchEvent(new CustomEvent("activeDescendantChange",{detail:e.detail}))}function m(e){const t=e.detail.toIndex,s=this._options.activeDescendantClassName;if(this.items.forEach(function(i){i.classList.remove(s)}),t!==null&&t!==-1){const i=this.items[t];i.classList.add(s),this._focusEl.setAttribute("aria-activedescendant",i.id)}else this._focusEl.removeAttribute("aria-activedescendant");this._el.dispatchEvent(new CustomEvent("activeDescendantReset",{detail:e.detail}))}function _(e){const{toIndex:t}=e.detail,s=this._options.activeDescendantClassName;this.items.forEach(function(i,n){o(i),n!==t?i.classList.remove(s):i.classList.add(s)}),this._el.dispatchEvent(new CustomEvent("activeDescendantMutation",{detail:e.detail}))}class v{constructor(t){this._el=t,this._onMutationListener=_.bind(this),this._onChangeListener=h.bind(this),this._onResetListener=m.bind(this),this._onInitListener=d.bind(this),this._el.addEventListener("navigationModelMutation",this._onMutationListener),this._el.addEventListener("navigationModelChange",this._onChangeListener),this._el.addEventListener("navigationModelReset",this._onResetListener),this._el.addEventListener("navigationModelInit",this._onInitListener)}destroy(){this._el.removeEventListener("navigationModelMutation",this._onMutationListener),this._el.removeEventListener("navigationModelChange",this._onChangeListener),this._el.removeEventListener("navigationModelReset",this._onResetListener),this._el.removeEventListener("navigationModelInit",this._onInitListener)}}class f extends v{constructor(t,s,i,n,a){super(t),this._options=Object.assign({},l,a),this._focusEl=s,this._itemContainerEl=i,this._itemSelector=n,o(this._itemContainerEl),this._itemContainerEl!==this._focusEl&&s.setAttribute("aria-owns",this._itemContainerEl.id),this._navigationEmitter=c(t,n,{autoInit:this._options.autoInit,autoReset:this._options.autoReset,axis:this._options.axis,ignoreByDelegateSelector:this._options.ignoreByDelegateSelector,wrap:this._options.wrap}),this.items.forEach(function(r){o(r)})}get index(){return this._navigationEmitter.model.index}set index(t){this._navigationEmitter.model.index=t}reset(){this._navigationEmitter.model.reset()}get currentItem(){return this._navigationEmitter.model.currentItem}get items(){return this._navigationEmitter.model.items}set wrap(t){this._navigationEmitter.model.options.wrap=t}destroy(){super.destroy(),this._navigationEmitter.destroy()}}function p(e,t,s,i,n){return new f(e,t,s,i,n)}function g(e){if(!e)return;const t=e&&e.parentElement,s=e.offsetTop+e.offsetHeight,i=t.scrollTop+t.offsetHeight;e.offsetTop<t.scrollTop?t.scrollTop=e.offsetTop:s>i&&(t.scrollTop=s-t.offsetHeight)}export{p as c,g as s};
//# sourceMappingURL=index.1d7fdad6.js.map
