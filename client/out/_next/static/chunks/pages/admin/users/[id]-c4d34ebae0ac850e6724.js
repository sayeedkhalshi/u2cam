_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(a.default.useContext(i.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,i=e.hasQuery,s=void 0!==i&&i;return n||a&&s}},"20a2":function(e,t,n){e.exports=n("nOHt")},"2QwA":function(e,t,n){e.exports={headerSearch:"HeaderSearch_headerSearch__3DCik"}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},s=n("lwAK"),c=n("FYa8"),o=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var i=!0,s=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){s=!0;var c=a.key.slice(a.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(var o=0,u=f.length;o<u;o++){var d=f[o];if(a.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?i=!1:n.add(d);else{var l=a.props[d],h=r[d]||new Set;"name"===d&&s||!h.has(l)?(h.add(l),r[d]=h):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,a.useContext)(s.AmpStateContext),r=(0,a.useContext)(c.HeadManagerContext);return a.default.createElement(i.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,o.isInAmpMode)(n)},t)}p.rewind=function(){};var j=p;t.default=j},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},GDVR:function(e,t,n){"use strict";var r=n("nKUr"),a=n("q1tI"),i=n("jcvg"),s=n("k0rj"),c=n("YFqc"),o=n.n(c),u=n("Sr1/"),d=n("wfTj"),l=function(){var e=Object(a.useContext)(d.a);e[0],e[1];return Object(r.jsxs)("menu",{id:"menu",children:[Object(r.jsx)("div",{id:"menu-icon",onClick:u.a,children:"Menu"}),Object(r.jsxs)("nav",{id:"nav",children:[Object(r.jsx)(o.a,{href:"/",children:"Home"}),Object(r.jsxs)("a",{href:"/admin/dashboard",children:[Object(r.jsx)("img",{src:"/images/icons/photo.svg",width:"30"}),Object(r.jsxs)("ul",{className:"subMenu",children:[Object(r.jsx)("li",{children:Object(r.jsx)(o.a,{href:"/user/auth/logout",children:"Logout"})}),Object(r.jsx)("li",{children:Object(r.jsx)(o.a,{href:"/user/profile",children:"Profile"})})]})]})]})]})},f=n("VVXf"),h=n("GMIE"),p=n.n(h);t.a=function(){var e=Object(a.useContext)(i.a),t=e[0];e[1];return Object(r.jsxs)("header",{id:p.a.header,className:"header",children:[Object(r.jsx)(s.a,{}),t?Object(r.jsx)(a.Fragment,{}):Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)(f.a,{}),Object(r.jsx)(l,{})]})]})}},GMIE:function(e,t,n){},HBKp:function(e,t,n){"use strict";var r=n("nKUr"),a=n("20a2"),i=n("q1tI"),s=n("Uw7I"),c=n("GDVR"),o=n("YFqc"),u=n.n(o),d=n("HGLW"),l=n.n(d),f=function(){return Object(r.jsx)("div",{className:l.a.sidebar,children:Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{className:l.a.adminLinks,children:[Object(r.jsx)(u.a,{href:"/admin/users/list-users",children:"Users"}),Object(r.jsxs)("ul",{className:l.a.subMenu,children:[Object(r.jsx)("li",{className:"".concat(l.a.adminLinks),children:Object(r.jsx)(u.a,{href:"/admin/users/list-users",children:"Search Users"})}),Object(r.jsx)("li",{className:"".concat(l.a.adminLinks),children:Object(r.jsx)(u.a,{href:"/admin/users/create-user",children:"Create User"})})]})]}),Object(r.jsx)("li",{className:l.a.adminLinks,children:Object(r.jsx)(u.a,{href:"/admin/profile",children:"Profile"})})]})})},h=n("jcvg"),p=n("wfTj"),j=n("RPPH"),m=n.n(j);t.a=function(e){var t=e.children,n=Object(i.useContext)(h.a),o=n[0],u=(n[1],Object(i.useContext)(p.a)),d=u[0],l=(u[1],Object(a.useRouter)());return Object(i.useEffect)((function(){if(!o)return d?"admin"===d.role?void 0:l.push("/admin/unauthorized"):l.push("/user/auth/login")}),[o,d]),Object(r.jsxs)(i.Fragment,{children:[Object(r.jsx)(c.a,{}),!o&&d?Object(r.jsxs)("main",{className:m.a.AdminLayout,children:[Object(r.jsx)(f,{}),t]}):Object(r.jsx)("h1",{className:"heading",children:"Fetching user..."}),Object(r.jsx)(s.a,{})]})}},HGLW:function(e,t,n){e.exports={sidebar:"AdminSidebar_sidebar__2vcDe",adminLinks:"AdminSidebar_adminLinks__3SBUJ",subMenu:"AdminSidebar_subMenu__3kZ4n"}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var r=n("Ijbi"),a=n("EbDI"),i=n("ZhPi"),s=n("Bnag");e.exports=function(e){return r(e)||a(e)||i(e)||s()}},RPPH:function(e,t,n){e.exports={AdminLayout:"AdminLayout_AdminLayout__2W35P"}},VVXf:function(e,t,n){"use strict";var r=n("nKUr"),a=n("q1tI"),i=(n("CBpi"),n("2QwA")),s=n.n(i);t.a=function(){var e=Object(a.useState)(!1),t=(e[0],e[1],Object(a.useState)(null));t[0],t[1];return Object(r.jsx)("div",{className:s.a.headerSearch,children:Object(r.jsx)("form",{children:Object(r.jsx)("input",{type:"text",placeholder:"Search"})})})}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),a=n("lwsE"),i=n("W8MJ"),s=(n("PJYZ"),n("7W2i")),c=n("a1gu"),o=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var a=o(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),l=function(e){s(n,e);var t=u(n);function n(e){var i;return a(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},a1gu:function(e,t,n){var r=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}},g4pe:function(e,t,n){e.exports=n("8Kt/")},ioCs:function(e,t,n){e.exports={register:"SingleUser_register__1aIxa",registerContent:"SingleUser_registerContent__1E8rC"}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},pF3x:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/users/[id]",function(){return n("yy1l")}])},yy1l:function(e,t,n){"use strict";n.r(t),n.d(t,"SubmitBtnExtra",(function(){return m}));var r=n("nKUr"),a=n("o0o1"),i=n.n(a),s=n("HaE+"),c=n("20a2"),o=n("g4pe"),u=n.n(o),d=n("ioCs"),l=n.n(d),f=n("CBpi"),h=n("q1tI"),p=n("HBKp"),j=n("Nlzp"),m=function(){return Object(r.jsx)(h.Fragment,{})};t.default=function(){var e=Object(c.useRouter)().query.id,t=Object(h.useState)(null),n=t[0],a=t[1],o=Object(h.useState)(""),d=o[0],b=o[1],v=Object(h.useState)(!1),x=v[0],O=v[1],y=Object(h.useState)(null),g=y[0],_=y[1],w=Object(h.useState)(null),C=w[0],S=w[1];return Object(h.useEffect)((function(){e&&function(){var t=Object(s.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(j.a)("get","users/".concat(e),"get user");case 2:n=t.sent,a(n.data.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e,x]),Object(h.useEffect)((function(){x&&g&&b("User updated successfully")}),[x,g]),Object(h.useEffect)((function(){if(n){var e=[{fieldType:"CustomTypeTextField",label:"User Type",customTypesArray:["user","admin","moderator"],initFocus:!0,maxChar:32,minChar:2,isRequired:!0,fieldName:"role",value:null===n||void 0===n?void 0:n.role,placeholder:null===n||void 0===n?void 0:n.role},{fieldType:"TextField",label:"Name",initFocus:!1,maxChar:32,minChar:2,isRequired:!0,fieldName:"name",value:null===n||void 0===n?void 0:n.name,placeholder:null===n||void 0===n?void 0:n.name},{fieldType:"EmailField",label:"Email",initFocus:!1,isRequired:!0,fieldName:"email",value:null===n||void 0===n?void 0:n.email,placeholder:null===n||void 0===n?void 0:n.email},{fieldType:"TextField",label:"Phone",initFocus:!1,maxChar:32,minChar:4,isRequired:!0,fieldName:"phone",value:null===n||void 0===n?void 0:n.phone,placeholder:null===n||void 0===n?void 0:n.phone}];S(e)}}),[n]),Object(r.jsxs)(p.a,{children:[Object(r.jsx)(u.a,{children:Object(r.jsx)("title",{children:"User Update - Admin"})}),Object(r.jsx)("div",{className:"content",children:n?Object(r.jsxs)("div",{id:l.a.register,children:[Object(r.jsx)("h1",{className:"heading",children:n.name}),Object(r.jsx)("img",{src:"/images/icons/photo.svg",width:70,height:70}),Object(r.jsxs)("div",{id:l.a.registerContent,children:[Object(r.jsx)("h5",{className:"heading success-message",children:d}),Object(r.jsx)(f.a,{setSuccess:O,setReturnValue:_,submitValue:"Update",reason:"Update user",reqType:"patch",url:"users/".concat(e),formBuilder:C,submitBtnExtra:Object(r.jsx)(m,{})})]})]}):""})]})}}},[["pF3x",0,2,1,3,4]]]);