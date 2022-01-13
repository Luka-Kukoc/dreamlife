(this["webpackJsonpgoal-app"]=this["webpackJsonpgoal-app"]||[]).push([[0],{61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(44),i=a.n(r),l=(a(61),a(7)),s=a(21),o=a(4),j=a(98),d=a(95),b=a(49),u=a(97),O=(a(62),a(63),a(1));var h=function(){return Object(O.jsx)("div",{className:"header-content",children:Object(O.jsx)("h1",{children:"Dreamlife"})})};function x(){var e=Object(b.a)({palette:{neutral:{main:"#eb06ff",contrastText:"#eb06ff"}}});return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(h,{}),Object(O.jsxs)("div",{className:"goal-page-wrapper",style:{margin:30,borderradius:25},children:[Object(O.jsx)("h1",{className:"title",children:"Goals"}),Object(O.jsx)(j.a,{spacing:2,direction:"column",children:Object(O.jsxs)(u.a,{theme:e,children:[Object(O.jsx)(d.a,{variant:"outlined",color:"neutral",size:"large",href:"/addgoals",children:"Add Goals"}),Object(O.jsx)(d.a,{variant:"outlined",color:"neutral",size:"large",href:"/activegoals",children:"Active goals"}),Object(O.jsx)(d.a,{variant:"outlined",color:"neutral",size:"large",children:"2022"}),Object(O.jsx)(d.a,{variant:"outlined",color:"neutral",size:"large",children:"2020-2030"}),Object(O.jsx)(d.a,{variant:"outlined",color:"neutral",size:"large",children:"Decades"})]})})]})]})}a(69),a(70);function m(){var e=Object(b.a)({palette:{neutral:{main:"#eb06ff",contrastText:"#eb06ff"}}}),t=Object(o.f)();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(h,{}),Object(O.jsx)("div",{className:"button-wrapper",style:{margin:30,borderradius:25},children:Object(O.jsx)(j.a,{spacing:2,direction:"column",children:Object(O.jsxs)(u.a,{theme:e,children:[Object(O.jsx)(d.a,{variant:"outlined",color:"neutral",size:"large",onClick:function(){return t("/goals")},children:"Goals"}),Object(O.jsx)(d.a,{variant:"outlined",color:"neutral",size:"large",children:"Habits"}),Object(O.jsx)(d.a,{variant:"outlined",color:"neutral",size:"large",children:"Principles"}),Object(O.jsx)(d.a,{variant:"outlined",color:"neutral",size:"large",children:"Wall of inspiration"}),Object(O.jsx)(d.a,{variant:"outlined",color:"neutral",size:"large",children:"Wall of aspirations"}),Object(O.jsx)(d.a,{variant:"outlined",color:"neutral",size:"large",children:"Projects"}),Object(O.jsx)(d.a,{variant:"outlined",color:"neutral",size:"large",children:"Settings"})]})})})]})}var f=a(23),g=function(){var e=Object(f.b)().loginWithRedirect;return Object(O.jsx)(d.a,{variant:"contained",color:"success",size:"large",onClick:function(){return e()},children:"Log in"})};var v=function(){var e=Object(o.f)(),t=Object(f.b)(),a=t.isAuthenticated;return t.isLoading?Object(O.jsxs)("div",{className:"loading-container",children:[Object(O.jsx)(h,{}),Object(O.jsx)("h1",{children:"Loading content..."})]}):a?e("/dreamlife/home"):Object(O.jsxs)("div",{className:"login-wrapper",children:[Object(O.jsx)(h,{}),Object(O.jsx)("p",{children:"Please Login"}),Object(O.jsx)(g,{})]})},p=a(11),D=a(6),N=a(24),S=(a(78),function(e){var t=Object(n.useState)({name:e.goal?e.goal.name:"",desc:e.goal?e.goal.desc:"",startDate:e.goal?e.goal.startDate:"",endDate:e.goal?e.goal.endDate:""}),a=Object(l.a)(t,2),c=a[0],r=a[1],i=c.name,s=c.desc,o=c.startDate,j=c.endDate,d=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"desc":default:r((function(e){return Object(N.a)(Object(N.a)({},e),{},Object(D.a)({},a,n))}))}};return Object(O.jsx)("div",{className:"goal-form",children:Object(O.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),[i,s,o,j].every((function(e){var t="".concat(e).trim();return""!==t&&"0"!==t}))){var a={name:i,desc:s,startDate:o,endDate:j};e.handleOnSubmit(a)}else alert("Please fill out all fields.")},children:[Object(O.jsxs)("label",{children:["Goal name:",Object(O.jsx)("input",{name:"name",value:i,type:"text",onChange:d})]}),Object(O.jsxs)("label",{children:["Goal description:",Object(O.jsx)("input",{name:"desc",value:s,type:"text",onChange:d})]}),Object(O.jsxs)("label",{children:["Start date:",Object(O.jsx)("input",{name:"startDate",value:o,type:"date",onChange:d})]}),Object(O.jsxs)("label",{children:["End date:",Object(O.jsx)("input",{name:"endDate",value:j,type:"date",onChange:d})]}),Object(O.jsx)("input",{type:"submit",value:"Submit"})]})})}),y=function(e){e.history;var t=e.goals,a=e.setGoals,n=Object(o.f)();return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(S,{handleOnSubmit:function(e){a([e].concat(Object(p.a)(t))),n("/")}})})},w=(a(79),function(e){var t=e.name,a=e.desc,n=e.startDate,c=e.endDate,r=e.handleRemoveGoal,i=Object(o.f)();return Object(O.jsx)("div",{className:"goal-container",children:Object(O.jsxs)("div",{className:"goal-card",children:[Object(O.jsx)("div",{className:"goal-title-container",children:Object(O.jsx)("h1",{className:"goal-title",children:t})}),Object(O.jsxs)("div",{className:"details",children:[Object(O.jsxs)("div",{children:["Desctiption: ",a]}),Object(O.jsxs)("div",{children:["Start date: ",n]}),Object(O.jsxs)("div",{children:["End date: ",c]})]}),Object(O.jsx)("button",{onClick:function(){return i("/edit/".concat(t))},children:"Edit"}),Object(O.jsx)("button",{onClick:function(){return r(t)},children:"Delete"})]})})}),z=a(48),G=a.n(z),C=(a(81),function(e){var t=e.goals,a=e.setGoals,n=function(e){a(t.filter((function(t){return t.name!==e})))};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(h,{}),Object(O.jsx)("div",{className:"goal-list",children:G.a.isEmpty(t)?Object(O.jsx)("p",{className:"message",children:"No goals available. Please add some..."}):t.map((function(e){return Object(O.jsx)(w,Object(N.a)(Object(N.a)({},e),{},{handleRemoveGoal:n}),e.name)}))})]})}),k=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return t}})),c=Object(l.a)(a,2),r=c[0],i=c[1];return Object(n.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,i]},E=function(e){var t=e.goals,a=e.setGoals,n=Object(o.f)(),c=Object(o.g)().name,r=t.find((function(e){return e.name===c}));return Object(O.jsx)("div",{children:Object(O.jsx)(S,{goal:r,handleOnSubmit:function(e){var r=t.filter((function(e){return e.name!==c}));a([e].concat(Object(p.a)(r))),n("/goals")}})})},F=function(){var e=k("goals",[]),t=Object(l.a)(e,2),a=t[0],n=t[1];return Object(O.jsx)(s.a,{children:Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{path:"/dreamlife",element:Object(O.jsx)(v,{})}),Object(O.jsx)(o.a,{path:"/dreamlife/home",element:Object(O.jsx)(m,{})}),Object(O.jsx)(o.a,{path:"/dreamlife/goals",element:Object(O.jsx)(x,{})}),Object(O.jsx)(o.a,{path:"/dreamlife/addgoals",element:Object(O.jsx)(y,{goals:a,setGoals:n})}),Object(O.jsx)(o.a,{path:"/dreamlife/activegoals",element:Object(O.jsx)(C,{goals:a,setGoals:n})}),Object(O.jsx)(o.a,{path:"/dreamlife/edit/:name",element:Object(O.jsx)(E,{goals:a,setGoals:n})})]})})};i.a.render(Object(O.jsx)(f.a,{domain:"dev-17p7fm7b.eu.auth0.com",clientId:"57rUMZMY9wdKH1xXofAb1mSbHy7pZiF0",redirectUri:window.location.origin,children:Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(F,{})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.6731efa6.chunk.js.map