(this["webpackJsonpsimple-calculator"]=this["webpackJsonpsimple-calculator"]||[]).push([[0],[,,function(e,t,n){e.exports={Button:"Button_Button__3cKeW",orange:"Button_orange__2gQLw",wide:"Button_wide__2FXAg"}},,,,,function(e,t,n){e.exports={ButtonPanel:"ButtonPanel_ButtonPanel__3rLZa"}},function(e,t,n){e.exports={Input:"Input_Input__36z3h"}},function(e,t,n){e.exports={dis:"Layout_dis__1aIFe"}},,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(4),r=n.n(l),i=(n(17),n(5)),o=n(6),u=n(11),m=n(10),s=n(2),d=n.n(s),k=function(e){var t=d.a.Button+" "+(e.orange?d.a.orange:"")+(e.wide?d.a.wide:"");return c.a.createElement("div",{className:t},c.a.createElement("button",{onClick:function(){return e.clicked(e.name)}},e.name))},p=n(7),E=n.n(p),x=function(e){return c.a.createElement("div",{className:E.a.ButtonPanel},c.a.createElement("div",null,c.a.createElement(k,{name:"AC",clicked:e.click}),c.a.createElement(k,{name:"+/-",clicked:e.click}),c.a.createElement(k,{name:"%",clicked:e.click}),c.a.createElement(k,{name:"/",clicked:e.click,orange:!0})),c.a.createElement("div",null,c.a.createElement(k,{name:"7",clicked:e.click}),c.a.createElement(k,{name:"8",clicked:e.click}),c.a.createElement(k,{name:"9",clicked:e.click}),c.a.createElement(k,{name:"X",clicked:e.click,orange:!0})),c.a.createElement("div",null,c.a.createElement(k,{name:"4",clicked:e.click}),c.a.createElement(k,{name:"5",clicked:e.click}),c.a.createElement(k,{name:"6",clicked:e.click}),c.a.createElement(k,{name:"-",clicked:e.click,orange:!0})),c.a.createElement("div",null,c.a.createElement(k,{name:"1",clicked:e.click}),c.a.createElement(k,{name:"2",clicked:e.click}),c.a.createElement(k,{name:"3",clicked:e.click}),c.a.createElement(k,{name:"+",clicked:e.click,orange:!0})),c.a.createElement("div",null,c.a.createElement(k,{name:"0",clicked:e.click,wide:!0}),c.a.createElement(k,{name:".",clicked:e.click}),c.a.createElement(k,{name:"=",clicked:e.click,orange:!0})))},N=n(8),v=n.n(N),f=function(e){return c.a.createElement("input",{className:v.a.Input,type:"text",readOnly:!0,value:e.value})},g=function(e){return c.a.createElement("div",null,e.children)},h=n(1),_=n.n(h),w=function(e,t,n){var a=_()(e),c=_()(t);return"+"===n?a.plus(c).toString():"-"===n?a.minus(c).toString():"X"===n?a.times(c).toString():"/"===n?0===c?(alert("Dividing by 0."),"0"):a.div(c).toString():void 0},B=function(e,t){var n=e.nextNum;if("AC"===t)return{nextNum:null,operation:null,total:null};if(/[0-9]+/.test(t))return e.nextNum?{nextNum:n+t}:{nextNum:t};if("="===t)return e.operation&&e.nextNum?{total:w(e.total,e.nextNum,e.operation),nextNum:null}:{};if("%"===t){if(e.nextNum&&e.operation){var a=w(e.total,e.nextNum,e.operation);return{total:_()(a).div(_()(100)).toString(),nextNum:null,operation:null}}return e.nextNum?{nextNum:_()(e.nextNum).div(_()(100)).toString()}:{}}return"."===t?e.nextNum?e.nextNum.includes(".")?{}:{nextNum:e.nextNum+"."}:{nextNum:"0."}:"+/-"===t?e.nextNum?{nextNum:(-1*parseFloat(e.nextNum)).toString()}:e.total?{total:-1*parseFloat(e.total).toString()}:{}:e.operation&&e.nextNum?{total:w(e.total,e.nextNum,t),nextNum:null,operation:t}:!e.nextNum&&e.operation?{operation:t}:{total:n,operation:t,nextNum:null}},S=n(9),b=n.n(S),y=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={total:null,nextNum:null,operation:null},e.isNumber=function(e){return/[0-9]+/.test(e)},e.clickHandler=function(t){e.setState(B(e.state,t))},e}return Object(o.a)(n,[{key:"render",value:function(){return c.a.createElement(g,null,c.a.createElement("div",{className:b.a.dis},this.state.operation),c.a.createElement(f,{value:this.state.nextNum||this.state.total||"0"}),c.a.createElement(x,{click:this.clickHandler}))}}]),n}(a.Component);n(18);var I=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.de8f75b1.chunk.js.map