(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{125:function(e,a,t){"use strict";var n=t(0),r=t.n(n),o=t(24),l=t(126),c=t.n(l);a.a=Object(o.b)(function(e){return{notices:e.notice}})(function(e){var a=e.notices;return null!==a&&a.length>0&&a.map(function(e){return r.a.createElement(c.a,{key:e.id,variant:e.noticeType},e.msg)})})},138:function(e,a,t){"use strict";var n=t(1),r=t(2),o=t(5),l=t(6),c=t.n(l),s=t(0),u=t.n(s),i=t(7),m=function(e){function a(){return e.apply(this,arguments)||this}return Object(o.a)(a,e),a.prototype.render=function(){var e=this.props,a=e.bsPrefix,t=e.className,o=e.fluid,l=e.rounded,s=e.roundedCircle,i=e.thumbnail,m=Object(r.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]),d=c()(o&&a+"-fluid",l&&"rounded",s&&"rounded-circle",i&&a+"-thumbnail");return u.a.createElement("img",Object(n.a)({},m,{className:c()(t,d)}))},a}(u.a.Component);m.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},a.a=Object(i.a)(m,"img")},146:function(e,a,t){"use strict";t.r(a);var n=t(4),r=t.n(n),o=t(10),l=t(42),c=t(15),s=t(18),u=t(0),i=t.n(u),m=t(24),d=t(35),p=t(29),f=t(125),g=t(21),b=t(14),h=t(137),E=t(136),w=t(138),v=t(149),y=t(141);a.default=Object(m.b)(null,{setNotice:d.a,registerUser:p.d})(Object(g.g)(function(e){var a=e.setNotice,t=e.registerUser,n=e.history,m=Object(u.useState)({name:"",email:"",password:"",password2:""}),d=Object(s.a)(m,2),p=d[0],C=d[1],j=p.name,N=p.email,O=p.password,x=p.password2,k=function(e){return C(Object(c.a)({},p,Object(l.a)({},e.target.name,e.target.value)))},P=function(){var e=Object(o.a)(r.a.mark(function e(o){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o.preventDefault(),O!==x?a("Passwords do not match","danger"):t({name:j,email:N,password:O,history:n}),document.getElementById("password").value="",document.getElementById("password2").value="";case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}();return localStorage.token?i.a.createElement(g.a,{to:"/dashboard"}):i.a.createElement(h.a,null,i.a.createElement(E.a,{xs:12,md:6,className:"d-none d-md-flex justify-content-center align-items-start"},i.a.createElement(w.a,{src:"assets/img/enough_person2.png",className:"signup-img p-0",fluid:!0})),i.a.createElement(E.a,{xs:12,md:6,className:"d-flex justify-content-center align-items-start"},i.a.createElement("div",{className:"form-container"},i.a.createElement(v.a,{onSubmit:function(e){return P(e)},autoComplete:"off"},i.a.createElement("h2",{className:"text-center"},i.a.createElement("strong",null,"Create")," an account."),i.a.createElement(f.a,null),i.a.createElement(v.a.Group,null,i.a.createElement(v.a.Control,{type:"text",name:"name",placeholder:"Name",value:j,onChange:function(e){return k(e)},autoComplete:"off"})),i.a.createElement(v.a.Group,null,i.a.createElement(v.a.Control,{type:"email",name:"email",placeholder:"Email",value:N,onChange:function(e){return k(e)},autoComplete:"off"})),i.a.createElement(v.a.Group,null,i.a.createElement(v.a.Control,{type:"password",name:"password",placeholder:"Password",id:"password",value:O,onChange:function(e){return k(e)},autoComplete:"off"})),i.a.createElement(v.a.Group,null,i.a.createElement(v.a.Control,{type:"password",name:"password2",id:"password2",placeholder:"Password (repeat)",value:x,onChange:function(e){return k(e)},autoComplete:"off"})),i.a.createElement(v.a.Group,null,i.a.createElement(y.a,{variant:"primary",size:"lg",block:!0,type:"submit"},"Sign Up")),i.a.createElement(b.b,{to:"/login",className:"already"},"You already have an account? Login here.")))))}))}}]);
//# sourceMappingURL=10.9835df2b.chunk.js.map