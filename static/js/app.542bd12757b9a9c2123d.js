webpackJsonp([0],{"0ZM5":function(t,e){},"1/oy":function(t,e){},"9M+g":function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},MN8Z:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),v={name:"App",mounted:function(){window.addEventListener("resize",this.resizeHandler),this.resizeHandler()},data:function(){return{style:{}}},methods:{resizeHandler:function(){var t=.9*window.innerWidth,e=1.5*t,n=100;e+70>window.innerHeight?t=(e=window.innerHeight-140)/1.5:n=(window.innerHeight-e+70)/2;var i=(window.innerWidth-t)/2;console.log({width:t+"px",height:e+"px",top:n+"px",left:i+"px"}),window.innerHeight<600&&(console.log("Small Screen"),t=window.innerWidth,e=window.innerHeight,n=0,i=0),this.style={width:t+"px",height:e+"px",top:n+"px",left:i+"px"}}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:this.style,attrs:{id:"app"}},[e("div",{attrs:{id:"viewport"}},[e("router-view")],1),this._v(" "),e("div",{attrs:{id:"top"}}),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"notice"}},[e("h1",[this._v("竖起来看效果更好")]),this._v(" "),e("img",{attrs:{src:n("Vxuj")}})])}]};var _=n("VU/8")(v,r,!1,function(t){n("MN8Z")},null,null).exports,s=n("/ocq"),o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"box"}},[n("h1",{attrs:{id:"main-title"}},[t._v("头脑风暴")]),t._v(" "),n("b-button",{attrs:{id:"start-btn",size:"lg",variant:"primary"},on:{click:t.start}},[t._v("\n      开始挑战\n  ")]),t._v(" "),n("b-button",{attrs:{id:"result-btn"},on:{click:t.result}},[t._v("\n      排行榜\n  ")]),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"banner-bottom"}},[e("img",{attrs:{src:n("Vxuj")}})])}]};var d=n("VU/8")({name:"Welcome",methods:{start:function(t){this.$router.push("/game")},result:function(t){this.$router.push("/level")}}},o,!1,function(t){n("0ZM5")},"data-v-4347be27",null).exports,a={name:"Game",mounted:function(){setInterval(this.updateTime,1e3),this.nextTi(!1,!0)},data:function(){return{second:0,correctNum:0,question:"",answers:["","","",""],correct:0,boxClass:"box-opaque",tiRemain:[["为什么NYU纽约大学的学生自称紫钻贵族？","NYU的学生都有冲qq紫钻","纽约大学钻石研究专业全美第一，校园内有世界上最大的紫钻","NYU的主题色是红色和蓝色，混合即为紫色","NYU学校的主题色是紫色",4],["下列方法哪个可以最好的提高托福写作？","每天阅读范文，同时练习写作，学以致用","每天阅读范文，但是不自己写","每天看美剧，了解美国俚语","每天听嘻哈音乐，寻找写作灵感",1],["美国大学申请关注哪几个内容？","SAT，ACT等考试成绩，只需成绩即可","美国大学属于抽签制，抽到即被录取","SAT，ACT等考试成绩，和社会活动经历，综合考虑","参加美国的全球统一高考，上国服本一线即被录取",3],["下列哪个AP考试不能在中国大陆报考","AP美国历史","AP环境科学","AP统计学","AP中文",4],["主文书务必避免的做法是什么？","他人代写或弄虚作假","细节描写，场景描写","人物内心表现","声明自己兴趣和未来规划",3],["新SAT满分多少？","900","1500","1600","2400",3],["ACT考试时间一般多久？","一天","连续3天，每天两科目","半天","看个人速度，可提前交卷离开",3],["ACT和SAT的共同点或不同点：","ACT是美国高考，SAT是英国高考","ACT有科学推理，SAT没有","SAT比ACT难，是ACT的进阶考试","SAT考试时间更短对速度要求高，",2],["TOEFL考试遇到听力或阅读加试的几率大概多少：","偶尔会遇到","几乎每次都会遇到","托福没有加试","遇到的几率比写作加试几率低",1],["以下哪种考试不适用于本科出国申请？","托福","ACT","SAT","GRE",4],["AP考试在每年的几月份进行？","5月","6月","9月","12月",1],["厦门中学生留学俱乐部的英文简称是？","XMOC","XMOA","XOA","XMC",1],["厦门中学生留学俱乐部的公众号名是？","留学生就这样","中学生留学就这YOUNG","中学生就这样","Amoy学生就这YOUNG",2],["被称为最好录取的常春藤大学是哪一所？","密歇根大学","滨州社区大学","布朗大学","康奈尔大学",4],["为什么普度大学被称为“航天员的摇篮”？","普度大学是NASA航天员训练的总部","普度大学有20多名校友是美国航天员","普度大学是全美第一所有机场的大学","普度大学飞行员专业全美排名第一",2],["小明对计算机工程感兴趣，有优越的申请条件，他应该申请哪所学校？","哈弗大学","圣母大学","文理学院"," 卡内基梅陇大学",4],["下列四所加州大学中，综合学术声誉最高的是哪一所？","UCB","UCLA","UCSB","UCSD",1],["被称为常年Defer大校的是哪所学校？","凯斯西储大学","圣塞巴斯蒂安大学","加州大学洛杉矶分校","威斯康辛麦迪逊大学",1],["主文书尽量避免的题材是什么？","个人对社会看法类文章","个人的成长和心路历程","体育类文章","体现个人失败并成长的文章",3]]}},methods:{updateTime:function(){this.second++},nextTi:function(t,e){var n=this,i=this.tiRemain.length;if(0===i)this.$router.push("/result/"+this.correctNum+"/"+this.second);else{var v=void 0;v=i<50?Math.floor(Math.random()*i):Math.floor(Math.random()*i/3*2);var r=this.tiRemain[v];this.tiRemain.splice(v,1),t&&this.correctNum++,e?(this.boxClass="",this.question=r[0],this.answers=r.slice(1,5),this.correct=Number(r[5])):(this.boxClass="box-opaque",setTimeout(function(){n.boxClass="",n.question=r[0],n.answers=r.slice(1,5),n.correct=Number(r[5])},300))}},clickAnswer:function(t){console.log(t,this.correct),t===this.correct?(console.log("correct"),this.nextTi(!0,!1)):(console.log("not right"),this.$router.push("/result/"+this.correctNum+"/"+this.second))},clickSkip:function(){console.log("Skip"),this.nextTi(!1,!1)}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.boxClass,attrs:{id:"box"}},[n("h1",[t._v("挑战者：AQ")]),t._v(" "),n("div",{attrs:{id:"sec-col"}},[n("div",{attrs:{id:"used-sec"}},[t._v("已用 "+t._s(t.second)+" 秒")]),t._v(" "),n("div",{attrs:{id:"ti-num"}},[t._v("答对 "+t._s(t.correctNum)+" 题")])]),t._v(" "),n("div",{attrs:{id:"question"}},[t._v("\n    "+t._s(t.question)+"\n  ")]),t._v(" "),t._l(t.answers,function(e,i){return n("div",{key:i,staticClass:"choice",on:{click:function(e){t.clickAnswer(i+1)}}},[t._v("\n    "+t._s(e)+"\n  ")])}),t._v(" "),n("div",{staticClass:"choice",on:{click:function(e){t.clickSkip()}}},[t._v("\n    跳过本题\n  ")])],2)},staticRenderFns:[]};var u=n("VU/8")(a,c,!1,function(t){n("pH1B")},"data-v-7483c5f4",null).exports,l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"box"}},[e("h1",{attrs:{id:"main-title"}},[this._v("排行榜")]),this._v(" "),this._m(0),this._v(" "),e("b-button",{attrs:{id:"back-btn",variant:"primary"},on:{click:this.back}},[this._v("\n      返回\n  ")])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("table",{attrs:{id:"level-table"}},[i("tr",[i("th",[t._v("\n          名次\n        ")]),t._v(" "),i("th",[t._v("\n          昵称\n        ")]),t._v(" "),i("th",[t._v("\n          答对题数\n        ")]),t._v(" "),i("th",[t._v("\n          用时\n        ")])]),t._v(" "),i("tr",[i("td",[t._v("1")]),t._v(" "),i("td",[t._v("AQ")]),t._v(" "),i("td",[t._v("150")]),t._v(" "),i("td",[t._v("30分5秒")])]),t._v(" "),i("tr",[i("td",[t._v("2")]),t._v(" "),i("td",[t._v("AQ")]),t._v(" "),i("td",[t._v("150")]),t._v(" "),i("td",[t._v("30分10秒")])]),t._v(" "),i("tr",[i("td",[t._v("3")]),t._v(" "),i("td",[t._v("AQ")]),t._v(" "),i("td",[t._v("150")]),t._v(" "),i("td",[t._v("31分5秒")])]),t._v(" "),i("tr",[i("td",[t._v("4")]),t._v(" "),i("td",[t._v("AQ")]),t._v(" "),i("td",[t._v("150")]),t._v(" "),i("td",[t._v("32分5秒")])]),t._v(" "),i("tr",[i("td",[t._v("5")]),t._v(" "),i("td",[t._v("AQ")]),t._v(" "),i("td",[t._v("150")]),t._v(" "),i("td",[t._v("32分10秒")])]),t._v(" "),i("tr",[i("td",[t._v("6")]),t._v(" "),i("td",[t._v("AQ")]),t._v(" "),i("td",[t._v("150")]),t._v(" "),i("td",[t._v("32分20秒")])]),t._v(" "),i("tr",[i("td",[t._v("7")]),t._v(" "),i("td",[t._v("AQ")]),t._v(" "),i("td",[t._v("150")]),t._v(" "),i("td",[t._v("32分50秒")])]),t._v(" "),i("tr",[i("td",[t._v("8")]),t._v(" "),i("td",[t._v("AQ")]),t._v(" "),i("td",[t._v("150")]),t._v(" "),i("td",[t._v("33分5秒")])]),t._v(" "),i("tr",[i("td",[t._v("9")]),t._v(" "),i("td",[t._v("AQ")]),t._v(" "),i("td",[t._v("150")]),t._v(" "),i("td",[t._v("34分5秒")])]),t._v(" "),i("tr",[i("td",[t._v("10")]),t._v(" "),i("td",[t._v("AQ")]),t._v(" "),i("td",[t._v("150")]),t._v(" "),i("td",[t._v("35分5秒")])])]),t._v(" "),i("div",{attrs:{id:"banner-bottom"}},[i("img",{attrs:{src:n("Vxuj")}})])])}]};var h=n("VU/8")({name:"Result",methods:{back:function(){this.$router.go(-1)}}},l,!1,function(t){n("qJgK")},"data-v-bd618db8",null).exports,m={name:"Result",methods:{back:function(){this.$router.go(-2)}},computed:{correctNum:function(){return this.$route.params.correctNum},time:function(){return this.$route.params.time},prettifiedTime:function(){var t=this.$route.params.time;return t<60?t+"秒":t%60==0?t/60+"分":Math.floor(t/60)+"分"+t%60+"秒"}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"box"}},[n("h1",[t._v("挑战结束")]),t._v(" "),n("h2",{attrs:{id:"res-txt"}},[t._v("答对"+t._s(t.correctNum)+"题  用时"+t._s(t.prettifiedTime))]),t._v(" "),n("h2",[t._v("排行榜")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("b-button",{attrs:{id:"back-btn",size:"lg",variant:"primary"},on:{click:t.back}},[t._v("\n      返回\n  ")])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",{attrs:{id:"level-table"}},[n("tr",[n("th",[t._v("\n          名次\n        ")]),t._v(" "),n("th",[t._v("\n          昵称\n        ")]),t._v(" "),n("th",[t._v("\n          答对题数\n        ")]),t._v(" "),n("th",[t._v("\n          用时\n        ")])]),t._v(" "),n("tr",[n("td",[t._v("1")]),t._v(" "),n("td",[t._v("AQ")]),t._v(" "),n("td",[t._v("150")]),t._v(" "),n("td",[t._v("30分5秒")])]),t._v(" "),n("tr",[n("td",[t._v("2")]),t._v(" "),n("td",[t._v("AQ")]),t._v(" "),n("td",[t._v("150")]),t._v(" "),n("td",[t._v("30分10秒")])]),t._v(" "),n("tr",[n("td",[t._v("3")]),t._v(" "),n("td",[t._v("AQ")]),t._v(" "),n("td",[t._v("150")]),t._v(" "),n("td",[t._v("31分5秒")])]),t._v(" "),n("tr",[n("td",[t._v("4")]),t._v(" "),n("td",[t._v("AQ")]),t._v(" "),n("td",[t._v("150")]),t._v(" "),n("td",[t._v("32分5秒")])]),t._v(" "),n("tr",[n("td",[t._v("5")]),t._v(" "),n("td",[t._v("AQ")]),t._v(" "),n("td",[t._v("150")]),t._v(" "),n("td",[t._v("32分10秒")])]),t._v(" "),n("tr",[n("td",[t._v("6")]),t._v(" "),n("td",[t._v("AQ")]),t._v(" "),n("td",[t._v("150")]),t._v(" "),n("td",[t._v("32分20秒")])]),t._v(" "),n("tr",[n("td",[t._v("7")]),t._v(" "),n("td",[t._v("AQ")]),t._v(" "),n("td",[t._v("150")]),t._v(" "),n("td",[t._v("32分50秒")])]),t._v(" "),n("tr",[n("td",[t._v("8")]),t._v(" "),n("td",[t._v("AQ")]),t._v(" "),n("td",[t._v("150")]),t._v(" "),n("td",[t._v("33分5秒")])]),t._v(" "),n("tr",[n("td",[t._v("9")]),t._v(" "),n("td",[t._v("AQ")]),t._v(" "),n("td",[t._v("150")]),t._v(" "),n("td",[t._v("34分5秒")])]),t._v(" "),n("tr",[n("td",[t._v("10")]),t._v(" "),n("td",[t._v("AQ")]),t._v(" "),n("td",[t._v("150")]),t._v(" "),n("td",[t._v("35分5秒")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"banner-bottom"}},[e("img",{attrs:{src:n("Vxuj")}})])}]};var p=n("VU/8")(m,f,!1,function(t){n("zoDZ")},"data-v-018466b2",null).exports,A=n("e6fC");n("Jmt5"),n("9M+g");i.a.use(s.a),i.a.use(A.a);var b=new s.a({routes:[{name:"Welcome",path:"/",alias:"/welcome",component:d},{name:"Game",path:"/game",component:u,beforeEnter:function(t,e,n){console.log(e),"Welcome"===e.name?n():(console.log("Invalid Entry to Game"),n("/"))}},{name:"Result",path:"/result/:correctNum/:time",component:p,beforeEnter:function(t,e,n){console.log(e),"Game"===e.name?n():(console.log("Invalid Entry to Result"),n("/"))}},{name:"Level",path:"/level",component:h},{name:"Not Found",path:"*",redirect:"/"}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:b,components:{App:_},template:"<App/>"})},Vxuj:function(t,e,n){t.exports=n.p+"static/img/banner-bottom.6dad6cc.png"},pH1B:function(t,e){},qJgK:function(t,e){},zoDZ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.542bd12757b9a9c2123d.js.map