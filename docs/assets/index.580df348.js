const d={labelElementAnimateModifier:"floating-label__label--animate",labelElementInlineModifier:"floating-label__label--inline",labelElementFocusModifier:"floating-label__label--focus",labelElementInvalidModifier:"floating-label__label--invalid",labelElementDisabledModifier:"floating-label__label--disabled",textboxElementBackgroundRGB:["rgb(255, 255, 255)","rgb(247, 247, 247)","rgb(245, 245, 245)","rgb(230, 32, 72)","rgb(254, 245, 246)"]};function b(e){if(l(e)){const t=e.querySelector("option");return t.value?null:t.text}else if(e.hasAttribute("placeholder"))return e.getAttribute("placeholder")}function s(e,t){if(l(e)){e.style["min-width"]="";const i=e.offsetWidth;e.querySelector("option").text=t,!t&&i>e.offsetWidth&&(e.style["min-width"]=`${i}px`)}else t?e.setAttribute("placeholder",t):e.removeAttribute("placeholder")}function c(e){if(l(e)){const t=e.querySelector("option");return t.value?void 0:!!t.text}return e.hasAttribute("placeholder")}function r(){const e=o(this.formControlEl);this.placeholder=b(this.formControlEl)||this.placeholder;const t=c(this.formControlEl,this.placeholder);!!this.placeholder&&e&&!t?s(this.formControlEl,this.placeholder):!e&&t&&s(this.formControlEl,""),h(this.formControlEl)?this.labelEl.classList.add(this.options.labelElementInvalidModifier):this.labelEl.classList.remove(this.options.labelElementInvalidModifier),f(this.formControlEl)?this.labelEl.classList.add(this.options.labelElementDisabledModifier):this.labelEl.classList.remove(this.options.labelElementDisabledModifier)}function o(e){return document.activeElement===e}function l(e){return e.tagName==="SELECT"}function n(e){return e.value.length>0}function f(e){return e.hasAttribute("disabled")}function h(e){return e.hasAttribute("aria-invalid")&&e.getAttribute("aria-invalid")==="true"}function a(e,t){if(!l(e)){const i=getComputedStyle(e).backgroundColor;return Array.isArray(t)?!t.includes(i):i!==t}return!1}function u(){n(this.formControlEl)||this.labelEl.classList.add(this.options.labelElementInlineModifier),this.labelEl.classList.remove(this.options.labelElementFocusModifier),h(this.formControlEl)&&this.labelEl.classList.add(this.options.labelElementInvalidModifier),s(this.formControlEl,"")}function E(){this.labelEl.classList.add(this.options.labelElementAnimateModifier),this.labelEl.classList.add(this.options.labelElementFocusModifier),this.labelEl.classList.remove(this.options.labelElementInlineModifier),this.labelEl.classList.remove(this.options.labelElementInvalidModifier),this.placeholder&&s(this.formControlEl,this.placeholder)}class m{constructor(t,i){this.options=Object.assign({},d,i),this._observer=new MutationObserver(r.bind(this)),this.rootEl=t,this.labelEl=this.rootEl.querySelector("label"),this.formControlEl=this.rootEl.querySelector("input,textarea,select"),this._onBlurListener=u.bind(this),this._onFocusListener=E.bind(this),this.formControlEl.addEventListener("blur",this._onBlurListener),this.formControlEl.addEventListener("focus",this._onFocusListener),!n(this.formControlEl)&&!a(this.formControlEl,this.options.textboxElementBackgroundRGB)?this.labelEl.classList.add(this.options.labelElementInlineModifier):l(this.formControlEl)||this.labelEl.classList.remove(this.options.labelElementInlineModifier),o(this.formControlEl)&&(this.labelEl.classList.add(this.options.labelElementFocusModifier),this.labelEl.classList.remove(this.options.labelElementInlineModifier)),r.call(this),this._observer.observe(this.formControlEl,{childList:l(this.formControlEl),subtree:l(this.formControlEl),attributeFilter:["disabled","aria-invalid","placeholder","value"],attributes:!0})}destroy(){this._observer.disconnect()}refresh(){n(this.formControlEl)||l(this.formControlEl)||a(this.formControlEl,this.options.textboxElementBackgroundRGB)?this.labelEl.classList.remove(this.options.labelElementInlineModifier):this.labelEl.classList.add(this.options.labelElementInlineModifier),o(this.formControlEl)&&(this.labelEl.classList.add(this.options.labelElementFocusModifier),this.labelEl.classList.remove(this.options.labelElementInlineModifier))}}export{m as s};
//# sourceMappingURL=index.580df348.js.map
