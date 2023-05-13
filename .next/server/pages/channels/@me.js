"use strict";
(() => {
var exports = {};
exports.id = 25;
exports.ids = [25];
exports.modules = {

/***/ 7942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4191);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_1__);


function Title() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Subcontainer, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Welcome, {
                    children: "Welcome to IBC Media"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Subcontainer, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Welcome, {
                        children: "To get started, select a server from the leftmost panel"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Welcome, {
                        children: "You should always have access to the Global Chat server"
                    })
                ]
            })
        ]
    });
};
const Container = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_1___default().section)`
  flex flex-col h-full w-full items-center justify-center
  dark:text-text-primary
`;
const Subcontainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_1___default().section)`
  flex flex-col items-center justify-center p-4
`;
const Code = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_1___default().span)`
  bg-slate-100
  dark:bg-dark-600
`;
const Welcome = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_1___default().span)`
  text-center
`;


/***/ }),

/***/ 9448:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_servers_Servers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(916);
/* harmony import */ var _components_channels_Channels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7247);
/* harmony import */ var _components_userSettings_UserSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6947);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _features_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(786);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1492);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(37);
/* harmony import */ var _features_userSettings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6627);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(192);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _features_addServer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5417);
/* harmony import */ var _components_addServer_AddServer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7404);
/* harmony import */ var _components_LandingPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7942);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_servers_Servers__WEBPACK_IMPORTED_MODULE_3__, _components_channels_Channels__WEBPACK_IMPORTED_MODULE_4__, _components_userSettings_UserSettings__WEBPACK_IMPORTED_MODULE_5__, firebase_auth__WEBPACK_IMPORTED_MODULE_9__, firebase_firestore__WEBPACK_IMPORTED_MODULE_10__, _firebase__WEBPACK_IMPORTED_MODULE_13__, _components_addServer_AddServer__WEBPACK_IMPORTED_MODULE_16__]);
([_components_servers_Servers__WEBPACK_IMPORTED_MODULE_3__, _components_channels_Channels__WEBPACK_IMPORTED_MODULE_4__, _components_userSettings_UserSettings__WEBPACK_IMPORTED_MODULE_5__, firebase_auth__WEBPACK_IMPORTED_MODULE_9__, firebase_firestore__WEBPACK_IMPORTED_MODULE_10__, _firebase__WEBPACK_IMPORTED_MODULE_13__, _components_addServer_AddServer__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const Home = ()=>{
    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_9__.getAuth)();
    const { user  } = (0,_features_user__WEBPACK_IMPORTED_MODULE_7__/* .useUserState */ .ec)();
    const { channel  } = (0,_features_servers__WEBPACK_IMPORTED_MODULE_11__/* .useServersState */ .EG)();
    const { userSettingsOpen  } = (0,_features_userSettings__WEBPACK_IMPORTED_MODULE_12__/* .useUserSettingsState */ .kq)();
    const { addServerOpen  } = (0,_features_addServer__WEBPACK_IMPORTED_MODULE_15__/* .useAddServerState */ .n_)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAppDispatch */ .T)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const authStateListener = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_9__.onAuthStateChanged)(auth, async (user)=>{
            if (!user) return redirect();
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_13__.db, "users", user.uid);
            const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.getDoc)(docRef);
            if (!docSnap.exists()) return redirect();
            const docData = docSnap.data();
            const currentUser = {
                username: docData.username,
                tag: docData.tag,
                avatar: docData.avatar,
                about: docData.about,
                banner: docData.banner,
                userID: user.uid,
                email: user.email
            };
            dispatch((0,_features_user__WEBPACK_IMPORTED_MODULE_7__/* .setUser */ .av)(currentUser));
        });
        return ()=>{
            authStateListener();
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!user.userID) return;
        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_10__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_13__.db, "users", user.userID), (doc)=>{
            if (!doc.exists()) return;
            const docData = doc.data();
            const currentUser = {
                username: docData.username,
                tag: docData.tag,
                avatar: docData.avatar,
                about: docData.about,
                banner: docData.banner,
                userID: doc.id,
                email: docData.email
            };
            dispatch((0,_features_user__WEBPACK_IMPORTED_MODULE_7__/* .setUser */ .av)(currentUser));
        });
        return ()=>{
            unsubscribe();
        };
    }, []);
    function redirect() {
        dispatch((0,_features_user__WEBPACK_IMPORTED_MODULE_7__/* .resetUserState */ .tZ)());
        router.push("/login");
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PageContainer, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: channel.name ? channel.name : "Banter"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "manifest",
                        href: "/manifest.json"
                    })
                ]
            }),
            userSettingsOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_userSettings_UserSettings__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            addServerOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_addServer_AddServer__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_servers_Servers__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_channels_Channels__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LandingPage__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {})
        ]
    });
};
const PageContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_6___default().div)`
  flex w-screen h-screen overflow-hidden select-none
  dark:bg-dark-100
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4191:
/***/ ((module) => {

module.exports = require("tailwind-styled-components");

/***/ }),

/***/ 3095:
/***/ ((module) => {

module.exports = require("tailwind-styled-components/dist/tailwind");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ 3392:
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,675,786,192,573,643], () => (__webpack_exec__(9448)));
module.exports = __webpack_exports__;

})();