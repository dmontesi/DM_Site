(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2],{268:function(t,e,r){var map={"./XT3S0117-small-small.jpg":270,"./XT3S0117.jpg":271,"./XT3S5462.jpg":192,"./XT3S5465.jpg":272,"./XT3S5465_1.jpg":191,"./bathroom-1.jpg":273,"./bg-small.jpg":274,"./bg.jpg":275,"./cedar-small.jpg":276,"./cedar.jpg":277,"./contact-small.jpg":278,"./contact.jpg":279,"./dan-small.jpg":280,"./dan.jpg":281,"./etienne-bosiger-OWsdJ-MllYA-unsplash.jpg":282,"./hero-md.jpg":283,"./hero-sm.jpg":284,"./hero.jpg":190,"./infocus-small.jpg":285,"./infocus.jpg":286,"./lboe-small.jpg":287,"./lboe.jpg":288,"./ldsc-book-small.jpg":289,"./ldsc-book.jpg":290,"./location-small.jpg":291,"./location.jpg":292,"./maynooth-small.jpg":293,"./maynooth.jpg":294,"./menus-small.jpg":295,"./menus.jpg":296,"./web-small.jpg":297,"./web.jpg":298,"./wilson-small.jpg":299,"./wilson.jpg":300};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=268},269:function(t,e,r){"use strict";r.r(e);r(34),r(29),r(47),r(30),r(48);var n=r(21),o=(r(135),r(24),r(61),r(31),r(12),r(136),r(43));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{PhArrowSquareOut:r(101).a},data:function(){return{selected:""}},computed:l(l({},Object(o.c)(["posts","categories"])),{},{filteredLabel:function(){var filter=new RegExp(this.selected,"i");return this.posts.filter((function(t){return t.label.match(filter)}))}})},m=r(18),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid"},[t._m(0),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"work__list list",attrs:{"aria-label":"Select"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selected=e.target.multiple?r:r[0]}}},[n("option",{attrs:{disabled:"",value:""}},[t._v("\n      Filter by Category\n    ")]),t._v(" "),t._l(t.categories,(function(e){return n("option",{key:e},[t._v("\n      "+t._s(e)+"\n    ")])}))],2),t._v(" "),n("div",{staticClass:"cards"},[n("div",{staticClass:"cards__grid"},t._l(t.filteredLabel,(function(e){return n("div",{key:e.title,staticClass:"card bg-dark"},[n("picture",[n("source",{attrs:{"data-srcset":r(268)("./"+e.imageLg+".jpg"),media:"(min-width:56.25em)",type:"image/jpg"}}),t._v(" "),n("img",{staticClass:"card__img lazyload",attrs:{"data-src":r(268)("./"+e.image+".jpg")}})]),t._v(" "),n("div",{staticClass:"card__content"},[e.category?n("p",{staticClass:"category small"},[t._v("\n            "+t._s(e.category)+"\n          ")]):t._e(),t._v(" "),n("h3",{staticClass:"heading-tertiary u-margin-bottom-tiny"},[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),n("p",{staticClass:"paragraph"},[t._v("\n            "+t._s(e.description)+"\n          ")])]),t._v(" "),n("div",{staticClass:"card__footer"},[n("a",{staticClass:"card__cta text-link",attrs:{href:e.url,target:e.target,rel:"noreferrer","aria-label":"Visit link"}},[t._v(t._s(e.cta)+"\n            "),e.external?n("span",{staticClass:"card__icon"},[n("ph-arrow-square-out",{attrs:{size:20}})],1):t._e()]),t._v(" "),n("div",{staticClass:"card__labels"},t._l(e.labels,(function(e){return n("span",{key:e.label},[t._v("\n              "+t._s(e)+"\n            ")])})),0)])])})),0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"work__header"},[r("h2",{staticClass:"heading-secondary"},[t._v("\n      Featured Work\n    ")])])}],!1,null,null,null);e.default=component.exports},270:function(t,e,r){t.exports=r.p+"img/XT3S0117-small-small.2cef511.jpg"},271:function(t,e,r){t.exports=r.p+"img/XT3S0117.84dd684.jpg"},272:function(t,e,r){t.exports=r.p+"img/XT3S5465.d593e52.jpg"},273:function(t,e,r){t.exports=r.p+"img/bathroom-1.7ecfd05.jpg"},274:function(t,e,r){t.exports=r.p+"img/bg-small.09bf80a.jpg"},275:function(t,e,r){t.exports=r.p+"img/bg.8705888.jpg"},276:function(t,e,r){t.exports=r.p+"img/cedar-small.a72fbcd.jpg"},277:function(t,e,r){t.exports=r.p+"img/cedar.7920699.jpg"},278:function(t,e,r){t.exports=r.p+"img/contact-small.665584d.jpg"},279:function(t,e,r){t.exports=r.p+"img/contact.0a54978.jpg"},280:function(t,e,r){t.exports=r.p+"img/dan-small.2ab7816.jpg"},281:function(t,e,r){t.exports=r.p+"img/dan.1989d8f.jpg"},282:function(t,e,r){t.exports=r.p+"img/etienne-bosiger-OWsdJ-MllYA-unsplash.cd8f364.jpg"},283:function(t,e,r){t.exports=r.p+"img/hero-md.a858b36.jpg"},284:function(t,e,r){t.exports=r.p+"img/hero-sm.0295df2.jpg"},285:function(t,e,r){t.exports=r.p+"img/infocus-small.3b634b8.jpg"},286:function(t,e,r){t.exports=r.p+"img/infocus.7576865.jpg"},287:function(t,e,r){t.exports=r.p+"img/lboe-small.6fe90b0.jpg"},288:function(t,e,r){t.exports=r.p+"img/lboe.8ed126d.jpg"},289:function(t,e,r){t.exports=r.p+"img/ldsc-book-small.71f8814.jpg"},290:function(t,e,r){t.exports=r.p+"img/ldsc-book.bca4d2c.jpg"},291:function(t,e,r){t.exports=r.p+"img/location-small.39b6481.jpg"},292:function(t,e,r){t.exports=r.p+"img/location.bf0638f.jpg"},293:function(t,e,r){t.exports=r.p+"img/maynooth-small.60d8bdd.jpg"},294:function(t,e,r){t.exports=r.p+"img/maynooth.26e1571.jpg"},295:function(t,e,r){t.exports=r.p+"img/menus-small.145a9fd.jpg"},296:function(t,e,r){t.exports=r.p+"img/menus.84c7fca.jpg"},297:function(t,e,r){t.exports=r.p+"img/web-small.b3b6b0f.jpg"},298:function(t,e,r){t.exports=r.p+"img/web.2f894d1.jpg"},299:function(t,e,r){t.exports=r.p+"img/wilson-small.f9acc2a.jpg"},300:function(t,e,r){t.exports=r.p+"img/wilson.342722e.jpg"},306:function(t,e,r){"use strict";r.r(e);r(34),r(29),r(31),r(12),r(47),r(30),r(48);var n=r(21),o=r(43);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{AppCard:r(269).default},data:function(){return{selected:"Filter by category"}},computed:l(l({},Object(o.c)(["page","categories","cards","selected"])),Object(o.b)(["filteredCards"]))},m=r(18),component=Object(m.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("section",{ref:"services",staticClass:"section work"},[e("div",{staticClass:"work__grid"},[e("app-card")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppCard:r(269).default})}}]);