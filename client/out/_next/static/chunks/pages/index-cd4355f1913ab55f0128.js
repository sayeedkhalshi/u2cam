_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"+kQf":function(e,t,n){},"0qRg":function(e,t,n){"use strict";var r=n("nKUr"),a=n("q1tI"),c=n("Uw7I"),o=n("GDVR"),s=n("xGi3"),i=n("GB7l"),u=n("jcvg"),p=n("wfTj");t.a=function(e){var t=e.children,n=Object(a.useContext)(u.a),d=n[0],l=(n[1],Object(a.useContext)(p.a)),j=l[0];l[1];return Object(r.jsxs)(a.Fragment,{children:[!d&&j?Object(r.jsx)(a.Fragment,{children:"admin"===j.role?Object(r.jsx)(o.a,{}):Object(r.jsx)(i.a,{})}):Object(r.jsx)(s.a,{}),Object(r.jsx)("main",{children:t}),Object(r.jsx)(c.a,{})]})}},GB7l:function(e,t,n){"use strict";var r=n("nKUr"),a=n("k0rj"),c=n("YFqc"),o=n.n(c),s=n("h6H3"),i=function(){return Object(r.jsxs)("menu",{id:"menu",children:[Object(r.jsx)("div",{id:"menu-icon",onClick:s.a,children:"Menu"}),Object(r.jsxs)("nav",{id:"nav",children:[Object(r.jsx)(o.a,{href:"/",children:"Home"}),Object(r.jsx)(o.a,{href:"/user/dashboard",children:"Dashboard"}),Object(r.jsx)(o.a,{href:"/user/auth/logout",children:"Logout"})]})]})},u=n("+kQf"),p=n.n(u);t.a=function(){return Object(r.jsxs)("header",{id:p.a.header,className:"header",children:[Object(r.jsx)(a.a,{}),Object(r.jsx)(i,{})]})}},GDVR:function(e,t,n){"use strict";var r=n("nKUr"),a=n("q1tI"),c=n("jcvg"),o=n("k0rj"),s=n("YFqc"),i=n.n(s),u=n("h6H3"),p=function(){return Object(r.jsxs)("menu",{id:"menu",children:[Object(r.jsx)("div",{id:"menu-icon",onClick:u.a,children:"Menu"}),Object(r.jsxs)("nav",{id:"nav",children:[Object(r.jsx)(i.a,{href:"/",children:"Home"}),Object(r.jsx)(i.a,{href:"/admin/dashboard",children:"Dashboard"}),Object(r.jsx)(i.a,{href:"/user/auth/logout",children:"Logout"})]})]})},d=n("GMIE"),l=n.n(d);t.a=function(){var e=Object(a.useContext)(c.a),t=e[0];e[1];return Object(r.jsxs)("header",{id:l.a.header,className:"header",children:[Object(r.jsx)(o.a,{}),t?Object(r.jsx)(a.Fragment,{}):Object(r.jsx)(p,{})]})}},GMIE:function(e,t,n){},HDYo:function(e,t,n){e.exports={deletePopup:"CheckNamePopups_deletePopup__29Dcv",showPopup:"CheckNamePopups_showPopup__1MbGX",popupContent:"CheckNamePopups_popupContent__bFxfp",paddingUp:"CheckNamePopups_paddingUp__cd5pI",heading:"CheckNamePopups_heading__2Jr_9",delNoBtn:"CheckNamePopups_delNoBtn__2BbGu",delYesBtn:"CheckNamePopups_delYesBtn__ltHV0"}},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("rePB"),c=n("q1tI"),o=n("g4pe"),s=n.n(o),i=n("UAqm"),u=n.n(i),p=n("0qRg"),d=n("o0o1"),l=n.n(d),j=n("HaE+"),h=n("vDqi"),O=n.n(h),b=(n("YFqc"),n("CBpi")),f=n("HDYo"),m=n.n(f),_=function(e){var t=e.url,n=(e.showCheckNamePopup,e.setShowCheckNamePopup),a=e.name,o=e.id,s=Object(c.useState)(!1),i=s[0],u=s[1],p=Object(c.useState)(""),d=p[0],l=p[1],j=Object(c.useState)({}),h=(j[0],j[1]);Object(c.useEffect)((function(){i&&(n(!1),l("Theme Name Updated"))}),[i]);var O=[{fieldType:"TextField",label:"Name",initFocus:!1,maxChar:32,minChar:2,isRequired:!0,fieldName:"name",value:a,placeholder:a}];return Object(r.jsx)("div",{id:m.a.deletePopup,children:Object(r.jsxs)("div",{className:m.a.popupContent,children:[Object(r.jsx)("h5",{className:m.a.heading,children:"Give this theme a better name: ".concat(a)}),Object(r.jsx)("h5",{className:"heading success-message",children:d}),Object(r.jsx)(b.a,{setSuccess:u,setReturnValue:h,submitValue:"Update and Edit",reason:"Update Theme Name",reqType:"patch",url:"".concat(t,"/").concat(o),formBuilder:O,submitBtnExtra:""})]})})},x=n("plcp"),R=n.n(x),g=function(e){var t=Object(c.useState)({}),n=t[0],a=t[1],o=Object(c.useState)(!1),s=o[0],i=o[1],u=e.data,p=e.dispatch,d=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.preventDefault(),t.stopPropagation(),document.getElementById("fileInput"),1===(n=t.dataTransfer.files).length){e.next=8;break}return console.log("wrong"),e.abrupt("return",p({type:"SET_ERROR",ERROR:"Too many files. Upload one zip file"}));case 8:if(!(n&&n.length>0)){e.next=21;break}return p({type:"SET_ERROR",ERROR:"File uploading"}),p({type:"SET_DROP_DEPTH",dropDepth:0}),p({type:"SET_IN_DROP_ZONE",inDropZone:!1}),(r=new FormData).append("zippedTheme",n[0]),e.next=16,O.a.post("/api/v1/uploads/",r,{onUploadProgress:function(e){var t=Math.floor(e.loaded/e.total*100);p({type:"SET_ERROR",ERROR:"File uploading ".concat(t,"%")})}});case 16:return c=e.sent,o=c.data,p({type:"SET_ERROR",ERROR:"Your theme is uploaded"}),console.log(o.data.data),e.abrupt("return",a(o.data.data));case 21:e.next=30;break;case 23:if(e.prev=23,e.t0=e.catch(0),"fail"!==e.t0.response.data.status&&"error"!==e.t0.response.data.status){e.next=29;break}return e.abrupt("return",p({type:"SET_ERROR",ERROR:e.t0.response.data.message}));case 29:return e.abrupt("return",p({type:"SET_ERROR",ERROR:"Wrong file type"}));case 30:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){null!==n&&void 0!==n&&n.name&&i(!0)}),[n]),Object(r.jsxs)(c.Fragment,{children:[s&&Object(r.jsx)(_,{showCheckNamePopup:s,setShowCheckNamePopup:i,name:null===n||void 0===n?void 0:n.name,id:null===n||void 0===n?void 0:n._id,url:"uploads"}),Object(r.jsx)("div",{className:u.inDropZone?"".concat(R.a.dragDropZone," ").concat(R.a.insideDragArea):R.a.dragDropZone,onDrop:function(e){return d(e)},onDragOver:function(e){return function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect="copy",p({type:"SET_IN_DROP_ZONE",inDropZone:!0})}(e)},onDragEnter:function(e){return function(e){e.preventDefault(),e.stopPropagation(),p({type:"SET_DROP_DEPTH",dropDepth:u.dropDepth+1})}(e)},onDragLeave:function(e){return function(e){e.preventDefault(),e.stopPropagation(),p({type:"SET_DROP_DEPTH",dropDepth:u.dropDepth-1}),u.dropDepth>0||p({type:"SET_IN_DROP_ZONE",inDropZone:!1})}(e)},children:Object(r.jsx)("p",{children:"Drag files here to upload"})})]})};function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.message,n=Object(c.useReducer)((function(e,t){switch(t.type){case"SET_DROP_DEPTH":return v(v({},e),{},{dropDepth:t.dropDepth});case"SET_IN_DROP_ZONE":return v(v({},e),{},{inDropZone:t.inDropZone});case"SET_ERROR":return v(v({},e),{},{ERROR:t.ERROR});default:return e}}),{dropDepth:0,inDropZone:!1,ERROR:""}),a=n[0],o=n[1];return Object(r.jsxs)(p.a,{children:[Object(r.jsxs)(s.a,{children:[Object(r.jsx)("title",{children:"HTML to WP theme"}),Object(r.jsx)("p",{className:"error",children:t})]}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("h1",{className:"heading",children:"Home page"}),Object(r.jsxs)("div",{id:u.a.drop,children:[Object(r.jsx)(g,{data:a,dispatch:o}),Object(r.jsx)("p",{className:"error",children:a.ERROR})]})]})]})}},UAqm:function(e,t,n){e.exports={droppedFiles:"Home_droppedFiles__1gO9f",drop:"Home_drop__1z6Hr"}},plcp:function(e,t,n){e.exports={fileExists:"DragAndDropUpload_fileExists__F-vxa",dragDropZone:"DragAndDropUpload_dragDropZone__3T6l3",insideDragArea:"DragAndDropUpload_insideDragArea__3UJNk"}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RXBc")}])},xGi3:function(e,t,n){"use strict";var r=n("nKUr"),a=n("q1tI"),c=n("jcvg"),o=n("k0rj"),s=n("YFqc"),i=n.n(s),u=n("h6H3"),p=function(){return Object(r.jsxs)("menu",{id:"menu",children:[Object(r.jsx)("div",{id:"menu-icon",onClick:u.a,children:"Menu"}),Object(r.jsxs)("nav",{id:"nav",children:[Object(r.jsx)(i.a,{href:"/",children:"Home"}),Object(r.jsx)(i.a,{href:"/user/auth/login",children:"Login"}),Object(r.jsx)(i.a,{href:"/user/auth/registration",children:"Register"})]})]})},d=n("y377"),l=n.n(d);t.a=function(){var e=Object(a.useContext)(c.a),t=e[0];e[1];return Object(r.jsxs)("header",{id:l.a.header,className:"header",children:[Object(r.jsx)(o.a,{}),t?Object(r.jsx)(a.Fragment,{}):Object(r.jsx)(p,{})]})}},y377:function(e,t,n){}},[["vlRD",0,2,1,3,4,5]]]);