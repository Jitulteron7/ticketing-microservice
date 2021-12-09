"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/tickets/[ticketId]";
exports.ids = ["pages/tickets/[ticketId]"];
exports.modules = {

/***/ "./hooks/use-request.js":
/*!******************************!*\
  !*** ./hooks/use-request.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ url , method , body , onSuccess  })=>{\n    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const doRequest = async (props = {\n    })=>{\n        try {\n            setErrors(null);\n            const response = await (axios__WEBPACK_IMPORTED_MODULE_1___default())[method](url, {\n                ...body,\n                ...props\n            });\n            if (onSuccess) {\n                onSuccess(response.data);\n            }\n            return response.data;\n        } catch (err1) {\n            console.log(err1.response, \"error\");\n            if (err1.response.status == 520) {\n                return;\n            }\n            setErrors(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: \"alert alert-danger\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\newDev\\\\advNode\\\\microservices\\\\Ticketing\\\\client\\\\hooks\\\\use-request.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                },\n                __self: undefined,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h4\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\newDev\\\\advNode\\\\microservices\\\\Ticketing\\\\client\\\\hooks\\\\use-request.js\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        },\n                        __self: undefined,\n                        children: \"Ooops....\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"ul\", {\n                        className: \"my-0\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\newDev\\\\advNode\\\\microservices\\\\Ticketing\\\\client\\\\hooks\\\\use-request.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        },\n                        __self: undefined,\n                        children: err1.response.data.errors.map((err)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                                __source: {\n                                    fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\newDev\\\\advNode\\\\microservices\\\\Ticketing\\\\client\\\\hooks\\\\use-request.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 15\n                                },\n                                __self: undefined,\n                                children: err.message\n                            }, err.message)\n                        )\n                    })\n                ]\n            }));\n        }\n    };\n    return {\n        doRequest,\n        errors\n    };\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2UtcmVxdWVzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QjtBQUNPO0FBRWhDLGlFQUFnQixFQUFDLENBQUNFLEdBQUcsR0FBRUMsTUFBTSxHQUFFQyxJQUFJLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUNwRCxLQUFLLE1BQUVDLE1BQU0sTUFBRUMsU0FBUyxNQUFJTiwrQ0FBUSxDQUFDLElBQUk7SUFFekMsS0FBSyxDQUFDTyxTQUFTLFVBQVVDLEtBQUssR0FBQyxDQUFDO0lBQUEsQ0FBQyxHQUFLLENBQUM7UUFDckMsR0FBRyxDQUFDLENBQUM7WUFDSEYsU0FBUyxDQUFDLElBQUk7WUFDZCxLQUFLLENBQUNHLFFBQVEsR0FBRyxLQUFLLENBQUNWLDhDQUFLLENBQUNHLE1BQU0sRUFBRUQsR0FBRyxFQUFFLENBQUM7bUJBQUdFLElBQUk7bUJBQUlLLEtBQUs7WUFBQSxDQUFDO1lBRTVELEVBQUUsRUFBRUosU0FBUyxFQUFFLENBQUM7Z0JBQ2RBLFNBQVMsQ0FBQ0ssUUFBUSxDQUFDQyxJQUFJO1lBQ3pCLENBQUM7WUFFRCxNQUFNLENBQUNELFFBQVEsQ0FBQ0MsSUFBSTtRQUN0QixDQUFDLENBQUMsS0FBSyxFQUFFQyxJQUFHLEVBQUUsQ0FBQztZQUNiQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBRyxDQUFDRixRQUFRLEVBQUMsQ0FBTztZQUNoQyxFQUFFLEVBQUNFLElBQUcsQ0FBQ0YsUUFBUSxDQUFDSyxNQUFNLElBQUUsR0FBRyxFQUFDLENBQUM7Z0JBQzNCLE1BQU07WUFDUixDQUFDO1lBQ0RSLFNBQVMsdUVBQ05TLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFvQjs7Ozs7Ozs7eUZBQ2hDQyxDQUFFOzs7Ozs7O2tDQUFDLENBQVM7O3lGQUNaQyxDQUFFO3dCQUFDRixTQUFTLEVBQUMsQ0FBTTs7Ozs7OztrQ0FDakJMLElBQUcsQ0FBQ0YsUUFBUSxDQUFDQyxJQUFJLENBQUNMLE1BQU0sQ0FBQ2MsR0FBRyxFQUFDUixHQUFHLHdFQUM5QlMsQ0FBRTs7Ozs7OzswQ0FBb0JULEdBQUcsQ0FBQ1UsT0FBTzsrQkFBekJWLEdBQUcsQ0FBQ1UsT0FBTzs7Ozs7UUFLOUIsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsQ0FBQztRQUFDZCxTQUFTO1FBQUVGLE1BQU07SUFBQyxDQUFDO0FBQzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9ob29rcy91c2UtcmVxdWVzdC5qcz9hNDZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKHsgdXJsLCBtZXRob2QsIGJvZHksIG9uU3VjY2VzcyB9KSA9PiB7XG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBkb1JlcXVlc3QgPSBhc3luYyAocHJvcHM9e30pID0+IHtcbiAgICB0cnkge1xuICAgICAgc2V0RXJyb3JzKG51bGwpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc1ttZXRob2RdKHVybCwgey4uLmJvZHksLi4ucHJvcHN9KTtcblxuICAgICAgaWYgKG9uU3VjY2Vzcykge1xuICAgICAgICBvblN1Y2Nlc3MocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLFwiZXJyb3JcIilcbiAgICAgIGlmKGVyci5yZXNwb25zZS5zdGF0dXM9PTUyMCl7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNldEVycm9ycyhcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cbiAgICAgICAgICA8aDQ+T29vcHMuLi4uPC9oND5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibXktMFwiPlxuICAgICAgICAgICAge2Vyci5yZXNwb25zZS5kYXRhLmVycm9ycy5tYXAoZXJyID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17ZXJyLm1lc3NhZ2V9PntlcnIubWVzc2FnZX08L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4geyBkb1JlcXVlc3QsIGVycm9ycyB9O1xufTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwidXJsIiwibWV0aG9kIiwiYm9keSIsIm9uU3VjY2VzcyIsImVycm9ycyIsInNldEVycm9ycyIsImRvUmVxdWVzdCIsInByb3BzIiwicmVzcG9uc2UiLCJkYXRhIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImRpdiIsImNsYXNzTmFtZSIsImg0IiwidWwiLCJtYXAiLCJsaSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/use-request.js\n");

/***/ }),

