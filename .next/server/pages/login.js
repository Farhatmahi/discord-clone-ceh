"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 9465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/IBC_white.e710ca53.png","height":88,"width":237,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZUlEQVR4nGP8de96AKu02qX/bL84v7y+xMfIyHb81/dHjIIyvgwgwPj0wMEyETOjuwzfftgy8XMdZ2Hh2g0UfwfEDP///2dgfPT2YQA/wwdXLg7NmyxcrNuBgmqMjIwvgHLCICUArkInOI3okm8AAAAASUVORK5CYII="});

/***/ }),

/***/ 8734:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(192);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_IBC_white_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9465);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_4__]);
_firebase__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function LoginForm() {
    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    function handleSubmit(e) {
        e.preventDefault();
        let email = "";
        let password = "";
        if (!emailRef.current || !passwordRef.current) return;
        email = emailRef.current.value;
        password = passwordRef.current.value;
        (0,_firebase__WEBPACK_IMPORTED_MODULE_4__/* .signIn */ .zB)(email, password);
    }
    async function guestLogin() {
        await (0,_firebase__WEBPACK_IMPORTED_MODULE_4__/* .signInAsGuest */ .I2)();
        router.push("/channels/@me");
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LoginContainer, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Heading, {
                        children: "Welcome back!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Subheading, {
                        children: "We're so excited to see you again!"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(EmailField, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(EmailLabel, {
                                htmlFor: "emailInput",
                                children: [
                                    "EMAIL ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Required, {
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EmailInput, {
                                ref: emailRef,
                                type: "email",
                                required: true,
                                autoComplete: "username",
                                id: "emailInput"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PasswordField, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PasswordLabel, {
                                htmlFor: "passwordInput",
                                children: [
                                    "PASSWORD ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Required, {
                                        children: "*"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PasswordInput, {
                                ref: passwordRef,
                                type: "password",
                                required: true,
                                autoComplete: "current-password",
                                id: "passwordInput"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/login",
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Fine, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkText, {
                                        children: "Forgot your password?"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoginButton, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LoginText, {
                            children: "Login"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Fine, {
                        children: [
                            "Need an account?",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/register",
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkText, {
                                    children: " Register"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Separator, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BanterContainer, {
                onClick: guestLogin,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BanterIcon, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledImage, {
                            src: _assets_IBC_white_png__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                            width: 238,
                            height: 88,
                            alt: "logo"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Caption, {
                        children: "Log in as Guest"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SubCaption, {
                        children: [
                            "Click this to login to Banter with a ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Bold, {
                                children: "guest account"
                            }),
                            " ",
                            "instantly."
                        ]
                    })
                ]
            })
        ]
    });
};
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default().form)`
  flex w-196 h-102 p-8 justify-between bg-white rounded-md select-none
  dark:bg-dark-100 dark:text-text-tertiary
`;
const LoginContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default().div)`
  flex flex-col justify-center w-full h-full
`;
const Heading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default().h3)`
  text-2xl text-center font-semibold mb-2
  dark:text-white
`;
const Subheading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default().span)`
  text-center mb-5 text-gray-600
  dark:text-text-primary
`;
const LinkText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default().span)`
  text-url-link font-medium cursor-pointer
  hover:underline
  dark:text-url-link-dark
`;
const GenericFieldset = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default().fieldset)`
  flex flex-col mb-5
`;
const GenericLabel = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default().label)`
  mb-2 text-xs text-gray-600 font-semibold
  dark:text-text-primary
`;
const GenericInput = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default().input)`
  rounded-md p-1 outline-none p-2
  dark:bg-dark-400
`;
const Required = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default().span)`
  text-red-500
`;
const EmailField = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default()(GenericFieldset)`
`;
const EmailLabel = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default()(GenericLabel)`
`;
const EmailInput = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default()(GenericInput)`
`;
const PasswordField = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default()(GenericFieldset)`
`;
const PasswordLabel = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default()(GenericLabel)`
`;
const PasswordInput = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default()(GenericInput)`
`;
const LoginButton = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default().button)`
  flex justify-center rounded-md mb-2 py-0.5 px-4 bg-indigo-500 text-white cursor-pointer
`;
const LoginText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default().span)`
  flex items-center h-10
`;
const Fine = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default().span)`
  text-sm text-gray-500 mt-1
  dark:text-text-primary
`;
const Separator = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default().div)`
  w-0 h-0 border mx-8 self-center
  dark:border-dark-50/[.48]
`;
const BanterContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default().div)`
  flex flex-col justify-center items-center w-60 h-full text-center cursor-pointer mt-10
`;
const BanterIcon = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default().figure)`
  flex w-60 justify-center mb-8
`;
const StyledImage = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default()((next_image__WEBPACK_IMPORTED_MODULE_3___default()))`
  rounded-md
`;
const Caption = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default().h3)`
  text-2xl font-semibold mb-2
  dark:text-white
`;
const SubCaption = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default().span)`
  text-gray-600
  dark:text-text-primary
`;
const Bold = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_5___default().span)`
  font-semibold
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1047:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Register),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8734);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1401);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(192);
/* harmony import */ var _features_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(786);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_LoginForm__WEBPACK_IMPORTED_MODULE_1__, _firebase_auth__WEBPACK_IMPORTED_MODULE_5__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, _firebase__WEBPACK_IMPORTED_MODULE_7__]);
([_components_LoginForm__WEBPACK_IMPORTED_MODULE_1__, _firebase_auth__WEBPACK_IMPORTED_MODULE_5__, _firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, _firebase__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function Register() {
    const auth = (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useAppDispatch */ .T)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const authStateListener = (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_5__.onAuthStateChanged)(auth, async (user)=>{
            if (!user) return dispatch((0,_features_user__WEBPACK_IMPORTED_MODULE_8__/* .resetUserState */ .tZ)());
            const docRef = (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_7__.db, "users", user.uid);
            const docSnap = await (0,_firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDoc)(docRef);
            if (!docSnap.exists()) return dispatch((0,_features_user__WEBPACK_IMPORTED_MODULE_8__/* .resetUserState */ .tZ)());
            const docData = docSnap.data();
            const currentUser = {
                username: docData.username,
                tag: docData.tag,
                avatar: docData.avatar,
                about: docData.about,
                banner: docData.banner,
                userID: user.uid,
                email: docData.email
            };
            dispatch((0,_features_user__WEBPACK_IMPORTED_MODULE_8__/* .setUser */ .av)(currentUser));
            router.push("/channels/@me");
        });
        return ()=>{
            authStateListener();
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_LoginForm__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
    });
};
async function getServerSideProps() {
    const auth = (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_5__.getAuth)();
    if (auth.currentUser) {
        return {
            redirect: {
                destination: "/channels/@me",
                permanent: false
            }
        };
    }
    return {
        props: {}
    };
}
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex justify-center items-center w-screen h-screen bg-indigo-500
`;

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

/***/ 3095:
/***/ ((module) => {

module.exports = require("tailwind-styled-components/dist/tailwind");

/***/ }),

/***/ 61:
/***/ ((module) => {

module.exports = import("@firebase/auth");;

/***/ }),

/***/ 1401:
/***/ ((module) => {

module.exports = import("@firebase/firestore");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,675,786,192], () => (__webpack_exec__(1047)));
module.exports = __webpack_exports__;

})();