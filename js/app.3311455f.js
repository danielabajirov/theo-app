(function(e){function t(t){for(var c,i,o=t[0],a=t[1],u=t[2],b=0,f=[];b<o.length;b++)i=o[b],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c]);l&&l(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,o=1;o<n.length;o++){var a=n[o];0!==s[a]&&(c=!1)}c&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},s={app:0},r=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/theo-app/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=a;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"014a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),s={id:"nav"};function r(e,t,n,r,i,o){var a=Object(c["k"])("TestQuestions");return Object(c["g"])(),Object(c["c"])("div",s,[Object(c["f"])(a)])}n("fb6a");var i=n("701a"),o=n.n(i),a=Object(c["o"])("data-v-c14b181e");Object(c["i"])("data-v-c14b181e");var u={class:"container-app"},l={class:"container-quiz"},b=Object(c["f"])("div",{class:"header-quiz"},[Object(c["f"])("h1",null,"Theo Quiz Time"),Object(c["f"])("img",{src:o.a,width:"80",height:"70"})],-1),f={class:"box-question"},p={class:"box-propositions"},h={key:0,class:"fas fa-check"},d={key:1,class:"fas fa-times"},j={key:0,class:"box-score"},O=Object(c["f"])("h2",null,"Your score is",-1),g={class:"btn-restart"},v=Object(c["e"])("Restart "),y=Object(c["f"])("i",{class:"fas fa-sync-alt"},null,-1),m={class:"footer-quiz"},k={key:0,class:"box-button"};Object(c["h"])();var x=a((function(e,t,n,s,r,i){var o=Object(c["k"])("math-field");return Object(c["g"])(),Object(c["c"])("div",u,[Object(c["f"])("div",l,[b,Object(c["f"])("div",{class:"step-progress",style:{width:r.progress+"%"}},null,4),(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["j"])(r.questions.slice(r.a,r.b),(function(e,t){return Object(c["n"])((Object(c["g"])(),Object(c["c"])("div",{class:"box",key:t},[Object(c["f"])("div",f,[Object(c["f"])("h2",null,"Question "+Object(c["l"])(r.b)+"/"+Object(c["l"])(r.questions.length),1),Object(c["f"])("p",null,Object(c["l"])(e.question),1)]),Object(c["f"])("div",p,[Object(c["f"])("ul",null,[(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["j"])(e.propositions,(function(e,t){return Object(c["g"])(),Object(c["c"])("li",{key:t,class:["li",r.correct?i.check(e):""],onClick:function(n){return i.selectResponse(e,t)}},[Object(c["f"])(o,{id:"testing",style:{"font-size":"13px"},"read-only":"false",value:e.props,onClick:function(n){return i.selectResponse(e,t)},class:r.correct?i.check(e):""},null,8,["value","onClick","class"]),r.correct&&e.correct?(Object(c["g"])(),Object(c["c"])("div",h)):Object(c["d"])("",!0),r.correct&&!e.correct?(Object(c["g"])(),Object(c["c"])("div",d)):Object(c["d"])("",!0)],10,["onClick"])})),128))])])],512)),[[c["m"],r.quiz]])})),128)),r.score_show?(Object(c["g"])(),Object(c["c"])("div",j,[O,Object(c["f"])("h2",null,Object(c["l"])(r.score)+"/"+Object(c["l"])(r.questions.length),1),Object(c["f"])("div",g,[Object(c["f"])("button",{onClick:t[1]||(t[1]=function(){return i.restartQuiz&&i.restartQuiz.apply(i,arguments)})},[v,y])])])):Object(c["d"])("",!0),Object(c["f"])("div",m,[r.progress<100?(Object(c["g"])(),Object(c["c"])("div",k,[r.questions.length?(Object(c["g"])(),Object(c["c"])("button",{key:0,onClick:t[2]||(t[2]=function(e){return i.skipQuestion()}),style:r.next?"background-color: rgb(106, 128, 202)":""},"Skip",4)):Object(c["d"])("",!0),r.questions.length?(Object(c["g"])(),Object(c["c"])("button",{key:1,onClick:t[3]||(t[3]=function(e){return i.nextQuestion()}),style:r.next?"":"background-color: rgb(106, 128, 202)"},"Next",4)):Object(c["d"])("",!0),r.questions.length?Object(c["d"])("",!0):(Object(c["g"])(),Object(c["c"])("button",{key:2,onClick:t[4]||(t[4]=function(e){return i.initializeDatabaseData()}),style:{"background-color":"rgb(106, 128, 202)"}},"Start"))])):Object(c["d"])("",!0)])])])})),q=(n("159b"),n("260b")),w=(n("66ce"),{apiKey:"AIzaSyAQiUemS5f0dwn-cau8rjE5hIn8wIA2AQg",authDomain:"theo-learn.firebaseapp.com",databaseURL:"https://theo-learn-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"theo-learn",storageBucket:"theo-learn.appspot.com",messagingSenderId:"299899111685",appId:"1:299899111685:web:236d0c1747993190544f6c"});q["a"].initializeApp(w);var z=q["a"].database(),M=z,Q=n("fdc6"),T={data:function(){return{questions:[],a:0,b:1,next:!0,score_show:!1,quiz:!0,score:0,correct:!1,progress:0,test:"\text{{M | M ist Kodierung einer Turingmaschine,}  \text{die auf endlich vielen Eingaben terminiert} ist eine entscheidbare Menge. }",questionsTest:[{question:"Inside which HTML element do we put the JavaScript ?",propositions:[{props:"x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}",correct:!0},{props:"x=\frac{-bpmsqrt{b^2-4ac}}{2a}"},{props:"x=\frac{-bpmsqrt{b^2-4ac}}{2a}"},{props:"\\text{\\{M | M ist Kodierung einer Turingmaschine,} \\text{die auf endlich vielen Eingaben terminiert\\} ist eine entscheidbare Menge. \\}  "}]}]}},name:"TestQuestions",components:{},computed:{},created:function(){},mounted:function(){var e=[];M.ref("/questions").on("value",(function(t){var n=[];t.forEach((function(t){n.push(t.val()),e=n}))})),this.questions=e,console.log("Test"+this.questions)},beforeUpdate:function(){},methods:{shuffleArray:function(e){var t,n,c;for(c=e.length-1;c>0;c--)t=Math.floor(Math.random()*(c+1)),n=e[c],e[c]=e[t],e[t]=n;return e},renderMath:function(){var e=this;this.$nextTick((function(){Q["MathLive"].renderMathInElement(e.$refs.testing)}))},initializeDatabaseData:function(){var e=[];M.ref("/questions").on("value",(function(t){var n=[];t.forEach((function(t){n.push(t.val()),e=n}))})),this.shuffleArray(e),this.questions=e},selectResponse:function(e){this.correct=!0,this.next=!1,e.correct&&this.score++},check:function(e){return e.correct?"correct":"incorrect"},nextQuestion:function(){this.next||(this.progress=this.progress+100/this.questions.length,this.questions.length-1==this.a?(this.score_show=!0,this.quiz=!1):(this.a++,this.b++,this.correct=!1,this.next=!0))},skipQuestion:function(){this.next&&(this.progress=this.progress+100/this.questions.length,this.questions.length-1==this.a?(this.score_show=!0,this.quiz=!1):(this.a++,this.b++))},restartQuiz:function(){Object.assign(this.$data,this.$options.data()),this.initializeDatabaseData()}}};n("f201");T.render=x,T.__scopeId="data-v-c14b181e";var _=T,S={name:"App",components:{TestQuestions:_}};n("8980");S.render=r;var I=S;Object(c["b"])(I).mount("#app")},"701a":function(e,t,n){e.exports=n.p+"img/biber-fmi.c1e51dd7.svg"},8980:function(e,t,n){"use strict";n("a382")},a382:function(e,t,n){},f201:function(e,t,n){"use strict";n("014a")}});
//# sourceMappingURL=app.3311455f.js.map