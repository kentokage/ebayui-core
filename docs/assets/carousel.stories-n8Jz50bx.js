import{t as E}from"./index-iqhZMf16.js";import{p as j,t as ue,r as me,b as pe,f as z,g as _,h as F,d as he}from"./registry-EgEQwbXk.js";/* empty css             */import{_ as ve,a as Se,b as Te}from"./index-m2oUVtTk.js";import{_ as S}from"./render-tag-_0PNNh6Y.js";import{_ as fe}from"./dynamic-tag-7vXwaVzE.js";import{_ as Ie}from"./index-uQmmXt_z.js";import{s as ke}from"./index-ERL0bCNR.js";import{r as _e}from"./index-whtpiCcX.js";import{_ as Pe}from"./v-element-wxdcHeY-.js";import{_ as we}from"./index-3eE-BtF4.js";import{_ as Ee}from"./self-iterator-6yU_KG2T.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./index-eucXA0ea.js";import"./repeatable-jmdwKenu.js";import"./index-YuT6C2fe.js";/* empty css                    */import"./index-YaSSGaP-.js";import"./index-VGoHc-V3.js";import"./preserve-attrs-lolIpBRv.js";const D={passive:!0};function Ce(n,e){let t;return a(),r;function a(){n.addEventListener("scroll",s,D)}function s(){i(),t=setTimeout(l,640)}function l(){e(),a()}function i(){n.removeEventListener("scroll",s,D)}function r(){i(),clearTimeout(t)}}function Ae(n,e){let t,a,s;return function l(){const{scrollLeft:i}=n;if(s!==i){s=i,t=setTimeout(()=>{a=requestAnimationFrame(l)},90);return}e(s)}(),()=>{clearTimeout(t),cancelAnimationFrame(a)}}const Me=typeof window<"u"&&"scrollBehavior"in document.documentElement.style;function N(n,e,t){if(Me)return n.scrollTo({left:e}),Ae(n,t);let a,s,l=requestAnimationFrame(u=>{const{scrollLeft:p}=n,m=e-p,f=450;(function y(A){const M=A-u;if(M>f)return n.scrollLeft=e,i(),t();n.scrollLeft=$e(M/f)*m+p,l=requestAnimationFrame(y)})(u)});return n.addEventListener("touchstart",r),i;function i(){cancelAnimationFrame(l),a===void 0?d():(s&&s(),c())}function r(){i(),a=n.scrollLeft,n.addEventListener("touchend",o)}function o(){c(),a===n.scrollLeft&&(s=N(n,e,t))}function d(){n.removeEventListener("touchstart",r)}function c(){n.removeEventListener("touchend",o)}}function $e(n){return n<.5?2*n*n:-1+(4-2*n)*n}const V=-1,L=1;class Oe extends Marko.Component{cleanupAsync(){clearTimeout(this.autoplayTimeout),cancelAnimationFrame(this.renderFrame),cancelAnimationFrame(this.focusFrame),this.cancelScrollTransition&&(this.cancelScrollTransition(),this.cancelScrollTransition=void 0)}emitUpdate(){const{config:e,items:t}=this.state;e.scrollTransitioning=!1,this.emit("move",{visibleIndexes:t.filter(({fullyVisible:a})=>a).map(a=>t.indexOf(a))})}handleScroll(e){const{state:t}=this,{config:a,items:s,gap:l}=t;let i;if(e>=this.getMaxOffset(t)-l)i=s.length-1;else{const r=t.itemsPerSlide||1,o=s.length;let d=0,c=Math.ceil(o/r)-1;for(;c-d>1;){const m=Math.floor((d+c)/2);e>s[m*r].left?d=m:c=m}const u=Math.abs(e-s[d*r].left),p=Math.abs(e-s[c*r].left);i=this.normalizeIndex(t,(u>p?c:d)*r)}t.index!==i&&(this.skipScrolling=!0,a.preserveItems=!0,this.setState("index",i),this.emit("scroll",{index:i}))}getOffset(e){const{items:t,index:a}=e;return t.length&&Math.min(t[a].left,this.getMaxOffset(e))||0}getMaxOffset({items:e,slideWidth:t}){return e.length&&Math.max(e[e.length-1].right-t,0)||0}getSlide({index:e,itemsPerSlide:t},a=e){if(t)return Math.ceil(a/t)}normalizeIndex({items:e,itemsPerSlide:t},a){if(a>0){let s=a;return s%=e.length||1,s-=s%(t||1),s=Math.abs(s),s}return 0}isAnimating(e){const{items:t,index:a}=e;if(!t.length)return!1;const s=t[a];return s.left===void 0||s.right===void 0}getNextIndex(e,t){const{index:a,items:s,slideWidth:l,itemsPerSlide:i}=e;let r=a,o;if(t===V&&r===0)r=s.length-1;else{do o=s[r+=t];while(o&&o.fullyVisible);if(t===V&&!i){const d=o.right-l;do o=s[--r];while(o&&o.left>=d);r+=1}}return this.normalizeIndex(e,r)}getTemplateData(e){const{config:t,autoplayInterval:a,items:s,itemsPerSlide:l,slideWidth:i,gap:r}=e,o=t.offsetOverride!==void 0,d=s.length<=l;e.index=this.normalizeIndex(e,e.index);const c=this.getOffset(e),u=d||!a&&c===0,p=d||!a&&c===this.getMaxOffset(e),m=this.isAnimating(e)?e.bothControlsDisabled:u&&p;let f,y,A;if(l){const h=l+e.peek;f=this.getSlide(e),y=`calc(${100/h}% - ${(h-1)*r/h}px)`,A=this.getSlide(e,s.length)}return s.forEach((h,xe)=>{const{style:$,transform:O}=h,R=xe!==s.length-1&&`${r}px`;typeof $=="string"?(h.style=`${$};flex-basis:${y};margin-right:${R};`,O&&(h.style+=`transform:${O}`)):h.style=Object.assign({},$,{width:y,"margin-right":R,transform:O}),h.fullyVisible=h.left===void 0||h.left-c>=-.01&&h.right-c<=i+.01}),Object.assign({},e,{items:s,slide:f,offset:o?t.offsetOverride:c,disableTransition:o,totalSlides:A,prevControlDisabled:u,nextControlDisabled:p,bothControlsDisabled:m})}move(e){const{state:t}=this,{index:a,items:s,itemsPerSlide:l,autoplayInterval:i,slideWidth:r,gap:o,peek:d,config:c}=t,u=this.getNextIndex(t,e);let p;if(c.preserveItems=!0,this.isMoving=!0,this.skipScrolling=!1,i){if(e===L&&u<a){p=-r-o;for(let m=Math.ceil(l+d);m--;){const f=s[s.length-m-1];f.transform=`translateX(${(this.getMaxOffset(t)+r+o)*-1}px)`}}else if(e===V&&u>a){p=this.getMaxOffset(t)+r+o;for(let m=Math.ceil(l+d);m--;){const f=s[m];f.transform=`translateX(${this.getMaxOffset(t)+r+o}px)`}}c.offsetOverride=p}return this.setState("index",u),this.once("move",()=>{this.isMoving=!1,p!==void 0&&s.forEach(m=>{m.transform=void 0})}),u}handleMove(e,t){if(this.isMoving)return;const{state:a}=this,s=this.move(e),l=this.getSlide(a,s);this.emit("slide",{slide:l+1,originalEvent:t}),this.emit(`${e===1?"next":"previous"}`,{originalEvent:t})}handleStartInteraction(){this.setState("interacting",!0)}handleEndInteraction(){clearTimeout(this.interactionEndTimeout),this.isMoving?this.state.interacting&&(this.interactionEndTimeout=setTimeout(()=>{this.handleEndInteraction()},100)):this.setState("interacting",!1)}togglePlay(e){const{state:{config:t,paused:a}}=this;t.preserveItems=!0,this.setState("paused",!a),a&&!this.isMoving&&this.move(L),this.emit(`${a?"play":"pause"}`,{originalEvent:e})}onInput(e){var i;const t=parseInt(e.gap,10),a={htmlAttributes:j(e,["class","style","index","type","slide","gap","autoplay","paused","itemsPerSlide","a11yPreviousText","a11yNextText","a11yPlayText","a11yPauseText","items","hiddenScrollbar"]),classes:["carousel",e.hiddenScrollbar&&"carousel--hidden-scrollbar",e.class],style:e.style,config:{},gap:isNaN(t)?16:t,index:parseInt(e.index,10)||0,itemsPerSlide:parseFloat(e.itemsPerSlide)||0,a11yPreviousText:e.a11yPreviousText||"Previous Slide",a11yNextText:e.a11yNextText||"Next Slide",a11yPauseText:e.a11yPauseText||"Pause",a11yPlayText:e.a11yPlayText||"Play",ariaRoleDescription:e["aria-roledescription"]||"Carousel",items:[],slideWidth:0,autoplayInterval:0,paused:!1,peek:0,interacting:!1,bothControlsDisabled:!1},s=["class","style","key"],{itemsPerSlide:l}=a;if(l&&(a.peek=l%1,a.itemsPerSlide=l-a.peek,a.classes.push("carousel--slides"),!a.peek&&!e.autoplay&&!e.noPeek&&(a.peek=.1),a.peek&&a.classes.push("carousel--peek"),e.autoplay)){const r=((i=e.items)==null?void 0:i.length)<=l;a.autoplayInterval=parseInt(e.autoplay,10)||4e3,a.classes.push("carousel__autoplay"),a.paused=!!(r||e.paused),a.interacting=!1}a.items=(e.items||[]).map((r,o)=>{const d=a.itemsPerSlide?o%a.itemsPerSlide===0:!0;return{htmlAttributes:j(r,s),class:d?["carousel__snap-point",r.class]:r.class,key:r.key||o.toString(),style:r.style,renderBody:r.renderBody,left:0,right:0}}),this.state=a}onRender(){typeof window<"u"&&this.cleanupAsync()}onMount(){const{config:e}=this.state;this.listEl=this.getEl("list"),this.nextEl=this.getEl("next"),this.containerEl=this.getEl("container"),this.subscribeTo(_e).on("resize",()=>{this.cleanupAsync(),this.onRenderLegacy()}),this.skipScrolling=!1,U(this.listEl)?(e.nativeScrolling=!0,this.once("destroy",Ce(this.listEl,()=>{e.scrollTransitioning||this.handleScroll(this.listEl.scrollLeft)}))):this.subscribeTo(this.listEl).on("transitionend",({target:t})=>{t===this.listEl&&this.emitUpdate()}),this.onRenderLegacy()}onUpdate(){this.onRenderLegacy()}onDestroy(){this.cleanupAsync()}onRenderLegacy(){const{containerEl:e,listEl:t,state:a}=this,{config:s,items:l,autoplayInterval:i,paused:r,interacting:o}=a;if(l.length){if(s.offsetOverride){s.offsetOverride=void 0,this.renderFrame=requestAnimationFrame(()=>this.setStateDirty(void 0));return}if(s.preserveItems){if(s.preserveItems=!1,this.focusFrame=requestAnimationFrame(()=>{q(t,d=>{ke(d).forEach(d.getAttribute("aria-hidden")!=="true"?c=>c.hasAttribute("data-carousel-tabindex")?c.setAttribute("tabindex",c.getAttribute("data-carousel-tabindex")??"-1"):c.removeAttribute("tabindex"):c=>c.setAttribute("tabindex","-1"))})}),s.nativeScrolling)if(this.skipScrolling)this.emitUpdate();else{const d=this.getOffset(a);d!==t.scrollLeft?(s.scrollTransitioning=!0,this.cancelScrollTransition=N(t,d,this.emitUpdate.bind(this))):this.isMoving&&(s.scrollTransitioning=!0,this.cancelScrollTransition=N(t,this.getOffset(a),this.emitUpdate.bind(this)))}if(i&&!r&&!o){const d=this.move.bind(this,L);this.autoplayTimeout=setTimeout(()=>{if(this.isMoving)return this.once("move",d);d()},i)}return}this.renderFrame=requestAnimationFrame(()=>{const{width:d}=e.getBoundingClientRect(),{left:c}=t.firstElementChild.getBoundingClientRect();this.setStateDirty("slideWidth",d),s.preserveItems=!0,s.nativeScrolling=U(t),q(t,(u,p)=>{const m=l[p],{left:f,right:y}=u.getBoundingClientRect();m.left=f-c,m.right=y-c})})}}}function U(n){return getComputedStyle(n).overflowX!=="visible"}function q(n,e){let t=0,a=n.firstElementChild;for(;a;)e(a,t++),a=a.nextElementSibling}const B="jcQTeC0v",P=ue(B),ge=P;me.r(B,()=>P);const ye=Oe;P._=pe(function(n,e,t,a,s,l){var i=a.getTemplateData(s),r=i.config;e.be("div",z(i.htmlAttributes,{class:_(i.classes),style:F(i.style),"aria-roledescription":i.ariaRoleDescription,role:"group"}),"0",a,null,4),e.be("div",{class:_(["carousel__container",i.bothControlsDisabled&&"carousel__container--controls-disabled"]),id:t.elId("container")},"@container",a,null,1,{onfocusin:t.d("focusin",!!i.autoplayInterval&&"handleStartInteraction",!1),ontouchstart:t.d("touchstart",!!i.autoplayInterval&&"handleStartInteraction",!1),onmouseover:t.d("mouseover",!!i.autoplayInterval&&"handleStartInteraction",!1),onfocusout:t.d("focusout",!!i.autoplayInterval&&"handleEndInteraction",!1),onmouseout:t.d("mouseout",!!i.autoplayInterval&&"handleEndInteraction",!1),ontouchend:t.d("touchend",!!i.autoplayInterval&&"handleEndInteraction",!1)}),e.be("button",{class:"carousel__control carousel__control--prev",type:"button","aria-label":i.a11yPreviousText,"aria-disabled":i.prevControlDisabled&&"true"},"1",a,null,0,{onclick:t.d("click",!i.prevControlDisabled&&"handleMove",!1,[-1])}),S(ve,{},e,t,"2"),e.ee(),e.be("div",{class:_(["carousel__viewport",!i.itemsPerSlide&&!i.nextControlDisabled&&!i.autoplayInterval&&"carousel__viewport--mask"])},"3",a,null,1),e.be("ul",{class:_(["carousel__list",n.imageTreatment==="matte"&&"carousel__list--image-treatment"]),style:F(!r.nativeScrolling&&!!i.offset&&{transform:"translate3d("+i.offset*-1+"px,0,0)",transition:i.disableTransition?"none":void 0}),id:t.elId("list")},"@list",a,null,1);for(const o of i.items||[]){const d=`@${o.key}`,c=`[${d}]`;e.be("li",z(o.htmlAttributes,{class:_(o.class),style:F(o.style),"aria-hidden":!o.fullyVisible&&"true"}),d,a,null,4),fe(e,o.renderBody,null,null,null,null,t,"4"+c),e.ee()}e.ee(),e.ee(),e.be("button",{class:"carousel__control carousel__control--next",type:"button","aria-label":i.a11yNextText,"aria-disabled":i.nextControlDisabled&&"true",id:t.elId("next")},"@next",a,null,0,{onclick:t.d("click",!i.nextControlDisabled&&"handleMove",!1,[1])}),S(Ie,{},e,t,"5"),e.ee(),i.autoplayInterval&&!i.bothControlsDisabled&&(e.be("button",{type:"button","aria-label":i.paused?i.a11yPlayText:i.a11yPauseText,class:"carousel__playback"},"6",a,null,0,{onclick:t.d("click","togglePlay",!1)}),i.paused?S(Se,{},e,t,"7"):S(Te,{},e,t,"8"),e.ee()),e.ee(),e.ee()},{t:B},ye);P.Component=he(ye,P._);const Fe=`<h1 style="display: flex; justify-content: space-between; align-items: center;">
    <span>
        ebay-carousel
    </span>
    <span style="font-weight: normal; font-size: medium; margin-bottom: -15px;">
        DS v1.1.0
    </span>
</h1>

Descrete or Continuious carousel component. Can show items as a slide or various widths.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/navigation-disclosure-ebay-carousel)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/navigation-disclosure-ebay-carousel)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-carousel/examples)

## Preserving tabindex for focusable elements

When scrolling items, focusable elements that are not visible in the carousel should not be tabbable by default. When the carousel scrolls, it then removes the tabindex to allow the item to be focusable.
In order to preserve the tabindex on an item, pass \`data-carousel-tabindex="-1"\` attribute to a given focusable element in order to default to that tabindex instead of removing the tabindex when the item is visible.
`,W="yZuIx/Br",w=ue(W),Ve=Pe("style",null,"0",null,1,0).t(`
    .preserve-tabindex-card {
        color: #cdf4fd;
        background: #eee;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`);me.r(W,()=>w);const be={};w._=pe(function(n,e,t,a,s,l){e.n(Ve,a);const i=[];for(let r=(n.items.length-1-0)/1,o=0;o<=r;o++){const d=0+o*1,c=`[${d}]`;i.push({renderBody:u=>{u.be("div",{class:"preserve-tabindex-card"},"2"+c,a,null,1),u.be("a",{href:"https://www.ebay.com","data-carousel-tabindex":"-1"},"3"+c,a,null,0),u.t("Image here",a),u.ee(),u.be("a",{href:"https://www.ebay.com"},"4"+c,a,null,0),fe(u,n.items[d],null,null,null,null,t,"5"+c),u.ee(),S(we,{open:!0,renderBody:p=>{p.t("Body",a)}},u,t,"6"+c),u.ee()},[Symbol.iterator]:Ee})}S(ge,{gap:n.gap,itemsPerSlide:n.itemsPerSlide,index:n.index,a11yPreviousText:n.a11yPreviousText,a11yNextText:n.a11yNextText,items:i},e,t,"1")},{t:W,i:!0},be);w.Component=he(be,w._);const Le=`export interface Input {
    gap: string;
    itemsPerSlide: string;
    index: string;
    a11yPreviousText: string;
    a11yNextText: string;
    items: any[];
}

<style>
    .preserve-tabindex-card {
        color: #cdf4fd;
        background: #eee;
        font-size: 36px;
        font-weight: bold;
        height: 330px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>

<ebay-carousel gap=input.gap itemsPerSlide=input.itemsPerSlide index=input.index
    a11yPreviousText=input.a11yPreviousText
    a11yNextText=input.a11yNextText>
    <for|i| from=0 to=(input.items.length - 1)>
        <@item >
            <div class='preserve-tabindex-card'>
                <a href="https://www.ebay.com" data-carousel-tabindex="-1">
                    Image here
                </a>
                <a href="https://www.ebay.com">
                    <\${input.items[i]}/>
                </a>
                <ebay-drawer-dialog open=true>
                    Body
                </ebay-drawer-dialog>

            </div>
        </@item>
    </for>
</ebay-carousel>
`,H=["http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/aztec-pyramid.jpeg","http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/falls.jpeg","http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg","http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/shoes.jpeg","http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/tall-cat.jpeg","http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/wide-cat.jpeg"];function Ne(n,e){if(n==="variable"){const t=[100,75,120,200,130,150,100,200,60];return`${t[e%t.length]}px`}}function k(n,e,t,a){const s=[];for(let l=0;l<n;l++)if(e==="matte"&&H[l])s.push({renderBody(i){i.html(`<img src="${H[l]}"/>`)}});else{const i=Ne(a,l),r=t?"demo2-card":"demo-card";s.push({class:r,style:i&&`width: ${i}`,renderBody(o){o.html(`Card ${l+1}`)}})}return s}const C=n=>({input:{...n}}),nt={title:"navigation & disclosure/ebay-carousel",component:ge,parameters:{docs:{description:{component:Fe}}},argTypes:{numberOfItems:{description:"The amount of items",table:{category:"Demo configuration"}},item:{name:"@item",description:"The contents for each item",table:{category:"@attribute tags"}},imageTreatment:{options:["none","matte"],description:'If "matte", image treatment styles are applied.',table:{defaultValue:{summary:"none"}},type:"select"},index:{type:"number",description:"0-based index position"},itemsPerSlide:{description:"automatically fit a number of items for each carousel slide and enable slide controls. If set to a whole number, will default to x.1 where x is the whole number set."},gap:{type:"number",description:"override the margin between carousel items in pixels",table:{defaultValue:{summary:"16"}}},"aria-label":{description:"a11y label text for component",table:{category:"accessibility attributes"},control:{type:"text"}},"aria-labelledby":{description:"id of element containing a11y label text for component",table:{category:"accessibility attributes"},control:{type:"text"}},"aria-roledescription":{description:"a11y role description for component",table:{defaultValue:{summary:"Carousel"},category:"accessibility attributes"},control:{type:"text"}},"a11y-next-text":{description:"a11y text for next control",table:{defaultValue:{summary:"Next Slide"},category:"accessibility attributes"}},"a11y-previous-text":{description:"a11y text for previous control",table:{defaultValue:{summary:"Previous Slide"},category:"accessibility attributes"}},"onCarousel-update":{action:"on-carousel-update",description:"called whenever item visibility changes, including initialization",table:{category:"Events",defaultValue:{detail:"{ [visibleIndexes] }"}}},onNext:{action:"on-next",description:"click next",table:{category:"Events",defaultValue:{detail:"{ originalEvent }"}}},onPrevious:{action:"on-previous",description:"click previous",table:{category:"Events",defaultValue:{detail:"{ originalEvent }"}}},onScroll:{action:"on-scroll",description:"new index is navigated to by native scrollin",table:{category:"Events",defaultValue:{detail:"{ index }"}}},onSlide:{action:"on-slide",description:"new slide is navigated to (by controls or API)",table:{category:"Events (items-per-slide)",defaultValue:{summary:"{ slide }"}}},onPlay:{action:"on-play",description:"called when the autoplay play button is pressed",table:{category:"Events (autoplay)",defaultValue:{summary:"{ originalEvent }"}}},onPause:{action:"on-pause",description:"called when the autoplay pause button is pressed",table:{category:"Events (autoplay)",defaultValue:{summary:"{ originalEvent }"}}}}},g=C.bind({});g.args={index:0,gap:16,items:k(10),"a11y-previous-text":"","a11y-next-text":"","aria-label":"Continuous"};g.parameters={docs:{source:{code:E("ebay-carousel",g.args)}}};const b=C.bind({});b.args={index:0,gap:16,items:k(10,"none",!1,"variable"),"a11y-previous-text":"","a11y-next-text":"","aria-label":"Continuous, Varied Width"};b.parameters={docs:{source:{code:E("ebay-carousel",b.args)}}};const x=C.bind({});x.args={index:0,gap:16,imageTreatment:"matte",items:k(10,"matte"),itemWidth:"fixed","a11y-previous-text":"","a11y-next-text":"","aria-label":"Image treatment"};x.parameters={docs:{source:{code:E("ebay-carousel",x.args)}}};const T=C.bind({});T.args={items:k(5),index:0,gap:null,"a11y-previous-text":null,"a11y-next-text":null,itemsPerSlide:"2","aria-label":"Items Per Slide"};T.parameters={controls:{exclude:["autoplay"]},docs:{source:{code:E("ebay-carousel",g.args,{items:"item"})}}};const v=C.bind({});v.args={index:0,gap:null,items:k(10,"none",!0),"a11y-previous-text":null,"a11y-next-text":null,itemsPerSlide:"1",autoplay:!0,"aria-label":"Autoplay"};v.parameters={docs:{source:{code:E("ebay-carousel",v.args,{items:"item"})}}};const I=n=>({input:n,component:w});I.args={items:k(5),index:0,gap:null,"a11y-previous-text":null,"a11y-next-text":null,itemsPerSlide:"2","aria-label":"Items Per Slide"};I.parameters={docs:{source:{code:Le}}};var X,G,Q;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
  input: {
    ...args
  }
})`,...(Q=(G=g.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var Z,J,K;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
  input: {
    ...args
  }
})`,...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Y,ee,te;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
  input: {
    ...args
  }
})`,...(te=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ie,se;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`args => ({
  input: {
    ...args
  }
})`,...(se=(ie=T.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ne,re,oe;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`args => ({
  input: {
    ...args
  }
})`,...(oe=(re=v.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var le,ce,de;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`args => ({
  input: args,
  component: defaultTabIndex
})`,...(de=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const rt=["continuous","continuousVariedWidth","imageTreatment","itemsPerSlide","autoplay","PreserveTabindex"];export{I as PreserveTabindex,rt as __namedExportsOrder,v as autoplay,g as continuous,b as continuousVariedWidth,nt as default,x as imageTreatment,T as itemsPerSlide};
