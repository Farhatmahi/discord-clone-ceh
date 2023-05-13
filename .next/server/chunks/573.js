"use strict";
exports.id = 573;
exports.ids = [573];
exports.modules = {

/***/ 5417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wy": () => (/* binding */ setAddServerWindow),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "mP": () => (/* binding */ setAddServerOpen),
/* harmony export */   "n_": () => (/* binding */ useAddServerState)
/* harmony export */ });
/* unused harmony export addServerSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);


const initialState = {
    addServerOpen: false,
    addServerWindow: "Create Server"
};
const addServerSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "addServer",
    initialState,
    reducers: {
        setAddServerOpen (state, action) {
            state.addServerOpen = action.payload;
        },
        setAddServerWindow (state, action) {
            state.addServerWindow = action.payload;
        }
    }
});
const { setAddServerOpen , setAddServerWindow  } = addServerSlice.actions;
const useAddServerState = ()=>(0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)((state)=>state.addServer);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addServerSlice.reducer);


/***/ }),

/***/ 503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dt": () => (/* binding */ setEditRoleOpen),
/* harmony export */   "Mv": () => (/* binding */ setAssignRoleOpen),
/* harmony export */   "UC": () => (/* binding */ setCreateChannelOpen),
/* harmony export */   "YS": () => (/* binding */ setServerIconPreview),
/* harmony export */   "Yk": () => (/* binding */ setInviteFriendsOpen),
/* harmony export */   "Z8": () => (/* binding */ setServerDropdownOpen),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fd": () => (/* binding */ setServerSettingsOpen),
/* harmony export */   "g$": () => (/* binding */ useServerSettingsState),
/* harmony export */   "jR": () => (/* binding */ setRolesCopy),
/* harmony export */   "l$": () => (/* binding */ setServerSettingsScreen),
/* harmony export */   "lN": () => (/* binding */ setAssignRoleHeight),
/* harmony export */   "me": () => (/* binding */ setCurrentRole),
/* harmony export */   "pN": () => (/* binding */ setServerChangesMade),
/* harmony export */   "yH": () => (/* binding */ setDeleteServerConfirmOpen),
/* harmony export */   "z4": () => (/* binding */ setServerCopy),
/* harmony export */   "zb": () => (/* binding */ setAssignRolePosition)
/* harmony export */ });
/* unused harmony export userSettingsSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);


const initialState = {
    serverDropdownOpen: false,
    inviteFriendsOpen: false,
    serverSettingsOpen: false,
    serverSettingsScreen: "Overview",
    editRoleOpen: false,
    currentRole: {
        name: "",
        color: "",
        separateDisplay: false,
        sort: 0,
        permissions: {
            manageChannels: false,
            manageRoles: false,
            manageServer: false
        },
        roleID: ""
    },
    rolesCopy: null,
    deleteServerConfirmOpen: false,
    serverChangesMade: false,
    serverCopy: null,
    createChannelOpen: false,
    assignRoleOpen: false,
    assignRoleHeight: 78,
    assignRolePosition: {}
};
const userSettingsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "serverSettings",
    initialState,
    reducers: {
        setServerDropdownOpen (state, action) {
            state.serverDropdownOpen = action.payload;
        },
        setInviteFriendsOpen (state, action) {
            state.inviteFriendsOpen = action.payload;
            state.serverDropdownOpen = false;
        },
        setServerSettingsOpen (state, action) {
            state.serverSettingsOpen = action.payload;
            state.serverDropdownOpen = false;
        },
        setServerSettingsScreen (state, action) {
            state.serverSettingsScreen = action.payload;
        },
        setEditRoleOpen (state, action) {
            state.editRoleOpen = action.payload;
        },
        setCurrentRole (state, action) {
            state.currentRole = action.payload;
        },
        setRolesCopy (state, action) {
            state.rolesCopy = action.payload;
        },
        setDeleteServerConfirmOpen (state, action) {
            state.deleteServerConfirmOpen = action.payload;
        },
        setServerChangesMade (state, action) {
            state.serverChangesMade = action.payload;
        },
        setServerIconPreview (state, action) {
            state.serverIconPreview = action.payload;
        },
        setServerCopy (state, action) {
            state.serverCopy = action.payload;
        },
        setCreateChannelOpen (state, action) {
            state.createChannelOpen = action.payload;
            state.serverDropdownOpen = false;
        },
        setAssignRoleOpen (state, action) {
            state.assignRoleOpen = action.payload;
        },
        setAssignRolePosition (state, action) {
            state.assignRolePosition = action.payload;
        },
        setAssignRoleHeight (state, action) {
            state.assignRoleHeight = action.payload;
        }
    }
});
const { setServerDropdownOpen , setInviteFriendsOpen , setServerSettingsOpen , setServerSettingsScreen , setEditRoleOpen , setCurrentRole , setRolesCopy , setDeleteServerConfirmOpen , setServerChangesMade , setServerIconPreview , setServerCopy , setCreateChannelOpen , setAssignRoleOpen , setAssignRolePosition , setAssignRoleHeight ,  } = userSettingsSlice.actions;
const useServerSettingsState = ()=>(0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)((state)=>state.serverSettings);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSettingsSlice.reducer);


/***/ }),

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$f": () => (/* binding */ setServerName),
/* harmony export */   "CD": () => (/* binding */ setServer),
/* harmony export */   "EG": () => (/* binding */ useServersState),
/* harmony export */   "EH": () => (/* binding */ setMemberRoles),
/* harmony export */   "II": () => (/* binding */ setMemberProfileCardOpen),
/* harmony export */   "KO": () => (/* binding */ setServerContentFilter),
/* harmony export */   "Nt": () => (/* binding */ setServers),
/* harmony export */   "QC": () => (/* binding */ setChannel),
/* harmony export */   "Z": () => (/* binding */ setMessages),
/* harmony export */   "Z6": () => (/* binding */ setViewMedia),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "aS": () => (/* binding */ setViewMediaOpen),
/* harmony export */   "as": () => (/* binding */ setChannels),
/* harmony export */   "gk": () => (/* binding */ resetServerState),
/* harmony export */   "iq": () => (/* binding */ setMember),
/* harmony export */   "jk": () => (/* binding */ setMembers),
/* harmony export */   "mh": () => (/* binding */ setServerIDs),
/* harmony export */   "tS": () => (/* binding */ setMemberProfileCardPosition),
/* harmony export */   "uc": () => (/* binding */ setServerImage),
/* harmony export */   "wH": () => (/* binding */ setMemberPreview),
/* harmony export */   "x4": () => (/* binding */ updateServerRole)
/* harmony export */ });
/* unused harmony exports serversSlice, setVoiceChannel */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);


