(this["webpackJsonpspeed-typer"]=this["webpackJsonpspeed-typer"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(4),s=n.n(r),i=n(2),u=n(0);var a=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(15),a=Object(i.a)(s,2),j=a[0],b=a[1],o=Object(c.useState)(!1),O=Object(i.a)(o,2),d=O[0],l=O[1],p=Object(c.useState)(0),h=Object(i.a)(p,2),f=h[0],x=h[1],m=Object(c.useState)(0),S=Object(i.a)(m,2),g=S[0],v=S[1];function T(){l(!1),x(function(e){return e.trim().split(" ").filter((function(e){return""!==e})).length}(n)),v(4*f)}return Object(c.useEffect)((function(){d&&j>0?setTimeout((function(){b((function(e){return e-1}))}),1e3):0===j&&T()}),[j,d]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Speed Typer"}),Object(u.jsx)("textarea",{onChange:function(e){var t=e.target.value;r(t)},value:n,disabled:!d}),Object(u.jsxs)("h4",{children:["Time Remaining: ",j]}),Object(u.jsx)("button",{onClick:function(){l(!0),b(15),r(""),x(0),v(0)},disabled:d,children:"START"}),Object(u.jsxs)("h1",{children:["Speed: ",g," wpm"]}),Object(u.jsxs)("p5",{children:["Word count: ",f]})]})};s.a.render(Object(u.jsx)(a,{}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.e5e669c5.chunk.js.map