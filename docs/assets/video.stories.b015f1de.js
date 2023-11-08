import{t as y}from"./index.bcb3df20.js";import{t as R,r as D,a as F,d as I,c as p,s as N,m as z,p as U,b as f}from"./merge-attrs.9e0d7be9.js";import{_ as O}from"./index.f495492d.js";import{r as l}from"./render-tag.1a0b986f.js";import{_ as M}from"./preserve-tag.fa9716eb.js";import{_ as b,a as $}from"./index.08a3592f.js";import{_ as j}from"./index.0ffc8829.js";import{_ as q}from"./index.e3505939.js";import{C as W}from"./index.e565fd75.js";import"./_commonjsHelpers.b8add541.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./index.aa2d3137.js";/* empty css             */import"./index.e64e9ede.js";const H=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-video
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

## ebay-video (_ALPHA_, some APIs might change)

Video player. Supports either MPD or M3U8 playlist formats.
Natively uses dash.js player under the hood. Loads it async after the video player is loaded on the page.
For resizing, \`ebay-video\` supports fixed width or variable width. If no width is provided the video tag will resize based on the container size.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/media-ebay-video)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/media-ebay-video)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-video/examples)
`;function Q(e){const t=class extends shaka.ui.Element{constructor(a,r,v){super(a,r),this.button_=document.createElement("button"),this.button_.classList.add("video-player__report-button"),this.button_.textContent=v||"Report";const s=e.getComponent("flag-icon").el.cloneNode(!0);this.button_.prepend(s),this.parent.appendChild(this.button_),this.eventManager.listen(this.button_,"click",()=>{e.emit("report")})}};t.Factory=class{constructor(a){this.reportText=a}create(a,r){return new t(a,r,this.reportText)}};const o=shaka.ui.TextSelection;return o.Factory=class{create(a,r){return new shaka.ui.TextSelection(a,r)}},{Report:t,TextSelection:o}}const Z=2e3,G=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadstart","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","waiting"],x={addBigPlayButton:!1,addSeekBar:!0,controlPanelElements:["play_pause","time_and_duration","spacer","mute","report","fullscreen","overflow_menu"],overflowMenuButtons:["captions"]},J={isPlaylist(e){const t=e.type&&e.type.toLowerCase(),o=e.src;return t==="dash"||t==="hls"?!0:e.src?o.indexOf(".mpd")===o.length-5||o.indexOf(".m3u8")===o.length-6:!1},handleResize(){if(!this.input.width&&this.video){const{width:e}=this.root.getBoundingClientRect();this.containerEl.setAttribute("width",e)}},handlePause(e){this.video.controls=!1,this.emit("pause",{originalEvent:e,player:this.player})},handlePlaying(e){this.showControls(),this.input.playView==="fullscreen"&&this.video.requestFullscreen(),this.state.played=!0,this.emit("play",{originalEvent:e,player:this.player})},handleVolumeChange(e){this.emit("volume-change",{originalEvent:e,volume:this.video.volume,muted:this.video.muted})},handleError(e){this.state.failed=!0,this.state.isLoaded=!0,this.ui&&this.ui.configure({addBigPlayButton:!1}),this.emit("load-error",e)},showControls(){const e=Object.assign({},x);if(e.controlPanelElements=[...x.controlPanelElements],this.state.volumeSlider===!0){const t=e.controlPanelElements.length-2>0?e.controlPanelElements.length-2:e.controlPanelElements.length;e.controlPanelElements.splice(t,0,"volume")}this.ui.configure(e),this.video.controls=!1},takeAction(){switch(this.state.action){case"play":this.video.play();break;case"pause":this.video.pause();break}},onInput(e){this.video&&((e.width||e.height)&&this.containerEl.setAttribute("style",{width:`${e.width}px`}),this.video.volume=e.volume,this.video.muted=e.muted),this.state.action!==e.action&&(this.state.action=e.action,this.takeAction()),e.volumeSlider===!0&&(this.state.volumeSlider=e.volumeSlider)},onCreate(){this.state={volumeSlider:!1,action:"",showLoading:!1,isLoaded:!0,failed:!1,played:!1},this.cdnLoader=new W(this,{key:"shaka",types:["src","css"],files:["shaka-player.ui.js","controls.css"],setLoading:e=>{this.state.showLoading=e},handleError:this.handleError.bind(this),handleSuccess:this.handleSuccess.bind(this)})},_addTextTracks(){(this.input.tracks||[]).forEach(t=>{this.player.addTextTrack(t.src,t.srclang,t.kind)});const[e]=this.player.getTextTracks();e&&this.player.selectTextTrack(e.id)},_loadSrc(e){const t=e||0,o=this.input.sources[t];let a;o&&this.input.sources.length>t+1&&(a=t+1),this.player.load(o.src).then(()=>{this._addTextTracks(),this.state.isLoaded=!0,this.state.failed=!1}).catch(r=>{r.code!==7e3&&(r.code===11&&setTimeout(()=>this._loadSrc(t),0),a?setTimeout(()=>this._loadSrc(a),0):this.handleError(r))})},_attach(){const{Report:e,TextSelection:t}=Q(this);if(this.ui=new shaka.ui.Overlay(this.player,this.containerEl,this.video,this.input.reportText||""),shaka.ui.Controls.registerElement("report",new e.Factory(this.input.reportText)),shaka.ui.Controls.registerElement("captions",new t.Factory),this.ui.configure({addBigPlayButton:!0,controlPanelElements:[],addSeekBar:!1}),this.el){const o=this.getComponent("play-icon").el.cloneNode(!0),a=this.el.querySelector(".shaka-play-button");a.removeAttribute("icon"),a.appendChild(o);const r=this.el.querySelector(".shaka-spinner");r&&setTimeout(()=>{r.hidden=!0},this.input.spinnerTimeout||Z)}},handleSuccess(){shaka.polyfill.installAll(),this.player=new shaka.Player(this.video),this._attach(),this._loadSrc()},onMount(){this.root=this.getEl("root"),this.video=this.root.querySelector("video"),this.containerEl=this.root.querySelector(".video-player__container"),this.video.volume=this.input.volume||1,this.video.muted=this.input.muted||!1,this.subscribeTo(this.video).on("playing",this.handlePlaying.bind(this)).on("pause",this.handlePause.bind(this)).on("volumechange",this.handleVolumeChange.bind(this)),G.forEach(e=>{this.subscribeTo(this.video).on(e,t=>this.emit(e,t))}),this._loadVideo()},onDestroy(){this.ui&&this.ui.destroy()},_loadVideo(){this.state.failed=!1,this.state.isLoaded=!1,this.cdnLoader.setOverrides([this.input.cdnUrl,this.input.cssUrl],this.input.version).mount()}},m="urQ37fxZ",c=R(m),K=c,X=typeof window<"u";var Y=["sources","cdnUrl","cdnVersion","format","thumbnail","playView","a11yPlayText","a11yLoadText","reportText","errorText","volume","muted","volumeSlider"];D.exports.r(m,()=>c);const B=J;c._=F(function(e,t,o,a,r,v){t.be("div",{class:p(["video-player",!r.played&&e.thumbnail!==""&&"video-player--poster"])},"@root",a,null,1),X&&!e.width&&l(O,{to:typeof window=="object"&&window,__events:["on","resize"]},t,o,"0",[["resize","handleResize",!1]]),l(M,{n:!0,renderBody:s=>{s.be("div",{class:"video-player__container",style:N({width:"".concat(e.width,"px"),height:"".concat(e.height,"px")})},"1",a,null,1),s.be("video",z({"no-controls":"",poster:e.thumbnail},U(e,Y)),"2",a,null,4);{let L=0;for(const u of e.sources||[]){const h="[".concat(L++,"]");s.e("source",f(u),"3"+h,a,0,4)}let A=0;for(const u of e.track||[]){const h="[".concat(A++,"]");s.e("track",f(u),"4"+h,a,0,4)}}s.ee(),s.ee()}},t,o,"1"),t.be("div",{class:p(["video-player__overlay",!r.failed&&"video-player__overlay--hidden"])},"5",a,null,1),l($,{},t,o,"6"),t.be("div",{class:"video-player__overlay-text"},"7",a,null,1),e.errorText?t.t(e.errorText,a):t.t("An error has occurred",a),t.ee(),t.ee(),t.be("div",{class:p(["video-player__overlay",r.isLoaded&&"video-player__overlay--hidden"])},"8",a,null,1,{onclick:o.d("click","loadVideo",!1,[!0])}),r.showLoading?l(j,{a11yText:e.a11yLoadText||"Loading"},t,o,"10"):l(b,{a11yText:e.a11yPlayText||"Click to play"},t,o,"9"),t.ee(),t.be("div",{style:"display:none"},"11",a,null,1),l(b,{},t,o,"@play-icon"),l(q,{},t,o,"@flag-icon"),t.ee(),t.ee()},{t:m},B);c.Component=I(B,c._);const g=e=>({input:{...e,renderBody:e.renderBody?t=>{t.html(e.renderBody)}:null}}),ye={title:"media/ebay-video",component:K,parameters:{docs:{description:{component:H}}},argTypes:{thumbnail:{description:"The url path for the video thumbnail",control:{type:"text"}},action:{description:'Either "play" or "pause". Will programatically perform the given action',control:{type:"text"}},volume:{type:"number",table:{defaultValue:0},control:{type:"number",min:0,max:1,step:.1}},muted:{type:"boolean",control:{type:"boolean"},description:"True/False to mute or unmute video. Default is false"},playView:{description:'Either "inline", or "fullscreen". When player strats to play, will either play "inline" (default) or switch to "fullscreen"',control:{type:"text"}},cdnUrl:{description:"The full url to point to where to download shaka. This is only used to override the default CDN path.",control:{type:"text"}},cssUrl:{control:{type:"text"},description:"The full url to point to where to download shaka css. This is only used to override the default CDN path."},cdnVersion:{control:{type:"text"},description:"If using the default CDN path, you can override what version of shaka to use."},a11yLoadText:{control:{type:"text"},description:'The accessibility text for the loading spinner. Default is "Loading"'},a11yPlayText:{control:{type:"text"},description:'The accessibility text for the play button. Default is "Click to play"'},errorText:{control:{type:"text"},description:'The content for error when an either the library or video cannot load. Default is "An error has occurred"'},reportText:{control:{type:"text"},description:'The text for report button. Default is "Report"'},volumeSlider:{type:"boolean",description:"True/False to keep or remove volume slider. Default is False"},source:{name:"@source",table:{category:"@attribute tags"}},onLoadError:{action:"on-load-error",description:"Triggered when there is a load error with video player or source",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onPlay:{action:"on-play",description:"Triggered when play begins",table:{category:"Events",defaultValue:{summary:"{ originalEvent, player }"}}},"onVolume-change":{action:"on-volume-change",description:"Triggered when volume is changed. Will return the values of the volume decimal and muted true/false",table:{category:"Events",defaultValue:{summary:"{ originalEvent, volume, muted }"}}},onReport:{action:"on-report",description:"Triggered when report button is clicked",table:{category:"Events",defaultValue:{summary:"{ }"}}},onPause:{action:"on-Pause",table:{category:"Events",defaultValue:{summary:"{ }"}}},onAbort:{action:"on-abort",table:{category:"Events",defaultValue:{summary:"{ }"}}},onCanplay:{action:"on-canplay",table:{category:"Events",defaultValue:{summary:"{ }"}}},onCanplaythrough:{action:"on-canplaythrough",table:{category:"Events",defaultValue:{summary:"{ }"}}},onDurationchange:{action:"on-durationchange",table:{category:"Events",defaultValue:{summary:"{ }"}}},onEmptied:{action:"on-emptied",table:{category:"Events",defaultValue:{summary:"{ }"}}},onEncrypted:{action:"on-encrypted",table:{category:"Events",defaultValue:{summary:"{ }"}}},onEnded:{action:"on-ended",table:{category:"Events",defaultValue:{summary:"{ }"}}},onError:{action:"on-error",table:{category:"Events",defaultValue:{summary:"{ }"}}},onLoadstart:{action:"on-loadstart",table:{category:"Events",defaultValue:{summary:"{ }"}}},onProgress:{action:"on-progress",table:{category:"Events",defaultValue:{summary:"{ }"}}},onRatechange:{action:"on-ratechange",table:{category:"Events",defaultValue:{summary:"{ }"}}},onSeeked:{action:"on-seeked",table:{category:"Events",defaultValue:{summary:"{ }"}}},onSeeking:{action:"on-seeking",table:{category:"Events",defaultValue:{summary:"{ }"}}},onStalled:{action:"on-stalled",table:{category:"Events",defaultValue:{summary:"{ }"}}},onSuspend:{action:"on-suspend",table:{category:"Events",defaultValue:{summary:"{ }"}}},onTimeupdate:{action:"on-timeupdate",table:{category:"Events",defaultValue:{summary:"{ }"}}},onWaiting:{action:"on-waiting",table:{category:"Events",defaultValue:{summary:"{ }"}}}}},d=g.bind({});d.args={width:"600",height:"400",sources:[{src:"https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.mpd",type:"dash"}]};d.parameters={docs:{source:{code:y("ebay-video",d.args)}}};const i=g.bind({});i.storyName="ios";i.args={width:"600",height:"400",sources:[{src:"https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.m3u8",type:"hls"},{src:"https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.mpd",type:"dash"}]};i.parameters={docs:{source:{code:y("ebay-video",i.args)}}};const n=g.bind({});n.storyName="mp4";n.args={width:"460",height:"300","a11y-load-text":"This video is loading now","a11y-play-text":"Click to start this video",sources:[{src:"https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/video.mp4"}]};n.parameters={docs:{source:{code:y("ebay-video",n.args)}}};var T,E,k;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(k=(E=d.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var w,_,S;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(S=(_=i.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var V,C,P;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(P=(C=n.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};const me=["Standard","ios","mp4"];export{d as Standard,me as __namedExportsOrder,ye as default,i as ios,n as mp4};
//# sourceMappingURL=video.stories.b015f1de.js.map
