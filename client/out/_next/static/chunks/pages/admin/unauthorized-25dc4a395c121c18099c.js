_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"+kQf":function(e,t,n){},"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(c.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},c=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,c=e.hasQuery,i=void 0!==c&&c;return n||a&&i}},"0qRg":function(e,t,n){"use strict";var r=n("nKUr"),a=n("q1tI"),c=n("Uw7I"),i=n("GDVR"),o=n("xGi3"),u=n("GB7l"),s=n("jcvg"),d=n("wfTj");t.a=function(e){var t=e.children,n=Object(a.useContext)(s.a),f=n[0],l=(n[1],Object(a.useContext)(d.a)),h=l[0];l[1];return Object(r.jsxs)(a.Fragment,{children:[!f&&h?Object(r.jsx)(a.Fragment,{children:"admin"===h.role?Object(r.jsx)(i.a,{}):Object(r.jsx)(u.a,{})}):Object(r.jsx)(o.a,{}),Object(r.jsx)("main",{children:t}),Object(r.jsx)(c.a,{})]})}},"2QwA":function(e,t,n){e.exports={headerSearch:"HeaderSearch_headerSearch__3DCik"}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var c=r?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(n,a,c):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),c=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),o=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var c=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var o=a.key.slice(a.key.indexOf("$")+1);e.has(o)?c=!1:e.add(o)}switch(a.type){case"title":case"base":t.has(a.type)?c=!1:t.add(a.type);break;case"meta":for(var u=0,s=l.length;u<s;u++){var d=l[u];if(a.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?c=!1:n.add(d);else{var f=a.props[d],h=r[d]||new Set;"name"===d&&i||!h.has(f)?(h.add(f),r[d]=h):c=!1}}}return c}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function j(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(o.HeadManagerContext);return a.default.createElement(c.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}j.rewind=function(){};var p=j;t.default=p},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},GB7l:function(e,t,n){"use strict";var r=n("nKUr"),a=n("k0rj"),c=n("YFqc"),i=n.n(c),o=n("Sr1/"),u=function(){return Object(r.jsxs)("menu",{id:"menu",children:[Object(r.jsx)("div",{id:"menu-icon",onClick:o.a,children:"Menu"}),Object(r.jsxs)("nav",{id:"nav",children:[Object(r.jsx)(i.a,{href:"/",children:"Home"}),Object(r.jsxs)("a",{href:"/admin/dashboard",children:[Object(r.jsx)("img",{src:"/images/icons/photo.svg",width:"30"}),Object(r.jsxs)("ul",{className:"subMenu",children:[Object(r.jsx)("li",{children:Object(r.jsx)(i.a,{href:"/user/auth/logout",children:"Logout"})}),Object(r.jsx)("li",{children:Object(r.jsx)(i.a,{href:"/user/profile",children:"Profile"})})]})]})]})]})},s=n("VVXf"),d=n("+kQf"),f=n.n(d);t.a=function(){return Object(r.jsxs)("header",{id:f.a.header,className:"header",children:[Object(r.jsx)(a.a,{}),Object(r.jsx)(s.a,{}),Object(r.jsx)(u,{})]})}},GDVR:function(e,t,n){"use strict";var r=n("nKUr"),a=n("q1tI"),c=n("jcvg"),i=n("k0rj"),o=n("YFqc"),u=n.n(o),s=n("Sr1/"),d=n("wfTj"),f=function(){var e=Object(a.useContext)(d.a);e[0],e[1];return Object(r.jsxs)("menu",{id:"menu",children:[Object(r.jsx)("div",{id:"menu-icon",onClick:s.a,children:"Menu"}),Object(r.jsxs)("nav",{id:"nav",children:[Object(r.jsx)(u.a,{href:"/",children:"Home"}),Object(r.jsxs)("a",{href:"/admin/dashboard",children:[Object(r.jsx)("img",{src:"/images/icons/photo.svg",width:"30"}),Object(r.jsxs)("ul",{className:"subMenu",children:[Object(r.jsx)("li",{children:Object(r.jsx)(u.a,{href:"/user/auth/logout",children:"Logout"})}),Object(r.jsx)("li",{children:Object(r.jsx)(u.a,{href:"/user/profile",children:"Profile"})})]})]})]})]})},l=n("VVXf"),h=n("GMIE"),j=n.n(h);t.a=function(){var e=Object(a.useContext)(c.a),t=e[0];e[1];return Object(r.jsxs)("header",{id:j.a.header,className:"header",children:[Object(r.jsx)(i.a,{}),t?Object(r.jsx)(a.Fragment,{}):Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)(l.a,{}),Object(r.jsx)(f,{})]})]})}},GMIE:function(e,t,n){},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},"Lk/2":function(e,t,n){e.exports={unauthorized:"Unauthorized_unauthorized__S3Off"}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),c=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||a(e)||c(e)||i()}},VVXf:function(e,t,n){"use strict";var r=n("nKUr"),a=n("q1tI"),c=(n("CBpi"),n("2QwA")),i=n.n(c);t.a=function(){var e=Object(a.useState)(!1),t=(e[0],e[1],Object(a.useState)(null));t[0],t[1];return Object(r.jsx)("div",{className:i.a.headerSearch,children:Object(r.jsx)("form",{children:Object(r.jsx)("input",{type:"text",placeholder:"Search"})})})}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),c=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),o=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return o(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),f=function(e){i(n,e);var t=s(n);function n(e){var c;return a(this,n),(c=t.call(this,e))._hasHeadManager=void 0,c.emitChange=function(){c._hasHeadManager&&c.props.headManager.updateHead(c.props.reduceComponentsToState(r(c.props.headManager.mountedInstances),c.props))},c._hasHeadManager=c.props.headManager&&c.props.headManager.mountedInstances,c}return c(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=f},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},nLwu:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/unauthorized",function(){return n("s+i4")}])},"s+i4":function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("g4pe"),c=n.n(a),i=n("0qRg"),o=n("Lk/2"),u=n.n(o);t.default=function(){return Object(r.jsxs)(i.a,{children:[Object(r.jsx)(c.a,{children:Object(r.jsx)("title",{children:"Unauthorized"})}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("h1",{className:"heading",children:"Unauthorized page"}),Object(r.jsx)("div",{className:u.a.unauthorized})]})]})}},xGi3:function(e,t,n){"use strict";var r=n("nKUr"),a=n("q1tI"),c=n("jcvg"),i=n("k0rj"),o=n("YFqc"),u=n.n(o),s=n("Sr1/"),d=function(){return Object(r.jsxs)("menu",{id:"menu",children:[Object(r.jsx)("div",{id:"menu-icon",onClick:s.a,children:"Menu"}),Object(r.jsxs)("nav",{id:"nav",children:[Object(r.jsx)(u.a,{href:"/",children:"Home"}),Object(r.jsx)(u.a,{href:"/user/auth/login",children:"Login"}),Object(r.jsx)(u.a,{href:"/user/auth/registration",children:"Register"})]})]})},f=n("y377"),l=n.n(f);t.a=function(){var e=Object(a.useContext)(c.a),t=e[0];e[1];return Object(r.jsxs)("header",{id:l.a.header,className:"header",children:[Object(r.jsx)(i.a,{}),t?Object(r.jsx)(a.Fragment,{}):Object(r.jsx)(d,{})]})}},y377:function(e,t,n){}},[["nLwu",0,2,1,3,4]]]);