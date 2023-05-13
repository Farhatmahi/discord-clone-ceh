"use strict";
exports.id = 786;
exports.ids = [786];
exports.modules = {

/***/ 786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KG": () => (/* binding */ setUserBanner),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "av": () => (/* binding */ setUser),
/* harmony export */   "ec": () => (/* binding */ useUserState),
/* harmony export */   "f": () => (/* binding */ setUserAbout),
/* harmony export */   "iW": () => (/* binding */ setUserAvatar),
/* harmony export */   "tV": () => (/* binding */ setUserAvatarPreview),
/* harmony export */   "tZ": () => (/* binding */ resetUserState)
/* harmony export */ });
/* unused harmony export userSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);


const initialState = {
    user: {
        username: "",
        tag: "",
        avatar: "https://firebasestorage.googleapis.com/v0/b/banter-69832.appspot.com/o/Account.png?alt=media&token=32d8543b-cc91-4006-b014-ab93d128441a",
        about: "",
        banner: "",
        userID: "",
        email: "",
        serverOwner: false,
        roles: {
            userID: "",
            serverOwner: false,
            roles: []
        }
    }
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    initialState,
    reducers: {
        setUser (state, action) {
            state.user = action.payload;
        },
        setUserAbout (state, action) {
            state.user.about = action.payload;
        },
        setUserBanner (state, action) {
            state.user.banner = action.payload;
        },
        setUserAvatar (state, action) {
            state.user.avatar = action.payload;
        },
        setUserAvatarPreview (state, action) {
            state.avatarPreview = action.payload;
        },
        resetUserState (state) {
            state.user.username = initialState.user.username;
            state.user.tag = initialState.user.tag;
            state.user.avatar = initialState.user.avatar;
            state.user.about = initialState.user.about;
            state.user.userID = initialState.user.userID;
            state.user.email = initialState.user.email;
        }
    }
});
const { setUser , setUserAbout , setUserBanner , setUserAvatar , setUserAvatarPreview , resetUserState ,  } = userSlice.actions;
const useUserState = ()=>(0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)((state)=>state.user);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);


/***/ }),

/***/ 83:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector),
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ })

};
;