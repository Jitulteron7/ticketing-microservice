"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Asus_Desktop_newDev_advNode_microservices_Ticketing_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Asus_Desktop_newDev_advNode_microservices_Ticketing_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Asus_Desktop_newDev_advNode_microservices_Ticketing_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_build_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/build-client */ \"./api/build-client.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar AppComponent = function(param) {\n    var Component = param.Component, pageProps = param.pageProps, currentUser = param.currentUser;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\newDev\\\\advNode\\\\microservices\\\\Ticketing\\\\client\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                currentUser: currentUser,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\newDev\\\\advNode\\\\microservices\\\\Ticketing\\\\client\\\\pages\\\\_app.js\",\n                    lineNumber: 9,\n                    columnNumber: 5\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                className: \"container\",\n                style: {\n                    margin: \"5% auto\"\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\newDev\\\\advNode\\\\microservices\\\\Ticketing\\\\client\\\\pages\\\\_app.js\",\n                    lineNumber: 10,\n                    columnNumber: 5\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component, _objectSpread({\n                    currentUser: currentUser\n                }, pageProps, {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\newDev\\\\advNode\\\\microservices\\\\Ticketing\\\\client\\\\pages\\\\_app.js\",\n                        lineNumber: 11,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                }))\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                currentUser: currentUser,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\newDev\\\\advNode\\\\microservices\\\\Ticketing\\\\client\\\\pages\\\\_app.js\",\n                    lineNumber: 13,\n                    columnNumber: 5\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_c = AppComponent;\nAppComponent.getInitialProps = _asyncToGenerator(C_Users_Asus_Desktop_newDev_advNode_microservices_Ticketing_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(appContext) {\n    var client, data, pageProps;\n    return C_Users_Asus_Desktop_newDev_advNode_microservices_Ticketing_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                client = (0,_api_build_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(appContext.ctx);\n                data = {\n                    currentUser: {\n                        userId: \"123123\",\n                        email: \"jitulteron9@gmail.com\",\n                        id: \"12323345\"\n                    }\n                };\n                pageProps = {\n                };\n                if (!appContext.Component.getInitialProps) {\n                    _ctx.next = 7;\n                    break;\n                }\n                _ctx.next = 6;\n                return appContext.Component.getInitialProps(appContext.ctx, client, data.currentUser);\n            case 6:\n                pageProps = _ctx.sent;\n            case 7:\n                return _ctx.abrupt(\"return\", _objectSpread({\n                    pageProps: pageProps\n                }, data));\n            case 8:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppComponent);\nvar _c;\n$RefreshReg$(_c, \"AppComponent\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDSTtBQUNKO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxHQUFLLENBQUNHLFlBQVksR0FBRyxRQUFRLFFBQW1DLENBQUM7UUFBekNDLFNBQVMsU0FBVEEsU0FBUyxFQUFFQyxTQUFTLFNBQVRBLFNBQVMsRUFBRUMsV0FBVyxTQUFYQSxXQUFXO0lBQ3ZELE1BQU0sdUVBQ0hDLENBQUc7Ozs7Ozs7O2lGQUNITiwwREFBTTtnQkFBQ0ssV0FBVyxFQUFFQSxXQUFXOzs7Ozs7OztpRkFDL0JDLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFXO2dCQUFDQyxLQUFLLEVBQUUsQ0FBQ0M7b0JBQUFBLE1BQU0sRUFBQyxDQUFTO2dCQUFBLENBQUM7Ozs7Ozs7K0ZBQ2pETixTQUFTO29CQUFDRSxXQUFXLEVBQUVBLFdBQVc7bUJBQU1ELFNBQVM7Ozs7Ozs7OztpRkFFbkRILDBEQUFNO2dCQUFDSSxXQUFXLEVBQUVBLFdBQVc7Ozs7Ozs7Ozs7QUFHcEMsQ0FBQztLQVZLSCxZQUFZO0FBWWxCQSxZQUFZLENBQUNRLGVBQWUsZ0xBQUcsUUFBUSxTQUFGQyxVQUFVLEVBQUksQ0FBQztRQUM1Q0MsTUFBTSxFQUVOQyxJQUFJLEVBTU5ULFNBQVM7Ozs7Z0JBUlBRLE1BQU0sR0FBR2IsNkRBQVcsQ0FBQ1ksVUFBVSxDQUFDRyxHQUFHO2dCQUVuQ0QsSUFBSSxHQUFJLENBQUNSO29CQUFBQSxXQUFXLEVBQUMsQ0FBQzt3QkFDMUJVLE1BQU0sRUFBQyxDQUFRO3dCQUNmQyxLQUFLLEVBQUMsQ0FBdUI7d0JBQzdCQyxFQUFFLEVBQUMsQ0FBVTtvQkFDZixDQUFDO2dCQUFBLENBQUM7Z0JBRUViLFNBQVMsR0FBRyxDQUFDO2dCQUFBLENBQUM7cUJBQ2RPLFVBQVUsQ0FBQ1IsU0FBUyxDQUFDTyxlQUFlOzs7Ozt1QkFDcEJDLFVBQVUsQ0FBQ1IsU0FBUyxDQUFDTyxlQUFlLENBQUNDLFVBQVUsQ0FBQ0csR0FBRyxFQUFDRixNQUFNLEVBQUNDLElBQUksQ0FBQ1IsV0FBVzs7Z0JBQTdGRCxTQUFTOzs7b0JBSVRBLFNBQVMsRUFBVEEsU0FBUzttQkFDTlMsSUFBSTs7Ozs7O0FBRVgsQ0FBQztBQUVELCtEQUFlWCxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnO1xuaW1wb3J0IGJ1aWxkQ2xpZW50IGZyb20gJy4uL2FwaS9idWlsZC1jbGllbnQnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcblxuY29uc3QgQXBwQ29tcG9uZW50ID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGN1cnJlbnRVc2VyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIDxIZWFkZXIgY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3ttYXJnaW46XCI1JSBhdXRvXCJ9fT5cbiAgICAgIDxDb21wb25lbnQgY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfSB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvZGl2PlxuICAgIDxGb290ZXIgY3VycmVudFVzZXI9e2N1cnJlbnRVc2VyfS8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5BcHBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgYXBwQ29udGV4dCA9PiB7XG4gIGNvbnN0IGNsaWVudCA9IGJ1aWxkQ2xpZW50KGFwcENvbnRleHQuY3R4KTtcbiAgLy8gY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQuZ2V0KCcvYXBpL3VzZXJzL2N1cnJlbnR1c2VyJyk7XG4gIGNvbnN0IGRhdGEgID0ge2N1cnJlbnRVc2VyOntcbiAgICB1c2VySWQ6XCIxMjMxMjNcIixcbiAgICBlbWFpbDpcImppdHVsdGVyb245QGdtYWlsLmNvbVwiLFxuICAgIGlkOlwiMTIzMjMzNDVcIlxuICB9fVxuXG4gIGxldCBwYWdlUHJvcHMgPSB7fTtcbiAgaWYgKGFwcENvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgIHBhZ2VQcm9wcyA9IGF3YWl0IGFwcENvbnRleHQuQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0LmN0eCxjbGllbnQsZGF0YS5jdXJyZW50VXNlcik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhZ2VQcm9wcyxcbiAgICAuLi5kYXRhXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBDb21wb25lbnQ7XG4iXSwibmFtZXMiOlsiYnVpbGRDbGllbnQiLCJIZWFkZXIiLCJGb290ZXIiLCJBcHBDb21wb25lbnQiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjdXJyZW50VXNlciIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwibWFyZ2luIiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwQ29udGV4dCIsImNsaWVudCIsImRhdGEiLCJjdHgiLCJ1c2VySWQiLCJlbWFpbCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});