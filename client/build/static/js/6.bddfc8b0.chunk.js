(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{125:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(24),u=a(126),s=a.n(u);t.a=Object(l.b)(function(e){return{notices:e.notice}})(function(e){var t=e.notices;return null!==t&&t.length>0&&t.map(function(e){return r.a.createElement(s.a,{key:e.id,variant:e.noticeType},e.msg)})})},126:function(e,t,a){"use strict";var n=a(17);t.__esModule=!0,t.default=void 0;var r=n(a(41)),l=n(a(73)),u=n(a(6)),s=n(a(0)),c=n(a(43)),o=n(a(31)),i=n(a(128)),d=n(a(129)),f=a(74),m=n(a(130)),h=n(a(132)),p=n(a(133)),v={show:!0,transition:m.default,closeLabel:"Close alert"},E={show:"onClose"},y=s.default.forwardRef(function(e,t){var a=(0,c.default)(e,E),n=a.bsPrefix,i=a.show,d=a.closeLabel,m=a.className,p=a.children,v=a.variant,y=a.onClose,b=a.dismissible,g=a.transition,x=(0,l.default)(a,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),N=(0,f.useBootstrapPrefix)(n,"alert"),w=(0,o.default)(function(e){y(!1,e)}),k=s.default.createElement("div",(0,r.default)({role:"alert"},g?x:void 0,{className:(0,u.default)(m,N,v&&N+"-"+v,b&&N+"-dismissible")}),b&&s.default.createElement(h.default,{onClick:w,label:d}),p);return g?s.default.createElement(g,(0,r.default)({unmountOnExit:!0,ref:t},x,{in:i}),k):i?k:null}),b=(0,d.default)("h4");b.displayName="DivStyledAsH4",y.displayName="Alert",y.defaultProps=v,y.Link=(0,i.default)("alert-link",{Component:p.default}),y.Heading=(0,i.default)("alert-heading",{Component:b});var g=y;t.default=g,e.exports=t.default},127:function(e,t,a){"use strict";a.d(t,"b",function(){return f}),a.d(t,"a",function(){return m});var n=a(4),r=a.n(n),l=a(10),u=a(23),s=a.n(u),c=a(35),o=a(3),i=a(30),d=a(29),f=function(e,t){return function(){var a=Object(l.a)(r.a.mark(function a(n){var l,u,f,m,h,p,v,E,y,b,g,x;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(localStorage.token&&Object(i.a)(localStorage.token),l=e.text,u=e.dateAdded,f=e.affirmationType,m=e.title,h=e.dateAchieved,p=e.madeMeFeel,v=e.author,E={headers:{"Content-Type":"application/json"}},y={},l&&(y.text=l),u&&(y.dateAdded=u),f&&(y.affirmationType=f),m&&(y.title=m),h&&(y.dateAchieved=h),p&&(y.madeMeFeel=p),v&&(y.author=v),b=JSON.stringify(y),a.prev=12,!y.madeMeFeel){a.next=19;break}return a.next=16,s.a.post("/api/aff/achievement",b,E);case 16:g=a.sent,a.next=22;break;case 19:return a.next=21,s.a.post("/api/aff",b,E);case 21:g=a.sent;case 22:n({type:o.b,payload:g.data}),n(Object(c.a)("You saved an affirmation! Add another?","success")),n(Object(d.a)()),t.push("/dashboard"),a.next=33;break;case 28:a.prev=28,a.t0=a.catch(12),(x=a.t0.response.data.errors)&&x.forEach(function(e){return n(Object(c.a)(e.msg,"danger"))}),n({type:o.a});case 33:case"end":return a.stop()}},a,null,[[12,28]])}));return function(e){return a.apply(this,arguments)}}()},m=function(e,t){return function(){var a=Object(l.a)(r.a.mark(function a(n){var l,u,f;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return localStorage.token&&Object(i.a)(localStorage.token),l="/api/aff","strength"===e&&(l+="/strength/".concat(t)),"quote"===e&&(l+="/quote/".concat(t)),"gratitude"===e&&(l+="/gratitude/".concat(t)),"achievement"===e&&(l+="/achievement/".concat(t)),a.prev=6,a.next=9,s.a.delete(l);case 9:u=a.sent,n({type:o.e,payload:u.data}),n(Object(c.a)("You successfully deleted an affirmation","success")),n(Object(d.a)()),a.next=20;break;case 15:a.prev=15,a.t0=a.catch(6),(f=a.t0.response.data.errors)&&f.forEach(function(e){return n(Object(c.a)(e.msg,"danger"))}),n({type:o.d});case 20:case"end":return a.stop()}},a,null,[[6,15]])}));return function(e){return a.apply(this,arguments)}}()}},128:function(e,t,a){"use strict";var n=a(17);t.__esModule=!0,t.default=function(e,t){var a=void 0===t?{}:t,n=a.displayName,c=void 0===n?i(e):n,d=a.Component,f=void 0===d?"div":d,m=a.defaultProps,h=s.default.forwardRef(function(t,a){var n=t.className,c=t.bsPrefix,i=t.as,d=void 0===i?f:i,m=(0,l.default)(t,["className","bsPrefix","as"]),h=(0,o.useBootstrapPrefix)(c,e);return s.default.createElement(d,(0,r.default)({ref:a,className:(0,u.default)(n,h)},m))});return h.defaultProps=m,h.displayName=c,h};var r=n(a(41)),l=n(a(73)),u=n(a(6)),s=n(a(0)),c=n(a(36)),o=a(74),i=function(e){return e[0].toUpperCase()+(0,c.default)(e).slice(1)};e.exports=t.default},129:function(e,t,a){"use strict";var n=a(17);t.__esModule=!0,t.default=void 0;var r=n(a(41)),l=n(a(0)),u=n(a(6));t.default=function(e){return l.default.forwardRef(function(t,a){return l.default.createElement("div",(0,r.default)({},t,{ref:a,className:(0,u.default)(t.className,e)}))})},e.exports=t.default},130:function(e,t,a){"use strict";var n=a(17),r=a(75);t.__esModule=!0,t.default=void 0;var l,u=n(a(41)),s=n(a(73)),c=n(a(28)),o=n(a(6)),i=n(a(0)),d=r(a(26)),f=n(a(44)),m=n(a(131)),h=((l={})[d.ENTERING]="show",l[d.ENTERED]="show",l),p=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).handleEnter=function(e){(0,m.default)(e),t.props.onEnter&&t.props.onEnter(e)},t}return(0,c.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.className,a=e.children,n=(0,s.default)(e,["className","children"]);return i.default.createElement(d.default,(0,u.default)({addEndListener:f.default},n,{onEnter:this.handleEnter}),function(e,n){return i.default.cloneElement(a,(0,u.default)({},n,{className:(0,o.default)("fade",t,a.props.className,h[e])}))})},t}(i.default.Component);p.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1};var v=p;t.default=v,e.exports=t.default},131:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e){e.offsetHeight},e.exports=t.default},132:function(e,t,a){"use strict";var n=a(17);t.__esModule=!0,t.default=void 0;var r=n(a(41)),l=n(a(73)),u=n(a(8)),s=n(a(0)),c=n(a(6)),o={label:u.default.string.isRequired,onClick:u.default.func},i=s.default.forwardRef(function(e,t){var a=e.label,n=e.onClick,u=e.className,o=(0,l.default)(e,["label","onClick","className"]);return s.default.createElement("button",(0,r.default)({ref:t,type:"button",className:(0,c.default)("close",u),onClick:n},o),s.default.createElement("span",{"aria-hidden":"true"},"\xd7"),s.default.createElement("span",{className:"sr-only"},a))});i.displayName="CloseButton",i.propTypes=o,i.defaultProps={label:"Close"};var d=i;t.default=d,e.exports=t.default},133:function(e,t,a){"use strict";var n=a(17);t.__esModule=!0,t.default=void 0;var r=n(a(41)),l=n(a(73)),u=n(a(134)),s=n(a(28)),c=n(a(0)),o=n(a(135));function i(e){return!e||"#"===e.trim()}var d=function(e){function t(t,a){var n;return(n=e.call(this,t,a)||this).handleClick=n.handleClick.bind((0,u.default)(n)),n.handleKeyDown=n.handleKeyDown.bind((0,u.default)(n)),n}(0,s.default)(t,e);var a=t.prototype;return a.handleClick=function(e){var t=this.props,a=t.disabled,n=t.href,r=t.onClick;(a||i(n))&&e.preventDefault(),a?e.stopPropagation():r&&r(e)},a.handleKeyDown=function(e){" "===e.key&&(e.preventDefault(),this.handleClick(e))},a.render=function(){var e=this.props,t=e.as,a=void 0===t?"a":t,n=e.disabled,u=e.onKeyDown,s=e.innerRef,d=(0,l.default)(e,["as","disabled","onKeyDown","innerRef"]);return i(d.href)&&(d.role=d.role||"button",d.href=d.href||"#"),n&&(d.tabIndex=-1,d["aria-disabled"]=!0),s&&(d.ref=s),c.default.createElement(a,(0,r.default)({},d,{onClick:this.handleClick,onKeyDown:(0,o.default)(this.handleKeyDown,u)}))},t}(c.default.Component);t.default=d,e.exports=t.default},134:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},135:function(e,t,a){"use strict";t.__esModule=!0,t.default=void 0;var n=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(function(e){return null!=e}).reduce(function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}},null)};t.default=n,e.exports=t.default},148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(140),u=a.n(l),s=a(24),c=a(127),o=a(35),i=a(14),d=a(151),f=a(141),m=a(137),h=a(136),p=a(125);t.default=Object(s.b)(function(e){return{affirmations:e.auth.user.affirmations,count:e.auth.user.affirmations.count}},{deleteAffirmation:c.a,setNotice:o.a})(function(e){var t=e.affirmations,a=t.achievements,l=t.quotes,s=t.strengths,c=t.gratitudes,o=e.deleteAffirmation,v=(e.setNotice,e.count),E=[];a.length&&a.forEach(function(e){return E.push(e)}),l.length&&l.forEach(function(e){return E.push(e)}),s.length&&s.forEach(function(e){return E.push(e)}),c.length&&c.forEach(function(e){return E.push(e)});var y=E.map(function(e,t){var a=e.text,l=e.affirmationType,s=e.author,c=e.title,i=e.dateAchieved,p=e.madeMeFeel,v=e._id;return"strength"===l?r.a.createElement(n.Fragment,{key:t},function(e,t,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(d.a.Body,null,r.a.createElement(d.a.Title,null,r.a.createElement("div",{className:"d-flex justify-content-center align-items-start"},r.a.createElement("h2",{className:"text-center text-uppercase font-weight-bold mr-3"},"Strength"),r.a.createElement(f.a,{variant:"danger",type:"submit",onClick:function(){return o(t,e)}},r.a.createElement("i",{className:"fas fa-trash-alt"}))),r.a.createElement("hr",{className:""})),r.a.createElement(d.a.Text,{as:"div"},r.a.createElement("em",null,"On a better day, you told us this:"),r.a.createElement("div",{className:"quote"},"I am ",r.a.createElement("strong",null,"strong")," because: \u201c",a,"\u201d")))))}(v,l,a)):"gratitude"===l?r.a.createElement(n.Fragment,{key:t},function(e,t,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(d.a.Body,null,r.a.createElement(d.a.Title,null,r.a.createElement("div",{className:"d-flex justify-content-center align-items-start"},r.a.createElement("h2",{className:"text-center text-uppercase font-weight-bold mr-3"},"Gratitude"),r.a.createElement(f.a,{variant:"danger",type:"submit",onClick:function(){return o(t,e)}},r.a.createElement("i",{className:"fas fa-trash-alt"}))),r.a.createElement("hr",{className:""})),r.a.createElement(d.a.Text,{as:"div"},r.a.createElement("em",null,"On a better day, you told us this:"),r.a.createElement("div",{className:"quote"},"I am ",r.a.createElement("strong",null,"grateful")," for: \u201c",a,"\u201d")))))}(v,l,a)):"quote"===l?r.a.createElement(n.Fragment,{key:t},function(e,t,a,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(d.a.Body,null,r.a.createElement(d.a.Title,null,r.a.createElement("div",{className:"d-flex justify-content-center align-items-start"},r.a.createElement("h2",{className:"text-center text-uppercase font-weight-bold mr-3"},"Quote"),r.a.createElement(f.a,{variant:"danger",type:"submit",onClick:function(){return o(t,e)}},r.a.createElement("i",{className:"fas fa-trash-alt"}))),r.a.createElement("hr",{className:""})),r.a.createElement(d.a.Text,{as:"div"},r.a.createElement("div",{className:"quote"},"\u201c",a,"\u201d"),r.a.createElement("div",{className:"quote text-right"},"\u2014",n)))))}(v,l,a,s)):r.a.createElement(n.Fragment,{key:t},function(e,t,a,n,l,s){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement(d.a.Body,null,r.a.createElement(d.a.Title,null,r.a.createElement("div",{className:"d-flex justify-content-center align-items-start"},r.a.createElement("h2",{className:"text-center text-uppercase font-weight-bold mr-3"},"Achievement"),r.a.createElement(f.a,{variant:"danger",type:"submit",onClick:function(){return o(t,e)}},r.a.createElement("i",{className:"fas fa-trash-alt"}))),r.a.createElement("hr",{className:""})),r.a.createElement(d.a.Text,{as:"div"},r.a.createElement("div",{className:"achievement title"},"I am proud because: \u201c",a,"\u201d"),r.a.createElement("div",{className:"achievement date"},"on"," ",r.a.createElement(u.a,{format:"MMMM DD, YYYY",add:{days:1}},l)),r.a.createElement(m.a,null,r.a.createElement(h.a,{xs:12,md:6},r.a.createElement("div",{className:"achievement text"},"What you said about it: \u201c",n,"\u201d")),r.a.createElement(h.a,{xs:12,md:6},r.a.createElement("div",{className:"achievement text text-md-right"},"How It Felt: \u201c",s,"\u201d")))))))}(v,l,c,a,i,p))});return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null),v?r.a.createElement("h3",{className:"text-center text-white mt-0"},"Here are all of the affirmations you've entered. We hope you don't, but feel free to delete some:"):r.a.createElement("h3",{className:"text-center text-white mt-0"},"You haven't entered any affirmations yet."," ",r.a.createElement(i.b,{to:"/affirm"},"Add one now!")),r.a.createElement(r.a.Fragment,null,y)||"")})}}]);
//# sourceMappingURL=6.bddfc8b0.chunk.js.map