const initialState = {
    servers: [],
    server: {
        name: "",
        img: "",
        path: "",
        serverID: "",
        defaultChannel: "",
        roles: [],
        contentFilter: "off"
    },
    channels: [],
    channel: {
        name: "",
        topic: "",
        type: "text",
        path: "",
        channelID: ""
    },
    voiceChannel: {
        name: "",
        type: "voice",
        path: "",
        channelID: ""
    },
    messages: [],
    members: [],
    member: {
        username: "",
        tag: "",
        avatar: "",
        about: "",
        banner: "",
        userID: "",
        serverOwner: false,
        roles: []
    },
    memberPreview: {
        userID: "",
        username: "",
        avatar: "",
        serverOwner: false,
        roles: [],
        permissions: []
    },
    memberRoles: [],
    memberProfileCardOpen: false,
    memberProfileCardPosition: {},
    viewMediaOpen: false,
    viewMedia: {
        src: "",
        type: null
    },
    serverIDs: []
};
const serversSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "servers",
    initialState,
    reducers: {
        setServers (state, action) {
            state.servers = action.payload;
        },
        setServer (state, action) {
            state.server = action.payload;
        },
        setServerName (state, action) {
            state.server.name = action.payload;
        },
        setServerImage (state, action) {
            state.server.img = action.payload;
        },
        updateServerRole (state, action) {
            state.server.roles[action.payload.index] = action.payload.newRole;
        },
        setServerContentFilter (state, action) {
            state.server.contentFilter = action.payload;
        },
        setChannels (state, action) {
            state.channels = action.payload;
        },
        setChannel (state, action) {
            state.channel = action.payload;
        },
        setVoiceChannel (state, action) {
            state.voiceChannel = action.payload;
        },
        setMessages (state, action) {
            state.messages = action.payload;
        },
        setMembers (state, action) {
            state.members = action.payload;
        },
        setMember (state, action) {
            state.member = action.payload;
        },
        setMemberRoles (state, action) {
            state.memberRoles = action.payload;
        },
        setMemberPreview (state, action) {
            state.memberPreview = action.payload;
        },
        setMemberProfileCardOpen (state, action) {
            state.memberProfileCardOpen = action.payload;
        },
        setMemberProfileCardPosition (state, action) {
            state.memberProfileCardPosition = action.payload;
        },
        setViewMediaOpen (state, action) {
            state.viewMediaOpen = action.payload;
        },
        setViewMedia (state, action) {
            state.viewMedia = action.payload;
        },
        setServerIDs (state, action) {
            state.serverIDs = action.payload;
        },
        resetServerState (state) {
            state.server = initialState.server;
            state.channels = initialState.channels;
            state.channel = initialState.channel;
            state.voiceChannel = initialState.voiceChannel;
            state.messages = initialState.messages;
        }
    }
});
const { setServers , setServer , setServerName , setServerImage , updateServerRole , setServerContentFilter , setChannels , setChannel , setVoiceChannel , setMessages , setMembers , setMember , setMemberRoles , setMemberPreview , setMemberProfileCardOpen , setMemberProfileCardPosition , setViewMediaOpen , setViewMedia , setServerIDs , resetServerState ,  } = serversSlice.actions;
const useServersState = ()=>(0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)((state)=>state.servers);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serversSlice.reducer);


