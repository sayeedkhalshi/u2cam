_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{CBpi:function(e,r,t){"use strict";var s=t("nKUr"),a=t("o0o1"),n=t.n(a),i=t("HaE+"),c=t("NKCw"),o=t("IKAo"),u=t.n(o),l=t("q1tI"),d=t("Nlzp"),m=function(e){var r=e.setSuccess,t=e.setReturnValue,a=e.setApiCallComponent,c=e.setValue,o=e.setError,u=e.setOperationalError,m=e.reqType,j=e.url,h=e.reason,p=e.formInput;return Object(l.useEffect)((function(){(function(){var e=Object(i.a)(n.a.mark((function e(){var s,i,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(""),e.next=3,Object(d.a)(m,j,h,p);case 3:return"success"===(s=e.sent).status?(Object.keys(p).forEach((function(e){c(e,"")})),r(!0),t(s)):"fail"===s.response.data.status?(i=s.response.data.message.split(" ")[0].trim(),l=s.response.data.message.split(" ").slice(1).join(" "),o("".concat(i),{type:"manual",message:"".concat(l).replace(/^\w/,(function(e){return e.toUpperCase()}))})):("error"===s.response.data.status||s.response.data.isOperational)&&u(s.response.data.message),e.abrupt("return",a(!1));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.jsx)(l.Fragment,{})},j=Object(l.lazy)((function(){return t.e(28).then(t.bind(null,"mxxH"))})),h=Object(l.lazy)((function(){return t.e(24).then(t.bind(null,"hHX8"))})),p=Object(l.lazy)((function(){return t.e(27).then(t.bind(null,"74Ju"))})),b=Object(l.lazy)((function(){return t.e(25).then(t.bind(null,"LmcR"))})),f=Object(l.lazy)((function(){return t.e(26).then(t.bind(null,"8lFg"))})),x=Object(l.lazy)((function(){return t.e(23).then(t.bind(null,"Ja3I"))}));r.a=function(e){var r=e.setReturnValue,t=e.setSuccess,a=e.submitValue,o=e.reason,d=e.reqType,O=e.url,C=e.formBuilder,g=e.submitBtnExtra,F=Object(l.useState)(!1),_=F[0],N=F[1],y=Object(l.useState)({}),E=y[0],w=y[1],v=Object(l.useState)(""),R=v[0],q=v[1],T=Object(c.a)(),A=T.register,S=T.errors,U=T.clearErrors,V=T.setValue,k=T.getValues,I=T.setError,L=T.handleSubmit,P=function(){var e=Object(i.a)(n.a.mark((function e(r){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(r),N(!0);case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return Object(s.jsxs)(l.Fragment,{children:[_?Object(s.jsx)(m,{setSuccess:t,setReturnValue:r,setApiCallComponent:N,setError:I,setValue:V,setOperationalError:q,reqType:d,url:O,reason:o,formInput:E}):Object(s.jsx)(l.Fragment,{}),Object(s.jsxs)("form",{onSubmit:L(P),children:[Object(s.jsx)("p",{className:"error",children:R}),Object(s.jsx)(l.Suspense,{fallback:Object(s.jsx)(s.Fragment,{}),children:null===C||void 0===C?void 0:C.map((function(e){return Object(s.jsxs)(l.Fragment,{children:["CustomTypeTextField"===e.fieldType&&Object(s.jsx)(x,{customTypesArray:e.customTypesArray,initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,register:A,errors:S,setError:I,clearErrors:U,getValues:k}),"TextField"===e.fieldType&&Object(s.jsx)(j,{initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,register:A,errors:S,setError:I,clearErrors:U,getValues:k}),"EmailField"===e.fieldType&&Object(s.jsx)(h,{initFocus:e.initFocus,placeholder:e.placeholder,isRequired:e.isRequired,fieldName:e.fieldName,register:A,errors:S,setError:I,clearErrors:U,getValues:k}),"PasswordWithConfirmField"===e.fieldType&&Object(s.jsx)(p,{initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,otherFieldName:e.otherFieldName,register:A,errors:S,setError:I,clearErrors:U,getValues:k}),"PasswordConfirmField"===e.fieldType&&Object(s.jsx)(b,{initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,otherFieldName:e.otherFieldName,register:A,errors:S,setError:I,clearErrors:U,getValues:k}),"PasswordField"===e.fieldType&&Object(s.jsx)(f,{initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,register:A,errors:S,setError:I,clearErrors:U,getValues:k})]})}))}),Object(s.jsx)("input",{id:"hidden",name:"hidden",type:"hidden",placeholder:"hidden",autoComplete:"on"}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("input",{id:"submit",type:"submit",value:a}),Object(s.jsx)("div",{className:u.a.forgotBtn,children:g})]})]})]})}},E5GR:function(e,r,t){e.exports={register:"CreateUser_register__3YnOE",registerContent:"CreateUser_registerContent__-DiL_"}},GDVR:function(e,r,t){"use strict";var s=t("nKUr"),a=t("q1tI"),n=t("jcvg"),i=t("k0rj"),c=t("YFqc"),o=t.n(c),u=t("KIaw"),l=t.n(u),d=function(){return Object(s.jsx)("menu",{id:l.a.menu,children:Object(s.jsxs)("nav",{id:l.a.nav,children:[Object(s.jsx)(o.a,{href:"/",children:"Home"}),Object(s.jsx)(o.a,{href:"/admin/dashboard",children:"Dashboard"}),Object(s.jsx)(o.a,{href:"/user/auth/logout",children:"Logout"})]})})},m=t("GMIE"),j=t.n(m);r.a=function(){var e=Object(a.useContext)(n.a),r=e[0];e[1];return Object(s.jsxs)("header",{id:j.a.header,className:"header",children:[Object(s.jsx)(i.a,{}),r?Object(s.jsx)(a.Fragment,{}):Object(s.jsx)(d,{})]})}},GMIE:function(e,r,t){e.exports={header:"AdminHeader_header__2yDfM"}},HBKp:function(e,r,t){"use strict";var s=t("nKUr"),a=t("20a2"),n=t("q1tI"),i=t("Uw7I"),c=t("GDVR"),o=t("YFqc"),u=t.n(o),l=t("HGLW"),d=t.n(l),m=function(){return Object(s.jsx)("div",{className:d.a.sidebar,children:Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{className:d.a.adminLinks,children:[Object(s.jsx)(u.a,{href:"/admin/users/list-users",children:"Users"}),Object(s.jsxs)("ul",{className:d.a.subMenu,children:[Object(s.jsx)("li",{className:"".concat(d.a.adminLinks),children:Object(s.jsx)(u.a,{href:"/admin/users/list-users",children:"Search Users"})}),Object(s.jsx)("li",{className:"".concat(d.a.adminLinks),children:Object(s.jsx)(u.a,{href:"/admin/users/create-user",children:"Create User"})})]})]}),Object(s.jsx)("li",{className:d.a.adminLinks,children:Object(s.jsx)(u.a,{href:"/admin/uploads",children:"Uploads"})})]})})},j=t("jcvg"),h=t("wfTj"),p=t("RPPH"),b=t.n(p);r.a=function(e){var r=e.children,t=Object(n.useContext)(j.a),o=t[0],u=(t[1],Object(n.useContext)(h.a)),l=u[0],d=(u[1],Object(a.useRouter)());return Object(n.useEffect)((function(){if(!o)return l?"admin"!==l.role?d.push("/admin/unauthorized"):void 0:d.push("/user/auth/login")}),[l]),Object(s.jsxs)(n.Fragment,{children:[Object(s.jsx)(c.a,{}),!o&&l?Object(s.jsxs)("main",{className:b.a.AdminLayout,children:[Object(s.jsx)(m,{}),r]}):Object(s.jsx)("h1",{className:"heading",children:"Fetching user..."}),Object(s.jsx)(i.a,{})]})}},HGLW:function(e,r,t){e.exports={sidebar:"AdminSidebar_sidebar__2vcDe",adminLinks:"AdminSidebar_adminLinks__3SBUJ",subMenu:"AdminSidebar_subMenu__3kZ4n"}},IKAo:function(e,r,t){e.exports={register:"FormComponent_register__2IwdX",registerContent:"FormComponent_registerContent__ohUj2",forgotBtn:"FormComponent_forgotBtn__11A3p"}},KIaw:function(e,r,t){e.exports={nav:"AdminMenu_nav__2-7Ek",menu:"AdminMenu_menu__24ge-"}},RPPH:function(e,r,t){e.exports={AdminLayout:"AdminLayout_AdminLayout__2W35P"}},kJDH:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/users/create-user",function(){return t("zjhl")}])},zjhl:function(e,r,t){"use strict";t.r(r),t.d(r,"SubmitBtnExtra",(function(){return d}));var s=t("nKUr"),a=t("g4pe"),n=t.n(a),i=t("E5GR"),c=t.n(i),o=t("CBpi"),u=(t("YFqc"),t("q1tI")),l=t("HBKp"),d=function(){return Object(s.jsx)(u.Fragment,{})};r.default=function(){var e=Object(u.useState)(""),r=e[0],t=e[1],a=Object(u.useState)(!1),i=a[0],m=a[1],j=Object(u.useState)(null),h=j[0],p=j[1];Object(u.useEffect)((function(){i&&h&&t("User created successfully")}),[i,h]);return Object(s.jsxs)(l.a,{children:[Object(s.jsx)(n.a,{children:"User Form"}),Object(s.jsx)("div",{className:"content",children:Object(s.jsxs)("div",{id:c.a.register,children:[Object(s.jsx)("h1",{className:"heading",children:"Create User or Admin"}),Object(s.jsxs)("div",{id:c.a.registerContent,children:[Object(s.jsx)("h5",{className:"heading success-message",children:r}),Object(s.jsx)(o.a,{setSuccess:m,setReturnValue:p,submitValue:"Create",reason:"registration from admin",reqType:"post",url:"admin/users/create",formBuilder:[{fieldType:"CustomTypeTextField",placeholder:"User Type",customTypesArray:["user","admin","moderator"],initFocus:!0,maxChar:32,minChar:2,isRequired:!0,fieldName:"role"},{fieldType:"TextField",placeholder:"Name",initFocus:!1,maxChar:32,minChar:2,isRequired:!0,fieldName:"name"},{fieldType:"EmailField",placeholder:"Email",initFocus:!1,isRequired:!0,fieldName:"email"},{fieldType:"PasswordWithConfirmField",placeholder:"Password",initFocus:!1,maxChar:100,minChar:8,isRequired:!0,fieldName:"password",otherFieldName:"passwordConfirm"},{fieldType:"PasswordConfirmField",placeholder:"Password Confirm",initFocus:!1,maxChar:100,minChar:8,isRequired:!0,fieldName:"passwordConfirm",otherFieldName:"password"}],submitBtnExtra:Object(s.jsx)(d,{})})]})]})})]})}}},[["kJDH",0,2,1,3,4,5]]]);