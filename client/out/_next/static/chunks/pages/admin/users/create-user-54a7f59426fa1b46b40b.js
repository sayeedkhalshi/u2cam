_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{CBpi:function(e,r,a){"use strict";var t=a("nKUr"),s=a("o0o1"),n=a.n(s),i=a("HaE+"),l=a("NKCw"),c=a("IKAo"),u=a.n(c),o=a("q1tI"),d=a("Nlzp"),m=function(e){var r=e.setSuccess,a=e.setReturnValue,s=e.setApiCallComponent,l=e.setValue,c=e.setError,u=e.setOperationalError,m=e.reqType,j=e.url,h=e.reason,b=e.formInput;return Object(o.useEffect)((function(){(function(){var e=Object(i.a)(n.a.mark((function e(){var t,i,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(""),e.next=3,Object(d.a)(m,j,h,b);case 3:return"success"===(t=e.sent).status?(Object.keys(b).forEach((function(e){l(e,"")})),r(!0),a(t)):"fail"===t.response.data.status?(i=t.response.data.message.split(" ")[0].trim(),o=t.response.data.message.split(" ").slice(1).join(" "),c("".concat(i),{type:"manual",message:"".concat(o).replace(/^\w/,(function(e){return e.toUpperCase()}))}),t.response.data.isOperational&&u(t.response.data.message)):"error"===t.response.data.status&&u(t.response.data.message),e.abrupt("return",s(!1));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(t.jsx)(o.Fragment,{})},j=Object(o.lazy)((function(){return a.e(29).then(a.bind(null,"mxxH"))})),h=Object(o.lazy)((function(){return a.e(25).then(a.bind(null,"hHX8"))})),b=Object(o.lazy)((function(){return a.e(28).then(a.bind(null,"74Ju"))})),p=Object(o.lazy)((function(){return a.e(26).then(a.bind(null,"LmcR"))})),f=Object(o.lazy)((function(){return a.e(27).then(a.bind(null,"8lFg"))})),x=Object(o.lazy)((function(){return a.e(24).then(a.bind(null,"Ja3I"))}));r.a=function(e){var r=e.setReturnValue,a=e.setSuccess,s=e.submitValue,c=e.reason,d=e.reqType,O=e.url,C=e.formBuilder,g=e.submitBtnExtra,F=Object(o.useState)(!1),_=F[0],N=F[1],v=Object(o.useState)({}),y=v[0],E=v[1],w=Object(o.useState)(""),R=w[0],q=w[1],T=Object(l.a)(),V=T.register,A=T.errors,S=T.clearErrors,U=T.setValue,k=T.getValues,P=T.setError,I=T.handleSubmit,L=function(){var e=Object(i.a)(n.a.mark((function e(r){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E(r),N(!0);case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return Object(t.jsxs)(o.Fragment,{children:[_?Object(t.jsx)(m,{setSuccess:a,setReturnValue:r,setApiCallComponent:N,setError:P,setValue:U,setOperationalError:q,reqType:d,url:O,reason:c,formInput:y}):Object(t.jsx)(o.Fragment,{}),Object(t.jsxs)("form",{onSubmit:I(L),children:[Object(t.jsx)("p",{className:"error",children:R}),Object(t.jsx)(o.Suspense,{fallback:Object(t.jsx)(t.Fragment,{}),children:null===C||void 0===C?void 0:C.map((function(e){return Object(t.jsxs)(o.Fragment,{children:["CustomTypeTextField"===e.fieldType&&Object(t.jsx)(x,{value:e.value,label:e.label,customTypesArray:e.customTypesArray,initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,register:V,setValue:U,errors:A,setError:P,clearErrors:S,getValues:k}),"TextField"===e.fieldType&&Object(t.jsx)(j,{value:e.value,label:e.label,initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,register:V,setValue:U,errors:A,setError:P,clearErrors:S,getValues:k}),"EmailField"===e.fieldType&&Object(t.jsx)(h,{value:e.value,label:e.label,initFocus:e.initFocus,placeholder:e.placeholder,isRequired:e.isRequired,fieldName:e.fieldName,register:V,setValue:U,errors:A,setError:P,clearErrors:S,getValues:k}),"PasswordWithConfirmField"===e.fieldType&&Object(t.jsx)(b,{value:e.value,label:e.label,initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,otherFieldName:e.otherFieldName,register:V,setValue:U,errors:A,setError:P,clearErrors:S,getValues:k}),"PasswordConfirmField"===e.fieldType&&Object(t.jsx)(p,{value:e.value,label:e.label,initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,otherFieldName:e.otherFieldName,register:V,setValue:U,errors:A,setError:P,clearErrors:S,getValues:k}),"PasswordField"===e.fieldType&&Object(t.jsx)(f,{value:e.value,label:e.label,initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,register:V,setValue:U,errors:A,setError:P,clearErrors:S,getValues:k})]})}))}),Object(t.jsx)("input",{id:"hidden",name:"hidden",type:"hidden",placeholder:"hidden",autoComplete:"on"}),Object(t.jsxs)("div",{className:"form-group",children:[Object(t.jsx)("input",{id:"submit",type:"submit",value:s}),Object(t.jsx)("div",{className:u.a.forgotBtn,children:g})]})]})]})}},E5GR:function(e,r,a){e.exports={register:"CreateUser_register__3YnOE",registerContent:"CreateUser_registerContent__-DiL_"}},GDVR:function(e,r,a){"use strict";var t=a("nKUr"),s=a("q1tI"),n=a("jcvg"),i=a("k0rj"),l=a("YFqc"),c=a.n(l),u=a("KIaw"),o=a.n(u),d=function(){return Object(t.jsx)("menu",{id:o.a.menu,children:Object(t.jsxs)("nav",{id:o.a.nav,children:[Object(t.jsx)(c.a,{href:"/",children:"Home"}),Object(t.jsx)(c.a,{href:"/admin/dashboard",children:"Dashboard"}),Object(t.jsx)(c.a,{href:"/user/auth/logout",children:"Logout"})]})})},m=a("GMIE"),j=a.n(m);r.a=function(){var e=Object(s.useContext)(n.a),r=e[0];e[1];return Object(t.jsxs)("header",{id:j.a.header,className:"header",children:[Object(t.jsx)(i.a,{}),r?Object(t.jsx)(s.Fragment,{}):Object(t.jsx)(d,{})]})}},GMIE:function(e,r,a){e.exports={header:"AdminHeader_header__2yDfM"}},HBKp:function(e,r,a){"use strict";var t=a("nKUr"),s=a("20a2"),n=a("q1tI"),i=a("Uw7I"),l=a("GDVR"),c=a("YFqc"),u=a.n(c),o=a("HGLW"),d=a.n(o),m=function(){return Object(t.jsx)("div",{className:d.a.sidebar,children:Object(t.jsxs)("ul",{children:[Object(t.jsxs)("li",{className:d.a.adminLinks,children:[Object(t.jsx)(u.a,{href:"/admin/users/list-users",children:"Users"}),Object(t.jsxs)("ul",{className:d.a.subMenu,children:[Object(t.jsx)("li",{className:"".concat(d.a.adminLinks),children:Object(t.jsx)(u.a,{href:"/admin/users/list-users",children:"Search Users"})}),Object(t.jsx)("li",{className:"".concat(d.a.adminLinks),children:Object(t.jsx)(u.a,{href:"/admin/users/create-user",children:"Create User"})})]})]}),Object(t.jsx)("li",{className:d.a.adminLinks,children:Object(t.jsx)(u.a,{href:"/admin/uploads",children:"Uploads"})})]})})},j=a("jcvg"),h=a("wfTj"),b=a("RPPH"),p=a.n(b);r.a=function(e){var r=e.children,a=Object(n.useContext)(j.a),c=a[0],u=(a[1],Object(n.useContext)(h.a)),o=u[0],d=(u[1],Object(s.useRouter)());return Object(n.useEffect)((function(){if(!c)return o?"admin"!==o.role?d.push("/admin/unauthorized"):void 0:d.push("/user/auth/login")}),[o]),Object(t.jsxs)(n.Fragment,{children:[Object(t.jsx)(l.a,{}),!c&&o?Object(t.jsxs)("main",{className:p.a.AdminLayout,children:[Object(t.jsx)(m,{}),r]}):Object(t.jsx)("h1",{className:"heading",children:"Fetching user..."}),Object(t.jsx)(i.a,{})]})}},HGLW:function(e,r,a){e.exports={sidebar:"AdminSidebar_sidebar__2vcDe",adminLinks:"AdminSidebar_adminLinks__3SBUJ",subMenu:"AdminSidebar_subMenu__3kZ4n"}},IKAo:function(e,r,a){e.exports={register:"FormComponent_register__2IwdX",registerContent:"FormComponent_registerContent__ohUj2",forgotBtn:"FormComponent_forgotBtn__11A3p"}},KIaw:function(e,r,a){e.exports={nav:"AdminMenu_nav__2-7Ek",menu:"AdminMenu_menu__24ge-"}},RPPH:function(e,r,a){e.exports={AdminLayout:"AdminLayout_AdminLayout__2W35P"}},kJDH:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/users/create-user",function(){return a("zjhl")}])},zjhl:function(e,r,a){"use strict";a.r(r),a.d(r,"SubmitBtnExtra",(function(){return d}));var t=a("nKUr"),s=a("g4pe"),n=a.n(s),i=a("E5GR"),l=a.n(i),c=a("CBpi"),u=(a("YFqc"),a("q1tI")),o=a("HBKp"),d=function(){return Object(t.jsx)(u.Fragment,{})};r.default=function(){var e=Object(u.useState)(""),r=e[0],a=e[1],s=Object(u.useState)(!1),i=s[0],m=s[1],j=Object(u.useState)(null),h=j[0],b=j[1];Object(u.useEffect)((function(){i&&h&&a("User created successfully")}),[i,h]);return Object(t.jsxs)(o.a,{children:[Object(t.jsx)(n.a,{children:"User Form"}),Object(t.jsx)("div",{className:"content",children:Object(t.jsxs)("div",{id:l.a.register,children:[Object(t.jsx)("h1",{className:"heading",children:"Create User or Admin"}),Object(t.jsxs)("div",{id:l.a.registerContent,children:[Object(t.jsx)("h5",{className:"heading success-message",children:r}),Object(t.jsx)(c.a,{setSuccess:m,setReturnValue:b,submitValue:"Create",reason:"registration from admin",reqType:"post",url:"admin/users/create",formBuilder:[{fieldType:"CustomTypeTextField",placeholder:"user or admin or moderator",label:"User Type",customTypesArray:["user","admin","moderator"],initFocus:!0,maxChar:32,minChar:2,isRequired:!0,fieldName:"role"},{fieldType:"TextField",placeholder:"Name",label:"Name",initFocus:!1,maxChar:32,minChar:2,isRequired:!0,fieldName:"name"},{fieldType:"EmailField",placeholder:"Email",label:"Email",initFocus:!1,isRequired:!0,fieldName:"email"},{fieldType:"PasswordWithConfirmField",placeholder:"Password",label:"Password",initFocus:!1,maxChar:100,minChar:8,isRequired:!0,fieldName:"password",otherFieldName:"passwordConfirm"},{fieldType:"PasswordConfirmField",placeholder:"Password Confirm",label:"Password Confirm",initFocus:!1,maxChar:100,minChar:8,isRequired:!0,fieldName:"passwordConfirm",otherFieldName:"password"}],submitBtnExtra:Object(t.jsx)(d,{})})]})]})})]})}}},[["kJDH",0,2,1,3,4,5]]]);