/***/ }),

/***/ 6627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DZ": () => (/* binding */ setChangeUsernameOpen),
/* harmony export */   "Dc": () => (/* binding */ setTheme),
/* harmony export */   "JD": () => (/* binding */ setLogoutConfirmOpen),
/* harmony export */   "QF": () => (/* binding */ setChangeAvatarOpen),
/* harmony export */   "Y5": () => (/* binding */ setUserSettingsScreen),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ai": () => (/* binding */ setMemberListOpen),
/* harmony export */   "kq": () => (/* binding */ useUserSettingsState),
/* harmony export */   "qP": () => (/* binding */ setUserSettingsOpen),
/* harmony export */   "s7": () => (/* binding */ setUserChangesMade),
/* harmony export */   "sW": () => (/* binding */ setUserCopy),
/* harmony export */   "v9": () => (/* binding */ setChangeEmailOpen),
/* harmony export */   "wg": () => (/* binding */ setUnsavedChangesError)
/* harmony export */ });
/* unused harmony export userSettingsSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83);


const initialState = {
    userSettingsOpen: false,
    userSettingsScreen: "My Account",
    logoutConfirmOpen: false,
    changeUsernameOpen: false,
    changeEmailOpen: false,
    changeAvatarOpen: false,
    memberListOpen: true,
    userChangesMade: false,
    userCopy: null,
    unsavedChangesError: false,
    theme: "dark"
};
const userSettingsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "userSettings",
    initialState,
    reducers: {
        setUserSettingsOpen (state, action) {
            state.userSettingsOpen = action.payload;
            state.logoutConfirmOpen = false;
        },
        setUserSettingsScreen (state, action) {
            state.userSettingsScreen = action.payload;
        },
        setLogoutConfirmOpen (state, action) {
            state.logoutConfirmOpen = action.payload;
        },
        setChangeUsernameOpen (state, action) {
            state.changeUsernameOpen = action.payload;
        },
        setChangeEmailOpen (state, action) {
            state.changeEmailOpen = action.payload;
        },
        setChangeAvatarOpen (state, action) {
            state.changeAvatarOpen = action.payload;
        },
        setMemberListOpen (state, action) {
            state.memberListOpen = action.payload;
        },
        setUserChangesMade (state, action) {
            state.userChangesMade = action.payload;
        },
        setUserCopy (state, action) {
            state.userCopy = action.payload;
        },
        setUnsavedChangesError (state, action) {
            state.unsavedChangesError = action.payload;
        },
        setTheme (state, action) {
            window.document.documentElement.classList.remove(state.theme);
            state.theme = action.payload;
            window.document.documentElement.classList.add(state.theme);
        }
    }
});
const { setUserSettingsOpen , setUserSettingsScreen , setLogoutConfirmOpen , setChangeUsernameOpen , setChangeEmailOpen , setChangeAvatarOpen , setMemberListOpen , setUserChangesMade , setUserCopy , setUnsavedChangesError , setTheme ,  } = userSettingsSlice.actions;
const useUserSettingsState = ()=>(0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)((state)=>state.userSettings);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSettingsSlice.reducer);


/***/ })

};
;