_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"+kQf":function(e,t,n){},"0qRg":function(e,t,n){"use strict";var r=n("nKUr"),c=n("q1tI"),o=n("Uw7I"),a=n("GDVR"),i=n("xGi3"),s=n("GB7l"),u=n("jcvg"),l=n("wfTj");t.a=function(e){var t=e.children,n=Object(c.useContext)(u.a),f=n[0],d=(n[1],Object(c.useContext)(l.a)),j=d[0];d[1];return Object(r.jsxs)(c.Fragment,{children:[!f&&j?Object(r.jsx)(c.Fragment,{children:"admin"===j.role?Object(r.jsx)(a.a,{}):Object(r.jsx)(s.a,{})}):Object(r.jsx)(i.a,{}),Object(r.jsx)("main",{children:t}),Object(r.jsx)(o.a,{})]})}},"20a2":function(e,t,n){e.exports=n("nOHt")},FPDb:function(e,t,n){e.exports={footer:"Footer_footer__ZxQMm"}},GB7l:function(e,t,n){"use strict";var r=n("nKUr"),c=n("k0rj"),o=n("YFqc"),a=n.n(o),i=n("h6H3"),s=function(){return Object(r.jsxs)("menu",{id:"menu",children:[Object(r.jsx)("div",{id:"menu-icon",onClick:i.a,children:"Menu"}),Object(r.jsxs)("nav",{id:"nav",children:[Object(r.jsx)(a.a,{href:"/",children:"Home"}),Object(r.jsx)(a.a,{href:"/user/dashboard",children:"Dashboard"}),Object(r.jsx)(a.a,{href:"/user/auth/logout",children:"Logout"})]})]})},u=n("+kQf"),l=n.n(u);t.a=function(){return Object(r.jsxs)("header",{id:l.a.header,className:"header",children:[Object(r.jsx)(c.a,{}),Object(r.jsx)(s,{})]})}},GDVR:function(e,t,n){"use strict";var r=n("nKUr"),c=n("q1tI"),o=n("jcvg"),a=n("k0rj"),i=n("YFqc"),s=n.n(i),u=n("h6H3"),l=function(){return Object(r.jsxs)("menu",{id:"menu",children:[Object(r.jsx)("div",{id:"menu-icon",onClick:u.a,children:"Menu"}),Object(r.jsxs)("nav",{id:"nav",children:[Object(r.jsx)(s.a,{href:"/",children:"Home"}),Object(r.jsx)(s.a,{href:"/admin/dashboard",children:"Dashboard"}),Object(r.jsx)(s.a,{href:"/user/auth/logout",children:"Logout"})]})]})},f=n("GMIE"),d=n.n(f);t.a=function(){var e=Object(c.useContext)(o.a),t=e[0];e[1];return Object(r.jsxs)("header",{id:d.a.header,className:"header",children:[Object(r.jsx)(a.a,{}),t?Object(r.jsx)(c.Fragment,{}):Object(r.jsx)(l,{})]})}},GMIE:function(e,t,n){},Izfo:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/auth/logout",function(){return n("iycA")}])},Nlzp:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("o0o1"),c=n.n(r),o=n("HaE+"),a=n("vDqi"),i=n.n(a),s=function(){var e=Object(o.a)(c.a.mark((function e(t,n,r,o,a){var s,u,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),s="/api/v1/".concat(n),e.prev=2,e.next=5,i.a[t](s,o);case 5:return u=e.sent,l=u.data,e.abrupt("return",l);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n,r,c,o){return e.apply(this,arguments)}}()},Uw7I:function(e,t,n){"use strict";var r=n("nKUr"),c=n("FPDb"),o=n.n(c);t.a=function(){return Object(r.jsx)("footer",{id:o.a.footer,children:Object(r.jsx)("h1",{children:"Footer"})})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var o=c(n("q1tI")),a=n("elyg"),i=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),c=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,a.resolveHref)(c,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,a.resolveHref)(c,e.as):i||o}}),[c,e.href,e.as]),d=f.href,j=f.as,h=e.children,b=e.replace,v=e.shallow,p=e.scroll,x=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var O=o.Children.only(h),g=O&&"object"===typeof O&&O.ref,m=(0,s.useIntersection)({rootMargin:"200px"}),y=r(m,2),_=y[0],w=y[1],L=o.default.useCallback((function(e){_(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,_]);(0,o.useEffect)((function(){var e=w&&t&&(0,a.isLocalURL)(d),r="undefined"!==typeof x?x:n&&n.locale,c=u[d+"%"+j+(r?"%"+r:"")];e&&!c&&l(n,d,j,{locale:r})}),[j,d,w,x,t,n]);var E={ref:L,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:o,locale:s,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,d,j,b,v,p,x)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),l(n,d,j,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var M="undefined"!==typeof x?x:n&&n.locale,k=(0,a.getDomainLocale)(j,M,n&&n.locales,n&&n.domainLocales);E.href=k||(0,a.addBasePath)((0,a.addLocale)(j,M,n&&n.defaultLocale))}return o.default.cloneElement(O,E)};t.default=f},cpSV:function(e,t,n){e.exports={logo:"Logo_logo__3vQhM",logoLast:"Logo_logoLast__WQe-D",round:"Logo_round__34V1l"}},h6H3:function(e,t,n){"use strict";t.a=function(){var e=document.getElementById("nav").style;return""===e.visibility?(e.opacity=1,e.visibility="visible"):"hidden"===e.visibility?(e.visibility="visible",e.opacity=1):"visible"===e.visibility?(e.visibility="hidden",e.opacity=0):void 0}},iycA:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),c=n("o0o1"),o=n.n(c),a=n("HaE+"),i=n("q1tI"),s=n("Nlzp"),u=n("0qRg"),l=n("wfTj"),f=n("20a2");t.default=function(){var e=Object(f.useRouter)(),t=Object(i.useContext)(l.a),n=t[0],c=t[1];return Object(i.useEffect)((function(){n&&function(){var t=Object(a.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.a)("GET","users/logout","logout");case 2:return t.sent,localStorage.removeItem("token"),c(null),t.abrupt("return",e.push("/user/auth/login"));case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[]),Object(r.jsx)(u.a,{children:Object(r.jsx)("div",{className:"content",children:n?Object(r.jsx)("h1",{classname:"heading",children:"Logging out..."}):Object(r.jsx)("h1",{className:"heading",children:"Logged out"})})})}},k0rj:function(e,t,n){"use strict";var r=n("nKUr"),c=n("YFqc"),o=n.n(c),a=n("cpSV"),i=n.n(a);t.a=function(){return Object(r.jsx)(o.a,{href:"/",passHref:!0,children:Object(r.jsxs)("button",{className:i.a.logo,children:["HTML",Object(r.jsxs)("span",{className:i.a.logoLast,children:[Object(r.jsx)("span",{className:i.a.round,children:"W"}),"P"]})]})})}},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),c=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=(0,o.useRef)(),u=(0,o.useState)(!1),l=r(u,2),f=l[0],d=l[1],j=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){i||f||(0,a.default)((function(){return d(!0)}))}),[f]),[j,f]};var o=n("q1tI"),a=c(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var s=new Map},xGi3:function(e,t,n){"use strict";var r=n("nKUr"),c=n("q1tI"),o=n("jcvg"),a=n("k0rj"),i=n("YFqc"),s=n.n(i),u=n("h6H3"),l=function(){return Object(r.jsxs)("menu",{id:"menu",children:[Object(r.jsx)("div",{id:"menu-icon",onClick:u.a,children:"Menu"}),Object(r.jsxs)("nav",{id:"nav",children:[Object(r.jsx)(s.a,{href:"/",children:"Home"}),Object(r.jsx)(s.a,{href:"/user/auth/login",children:"Login"}),Object(r.jsx)(s.a,{href:"/user/auth/registration",children:"Register"})]})]})},f=n("y377"),d=n.n(f);t.a=function(){var e=Object(c.useContext)(o.a),t=e[0];e[1];return Object(r.jsxs)("header",{id:d.a.header,className:"header",children:[Object(r.jsx)(a.a,{}),t?Object(r.jsx)(c.Fragment,{}):Object(r.jsx)(l,{})]})}},y377:function(e,t,n){}},[["Izfo",0,2,1,3]]]);