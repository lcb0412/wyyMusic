(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d7ab9d4a"],{"098d":function(t,e,c){},"9d72":function(t,e,c){"use strict";c.r(e);var n=c("7a23"),i=function(t){return Object(n["y"])("data-v-5cbf09f9"),t=t(),Object(n["w"])(),t},a={class:"newmusic"},s={class:"newmusictop"},u=i((function(){return Object(n["g"])("div",{class:"bg"},null,-1)})),l=i((function(){return Object(n["g"])("strong",null,"  ＜   ",-1)})),o=[l],r=i((function(){return Object(n["g"])("div",{class:"title"},"新歌榜",-1)}));function d(t,e,c,i,l,d){var b=Object(n["C"])("playList");return Object(n["v"])(),Object(n["f"])("div",a,[Object(n["g"])("div",s,[u,Object(n["g"])("div",{class:"return",onClick:e[0]||(e[0]=function(e){return t.$router.go(-1)})},o),r]),Object(n["j"])(b)])}var b=c("1da1"),v=(c("96cf"),c("bf5a")),f=c("6c02"),j=c("365c"),O={components:{playList:v["a"]},setup:function(){var t=Object(n["n"])("musicplay"),e=Object(f["d"])(),c=[];return Object(n["s"])(Object(b["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(e.currentRoute.value.query.type),n.next=3,Object(j["h"])(e.currentRoute.value.query.type).then((function(e){console.log(e.data);for(var n=0;n<e.data.data.length;n++)c[n]=e.data.data[n];console.log(c),t.updata("List",{trackIds:c}),console.log(t.val.List)}));case 3:case"end":return n.stop()}}),n)})))),{router:e,musicplay:t,tempList:c}}},g=(c("cfbb"),c("6b0d")),p=c.n(g);const m=p()(O,[["render",d],["__scopeId","data-v-5cbf09f9"]]);e["default"]=m},bf5a:function(t,e,c){"use strict";c("b0c0");var n=c("7a23"),i=function(t){return Object(n["y"])("data-v-500f2da5"),t=t(),Object(n["w"])(),t},a={class:"playlist",id:"plist"},s={class:"playlist_nav",id:"pltop"},u={class:"nav_left"},l=i((function(){return Object(n["g"])("svg",{class:"icon","aria-hidden":"true"},[Object(n["g"])("use",{"xlink:href":"#icon-yinle"})],-1)})),o={class:"tips"},r=Object(n["i"])(" 播放全部 "),d={key:0,class:"nav_right"},b={class:"playlist_content"},v=["onClick"],f={class:"listblock_left"},j={class:"blockdid"},O={class:"lefttitle"},g={style:{color:"red"}},p={style:{"font-size":"0.2rem"}},m=i((function(){return Object(n["g"])("div",{class:"listblock_right"},[Object(n["g"])("svg",{class:"icon","aria-hidden":"true"},[Object(n["g"])("use",{"xlink:href":"#icon-bofang-copy"})])],-1)}));function y(t,e,c,i,y,L){var h,k,w,_;return Object(n["v"])(),Object(n["f"])("div",a,[Object(n["g"])("div",s,[Object(n["g"])("div",u,[l,Object(n["g"])("div",o,[r,Object(n["g"])("span",null,"（共"+Object(n["E"])(null===(h=i.moreList)||void 0===h?void 0:h.List.length)+"首）",1)])]),null!==(k=c.msg)&&void 0!==k&&k.detail.subscribedCount?(Object(n["v"])(),Object(n["f"])("div",d,"+ 收藏 （ "+Object(n["E"])(null!==(w=c.msg)&&void 0!==w&&w.detail.subscribedCount?i.formatNum(c.msg.detail.subscribedCount):0)+" ）",1)):Object(n["e"])("",!0)]),Object(n["g"])("div",b,[(Object(n["v"])(!0),Object(n["f"])(n["a"],null,Object(n["B"])(null===(_=i.moreList)||void 0===_?void 0:_.List,(function(t,e){return Object(n["v"])(),Object(n["f"])("div",{class:"list_block",onClick:function(t){return i.useChangeMusic(e,i.musicplay)}},[Object(n["g"])("div",f,[Object(n["g"])("div",j,Object(n["E"])(e+1),1),Object(n["g"])("div",O,[Object(n["i"])(Object(n["E"])(null===t||void 0===t?void 0:t.name)+" ",1),Object(n["g"])("div",g,[(Object(n["v"])(!0),Object(n["f"])(n["a"],null,Object(n["B"])(null===t||void 0===t?void 0:t.ar,(function(t,e){return Object(n["v"])(),Object(n["f"])("span",p,Object(n["E"])(t.name)+"    ",1)})),256)),Object(n["i"])(" "+Object(n["E"])(null!==t&&void 0!==t&&t.alia[0]?"-"+(null===t||void 0===t?void 0:t.alia[0]):""),1)])])]),m],8,v)})),256))])])}function L(t,e){console.log(e),e.updata("index",t),e.updata("id",e.val.List[t].id),e.updata("uname",e.val.List[t].name),e.updata("imgurl",e.val.List[t].al.picUrl)}var h=c("365c");function k(t,e){Object(n["I"])((function(){return t}),(function(c,n){for(var i=t.val,a=function(t){Object(h["d"])(i.List.trackIds[t].id).then((function(c){e.List[t]=c.data.songs[0]}))},s=0;s<(null===(u=i.List.trackIds)||void 0===u?void 0:u.length);s++){var u;a(s)}t.updata("List",e.List)}),{deep:!0})}var w=c("84f8"),_={props:["msg"],setup:function(){var t=Object(n["n"])("musicplay"),e=Object(n["z"])({List:[]});return k(t,e),{musicplay:t,moreList:e,useChangeMusic:L,useMusicListDetail:k,formatNum:w["a"]}}},C=(c("f8fc"),c("6b0d")),E=c.n(C);const I=E()(_,[["render",y],["__scopeId","data-v-500f2da5"]]);e["a"]=I},cfbb:function(t,e,c){"use strict";c("098d")},f8fc:function(t,e,c){"use strict";c("fcee")},fcee:function(t,e,c){}}]);
//# sourceMappingURL=chunk-d7ab9d4a.cd34ef19.js.map