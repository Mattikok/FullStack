(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),o=t(14),l=t(2),i=function(e){var n=e.addPerson,t=e.newName,a=e.newNumber,u=e.handleNameChange,c=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name:",r.a.createElement("input",{value:t,onChange:u})),r.a.createElement("div",null,"number:",r.a.createElement("input",{value:a,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.person,t=e.delPerson;return r.a.createElement("p",null,n.name," ",n.number," ",r.a.createElement("button",{onClick:t},"delete")," ")},s=function(e){var n=e.persons,t=e.newFilter,a=e.delPerson;return r.a.createElement("div",null,n.filter((function(e){return e.name.toLowerCase().includes(t)})).map((function(e){return r.a.createElement(m,{key:e.name,person:e,delPerson:function(){return a(e.id)}})})))},f=function(e){var n=e.newFilter,t=e.handleFilterChange;return r.a.createElement("form",null,r.a.createElement("div",null,"filter shown with:",r.a.createElement("input",{value:n,onChange:t})))},d=t(3),h=t.n(d),b="/api/persons",v=function(){return h.a.get(b).then((function(e){return e.data}))},E=function(e,n){return(-1===n?h.a.post(b,e):h.a.put("".concat(b,"/").concat(n),e)).then((function(e){return e.data}))},p=function(e){return h.a.delete("".concat(b,"/").concat(e))},w=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"info"},n)},g=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"error"},n)},j=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),m=Object(l.a)(c,2),d=m[0],h=m[1],b=Object(a.useState)(""),j=Object(l.a)(b,2),C=j[0],O=j[1],N=Object(a.useState)(""),y=Object(l.a)(N,2),P=y[0],S=y[1],F=Object(a.useState)(null),k=Object(l.a)(F,2),T=k[0],x=k[1],A=Object(a.useState)(null),D=Object(l.a)(A,2),J=D[0],L=D[1];Object(a.useEffect)((function(){v().then((function(e){u(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(w,{message:J}),r.a.createElement(g,{message:T}),r.a.createElement(f,{handleFilterChange:function(e){S(e.target.value.toLowerCase())},newFilter:P}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(i,{addPerson:function(e){e.preventDefault();var n=-1;if(t.some((function(e){var n=e.name;return d===n}))){if(!window.confirm("Number for ".concat(d," already exists, do you want to replace it?")))return;n=t.find((function(e){var n=e.name;return d===n})).id;var a=t.find((function(e){return e.id===n})),r=Object(o.a)({},a,{number:C});E(r,n).then((function(e){u(t.filter((function(e){return e.id!==n})).concat(e)),L("Changed number for ".concat(e.name," to ").concat(e.number)),h(""),O(""),setTimeout((function(){L(null)}),2e3)})).catch((function(e){x(e.response.data.error),setTimeout((function(){x(null)}),5e3)}))}else{E({name:d,number:C},n).then((function(e){u(t.concat(e)),L("Added ".concat(d)),h(""),O(""),setTimeout((function(){L(null)}),2e3)})).catch((function(e){x(e.response.data.error),setTimeout((function(){x(null)}),5e3)}))}},handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){O(e.target.value)},newName:d,newNumber:C}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(s,{persons:t,newFilter:P,delPerson:function(e){var n=t.find((function(n){return n.id===e})).name;window.confirm("Do you really want to remove ".concat(n,"?"))&&p(e).then((function(){u(t.filter((function(n){return n.id!==e})))})).catch((function(){x("Could not remove person with id ".concat(e)),setTimeout((function(){return x(null)}),2e3)}))}}))};t(37);c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c1959c34.chunk.js.map