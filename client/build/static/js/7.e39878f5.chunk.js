(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{125:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(24),o=a(127),l=a.n(o);t.a=Object(c.b)(function(e){return{notices:e.notice}})(function(e){var t=e.notices;return null!==t&&t.length>0&&t.map(function(e){return r.a.createElement(l.a,{key:e.id,variant:e.noticeType},e.msg)})})},126:function(e,t,a){"use strict";a.d(t,"b",function(){return f}),a.d(t,"a",function(){return d});var n=a(4),r=a.n(n),c=a(11),o=a(23),l=a.n(o),u=a(35),i=a(3),m=a(30),s=a(29),f=function(e,t){return function(){var a=Object(c.a)(r.a.mark(function a(n){var c,o,f,d,h,p,E,b,y,v,g,x;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(localStorage.token&&Object(m.a)(localStorage.token),c=e.text,o=e.dateAdded,f=e.affirmationType,d=e.title,h=e.dateAchieved,p=e.madeMeFeel,E=e.author,b={headers:{"Content-Type":"application/json"}},y={},c&&(y.text=c),o&&(y.dateAdded=o),f&&(y.affirmationType=f),d&&(y.title=d),h&&(y.dateAchieved=h),p&&(y.madeMeFeel=p),E&&(y.author=E),v=JSON.stringify(y),a.prev=12,!y.madeMeFeel){a.next=19;break}return a.next=16,l.a.post("/api/aff/achievement",v,b);case 16:g=a.sent,a.next=22;break;case 19:return a.next=21,l.a.post("/api/aff",v,b);case 21:g=a.sent;case 22:n({type:i.b,payload:g.data}),n(Object(u.a)("You saved an affirmation! Add another?","success")),n(Object(s.a)()),t.push("/affirm"),a.next=33;break;case 28:a.prev=28,a.t0=a.catch(12),(x=a.t0.response.data.errors)&&x.forEach(function(e){return n(Object(u.a)(e.msg,"danger"))}),n({type:i.a});case 33:case"end":return a.stop()}},a,null,[[12,28]])}));return function(e){return a.apply(this,arguments)}}()},d=function(e,t){return function(){var a=Object(c.a)(r.a.mark(function a(n){var c,o,f;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return localStorage.token&&Object(m.a)(localStorage.token),c="/api/aff","strength"===e&&(c+="/strength/".concat(t)),"quote"===e&&(c+="/quote/".concat(t)),"gratitude"===e&&(c+="/gratitude/".concat(t)),"achievement"===e&&(c+="/achievement/".concat(t)),a.prev=6,a.next=9,l.a.delete(c);case 9:o=a.sent,n({type:i.e,payload:o.data}),n(Object(u.a)("You successfully deleted an affirmation","success")),n(Object(s.a)()),a.next=20;break;case 15:a.prev=15,a.t0=a.catch(6),(f=a.t0.response.data.errors)&&f.forEach(function(e){return n(Object(u.a)(e.msg,"danger"))}),n({type:i.d});case 20:case"end":return a.stop()}},a,null,[[6,15]])}));return function(e){return a.apply(this,arguments)}}()}},151:function(e,t,a){"use strict";a.r(t);var n=a(17),r=a(0),c=a.n(r),o=a(24),l=a(126),u=a(35),i=a(42),m=a(22),s=a(20),f=a(129),d=a(128),h=a(150),p=a(141),E=a(125),b=Object(o.b)(function(e){return{user:e.auth.user,count:e.auth.user.affirmations.count}},{newAffirmation:l.b,setNotice:u.a})(Object(s.g)(function(e){var t=e.newAffirmation,a=(e.setNotice,e.count),o=e.history,l=Object(r.useState)({text:"",affirmationType:"achievement",title:"",dateAchieved:"",madeMeFeel:""}),u=Object(n.a)(l,2),s=u[0],b=u[1],y=s.text,v=s.title,g=s.dateAchieved,x=s.madeMeFeel,j=function(e){return b(Object(m.a)({},s,Object(i.a)({},e.target.name,e.target.value)))};return c.a.createElement(f.a,{className:"d-flex justify-content-center align-items-center"},c.a.createElement(d.a,{xs:12,md:9,className:"d-flex justify-content-center align-items-center"},c.a.createElement("div",{className:"form-container"},c.a.createElement(h.a,{onSubmit:function(e){return function(e){e.preventDefault(),t(s,o),b({text:"",title:"",dateAchieved:"",madeMeFeel:""})}(e)}},c.a.createElement("h2",{className:"text-center"},a?"":"Enter your first affirmation! ","What is an"," ",c.a.createElement("strong",null,"achievement")," you are proud of?"),c.a.createElement(E.a,null),c.a.createElement(h.a.Group,null,c.a.createElement(h.a.Label,{htmlFor:"title"},"Enter an achievement from your life\u2014a moment you are particularly proud of:"),c.a.createElement(h.a.Control,{type:"text",name:"title",placeholder:"Example: I graduated from my coding bootcamp",onChange:function(e){return j(e)},value:v})),c.a.createElement(h.a.Group,null,c.a.createElement(h.a.Label,{htmlFor:"text"},"Why did this moment make you proud?"),c.a.createElement(h.a.Control,{as:"textarea",name:"text",placeholder:"Example: I challenged myself and accomplished my goals.",onChange:function(e){return j(e)},value:y})),c.a.createElement(h.a.Group,null,c.a.createElement(h.a.Label,{htmlFor:"madeMeFeel"},"With one or a few words, finish the sentence: This achievement made me feel..."),c.a.createElement(h.a.Control,{type:"text",name:"madeMeFeel",placeholder:"Example: Like I could do anything!",onChange:function(e){return j(e)},value:x})),c.a.createElement(h.a.Group,null,c.a.createElement(h.a.Label,{htmlFor:"dateAchieved"},"Date Achieved:"),c.a.createElement(h.a.Control,{type:"date",name:"dateAchieved",onChange:function(e){return j(e)},value:g})),c.a.createElement(h.a.Group,null,c.a.createElement(p.a,{variant:"primary",type:"submit",block:!0},"Save"))))))})),y=Object(o.b)(function(e){return{user:e.auth.user,count:e.auth.user.affirmations.count}},{newAffirmation:l.b,setNotice:u.a})(Object(s.g)(function(e){var t=e.newAffirmation,a=(e.setNotice,e.count),o=e.history,l=Object(r.useState)({text:"",affirmationType:"quote",author:""}),u=Object(n.a)(l,2),s=u[0],b=u[1],y=s.text,v=s.author,g=function(e){return b(Object(m.a)({},s,Object(i.a)({},e.target.name,e.target.value)))};return c.a.createElement(f.a,{className:"d-flex justify-content-center align-items-center"},c.a.createElement(d.a,{xs:12,md:10,className:"d-flex justify-content-center align-items-center"},c.a.createElement("div",{className:"form-container"},c.a.createElement(h.a,{onSubmit:function(e){return function(e){e.preventDefault(),t(s,o),b({text:"",author:""})}(e)}},c.a.createElement("h2",{className:"text-center"},a?"":"Enter your first affirmation! ","What is one of your ",c.a.createElement("strong",null,"favorite quotes"),"?"),c.a.createElement(E.a,null),c.a.createElement(h.a.Group,null,c.a.createElement(h.a.Label,{htmlFor:"text"},"Enter a quote below:"),c.a.createElement(h.a.Control,{as:"textarea",name:"text",placeholder:"Example: We may encounter many defeats but we must not be defeated.",onChange:function(e){return g(e)},value:y})),c.a.createElement(h.a.Group,null,c.a.createElement(h.a.Label,{htmlFor:"author"},"Enter the quote's author:"),c.a.createElement(h.a.Control,{type:"text",name:"author",placeholder:"Example: Maya Angelou",onChange:function(e){return g(e)},value:v})),c.a.createElement(h.a.Group,null,c.a.createElement(p.a,{variant:"primary",type:"submit",block:!0},"Save"))))))})),v=Object(o.b)(function(e){return{user:e.auth.user,count:e.auth.user.affirmations.count}},{newAffirmation:l.b,setNotice:u.a})(Object(s.g)(function(e){var t=e.newAffirmation,a=(e.setNotice,e.count),o=e.history,l=Object(r.useState)({text:"",affirmationType:"strength"}),u=Object(n.a)(l,2),s=u[0],b=u[1],y=s.text;return c.a.createElement(f.a,{className:"d-flex justify-content-center align-items-center"},c.a.createElement(d.a,{xs:12,md:8,className:"d-flex justify-content-center align-items-center"},c.a.createElement("div",{className:"form-container"},c.a.createElement(h.a,{onSubmit:function(e){return function(e){e.preventDefault(),t(s,o),b({text:""})}(e)}},c.a.createElement("h2",{className:"text-center"},a?"":"Enter your first affirmation! "," What is one of your ",c.a.createElement("strong",null,"strengths"),"?"),c.a.createElement(E.a,null),c.a.createElement(h.a.Group,null,c.a.createElement(h.a.Label,{htmlFor:"text"},"Enter one of your strengths\u2014a positive quality that you recognize in yourself:"),c.a.createElement(h.a.Control,{type:"text",name:"text",placeholder:"Example: I love to help others.",onChange:function(e){return function(e){return b(Object(m.a)({},s,Object(i.a)({},e.target.name,e.target.value)))}(e)},value:y})),c.a.createElement(h.a.Group,null,c.a.createElement(p.a,{variant:"primary",type:"submit",block:!0},"Save"))))))})),g=Object(o.b)(function(e){return{user:e.auth.user,count:e.auth.user.affirmations.count}},{newAffirmation:l.b,setNotice:u.a})(Object(s.g)(function(e){var t=e.newAffirmation,a=(e.setNotice,e.count),o=e.history,l=Object(r.useState)({text:"",affirmationType:"gratitude"}),u=Object(n.a)(l,2),s=u[0],b=u[1],y=s.text;return c.a.createElement(f.a,{className:"d-flex justify-content-center align-items-center"},c.a.createElement(d.a,{xs:12,md:8,className:"d-flex justify-content-center align-items-center"},c.a.createElement("div",{className:"form-container"},c.a.createElement(h.a,{id:"affForm",onSubmit:function(e){return function(e){e.preventDefault(),t(s,o),b({text:""})}(e)}},c.a.createElement("h2",{className:"text-center"},a?"":"Enter your first affirmation! ","What is one thing you're ",c.a.createElement("strong",null,"grateful")," for?"),c.a.createElement(E.a,null),c.a.createElement(h.a.Group,null,c.a.createElement(h.a.Label,{htmlFor:"text"},"Enter something you're grateful for:"),c.a.createElement(h.a.Control,{type:"text",name:"text",id:"gratitudeText",placeholder:"Example: My dog.",onChange:function(e){return function(e){return b(Object(m.a)({},s,Object(i.a)({},e.target.name,e.target.value)))}(e)},value:y})),c.a.createElement(h.a.Group,null,c.a.createElement(p.a,{variant:"primary",type:"submit",block:!0},"Save"))))))}));t.default=Object(o.b)(function(e){return{user:e.auth.user}},{newAffirmation:l.b,setNotice:u.a})(function(e){e.newAffirmation,e.setNotice;var t=Object(r.useState)(),a=Object(n.a)(t,2),o=a[0],l=a[1];return Object(r.useEffect)(function(){l([c.a.createElement(b,null),c.a.createElement(v,null),c.a.createElement(y,null),c.a.createElement(g,null)][~~(4*Math.random())])},[]),o||""})}}]);
//# sourceMappingURL=7.e39878f5.chunk.js.map