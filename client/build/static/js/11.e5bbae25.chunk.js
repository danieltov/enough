(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{148:function(e,t,a){"use strict";a.r(t);var n=a(17),l=a(0),r=a.n(l),o=a(24),m=a(152),s=a(137),c=a(136),u=a(140),h=a.n(u);t.default=Object(o.b)(function(e){return{affirmations:e.auth.user.affirmations}})(function(e){var t=e.affirmations,a=t.achievements,o=t.quotes,u=t.strengths,i=t.gratitudes,p=[];a.length&&a.forEach(function(e){return p.push(e)}),o.length&&o.forEach(function(e){return p.push(e)}),u.length&&u.forEach(function(e){return p.push(e)}),i.length&&i.forEach(function(e){return p.push(e)});!function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t}(p);var E=p[0],g=E.text,d=E.affirmationType,f=E.author,v=E.title,x=E.dateAchieved,b=E.madeMeFeel,y=["https://images.pexels.com/photos/1012982/pexels-photo-1012982.jpeg","https://images.pexels.com/photos/430207/pexels-photo-430207.jpeg","https://images.pexels.com/photos/1089027/pexels-photo-1089027.jpeg","https://images.pexels.com/photos/935785/pexels-photo-935785.jpeg","https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg","https://images.pexels.com/photos/988874/pexels-photo-988874.jpeg","https://images.pexels.com/photos/997704/pexels-photo-997704.jpeg","https://images.pexels.com/photos/1137313/pexels-photo-1137313.jpeg"],N=y[[~~(Math.random()*y.length)]],j=Object(l.useState)(0),w=Object(n.a)(j,2),q=w[0],I=w[1];Object(l.useEffect)(function(){var e=new Image;e.src=N,e.onload=function(){return I(1)}},[]);return q?r.a.createElement(r.a.Fragment,null,"achievement"!==d&&"quote"!==d?function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:"strGratCard"},r.a.createElement(m.a.Body,null,r.a.createElement(m.a.Title,null,"strength"===e?r.a.createElement("h2",null,"You may not feel it now, but remember: you are"," ",r.a.createElement("strong",null,"strong enough"),"."):r.a.createElement("h2",null,"Try to remember what you're ",r.a.createElement("strong",null,"grateful")," for."),r.a.createElement("hr",{className:""})),r.a.createElement(m.a.Text,{as:"div"},r.a.createElement("em",null,"On a better day, you told us this:"),"strength"===e?r.a.createElement("div",{className:"quote"},"I am ",r.a.createElement("strong",null,"strong")," because: \u201c",t,"\u201d"):r.a.createElement("div",{className:"quote"},"I am ",r.a.createElement("strong",null,"grateful")," for: \u201c",t,"\u201d"))),r.a.createElement(m.a.Img,{variant:"bottom",src:N})))}(d,g):"achievement"!==d?function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:"quoteCard"},r.a.createElement(m.a.Body,null,r.a.createElement(m.a.Title,null,r.a.createElement("h2",null,"Here's one of your ",r.a.createElement("strong",null,"favorite quotes")," to brighten up your day."),r.a.createElement("hr",{className:""})),r.a.createElement(m.a.Text,{as:"div"},r.a.createElement("p",{className:"quote"},"\u201c",e,"\u201d"),r.a.createElement("p",{className:"quote text-right"},"\u2014",t))),r.a.createElement(m.a.Img,{variant:"bottom",src:N})))}(g,f):function(e,t,a,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{className:"achievementCard"},r.a.createElement(m.a.Body,null,r.a.createElement(m.a.Title,null,r.a.createElement("h2",null,"Look back at your ",r.a.createElement("strong",null,"accomplishments"),"."),r.a.createElement("hr",{className:""})),r.a.createElement(m.a.Text,{as:"div"},r.a.createElement("div",null,r.a.createElement("em",null,"Remember this one?")),r.a.createElement("div",{className:"achievement title"},"I am proud because: \u201c",e,"\u201d"),r.a.createElement("div",{className:"achievement date"},"on"," ",r.a.createElement(h.a,{format:"MMMM DD, YYYY",add:{days:1}},a)),r.a.createElement(s.a,null,r.a.createElement(c.a,{xs:12,md:6},r.a.createElement("div",{className:"achievement text"},"What you said about it: \u201c",t,"\u201d")),r.a.createElement(c.a,{xs:12,md:6},r.a.createElement("div",{className:"achievement text text-md-right"},"How It Felt: \u201c",n,"\u201d"))))),r.a.createElement(m.a.Img,{variant:"bottom",src:N})))}(v,g,x,b)):""})}}]);
//# sourceMappingURL=11.e5bbae25.chunk.js.map