/***/ "./pages/tickets/[ticketId].js":
/*!*************************************!*\
  !*** ./pages/tickets/[ticketId].js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_use_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-request */ \"./hooks/use-request.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst TicketShow = ({ ticket  })=>{\n    const { doRequest , errors  } = (0,_hooks_use_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n        url: \"/api/orders\",\n        method: 'post',\n        body: {\n            ticketId: ticket.id\n        },\n        onSuccess: (order)=>next_router__WEBPACK_IMPORTED_MODULE_2___default().push(`/orders/[orderId]`, `/orders/${order.id}`)\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\newDev\\\\advNode\\\\microservices\\\\Ticketing\\\\client\\\\pages\\\\tickets\\\\[ticketId].js\",\n            lineNumber: 17,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\newDev\\\\advNode\\\\microservices\\\\Ticketing\\\\client\\\\pages\\\\tickets\\\\[ticketId].js\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                },\n                __self: undefined,\n                children: ticket.title\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h4\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\newDev\\\\advNode\\\\microservices\\\\Ticketing\\\\client\\\\pages\\\\tickets\\\\[ticketId].js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                },\n                __self: undefined,\n                children: [\n                    \"Price: \",\n                    ticket.price\n                ]\n            }),\n            errors,\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                onClick: ()=>{\n                    doRequest();\n                },\n                className: 'btn btn-primary',\n                __source: {\n                    fileName: \"C:\\\\Users\\\\Asus\\\\Desktop\\\\newDev\\\\advNode\\\\microservices\\\\Ticketing\\\\client\\\\pages\\\\tickets\\\\[ticketId].js\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                },\n                __self: undefined,\n                children: \"Purchase\"\n            })\n        ]\n    }));\n};\nTicketShow.getInitialProps = async (context, client)=>{\n    const { ticketId  } = context.query;\n    // const { data }=await client.get(`/api/tickets/${ticketId}`);\n    const data = {\n        id: 123,\n        title: \"testing 1\",\n        price: 20\n    };\n    return {\n        ticket: data\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TicketShow);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90aWNrZXRzL1t0aWNrZXRJZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnRDtBQUNoQjtBQUdoQyxLQUFLLENBQUNFLFVBQVUsSUFBRyxDQUFDQyxDQUFBQSxNQUFNLEdBQUMsR0FBRyxDQUFDO0lBRTNCLEtBQUssQ0FBQyxDQUFDQyxDQUFBQSxTQUFTLEdBQUNDLE1BQU0sR0FBQyxHQUFDTCw4REFBVSxDQUFDLENBQUM7UUFDakNNLEdBQUcsRUFBQyxDQUFhO1FBQ2pCQyxNQUFNLEVBQUMsQ0FBTTtRQUNiQyxJQUFJLEVBQUMsQ0FBQztZQUNGQyxRQUFRLEVBQUNOLE1BQU0sQ0FBQ08sRUFBRTtRQUN0QixDQUFDO1FBQ0RDLFNBQVMsR0FBRUMsS0FBSyxHQUFHWCx1REFBVyxFQUFFLGlCQUFpQixJQUFHLFFBQVEsRUFBRVcsS0FBSyxDQUFDRixFQUFFO0lBQzFFLENBQUM7SUFFRCxNQUFNLHVFQUNMSSxDQUFHOzs7Ozs7OztpRkFDQ0MsQ0FBRTs7Ozs7OzswQkFBRVosTUFBTSxDQUFDYSxLQUFLOztrRkFDaEJDLENBQUU7Ozs7Ozs7O29CQUFDLENBQU87b0JBQUNkLE1BQU0sQ0FBQ2UsS0FBSzs7O1lBQ3ZCYixNQUFNO2lGQUNOYyxDQUFNO2dCQUFDQyxPQUFPLE1BQU0sQ0FBQ2hCO29CQUFBQSxTQUFTO2dCQUFFLENBQUM7Z0JBQUVpQixTQUFTLEVBQUUsQ0FBaUI7Ozs7Ozs7MEJBQUUsQ0FBUTs7OztBQUVsRixDQUFDO0FBRURuQixVQUFVLENBQUNvQixlQUFlLFVBQVNDLE9BQU8sRUFBQ0MsTUFBTSxHQUFHLENBQUM7SUFDakQsS0FBSyxDQUFDLENBQUNmLENBQUFBLFFBQVEsR0FBQyxHQUFDYyxPQUFPLENBQUNFLEtBQUs7SUFDOUIsRUFBK0Q7SUFDL0QsS0FBSyxDQUFFQyxJQUFJLEdBQUUsQ0FBQztRQUNWaEIsRUFBRSxFQUFDLEdBQUc7UUFDTk0sS0FBSyxFQUFDLENBQVc7UUFDakJFLEtBQUssRUFBQyxFQUFFO0lBQ2hCLENBQUM7SUFFRyxNQUFNLENBQUMsQ0FBQ2Y7UUFBQUEsTUFBTSxFQUFDdUIsSUFBSTtJQUFBLENBQUM7QUFDeEIsQ0FBQztBQUVELGlFQUFleEIsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3BhZ2VzL3RpY2tldHMvW3RpY2tldElkXS5qcz9hMGE0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VSZXF1ZXN0IGZyb20gXCIuLi8uLi9ob29rcy91c2UtcmVxdWVzdFwiXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCJcclxuXHJcblxyXG5jb25zdCBUaWNrZXRTaG93ID0oe3RpY2tldH0pPT57XHJcblxyXG4gICAgY29uc3Qge2RvUmVxdWVzdCxlcnJvcnN9PXVzZVJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDpcIi9hcGkvb3JkZXJzXCIsXHJcbiAgICAgICAgbWV0aG9kOidwb3N0JyxcclxuICAgICAgICBib2R5OntcclxuICAgICAgICAgICAgdGlja2V0SWQ6dGlja2V0LmlkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblN1Y2Nlc3M6KG9yZGVyKT0+Um91dGVyLnB1c2goYC9vcmRlcnMvW29yZGVySWRdYCxgL29yZGVycy8ke29yZGVyLmlkfWApXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybihcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGgxPnt0aWNrZXQudGl0bGV9PC9oMT5cclxuICAgICAgICA8aDQ+UHJpY2U6IHt0aWNrZXQucHJpY2V9PC9oND5cclxuICAgICAgICB7ZXJyb3JzfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCk9Pntkb1JlcXVlc3QoKX19IGNsYXNzTmFtZT17J2J0biBidG4tcHJpbWFyeSd9PlB1cmNoYXNlPC9idXR0b24+XHJcbiAgICA8L2Rpdj4pXHJcbn1cclxuXHJcblRpY2tldFNob3cuZ2V0SW5pdGlhbFByb3BzPSBhc3luYyAoY29udGV4dCxjbGllbnQpPT57XHJcbiAgICBjb25zdCB7dGlja2V0SWR9PWNvbnRleHQucXVlcnlcclxuICAgIC8vIGNvbnN0IHsgZGF0YSB9PWF3YWl0IGNsaWVudC5nZXQoYC9hcGkvdGlja2V0cy8ke3RpY2tldElkfWApO1xyXG4gICAgY29uc3QgIGRhdGEgPXsgXHJcbiAgICAgICAgaWQ6MTIzLFxyXG4gICAgICAgIHRpdGxlOlwidGVzdGluZyAxXCIsXHJcbiAgICAgICAgcHJpY2U6MjBcclxufVxyXG5cclxuICAgIHJldHVybiB7dGlja2V0OmRhdGF9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpY2tldFNob3ciXSwibmFtZXMiOlsidXNlUmVxdWVzdCIsIlJvdXRlciIsIlRpY2tldFNob3ciLCJ0aWNrZXQiLCJkb1JlcXVlc3QiLCJlcnJvcnMiLCJ1cmwiLCJtZXRob2QiLCJib2R5IiwidGlja2V0SWQiLCJpZCIsIm9uU3VjY2VzcyIsIm9yZGVyIiwicHVzaCIsImRpdiIsImgxIiwidGl0bGUiLCJoNCIsInByaWNlIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJjbGllbnQiLCJxdWVyeSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tickets/[ticketId].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/tickets/[ticketId].js"));
module.exports = __webpack_exports__;

})();