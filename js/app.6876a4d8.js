(function(t){function e(e){for(var c,r,i=e[0],a=e[1],u=e[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c]);b&&b(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],c=!0,i=1;i<n.length;i++){var a=n[i];0!==s[a]&&(c=!1)}c&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var c={},s={app:0},o=[];function r(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=c,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)r.d(n,c,function(e){return t[e]}.bind(null,c));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/theo-app/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var b=a;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1958:function(t,e,n){"use strict";n("9406")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),s={id:"nav"};function o(t,e,n,o,r,i){var a=Object(c["k"])("TestQuestions");return Object(c["g"])(),Object(c["c"])("div",s,[Object(c["f"])(a)])}n("fb6a");var r=n("701a"),i=n.n(r),a=Object(c["o"])("data-v-fc19817e");Object(c["i"])("data-v-fc19817e");var u={class:"container-app"},b={class:"container-quiz"},l=Object(c["f"])("div",{class:"header-quiz"},[Object(c["f"])("h1",null,"Theo Quiz Time"),Object(c["f"])("img",{src:i.a,width:"80",height:"70"})],-1),f={class:"box-question"},h={class:"box-propositions"},d={key:0,class:"fas fa-check"},p={key:1,class:"fas fa-times"},j={key:0,class:"box-score"},O=Object(c["f"])("h2",null,"Your score is",-1),g={class:"btn-restart"},v=Object(c["e"])("Restart "),y=Object(c["f"])("i",{class:"fas fa-sync-alt"},null,-1),k={class:"footer-quiz"},m={key:0,class:"box-button"};Object(c["h"])();var x=a((function(t,e,n,s,o,r){var i=Object(c["k"])("math-field");return Object(c["g"])(),Object(c["c"])("div",u,[Object(c["f"])("div",b,[l,Object(c["f"])("div",{class:"step-progress",style:{width:o.progress+"%"}},null,4),(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["j"])(o.questions.slice(o.a,o.b),(function(t,e){return Object(c["n"])((Object(c["g"])(),Object(c["c"])("div",{class:"box",key:e},[Object(c["f"])("div",f,[Object(c["f"])("h2",null,"Question "+Object(c["l"])(o.b)+"/"+Object(c["l"])(o.questions.length),1),Object(c["f"])("p",null,Object(c["l"])(t.question),1)]),Object(c["f"])("div",h,[Object(c["f"])("ul",null,[(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["j"])(t.propositions,(function(t,e){return Object(c["g"])(),Object(c["c"])("li",{key:e,class:["li",o.correct?r.check(t):""],onClick:function(n){return r.selectResponse(t,e)}},[Object(c["f"])(i,{id:"testing",style:{"font-size":"13px"},"read-only":"false",value:t.props,onPointerdown:function(n){return r.selectResponse(t,e)},class:o.correct?r.check(t):""},null,8,["value","onPointerdown","class"]),o.correct&&t.correct?(Object(c["g"])(),Object(c["c"])("div",d)):Object(c["d"])("",!0),o.correct&&!t.correct?(Object(c["g"])(),Object(c["c"])("div",p)):Object(c["d"])("",!0)],10,["onClick"])})),128))])])],512)),[[c["m"],o.quiz]])})),128)),o.score_show?(Object(c["g"])(),Object(c["c"])("div",j,[O,Object(c["f"])("h2",null,Object(c["l"])(o.score)+"/"+Object(c["l"])(o.questions.length),1),Object(c["f"])("div",g,[Object(c["f"])("button",{onClick:e[1]||(e[1]=function(){return r.restartQuiz&&r.restartQuiz.apply(r,arguments)})},[v,y])])])):Object(c["d"])("",!0),Object(c["f"])("div",k,[o.progress<100?(Object(c["g"])(),Object(c["c"])("div",m,[o.questions.length?(Object(c["g"])(),Object(c["c"])("button",{key:0,onClick:e[2]||(e[2]=function(t){return r.skipQuestion()}),style:o.next?"background-color: rgb(106, 128, 202)":""},"Skip",4)):Object(c["d"])("",!0),o.questions.length?(Object(c["g"])(),Object(c["c"])("button",{key:1,onClick:e[3]||(e[3]=function(t){return r.nextQuestion()}),style:o.next?"":"background-color: rgb(106, 128, 202)"},"Next",4)):Object(c["d"])("",!0),o.questions.length?Object(c["d"])("",!0):(Object(c["g"])(),Object(c["c"])("button",{key:2,onClick:e[4]||(e[4]=function(t){return r.initializeDatabaseData()}),style:{"background-color":"rgb(106, 128, 202)"}},"Start"))])):Object(c["d"])("",!0)])])])})),q=(n("159b"),n("260b")),w=(n("66ce"),{apiKey:"AIzaSyBHETOEz_WUJS92ZBf8s8g3_UL0Bbc8W9o",authDomain:"theo-db-3a8d7.firebaseapp.com",databaseURL:"https://theo-db-3a8d7-default-rtdb.europe-west1.firebasedatabase.app",projectId:"theo-db-3a8d7",storageBucket:"theo-db-3a8d7.appspot.com",messagingSenderId:"390207700329",appId:"1:390207700329:web:0c529d733b298addd991f8",measurementId:"G-Q3YFXMJ8XZ"});q["a"].initializeApp(w);var z=q["a"].database(),_=z,Q=n("fdc6"),M={data:function(){return{questions:[],a:0,b:1,next:!0,score_show:!1,quiz:!0,score:0,correct:!1,progress:0,nextCount:0}},name:"TestQuestions",components:{},mounted:function(){this.initializeDatabaseData()},methods:{shuffleArray:function(t){var e,n,c;for(c=t.length-1;c>0;c--)e=Math.floor(Math.random()*(c+1)),n=t[c],t[c]=t[e],t[e]=n;return t},renderMath:function(){var t=this;this.$nextTick((function(){Q["MathLive"].renderMathInElement(t.$refs.testing)}))},initializeDatabaseData:function(){var t=[];_.ref("/questions").on("value",(function(e){var n=[];e.forEach((function(e){n.push(e.val()),t=n}))})),this.shuffleArray(t),this.questions=t},selectResponse:function(t){this.correct=!0,this.next=!1,t.correct&&(this.score=this.nextCount+1)},check:function(t){return t.correct?"correct":"incorrect"},nextQuestion:function(){this.nextCount=this.score,this.next||(this.progress=this.progress+100/this.questions.length,this.questions.length-1==this.a?(this.score_show=!0,this.quiz=!1):(this.a++,this.b++,this.correct=!1,this.next=!0))},skipQuestion:function(){this.next&&(this.progress=this.progress+100/this.questions.length,this.questions.length-1==this.a?(this.score_show=!0,this.quiz=!1):(this.a++,this.b++))},restartQuiz:function(){Object.assign(this.$data,this.$options.data()),this.initializeDatabaseData()}}},S=(n("1958"),n("d959")),C=n.n(S);const D=C()(M,[["render",x],["__scopeId","data-v-fc19817e"]]);var P=D,T={name:"App",components:{TestQuestions:P}};n("d4ad");const I=C()(T,[["render",o]]);var A=I;Object(c["b"])(A).mount("#app")},"701a":function(t,e,n){t.exports=n.p+"img/biber-fmi.b0b28c6b.svg"},9406:function(t,e,n){},b94c:function(t,e,n){},d4ad:function(t,e,n){"use strict";n("b94c")}});
//# sourceMappingURL=app.6876a4d8.js.map