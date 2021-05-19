(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[3],{

/***/ "./src/components/formComponents/formFields/EmailField.js":
/*!****************************************************************!*\
  !*** ./src/components/formComponents/formFields/EmailField.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/psayeed1990/projects/node/real/u2cam/client/src/components/formComponents/formFields/EmailField.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar EmailField = function EmailField(_ref) {\n  _s();\n\n  var _errors$fieldName;\n\n  var value = _ref.value,\n      label = _ref.label,\n      initFocus = _ref.initFocus,\n      placeholder = _ref.placeholder,\n      maxChar = _ref.maxChar,\n      minChar = _ref.minChar,\n      isRequired = _ref.isRequired,\n      fieldName = _ref.fieldName,\n      register = _ref.register,\n      setValue = _ref.setValue,\n      errors = _ref.errors,\n      setError = _ref.setError,\n      clearErrors = _ref.clearErrors,\n      getValues = _ref.getValues;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (value) {\n      setValue(fieldName, value);\n    }\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"form-group\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      ref: register({\n        required: isRequired ? \"\".concat(fieldName, \" is required\") : false,\n        pattern: {\n          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i,\n          message: \"Invalid email address format\"\n        }\n      }),\n      id: fieldName,\n      autoFocus: initFocus,\n      name: fieldName,\n      type: \"text\",\n      placeholder: placeholder,\n      autoComplete: \"new-password\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      htmlFor: fieldName,\n      children: label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      className: \"\".concat(errors[fieldName] ? \"error\" : \"\"),\n      children: (_errors$fieldName = errors[fieldName]) === null || _errors$fieldName === void 0 ? void 0 : _errors$fieldName.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EmailField, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = EmailField;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailField);\n\nvar _c;\n\n$RefreshReg$(_c, \"EmailField\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9ybUNvbXBvbmVudHMvZm9ybUZpZWxkcy9FbWFpbEZpZWxkLmpzPzg0NzUiXSwibmFtZXMiOlsiRW1haWxGaWVsZCIsInZhbHVlIiwibGFiZWwiLCJpbml0Rm9jdXMiLCJwbGFjZWhvbGRlciIsIm1heENoYXIiLCJtaW5DaGFyIiwiaXNSZXF1aXJlZCIsImZpZWxkTmFtZSIsInJlZ2lzdGVyIiwic2V0VmFsdWUiLCJlcnJvcnMiLCJzZXRFcnJvciIsImNsZWFyRXJyb3JzIiwiZ2V0VmFsdWVzIiwidXNlRWZmZWN0IiwicmVxdWlyZWQiLCJwYXR0ZXJuIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQWViO0FBQUE7O0FBQUE7O0FBQUEsTUFkSkMsS0FjSSxRQWRKQSxLQWNJO0FBQUEsTUFiSkMsS0FhSSxRQWJKQSxLQWFJO0FBQUEsTUFaSkMsU0FZSSxRQVpKQSxTQVlJO0FBQUEsTUFYSkMsV0FXSSxRQVhKQSxXQVdJO0FBQUEsTUFWSkMsT0FVSSxRQVZKQSxPQVVJO0FBQUEsTUFUSkMsT0FTSSxRQVRKQSxPQVNJO0FBQUEsTUFSSkMsVUFRSSxRQVJKQSxVQVFJO0FBQUEsTUFQSkMsU0FPSSxRQVBKQSxTQU9JO0FBQUEsTUFOSkMsUUFNSSxRQU5KQSxRQU1JO0FBQUEsTUFMSkMsUUFLSSxRQUxKQSxRQUtJO0FBQUEsTUFKSkMsTUFJSSxRQUpKQSxNQUlJO0FBQUEsTUFISkMsUUFHSSxRQUhKQSxRQUdJO0FBQUEsTUFGSkMsV0FFSSxRQUZKQSxXQUVJO0FBQUEsTUFESkMsU0FDSSxRQURKQSxTQUNJO0FBQ0pDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlkLEtBQUosRUFBVztBQUNUUyxjQUFRLENBQUNGLFNBQUQsRUFBWVAsS0FBWixDQUFSO0FBQ0Q7QUFDRixHQUpRLEVBSU4sRUFKTSxDQUFUO0FBS0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLDRCQUNFO0FBQ0UsU0FBRyxFQUFFUSxRQUFRLENBQUM7QUFDWk8sZ0JBQVEsRUFBRVQsVUFBVSxhQUFNQyxTQUFOLG9CQUFnQyxLQUR4QztBQUVaUyxlQUFPLEVBQUU7QUFDUGhCLGVBQUssRUFBRSwyQ0FEQTtBQUVQaUIsaUJBQU8sRUFBRTtBQUZGO0FBRkcsT0FBRCxDQURmO0FBUUUsUUFBRSxFQUFFVixTQVJOO0FBU0UsZUFBUyxFQUFFTCxTQVRiO0FBVUUsVUFBSSxFQUFFSyxTQVZSO0FBV0UsVUFBSSxFQUFDLE1BWFA7QUFZRSxpQkFBVyxFQUFFSixXQVpmO0FBYUUsa0JBQVksRUFBQztBQWJmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWdCRTtBQUFPLGFBQU8sRUFBRUksU0FBaEI7QUFBQSxnQkFBNEJOO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkYsZUFpQkU7QUFBTSxlQUFTLFlBQUtTLE1BQU0sQ0FBQ0gsU0FBRCxDQUFOLEdBQW9CLE9BQXBCLEdBQThCLEVBQW5DLENBQWY7QUFBQSxxQ0FDR0csTUFBTSxDQUFDSCxTQUFELENBRFQsc0RBQ0csa0JBQW1CVTtBQUR0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUJELENBNUNEOztHQUFNbEIsVTs7S0FBQUEsVTtBQThDU0EseUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9mb3JtQ29tcG9uZW50cy9mb3JtRmllbGRzL0VtYWlsRmllbGQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgRW1haWxGaWVsZCA9ICh7XG4gIHZhbHVlLFxuICBsYWJlbCxcbiAgaW5pdEZvY3VzLFxuICBwbGFjZWhvbGRlcixcbiAgbWF4Q2hhcixcbiAgbWluQ2hhcixcbiAgaXNSZXF1aXJlZCxcbiAgZmllbGROYW1lLFxuICByZWdpc3RlcixcbiAgc2V0VmFsdWUsXG4gIGVycm9ycyxcbiAgc2V0RXJyb3IsXG4gIGNsZWFyRXJyb3JzLFxuICBnZXRWYWx1ZXMsXG59KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBzZXRWYWx1ZShmaWVsZE5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICByZWY9e3JlZ2lzdGVyKHtcbiAgICAgICAgICByZXF1aXJlZDogaXNSZXF1aXJlZCA/IGAke2ZpZWxkTmFtZX0gaXMgcmVxdWlyZWRgIDogZmFsc2UsXG4gICAgICAgICAgcGF0dGVybjoge1xuICAgICAgICAgICAgdmFsdWU6IC9eW0EtWjAtOS5fJSstXStAW0EtWjAtOS4tXStcXC5bQS1aXXsyLDR9JC9pLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJJbnZhbGlkIGVtYWlsIGFkZHJlc3MgZm9ybWF0XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSl9XG4gICAgICAgIGlkPXtmaWVsZE5hbWV9XG4gICAgICAgIGF1dG9Gb2N1cz17aW5pdEZvY3VzfVxuICAgICAgICBuYW1lPXtmaWVsZE5hbWV9XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBhdXRvQ29tcGxldGU9XCJuZXctcGFzc3dvcmRcIlxuICAgICAgLz5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXtmaWVsZE5hbWV9PntsYWJlbH08L2xhYmVsPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtlcnJvcnNbZmllbGROYW1lXSA/IFwiZXJyb3JcIiA6IFwiXCJ9YH0+XG4gICAgICAgIHtlcnJvcnNbZmllbGROYW1lXT8ubWVzc2FnZX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVtYWlsRmllbGQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/formComponents/formFields/EmailField.js\n");

/***/ })

}]);