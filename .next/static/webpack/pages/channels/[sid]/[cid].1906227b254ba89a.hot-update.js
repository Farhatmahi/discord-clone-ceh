"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/channels/[sid]/[cid]",{

/***/ "./src/components/Title.tsx":
/*!**********************************!*\
  !*** ./src/components/Title.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Title; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tailwind-styled-components */ \"./node_modules/tailwind-styled-components/dist/index.js\");\n/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/servers */ \"./src/features/servers.ts\");\n/* harmony import */ var _assets_memberListIcon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/memberListIcon.svg */ \"./assets/memberListIcon.svg\");\n/* harmony import */ var _features_userSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../features/userSettings */ \"./src/features/userSettings.ts\");\n/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/hooks */ \"./src/redux/hooks.ts\");\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  flex flex-none h-12 px-2 items-center justify-between bg-white z-10 border-b border-gray-300\\n  dark:bg-dark-100 dark:border-0 dark:shadow-[0_1px_0_0_rgba(4,4,5,0.2),0_1.5px_0_0_rgba(6,6,7,0.05),0_2px_0_0_rgba(4,4,5,0.05)]\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  flex items-center\\n  dark:text-[#8E9297]\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  mx-2 text-3xl font-thin\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  mr-2 font-semibold\\n  dark:text-white\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  w-px h-6 mx-2 bg-gray-300\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  p-2 text-xs\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  mx-2\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  cursor-pointer\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Title() {\n    var toggleMembersList = function toggleMembersList() {\n        dispatch((0,_features_userSettings__WEBPACK_IMPORTED_MODULE_6__.setMemberListOpen)(!memberListOpen));\n    };\n    _s();\n    var channel = (0,_features_servers__WEBPACK_IMPORTED_MODULE_4__.useServersState)().channel;\n    var memberListOpen = (0,_features_userSettings__WEBPACK_IMPORTED_MODULE_6__.useUserSettingsState)().memberListOpen;\n    var dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeadingContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeadingIcon, {\n                        children: \"#\"\n                    }, void 0, false, {\n                        fileName: \"/Users/farhatmahi/Documents/Cehpoint/discord-clone/src/components/Title.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Heading, {\n                        children: channel.name\n                    }, void 0, false, {\n                        fileName: \"/Users/farhatmahi/Documents/Cehpoint/discord-clone/src/components/Title.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    channel.topic && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Divider, {}, void 0, false, {\n                                fileName: \"/Users/farhatmahi/Documents/Cehpoint/discord-clone/src/components/Title.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Topic, {\n                                children: channel.topic\n                            }, void 0, false, {\n                                fileName: \"/Users/farhatmahi/Documents/Cehpoint/discord-clone/src/components/Title.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/farhatmahi/Documents/Cehpoint/discord-clone/src/components/Title.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_8__.IoMdVideocam, {\n                            className: \"text-gray-300\"\n                        }, void 0, false, {\n                            fileName: \"/Users/farhatmahi/Documents/Cehpoint/discord-clone/src/components/Title.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/farhatmahi/Documents/Cehpoint/discord-clone/src/components/Title.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Toolbar, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledImage, {\n                            onClick: toggleMembersList,\n                            src: _assets_memberListIcon_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                            width: 24,\n                            height: 24\n                        }, void 0, false, {\n                            fileName: \"/Users/farhatmahi/Documents/Cehpoint/discord-clone/src/components/Title.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/farhatmahi/Documents/Cehpoint/discord-clone/src/components/Title.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/farhatmahi/Documents/Cehpoint/discord-clone/src/components/Title.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/farhatmahi/Documents/Cehpoint/discord-clone/src/components/Title.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n};\n_s(Title, \"aSZJtuKVgKOVJ8LuaWaG9iISxVk=\", false, function() {\n    return [\n        _features_servers__WEBPACK_IMPORTED_MODULE_4__.useServersState,\n        _features_userSettings__WEBPACK_IMPORTED_MODULE_6__.useUserSettingsState,\n        _redux_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch\n    ];\n});\n_c = Title;\nvar Container = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().section(_templateObject());\n_c1 = Container;\nvar HeadingContainer = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div(_templateObject1());\n_c2 = HeadingContainer;\nvar HeadingIcon = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div(_templateObject2());\n_c3 = HeadingIcon;\nvar Heading = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().h3(_templateObject3());\n_c4 = Heading;\nvar Divider = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div(_templateObject4());\n_c5 = Divider;\nvar Topic = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().span(_templateObject5());\n_c6 = Topic;\nvar Toolbar = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div(_templateObject6());\n_c7 = Toolbar;\nvar StyledImage = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default()((next_image__WEBPACK_IMPORTED_MODULE_2___default()))(_templateObject7());\n_c8 = StyledImage;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n$RefreshReg$(_c, \"Title\");\n$RefreshReg$(_c1, \"Container\");\n$RefreshReg$(_c2, \"HeadingContainer\");\n$RefreshReg$(_c3, \"HeadingIcon\");\n$RefreshReg$(_c4, \"Heading\");\n$RefreshReg$(_c5, \"Divider\");\n$RefreshReg$(_c6, \"Topic\");\n$RefreshReg$(_c7, \"Toolbar\");\n$RefreshReg$(_c8, \"StyledImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaXRsZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDYTtBQUNVO0FBQ087QUFJM0I7QUFDYztBQUNGO0FBRS9CLFNBQVNRLEtBQUssR0FBRztRQUtyQkMsaUJBQWlCLEdBQTFCLFNBQVNBLGlCQUFpQixHQUFHO1FBQzNCQyxRQUFRLENBQUNOLHlFQUFpQixDQUFDLENBQUNPLGNBQWMsQ0FBQyxDQUFDLENBQUM7S0FDOUM7O0lBTkQsSUFBTSxPQUFTLEdBQUtULGtFQUFlLEVBQUUsQ0FBN0JVLE9BQU87SUFDZixJQUFNLGNBQWdCLEdBQUtQLDRFQUFvQixFQUFFLENBQXpDTSxjQUFjO0lBQ3RCLElBQU1ELFFBQVEsR0FBR0osNERBQWMsRUFBRTtJQU1qQyxxQkFDRSw4REFBQ08sU0FBUzs7MEJBQ1IsOERBQUNDLGdCQUFnQjs7a0NBQ2YsOERBQUNDLFdBQVc7a0NBQUMsR0FBQzs7Ozs7NEJBQWM7a0NBQzVCLDhEQUFDQyxPQUFPO2tDQUFFSixPQUFPLENBQUNLLElBQUk7Ozs7OzRCQUFXO29CQUNoQ0wsT0FBTyxDQUFDTSxLQUFLLGtCQUNaOzswQ0FDRSw4REFBQ0MsT0FBTzs7OztvQ0FBRzswQ0FFWCw4REFBQ0MsS0FBSzswQ0FBRVIsT0FBTyxDQUFDTSxLQUFLOzs7OztvQ0FBUzs7b0NBQzdCOzs7Ozs7b0JBRVk7MEJBQ25CLDhEQUFDRyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMscUJBQXFCOztrQ0FDbEMsOERBQUNELEtBQUc7a0NBQ0YsNEVBQUNkLHdEQUFZOzRCQUFDZSxTQUFTLEVBQUMsZUFBZTs7Ozs7Z0NBQUc7Ozs7OzRCQUN0QztrQ0FDTiw4REFBQ0MsT0FBTztrQ0FDTiw0RUFBQ0MsV0FBVzs0QkFDVkMsT0FBTyxFQUFFaEIsaUJBQWlCOzRCQUMxQmlCLEdBQUcsRUFBRXZCLGtFQUFjOzRCQUNuQndCLEtBQUssRUFBRSxFQUFFOzRCQUNUQyxNQUFNLEVBQUUsRUFBRTs7Ozs7Z0NBQ1Y7Ozs7OzRCQUNNOzs7Ozs7b0JBQ047Ozs7OztZQUNJLENBQ1o7Q0FDSDtHQXJDdUJwQixLQUFLOztRQUNQTiw4REFBZTtRQUNSRyx3RUFBb0I7UUFDOUJDLHdEQUFjOzs7QUFIVEUsS0FBQUEsS0FBSztBQXVDN0IsSUFBTUssU0FBUyxHQUFHWix5RUFBVSxtQkFHM0I7QUFIS1ksTUFBQUEsU0FBUztBQUtmLElBQU1DLGdCQUFnQixHQUFHYixxRUFBTSxvQkFHOUI7QUFIS2EsTUFBQUEsZ0JBQWdCO0FBS3RCLElBQU1DLFdBQVcsR0FBR2QscUVBQU0sb0JBRXpCO0FBRktjLE1BQUFBLFdBQVc7QUFJakIsSUFBTUMsT0FBTyxHQUFHZixvRUFBSyxvQkFHcEI7QUFIS2UsTUFBQUEsT0FBTztBQUtiLElBQU1HLE9BQU8sR0FBR2xCLHFFQUFNLG9CQUVyQjtBQUZLa0IsTUFBQUEsT0FBTztBQUliLElBQU1DLEtBQUssR0FBR25CLHNFQUFPLG9CQUVwQjtBQUZLbUIsTUFBQUEsS0FBSztBQUlYLElBQU1HLE9BQU8sR0FBR3RCLHFFQUFNLG9CQUVyQjtBQUZLc0IsTUFBQUEsT0FBTztBQUliLElBQU1DLFdBQVcsR0FBR3ZCLGlFQUFFLENBQUNELG1EQUFLLENBQUMsb0JBRTVCO0FBRkt3QixNQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RpdGxlLnRzeD8wYTc4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHR3IGZyb20gXCJ0YWlsd2luZC1zdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgdXNlU2VydmVyc1N0YXRlIH0gZnJvbSBcIi4uL2ZlYXR1cmVzL3NlcnZlcnNcIjtcbmltcG9ydCBtZW1iZXJMaXN0SWNvbiBmcm9tIFwiLi4vLi4vYXNzZXRzL21lbWJlckxpc3RJY29uLnN2Z1wiO1xuaW1wb3J0IHtcbiAgc2V0TWVtYmVyTGlzdE9wZW4sXG4gIHVzZVVzZXJTZXR0aW5nc1N0YXRlLFxufSBmcm9tIFwiLi4vZmVhdHVyZXMvdXNlclNldHRpbmdzXCI7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gXCIuLi9yZWR1eC9ob29rc1wiO1xuaW1wb3J0IHsgSW9NZFZpZGVvY2FtIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpdGxlKCkge1xuICBjb25zdCB7IGNoYW5uZWwgfSA9IHVzZVNlcnZlcnNTdGF0ZSgpO1xuICBjb25zdCB7IG1lbWJlckxpc3RPcGVuIH0gPSB1c2VVc2VyU2V0dGluZ3NTdGF0ZSgpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlTWVtYmVyc0xpc3QoKSB7XG4gICAgZGlzcGF0Y2goc2V0TWVtYmVyTGlzdE9wZW4oIW1lbWJlckxpc3RPcGVuKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8SGVhZGluZ0NvbnRhaW5lcj5cbiAgICAgICAgPEhlYWRpbmdJY29uPiM8L0hlYWRpbmdJY29uPlxuICAgICAgICA8SGVhZGluZz57Y2hhbm5lbC5uYW1lfTwvSGVhZGluZz5cbiAgICAgICAge2NoYW5uZWwudG9waWMgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8RGl2aWRlciAvPlxuXG4gICAgICAgICAgICA8VG9waWM+e2NoYW5uZWwudG9waWN9PC9Ub3BpYz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvSGVhZGluZ0NvbnRhaW5lcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxJb01kVmlkZW9jYW0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VG9vbGJhcj5cbiAgICAgICAgICA8U3R5bGVkSW1hZ2VcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1lbWJlcnNMaXN0fVxuICAgICAgICAgICAgc3JjPXttZW1iZXJMaXN0SWNvbn1cbiAgICAgICAgICAgIHdpZHRoPXsyNH1cbiAgICAgICAgICAgIGhlaWdodD17MjR9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG5cbmNvbnN0IENvbnRhaW5lciA9IHR3LnNlY3Rpb25gXG4gIGZsZXggZmxleC1ub25lIGgtMTIgcHgtMiBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLXdoaXRlIHotMTAgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwXG4gIGRhcms6YmctZGFyay0xMDAgZGFyazpib3JkZXItMCBkYXJrOnNoYWRvdy1bMF8xcHhfMF8wX3JnYmEoNCw0LDUsMC4yKSwwXzEuNXB4XzBfMF9yZ2JhKDYsNiw3LDAuMDUpLDBfMnB4XzBfMF9yZ2JhKDQsNCw1LDAuMDUpXVxuYDtcblxuY29uc3QgSGVhZGluZ0NvbnRhaW5lciA9IHR3LmRpdmBcbiAgZmxleCBpdGVtcy1jZW50ZXJcbiAgZGFyazp0ZXh0LVsjOEU5Mjk3XVxuYDtcblxuY29uc3QgSGVhZGluZ0ljb24gPSB0dy5kaXZgXG4gIG14LTIgdGV4dC0zeGwgZm9udC10aGluXG5gO1xuXG5jb25zdCBIZWFkaW5nID0gdHcuaDNgXG4gIG1yLTIgZm9udC1zZW1pYm9sZFxuICBkYXJrOnRleHQtd2hpdGVcbmA7XG5cbmNvbnN0IERpdmlkZXIgPSB0dy5kaXZgXG4gIHctcHggaC02IG14LTIgYmctZ3JheS0zMDBcbmA7XG5cbmNvbnN0IFRvcGljID0gdHcuc3BhbmBcbiAgcC0yIHRleHQteHNcbmA7XG5cbmNvbnN0IFRvb2xiYXIgPSB0dy5kaXZgXG4gIG14LTJcbmA7XG5cbmNvbnN0IFN0eWxlZEltYWdlID0gdHcoSW1hZ2UpYFxuICBjdXJzb3ItcG9pbnRlclxuYDtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInR3IiwidXNlU2VydmVyc1N0YXRlIiwibWVtYmVyTGlzdEljb24iLCJzZXRNZW1iZXJMaXN0T3BlbiIsInVzZVVzZXJTZXR0aW5nc1N0YXRlIiwidXNlQXBwRGlzcGF0Y2giLCJJb01kVmlkZW9jYW0iLCJUaXRsZSIsInRvZ2dsZU1lbWJlcnNMaXN0IiwiZGlzcGF0Y2giLCJtZW1iZXJMaXN0T3BlbiIsImNoYW5uZWwiLCJDb250YWluZXIiLCJIZWFkaW5nQ29udGFpbmVyIiwiSGVhZGluZ0ljb24iLCJIZWFkaW5nIiwibmFtZSIsInRvcGljIiwiRGl2aWRlciIsIlRvcGljIiwiZGl2IiwiY2xhc3NOYW1lIiwiVG9vbGJhciIsIlN0eWxlZEltYWdlIiwib25DbGljayIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Iiwic2VjdGlvbiIsImgzIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Title.tsx\n"));

/***/ })

});