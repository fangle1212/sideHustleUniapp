(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"059d":function(e,t,n){"use strict";n.r(t);var r=n("717b"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},"0953":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.regionFiltersConfig.filterList.length),r=e.welfareFilterConfig.filterList.length;e._isMounted||(e.e0=function(t){return e.$refs.layout.shareShow()}),e.$mp.data=Object.assign({},{$root:{g0:n,g1:r}})},i=[]},"0a62":function(e,t,n){"use strict";n.r(t);var r=n("0953"),i=n("e3ab");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("f5bb");var a=n("f0c5"),c=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"3ab50682",null,!1,r["a"],void 0);t["default"]=c.exports},"18f2":function(e,t,n){"use strict";(function(e){var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("2eee")),o=r(n("c973")),a=r(n("448a")),c=r(n("9523")),u=n("26cb"),f=(n("bd6c"),n("7561"));function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,c.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={name:"Job",components:{JobBasicLayout:function(){n.e("layouts/JobBasicLayout").then(function(){return resolve(n("27ea"))}.bind(null,n)).catch(n.oe)},IndexSearch:function(){n.e("pages/job/components/IndexSearch").then(function(){return resolve(n("933f"))}.bind(null,n)).catch(n.oe)},IndexFilters:function(){n.e("pages/job/components/IndexFilters").then(function(){return resolve(n("f092"))}.bind(null,n)).catch(n.oe)},IndexJobItem:function(){Promise.all([n.e("common/vendor"),n.e("pages/job/components/IndexJobItem")]).then(function(){return resolve(n("cccb"))}.bind(null,n)).catch(n.oe)},page:1},data:function(){return{jobList:[],filterJobList:[],pageInit:!1,page:1,total:0}},computed:l(l({},(0,u.mapState)(["config"])),{},{regionFiltersConfig:function(){var e=this.config.regionArr||[];return{filterName:"区域",filterList:e}},welfareFilterConfig:function(){var e=this.jobList.map((function(e){return e.tips})).flat(1/0),t=(0,a.default)(new Set(e)).map((function(e,t){return{name:e,id:(t+1).toString()}}));return{filterName:"福利",filterList:t}}}),created:function(){var e=this;return(0,o.default)(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(e.config),e.handleSearch();case 2:case"end":return t.stop()}}),t)})))()},onPullDownRefresh:function(){this.pullDownRefresh()},onReachBottom:function(){this.reachBottom()},onShareAppMessage:function(){return this.config.shareConfig},methods:{pullDownRefresh:function(){e.startPullDownRefresh(),this.handleSearch()},reachBottom:function(){var e=Math.ceil(this.jobList.length/10);e>=this.page+1&&(this.page++,this.setPage())},filter:function(){var e,t,n=this.jobList,r=[],i=this.$refs.search.keyword||"";r=n.filter((function(e){return e.title.includes(i)}));var o=null===(e=this.$refs["cityFilter"])||void 0===e?void 0:e.selected;if(o&&"0"!==o){var a,c=null===(a=this.$refs["cityFilter"])||void 0===a?void 0:a.selectedName;r=r.filter((function(e){return 0===e.region.length||e.region.includes(c)}))}var u=null===(t=this.$refs["welfareFilter"])||void 0===t?void 0:t.selected;if(u&&"0"!==u){var f,s=null===(f=this.$refs["welfareFilter"])||void 0===f?void 0:f.selectedName;r=r.filter((function(e){return e.tips.includes(s)}))}return r},setPage:function(){var e=this.filter();console.log(10*this.page),this.filterJobList=e.slice(0,10*this.page)},handleSearch:function(){var t=this;return(0,o.default)(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.pageInit||e.showLoading({title:"加载中"}),t.page=1,n.next=4,(0,f.getJobList)();case 4:t.jobList=n.sent,t.setPage(),e.hideLoading(),e.stopPullDownRefresh(),t.pageInit=!0;case 9:case"end":return n.stop()}}),n)})))()}}};t.default=d}).call(this,n("543d")["default"])},"43bb":function(e,t,n){"use strict";(function(e,t){var r=n("4ea4");n("6820");r(n("66fd"));var i=r(n("ce8f"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(i.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},6520:function(e,t,n){},"717b":function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("0a62")),o=[{title:"今日信息差",key:"today"},{title:"生活求助",key:"help"},{title:"工具导航",key:"nav"},{title:"二手闲置",key:"temp"}],a={components:{BasicLayout:function(){n.e("layouts/BasicLayout").then(function(){return resolve(n("cd1a"))}.bind(null,n)).catch(n.oe)},HiTabs:function(){n.e("pages/index/components/HiTabs").then(function(){return resolve(n("5fe3"))}.bind(null,n)).catch(n.oe)},Today:function(){n.e("pages/today/today").then(function(){return resolve(n("9008"))}.bind(null,n)).catch(n.oe)},Help:function(){n.e("pages/help/help").then(function(){return resolve(n("d817"))}.bind(null,n)).catch(n.oe)},Nav:function(){Promise.all([n.e("common/vendor"),n.e("pages/nav/nav")]).then(function(){return resolve(n("4a3f"))}.bind(null,n)).catch(n.oe)},Temp:function(){n.e("pages/temp/temp").then(function(){return resolve(n("0501"))}.bind(null,n)).catch(n.oe)},List:i.default},data:function(){return{tabsConfig:o,key:o[0].key}},onPullDownRefresh:function(){this.$refs.list.pullDownRefresh()},onReachBottom:function(){this.$refs.list.reachBottom()},onShareAppMessage:function(){return{title:"来吧开心鸟！",path:"/pages/index/index"}},methods:{handleTabClick:function(e,t){this.key=o[e].key,t&&t()}}};t.default=a},ce8f:function(e,t,n){"use strict";n.r(t);var r=n("fc65"),i=n("059d");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("e1d3");var a=n("f0c5"),c=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"ce1cd790",null,!1,r["a"],void 0);t["default"]=c.exports},e1d3:function(e,t,n){"use strict";var r=n("e36a"),i=n.n(r);i.a},e36a:function(e,t,n){},e3ab:function(e,t,n){"use strict";n.r(t);var r=n("18f2"),i=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},f5bb:function(e,t,n){"use strict";var r=n("6520"),i=n.n(r);i.a},fc65:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var r=function(){var e=this.$createElement;this._self._c},i=[]}},[["43bb","common/runtime","common/vendor"]]]);