_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"+kQf":function(e,s,n){},GB7l:function(e,s,n){"use strict";var t=n("nKUr"),a=n("k0rj"),c=n("YFqc"),r=n.n(c),i=n("Sr1/"),o=function(){return Object(t.jsxs)("menu",{id:"menu",children:[Object(t.jsx)("div",{id:"menu-icon",onClick:i.a,children:"Menu"}),Object(t.jsxs)("nav",{id:"nav",children:[Object(t.jsx)(r.a,{href:"/",children:"Home"}),Object(t.jsxs)("a",{href:"/admin/dashboard",children:[Object(t.jsx)("img",{src:"/images/icons/photo.svg",width:"30"}),Object(t.jsxs)("ul",{className:"subMenu",children:[Object(t.jsx)("li",{children:Object(t.jsx)(r.a,{href:"/user/auth/logout",children:"Logout"})}),Object(t.jsx)("li",{children:Object(t.jsx)(r.a,{href:"/user/dashboard",children:"Timeline"})})]})]})]})]})},u=n("VVXf"),d=n("+kQf"),j=n.n(d);s.a=function(){return Object(t.jsxs)("header",{id:j.a.header,className:"header",children:[Object(t.jsx)(a.a,{}),Object(t.jsx)(u.a,{}),Object(t.jsx)(o,{})]})}},avq6:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/dashboard",function(){return n("i3nl")}])},fsTc:function(e,s,n){e.exports={dashboard:"Dashboard_dashboard__2lrxl",boldText:"Dashboard_boldText__1SZTM"}},gMxB:function(e,s,n){e.exports={sidebar:"UserSidebar_sidebar__2Tc6I",userLinks:"UserSidebar_userLinks__SLIF3",subMenu:"UserSidebar_subMenu__ySzoP"}},i3nl:function(e,s,n){"use strict";n.r(s);var t=n("nKUr"),a=n("o0o1"),c=n.n(a),r=n("HaE+"),i=n("q1tI"),o=n("Nlzp"),u=n("RDKT"),d=n("wfTj"),j=n("vq1L"),l=n("fsTc"),b=n.n(l);s.default=function(){var e=Object(i.useContext)(d.a),s=e[0],n=(e[1],Object(i.useState)([])),a=n[0],l=n[1];return Object(i.useEffect)((function(){s&&function(){var e=Object(r.a)(c.a.mark((function e(){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.a)("get","posts","Get all post");case 2:s=e.sent,console.log(s.data.data),l(s.data.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s]),Object(t.jsx)(j.a,{children:Object(t.jsxs)("div",{className:"content",children:[Object(t.jsx)("h1",{className:"heading",children:"Dashboard"}),Object(t.jsxs)("div",{className:b.a.dashboard,children:[Object(t.jsx)("h1",{className:"heading",children:"Timeline"}),null===a||void 0===a?void 0:a.map((function(e){return Object(t.jsx)(u.a,{post:e})}))]})]})})}},oBUv:function(e,s,n){e.exports={UserLayout:"UserLayout_UserLayout__ZENkR"}},vq1L:function(e,s,n){"use strict";var t=n("nKUr"),a=n("20a2"),c=n("q1tI"),r=n("Uw7I"),i=n("GB7l"),o=n("YFqc"),u=n.n(o),d=n("gMxB"),j=n.n(d),l=function(){return Object(t.jsx)("div",{className:j.a.sidebar,children:Object(t.jsx)("ul",{children:Object(t.jsx)("li",{className:j.a.userLinks,children:Object(t.jsx)(u.a,{href:"/user/profile",children:"Profile"})})})})},b=n("jcvg"),h=n("wfTj"),x=n("oBUv"),f=n.n(x);s.a=function(e){var s=e.children,n=Object(c.useContext)(b.a),o=n[0],u=(n[1],Object(c.useContext)(h.a)),d=u[0],j=(u[1],Object(a.useRouter)());return Object(c.useEffect)((function(){if(!o)return d?void 0:j.push("/user/auth/login")}),[d]),Object(t.jsxs)(c.Fragment,{children:[Object(t.jsx)(i.a,{}),!o&&d?Object(t.jsxs)("main",{className:f.a.UserLayout,children:[Object(t.jsx)(l,{}),s]}):Object(t.jsx)("h1",{className:"heading",children:"Fetching user..."}),Object(t.jsx)(r.a,{})]})}}},[["avq6",0,2,6,1,3,4,5]]]);