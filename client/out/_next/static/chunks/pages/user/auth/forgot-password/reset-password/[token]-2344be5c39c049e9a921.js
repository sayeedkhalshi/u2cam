_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"20a2":function(e,s,t){e.exports=t("nOHt")},HAkn:function(e,s,t){"use strict";t.r(s),t.d(s,"SubmitBtnExtra",(function(){return h}));var r=t("nKUr"),n=t("g4pe"),a=t.n(n),i=t("mL+a"),o=t.n(i),c=t("RaS1"),d=t("CBpi"),u=t("q1tI"),j=t("20a2"),l=t("wfTj"),h=function(){return Object(r.jsx)(u.Fragment,{children:Object(r.jsx)("br",{})})};s.default=function(){var e=Object(u.useContext)(l.a),s=e[0],t=e[1],n=Object(u.useState)(!1),i=n[0],b=n[1],f=Object(u.useState)(null),w=f[0],x=f[1],O=Object(j.useRouter)(),m=O.query.token;Object(u.useEffect)((function(){i&&w&&(localStorage.setItem("token",w.refreshToken),console.log(w),t(w.data.user))}),[i,w]),Object(u.useEffect)((function(){return s?"admin"===s.role?O.push("/admin/dashboard"):"user"===s.role?O.push("/user/dashboard"):void 0:void 0}),[s]);return Object(r.jsxs)(c.a,{children:[Object(r.jsx)(a.a,{children:"Change Password"}),Object(r.jsx)("div",{className:"content",children:Object(r.jsxs)("div",{id:o.a.resetPassword,children:[Object(r.jsx)("h1",{className:"heading",children:"Login"}),Object(r.jsx)("div",{id:o.a.resetPasswordContent,children:Object(r.jsx)(d.a,{setSuccess:b,setReturnValue:x,submitValue:"Reset Password",reason:"reset password",reqType:"post",url:"users/resetPassword/".concat(m),formBuilder:[{fieldType:"PasswordWithConfirmField",placeholder:"Password",label:"Password",initFocus:!0,maxChar:100,minChar:8,isRequired:!0,fieldName:"password",otherFieldName:"passwordConfirm"},{fieldType:"PasswordConfirmField",placeholder:"Password Confirm",label:"Password Confirm",initFocus:!1,maxChar:100,minChar:8,isRequired:!0,fieldName:"passwordConfirm",otherFieldName:"password"}],submitBtnExtra:Object(r.jsx)(h,{})})})]})})]})}},Mqzt:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/auth/forgot-password/reset-password/[token]",function(){return t("HAkn")}])},RaS1:function(e,s,t){"use strict";var r=t("nKUr"),n=t("20a2"),a=t("q1tI"),i=t("Uw7I"),o=t("xGi3"),c=t("jcvg"),d=t("wfTj");s.a=function(e){var s=e.children,t=Object(a.useContext)(d.a),u=t[0],j=(t[1],Object(a.useContext)(c.a)),l=j[0],h=(j[1],Object(n.useRouter)());return Object(a.useEffect)((function(){if(!l)return u?h.push("/user/dashboard"):void 0}),[u]),Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)(o.a,{}),u?Object(r.jsx)("h1",{className:"heading",children:"Checking user..."}):Object(r.jsx)("main",{children:s}),Object(r.jsx)(i.a,{})]})}},"mL+a":function(e,s,t){e.exports={resetPassword:"ResetPassword_resetPassword__36QTj",resetPasswordContent:"ResetPassword_resetPasswordContent__2gRoU"}},xGi3:function(e,s,t){"use strict";var r=t("nKUr"),n=t("q1tI"),a=t("jcvg"),i=t("k0rj"),o=t("YFqc"),c=t.n(o),d=t("h6H3"),u=function(){return Object(r.jsxs)("menu",{id:"menu",children:[Object(r.jsx)("div",{id:"menu-icon",onClick:d.a,children:"Menu"}),Object(r.jsxs)("nav",{id:"nav",children:[Object(r.jsx)(c.a,{href:"/",children:"Home"}),Object(r.jsx)(c.a,{href:"/user/auth/login",children:"Login"}),Object(r.jsx)(c.a,{href:"/user/auth/registration",children:"Register"})]})]})},j=t("y377"),l=t.n(j);s.a=function(){var e=Object(n.useContext)(a.a),s=e[0];e[1];return Object(r.jsxs)("header",{id:l.a.header,className:"header",children:[Object(r.jsx)(i.a,{}),s?Object(r.jsx)(n.Fragment,{}):Object(r.jsx)(u,{})]})}},y377:function(e,s,t){}},[["Mqzt",0,2,1,3,4,5]]]);