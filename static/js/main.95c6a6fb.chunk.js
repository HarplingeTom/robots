(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(32)},28:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(13),i=n.n(a),c=n(2),s=n(6),l=n(17),u=(n(26),n(3)),h=n(4),d=n(7),f=n(5),b=n(8),g=function(){return function(e){var t;e({type:"REQUEST_ROBOTS_PENDING"}),(t="https://jsonplaceholder.typicode.com/users",fetch(t).then(function(e){return e.json()})).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})}},E=function(e){var t=e.name,n=e.email,o=e.id;return r.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},p=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(E,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},m=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{"aria-label":"filter robots",className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},v=function(e){return r.a.createElement("div",{style:{overflow:"scroll",height:"800px"}},e.children)},w=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(f.a)(t).call(this,e))).state={hasError:!1},n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}]),t}(o.Component),O=(n(28),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.robots,n=e.searchField,o=e.onSearchChange,a=e.isPending,i=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(m,{searchChange:o}),r.a.createElement(v,null,a?r.a.createElement("h1",null,"Loading"):r.a.createElement(w,null,r.a.createElement(p,{robots:i}))))}}]),t}(o.Component)),R=Object(s.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCHFIELD",payload:t.target.value})},onRequestRobots:function(){return e(g())}}})(O),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var j={searchField:""},C={robots:[],isPending:!0},_=(n(30),Object(c.c)({requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload});default:return e}},searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCHFIELD":return Object.assign({},e,{searchField:t.payload});default:return e}}})),k=Object(c.d)(_,Object(c.a)(l.a));i.a.render(r.a.createElement(s.a,{store:k},r.a.createElement(R,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robots",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/robots","/service-worker.js");y?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):S(e)})}}()}},[[18,2,1]]]);
//# sourceMappingURL=main.95c6a6fb.chunk.js.map