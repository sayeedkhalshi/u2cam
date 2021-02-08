(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./src/components/formComponents/formFields/CustomTypeTextField.js":
/*!*************************************************************************!*\
  !*** ./src/components/formComponents/formFields/CustomTypeTextField.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/psayeed1990/projects/node/real/wp-converter/client/src/components/formComponents/formFields/CustomTypeTextField.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar CustomTypeTextField = function CustomTypeTextField(_ref) {\n  _s();\n\n  var value = _ref.value,\n      label = _ref.label,\n      customTypesArray = _ref.customTypesArray,\n      initFocus = _ref.initFocus,\n      placeholder = _ref.placeholder,\n      maxChar = _ref.maxChar,\n      minChar = _ref.minChar,\n      isRequired = _ref.isRequired,\n      fieldName = _ref.fieldName,\n      register = _ref.register,\n      setValue = _ref.setValue,\n      errors = _ref.errors,\n      setError = _ref.setError,\n      clearErrors = _ref.clearErrors,\n      getValues = _ref.getValues;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (value) {\n      setValue(fieldName, value);\n    }\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"form-group\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        ref: register({\n          required: isRequired ? \"\".concat(fieldName, \" is required\") : false,\n          maxLength: {\n            value: maxChar,\n            message: \"Max \".concat(maxChar, \" character\")\n          },\n          minLength: {\n            value: minChar,\n            message: \"Min \".concat(minChar, \" character\")\n          },\n          validate: function validate(value) {\n            return customTypesArray.includes(value) || customTypesArray.join(\" or \");\n          }\n        }),\n        id: fieldName,\n        autoFocus: initFocus,\n        name: fieldName,\n        type: \"text\",\n        placeholder: placeholder,\n        autoComplete: \"new-password\",\n        onChange: function onChange() {\n          if (!customTypesArray.includes(getValues(fieldName))) {\n            setError(fieldName, {\n              type: \"manual\",\n              message: \"Only \".concat(customTypesArray.join(\", \"), \" allowed \")\n            });\n          } else {\n            clearErrors(fieldName);\n          }\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        htmlFor: fieldName,\n        children: label\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"\".concat(errors[fieldName] ? \"error\" : \"\"),\n        children: errors[fieldName] && errors[fieldName].message\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CustomTypeTextField, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = CustomTypeTextField;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomTypeTextField);\n\nvar _c;\n\n$RefreshReg$(_c, \"CustomTypeTextField\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9ybUNvbXBvbmVudHMvZm9ybUZpZWxkcy9DdXN0b21UeXBlVGV4dEZpZWxkLmpzPzI1YWQiXSwibmFtZXMiOlsiQ3VzdG9tVHlwZVRleHRGaWVsZCIsInZhbHVlIiwibGFiZWwiLCJjdXN0b21UeXBlc0FycmF5IiwiaW5pdEZvY3VzIiwicGxhY2Vob2xkZXIiLCJtYXhDaGFyIiwibWluQ2hhciIsImlzUmVxdWlyZWQiLCJmaWVsZE5hbWUiLCJyZWdpc3RlciIsInNldFZhbHVlIiwiZXJyb3JzIiwic2V0RXJyb3IiLCJjbGVhckVycm9ycyIsImdldFZhbHVlcyIsInVzZUVmZmVjdCIsInJlcXVpcmVkIiwibWF4TGVuZ3RoIiwibWVzc2FnZSIsIm1pbkxlbmd0aCIsInZhbGlkYXRlIiwiaW5jbHVkZXMiLCJqb2luIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLE9BZ0J0QjtBQUFBOztBQUFBLE1BZkpDLEtBZUksUUFmSkEsS0FlSTtBQUFBLE1BZEpDLEtBY0ksUUFkSkEsS0FjSTtBQUFBLE1BYkpDLGdCQWFJLFFBYkpBLGdCQWFJO0FBQUEsTUFaSkMsU0FZSSxRQVpKQSxTQVlJO0FBQUEsTUFYSkMsV0FXSSxRQVhKQSxXQVdJO0FBQUEsTUFWSkMsT0FVSSxRQVZKQSxPQVVJO0FBQUEsTUFUSkMsT0FTSSxRQVRKQSxPQVNJO0FBQUEsTUFSSkMsVUFRSSxRQVJKQSxVQVFJO0FBQUEsTUFQSkMsU0FPSSxRQVBKQSxTQU9JO0FBQUEsTUFOSkMsUUFNSSxRQU5KQSxRQU1JO0FBQUEsTUFMSkMsUUFLSSxRQUxKQSxRQUtJO0FBQUEsTUFKSkMsTUFJSSxRQUpKQSxNQUlJO0FBQUEsTUFISkMsUUFHSSxRQUhKQSxRQUdJO0FBQUEsTUFGSkMsV0FFSSxRQUZKQSxXQUVJO0FBQUEsTUFESkMsU0FDSSxRQURKQSxTQUNJO0FBQ0pDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlmLEtBQUosRUFBVztBQUNUVSxjQUFRLENBQUNGLFNBQUQsRUFBWVIsS0FBWixDQUFSO0FBQ0Q7QUFDRixHQUpRLEVBSU4sRUFKTSxDQUFUO0FBS0Esc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUEsOEJBQ0U7QUFDRSxXQUFHLEVBQUVTLFFBQVEsQ0FBQztBQUNaTyxrQkFBUSxFQUFFVCxVQUFVLGFBQU1DLFNBQU4sb0JBQWdDLEtBRHhDO0FBRVpTLG1CQUFTLEVBQUU7QUFDVGpCLGlCQUFLLEVBQUVLLE9BREU7QUFFVGEsbUJBQU8sZ0JBQVNiLE9BQVQ7QUFGRSxXQUZDO0FBTVpjLG1CQUFTLEVBQUU7QUFDVG5CLGlCQUFLLEVBQUVNLE9BREU7QUFFVFksbUJBQU8sZ0JBQVNaLE9BQVQ7QUFGRSxXQU5DO0FBVVpjLGtCQUFRLEVBQUUsa0JBQUNwQixLQUFEO0FBQUEsbUJBQ1JFLGdCQUFnQixDQUFDbUIsUUFBakIsQ0FBMEJyQixLQUExQixLQUFvQ0UsZ0JBQWdCLENBQUNvQixJQUFqQixDQUFzQixNQUF0QixDQUQ1QjtBQUFBO0FBVkUsU0FBRCxDQURmO0FBY0UsVUFBRSxFQUFFZCxTQWROO0FBZUUsaUJBQVMsRUFBRUwsU0FmYjtBQWdCRSxZQUFJLEVBQUVLLFNBaEJSO0FBaUJFLFlBQUksRUFBQyxNQWpCUDtBQWtCRSxtQkFBVyxFQUFFSixXQWxCZjtBQW1CRSxvQkFBWSxFQUFDLGNBbkJmO0FBb0JFLGdCQUFRLEVBQUUsb0JBQU07QUFDZCxjQUFJLENBQUNGLGdCQUFnQixDQUFDbUIsUUFBakIsQ0FBMEJQLFNBQVMsQ0FBQ04sU0FBRCxDQUFuQyxDQUFMLEVBQXNEO0FBQ3BESSxvQkFBUSxDQUFDSixTQUFELEVBQVk7QUFDbEJlLGtCQUFJLEVBQUUsUUFEWTtBQUVsQkwscUJBQU8saUJBQVVoQixnQkFBZ0IsQ0FBQ29CLElBQWpCLENBQXNCLElBQXRCLENBQVY7QUFGVyxhQUFaLENBQVI7QUFJRCxXQUxELE1BS087QUFDTFQsdUJBQVcsQ0FBQ0wsU0FBRCxDQUFYO0FBQ0Q7QUFDRjtBQTdCSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFnQ0U7QUFBTyxlQUFPLEVBQUVBLFNBQWhCO0FBQUEsa0JBQTRCUDtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaENGLGVBaUNFO0FBQU0saUJBQVMsWUFBS1UsTUFBTSxDQUFDSCxTQUFELENBQU4sR0FBb0IsT0FBcEIsR0FBOEIsRUFBbkMsQ0FBZjtBQUFBLGtCQUNHRyxNQUFNLENBQUNILFNBQUQsQ0FBTixJQUFxQkcsTUFBTSxDQUFDSCxTQUFELENBQU4sQ0FBa0JVO0FBRDFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0VELENBckdEOztHQUFNbkIsbUI7O0tBQUFBLG1CO0FBdUdTQSxrRkFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2Zvcm1Db21wb25lbnRzL2Zvcm1GaWVsZHMvQ3VzdG9tVHlwZVRleHRGaWVsZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ3VzdG9tVHlwZVRleHRGaWVsZCA9ICh7XG4gIHZhbHVlLFxuICBsYWJlbCxcbiAgY3VzdG9tVHlwZXNBcnJheSxcbiAgaW5pdEZvY3VzLFxuICBwbGFjZWhvbGRlcixcbiAgbWF4Q2hhcixcbiAgbWluQ2hhcixcbiAgaXNSZXF1aXJlZCxcbiAgZmllbGROYW1lLFxuICByZWdpc3RlcixcbiAgc2V0VmFsdWUsXG4gIGVycm9ycyxcbiAgc2V0RXJyb3IsXG4gIGNsZWFyRXJyb3JzLFxuICBnZXRWYWx1ZXMsXG59KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBzZXRWYWx1ZShmaWVsZE5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgcmVmPXtyZWdpc3Rlcih7XG4gICAgICAgICAgICByZXF1aXJlZDogaXNSZXF1aXJlZCA/IGAke2ZpZWxkTmFtZX0gaXMgcmVxdWlyZWRgIDogZmFsc2UsXG4gICAgICAgICAgICBtYXhMZW5ndGg6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IG1heENoYXIsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGBNYXggJHttYXhDaGFyfSBjaGFyYWN0ZXJgLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1pbkxlbmd0aDoge1xuICAgICAgICAgICAgICB2YWx1ZTogbWluQ2hhcixcbiAgICAgICAgICAgICAgbWVzc2FnZTogYE1pbiAke21pbkNoYXJ9IGNoYXJhY3RlcmAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdmFsaWRhdGU6ICh2YWx1ZSkgPT5cbiAgICAgICAgICAgICAgY3VzdG9tVHlwZXNBcnJheS5pbmNsdWRlcyh2YWx1ZSkgfHwgY3VzdG9tVHlwZXNBcnJheS5qb2luKFwiIG9yIFwiKSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBpZD17ZmllbGROYW1lfVxuICAgICAgICAgIGF1dG9Gb2N1cz17aW5pdEZvY3VzfVxuICAgICAgICAgIG5hbWU9e2ZpZWxkTmFtZX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiXG4gICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcbiAgICAgICAgICAgIGlmICghY3VzdG9tVHlwZXNBcnJheS5pbmNsdWRlcyhnZXRWYWx1ZXMoZmllbGROYW1lKSkpIHtcbiAgICAgICAgICAgICAgc2V0RXJyb3IoZmllbGROYW1lLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJtYW51YWxcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgT25seSAke2N1c3RvbVR5cGVzQXJyYXkuam9pbihcIiwgXCIpfSBhbGxvd2VkIGAsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2xlYXJFcnJvcnMoZmllbGROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj17ZmllbGROYW1lfT57bGFiZWx9PC9sYWJlbD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtlcnJvcnNbZmllbGROYW1lXSA/IFwiZXJyb3JcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAge2Vycm9yc1tmaWVsZE5hbWVdICYmIGVycm9yc1tmaWVsZE5hbWVdLm1lc3NhZ2V9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICByZWY9e3JlZ2lzdGVyKHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcIlVzZXIgdHlwZSBpcyByZXF1aXJlZFwiLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiAzMixcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJNYXggMzIgY2hhcmFjdGVyXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWluTGVuZ3RoOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiAyLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIk1pbiAyIGNoYXJhY3RlclwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAodmFsdWUpID0+XG4gICAgICAgICAgICAgIFtcImFkbWluXCIsIFwidXNlclwiLCBcIm1vZGVyYXRvclwiXS5pbmNsdWRlcyh2YWx1ZSkgfHxcbiAgICAgICAgICAgICAgXCJhZG1pbiBvciBtb2RlcmF0b3Igb3IgdXNlclwiLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIGlkPVwicm9sZVwiXG4gICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxuICAgICAgICAgIG5hbWU9XCJyb2xlXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJhZG1pbiwgbW9kZXJhdG9yIG9yIHVzZXJcIlxuICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm5ldy1wYXNzd29yZFwiXG4gICAgICAgICAgb25DaGFuZ2U9eygpID0+IHtcbiAgICAgICAgICAgIGlmICghW1wiYWRtaW5cIiwgXCJ1c2VyXCIsIFwibW9kZXJhdG9yXCJdLmluY2x1ZGVzKGdldFZhbHVlcyhcInJvbGVcIikpKSB7XG4gICAgICAgICAgICAgIHNldEVycm9yKFwicm9sZVwiLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJtYW51YWxcIixcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIk9ubHkgJ3VzZXInLCAnbW9kZXJhdG9yJyBhbmQgJ2FkbWluJyBcIixcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjbGVhckVycm9ycyhcInJvbGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJyb2xlXCI+VXNlciBUeXBlPC9sYWJlbD5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtlcnJvcnMucm9sZSA/IFwiZXJyb3JcIiA6IFwiXCJ9YH0+XG4gICAgICAgICAge2Vycm9ycy5yb2xlPy5tZXNzYWdlfVxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgPC9GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVR5cGVUZXh0RmllbGQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/formComponents/formFields/CustomTypeTextField.js\n");

/***/ })

}]);