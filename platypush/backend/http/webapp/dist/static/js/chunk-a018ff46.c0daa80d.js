(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a018ff46"],{"18dc":function(e,t,n){"use strict";n("99af"),n("a15b"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0");var r=n("5530"),i=(n("96cf"),n("1da1")),a=n("2909"),o=n("3e54"),s={name:"Utils",mixins:[o["a"]],computed:{audioExtensions:function(){return new Set(["3gp","aa","aac","aax","act","aiff","amr","ape","au","awb","dct","dss","dvf","flac","gsm","iklax","ivs","m4a","m4b","m4p","mmf","mp3","mpc","msv","nmf","nsf","ogg,","opus","ra,","raw","sln","tta","vox","wav","wma","wv","webm","8svx"])},videoExtensions:function(){return new Set(["webm","mkv","flv","flv","vob","ogv","ogg","drc","gif","gifv","mng","avi","mts","m2ts","mov","qt","wmv","yuv","rm","rmvb","asf","amv","mp4","m4p","m4v","mpg","mp2","mpeg","mpe","mpv","mpg","mpeg","m2v","m4v","svi","3gp","3g2","mxf","roq","nsv","flv","f4v","f4p","f4a","f4b"])},mediaExtensions:function(){return new Set([].concat(Object(a["a"])(this.videoExtensions),Object(a["a"])(this.audioExtensions)))}},methods:{convertTime:function(e){e=parseFloat(e);var t={};t.h=""+parseInt(e/3600),t.m=""+parseInt(e/60-60*t.h),t.s=""+parseInt(e-(3600*t.h+60*t.m));for(var n=0,r=["m","s"];n<r.length;n++){var i=r[n];parseInt(t[i])<10&&(t[i]="0"+t[i])}var a=[];return parseInt(t.h)&&a.push(t.h),a.push(t.m,t.s),a.join(":")},startStreaming:function(e){var t=arguments,n=this;return Object(i["a"])(regeneratorRuntime.mark((function i(){var a,o,s,u;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=t.length>1&&void 0!==t[1]&&t[1],o=e,s=null,e instanceof Object?(o=e.url,s=e.subtitles):e={url:o},i.next=6,n.request("media.start_streaming",{media:o,subtitles:s,download:a});case 6:return u=i.sent,i.abrupt("return",Object(r["a"])(Object(r["a"])({},e),u));case 8:case"end":return i.stop()}}),i)})))()},stopStreaming:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.request("media.stop_streaming",{media_id:e});case 2:case"end":return n.stop()}}),n)})))()}}};t["a"]=s},"3cbf":function(e,t,n){},6062:function(e,t,n){"use strict";var r=n("6d61"),i=n("6566");e.exports=r("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(e,t,n){"use strict";var r=n("9bf2").f,i=n("7c73"),a=n("e2cc"),o=n("0366"),s=n("19aa"),u=n("2266"),c=n("7dd0"),f=n("2626"),d=n("83ab"),v=n("f183").fastKey,l=n("69f3"),p=l.set,m=l.getterFor;e.exports={getConstructor:function(e,t,n,c){var f=e((function(e,r){s(e,f,t),p(e,{type:t,index:i(null),first:void 0,last:void 0,size:0}),d||(e.size=0),void 0!=r&&u(r,e[c],{that:e,AS_ENTRIES:n})})),l=m(t),h=function(e,t,n){var r,i,a=l(e),o=b(e,t);return o?o.value=n:(a.last=o={index:i=v(t,!0),key:t,value:n,previous:r=a.last,next:void 0,removed:!1},a.first||(a.first=o),r&&(r.next=o),d?a.size++:e.size++,"F"!==i&&(a.index[i]=o)),e},b=function(e,t){var n,r=l(e),i=v(t);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==t)return n};return a(f.prototype,{clear:function(){var e=this,t=l(e),n=t.index,r=t.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;t.first=t.last=void 0,d?t.size=0:e.size=0},delete:function(e){var t=this,n=l(t),r=b(t,e);if(r){var i=r.next,a=r.previous;delete n.index[r.index],r.removed=!0,a&&(a.next=i),i&&(i.previous=a),n.first==r&&(n.first=i),n.last==r&&(n.last=a),d?n.size--:t.size--}return!!r},forEach:function(e){var t,n=l(this),r=o(e,arguments.length>1?arguments[1]:void 0,3);while(t=t?t.next:n.first){r(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!b(this,e)}}),a(f.prototype,n?{get:function(e){var t=b(this,e);return t&&t.value},set:function(e,t){return h(this,0===e?0:e,t)}}:{add:function(e){return h(this,e=0===e?0:e,e)}}),d&&r(f.prototype,"size",{get:function(){return l(this).size}}),f},setStrong:function(e,t,n){var r=t+" Iterator",i=m(t),a=m(r);c(e,t,(function(e,t){p(this,{type:r,target:e,state:i(e),kind:t,last:void 0})}),(function(){var e=a(this),t=e.kind,n=e.last;while(n&&n.removed)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),f(t)}}},"6d61":function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),a=n("94ca"),o=n("6eeb"),s=n("f183"),u=n("2266"),c=n("19aa"),f=n("861d"),d=n("d039"),v=n("1c7e"),l=n("d44e"),p=n("7156");e.exports=function(e,t,n){var m=-1!==e.indexOf("Map"),h=-1!==e.indexOf("Weak"),b=m?"set":"add",g=i[e],w=g&&g.prototype,x=g,j={},O=function(e){var t=w[e];o(w,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(h&&!f(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return h&&!f(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(h&&!f(e))&&t.call(this,0===e?0:e)}:function(e,n){return t.call(this,0===e?0:e,n),this})};if(a(e,"function"!=typeof g||!(h||w.forEach&&!d((function(){(new g).entries().next()})))))x=n.getConstructor(t,e,m,b),s.REQUIRED=!0;else if(a(e,!0)){var y=new x,E=y[b](h?{}:-0,1)!=y,k=d((function(){y.has(1)})),R=v((function(e){new g(e)})),I=!h&&d((function(){var e=new g,t=5;while(t--)e[b](t,t);return!e.has(-0)}));R||(x=t((function(t,n){c(t,x,e);var r=p(new g,t,x);return void 0!=n&&u(n,r[b],{that:r,AS_ENTRIES:m}),r})),x.prototype=w,w.constructor=x),(k||I)&&(O("delete"),O("has"),m&&O("get")),(I||E)&&O(b),h&&w.clear&&delete w.clear}return j[e]=x,r({global:!0,forced:x!=g},j),l(x,e),h||n.setStrong(x,e,m),x}},a79d9:function(e,t,n){"use strict";var r=n("7a23"),i=Object(r["K"])("data-v-1502d8a8");Object(r["u"])("data-v-1502d8a8");var a={class:"torrent-container"},o={class:"header-container"},s={class:"view-container"};Object(r["s"])();var u=i((function(e,t,n,i,u,c){var f=Object(r["z"])("Header"),d=Object(r["z"])("TorrentView");return Object(r["r"])(),Object(r["e"])("div",a,[Object(r["h"])("div",o,[Object(r["h"])(f,{onTorrentAdd:t[1]||(t[1]=function(e){return c.download(e)})})]),Object(r["h"])("div",s,[Object(r["h"])(d,{"plugin-name":n.pluginName},null,8,["plugin-name"])])])})),c=(n("96cf"),n("1da1")),f=Object(r["K"])("data-v-6133f14d");Object(r["u"])("data-v-6133f14d");var d={class:"row"},v={class:"col-s-12 col-m-9 col-l-7 left side"},l={class:"search-box"};Object(r["s"])();var p=f((function(e,t,n,i,a,o){return Object(r["r"])(),Object(r["e"])("div",{class:["header",{"with-filter":e.filterVisible}]},[Object(r["h"])("div",d,[Object(r["h"])("div",v,[Object(r["h"])("form",{onSubmit:t[2]||(t[2]=Object(r["J"])((function(t){return e.$emit("torrent-add",a.torrentURL)}),["prevent"]))},[Object(r["h"])("label",l,[Object(r["I"])(Object(r["h"])("input",{type:"search",placeholder:"Add torrent URL","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.torrentURL=e})},null,512),[[r["F"],a.torrentURL]])])],32)])])],2)})),m={name:"Header",emits:["torrent-add"],data:function(){return{torrentURL:""}}};n("f774");m.render=p,m.__scopeId="data-v-6133f14d";var h=m,b=n("0cc1"),g=n("3e54"),w={name:"Panel",components:{TorrentView:b["a"],Header:h},mixins:[g["a"]],props:{pluginName:{type:String,required:!0}},methods:{download:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.request("".concat(t.pluginName,".download"),{torrent:e});case 2:case"end":return n.stop()}}),n)})))()}}};n("b170");w.render=u,w.__scopeId="data-v-1502d8a8";t["a"]=w},b170:function(e,t,n){"use strict";n("3cbf")},ba28:function(e,t,n){},bb2f:function(e,t,n){var r=n("d039");e.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},f183:function(e,t,n){var r=n("d012"),i=n("861d"),a=n("5135"),o=n("9bf2").f,s=n("90e3"),u=n("bb2f"),c=s("meta"),f=0,d=Object.isExtensible||function(){return!0},v=function(e){o(e,c,{value:{objectID:"O"+ ++f,weakData:{}}})},l=function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,c)){if(!d(e))return"F";if(!t)return"E";v(e)}return e[c].objectID},p=function(e,t){if(!a(e,c)){if(!d(e))return!0;if(!t)return!1;v(e)}return e[c].weakData},m=function(e){return u&&h.REQUIRED&&d(e)&&!a(e,c)&&v(e),e},h=e.exports={REQUIRED:!1,fastKey:l,getWeakData:p,onFreeze:m};r[c]=!0},f774:function(e,t,n){"use strict";n("ba28")}}]);
//# sourceMappingURL=chunk-a018ff46.c0daa80d.js.map