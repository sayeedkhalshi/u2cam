_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"+kQf":function(e,n,c){},"0m7D":function(e,n,c){e.exports={avatar:"UserMenu_avatar___kUv1"}},"20a2":function(e,n,c){e.exports=c("nOHt")},"2QwA":function(e,n,c){e.exports={headerSearch:"HeaderSearch_headerSearch__3DCik"}},F57A:function(e,n,c){e.exports={profile:"CommonProfile_profile__15BN0"}},GB7l:function(e,n,c){"use strict";var r=c("nKUr"),s=c("k0rj"),t=c("YFqc"),a=c.n(t),i=c("Sr1/"),j=c("0m7D"),u=c.n(j),o=function(){return Object(r.jsxs)("menu",{id:"menu",children:[Object(r.jsx)("div",{id:"menu-icon",onClick:i.a,children:"Menu"}),Object(r.jsxs)("nav",{id:"nav",children:[Object(r.jsx)(a.a,{href:"/",children:"Home"}),Object(r.jsx)(a.a,{href:"/admin/dashboard",children:Object(r.jsx)("img",{src:"/images/icons/photo.svg",width:"30",className:u.a.avatar})}),Object(r.jsxs)("ul",{className:"subMenu",children:[Object(r.jsx)("li",{children:Object(r.jsx)(a.a,{href:"/user/auth/logout",children:"Logout"})}),Object(r.jsx)("li",{children:Object(r.jsx)(a.a,{href:"/user/dashboard",children:"Timeline"})})]})]})]})},l=c("VVXf"),d=c("+kQf"),h=c.n(d);n.a=function(){return Object(r.jsxs)("header",{id:h.a.header,className:"header",children:[Object(r.jsx)(s.a,{}),Object(r.jsx)(l.a,{}),Object(r.jsx)(o,{})]})}},IRL4:function(e,n,c){"use strict";c.r(n);var r=c("nKUr"),s=c("nRVj"),t=c("vq1L");n.default=function(){return Object(r.jsx)(t.a,{children:Object(r.jsx)(s.a,{})})}},Tij5:function(e,n,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/profile",function(){return c("IRL4")}])},VVXf:function(e,n,c){"use strict";var r=c("nKUr"),s=c("q1tI"),t=(c("CBpi"),c("2QwA")),a=c.n(t);n.a=function(){var e=Object(s.useState)(!1),n=(e[0],e[1],Object(s.useState)(null));n[0],n[1];return Object(r.jsx)("div",{className:a.a.headerSearch,children:Object(r.jsx)("form",{children:Object(r.jsx)("input",{type:"text",placeholder:"Search"})})})}},gMxB:function(e,n,c){e.exports={sidebar:"UserSidebar_sidebar__2Tc6I",userLinks:"UserSidebar_userLinks__SLIF3",subMenu:"UserSidebar_subMenu__ySzoP"}},nRVj:function(e,n,c){"use strict";var r=c("nKUr"),s=c("q1tI"),t=c("wfTj"),a=c("F57A"),i=c.n(a);n.a=function(){var e=Object(s.useContext)(t.a),n=e[0];e[1];return Object(r.jsx)("div",{className:"content",children:Object(r.jsxs)("div",{className:i.a.profile,children:[Object(r.jsx)("h1",{className:"heading",children:"Profile"}),Object(r.jsx)("h5",{className:i.a.boldText,children:null===n||void 0===n?void 0:n.name}),Object(r.jsx)("h5",{className:i.a.boldText,children:null===n||void 0===n?void 0:n.email}),Object(r.jsx)("h5",{className:i.a.boldText,children:null===n||void 0===n?void 0:n.phone})]})})}},oBUv:function(e,n,c){e.exports={UserLayout:"UserLayout_UserLayout__ZENkR"}},vq1L:function(e,n,c){"use strict";var r=c("nKUr"),s=c("20a2"),t=c("q1tI"),a=c("Uw7I"),i=c("GB7l"),j=c("YFqc"),u=c.n(j),o=c("gMxB"),l=c.n(o),d=function(){return Object(r.jsx)("div",{className:l.a.sidebar,children:Object(r.jsx)("ul",{children:Object(r.jsx)("li",{className:l.a.userLinks,children:Object(r.jsx)(u.a,{href:"/user/profile",children:"Profile"})})})})},h=c("jcvg"),b=c("wfTj"),x=c("oBUv"),f=c.n(x);n.a=function(e){var n=e.children,c=Object(t.useContext)(h.a),j=c[0],u=(c[1],Object(t.useContext)(b.a)),o=u[0],l=(u[1],Object(s.useRouter)());return Object(t.useEffect)((function(){if(!j)return o?void 0:l.push("/user/auth/login")}),[o]),Object(r.jsxs)(t.Fragment,{children:[Object(r.jsx)(i.a,{}),!j&&o?Object(r.jsxs)("main",{className:f.a.UserLayout,children:[Object(r.jsx)(d,{}),n]}):Object(r.jsx)("h1",{className:"heading",children:"Fetching user..."}),Object(r.jsx)(a.a,{})]})}}},[["Tij5",0,2,1,3,4]]]);