_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"+kQf":function(e,n,t){},"20a2":function(e,n,t){e.exports=t("nOHt")},F57A:function(e,n,t){e.exports={profile:"CommonProfile_profile__15BN0"}},FPDb:function(e,n,t){e.exports={footer:"Footer_footer__ZxQMm"}},GB7l:function(e,n,t){"use strict";var r=t("nKUr"),o=t("k0rj"),i=t("YFqc"),c=t.n(i),s=t("h6H3"),a=function(){return Object(r.jsxs)("menu",{id:"menu",children:[Object(r.jsx)("div",{id:"menu-icon",onClick:s.a,children:"Menu"}),Object(r.jsxs)("nav",{id:"nav",children:[Object(r.jsx)(c.a,{href:"/",children:"Home"}),Object(r.jsx)(c.a,{href:"/user/dashboard",children:"Dashboard"}),Object(r.jsx)(c.a,{href:"/user/auth/logout",children:"Logout"})]})]})},u=t("+kQf"),l=t.n(u);n.a=function(){return Object(r.jsxs)("header",{id:l.a.header,className:"header",children:[Object(r.jsx)(o.a,{}),Object(r.jsx)(a,{})]})}},IRL4:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),o=t("nRVj"),i=t("vq1L");n.default=function(){return Object(r.jsx)(i.a,{children:Object(r.jsx)(o.a,{})})}},Tij5:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/profile",function(){return t("IRL4")}])},Uw7I:function(e,n,t){"use strict";var r=t("nKUr"),o=t("FPDb"),i=t.n(o);n.a=function(){return Object(r.jsx)("footer",{id:i.a.footer,children:Object(r.jsx)("h1",{children:"Footer"})})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var i=o(t("q1tI")),c=t("elyg"),s=t("nOHt"),a=t("vNVm"),u={};function l(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,s.useRouter)(),o=t&&t.pathname||"/",f=i.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),i=t[0],s=t[1];return{href:i,as:e.as?(0,c.resolveHref)(o,e.as):s||i}}),[o,e.href,e.as]),d=f.href,j=f.as,h=e.children,b=e.replace,v=e.shallow,p=e.scroll,x=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var O=i.Children.only(h),_=O&&"object"===typeof O&&O.ref,m=(0,a.useIntersection)({rootMargin:"200px"}),g=r(m,2),y=g[0],L=g[1],N=i.default.useCallback((function(e){y(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,y]);(0,i.useEffect)((function(){var e=L&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof x?x:t&&t.locale,o=u[d+"%"+j+(r?"%"+r:"")];e&&!o&&l(t,d,j,{locale:r})}),[j,d,L,x,n,t]);var U={ref:N,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,s,a){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:i,locale:a,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,t,d,j,b,v,p,x)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),l(t,d,j,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var w="undefined"!==typeof x?x:t&&t.locale,M=(0,c.getDomainLocale)(j,w,t&&t.locales,t&&t.domainLocales);U.href=M||(0,c.addBasePath)((0,c.addLocale)(j,w,t&&t.defaultLocale))}return i.default.cloneElement(O,U)};n.default=f},cpSV:function(e,n,t){e.exports={logo:"Logo_logo__3vQhM",logoLast:"Logo_logoLast__WQe-D",round:"Logo_round__34V1l"}},gMxB:function(e,n,t){e.exports={sidebar:"UserSidebar_sidebar__2Tc6I",userLinks:"UserSidebar_userLinks__SLIF3",subMenu:"UserSidebar_subMenu__ySzoP"}},h6H3:function(e,n,t){"use strict";n.a=function(){var e=document.getElementById("nav").style;return""===e.visibility?(e.opacity=1,e.visibility="visible"):"hidden"===e.visibility?(e.visibility="visible",e.opacity=1):"visible"===e.visibility?(e.visibility="hidden",e.opacity=0):void 0}},k0rj:function(e,n,t){"use strict";var r=t("nKUr"),o=t("YFqc"),i=t.n(o),c=t("cpSV"),s=t.n(c);n.a=function(){return Object(r.jsx)(i.a,{href:"/",passHref:!0,children:Object(r.jsxs)("button",{className:s.a.logo,children:["HTML",Object(r.jsxs)("span",{className:s.a.logoLast,children:[Object(r.jsx)("span",{className:s.a.round,children:"W"}),"P"]})]})})}},nRVj:function(e,n,t){"use strict";var r=t("nKUr"),o=t("q1tI"),i=t("wfTj"),c=t("F57A"),s=t.n(c);n.a=function(){var e=Object(o.useContext)(i.a),n=e[0];e[1];return Object(r.jsx)("div",{className:"content",children:Object(r.jsxs)("div",{className:s.a.profile,children:[Object(r.jsx)("h1",{className:"heading",children:"Profile"}),Object(r.jsx)("h5",{className:s.a.boldText,children:null===n||void 0===n?void 0:n.name}),Object(r.jsx)("h5",{className:s.a.boldText,children:null===n||void 0===n?void 0:n.email}),Object(r.jsx)("h5",{className:s.a.boldText,children:null===n||void 0===n?void 0:n.phone})]})})}},oBUv:function(e,n,t){e.exports={UserLayout:"UserLayout_UserLayout__ZENkR"}},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!s,o=(0,i.useRef)(),u=(0,i.useState)(!1),l=r(u,2),f=l[0],d=l[1],j=(0,i.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||f||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=a.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return a.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,c=r.elements;return c.set(e,n),i.observe(e),function(){c.delete(e),i.unobserve(e),0===c.size&&(i.disconnect(),a.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,i.useEffect)((function(){s||f||(0,c.default)((function(){return d(!0)}))}),[f]),[j,f]};var i=t("q1tI"),c=o(t("0G5g")),s="undefined"!==typeof IntersectionObserver;var a=new Map},vq1L:function(e,n,t){"use strict";var r=t("nKUr"),o=t("20a2"),i=t("q1tI"),c=t("Uw7I"),s=t("GB7l"),a=t("YFqc"),u=t.n(a),l=t("gMxB"),f=t.n(l),d=function(){return Object(r.jsx)("div",{className:f.a.sidebar,children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{className:f.a.userLinks,children:Object(r.jsx)(u.a,{href:"/user/profile",children:"Profile"})}),Object(r.jsx)("li",{className:f.a.userLinks,children:Object(r.jsx)(u.a,{href:"/user/uploads",children:"Uploads"})})]})})},j=t("jcvg"),h=t("wfTj"),b=t("oBUv"),v=t.n(b);n.a=function(e){var n=e.children,t=Object(i.useContext)(j.a),a=t[0],u=(t[1],Object(i.useContext)(h.a)),l=u[0],f=(u[1],Object(o.useRouter)());return Object(i.useEffect)((function(){if(!a)return l?void 0:f.push("/user/auth/login")}),[l]),Object(r.jsxs)(i.Fragment,{children:[Object(r.jsx)(s.a,{}),!a&&l?Object(r.jsxs)("main",{className:v.a.UserLayout,children:[Object(r.jsx)(d,{}),n]}):Object(r.jsx)("h1",{className:"heading",children:"Fetching user..."}),Object(r.jsx)(c.a,{})]})}}},[["Tij5",0,2,1,3]]]);