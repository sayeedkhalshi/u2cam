_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"+kQf":function(e,n,t){},"20a2":function(e,n,t){e.exports=t("nOHt")},FPDb:function(e,n,t){e.exports={footer:"Footer_footer__ZxQMm"}},GB7l:function(e,n,t){"use strict";var r=t("nKUr"),o=t("k0rj"),s=t("YFqc"),c=t.n(s),a=t("Sr1/"),i=function(){return Object(r.jsxs)("menu",{id:"menu",children:[Object(r.jsx)("div",{id:"menu-icon",onClick:a.a,children:"Menu"}),Object(r.jsxs)("nav",{id:"nav",children:[Object(r.jsx)(c.a,{href:"/",children:"Home"}),Object(r.jsx)(c.a,{href:"/user/dashboard",children:"Dashboard"}),Object(r.jsx)(c.a,{href:"/user/auth/logout",children:"Logout"})]})]})},u=t("+kQf"),l=t.n(u);n.a=function(){return Object(r.jsxs)("header",{id:l.a.header,className:"header",children:[Object(r.jsx)(o.a,{}),Object(r.jsx)(i,{})]})}},"Sr1/":function(e,n,t){"use strict";n.a=function(){var e=document.getElementById("nav").style;return""===e.visibility?(e.opacity=1,e.visibility="visible"):"hidden"===e.visibility?(e.visibility="visible",e.opacity=1):"visible"===e.visibility?(e.visibility="hidden",e.opacity=0):void 0}},Uw7I:function(e,n,t){"use strict";var r=t("nKUr"),o=t("FPDb"),s=t.n(o);n.a=function(){return Object(r.jsx)("footer",{id:s.a.footer,children:Object(r.jsx)("h1",{children:"Footer"})})}},YFqc:function(e,n,t){e.exports=t("cTJO")},avq6:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/dashboard",function(){return t("i3nl")}])},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var s=o(t("q1tI")),c=t("elyg"),a=t("nOHt"),i=t("vNVm"),u={};function l(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var n=!1!==e.prefetch,t=(0,a.useRouter)(),o=t&&t.pathname||"/",d=s.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),s=t[0],a=t[1];return{href:s,as:e.as?(0,c.resolveHref)(o,e.as):a||s}}),[o,e.href,e.as]),f=d.href,b=d.as,h=e.children,v=e.replace,j=e.shallow,p=e.scroll,x=e.locale;"string"===typeof h&&(h=s.default.createElement("a",null,h));var _=s.Children.only(h),O=_&&"object"===typeof _&&_.ref,m=(0,i.useIntersection)({rootMargin:"200px"}),g=r(m,2),y=g[0],L=g[1],N=s.default.useCallback((function(e){y(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,y]);(0,s.useEffect)((function(){var e=L&&n&&(0,c.isLocalURL)(f),r="undefined"!==typeof x?x:t&&t.locale,o=u[f+"%"+b+(r?"%"+r:"")];e&&!o&&l(t,f,b,{locale:r})}),[b,f,L,x,n,t]);var M={ref:N,onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,s,a,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:s,locale:i,scroll:a}).then((function(e){e&&a&&document.body.focus()})))}(e,t,f,b,v,j,p,x)},onMouseEnter:function(e){(0,c.isLocalURL)(f)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),l(t,f,b,{priority:!0}))}};if(e.passHref||"a"===_.type&&!("href"in _.props)){var U="undefined"!==typeof x?x:t&&t.locale,w=(0,c.getDomainLocale)(b,U,t&&t.locales,t&&t.domainLocales);M.href=w||(0,c.addBasePath)((0,c.addLocale)(b,U,t&&t.defaultLocale))}return s.default.cloneElement(_,M)};n.default=d},cpSV:function(e,n,t){e.exports={logo:"Logo_logo__3vQhM",logoLast:"Logo_logoLast__WQe-D",round:"Logo_round__34V1l"}},fsTc:function(e,n,t){e.exports={dashboard:"Dashboard_dashboard__2lrxl",boldText:"Dashboard_boldText__1SZTM"}},gMxB:function(e,n,t){e.exports={sidebar:"UserSidebar_sidebar__2Tc6I",userLinks:"UserSidebar_userLinks__SLIF3",subMenu:"UserSidebar_subMenu__ySzoP"}},i3nl:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),o=t("q1tI"),s=t("wfTj"),c=t("vq1L"),a=t("fsTc"),i=t.n(a);n.default=function(){var e=Object(o.useContext)(s.a),n=e[0];e[1];return Object(r.jsx)(c.a,{children:Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("h1",{className:"heading",children:"Dashboard"}),Object(r.jsxs)("div",{className:i.a.dashboard,children:[Object(r.jsx)("h5",{className:i.a.boldText,children:null===n||void 0===n?void 0:n.name}),Object(r.jsx)("h5",{className:i.a.boldText,children:null===n||void 0===n?void 0:n.email}),Object(r.jsx)("h5",{className:i.a.boldText,children:null===n||void 0===n?void 0:n.phone})]})]})})}},k0rj:function(e,n,t){"use strict";var r=t("nKUr"),o=t("YFqc"),s=t.n(o),c=t("cpSV"),a=t.n(c);n.a=function(){return Object(r.jsx)(s.a,{href:"/",passHref:!0,children:Object(r.jsxs)("button",{className:a.a.logo,children:["U",Object(r.jsx)("span",{className:a.a.logoLast,children:Object(r.jsx)("span",{className:a.a.round,children:"2"})}),"CAM"]})})}},oBUv:function(e,n,t){e.exports={UserLayout:"UserLayout_UserLayout__ZENkR"}},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,o=(0,s.useRef)(),u=(0,s.useState)(!1),l=r(u,2),d=l[0],f=l[1],b=(0,s.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||d||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,s=r.observer,c=r.elements;return c.set(e,n),s.observe(e),function(){c.delete(e),s.unobserve(e),0===c.size&&(s.disconnect(),i.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,d]);return(0,s.useEffect)((function(){a||d||(0,c.default)((function(){return f(!0)}))}),[d]),[b,d]};var s=t("q1tI"),c=o(t("0G5g")),a="undefined"!==typeof IntersectionObserver;var i=new Map},vq1L:function(e,n,t){"use strict";var r=t("nKUr"),o=t("20a2"),s=t("q1tI"),c=t("Uw7I"),a=t("GB7l"),i=t("YFqc"),u=t.n(i),l=t("gMxB"),d=t.n(l),f=function(){return Object(r.jsx)("div",{className:d.a.sidebar,children:Object(r.jsx)("ul",{children:Object(r.jsx)("li",{className:d.a.userLinks,children:Object(r.jsx)(u.a,{href:"/user/profile",children:"Profile"})})})})},b=t("jcvg"),h=t("wfTj"),v=t("oBUv"),j=t.n(v);n.a=function(e){var n=e.children,t=Object(s.useContext)(b.a),i=t[0],u=(t[1],Object(s.useContext)(h.a)),l=u[0],d=(u[1],Object(o.useRouter)());return Object(s.useEffect)((function(){if(!i)return l?void 0:d.push("/user/auth/login")}),[l]),Object(r.jsxs)(s.Fragment,{children:[Object(r.jsx)(a.a,{}),!i&&l?Object(r.jsxs)("main",{className:j.a.UserLayout,children:[Object(r.jsx)(f,{}),n]}):Object(r.jsx)("h1",{className:"heading",children:"Fetching user..."}),Object(r.jsx)(c.a,{})]})}}},[["avq6",0,2,1,3]]]);