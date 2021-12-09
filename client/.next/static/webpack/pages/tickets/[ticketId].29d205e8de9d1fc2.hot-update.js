"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tickets/[ticketId]",{

/***/ "./pages/tickets/[ticketId].js":
/*!*************************************!*\
  !*** ./pages/tickets/[ticketId].js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Asus_Desktop_newDev_advNode_microservices_Ticketing_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Asus_Desktop_newDev_advNode_microservices_Ticketing_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Asus_Desktop_newDev_advNode_microservices_Ticketing_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-request */ \"./hooks/use-request.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar TicketShow = function(param) {\n    var ticket = param.ticket;\n    _s();\n    var ref = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        url: \"/api/orders\",\n        method: 'post',\n        body: {\n            ticketId: ticket.id\n        },\n        onSuccess: function(order) {\n            return next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/orders/[orderId]\", \"/orders/\".concat(order.id));\n        }\n    }), doRequest = ref.doRequest, errors = ref.errors;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        style: {\n            margin: \"3% auto\",\n            width: \"50%\"\n        },\n        __source: {\n            fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\newDev\\\\advNode\\\\microservices\\\\Ticketing\\\\client\\\\pages\\\\tickets\\\\[ticketId].js\",\n            lineNumber: 17,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"center\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\newDev\\\\advNode\\\\microservices\\\\Ticketing\\\\client\\\\pages\\\\tickets\\\\[ticketId].js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\newDev\\\\advNode\\\\microservices\\\\Ticketing\\\\client\\\\pages\\\\tickets\\\\[ticketId].js\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \"Ticket Info\"\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    justifyContent: \"space-between\",\n                    margin: \"4% 0\",\n                    align: \"center\"\n                },\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\newDev\\\\advNode\\\\microservices\\\\Ticketing\\\\client\\\\pages\\\\tickets\\\\[ticketId].js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"h4\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\newDev\\\\advNode\\\\microservices\\\\Ticketing\\\\client\\\\pages\\\\tickets\\\\[ticketId].js\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: [\n                            \"Name : \",\n                            ticket.title\n                        ]\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"h4\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\newDev\\\\advNode\\\\microservices\\\\Ticketing\\\\client\\\\pages\\\\tickets\\\\[ticketId].js\",\n                            lineNumber: 21,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: [\n                            \"Price : \",\n                            ticket.price\n                        ]\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"center\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\newDev\\\\advNode\\\\microservices\\\\Ticketing\\\\client\\\\pages\\\\tickets\\\\[ticketId].js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: errors\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"center\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\newDev\\\\advNode\\\\microservices\\\\Ticketing\\\\client\\\\pages\\\\tickets\\\\[ticketId].js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                    onClick: function() {\n                        doRequest();\n                    },\n                    className: 'btn btn-primary',\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\newDev\\\\advNode\\\\microservices\\\\Ticketing\\\\client\\\\pages\\\\tickets\\\\[ticketId].js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \"Purchase\"\n                })\n            })\n        ]\n    }));\n};\n_s(TicketShow, \"OLULpwNQjeDV6kwfkr52NMFdmaI=\", false, function() {\n    return [\n        _hooks_use_request__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = TicketShow;\nTicketShow.getInitialProps = _asyncToGenerator(C_Users_Asus_Desktop_newDev_advNode_microservices_Ticketing_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(context, client) {\n    var ticketId, data;\n    return C_Users_Asus_Desktop_newDev_advNode_microservices_Ticketing_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                ticketId = context.query.ticketId;\n                data = {\n                    id: 123,\n                    title: \"testing 1\",\n                    price: 20\n                };\n                return _ctx.abrupt(\"return\", {\n                    ticket: data\n                });\n            case 3:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (TicketShow);\nvar _c;\n$RefreshReg$(_c, \"TicketShow\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90aWNrZXRzL1t0aWNrZXRJZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2hDLEdBQUssQ0FBQ0UsVUFBVSxHQUFFLFFBQVEsUUFBSSxDQUFDO1FBQVhDLE1BQU0sU0FBTkEsTUFBTTs7SUFFdEIsR0FBSyxDQUFvQkgsR0FPdkIsR0FQdUJBLDhEQUFVLENBQUMsQ0FBQztRQUNqQ0ksR0FBRyxFQUFDLENBQWE7UUFDakJDLE1BQU0sRUFBQyxDQUFNO1FBQ2JDLElBQUksRUFBQyxDQUFDO1lBQ0ZDLFFBQVEsRUFBQ0osTUFBTSxDQUFDSyxFQUFFO1FBQ3RCLENBQUM7UUFDREMsU0FBUyxFQUFDLFFBQVEsQ0FBUEMsS0FBSztZQUFHVCxNQUFNLENBQU5BLHVEQUFXLENBQUUsQ0FBaUIsb0JBQUcsQ0FBUSxVQUFXLE9BQVRTLEtBQUssQ0FBQ0YsRUFBRTs7SUFDMUUsQ0FBQyxHQVBNSSxTQUFTLEdBQVNaLEdBT3ZCLENBUEtZLFNBQVMsRUFBQ0MsTUFBTSxHQUFFYixHQU92QixDQVBlYSxNQUFNO0lBU3ZCLE1BQU0sdUVBQ0xDLENBQUc7UUFBQ0MsS0FBSyxFQUFFLENBQUNDO1lBQUFBLE1BQU0sRUFBQyxDQUFTO1lBQUNDLEtBQUssRUFBQyxDQUFLO1FBQUEsQ0FBQzs7Ozs7Ozs7aUZBQ3JDQyxDQUFNOzs7Ozs7OytGQUFFQyxDQUFFOzs7Ozs7OzhCQUFDLENBQVc7OztrRkFDdEJMLENBQUc7Z0JBQUNDLEtBQUssRUFBRSxDQUFDSztvQkFBQUEsT0FBTyxFQUFDLENBQU07b0JBQUNDLGNBQWMsRUFBQyxDQUFlO29CQUFDTCxNQUFNLEVBQUMsQ0FBTTtvQkFBQ00sS0FBSyxFQUFDLENBQVE7Z0JBQUEsQ0FBQzs7Ozs7Ozs7MEZBQ25GQyxDQUFFOzs7Ozs7Ozs0QkFBQyxDQUFPOzRCQUFDcEIsTUFBTSxDQUFDcUIsS0FBSzs7OzBGQUN2QkQsQ0FBRTs7Ozs7Ozs7NEJBQUMsQ0FBUTs0QkFBQ3BCLE1BQU0sQ0FBQ3NCLEtBQUs7Ozs7O2lGQUU1QlAsQ0FBTTs7Ozs7OzswQkFBRUwsTUFBTTs7aUZBQ2RLLENBQU07Ozs7Ozs7K0ZBQUVRLENBQU07b0JBQUNDLE9BQU8sRUFBRSxRQUFRLEdBQUosQ0FBQ2Y7d0JBQUFBLFNBQVM7b0JBQUUsQ0FBQztvQkFBRWdCLFNBQVMsRUFBRSxDQUFpQjs7Ozs7Ozs4QkFBRSxDQUFROzs7OztBQUUxRixDQUFDO0dBckJLMUIsVUFBVTs7UUFFYUYsMERBQVU7OztLQUZqQ0UsVUFBVTtBQXVCaEJBLFVBQVUsQ0FBQzJCLGVBQWUsZ0xBQUUsUUFBUSxTQUFEQyxPQUFPLEVBQUNDLE1BQU0sRUFBRyxDQUFDO1FBQzFDeEIsUUFBUSxFQUVSeUIsSUFBSTs7OztnQkFGSnpCLFFBQVEsR0FBRXVCLE9BQU8sQ0FBQ0csS0FBSyxDQUF2QjFCLFFBQVE7Z0JBRVJ5QixJQUFJLEdBQUUsQ0FBQztvQkFDVnhCLEVBQUUsRUFBQyxHQUFHO29CQUNOZ0IsS0FBSyxFQUFDLENBQVc7b0JBQ2pCQyxLQUFLLEVBQUMsRUFBRTtnQkFDaEIsQ0FBQzs2Q0FFVSxDQUFDdEI7b0JBQUFBLE1BQU0sRUFBQzZCLElBQUk7Z0JBQUEsQ0FBQzs7Ozs7O0FBQ3hCLENBQUM7QUFFRCwrREFBZTlCLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGlja2V0cy9bdGlja2V0SWRdLmpzP2EwYTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVJlcXVlc3QgZnJvbSBcIi4uLy4uL2hvb2tzL3VzZS1yZXF1ZXN0XCJcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5cclxuXHJcbmNvbnN0IFRpY2tldFNob3cgPSh7dGlja2V0fSk9PntcclxuXHJcbiAgICBjb25zdCB7ZG9SZXF1ZXN0LGVycm9yc309dXNlUmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOlwiL2FwaS9vcmRlcnNcIixcclxuICAgICAgICBtZXRob2Q6J3Bvc3QnLFxyXG4gICAgICAgIGJvZHk6e1xyXG4gICAgICAgICAgICB0aWNrZXRJZDp0aWNrZXQuaWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU3VjY2Vzczoob3JkZXIpPT5Sb3V0ZXIucHVzaChgL29yZGVycy9bb3JkZXJJZF1gLGAvb3JkZXJzLyR7b3JkZXIuaWR9YClcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgPGRpdiBzdHlsZT17e21hcmdpbjpcIjMlIGF1dG9cIix3aWR0aDpcIjUwJVwifX0+XHJcbiAgICAgICAgPGNlbnRlcj48aDE+VGlja2V0IEluZm88L2gxPjwvY2VudGVyPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OlwiZmxleFwiLGp1c3RpZnlDb250ZW50Olwic3BhY2UtYmV0d2VlblwiLG1hcmdpbjpcIjQlIDBcIixhbGlnbjpcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgIDxoND5OYW1lIDoge3RpY2tldC50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICA8aDQ+UHJpY2UgOiB7dGlja2V0LnByaWNlfTwvaDQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGNlbnRlcj57ZXJyb3JzfTwvY2VudGVyPlxyXG4gICAgICAgIDxjZW50ZXI+PGJ1dHRvbiBvbkNsaWNrPXsoKT0+e2RvUmVxdWVzdCgpfX0gY2xhc3NOYW1lPXsnYnRuIGJ0bi1wcmltYXJ5J30+UHVyY2hhc2U8L2J1dHRvbj48L2NlbnRlcj5cclxuICAgIDwvZGl2PilcclxufVxyXG5cclxuVGlja2V0U2hvdy5nZXRJbml0aWFsUHJvcHM9IGFzeW5jIChjb250ZXh0LGNsaWVudCk9PntcclxuICAgIGNvbnN0IHt0aWNrZXRJZH09Y29udGV4dC5xdWVyeVxyXG4gICAgLy8gY29uc3QgeyBkYXRhIH09YXdhaXQgY2xpZW50LmdldChgL2FwaS90aWNrZXRzLyR7dGlja2V0SWR9YCk7XHJcbiAgICBjb25zdCAgZGF0YSA9eyBcclxuICAgICAgICBpZDoxMjMsXHJcbiAgICAgICAgdGl0bGU6XCJ0ZXN0aW5nIDFcIixcclxuICAgICAgICBwcmljZToyMFxyXG59XHJcblxyXG4gICAgcmV0dXJuIHt0aWNrZXQ6ZGF0YX1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGlja2V0U2hvdyJdLCJuYW1lcyI6WyJ1c2VSZXF1ZXN0IiwiUm91dGVyIiwiVGlja2V0U2hvdyIsInRpY2tldCIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJ0aWNrZXRJZCIsImlkIiwib25TdWNjZXNzIiwib3JkZXIiLCJwdXNoIiwiZG9SZXF1ZXN0IiwiZXJyb3JzIiwiZGl2Iiwic3R5bGUiLCJtYXJnaW4iLCJ3aWR0aCIsImNlbnRlciIsImgxIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ24iLCJoNCIsInRpdGxlIiwicHJpY2UiLCJidXR0b24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImNsaWVudCIsImRhdGEiLCJxdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tickets/[ticketId].js\n");

/***/ })

});