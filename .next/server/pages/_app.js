"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "rk": () => (/* binding */ useSendGifState),
/* harmony export */   "vB": () => (/* binding */ setSendGifOpen)
/* harmony export */ });
/* unused harmony export sendGifSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);


const initialState = {
    sendGifOpen: false
};
const sendGifSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "sendGif",
    initialState,
    reducers: {
        setSendGifOpen (state, action) {
            state.sendGifOpen = action.payload;
        }
    }
});
const { setSendGifOpen  } = sendGifSlice.actions;
const useSendGifState = ()=>(0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)((state)=>state.sendGif);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendGifSlice.reducer);


/***/ }),

/***/ 5097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./src/features/servers.ts
var servers = __webpack_require__(37);
// EXTERNAL MODULE: ./src/features/userSettings.ts
var userSettings = __webpack_require__(6627);
// EXTERNAL MODULE: ./src/features/user.ts
var user = __webpack_require__(786);
// EXTERNAL MODULE: ./src/features/addServer.ts
var addServer = __webpack_require__(5417);
// EXTERNAL MODULE: ./src/features/serverSettings.ts
var serverSettings = __webpack_require__(503);
// EXTERNAL MODULE: ./src/features/sendGif.ts
var sendGif = __webpack_require__(3619);
;// CONCATENATED MODULE: ./src/redux/store.ts







const store = (0,toolkit_.configureStore)({
    reducer: {
        servers: servers/* default */.ZP,
        userSettings: userSettings/* default */.ZP,
        serverSettings: serverSettings/* default */.ZP,
        user: user/* default */.ZP,
        addServer: addServer/* default */.ZP,
        sendGif: sendGif/* default */.ZP
    }
});

;// CONCATENATED MODULE: ./src/pages/_app.tsx




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
        store: store,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [786,573], () => (__webpack_exec__(5097)));
module.exports = __webpack_exports__;

})();