(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{125:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(24),s=a(126),o=a.n(s);t.a=Object(l.b)(function(e){return{notices:e.notice}})(function(e){var t=e.notices;return null!==t&&t.length>0&&t.map(function(e){return r.a.createElement(o.a,{key:e.id,variant:e.noticeType},e.msg)})})},126:function(e,t,a){"use strict";var n=a(16);t.__esModule=!0,t.default=void 0;var r=n(a(41)),l=n(a(73)),s=n(a(6)),o=n(a(0)),u=n(a(43)),i=n(a(30)),f=n(a(128)),d=n(a(129)),c=a(74),m=n(a(130)),p=n(a(132)),h=n(a(133)),v={show:!0,transition:m.default,closeLabel:"Close alert"},b={show:"onClose"},E=o.default.forwardRef(function(e,t){var a=(0,u.default)(e,b),n=a.bsPrefix,f=a.show,d=a.closeLabel,m=a.className,h=a.children,v=a.variant,E=a.onClose,N=a.dismissible,y=a.transition,w=(0,l.default)(a,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),x=(0,c.useBootstrapPrefix)(n,"alert"),C=(0,i.default)(function(e){E(!1,e)}),k=o.default.createElement("div",(0,r.default)({role:"alert"},y?w:void 0,{className:(0,s.default)(m,x,v&&x+"-"+v,N&&x+"-dismissible")}),N&&o.default.createElement(p.default,{onClick:C,label:d}),h);return y?o.default.createElement(y,(0,r.default)({unmountOnExit:!0,ref:t},w,{in:f}),k):f?k:null}),N=(0,d.default)("h4");N.displayName="DivStyledAsH4",E.displayName="Alert",E.defaultProps=v,E.Link=(0,f.default)("alert-link",{Component:h.default}),E.Heading=(0,f.default)("alert-heading",{Component:N});var y=E;t.default=y,e.exports=t.default},128:function(e,t,a){"use strict";var n=a(16);t.__esModule=!0,t.default=function(e,t){var a=void 0===t?{}:t,n=a.displayName,u=void 0===n?f(e):n,d=a.Component,c=void 0===d?"div":d,m=a.defaultProps,p=o.default.forwardRef(function(t,a){var n=t.className,u=t.bsPrefix,f=t.as,d=void 0===f?c:f,m=(0,l.default)(t,["className","bsPrefix","as"]),p=(0,i.useBootstrapPrefix)(u,e);return o.default.createElement(d,(0,r.default)({ref:a,className:(0,s.default)(n,p)},m))});return p.defaultProps=m,p.displayName=u,p};var r=n(a(41)),l=n(a(73)),s=n(a(6)),o=n(a(0)),u=n(a(36)),i=a(74),f=function(e){return e[0].toUpperCase()+(0,u.default)(e).slice(1)};e.exports=t.default},129:function(e,t,a){"use strict";var n=a(16);t.__esModule=!0,t.default=void 0;var r=n(a(41)),l=n(a(0)),s=n(a(6));t.default=function(e){return l.default.forwardRef(function(t,a){return l.default.createElement("div",(0,r.default)({},t,{ref:a,className:(0,s.default)(t.className,e)}))})},e.exports=t.default},130:function(e,t,a){"use strict";var n=a(16),r=a(75);t.__esModule=!0,t.default=void 0;var l,s=n(a(41)),o=n(a(73)),u=n(a(28)),i=n(a(6)),f=n(a(0)),d=r(a(26)),c=n(a(44)),m=n(a(131)),p=((l={})[d.ENTERING]="show",l[d.ENTERED]="show",l),h=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).handleEnter=function(e){(0,m.default)(e),t.props.onEnter&&t.props.onEnter(e)},t}return(0,u.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.className,a=e.children,n=(0,o.default)(e,["className","children"]);return f.default.createElement(d.default,(0,s.default)({addEndListener:c.default},n,{onEnter:this.handleEnter}),function(e,n){return f.default.cloneElement(a,(0,s.default)({},n,{className:(0,i.default)("fade",t,a.props.className,p[e])}))})},t}(f.default.Component);h.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1};var v=h;t.default=v,e.exports=t.default},131:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e){e.offsetHeight},e.exports=t.default},132:function(e,t,a){"use strict";var n=a(16);t.__esModule=!0,t.default=void 0;var r=n(a(41)),l=n(a(73)),s=n(a(8)),o=n(a(0)),u=n(a(6)),i={label:s.default.string.isRequired,onClick:s.default.func},f=o.default.forwardRef(function(e,t){var a=e.label,n=e.onClick,s=e.className,i=(0,l.default)(e,["label","onClick","className"]);return o.default.createElement("button",(0,r.default)({ref:t,type:"button",className:(0,u.default)("close",s),onClick:n},i),o.default.createElement("span",{"aria-hidden":"true"},"\xd7"),o.default.createElement("span",{className:"sr-only"},a))});f.displayName="CloseButton",f.propTypes=i,f.defaultProps={label:"Close"};var d=f;t.default=d,e.exports=t.default},133:function(e,t,a){"use strict";var n=a(16);t.__esModule=!0,t.default=void 0;var r=n(a(41)),l=n(a(73)),s=n(a(134)),o=n(a(28)),u=n(a(0)),i=n(a(135));function f(e){return!e||"#"===e.trim()}var d=function(e){function t(t,a){var n;return(n=e.call(this,t,a)||this).handleClick=n.handleClick.bind((0,s.default)(n)),n.handleKeyDown=n.handleKeyDown.bind((0,s.default)(n)),n}(0,o.default)(t,e);var a=t.prototype;return a.handleClick=function(e){var t=this.props,a=t.disabled,n=t.href,r=t.onClick;(a||f(n))&&e.preventDefault(),a?e.stopPropagation():r&&r(e)},a.handleKeyDown=function(e){" "===e.key&&(e.preventDefault(),this.handleClick(e))},a.render=function(){var e=this.props,t=e.as,a=void 0===t?"a":t,n=e.disabled,s=e.onKeyDown,o=e.innerRef,d=(0,l.default)(e,["as","disabled","onKeyDown","innerRef"]);return f(d.href)&&(d.role=d.role||"button",d.href=d.href||"#"),n&&(d.tabIndex=-1,d["aria-disabled"]=!0),o&&(d.ref=o),u.default.createElement(a,(0,r.default)({},d,{onClick:this.handleClick,onKeyDown:(0,i.default)(this.handleKeyDown,s)}))},t}(u.default.Component);t.default=d,e.exports=t.default},134:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},135:function(e,t,a){"use strict";t.__esModule=!0,t.default=void 0;var n=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(function(e){return null!=e}).reduce(function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}},null)};t.default=n,e.exports=t.default},136:function(e,t,a){"use strict";var n=a(1),r=a(2),l=a(6),s=a.n(l),o=a(0),u=a.n(o),i=a(7),f=["xl","lg","md","sm","xs"],d=u.a.forwardRef(function(e,t){var a=e.bsPrefix,l=e.className,o=e.as,d=void 0===o?"div":o,c=Object(r.a)(e,["bsPrefix","className","as"]),m=Object(i.b)(a,"col"),p=[],h=[];return f.forEach(function(e){var t,a,n,r=c[e];if(delete c[e],null!=r&&"object"===typeof r){var l=r.span;t=void 0===l||l,a=r.offset,n=r.order}else t=r;var s="xs"!==e?"-"+e:"";null!=t&&p.push(!0===t?""+m+s:""+m+s+"-"+t),null!=n&&h.push("order"+s+"-"+n),null!=a&&h.push("offset"+s+"-"+a)}),p.length||p.push(m),u.a.createElement(d,Object(n.a)({},c,{ref:t,className:s.a.apply(void 0,[l].concat(p,h))}))});d.displayName="Col",t.a=d},137:function(e,t,a){"use strict";var n=a(1),r=a(2),l=a(5),s=a(6),o=a.n(s),u=a(0),i=a.n(u),f=a(7),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(l.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.noGutters,l=e.as,s=void 0===l?"div":l,u=e.className,f=Object(r.a)(e,["bsPrefix","noGutters","as","className"]);return i.a.createElement(s,Object(n.a)({},f,{className:o()(u,t,a&&"no-gutters")}))},t}(i.a.Component);d.defaultProps={noGutters:!1},t.a=Object(f.a)(d,"row")},147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),s=a(35),o=a(137),u=a(136),i=a(20),f=a(14),d=a(125);t.default=Object(l.b)(function(e){return{count:e.auth.user.affirmations.count}},{setNotice:s.a})(function(e){var t=e.count;e.setNotice;return t?r.a.createElement(o.a,null,r.a.createElement(u.a,{xs:12},r.a.createElement(d.a,null),r.a.createElement("h1",{className:"text-center mt-0"},"How are you feeling today?")),r.a.createElement(u.a,{xs:12},r.a.createElement(o.a,{className:"m-3 mt-5"},r.a.createElement(u.a,{xs:12,md:4},r.a.createElement(f.b,{to:"/affirm"},r.a.createElement("h1",{className:"text-center mt-0 "},r.a.createElement("i",{className:"fas fa-laugh-beam dash-icon"})))),r.a.createElement(u.a,{xs:12,md:4},r.a.createElement(f.b,{to:"/affirmation"},r.a.createElement("h1",{className:"text-center mt-0 "},r.a.createElement("i",{className:"fas fa-meh dash-icon"})))),r.a.createElement(u.a,{xs:12,md:4},r.a.createElement(f.b,{to:"/affirmation"},r.a.createElement("h1",{className:"text-center mt-0 "},r.a.createElement("i",{className:"fas fa-frown dash-icon"}))))))):r.a.createElement(i.a,{to:"/affirm"})})}}]);
//# sourceMappingURL=6.0bec7bf7.chunk.js.map