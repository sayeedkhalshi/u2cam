_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"+kQf":function(e,t,r){},"/03o":function(e,t,r){e.exports={designer:"DesignPopup_designer__seEw0",colorInput:"DesignPopup_colorInput__EuvpQ"}},"0Z19":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/editor/[id]",function(){return r("DEcu")}])},"0qRg":function(e,t,r){"use strict";var n=r("nKUr"),o=r("q1tI"),i=r("Uw7I"),c=r("GDVR"),l=r("xGi3"),a=r("GB7l"),s=r("jcvg"),d=r("wfTj");t.a=function(e){var t=e.children,r=Object(o.useContext)(s.a),u=r[0],b=(r[1],Object(o.useContext)(d.a)),p=b[0];b[1];return Object(n.jsxs)(o.Fragment,{children:[!u&&p?Object(n.jsx)(o.Fragment,{children:"admin"===p.role?Object(n.jsx)(c.a,{}):Object(n.jsx)(a.a,{})}):Object(n.jsx)(l.a,{}),Object(n.jsx)("main",{children:t}),Object(n.jsx)(i.a,{})]})}},"20a2":function(e,t,r){e.exports=r("nOHt")},"2WuW":function(e,t,r){e.exports={editor:"SingleEditor_editor__2INp2",convert:"SingleEditor_convert__OoFrb"}},"6b9v":function(e,t,r){"use strict";var n=r("nKUr"),o=r("o0o1"),i=r.n(o),c=r("HaE+"),l=r("YFqc"),a=r.n(l),s=r("q1tI"),d=r("Y1PG"),u=r.n(d),b=r("Nlzp");t.a=function(){var e=Object(s.useState)(null),t=e[0],r=e[1];return Object(s.useEffect)((function(){(function(){var e=Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(b.a)("get","uploads");case 3:return t=e.sent,console.log(t.data.data),e.abrupt("return",r(t.data.data));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",r([]));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.useEffect)((function(){if(window)for(var e=document.getElementsByClassName("theme-links"),t=0;t<e.length;t++){var r=e[t].getElementsByTagName("a")[0];r.href===window.location.href&&(document.getElementsByClassName("selected-theme")[0]&&document.getElementsByClassName("selected-theme")[0].classList.remove("selected-theme"),r.classList.add("selected-theme"))}})),Object(n.jsx)("div",{className:u.a.sidebar,children:Object(n.jsx)("ul",{id:"theme-name-sidebar",children:null===t||void 0===t?void 0:t.map((function(e){return Object(n.jsx)("li",{className:"".concat(u.a.themeLinks," theme-links"),children:Object(n.jsx)(a.a,{href:"/editor/".concat(e._id,"/"),children:e.name})},e._id)}))})})}},DEcu:function(e,t,r){"use strict";r.r(t);var n=r("nKUr"),o=r("o0o1"),i=r.n(o),c=r("HaE+"),l=r("g4pe"),a=r.n(l),s=r("20a2"),d=r("q1tI"),u=r.n(d),b=r("Nlzp"),p=r("6b9v"),j=r("0qRg"),h=r("2WuW"),f=r.n(h),m=r("Qetd"),v=r.n(m),g=function(){return(g=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},x=function(e){for(var t=e.url,r=e.allowFullScreen,n=e.position,o=e.display,i=e.height,c=e.width,l=e.overflow,a=e.styles,s=e.onLoad,d=e.onMouseOver,b=e.onMouseOut,p=e.scrolling,j=e.id,h=e.frameBorder,f=e.ariaHidden,m=e.sandbox,x=e.allow,O=e.className,y=e.title,w=e.ariaLabel,E=e.ariaLabelledby,S=e.name,k=e.target,L=e.loading,N=e.importance,C=e.referrerpolicy,_=e.allowpaymentrequest,B=e.src,D=v()({src:B||t,target:k||null,style:{position:n||null,display:o||"block",overflow:l||null},scrolling:p||null,allowpaymentrequest:_||null,importance:N||null,sandbox:m||null,loading:L||null,styles:a||null,name:S||null,className:O||null,referrerpolicy:C||null,title:y||null,allow:x||null,id:j||null,"aria-labelledby":E||null,"aria-hidden":f||null,"aria-label":w||null,width:c||null,height:i||null,onLoad:s||null,onMouseOver:d||null,onMouseOut:b||null}),I=Object.create(null),T=0,P=Object.keys(D);T<P.length;T++){var A=P[T];null!=D[A]&&(I[A]=D[A])}for(var M=0,q=Object.keys(I.style);M<q.length;M++){var F=q[M];null==I.style[F]&&delete I.style[F]}if(r)if("allow"in I){var G=I.allow.replace("fullscreen","");I.allow=("fullscreen "+G.trim()).trim()}else I.allow="fullscreen";return h>=0&&(I.style.hasOwnProperty("border")||(I.style.border=h)),u.a.createElement("iframe",g({},I))},O=r("YFqc"),y=r.n(O),w=function(){var e=document.getElementById("edit-frame");return e.contentDocument?e.contentDocument:e.contentWindow.document},E=function(){var e=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!document.getElementById("edit-frame")){e.next=11;break}return e.next=3,w();case 3:if("complete"!=e.sent.readyState){e.next=8;break}return e.abrupt("return",!0);case 8:return e.abrupt("return",!1);case 9:e.next=12;break;case 11:return e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=r("wVO0"),k=r.n(S),L=function(e){var t=e.editorLoader,r=e.initialLoader,o=e.loadingIcon,i=e.popupMessage;return t||r?Object(n.jsxs)("div",{id:k.a.popupEditor,children:[Object(n.jsx)("div",{className:k.a.relative,children:o}),Object(n.jsx)("p",{children:i})]}):Object(n.jsx)(d.Fragment,{})},N=r("pnCd"),C=r.n(N),_=function(){return Object(n.jsx)("img",{src:"/images/icons/loader.svg",width:"100",className:C.a.loadingImg})},B=function(){var e=w(),t="\n        html {\n          --scrollbarBG:  #7fd09a;\n          --thumbBG: #2479ac;\n        }\n        html::-webkit-scrollbar {\n          width: 11px;\n        }\n        html {\n          scrollbar-width: thin;\n          scrollbar-color: var(--thumbBG) var(--scrollbarBG);\n        }\n        html::-webkit-scrollbar-track {\n          background: var(--scrollbarBG);\n        }\n        html::-webkit-scrollbar-thumb {\n          background-color: var(--thumbBG) ;\n          border-radius: 6px;\n          border: 3px solid var(--scrollbarBG);\n        }\n        .editor-border { border: 1px solid #999 !important; box-shadow: 0 0 3px #444 !important}\n        .editor-options-wp-converter-78235{\n            position:absolute !important; \n            background: #ccd0c4 !important; \n            z-index:999 !important;\n            padding: 10px;\n            box-shadow: 0 0 3px #555;\n            transition: background-color 0.5s\n\n        }\n        .editor-options-wp-converter-78235 span{\n            color: #666 !important; \n            font-size: 13px !important; \n            font-weight: normal;\n            text-decoration: none;\n            padding: 5px;\n            cursor: pointer;\n            \n        }\n        .editor-options-wp-converter-78235 span:hover{\n            background: #fff\n        }\n        .draggable-wp364 {\n          cursor: pointer;\n        }\n        .dropable-wp489 {\n\t        border: 1px dotted red;\n          margin: 5px !important;\n\n        }\n        .dragable-wp364 {\n          border: 2px dotted green;\n        }\n        [draggable] * {pointer-events: none;}\n\n    ",r=e.head||e.getElementsByTagName("head")[0],n=document.createElement("style");r.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))},D=function(e){e.preventDefault()},I=function(){for(var e=w().querySelectorAll("[contenteditable]"),t=0;t<e.length;t++)e[t].setAttribute("contenteditable","false")},T=function(){for(var e=w(),t=e.getElementsByClassName("editor-border"),r=0;r<t.length;r++)t[r].classList.remove("editor-border");var n=e.getElementsByClassName("editor-options-wp-converter-78235");for(r=0;r<n.length;r++)n[r].remove();I()},P=function(e){e.currentTarget.classList.remove("editor-border"),I(),T(),w().getElementsByTagName("body")[0].removeEventListener("dragover",D)},A=r("rePB");function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function q(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?M(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"===typeof e)return G(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return G(e,t)}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw i}}}}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var H=function(){var e,t=[],r=F(w().querySelectorAll("*"));try{for(r.s();!(e=r.n()).done;){var n=e.value;if(n.style)for(var o=0,i=["",":before",":after"];o<i.length;o++){var c=getComputedStyle(n,i[o]).fontFamily;t=t.concat(c.split(/\n*,\n*/g))}}}catch(l){r.e(l)}finally{r.f()}return q(new Set(t)).map((function(e){return e.replace(/^\s*['"]([^'"]*)['"]\s*$/,"$1").trim()}))},R=r("/03o"),z=r.n(R);function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){Object(A.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var K=function(e){var t=e.showDesignPopupSet,r=e.showDesignPopup,o=e.setRightMenu,i=Object(d.useState)([]),c=i[0],l=i[1],a=Object(d.useState)({bgcolor:!1,txtcolor:!1,bordercolor:!1}),s=a[0],u=a[1],b=s.bgcolor,p=s.txtcolor,j=s.bordercolor,h=w().getElementsByClassName("editor-border")[0];Object(d.useEffect)((function(){if(r){var e=document.getElementById("wp364-bg-color"),t=document.getElementById("wp364-text-color"),n=document.getElementById("wp364-border-color"),o=getComputedStyle(h).backgroundColor,i=getComputedStyle(h).color,c=getComputedStyle(h).borderColor,l=function(e){try{return"#".concat(e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map((function(e){return parseInt(e,10).toString(16).padStart(2,"0")})).join(""))}catch(t){return!1}};console.log(o,i,c),l(c)?n.value=l(c):u(W(W({},s),{},{bordercolor:!0})),l(o)?e.value=l(o):u(W(W({},s),{},{bgcolor:!0})),l(i)?t.value=l(i):u(W(W({},s),{},{txtcolor:!0})),e.addEventListener("input",(function(){e.style.backgroundColor=e.value,u(W(W({},s),{},p&&j?{txtcolor:!0,bgcolor:!1,bordercolor:!0}:!p&&j?{txtcolor:!1,bgcolor:!1,bordercolor:!0}:p&&!j?{txtcolor:!0,bgcolor:!1,bordercolor:!1}:{txtcolor:!1,bgcolor:!1,bordercolor:!1}))})),t.addEventListener("input",(function(){t.style.backgroundColor=t.value,u(W(W({},s),{},b&&j?{txtcolor:!1,bgcolor:!0,bordercolor:!0}:!b&&j?{txtcolor:!1,bgcolor:!1,bordercolor:!0}:b&&!j?{txtcolor:!1,bgcolor:!0,bordercolor:!1}:{txtcolor:!1,bgcolor:!1,bordercolor:!1}))})),t.addEventListener("input",(function(){t.style.backgroundColor=t.value,u(W(W({},s),{},b&&p?{txtcolor:!0,bgcolor:!0,bordercolor:!1}:!b&&p?{txtcolor:!0,bgcolor:!1,bordercolor:!1}:b&&!p?{txtcolor:!1,bgcolor:!0,bordercolor:!1}:{txtcolor:!1,bgcolor:!1,bordercolor:!1}))}))}}),[r]);return Object(d.useEffect)((function(){var e=H();console.log(e),l(e)}),[]),Object(n.jsxs)("div",{className:z.a.designer,children:[Object(n.jsxs)("p",{children:["Background color:",Object(n.jsx)("input",{type:"color",id:"wp364-bg-color",className:z.a.colorInput})]}),Object(n.jsxs)("p",{children:["Font color:",Object(n.jsx)("input",{type:"color",id:"wp364-text-color",className:z.a.colorInput})]}),Object(n.jsxs)("p",{children:["Font Family:",Object(n.jsx)("select",{children:c.map((function(e){return Object(n.jsx)("option",{children:e})}))})]}),Object(n.jsxs)("p",{children:["Font Size: ",Object(n.jsx)("input",{type:"number"}),"px"]}),Object(n.jsxs)("p",{children:["Font Weight:",Object(n.jsxs)("select",{children:[Object(n.jsx)("option",{children:"thin"}),Object(n.jsx)("option",{children:"normal"}),Object(n.jsx)("option",{children:"bold"}),Object(n.jsx)("option",{children:"bolder"}),Object(n.jsx)("option",{children:"100"}),Object(n.jsx)("option",{children:"200"}),Object(n.jsx)("option",{children:"300"}),Object(n.jsx)("option",{children:"400"}),Object(n.jsx)("option",{children:"500"}),Object(n.jsx)("option",{children:"600"}),Object(n.jsx)("option",{children:"700"}),Object(n.jsx)("option",{children:"800"}),Object(n.jsx)("option",{children:"900"})]})]}),Object(n.jsxs)("p",{children:["border color:",Object(n.jsx)("input",{type:"color",id:"wp364-border-color",className:z.a.colorInput})]}),Object(n.jsxs)("p",{children:["Text Decoration:",Object(n.jsxs)("select",{children:[Object(n.jsx)("option",{children:"none"}),Object(n.jsx)("option",{children:"overline"}),Object(n.jsx)("option",{children:"line-through"}),Object(n.jsx)("option",{children:"underline"}),Object(n.jsx)("option",{children:"overline underline"}),Object(n.jsx)("option",{children:"initial"}),Object(n.jsx)("option",{children:"inherit"})]})]}),Object(n.jsxs)("p",{children:["List Style:",Object(n.jsxs)("select",{children:[Object(n.jsx)("option",{children:"circle"}),Object(n.jsx)("option",{children:"disc"}),Object(n.jsx)("option",{children:"square"}),Object(n.jsx)("option",{children:"none"}),Object(n.jsx)("option",{children:"inherit"}),Object(n.jsx)("option",{children:"decimal"}),Object(n.jsx)("option",{children:"decimal-leading-zero"}),Object(n.jsx)("option",{children:"upper-roman"}),Object(n.jsx)("option",{children:"lower-roman"})]})]}),Object(n.jsx)("button",{onClick:function(e){e.preventDefault(),console.log(b,p),b||(h.style.backgroundColor=document.getElementById("wp364-bg-color").value),p||(h.style.color=document.getElementById("wp364-text-color").value),j||(h.style.borderColor=document.getElementById("wp364-border-color").value),u(Object(A.a)({bordercolor:!1,txtcolor:!1},"bordercolor",!1)),t(!1),o(!1)},children:"Save"}),Object(n.jsx)("button",{onClick:function(e){e.preventDefault(),t(!1),o(!1)},children:"Close"})]})},V=function(e){var t=e.setRightMenu,r=e.keepSelectedSet,o=e.keepSelected,i=Object(d.useState)(!1),c=i[0],l=i[1],a=w(),s=a.getElementsByClassName("editor-border")[0];return c?Object(n.jsx)(K,{showDesignPopupSet:l,showDesignPopup:c,setRightMenu:t}):Object(n.jsxs)("ul",{className:"editor-options-wp-converter-78235",children:[Object(n.jsx)("li",{id:"add-w453",children:"Add"}),Object(n.jsx)("li",{id:"duplicate-w453",onClick:function(e){e.preventDefault();var n=s.cloneNode(!0);n.addEventListener("mouseover",(function(e){for(var t=a.getElementsByClassName("editor-border"),r=0;r<t.length;r++)t[r].classList.remove("editor-border");e.currentTarget.classList.add("editor-border")})),n.addEventListener("mouseleave",(function(e){o||e.currentTarget.classList.remove("editor-border")})),n.addEventListener("click",P),a.addEventListener?n.addEventListener("contextmenu",(function(e){e.preventDefault(),window.event.returnValue=!1;var n=e.currentTarget;T(),n.classList.add("editor-border"),r(!0),t(!0)}),!1):n.attachEvent("oncontextmenu",(function(e){e.preventDefault(),window.event.returnValue=!1;var n=e.currentTarget;T(),n.classList.add("editor-border"),r(!0),t(!0)})),s.parentNode.appendChild(n),t(!1)},children:"Duplicate"}),Object(n.jsx)("li",{id:"edit-w453",children:"Edit"}),Object(n.jsx)("li",{id:"move-w453",onClick:function(e){if(e.preventDefault(),a.querySelectorAll("[draggable='true']")[0]){var n=a.querySelectorAll("[draggable='true']")[0];n.removeAttribute("draggable"),n.removeAttribute("id"),n.classList.remove("dragable-wp364")}s.setAttribute("draggable","true"),s.setAttribute("id","drag-it"),s.classList.add("dragable-wp364"),s.addEventListener("dragstart",(function(e){e.dataTransfer.setData("text",e.target.id)}));for(var o=a.body.getElementsByTagName("*"),i=0;i<o.length;i++)o[i].addEventListener("dragover",(function(e){e.preventDefault(),e.currentTarget.classList.add("dropable-wp489")}));a.body.addEventListener("drop",(function(e){e.preventDefault();for(var t=e.dataTransfer.getData("text"),r=a.getElementsByClassName("dropable-wp489"),n=r.length-1;n>-1;n--)r[n].classList.remove("dropable-wp489");if(e.target.appendChild(a.getElementById(t)),a.querySelectorAll("[draggable='true']")[0]){var o=a.querySelectorAll("[draggable='true']")[0];o.removeAttribute("draggable"),o.removeAttribute("id"),o.classList.remove("dragable-wp364")}})),t(!1),r(!1)},children:"Move"}),Object(n.jsx)("li",{id:"move-up-w453",onClick:function(e){e.preventDefault(),s.previousElementSibling&&s.parentNode.insertBefore(s,s.previousElementSibling),t(!1),r(!1)},children:"Move Up"}),Object(n.jsx)("li",{id:"move-down-w453",onClick:function(e){e.preventDefault(),s.nextElementSibling&&s.parentNode.insertBefore(s.nextElementSibling,s),t(!1),r(!1)},children:"Move Down"}),Object(n.jsx)("li",{id:"design-w453",onClick:function(e){e.preventDefault(),l(!0),s.classList.add("editor-border"),r(!0)},children:"Design"}),Object(n.jsx)("li",{id:"resize-w453",children:"Resize"}),Object(n.jsx)("li",{id:"move-out-w453",onClick:function(){s.parentNode&&s.parentNode.parentNode.appendChild(s),t(!1),r(!1)},children:"Movie Outside"}),Object(n.jsx)("li",{id:"show-skeleton-w453",onClick:function(){for(var e=a.body.getElementsByTagName("*"),n=0;n<e.length;n++)e[n].classList.add("dropable-wp489");t(!1),r(!1)},children:"Show Skeleton"}),Object(n.jsx)("li",{id:"hide-skeleton-w453",onClick:function(){for(var e=a.body.getElementsByTagName("*"),n=0;n<e.length;n++)e[n].classList.remove("dropable-wp489");t(!1),r(!1)},children:"Hide Skeleton"}),Object(n.jsx)("li",{id:"delete-w453",onClick:function(e){e.preventDefault(),s.remove(),t(!1),r(!1)},children:"Delete"}),Object(n.jsx)("li",{id:"close-w453",onClick:function(e){e.preventDefault(),t(!1),r(!1)},children:"Close"})]})},Y=["address","p","label","button","h1","h2","h3","h4","h5","h6","span","a","b","em","i","strong","small","sup","mark","del","ins","sub","blockquote","abbr","cite","q","tr","th","td","dt","dd","img","li"];t.default=function(){var e,t,r,o,l,u,h,m,v,g,O=Object(d.useState)(null),S=(O[0],O[1]),k=Object(d.useState)(!1),N=k[0],C=k[1],D=Object(d.useState)(!0),I=D[0],A=D[1],M=Object(d.useState)(!1),q=M[0],F=M[1],G=Object(d.useState)(!1),H=G[0],R=G[1],z=Object(d.useState)(""),U=z[0],W=z[1],K=Object(d.useState)(""),$=K[0],Q=K[1],J=Object(d.useState)(""),X=J[0],Z=J[1],ee=Object(d.useState)(null),te=ee[0],re=ee[1],ne=Object(s.useRouter)().query.id;Object(d.useEffect)((function(){ne&&function(){var e=Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,A(!0),e.next=4,Object(b.a)("get","themes/".concat(ne));case 4:t=e.sent,re(t.data.data),A(!1),Q("Theme fully loaded"),W(""),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),W("Theme loading failed. Please refresh"),Q(""),A(!1);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}()()}),[ne]);var oe=function(){try{return E()?(Z("Fully loaded theme"),A(!1),F(!0)):(W("Theme loading failed. Please refresh"),A(!1))}catch(e){return A(!1),W("Theme loading failed. Please refresh")}};return Object(d.useEffect)((function(){if(q){Z("Making theme contents editable");var e=w();B(),Z("Adding edit options on right click"),Y.forEach((function(t){for(var r=e.body.getElementsByTagName(t),n=0;n<r.length;n++){var o=r[n];o.addEventListener("mouseover",(function(t){for(var r=e.getElementsByClassName("editor-border"),n=0;n<r.length;n++)r[n].classList.remove("editor-border");t.currentTarget.classList.add("editor-border")})),o.addEventListener("mouseleave",(function(e){N||e.currentTarget.classList.remove("editor-border")})),o.addEventListener("click",P),e.addEventListener?o.addEventListener("contextmenu",(function(e){e.preventDefault(),window.event.returnValue=!1;var t=e.currentTarget;T(),t.classList.add("editor-border"),C(!0),R(!0)}),!1):o.attachEvent("oncontextmenu",(function(e){e.preventDefault(),window.event.returnValue=!1;var t=e.currentTarget;T(),t.classList.add("editor-border"),C(!0),R(!0)}))}})),Z(""),F(!1)}}),[q]),Object(n.jsxs)(j.a,{children:[Object(n.jsx)(a.a,{children:Object(n.jsx)("title",{children:"Editor: HTML to WP theme"})}),Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)("div",{id:f.a.editor,children:[Object(n.jsx)(p.a,{}),Object(n.jsxs)("div",{className:"editor",children:[Object(n.jsx)("h1",{className:"heading",id:"theme-name",children:U.length<1&&(null===te||void 0===te||null===(e=te.tree)||void 0===e?void 0:e.themeName)}),Object(n.jsx)("p",{className:"error",children:U}),Object(n.jsx)("p",{className:"success",children:$}),Object(n.jsxs)("h5",{children:[U.length<1&&(null===te||void 0===te||null===(t=te.tree)||void 0===t?void 0:t.size)/1e3,"KB"]}),Object(n.jsx)(y.a,{href:"#",children:Object(n.jsx)("button",{id:f.a.convert,children:"Convert To WordPress"})}),Object(n.jsxs)("ul",{children:[Object(n.jsx)(L,{editorLoader:q,initialLoader:I,loadingIcon:Object(n.jsx)(_,{}),popupMessage:X}),H&&Object(n.jsx)(L,{editorLoader:H,initialLoader:I,loadingIcon:Object(n.jsx)(V,{setRightMenu:R,keepSelectedSet:C,keepSelected:N,elementNameSet:S}),popupMessage:X}),1===(null===te||void 0===te||null===(r=te.tree)||void 0===r||null===(o=r.children)||void 0===o?void 0:o.length)&&"directory"===(null===te||void 0===te||null===(l=te.tree)||void 0===l||null===(u=l.children[0])||void 0===u?void 0:u.type)?U.length<1&&Object(n.jsx)(x,{url:"/html-preview/".concat(null===te||void 0===te||null===(h=te.upload)||void 0===h?void 0:h.filename,"/").concat(null===te||void 0===te||null===(m=te.tree)||void 0===m||null===(v=m.children[0])||void 0===v?void 0:v.name,"/index.html"),width:"100%",height:"1500",id:"edit-frame",className:"myClassname",display:"initial",position:"relative",onLoad:oe,onError:function(){W("Failed to load theme")}}):U.length<1&&Object(n.jsx)(x,{url:"/html-preview/".concat(null===te||void 0===te||null===(g=te.upload)||void 0===g?void 0:g.filename,"/index.html"),width:"100%",height:"1500",id:"edit-frame",className:"myClassname",display:"initial",position:"relative",onLoad:oe,onError:function(){W("Failed to load theme")}})]})]})]})})]})}},GB7l:function(e,t,r){"use strict";var n=r("nKUr"),o=r("k0rj"),i=r("YFqc"),c=r.n(i),l=r("Sr1/"),a=function(){return Object(n.jsxs)("menu",{id:"menu",children:[Object(n.jsx)("div",{id:"menu-icon",onClick:l.a,children:"Menu"}),Object(n.jsxs)("nav",{id:"nav",children:[Object(n.jsx)(c.a,{href:"/",children:"Home"}),Object(n.jsx)(c.a,{href:"/user/dashboard",children:"Dashboard"}),Object(n.jsx)(c.a,{href:"/user/auth/logout",children:"Logout"})]})]})},s=r("+kQf"),d=r.n(s);t.a=function(){return Object(n.jsxs)("header",{id:d.a.header,className:"header",children:[Object(n.jsx)(o.a,{}),Object(n.jsx)(a,{})]})}},GDVR:function(e,t,r){"use strict";var n=r("nKUr"),o=r("q1tI"),i=r("jcvg"),c=r("k0rj"),l=r("YFqc"),a=r.n(l),s=r("Sr1/"),d=function(){return Object(n.jsxs)("menu",{id:"menu",children:[Object(n.jsx)("div",{id:"menu-icon",onClick:s.a,children:"Menu"}),Object(n.jsxs)("nav",{id:"nav",children:[Object(n.jsx)(a.a,{href:"/",children:"Home"}),Object(n.jsx)(a.a,{href:"/admin/dashboard",children:"Dashboard"}),Object(n.jsx)(a.a,{href:"/user/auth/logout",children:"Logout"})]})]})},u=r("GMIE"),b=r.n(u);t.a=function(){var e=Object(o.useContext)(i.a),t=e[0];e[1];return Object(n.jsxs)("header",{id:b.a.header,className:"header",children:[Object(n.jsx)(c.a,{}),t?Object(n.jsx)(o.Fragment,{}):Object(n.jsx)(d,{})]})}},GMIE:function(e,t,r){},Nlzp:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("o0o1"),o=r.n(n),i=r("HaE+"),c=r("vDqi"),l=r.n(c),a=function(){var e=Object(i.a)(o.a.mark((function e(t,r,n,i,c){var a,s,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(r),a="/api/v1/".concat(r),e.prev=2,e.next=5,l.a[t](a,i);case 5:return s=e.sent,d=s.data,e.abrupt("return",d);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,r,n,o,i){return e.apply(this,arguments)}}()},Y1PG:function(e,t,r){e.exports={sidebar:"ThemeListSidebar_sidebar__fCf6H",themeLinks:"ThemeListSidebar_themeLinks__2WoBY",subMenu:"ThemeListSidebar_subMenu__ogPFH"}},pnCd:function(e,t,r){e.exports={loadingImg:"EditorLoaderComp_loadingImg__1KxcJ"}},rePB:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},wVO0:function(e,t,r){e.exports={popupEditor:"EditorPopup_popupEditor__HO9lS",relative:"EditorPopup_relative__70mNn"}},xGi3:function(e,t,r){"use strict";var n=r("nKUr"),o=r("q1tI"),i=r("jcvg"),c=r("k0rj"),l=r("YFqc"),a=r.n(l),s=r("Sr1/"),d=function(){return Object(n.jsxs)("menu",{id:"menu",children:[Object(n.jsx)("div",{id:"menu-icon",onClick:s.a,children:"Menu"}),Object(n.jsxs)("nav",{id:"nav",children:[Object(n.jsx)(a.a,{href:"/",children:"Home"}),Object(n.jsx)(a.a,{href:"/user/auth/login",children:"Login"}),Object(n.jsx)(a.a,{href:"/user/auth/registration",children:"Register"})]})]})},u=r("y377"),b=r.n(u);t.a=function(){var e=Object(o.useContext)(i.a),t=e[0];e[1];return Object(n.jsxs)("header",{id:b.a.header,className:"header",children:[Object(n.jsx)(c.a,{}),t?Object(n.jsx)(o.Fragment,{}):Object(n.jsx)(d,{})]})}},y377:function(e,t,r){}},[["0Z19",0,2,1,3,4]]]);