(this["webpackJsonp04-gif-expert"]=this["webpackJsonp04-gif-expert"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),i=n.n(c),u=n(8),o=n(1),l=function(e){var t=e.onSubmision,n=Object(a.useState)("Add Category"),c=Object(o.a)(n,2),i=c[0],u=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==i&&t(i)}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){u(e.target.value)}}))},m=function(e){var t=e.id,n=e.title,a=e.url;return r.a.createElement("div",{className:"imageCard animate__animated animate__fadeIn",key:t},r.a.createElement("img",{src:a,alt:n}),r.a.createElement("p",null," ",n," "))},s=n(4),f=n.n(s),d=n(7),p=function(){var e=Object(d.a)(f.a.mark((function e(t){var n,a,r,c,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=qwBAwoFNicsvkSr7PqZK30to28LVRQwA"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,e.next=10,c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}}));case 10:return i=e.sent,e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.categoryName,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(o.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){p(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=n.data,i=n.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null," ",t," "),i?"Loading . . . ":r.a.createElement("div",{className:"gifGrid"},c.map((function(e){return r.a.createElement(m,Object.assign({key:e.id},e))}))))},v=function(){var e=Object(a.useState)(["One Punch"]),t=Object(o.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null," Gif Expert "),r.a.createElement(l,{onSubmision:function(e){c([e].concat(Object(u.a)(n)))}}),r.a.createElement("hr",null),n.map((function(e){return r.a.createElement(g,{categoryName:e,key:e})})))};n(15);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.30d39a1e.chunk.js.map