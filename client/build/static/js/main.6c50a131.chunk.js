(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),u=n(4),s=n.n(u),i=n(17),l=n(11),m=n(15),d=n(5);var p=function(e){var t=e.children;return r.a.createElement("div",{className:"wrapper"},t)},f=n(66),b=n(23),h=Object(b.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated,loading:e.auth.loading}})(function(e){var t=e.component,n=e.isAuthenticated,a=e.loading,c=Object(f.a)(e,["component","isAuthenticated","loading"]);return r.a.createElement(d.b,Object.assign({},c,{render:function(e){return n||a?a?r.a.createElement(d.a,{to:"/"}):r.a.createElement(t,e):r.a.createElement(d.a,{to:"/login"})}}))}),v=n(14),E=n.n(v),O=n(28),g=n(105),j=n(106);n(99);j.a.propTypes={logoutUser:E.a.func,auth:E.a.object};var y=Object(b.b)(function(e){return{auth:e.auth}},{logoutUser:O.c})(function(e){var t=e.auth,n=t.isAuthenticated,a=t.loading,c=e.logoutUser,o=r.a.createElement(g.a,{className:"ml-auto"},r.a.createElement(g.a.Item,null,r.a.createElement(g.a.Link,{as:m.b,eventKey:2,onClick:c,to:"/",className:"btn ml-auto action-button border-0"},r.a.createElement("i",{className:"fas fa-sign-out-alt"})," Logout")),r.a.createElement(g.a.Item,null,r.a.createElement(g.a.Link,{as:m.b,eventKey:3,to:"/dashboard",className:"btn action-button my-1 my-md-0 mr-md-2 ml-auto"},"Dashboard")),r.a.createElement(g.a.Item,null,r.a.createElement(g.a.Link,{as:m.b,eventKey:4,to:"/profile",className:"btn action-button ml-auto"},"Profile"))),u=r.a.createElement(g.a,{className:"ml-auto"},r.a.createElement(g.a.Item,null,r.a.createElement(g.a.Link,{as:m.b,eventKey:2,to:"/login",className:"btn ml-auto action-button border-0"},r.a.createElement("i",{className:"fas fa-sign-in-alt"})," \xa0 Login")),r.a.createElement(g.a.Item,null,r.a.createElement(g.a.Link,{as:m.b,eventKey:3,to:"/signup",className:"btn action-button ml-auto"},"Sign Up")));return r.a.createElement(j.a,{collapseOnSelect:!0,expand:"lg"},r.a.createElement(g.a.Link,{as:m.b,eventKey:1,to:"/",className:"navbar-brand"},"Enough"),r.a.createElement(j.a.Toggle,{"aria-controls":"nav"}),r.a.createElement(j.a.Collapse,{id:"nav"},!a&&r.a.createElement(r.a.Fragment,null,n?o:u)))}),w=n(64),k=n(19),S=n(62),x=n(63),T=n(65),N=n(3),A=[],I=n(8),P={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null},_={token:localStorage.getItem("token"),data:null,success:!1},L={token:localStorage.getItem("token"),data:null,success:!1},C=Object(k.combineReducers)({notice:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case N.n:return[].concat(Object(T.a)(e),[a]);case N.m:return e.filter(function(e){return e.id!==a});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case N.o:return Object(I.a)(Object(I.a)({},e),{},{isAuthenticated:!0,loading:!1,user:a});case N.l:case N.g:return localStorage.setItem("token",a.token),Object(I.a)(Object(I.a)(Object(I.a)({},e),a),{},{isAuthenticated:!0,loading:!1});case N.k:case N.f:case N.c:case N.h:return localStorage.removeItem("token"),Object(I.a)(Object(I.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1});default:return e}},aff:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case N.b:case N.e:return Object(I.a)(Object(I.a)({},e),{},{data:a,success:!0});case N.a:case N.d:return Object(I.a)(Object(I.a)({},e),{},{success:!1});default:return e}},mood:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case N.j:return Object(I.a)(Object(I.a)({},e),{},{data:a,success:!0});case N.i:return Object(I.a)(Object(I.a)({},e),{},{success:!1});default:return e}}}),F=[x.a],U=Object(k.createStore)(C,{},Object(S.composeWithDevTools)(k.applyMiddleware.apply(void 0,F))),D=n(29),R=(n(101),r.a.createElement("div",{className:"ipl-progress-indicator",id:"ipl-progress-indicator"},r.a.createElement("div",{className:"ipl-progress-indicator-head"},r.a.createElement("div",{className:"first-indicator"}),r.a.createElement("div",{className:"second-indicator"})),r.a.createElement("div",{className:"insp-logo-frame"}))),z=Object(a.lazy)(Object(l.a)(s.a.mark(function e(){var t,a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(7).then(n.bind(null,118)),new Promise(function(e){return setTimeout(e,750)})]);case 2:return t=e.sent,a=Object(i.a)(t,1),r=a[0],e.abrupt("return",r);case 6:case"end":return e.stop()}},e)}))),K=Object(a.lazy)(Object(l.a)(s.a.mark(function e(){var t,a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Promise.all([n.e(0),n.e(9)]).then(n.bind(null,119)),new Promise(function(e){return setTimeout(e,500)})]);case 2:return t=e.sent,a=Object(i.a)(t,1),r=a[0],e.abrupt("return",r);case 6:case"end":return e.stop()}},e)}))),G=Object(a.lazy)(Object(l.a)(s.a.mark(function e(){var t,a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Promise.all([n.e(0),n.e(10)]).then(n.bind(null,120)),new Promise(function(e){return setTimeout(e,500)})]);case 2:return t=e.sent,a=Object(i.a)(t,1),r=a[0],e.abrupt("return",r);case 6:case"end":return e.stop()}},e)}))),J=Object(a.lazy)(Object(l.a)(s.a.mark(function e(){var t,a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(5).then(n.bind(null,125)),new Promise(function(e){return setTimeout(e,1e3)})]);case 2:return t=e.sent,a=Object(i.a)(t,1),r=a[0],e.abrupt("return",r);case 6:case"end":return e.stop()}},e)}))),M=Object(a.lazy)(Object(l.a)(s.a.mark(function e(){var t,a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Promise.all([n.e(1),n.e(11)]).then(n.bind(null,121)),new Promise(function(e){return setTimeout(e,500)})]);case 2:return t=e.sent,a=Object(i.a)(t,1),r=a[0],e.abrupt("return",r);case 6:case"end":return e.stop()}},e)}))),B=Object(a.lazy)(Object(l.a)(s.a.mark(function e(){var t,a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Promise.all([n.e(0),n.e(8)]).then(n.bind(null,124)),new Promise(function(e){return setTimeout(e,500)})]);case 2:return t=e.sent,a=Object(i.a)(t,1),r=a[0],e.abrupt("return",r);case 6:case"end":return e.stop()}},e)}))),H=Object(a.lazy)(Object(l.a)(s.a.mark(function e(){var t,a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Promise.all([n.e(1),n.e(6)]).then(n.bind(null,122)),new Promise(function(e){return setTimeout(e,500)})]);case 2:return t=e.sent,a=Object(i.a)(t,1),r=a[0],e.abrupt("return",r);case 6:case"end":return e.stop()}},e)})));localStorage.token&&Object(D.a)(localStorage.token);var V=function(){return Object(a.useEffect)(function(){U.dispatch(Object(O.a)())},[]),r.a.createElement(b.a,{store:U},r.a.createElement(m.a,null,r.a.createElement(a.Suspense,{fallback:R},r.a.createElement(p,null,r.a.createElement(y,null),r.a.createElement(w.a,{className:"d-flex flex-column align-content-center hero"},r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:z}),r.a.createElement(d.b,{path:"/login",component:K}),r.a.createElement(d.b,{path:"/signup",component:G}),r.a.createElement(h,{path:"/dashboard",component:J}),r.a.createElement(h,{path:"/affirm",component:B}),r.a.createElement(h,{path:"/affirmation",component:M}),r.a.createElement(h,{path:"/profile",component:H})))))))};o.a.render(r.a.createElement(V,null),document.getElementById("root"))},28:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n.d(t,"d",function(){return d}),n.d(t,"b",function(){return p}),n.d(t,"c",function(){return f});var a=n(4),r=n.n(a),c=n(11),o=n(22),u=n.n(o),s=n(34),i=n(3),l=n(29),m=function(){return function(){var e=Object(c.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.token&&Object(l.a)(localStorage.token),e.prev=1,e.next=4,u.a.get("/api/auth");case 4:n=e.sent,t({type:i.o,payload:n.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:i.c});case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()},d=function(e){var t=e.name,n=e.email,a=e.password,o=e.history;return function(){var e=Object(c.a)(r.a.mark(function e(c){var l,d,p,f;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l={headers:{"Content-Type":"application/json"}},d=JSON.stringify({name:t,email:n,password:a}),e.prev=2,e.next=5,u.a.post("/api/users",d,l);case 5:p=e.sent,c({type:i.l,payload:p.data}),c(m()),o.push("/dashboard"),e.next=17;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0),(f=e.t0.response.data.errors)&&f.forEach(function(e){return c(Object(s.a)(e.msg,"danger"))}),c({type:i.k});case 17:case"end":return e.stop()}},e,null,[[2,11]])}));return function(t){return e.apply(this,arguments)}}()},p=function(e,t,n){return function(){var a=Object(c.a)(r.a.mark(function a(c){var o,l,d,p;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return o={headers:{"Content-Type":"application/json"}},l=JSON.stringify({email:e,password:t}),a.prev=2,a.next=5,u.a.post("/api/auth",l,o);case 5:d=a.sent,c({type:i.g,payload:d.data}),c(m()),n.push("/dashboard"),a.next=16;break;case 11:a.prev=11,a.t0=a.catch(2),(p=a.t0.response.data.errors)&&p.forEach(function(e){return c(Object(s.a)(e.msg,"danger"))}),c({type:i.f});case 16:case"end":return a.stop()}},a,null,[[2,11]])}));return function(e){return a.apply(this,arguments)}}()},f=function(){return function(){var e=Object(c.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:i.h});case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}},29:function(e,t,n){"use strict";var a=n(22),r=n.n(a);t.a=function(e){e?r.a.defaults.headers.common["x-auth-token"]=e:delete r.a.defaults.headers.common["x-auth-token"]}},3:function(e,t,n){"use strict";n.d(t,"n",function(){return a}),n.d(t,"m",function(){return r}),n.d(t,"l",function(){return c}),n.d(t,"k",function(){return o}),n.d(t,"g",function(){return u}),n.d(t,"f",function(){return s}),n.d(t,"o",function(){return i}),n.d(t,"c",function(){return l}),n.d(t,"h",function(){return m}),n.d(t,"b",function(){return d}),n.d(t,"a",function(){return p}),n.d(t,"e",function(){return f}),n.d(t,"d",function(){return b}),n.d(t,"j",function(){return h}),n.d(t,"i",function(){return v});var a="SET_NOTICE",r="REMOVE_NOTICE",c="REGISTER_SUCCESS",o="REGISTER_FAIL",u="LOGIN_SUCCESS",s="LOGIN_FAIL",i="USER_LOADED",l="AUTH_ERROR",m="LOGOUT_SUCCESS",d="ADD_AFF_SUCCESS",p="ADD_AFF_FAIL",f="DELETE_AFF_SUCCESS",b="DELETE_AFF_FAIL",h="POST_MOOD_SUCCESS",v="POST_MOOD_FAIL"},34:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var a=n(59),r=n.n(a),c=n(3),o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3;return function(a){var o=r.a.v4();a({type:c.n,payload:{msg:e,noticeType:t,id:o}}),setTimeout(function(){return a({type:c.m,payload:o})},n)}}},69:function(e,t,n){e.exports=n(102)},99:function(e,t,n){}},[[69,3,4]]]);
//# sourceMappingURL=main.6c50a131.chunk.js.map