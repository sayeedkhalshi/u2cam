_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"7VKf":function(e,r,t){e.exports={nav:"WebMenu_nav__rGn-c",menu:"WebMenu_menu__5GoEW"}},BjMx:function(e,r,t){e.exports={register:"Register_register__23kuD",registerContent:"Register_registerContent__26UNG",forgotBtn:"Register_forgotBtn__x_e3w"}},CBpi:function(e,r,t){"use strict";var n=t("nKUr"),s=t("o0o1"),i=t.n(s),a=t("HaE+"),o=t("NKCw"),c=t("IKAo"),u=t.n(c),l=t("q1tI"),d=t("Nlzp"),m=function(e){var r=e.setSuccess,t=e.setReturnValue,s=e.setApiCallComponent,o=e.setValue,c=e.setError,u=e.setOperationalError,m=e.reqType,h=e.url,j=e.reason,f=e.formInput;return Object(l.useEffect)((function(){(function(){var e=Object(a.a)(i.a.mark((function e(){var n,a,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(""),e.next=3,Object(d.a)(m,h,j,f);case 3:return"success"===(n=e.sent).status?(Object.keys(f).forEach((function(e){o(e,"")})),r(!0),t(n)):"fail"===n.response.data.status?(a=n.response.data.message.split(" ")[0].trim(),l=n.response.data.message.split(" ").slice(1).join(" "),c("".concat(a),{type:"manual",message:"".concat(l).replace(/^\w/,(function(e){return e.toUpperCase()}))})):("error"===n.response.data.status||n.response.data.isOperational)&&u(n.response.data.message),e.abrupt("return",s(!1));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.jsx)(l.Fragment,{})},h=Object(l.lazy)((function(){return t.e(28).then(t.bind(null,"mxxH"))})),j=Object(l.lazy)((function(){return t.e(24).then(t.bind(null,"hHX8"))})),f=Object(l.lazy)((function(){return t.e(27).then(t.bind(null,"74Ju"))})),p=Object(l.lazy)((function(){return t.e(25).then(t.bind(null,"LmcR"))})),b=Object(l.lazy)((function(){return t.e(26).then(t.bind(null,"8lFg"))})),x=Object(l.lazy)((function(){return t.e(23).then(t.bind(null,"Ja3I"))}));r.a=function(e){var r=e.setReturnValue,t=e.setSuccess,s=e.submitValue,c=e.reason,d=e.reqType,O=e.url,g=e.formBuilder,C=e.submitBtnExtra,F=Object(l.useState)(!1),_=F[0],N=F[1],E=Object(l.useState)({}),w=E[0],y=E[1],R=Object(l.useState)(""),v=R[0],q=R[1],T=Object(o.a)(),V=T.register,S=T.errors,B=T.clearErrors,I=T.setValue,k=T.getValues,A=T.setError,K=T.handleSubmit,P=function(){var e=Object(a.a)(i.a.mark((function e(r){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(r),N(!0);case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return Object(n.jsxs)(l.Fragment,{children:[_?Object(n.jsx)(m,{setSuccess:t,setReturnValue:r,setApiCallComponent:N,setError:A,setValue:I,setOperationalError:q,reqType:d,url:O,reason:c,formInput:w}):Object(n.jsx)(l.Fragment,{}),Object(n.jsxs)("form",{onSubmit:K(P),children:[Object(n.jsx)("p",{className:"error",children:v}),Object(n.jsx)(l.Suspense,{fallback:Object(n.jsx)(n.Fragment,{}),children:null===g||void 0===g?void 0:g.map((function(e){return Object(n.jsxs)(l.Fragment,{children:["CustomTypeTextField"===e.fieldType&&Object(n.jsx)(x,{customTypesArray:e.customTypesArray,initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,register:V,errors:S,setError:A,clearErrors:B,getValues:k}),"TextField"===e.fieldType&&Object(n.jsx)(h,{initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,register:V,errors:S,setError:A,clearErrors:B,getValues:k}),"EmailField"===e.fieldType&&Object(n.jsx)(j,{initFocus:e.initFocus,placeholder:e.placeholder,isRequired:e.isRequired,fieldName:e.fieldName,register:V,errors:S,setError:A,clearErrors:B,getValues:k}),"PasswordWithConfirmField"===e.fieldType&&Object(n.jsx)(f,{initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,otherFieldName:e.otherFieldName,register:V,errors:S,setError:A,clearErrors:B,getValues:k}),"PasswordConfirmField"===e.fieldType&&Object(n.jsx)(p,{initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,otherFieldName:e.otherFieldName,register:V,errors:S,setError:A,clearErrors:B,getValues:k}),"PasswordField"===e.fieldType&&Object(n.jsx)(b,{initFocus:e.initFocus,placeholder:e.placeholder,maxChar:e.maxChar,minChar:e.minChar,isRequired:e.isRequired,fieldName:e.fieldName,register:V,errors:S,setError:A,clearErrors:B,getValues:k})]})}))}),Object(n.jsx)("input",{id:"hidden",name:"hidden",type:"hidden",placeholder:"hidden",autoComplete:"on"}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("input",{id:"submit",type:"submit",value:s}),Object(n.jsx)("div",{className:u.a.forgotBtn,children:C})]})]})]})}},IKAo:function(e,r,t){e.exports={register:"FormComponent_register__2IwdX",registerContent:"FormComponent_registerContent__ohUj2",forgotBtn:"FormComponent_forgotBtn__11A3p"}},RaS1:function(e,r,t){"use strict";var n=t("nKUr"),s=t("20a2"),i=t("q1tI"),a=t("Uw7I"),o=t("xGi3"),c=t("jcvg"),u=t("wfTj");r.a=function(e){var r=e.children,t=Object(i.useContext)(u.a),l=t[0],d=(t[1],Object(i.useContext)(c.a)),m=d[0],h=(d[1],Object(s.useRouter)());return Object(i.useEffect)((function(){if(!m)return l?h.push("/user/dashboard"):void 0}),[l]),Object(n.jsxs)(i.Fragment,{children:[Object(n.jsx)(o.a,{}),l?Object(n.jsx)("h1",{className:"heading",children:"Checking user..."}):Object(n.jsx)("main",{children:r}),Object(n.jsx)(a.a,{})]})}},VpV3:function(e,r,t){"use strict";t.r(r),t.d(r,"SubmitBtnExtra",(function(){return f}));var n=t("nKUr"),s=t("g4pe"),i=t.n(s),a=t("BjMx"),o=t.n(a),c=t("RaS1"),u=t("CBpi"),l=t("YFqc"),d=t.n(l),m=t("q1tI"),h=t("20a2"),j=t("wfTj"),f=function(){return Object(n.jsx)(d.a,{href:"/user/auth/login",children:"Already have account? Login here "})};r.default=function(){var e=Object(m.useContext)(j.a),r=e[0],t=e[1],s=Object(m.useState)(!1),a=s[0],l=s[1],d=Object(m.useState)(null),p=d[0],b=d[1],x=Object(h.useRouter)();Object(m.useEffect)((function(){a&&p&&(localStorage.setItem("token",p.refreshToken),t(p.data.user))}),[a,p]),Object(m.useEffect)((function(){if(r)if("admin"===r.role)x.push("/admin/dashboard");else{if("user"!==r.role)return;x.push("/user/dashboard")}}),[r]);return Object(n.jsxs)(c.a,{children:[Object(n.jsx)(i.a,{children:"Registration form"}),Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)("div",{id:o.a.register,children:[Object(n.jsx)("h1",{className:"heading",children:"Registration"}),Object(n.jsx)("div",{id:o.a.registerContent,children:Object(n.jsx)(u.a,{setSuccess:l,setReturnValue:b,submitValue:"Signup",reason:"registration",reqType:"post",url:"users/signup",formBuilder:[{fieldType:"TextField",placeholder:"Name",initFocus:!0,maxChar:32,minChar:2,isRequired:!0,fieldName:"name"},{fieldType:"EmailField",placeholder:"Email",initFocus:!1,isRequired:!0,fieldName:"email"},{fieldType:"PasswordWithConfirmField",placeholder:"Password",initFocus:!1,maxChar:100,minChar:8,isRequired:!0,fieldName:"password",otherFieldName:"passwordConfirm"},{fieldType:"PasswordConfirmField",placeholder:"Password Confirm",initFocus:!1,maxChar:100,minChar:8,isRequired:!0,fieldName:"passwordConfirm",otherFieldName:"password"}],submitBtnExtra:Object(n.jsx)(f,{})})})]})})]})}},Vwac:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/auth/registration",function(){return t("VpV3")}])},xGi3:function(e,r,t){"use strict";var n=t("nKUr"),s=t("q1tI"),i=t("jcvg"),a=t("k0rj"),o=t("YFqc"),c=t.n(o),u=t("7VKf"),l=t.n(u),d=function(){return Object(n.jsx)("menu",{id:l.a.menu,children:Object(n.jsxs)("nav",{id:l.a.nav,children:[Object(n.jsx)(c.a,{href:"/",children:"Home"}),Object(n.jsx)(c.a,{href:"/user/auth/login",children:"Login"}),Object(n.jsx)(c.a,{href:"/user/auth/registration",children:"Register"})]})})},m=t("y377"),h=t.n(m);r.a=function(){var e=Object(s.useContext)(i.a),r=e[0];e[1];return Object(n.jsxs)("header",{id:h.a.header,className:"header",children:[Object(n.jsx)(a.a,{}),r?Object(n.jsx)(s.Fragment,{}):Object(n.jsx)(d,{})]})}},y377:function(e,r,t){e.exports={header:"AuthHeader_header__1ZQe4"}}},[["Vwac",0,2,1,3,4,5]]]);