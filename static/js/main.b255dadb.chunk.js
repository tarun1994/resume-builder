(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),i=n(9),s=n.n(i),r=(n(15),n(16),n(4)),l=n(3),o=n(1),d=n(8),j=(n(17),n(0)),p=function(){return Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("h1",{children:" Resume Builder "})})},b=function(e){var t=e.personalInfo,n=e.onChange;return Object(j.jsxs)("div",{className:"w3-container margin",children:[Object(j.jsx)("h4",{className:"labels",children:"Personal Information"}),Object(j.jsxs)("div",{className:"w3-card w3-padding",children:[Object(j.jsxs)("div",{className:"w3-row-padding ",children:[Object(j.jsx)("div",{className:"w3-half",children:Object(j.jsx)("input",{className:"w3-input w3-border",name:"firstName",type:"text",placeholder:"First Name",value:t.firstName,onChange:function(e){return n(e)}})}),Object(j.jsx)("div",{className:"w3-half",children:Object(j.jsx)("input",{className:"w3-input w3-border",name:"lastName",type:"text",placeholder:"Last Name",onChange:function(e){return n(e)},value:t.lastName})})]}),Object(j.jsx)("div",{className:"w3-padding",children:Object(j.jsx)("input",{className:"w3-input w3-border",name:"title",type:"text",placeholder:"Title",onChange:function(e){return n(e)},value:t.title})}),Object(j.jsx)("div",{className:"w3-padding",children:Object(j.jsx)("input",{className:"w3-input w3-border",type:"text",placeholder:"Address",name:"address",onChange:function(e){return n(e)},value:t.address})}),Object(j.jsxs)("div",{className:"w3-row-padding ",children:[Object(j.jsx)("div",{className:"w3-half",children:Object(j.jsx)("input",{className:"w3-input w3-border",type:"text",placeholder:"Phone Number",name:"phone",onChange:function(e){return n(e)},value:t.phone})}),Object(j.jsx)("div",{className:"w3-half",children:Object(j.jsx)("input",{className:"w3-input w3-border",type:"text",placeholder:"Email",name:"email",onChange:function(e){return n(e)},value:t.email})})]}),Object(j.jsx)("div",{className:"w3-padding",children:Object(j.jsx)("textarea",{className:"w3-input w3-border",type:"text",placeholder:"Summary",name:"summary",onChange:function(e){return n(e)},value:t.summary})})]})]})},u=function(e){e.id;var t=e.educationItem,n=e.onChange,a=e.onDelete;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"w3-padding",children:Object(j.jsx)("input",{className:"w3-input w3-border",type:"text",placeholder:"University Name",name:"universityName",onChange:function(e){return n(e,t.id)},value:t.universityName})}),Object(j.jsx)("div",{className:"w3-padding",children:Object(j.jsx)("input",{className:"w3-input w3-border",type:"text",placeholder:"Degree",name:"degree",onChange:function(e){return n(e,t.id)},value:t.degree})}),Object(j.jsx)("div",{className:"w3-padding",children:Object(j.jsx)("input",{className:"w3-input w3-border",type:"text",placeholder:"Stream",name:"stream",onChange:function(e){return n(e,t.id)},value:t.stream})}),Object(j.jsxs)("div",{className:"w3-row-padding ",children:[Object(j.jsx)("div",{className:"w3-half",children:Object(j.jsx)("input",{className:"w3-input w3-border",type:"text",placeholder:"From YYYY",name:"fromDate",onChange:function(e){return n(e,t.id)},value:t.fromDate})}),Object(j.jsx)("div",{className:"w3-half",children:Object(j.jsx)("input",{className:"w3-input w3-border",type:"text",placeholder:"To YYYY",name:"toDate",onChange:function(e){return n(e,t.id)},value:t.toDate})})]}),Object(j.jsx)("div",{className:"w3-padding",children:Object(j.jsx)("button",{className:"w3-btn btn-color",onClick:function(){return a("education",t.id)},children:"Delete"})})]})},m=function(e){var t=e.education,n=e.onAdd,a=e.onChange,c=e.onDelete;console.log(t);var i=t.map((function(e){return Object(j.jsx)(u,{id:e.id,educationItem:e,onChange:a,onDelete:c},e.id)}));return Object(j.jsxs)("div",{className:"w3-container margin",children:[Object(j.jsx)("h4",{className:"labels",children:"Education"}),Object(j.jsxs)("div",{className:"w3-card w3-padding",children:[i,Object(j.jsx)("div",{className:"w3-padding",children:Object(j.jsx)("button",{className:"w3-btn btn-color",onClick:n,children:"Add"})})]})]})},x=n(20),h={personalInfo:{firstName:"",lastName:"",title:"",address:"",phone:"",email:"",summary:""},experience:[{id:Object(x.a)(),position:"",company:"",city:"",fromDate:"",toDate:"",roles:""}],education:[{id:Object(x.a)(),universityName:"",city:"",degree:"",stream:"",fromDate:"",toDate:""}]},O=function(e){e.id;var t=e.experienceItem,n=e.onChange,a=e.onDelete;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"w3-padding",children:Object(j.jsx)("input",{className:"w3-input w3-border",type:"text",placeholder:"Position",name:"position",onChange:function(e){return n(e,t.id)},value:t.position})}),Object(j.jsx)("div",{className:"w3-padding",children:Object(j.jsx)("input",{className:"w3-input w3-border",type:"text",placeholder:"Company",name:"company",onChange:function(e){return n(e,t.id)},value:t.company})}),Object(j.jsx)("div",{className:"w3-padding",children:Object(j.jsx)("input",{className:"w3-input w3-border",type:"text",placeholder:"City",name:"city",onChange:function(e){return n(e,t.id)},value:t.city})}),Object(j.jsxs)("div",{className:"w3-row-padding ",children:[Object(j.jsx)("div",{className:"w3-half",children:Object(j.jsx)("input",{className:"w3-input w3-border",type:"text",placeholder:"From",name:"fromDate",onChange:function(e){return n(e,t.id)},value:t.fromDate})}),Object(j.jsx)("div",{className:"w3-half",children:Object(j.jsx)("input",{className:"w3-input w3-border",type:"text",placeholder:"To",name:"toDate",onChange:function(e){return n(e,t.id)},value:t.toDate})})]}),Object(j.jsx)("div",{className:"w3-padding",children:Object(j.jsx)("textarea",{className:"w3-input w3-border",type:"text",placeholder:"Roles and Responsibility",name:"roles",onChange:function(e){return n(e,t.id)},value:t.roles})}),Object(j.jsx)("div",{className:"w3-padding",children:Object(j.jsx)("button",{className:"w3-btn btn-color",onClick:function(){return a("experience",t.id)},children:"Delete"})})]})},v=function(e){var t=e.experience,n=e.onAdd,a=e.onChange,c=e.onDelete,i=t.map((function(e){return Object(j.jsx)(O,{id:e.id,experienceItem:e,onChange:a,onDelete:c},e.id)}));return Object(j.jsxs)("div",{className:"w3-container margin",children:[Object(j.jsx)("h4",{className:"labels",children:"Experience"}),Object(j.jsxs)("div",{className:"w3-card w3-padding",children:[i,Object(j.jsx)("div",{className:"w3-padding",children:Object(j.jsx)("button",{className:"w3-btn btn-color",onClick:n,children:"Add"})})]})]})},f=function(e){var t=e.cv;return console.log("in preview",t),Object(j.jsx)("div",{className:"w3-container margin",style:{display:"flex",justifyContent:"center"},children:Object(j.jsx)("div",{className:"w3-card cv-container",children:Object(j.jsxs)("div",{className:"margin-preview",children:[Object(j.jsxs)("h2",{children:[t.personalInfo.firstName," ",t.personalInfo.lastName]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{children:[t.personalInfo.address," \xa0"]}),t.personalInfo.phone?Object(j.jsxs)("span",{children:["\u2022 ",t.personalInfo.phone]}):Object(j.jsx)("span",{})," \xa0",t.personalInfo.email?Object(j.jsxs)("span",{children:["\u2022 ",t.personalInfo.email]}):Object(j.jsx)("span",{})," \xa0",t.personalInfo.email?Object(j.jsxs)("div",{children:["\u2022 ",t.personalInfo.email]}):Object(j.jsx)("div",{})]}),Object(j.jsx)("hr",{className:"divider"}),Object(j.jsx)("p",{className:"m0 display bold",style:{top:"-32px",position:"relative"},children:t.personalInfo.title}),Object(j.jsx)("hr",{style:{position:"relative",top:"-3em"}}),Object(j.jsx)("div",{className:"display textAlign",style:{position:"relative",top:"-3em"},children:t.personalInfo.summary}),Object(j.jsx)("hr",{className:"divider",style:{position:"relative",top:"-3em"}}),Object(j.jsx)("p",{className:"m0 display bold",style:{top:"-5.4em",position:"relative"},children:"Professional Experience"}),Object(j.jsx)("hr",{style:{position:"relative",top:"-6em"}}),Object(j.jsx)("div",{className:"display textAlign",style:{position:"relative",top:"-5.4em"},children:t.experience.map((function(e,t){return Object(j.jsxs)("div",{style:{display:"grid",marginTop:t>0?"10px":""},children:[Object(j.jsxs)("div",{className:"bold",children:[Object(j.jsx)("span",{children:e.company})," -",Object(j.jsx)("span",{children:e.city})," |",Object(j.jsxs)("span",{children:[e.position," \xa0"]}),Object(j.jsx)("span",{children:e.fromDate})," -",Object(j.jsx)("span",{children:e.toDate})]}),Object(j.jsx)("div",{children:e.roles})]})}))}),Object(j.jsx)("hr",{className:"divider",style:{position:"relative",top:"-5em"}}),Object(j.jsx)("p",{className:"m0 display bold",style:{top:"-7.4em",position:"relative"},children:"Education"}),Object(j.jsx)("hr",{style:{position:"relative",top:"-8em"}}),Object(j.jsx)("div",{className:"display textAlign",style:{position:"relative",top:"-7.4em"},children:t.education.map((function(e,t){return Object(j.jsxs)("div",{style:{display:"flex",marginTop:t>0?"10px":""},children:[Object(j.jsxs)("div",{className:"bold flex",children:[Object(j.jsx)("span",{children:e.fromDate})," -",Object(j.jsx)("span",{children:e.toDate})]}),Object(j.jsxs)("div",{className:"flex-2",children:[Object(j.jsx)("span",{className:"bold",children:e.universityName}),Object(j.jsx)("p",{className:"m0",children:e.degree}),Object(j.jsx)("p",{className:"m0",children:e.stream})]})]})}))})]})})})},N=function(){var e=Object(a.useState)(h),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),s=Object(d.a)(i,2),u=s[0],O=s[1],N=function(e,t){c("education"===e?function(e){var n=e.education.filter((function(e){if(e.id!==t)return Object(o.a)({},e)}));return Object(o.a)(Object(o.a)({},e),{},{education:Object(l.a)(n)})}:function(e){var n=e.experience.filter((function(e){if(e.id!==t)return Object(o.a)({},e)}));return Object(o.a)(Object(o.a)({},e),{},{experience:Object(l.a)(n)})})};return Object(j.jsxs)("div",{children:[Object(j.jsx)(p,{}),Object(j.jsx)(b,{personalInfo:n.personalInfo,onChange:function(e){console.log(e.target);var t=e.target,n=t.name,a=t.value;c((function(e){return Object(o.a)(Object(o.a)({},e),{},{personalInfo:Object(o.a)(Object(o.a)({},e.personalInfo),{},Object(r.a)({},n,a))})}))}}),Object(j.jsx)(m,{education:n.education,onAdd:function(){c((function(e){return Object(o.a)(Object(o.a)({},e),{},{education:[].concat(Object(l.a)(e.education),[{id:Object(x.a)(),universityName:"",city:"",degree:"",stream:"",fromDate:"",toDate:""}])})}))},onChange:function(e,t){var n=e.target,a=n.name,i=n.value;c((function(e){var n=e.education.map((function(e){return e.id==t?Object(o.a)(Object(o.a)({},e),{},Object(r.a)({},a,i)):e}));return Object(o.a)(Object(o.a)({},e),{},{education:Object(l.a)(n)})}))},onDelete:N}),Object(j.jsx)(v,{experience:n.experience,onAdd:function(){c((function(e){return Object(o.a)(Object(o.a)({},e),{},{experience:[].concat(Object(l.a)(e.experience),[{id:Object(x.a)(),position:"",company:"",city:"",fromDate:"",toDate:""}])})}))},onChange:function(e,t){var n=e.target,a=n.name,i=n.value;c((function(e){var n=e.experience.map((function(e){return e.id==t?Object(o.a)(Object(o.a)({},e),{},Object(r.a)({},a,i)):e}));return Object(o.a)(Object(o.a)({},e),{},{experience:Object(l.a)(n)})}))},onDelete:N}),Object(j.jsx)("div",{className:"w3-padding",children:Object(j.jsx)("button",{className:"w3-btn btn-color",onClick:function(){O(!u)},children:"Preview"})}),u&&Object(j.jsx)(f,{cv:n})]})};var w=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(N,{})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),g()}},[[19,1,2]]]);
//# sourceMappingURL=main.b255dadb.chunk.js.map