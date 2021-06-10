(this["webpackJsonpmodal-forms"]=this["webpackJsonpmodal-forms"]||[]).push([[0],{26:function(e,n,t){},27:function(e,n,t){},33:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),l=t(11),s=t.n(l),r=(t(26),t(27),t(10)),i=(t(28),t(14)),o=t(7),d=t(8),j=t(18),u=t(1);var b=function(e){var n=e.id,t=e.onAddField,a=e.onRemoveField,c=e.onAddRule,l=e.onRemoveRule,s=e.rules,i=e.len;return Object(u.jsxs)(o.a.Group,{children:[Object(u.jsx)(o.a.Label,{children:"Rule ".concat(n+1)}),Object(u.jsxs)(o.a.Row,{className:"align-items-center",children:[Object(u.jsxs)(d.a,{xs:"3",className:"my-2",children:[Object(u.jsx)(o.a.Label,{className:"mr-xs-2",htmlFor:"inlineFieldSelect1-".concat(n),srOnly:!0}),Object(u.jsx)(o.a.Control,{as:"select",className:"mr-xs-2",id:"inlineFieldSelect1-".concat(n),custom:!0,children:Object(u.jsx)("option",{value:"1",children:"aff_sub"})})]}),Object(u.jsxs)(d.a,{xs:"3",className:"my-2",children:[Object(u.jsx)(o.a.Label,{className:"mr-xs-2",htmlFor:"inlineFieldSelect2-".concat(n),srOnly:!0}),Object(u.jsx)(o.a.Control,{as:"select",className:"mr-xs-2",id:"inlineFieldSelect2-".concat(n),custom:!0,children:Object(u.jsx)("option",{value:"1",children:"is"})})]}),Object(u.jsx)(d.a,{xs:5,children:s.field3.map((function(e,t){return Object(u.jsxs)(o.a.Row,{children:[Object(u.jsx)(d.a,{children:Object(u.jsx)(o.a.Control,{type:"input",placeholder:"insert parameter"})}),s.field3.length-1===t&&Object(u.jsx)(d.a,{xs:"auto",children:Object(u.jsx)(r.a,{size:"sm",variant:"link",id:"rule-".concat(n+1,"-add_btn-").concat(t+1),onClick:function(){return c(n)},children:"Add rule"})}),1!==s.field3.length&&Object(u.jsx)(d.a,{xs:"auto",children:Object(u.jsx)(r.a,{size:"sm",variant:"link",id:"rule-".concat(n+1,"-remove_btn-").concat(t+1),className:"remove-rule",onClick:function(){return l(n,t)},children:"Remove rule"})})]},"input-".concat(t+1))}))})]}),Object(u.jsxs)(o.a.Row,{className:"align-items-center",children:[i-1===n&&Object(u.jsx)(d.a,{xs:"auto",className:"my-2",children:Object(u.jsx)(r.a,{id:"add-btn-".concat(n),variant:"primary",type:"button",onClick:function(){return t()},children:"+"})}),1!==i&&Object(u.jsx)(d.a,{xs:"auto",className:"my-2",children:Object(u.jsx)(r.a,{id:"remove-btn-".concat(n),variant:"secondary",type:"button",onClick:function(){return a(n)},children:"-"})})]})]})},h=t(15),m=t(12),O=t(17),x=function(){var e=Object(a.useState)({title:"",condition:"",rules:[{field1:"",field2:"",field3:[{input:""}]}],revenuePercentage:""}),n=Object(O.a)(e,2),t=n[0],c=n[1];return{form:t,handleAddFields:function(){var e=Object(h.a)(t.rules);e.push({field1:"",field2:"",field3:[{input1:""}]});var n=Object(m.a)({},t);n.rules=e,c(n)},handleRemoveFields:function(e){var n=Object(h.a)(t.rules);n.splice(e,1);var a=Object(m.a)({},t);a.rules=n,c(a)},handlePercentageChange:function(e){var n=Object(m.a)({},t);n.revenuePercentage=e.target.value,c(n)},handleAddRule:function(e){var n=Object(h.a)(t.rules[e].field3);if(n){n.push({input:""});var a=Object(m.a)({},t);a.rules[e].field3=n,c(a)}},handleRemoveRule:function(e,n){var a=Object(h.a)(t.rules[e].field3);a.splice(n,1);var l=Object(m.a)({},t);l.rules[e].field3=a,c(l)}}};var v=function(){var e=x(),n=e.form,t=e.handleAddFields,a=e.handleRemoveFields,c=e.handlePercentageChange,l=e.handleAddRule,s=e.handleRemoveRule;return Object(u.jsxs)(o.a,{children:[Object(u.jsx)(o.a.Row,{children:Object(u.jsxs)(o.a.Group,{as:d.a,controlId:"revenueGroupTitle",children:[Object(u.jsx)(o.a.Label,{children:"Revenue Group Title"}),Object(u.jsx)(o.a.Control,{type:"input",placeholder:""})]})}),Object(u.jsxs)(o.a.Row,{className:"align-items-center",children:["If",Object(u.jsxs)(d.a,{xs:"auto",className:"my-2",children:[Object(u.jsx)(o.a.Label,{className:"mr-sm-2",htmlFor:"inlineConditionSelect",srOnly:!0,children:"Preference"}),Object(u.jsxs)(o.a.Control,{as:"select",className:"mr-sm-2",id:"inlineConditionSelect",custom:!0,children:[Object(u.jsx)("option",{value:"1",children:"ALL"}),Object(u.jsx)("option",{value:"2",children:"ANY"}),Object(u.jsx)("option",{value:"3",children:"NONE"})]})]}),"of the below conditions are met"]}),n.rules.map((function(e,c){return Object(u.jsx)(b,{id:c,onAddField:t,onRemoveField:a,len:n.rules.length,rules:e,onAddRule:l,onRemoveRule:s},"rule-".concat(c+1))})),Object(u.jsxs)(o.a.Row,{className:"align-items-center",children:["then revenue is",Object(u.jsx)(d.a,{xs:3,className:"my-2",children:Object(u.jsxs)(j.a,{hasValidation:!0,children:[Object(u.jsx)(o.a.Control,{placeholder:"15","aria-label":"Revenue percentage","aria-describedby":"percentage",type:"text",value:n.revenuePercentage,onChange:c,isInvalid:""!==n.revenuePercentage&&!/^[0-9\b]+$/.test(n.revenuePercentage)}),Object(u.jsx)(j.a.Append,{children:Object(u.jsx)(j.a.Text,{id:"percentage",children:"%"})}),Object(u.jsx)(o.a.Control.Feedback,{type:"invalid",children:"Please insert a number."})]})})]}),Object(u.jsxs)(o.a.Row,{className:"align-items-center",children:[Object(u.jsx)(d.a,{xs:"auto",className:"my-2",children:Object(u.jsx)(r.a,{variant:"primary",type:"submit",children:"Submit"})}),Object(u.jsx)(d.a,{xs:"auto",className:"my-2",children:Object(u.jsx)(r.a,{variant:"secondary",type:"reset",children:"Cancel"})})]})]})},p=function(e){var n=e.isShowing,t=e.handleClose;return Object(u.jsxs)(i.a,{show:n,onHide:t,"aria-labelledby":"modal-form",children:[Object(u.jsx)(i.a.Header,{closeButton:!0,children:Object(u.jsx)(i.a.Title,{id:"modal-form",children:"Add Revenue Group"})}),Object(u.jsx)(i.a.Body,{children:Object(u.jsx)(v,{})})]})},f=function(){var e=Object(a.useState)(!1),n=Object(O.a)(e,2),t=n[0],c=n[1];return{isShowing:t,toggle:function(){c(!t)}}};var g=function(){var e=f(),n=e.isShowing,t=e.toggle;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("header",{className:"App-header",children:[Object(u.jsx)("p",{children:"Involve Asia Coding Test"}),Object(u.jsx)(r.a,{variant:"primary",onClick:t,children:"Open Modal Form"})]})}),Object(u.jsx)(p,{isShowing:n,handleClose:t})]})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,l=n.getLCP,s=n.getTTFB;t(e),a(e),c(e),l(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),y()}},[[33,1,2]]]);
//# sourceMappingURL=main.3fbbad6d.chunk.js.map