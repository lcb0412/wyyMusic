(function(e){function t(t){for(var c,i,l=t[0],s=t[1],u=t[2],o=0,d=[];o<l.length;o++)i=l[o],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);b&&b(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(c=!1)}c&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var c={},i={index:0},a={index:0},r=[];function l(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"db710528","chunk-0b2fb1a8":"421b8d29","chunk-7c0ecc44":"5a963633"}[e]+".js"}function s(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-0b2fb1a8":1,"chunk-7c0ecc44":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var c="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-0b2fb1a8":"e6db04c1","chunk-7c0ecc44":"f495fe4f"}[e]+".css",a=s.p+c,r=document.getElementsByTagName("link"),l=0;l<r.length;l++){var u=r[l],o=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(o===c||o===a))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){u=d[l],o=u.getAttribute("data-href");if(o===c||o===a)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var c=t&&t.target&&t.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete i[e],b.parentNode.removeChild(b),n(r)},b.href=a;var v=document.getElementsByTagName("head")[0];v.appendChild(b)})).then((function(){i[e]=0})));var c=a[e];if(0!==c)if(c)t.push(c[2]);else{var r=new Promise((function(t,n){c=a[e]=[t,n]}));t.push(c[2]=r);var u,o=document.createElement("script");o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.src=l(e);var d=new Error;u=function(t){o.onerror=o.onload=null,clearTimeout(b);var n=a[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+i+")",d.name="ChunkLoadError",d.type=c,d.request=i,n[1](d)}a[e]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:o})}),12e4);o.onerror=o.onload=u,document.head.appendChild(o)}return Promise.all(t)},s.m=e,s.c=c,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(n,c,function(t){return e[t]}.bind(null,c));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var b=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0584":function(e,t,n){"use strict";n("b8b0")},"0d76":function(e,t,n){e.exports=n.p+"img/Pointer.4b81da04.png"},1702:function(e,t,n){},"30c8":function(e,t,n){},"365c":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return o})),n.d(t,"g",(function(){return d})),n.d(t,"a",(function(){return b}));var c=n("bc3a"),i=n.n(c),a="https://netease-cloud-music-api-two-bice.vercel.app";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return i.a.get("".concat(a,"/banner?type=").concat(e))}function l(e){return i.a.get("".concat(a,"/personalized?limit=").concat(e))}function s(e){return i.a.get("".concat(a,"/playlist/detail?id=").concat(e))}function u(e){return i.a.get("".concat(a,"/song/url?id=").concat(e))}function o(e){return i.a.get("".concat(a,"/song/detail?ids=").concat(e))}function d(e){return i.a.get("".concat(a,"/lyric?id=").concat(e))}function b(e){return i.a.get("".concat(a,"/cloudsearch?keywords=").concat(e))}},"37a7":function(e,t,n){"use strict";n("83c6")},"4f28":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function i(e,t,n,i,a,r){var l=Object(c["C"])("playerControler"),s=Object(c["C"])("router-view");return Object(c["v"])(),Object(c["f"])(c["a"],null,[Object(c["j"])(l,{onIsplaying:r.isplaying},null,8,["onIsplaying"]),Object(c["j"])(s)],64)}var a=n("ba8f"),r={components:{playerControler:a["a"]},setup:function(){var e=Object(c["z"])({List:[],index:0,id:0,uname:"",imgurl:"",isplaying:!1,curtime:0}),t=function(t,n){e[t]=n};return Object(c["x"])("musicplay",{val:e,updata:t}),{musicplay:e}},methods:{isplaying:function(e){this.musicplay.isplaying=e}}},l=(n("e292"),n("6b0d")),s=n.n(l);const u=s()(r,[["render",i]]);var o=u,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),b={class:"home"};function v(e,t,n,i,a,r){var l=Object(c["C"])("tonav"),s=Object(c["C"])("swiperCom"),u=Object(c["C"])("iconList"),o=Object(c["C"])("musiclist"),d=Object(c["C"])("router-view");return Object(c["v"])(),Object(c["f"])("div",b,[Object(c["j"])(l),Object(c["j"])(s),Object(c["j"])(u),Object(c["j"])(o),Object(c["j"])(d)])}var p=function(e){return Object(c["y"])("data-v-1a1cd87e"),e=e(),Object(c["w"])(),e},f={class:"nav"},g=p((function(){return Object(c["g"])("div",{class:"nav_left"},[Object(c["g"])("svg",{class:"icon","aria-hidden":"true"},[Object(c["g"])("use",{"xlink:href":"#icon-caidan2"})])],-1)})),m={class:"nav_content"},j=Object(c["i"])("我的"),O=Object(c["i"])("发现"),y=Object(c["i"])("云村"),h=Object(c["i"])("视频"),k=p((function(){return Object(c["g"])("svg",{class:"icon","aria-hidden":"true"},[Object(c["g"])("use",{"xlink:href":"#icon-sousuo"})],-1)})),w=[k];function x(e,t,n,i,a,r){var l=Object(c["C"])("router-link");return Object(c["v"])(),Object(c["f"])("div",f,[g,Object(c["g"])("div",m,[Object(c["j"])(l,{class:Object(c["p"])(["nav_block",0==a.selectNav?"active":""]),to:{path:"/"},onClick:t[0]||(t[0]=function(e){return a.selectNav=0})},{default:Object(c["J"])((function(){return[j]})),_:1},8,["class"]),Object(c["j"])(l,{class:Object(c["p"])(["nav_block",1==a.selectNav?"active":""]),to:{path:"/"},onClick:t[1]||(t[1]=function(e){return a.selectNav=1})},{default:Object(c["J"])((function(){return[O]})),_:1},8,["class"]),Object(c["j"])(l,{class:Object(c["p"])(["nav_block",2==a.selectNav?"active":""]),to:{path:"/"},onClick:t[2]||(t[2]=function(e){return a.selectNav=2})},{default:Object(c["J"])((function(){return[y]})),_:1},8,["class"]),Object(c["j"])(l,{class:Object(c["p"])(["nav_block",3==a.selectNav?"active":""]),to:{path:"/"},onClick:t[3]||(t[3]=function(e){return a.selectNav=3})},{default:Object(c["J"])((function(){return[h]})),_:1},8,["class"])]),Object(c["g"])("div",{class:"nav_right",onClick:t[4]||(t[4]=function(t){return e.$router.push("/searchView")})},w)])}var L={data:function(){return{selectNav:1}}};n("8330");const _=s()(L,[["render",x],["__scopeId","data-v-1a1cd87e"]]);var C=_,M={class:"swiper-container"},E={class:"swiper-wrapper"},I=["src"],T=Object(c["g"])("div",{class:"swiper-pagination"},null,-1);function B(e,t,n,i,a,r){return Object(c["v"])(),Object(c["f"])("div",M,[Object(c["g"])("div",E,[(Object(c["v"])(!0),Object(c["f"])(c["a"],null,Object(c["B"])(a.imgs,(function(e,t){return Object(c["v"])(),Object(c["f"])("div",{class:"swiper-slide",key:t},[Object(c["g"])("img",{src:e.pic,alt:"",srcset:""},null,8,I)])})),128))]),T])}var N=n("1da1"),D=(n("96cf"),n("ac1f"),n("5319"),n("a7a3"),n("b619")),H=n("365c"),P={data:function(){return{imgs:[{pic:n("ebe3")}]}},mounted:function(){var e=this;return Object(N["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return new D["a"](".swiper-container",{loop:!0,pagination:{el:".swiper-pagination"}}),t.next=3,Object(H["b"])(1);case 3:for(n=t.sent,e.imgs=[],e.imgs=n.data.banners,c=0;c<e.imgs.length;c++)e.imgs[c].pic=e.imgs[c].pic.replace("http","https");console.log(e.imgs);case 8:case"end":return t.stop()}}),t)})))()}};n("6aa6");const A=s()(P,[["render",B]]);var S=A,z={class:"iconlist"},J=Object(c["h"])('<div class="listitem" data-v-b2797604><svg class="icon" aria-hidden="true" data-v-b2797604><use xlink:href="#icon-a-jisuanjibijibendiannao" data-v-b2797604></use></svg><span data-v-b2797604> 每日推荐 </span></div><div class="listitem" data-v-b2797604><svg class="icon" aria-hidden="true" data-v-b2797604><use xlink:href="#icon-a-jisuanjibijibendiannao" data-v-b2797604></use></svg><span data-v-b2797604> 每日推荐 </span></div><div class="listitem" data-v-b2797604><svg class="icon" aria-hidden="true" data-v-b2797604><use xlink:href="#icon-a-jisuanjibijibendiannao" data-v-b2797604></use></svg><span data-v-b2797604> 每日推荐 </span></div><div class="listitem" data-v-b2797604><svg class="icon" aria-hidden="true" data-v-b2797604><use xlink:href="#icon-a-jisuanjibijibendiannao" data-v-b2797604></use></svg><span data-v-b2797604> 每日推荐 </span></div>',4),$=[J];function q(e,t,n,i,a,r){return Object(c["v"])(),Object(c["f"])("div",z,$)}var U={mounted:function(){}};n("e2ef");const R=s()(U,[["render",q],["__scopeId","data-v-b2797604"]]);var V=R,F=(n("b0c0"),function(e){return Object(c["y"])("data-v-bf082254"),e=e(),Object(c["w"])(),e}),K={class:"musiclist"},G=F((function(){return Object(c["g"])("div",{class:"list_top"},[Object(c["g"])("div",{class:"top_left"},"发现好歌单"),Object(c["g"])("div",{class:"top_right"},[Object(c["g"])("div",{class:"link"},"查看更多")])],-1)})),Q={class:"swiper mySwiper"},W={class:"swiper-wrapper"},X=["src","alt"],Y=F((function(){return Object(c["g"])("div",{class:"swiper-pagination"},null,-1)}));function Z(e,t,n,i,a,r){var l=Object(c["C"])("router-link");return Object(c["v"])(),Object(c["f"])("div",K,[G,Object(c["g"])("div",Q,[Object(c["g"])("div",W,[(Object(c["v"])(!0),Object(c["f"])(c["a"],null,Object(c["B"])(i.musicArr.value,(function(e,t){return Object(c["v"])(),Object(c["d"])(l,{to:{path:"/toListDet",query:{id:e.id}},class:"swiper-slide",key:t},{default:Object(c["J"])((function(){return[Object(c["g"])("img",{src:e.picUrl,alt:e.name},null,8,X),Object(c["g"])("div",null,Object(c["E"])(e.name),1),Object(c["g"])("span",null," ▷ "+Object(c["E"])(r.changecount(e.playCount)),1)]})),_:2},1032,["to"])})),128))]),Y])])}var ee=n("84f8"),te={setup:function(){var e=Object(c["z"])([{}]);return Object(c["s"])(Object(N["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(H["e"])(10);case 2:n=t.sent,e.value=n.data.result,console.log("res",e.value);case 5:case"end":return t.stop()}}),t)})))),Object(c["u"])((function(){new D["a"](".mySwiper",{slidesPerView:3,spaceBetween:10})})),{musicArr:e}},methods:{changecount:ee["a"]}};n("6ccb");const ne=s()(te,[["render",Z],["__scopeId","data-v-bf082254"]]);var ce=ne,ie={name:"Home",components:{tonav:C,swiperCom:S,iconList:V,musiclist:ce},setup:function(){}};n("0584");const ae=s()(ie,[["render",v],["__scopeId","data-v-7ad7ca36"]]);var re=ae,le=[{path:"/",name:"Home",component:re},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/toListDet",name:"toListDet",component:function(){return n.e("chunk-7c0ecc44").then(n.bind(null,"98ba"))}},{path:"/searchView",name:"searchView",component:function(){return n.e("chunk-0b2fb1a8").then(n.bind(null,"3de4"))}}],se=Object(d["a"])({history:Object(d["b"])(""),routes:le}),ue=se,oe=n("5502"),de=Object(oe["a"])({state:{},mutations:{},actions:{},modules:{}});Object(c["c"])(o).use(de).use(ue).mount("#app")},6854:function(e,t,n){"use strict";n("30c8")},"6aa6":function(e,t,n){"use strict";n("933b")},"6ccb":function(e,t,n){"use strict";n("96ef")},8330:function(e,t,n){"use strict";n("4f28")},"83c6":function(e,t,n){},"84f8":function(e,t,n){"use strict";n("b680");function c(e){var t=0;return t=e>=1e8?(e/1e8).toFixed(1)+"亿":e>=1e4?(e/1e4).toFixed(1)+"万":e,t}t["a"]=c},9178:function(e,t,n){e.exports=n.p+"img/record.40197ee6.png"},"933b":function(e,t,n){},"96ef":function(e,t,n){},b8b0:function(e,t,n){},ba8f:function(e,t,n){"use strict";var c=n("7a23"),i=function(e){return Object(c["y"])("data-v-1e15b329"),e=e(),Object(c["w"])(),e},a={class:"player"},r=["src"],l={key:1,class:"detail_logo"},s={class:"left_detail"},u={key:0,class:"detail_title"},o={key:1,class:"detail_title"},d=i((function(){return Object(c["g"])("div",{class:"detail_tips"},"横滑可以切换上下首喔",-1)})),b=["src"],v={class:"player_right"},p=i((function(){return Object(c["g"])("use",{"xlink:href":"#icon-bofang-copy"},null,-1)})),f=[p],g=i((function(){return Object(c["g"])("use",{"xlink:href":"#icon-zanting"},null,-1)})),m=[g],j=i((function(){return Object(c["g"])("use",{"xlink:href":"#icon-youfanye"},null,-1)})),O=[j];function y(e,t,n,i,p,g){var j=Object(c["C"])("musicDetail");return Object(c["v"])(),Object(c["f"])(c["a"],null,[Object(c["g"])("div",a,[Object(c["g"])("div",{class:"player_left",onClick:t[0]||(t[0]=function(e){return i.mid.url?g.openMusicDet():""})},[i.musicplay.val.imgurl?(Object(c["v"])(),Object(c["f"])("img",{key:0,src:i.musicplay.val.imgurl,alt:"",class:"detail_logo"},null,8,r)):Object(c["e"])("",!0),i.musicplay.val.imgurl?Object(c["e"])("",!0):(Object(c["v"])(),Object(c["f"])("div",l)),Object(c["g"])("div",s,[i.musicplay.val.uname?(Object(c["v"])(),Object(c["f"])("div",u,Object(c["E"])(i.musicplay.val.uname),1)):Object(c["e"])("",!0),i.musicplay.val.uname?Object(c["e"])("",!0):(Object(c["v"])(),Object(c["f"])("div",o,"未播放音乐")),d,Object(c["g"])("audio",{id:"wyyaudio",src:i.mid.url,autoplay:""},null,8,b)])]),Object(c["g"])("div",v,[i.musicplay.val.isplaying?Object(c["e"])("",!0):(Object(c["v"])(),Object(c["f"])("svg",{key:0,class:"icon","aria-hidden":"true",onClick:t[1]||(t[1]=function(){return g.changeAduioPlay&&g.changeAduioPlay.apply(g,arguments)})},f)),i.musicplay.val.isplaying?(Object(c["v"])(),Object(c["f"])("svg",{key:1,class:"icon","aria-hidden":"true",onClick:t[2]||(t[2]=function(){return g.changeAduioPlay&&g.changeAduioPlay.apply(g,arguments)})},m)):Object(c["e"])("",!0),(Object(c["v"])(),Object(c["f"])("svg",{class:"icon","aria-hidden":"true",onClick:t[3]||(t[3]=function(){return i.nextMusic&&i.nextMusic.apply(i,arguments)})},O))])]),Object(c["j"])(j,{selectMusicDet:i.selectMusicDet},null,8,["selectMusicDet"])],64)}n("b0c0");var h=n("365c"),k=n("0d76"),w=n.n(k),x=n("9178"),L=n.n(x),_=function(e){return Object(c["y"])("data-v-481b3bea"),e=e(),Object(c["w"])(),e},C={class:"musicDet"},M={class:"bg"},E=["src"],I=_((function(){return Object(c["g"])("div",null,"＜",-1)})),T={key:0},B=_((function(){return Object(c["g"])("img",{src:w.a,alt:"",class:"pointerlogo"},null,-1)})),N=[B],D=_((function(){return Object(c["g"])("div",{class:"black"},null,-1)})),H=_((function(){return Object(c["g"])("img",{src:L.a,alt:"",class:"centerwrapper"},null,-1)})),P=["src"],A=Object(c["h"])('<div class="lyric" data-v-481b3bea><div class="picblock" id="picblock1" data-v-481b3bea></div><div class="picblock" id="picblock2" data-v-481b3bea></div><div class="picblock" id="picblock3" data-v-481b3bea></div><div class="picblock" id="picblock4" data-v-481b3bea></div><div class="picblock" id="picblock5" data-v-481b3bea></div></div>',1),S={class:"bottomcontroler"},z=_((function(){return Object(c["g"])("div",{class:"playliststatus"},[Object(c["g"])("svg",{class:"icon","aria-hidden":"true"},[Object(c["g"])("use",{"xlink:href":"#icon-xunhuanbofang-wangyiicon"})])],-1)})),J=_((function(){return Object(c["g"])("svg",{class:"icon","aria-hidden":"true"},[Object(c["g"])("use",{"xlink:href":"#icon-shangyiqu-wangyiicon"})],-1)})),$=[J],q={key:0,class:"icon","aria-hidden":"true",style:{width:"0.8rem",height:"0.8rem"}},U=_((function(){return Object(c["g"])("use",{"xlink:href":"#icon-zanting-wangyiicon"},null,-1)})),R=[U],V={key:1,class:"icon","aria-hidden":"true",style:{width:"0.8rem",height:"0.8rem"}},F=_((function(){return Object(c["g"])("use",{"xlink:href":"#icon-bofang-wangyiicon"},null,-1)})),K=[F],G=_((function(){return Object(c["g"])("svg",{class:"icon","aria-hidden":"true"},[Object(c["g"])("use",{"xlink:href":"#icon-xiayiqu-wangyiicon"})],-1)})),Q=[G],W=_((function(){return Object(c["g"])("div",{class:"menu"},[Object(c["g"])("svg",{class:"icon","aria-hidden":"true"},[Object(c["g"])("use",{"xlink:href":"#icon-caidan1"})])],-1)}));function X(e,t,n,i,a,r){var l;return Object(c["K"])((Object(c["v"])(),Object(c["f"])("div",C,[Object(c["g"])("div",M,[Object(c["g"])("img",{src:i.musicplay.val.imgurl,alt:""},null,8,E)]),Object(c["g"])("div",{class:"return",onClick:t[0]||(t[0]=function(){return r.returnList&&r.returnList.apply(r,arguments)})},[I,i.musicplay.val.uname?(Object(c["v"])(),Object(c["f"])("p",T,Object(c["E"])(i.musicplay.val.uname)+" - "+Object(c["E"])(null===(l=i.musicplay.val.List[i.musicplay.val.index])||void 0===l?void 0:l.ar[0].name),1)):Object(c["e"])("",!0)]),Object(c["g"])("div",{class:Object(c["p"])(i.musicplay.val.isplaying?"pointer":"pointer_select")},N,2),D,Object(c["g"])("div",{class:"center",onClick:t[1]||(t[1]=function(){return r.clickMusic&&r.clickMusic.apply(r,arguments)})},[H,Object(c["g"])("img",{src:i.musicplay.val.imgurl,alt:"",class:Object(c["p"])(["centercontent",i.musicplay.val.isplaying?"selectcentercontent":"pausecentercontent"])},null,10,P)]),A,Object(c["g"])("div",S,[z,Object(c["g"])("div",{class:"playlast",onClick:t[2]||(t[2]=function(){return r.playLast&&r.playLast.apply(r,arguments)})},$),Object(c["g"])("div",{class:"statusplay",onClick:t[3]||(t[3]=function(){return r.clickMusic&&r.clickMusic.apply(r,arguments)})},[i.musicplay.val.isplaying?Object(c["e"])("",!0):(Object(c["v"])(),Object(c["f"])("svg",q,R)),i.musicplay.val.isplaying?(Object(c["v"])(),Object(c["f"])("svg",V,K)):Object(c["e"])("",!0)]),Object(c["g"])("div",{class:"playnext",onClick:t[4]||(t[4]=function(){return r.playNext&&r.playNext.apply(r,arguments)})},Q),W])],512)),[[c["H"],n.selectMusicDet.flag]])}n("ac1f"),n("1276"),n("a9e3");var Y={setup:function(){var e=Object(c["n"])("musicplay"),t=Object(c["z"])({val:"",timeList:[]});return Object(c["I"])((function(){return e.val.id}),(function(e,n){Object(h["g"])(e).then((function(e){t.val=e.data.lrc.lyric;var n=t.val.split(/[(\r\n)\r\n]+/);t.val=[],t.timeList=[];for(var c=0;c<n.length;c++){var i=n[c].split(/\[|\]/);if(i[1]&&t.val.push(i),i[1]){var a=60*Number(i[1].split(":")[0]),r=i[1].split(":")[1].split("."),l=Number(r[0])+Number(r[1])/1e3,s=a+l;t.timeList.push(s)}}}))}),{deep:!0}),{musicplay:e,lrc:t}},props:["selectMusicDet"],methods:{returnList:function(){this.selectMusicDet.flag=!1},clickMusic:function(){this.musicplay.val.isplaying=!this.musicplay.val.isplaying,console.log("播放状态改变为",this.musicplay.val.isplaying)},playNext:function(){this.$parent.nextMusic()},playLast:function(){this.$parent.lastMusic()}},mounted:function(){var e=this;setInterval((function(){e.$parent.getCurTime();for(var t=0;t<e.lrc.timeList.length;t++)if(e.lrc.val.length>=5)if(e.musicplay.curtime>=e.lrc.timeList[t]&&e.musicplay.curtime<e.lrc.timeList[t+1]&&t>1&&t<e.lrc.val.length-2)for(var n=[1,2,3,4,5],c=0;c<n.length;c++){var i=document.getElementById("picblock".concat(n[c]));i.innerHTML=e.lrc.val[t+n[c]-3][2]?e.lrc.val[t+n[c]-3][2]:"..."}else{if(e.musicplay.curtime>=e.lrc.timeList[t]&&e.musicplay.curtime<e.lrc.timeList[t+1]&&0==t)for(var a=[3,4,5],r=0;r<a.length;r++){var l=document.getElementById("picblock".concat(a[r]));l.innerHTML=e.lrc.val[t+a[r]-3][2]?e.lrc.val[t+a[r]-3][2]:"..."}if(e.musicplay.curtime>=e.lrc.timeList[t]&&e.musicplay.curtime<e.lrc.timeList[t+1]&&1==t)for(var s=[3,4,5],u=0;u<s.length;u++){var o=document.getElementById("picblock".concat(s[u]));o.innerHTML=e.lrc.val[t+s[u]-3][2]?e.lrc.val[t+s[u]-3][2]:"..."}e.musicplay.curtime>=e.lrc.timeList[t]&&e.musicplay.curtime<e.lrc.timeList[t+1]&&t==e.lrc.val.length-2&&(document.getElementById("picblock3").innerHTML=e.lrc.val[t][2]?e.lrc.val[t][2]:"...",document.getElementById("picblock4").innerHTML=e.lrc.val[t+1][2]?e.lrc.val[t+1][2]:"...",document.getElementById("picblock5").innerHTML=""),e.musicplay.curtime>=e.lrc.timeList[t]&&e.musicplay.curtime<e.lrc.timeList[t]+5&&t==e.lrc.val.length-1&&(document.getElementById("picblock3").innerHTML=e.lrc.val[t][2]?e.lrc.val[t][2]:"...",document.getElementById("picblock4").innerHTML="",document.getElementById("picblock5").innerHTML="")}else if(e.lrc.val.length<5){for(var d=[1,2,3,4,5],b=0;b<d.length;b++){var v=document.getElementById("picblock".concat(d[b]));v.innerHTML=""}for(var p=0;p<e.lrc.val.length;p++){var f=document.getElementById("picblock".concat(d[p]));f.innerHTML=e.lrc.val[d[p]-1][2]?e.lrc.val[d[p]-1][2]:"..."}}}),100)},computed:{windowHei:function(){return document.documentElement.clientHeight||window.innerHeight}}},Z=(n("37a7"),n("6b0d")),ee=n.n(Z);const te=ee()(Y,[["render",X],["__scopeId","data-v-481b3bea"]]);var ne=te,ce={components:{musicDetail:ne},emits:["isplaying"],setup:function(e,t){var n=Object(c["n"])("musicplay"),i=Object(c["z"])({url:""}),a=Object(c["z"])({flag:!1,isplay:n.isplaying}),r=Object(c["A"])(!0);function l(){Object(h["c"])(n.val.id).then((function(e){e.data.data[0].url?i.url=e.data.data[0].url:i.url="https://music.163.com/song/media/outer/url?id=".concat(n.val.id,".mp3"),console.log(e.data.data[0].url)})),console.log("第"+n.val.index+"首")}function s(){n.updata("index",n.val.index+1),n.val.List[n.val.index]?(console.log("下一首",n.val.List[n.val.index].id),n.updata("id",n.val.List[n.val.index].id),n.updata("uname",n.val.List[n.val.index].name),n.updata("imgurl",n.val.List[n.val.index].al.picUrl),n.isplaying=!0):console.log("歌单播放完毕")}function u(){n.val.index>0?(n.updata("index",n.val.index-1),console.log("上一首",n.val.List[n.val.index].id),n.updata("id",n.val.List[n.val.index].id),n.updata("uname",n.val.List[n.val.index].name),n.updata("imgurl",n.val.List[n.val.index].al.picUrl),n.isplaying=!0):console.log("当前歌单暂无上一首")}function o(){var e=document.getElementById("wyyaudio").currentTime;n.curtime=e}return Object(c["u"])((function(){r&&(n.isplaying=!0,r=!1),l()})),Object(c["s"])((function(){var e=document.getElementById("wyyaudio");e.loop=!1;var t=function(){setTimeout((function(){console.log("播放结束"),s()}),1e3)};e.addEventListener("ended",t,!1)})),Object(c["I"])(i,(function(e,c){t.emit("isplaying",n.isplaying)})),Object(c["I"])((function(){return n}),(function(e,n){e.val.isplaying?document.getElementById("wyyaudio").play():document.getElementById("wyyaudio").pause(),t.emit("isplaying",e.val.isplaying)}),{deep:!0}),{musicplay:n,mid:i,selectMusicDet:a,flag:r,getMusicUrl:l,nextMusic:s,lastMusic:u,getCurTime:o}},methods:{changeAduioPlay:function(){this.mid.url?this.musicplay.val.isplaying?(this.musicplay.val.isplaying=!1,this.$emit("isplaying",this.musicplay.val.isplaying)):(this.musicplay.val.isplaying=!0,this.$emit("isplaying",this.musicplay.val.isplaying)):alert("请选择音乐播放")},openMusicDet:function(){this.selectMusicDet.flag=!0}}};n("6854");const ie=ee()(ce,[["render",y],["__scopeId","data-v-1e15b329"]]);t["a"]=ie},e292:function(e,t,n){"use strict";n("ee11")},e2ef:function(e,t,n){"use strict";n("1702")},ebe3:function(e,t,n){e.exports=n.p+"img/swiper4.8bab640a.png"},ee11:function(e,t,n){}});
//# sourceMappingURL=index.57d66775.js.map