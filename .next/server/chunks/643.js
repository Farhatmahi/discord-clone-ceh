"use strict";
exports.id = 643;
exports.ids = [643];
exports.modules = {

/***/ 7085:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/banterIcon.1630c66f.svg","height":512,"width":512});

/***/ }),

/***/ 2083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/closeButton.f8d43019.svg","height":36,"width":36});

/***/ }),

/***/ 5179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/closeIcon.614ac6c1.svg","height":24,"width":24});

/***/ }),

/***/ 8777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/downArrowIcon.cf168cd7.svg","height":18,"width":18});

/***/ }),

/***/ 7379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/serverImageUpload.ee8f5022.svg","height":512,"width":512});

/***/ }),

/***/ 7930:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UnsavedChanges)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(192);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _features_serverSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(503);
/* harmony import */ var _features_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(786);
/* harmony import */ var _features_userSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6627);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_2__]);
_firebase__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function UnsavedChanges(props) {
    const { user , avatarPreview  } = (0,_features_user__WEBPACK_IMPORTED_MODULE_5__/* .useUserState */ .ec)();
    const { userCopy , unsavedChangesError  } = (0,_features_userSettings__WEBPACK_IMPORTED_MODULE_6__/* .useUserSettingsState */ .kq)();
    const { server  } = (0,_features_servers__WEBPACK_IMPORTED_MODULE_3__/* .useServersState */ .EG)();
    const { serverCopy , serverIconPreview  } = (0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_4__/* .useServerSettingsState */ .g$)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useAppDispatch */ .T)();
    function resetChanges() {
        switch(props.changes){
            case "user":
                if (!userCopy) return;
                dispatch((0,_features_user__WEBPACK_IMPORTED_MODULE_5__/* .setUser */ .av)(userCopy));
                break;
            case "server":
                if (!serverCopy) return;
                dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_3__/* .setServer */ .CD)(serverCopy));
                break;
        }
    }
    async function saveChanges() {
        switch(props.changes){
            case "user":
                if (!userCopy) return;
                let newUser = {
                    ...user
                };
                if (user.avatar !== userCopy?.avatar && avatarPreview) newUser = await saveAvatar(avatarPreview);
                dispatch((0,_features_user__WEBPACK_IMPORTED_MODULE_5__/* .setUser */ .av)(newUser));
                dispatch((0,_features_userSettings__WEBPACK_IMPORTED_MODULE_6__/* .setUserCopy */ .sW)(newUser));
                await (0,_firebase__WEBPACK_IMPORTED_MODULE_2__/* .saveUserProfileChanges */ .$$)(newUser, userCopy);
                break;
            case "server":
                if (!serverCopy) return;
                let newServer = {
                    ...server
                };
                if (server.img !== serverCopy?.img && serverIconPreview) newServer = await saveIcon(serverIconPreview);
                dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_3__/* .setServer */ .CD)(newServer));
                dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_4__/* .setServerCopy */ .z4)(newServer));
                await (0,_firebase__WEBPACK_IMPORTED_MODULE_2__/* .saveServerChanges */ .Bu)(newServer, serverCopy);
                break;
        }
    }
    async function saveAvatar(avatarPreview) {
        const avatarURL = await (0,_firebase__WEBPACK_IMPORTED_MODULE_2__/* .uploadAvatar */ .gg)(avatarPreview, user.userID);
        const newUser = {
            ...user
        };
        newUser.avatar = avatarURL;
        return newUser;
    }
    async function saveIcon(serverIconPreview) {
        const iconURL = await (0,_firebase__WEBPACK_IMPORTED_MODULE_2__/* .uploadServerImage */ .ft)(serverIconPreview, server.serverID);
        const newServer = {
            ...server
        };
        newServer.img = iconURL;
        return newServer;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ContentContainer, {
            unsavedChangesError: unsavedChangesError,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                    unsavedChangesError: unsavedChangesError,
                    children: "Careful — you have unsaved changes!"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ButtonsContainer, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ResetChangesButton, {
                            unsavedChangesError: unsavedChangesError,
                            onClick: resetChanges,
                            children: "Reset"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SaveChangesButton, {
                            onClick: saveChanges,
                            children: "Save Changes"
                        })
                    ]
                })
            ]
        })
    });
};
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  absolute bottom-0 left-0 w-[740px] h-18 p-5 pt-0
`;
const ContentContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  flex justify-between items-center p-2.5 pl-4 rounded-[5px] drop-shadow-xl
  dark:bg-dark-600
  ${(props)=>props.unsavedChangesError ? "bg-red-500" : "bg-gray-50"}

`;
const Text = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().span)`
  mr-2.5 font-medium
  dark:text-text-tertiary
  ${(props)=>props.unsavedChangesError ? "text-white" : "text-gray-600"}

`;
const ButtonsContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  ml-2.5
`;
const SaveChangesButton = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().button)`
  h-8 ml-2.5 px-4 py-0.5 bg-active text-sm text-white font-medium rounded-middle
`;
const ResetChangesButton = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().button)`
  w-15 h-8 ml-2.5 py-0.5 text-sm font-medium
  dark:text-text-tertiary
  ${(props)=>props.unsavedChangesError ? "text-white" : "text-gray-600"}

`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AboutServer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _features_addServer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5417);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83);
/* harmony import */ var _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5179);
/* harmony import */ var _servers_AddServerIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1125);







function AboutServer() {
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    function closeWindow() {
        dispatch((0,_features_addServer__WEBPACK_IMPORTED_MODULE_3__/* .setAddServerOpen */ .mP)(false));
        dispatch((0,_features_addServer__WEBPACK_IMPORTED_MODULE_3__/* .setAddServerWindow */ .Wy)("Create Server"));
    }
    function stopPropagation(e) {
        e.stopPropagation();
    }
    function openCustomizeWindow() {
        dispatch((0,_features_addServer__WEBPACK_IMPORTED_MODULE_3__/* .setAddServerWindow */ .Wy)("Customize Server"));
    }
    function goBack() {
        dispatch((0,_features_addServer__WEBPACK_IMPORTED_MODULE_3__/* .setAddServerWindow */ .Wy)("Create Server"));
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Backdrop, {
        onClick: closeWindow,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
            onClick: stopPropagation,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeadingContainer, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Heading, {
                            children: "Tell us more about your server"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Body, {
                            children: "In order to help you with your setup, is your new server for just a few friends or a larger community?"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CloseIcon, {
                            onClick: closeWindow,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledImage, {
                                src: _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                width: 24,
                                height: 24,
                                alt: "Close button"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ButtonsContainer, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CreateServerButton, {
                            onClick: openCustomizeWindow,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CreateServerIcon, {
                                    width: 48,
                                    height: 48
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonText, {
                                    children: "For me and my friends"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CreateServerButton, {
                            onClick: openCustomizeWindow,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CreateServerIcon, {
                                    width: 48,
                                    height: 48
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonText, {
                                    children: "For a club or community"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SubText, {
                            children: [
                                "Not sure? You can",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkText, {
                                    onClick: openCustomizeWindow,
                                    children: "skip this question"
                                }),
                                " ",
                                "for now"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BackButtonContainer, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BackButton, {
                        onClick: goBack,
                        children: "Back"
                    })
                })
            ]
        })
    });
};
const Backdrop = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  fixed w-full h-full bg-black/[0.85] z-20
`;
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  fixed flex flex-col top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-110 bg-white rounded-md
`;
const HeadingContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  pt-6 px-4 text-center
`;
const Heading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().h2)`
  w-full text-2xl font-bold
`;
const Body = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().p)`
  w-full mt-2 text-gray-500
`;
const CloseIcon = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  absolute top-4 right-4 p-1
`;
const StyledImage = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default()))`
`;
const ButtonsContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  mt-6 p-2 pl-4 text-center
`;
const CreateServerButton = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  w-full flex mb-2 items-center border rounded-lg group
  hover:bg-gray-500/[0.08]
`;
const CreateServerIcon = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()(_servers_AddServerIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)`
  m-2 ml-4 rounded-3xl border border-active fill-white
  group-hover:fill-gray-500/[0.08]
`;
const ButtonText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().span)`
  font-bold
`;
const SubText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().span)`
`;
const LinkText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().span)`
  text-sm text-url-link cursor-pointer
  hover:underline
`;
const BackButtonContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex items-center p-4 bg-gray-50
`;
const BackButton = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  px-1 py-0.5 text-sm font-medium
`;


/***/ }),

/***/ 7404:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AddServer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_addServer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5417);
/* harmony import */ var _AboutServer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2824);
/* harmony import */ var _CreateServer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6956);
/* harmony import */ var _CustomizeServer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6369);
/* harmony import */ var _JoinServer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2938);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CustomizeServer__WEBPACK_IMPORTED_MODULE_4__, _JoinServer__WEBPACK_IMPORTED_MODULE_5__]);
([_CustomizeServer__WEBPACK_IMPORTED_MODULE_4__, _JoinServer__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function AddServer() {
    const { addServerWindow  } = (0,_features_addServer__WEBPACK_IMPORTED_MODULE_1__/* .useAddServerState */ .n_)();
    switch(addServerWindow){
        case "Create Server":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CreateServer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {});
        case "Join Server":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_JoinServer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {});
        case "About Server":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AboutServer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
        case "Customize Server":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomizeServer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {});
        default:
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CreateServer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {});
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CreateServer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _features_addServer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5417);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83);
/* harmony import */ var _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5179);
/* harmony import */ var _servers_AddServerIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1125);







function CreateServer() {
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    function closeWindow() {
        dispatch((0,_features_addServer__WEBPACK_IMPORTED_MODULE_3__/* .setAddServerOpen */ .mP)(false));
    }
    function stopPropagation(e) {
        e.stopPropagation();
    }
    function openAboutWindow() {
        dispatch((0,_features_addServer__WEBPACK_IMPORTED_MODULE_3__/* .setAddServerWindow */ .Wy)("About Server"));
    }
    function openJoinWindow() {
        dispatch((0,_features_addServer__WEBPACK_IMPORTED_MODULE_3__/* .setAddServerWindow */ .Wy)("Join Server"));
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Backdrop, {
        onClick: closeWindow,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
            onClick: stopPropagation,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeadingContainer, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Heading, {
                            children: "Create a server"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Body, {
                            children: "Your server is where you and your friends hang out. Make yours and start talking."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CloseIcon, {
                            onClick: closeWindow,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledImage, {
                                src: _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                width: 24,
                                height: 24,
                                alt: "Close button"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonContainer, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CreateServerButton, {
                        onClick: openAboutWindow,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CreateServerIcon, {
                                width: 48,
                                height: 48
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonText, {
                                children: "Create My Own"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(JoinServerContainer, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(JoinServerHeading, {
                            children: "Have an invite already?"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(JoinServerButton, {
                            onClick: openJoinWindow,
                            children: "Join a Server"
                        })
                    ]
                })
            ]
        })
    });
};
const Backdrop = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  fixed w-full h-full bg-black/[0.85] z-20
`;
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  fixed flex flex-col top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-110 bg-white rounded-md
`;
const HeadingContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  pt-6 px-4 text-center
`;
const Heading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().h2)`
  w-full text-2xl font-bold
`;
const Body = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().p)`
  w-full mt-2 text-gray-500
`;
const CloseIcon = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  absolute top-4 right-4 p-1
`;
const StyledImage = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default()))`
`;
const ButtonContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  mt-6 p-2 pl-4
`;
const CreateServerButton = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  flex w-full items-center border rounded-lg group
  hover:bg-gray-500/[0.08]
`;
const CreateServerIcon = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()(_servers_AddServerIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)`
  m-2 ml-4 rounded-3xl border border-active fill-white
  group-hover:fill-gray-500/[0.08]
`;
const ButtonText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().span)`
  font-bold
`;
const JoinServerContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex flex-col items-center p-4 bg-gray-50
`;
const JoinServerHeading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().h3)`
  mb-2 text-xl font-semibold leading-6
`;
const JoinServerButton = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  w-full h-9.5 px-4 py-0.5 bg-gray-500 text-sm text-white font-medium rounded-middle
`;


/***/ }),

/***/ 6369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CustomizeServer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _features_addServer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5417);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83);
/* harmony import */ var _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5179);
/* harmony import */ var _features_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(786);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(192);
/* harmony import */ var _assets_serverImageUpload_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7379);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_8__]);
_firebase__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function CustomizeServer() {
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(null);
    const { 0: isInputEmpty , 1: setIsInputEmpty  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const { user  } = (0,_features_user__WEBPACK_IMPORTED_MODULE_6__/* .useUserState */ .ec)();
    const { 0: serverImageURL , 1: setServerImageURL  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)();
    const { 0: serverImage , 1: setServerImage  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    function closeWindow() {
        dispatch((0,_features_addServer__WEBPACK_IMPORTED_MODULE_3__/* .setAddServerOpen */ .mP)(false));
        dispatch((0,_features_addServer__WEBPACK_IMPORTED_MODULE_3__/* .setAddServerWindow */ .Wy)("Create Server"));
    }
    function stopPropagation(e) {
        e.stopPropagation();
    }
    function goBack() {
        dispatch((0,_features_addServer__WEBPACK_IMPORTED_MODULE_3__/* .setAddServerWindow */ .Wy)("About Server"));
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (!inputRef.current || isInputEmpty) return;
        await (0,_firebase__WEBPACK_IMPORTED_MODULE_8__/* .createServer */ .n0)(inputRef.current.value, user.userID, serverImage);
        if (!serverImage) return closeWindow();
        closeWindow();
    }
    function handleChange() {
        if (!inputRef.current) return;
        if (!inputRef.current.value) {
            setIsInputEmpty(true);
        } else {
            setIsInputEmpty(false);
        }
    }
    async function changeServerImage(e) {
        if (!e.target.files) return;
        const serverImage = e.target.files[0];
        const serverImageURL = await (0,_firebase__WEBPACK_IMPORTED_MODULE_8__/* .uploadServerImagePreview */ .KE)(serverImage, user.userID);
        setServerImageURL(serverImageURL);
        setServerImage(serverImage);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Backdrop, {
        onClick: closeWindow,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
            onClick: stopPropagation,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeadingContainer, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Heading, {
                            children: "Customize your server"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Body, {
                            children: "Give your new server a personality with a name and an icon. You can always change it later."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CloseIcon, {
                            onClick: closeWindow,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledImage, {
                                src: _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                width: 24,
                                height: 24,
                                alt: "Close button"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ContentContainer, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UploadContainer, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InputContainer, {
                                children: [
                                    serverImageURL ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ServerImageContainer, {
                                        loader: ()=>serverImageURL,
                                        src: serverImageURL,
                                        width: 80,
                                        height: 80,
                                        unoptimized: true
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UploadImageIcon, {
                                        src: _assets_serverImageUpload_svg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                        width: 80,
                                        height: 80
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FileInput, {
                                        onChange: changeServerImage,
                                        type: "file",
                                        accept: ".svg, .png, .jpg, .jpeg"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FormContainer, {
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CreateServerLabel, {
                                    htmlFor: "createServerInput",
                                    children: "SERVER NAME"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CreateServerInput, {
                                    type: "text",
                                    defaultValue: `${user.username}'s server`,
                                    ref: inputRef,
                                    onChange: handleChange,
                                    minLength: 2,
                                    maxLength: 100,
                                    required: true,
                                    id: "createServerInput"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SubText, {
                                    children: [
                                        "By creating a server, you agree to Banter's",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkText, {
                                            children: "Community Guidelines"
                                        }),
                                        "."
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FooterContainer, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BackButton, {
                            onClick: goBack,
                            children: "Back"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CreateButton, {
                            isInputEmpty: isInputEmpty,
                            onClick: handleSubmit,
                            type: "submit",
                            children: "Create"
                        })
                    ]
                })
            ]
        })
    });
};
const Backdrop = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  fixed w-full h-full bg-black/[0.85] z-20
`;
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  fixed flex flex-col top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-110 bg-white rounded-md
`;
const HeadingContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  pt-6 px-4 text-center
`;
const Heading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().h2)`
  w-full text-2xl font-bold
`;
const Body = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().p)`
  w-full mt-2 text-gray-500
`;
const CloseIcon = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  absolute top-4 right-4 p-1
`;
const StyledImage = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default()))`
`;
const ContentContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  my-4 pr-2 pl-4
`;
const UploadContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex justify-center h-[84px] pt-1
`;
const InputContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  relative w-[80px]
`;
const ServerImageContainer = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()(StyledImage)`
  object-cover rounded-full
`;
const UploadImageIcon = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()(StyledImage)`
  pointer-events-none z-10
`;
const FileInput = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().input)`
  absolute top-0 left-0 w-full h-full text-[0px] cursor-pointer pointer-events-auto rounded
  file:w-full file:h-full file:bg-transparent file:border-0
`;
const FormContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().form)`
  mt-6
`;
const CreateServerLabel = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().label)`
  mb-4 text-xs text-gray-800 font-semibold
`;
const CreateServerInput = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().input)`
  w-full h-10 p-2.5 border rounded-middle text-gray-800 font-medium
`;
const SubText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().span)`
  text-xs text-gray-500
`;
const LinkText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().span)`
  text-url-link font-semibold cursor-pointer
  hover:underline
`;
const FooterContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex justify-between items-center p-4 bg-gray-50
`;
const BackButton = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  px-1 py-0.5 text-sm font-medium
`;
const CreateButton = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  w-24 h-9.5 px-4 py-0.5 bg-indigo-500 text-white rounded-middle
  ${(props)=>props.isInputEmpty && "opacity-50 cursor-not-allowed"}
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2938:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ JoinServer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _features_addServer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5417);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83);
/* harmony import */ var _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5179);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(192);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_7__]);
_firebase__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function JoinServer() {
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)(null);
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    function closeWindow() {
        dispatch((0,_features_addServer__WEBPACK_IMPORTED_MODULE_3__/* .setAddServerOpen */ .mP)(false));
        dispatch((0,_features_addServer__WEBPACK_IMPORTED_MODULE_3__/* .setAddServerWindow */ .Wy)("Create Server"));
    }
    function stopPropagation(e) {
        e.stopPropagation();
    }
    function goBack() {
        dispatch((0,_features_addServer__WEBPACK_IMPORTED_MODULE_3__/* .setAddServerWindow */ .Wy)("Create Server"));
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (!inputRef.current || !inputRef.current.value) return;
        try {
            await (0,_firebase__WEBPACK_IMPORTED_MODULE_7__/* .joinServer */ .YP)(inputRef.current.value);
            closeWindow();
        } catch (error) {
            console.error(error);
        }
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Backdrop, {
        onClick: closeWindow,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
            onClick: stopPropagation,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeadingContainer, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Heading, {
                            children: "Join a Server"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Body, {
                            children: "Enter an invite to join an existing server"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CloseIcon, {
                            onClick: closeWindow,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledImage, {
                                src: _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                                width: 24,
                                height: 24,
                                alt: "Close button"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ContentContainer, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FormContainer, {
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(JoinServerLabel, {
                                    htmlFor: "joinServerInput",
                                    children: [
                                        "INVITE LINK",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Required, {
                                            children: "*"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(JoinServerInput, {
                                    type: "text",
                                    placeholder: "wo3H0AwdC68b5gvuJtKA",
                                    ref: inputRef,
                                    maxLength: 999,
                                    required: true,
                                    id: "joinServerInput"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ExamplesContainer, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ExamplesHeading, {
                                    children: "INVITES SHOULD LOOK LIKE"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Example, {
                                    children: "ke6NqegIvJEOa9cLzUEp"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Example, {
                                    children: "wo3H0AwdC68b5gvuJtKA"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Example, {
                                    children: "zJzL3eQ77S1nJ8YxCNvB"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FooterContainer, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BackButton, {
                            onClick: goBack,
                            children: "Back"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(JoinButton, {
                            onClick: handleSubmit,
                            type: "submit",
                            children: "Join Server"
                        })
                    ]
                })
            ]
        })
    });
};
const Backdrop = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  fixed w-full h-full bg-black/[0.85] z-20
`;
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  fixed flex flex-col top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-110 bg-white rounded-md
`;
const HeadingContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  pt-6 px-4 text-center
`;
const Heading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().h2)`
  w-full text-2xl font-bold
`;
const Body = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().p)`
  w-full mt-2 text-gray-500
`;
const CloseIcon = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  absolute top-4 right-4 p-1
`;
const StyledImage = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default()))`
`;
const ContentContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  my-4 pr-2 pl-4
`;
const ExamplesHeading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().h5)`
  mb-2 text-xs text-gray-800 font-semibold
`;
const FormContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().form)`
  mb-4
`;
const JoinServerLabel = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().label)`
  mb-4 text-xs text-gray-800 font-semibold
`;
const Required = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().span)`
  pl-1 text-red-500
`;
const JoinServerInput = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().input)`
  w-full h-10 p-2.5 bg-gray-200 text-gray-800 font-medium border rounded-middle
  placeholder:text-gray-500
`;
const ExamplesContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  mb-4
`;
const Example = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().p)`
  text-sm text-gray-500
`;
const FooterContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex justify-between items-center p-4 bg-gray-50
`;
const BackButton = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  px-1 py-0.5 text-sm font-medium
`;
const JoinButton = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  w-24 h-9.5 bg-blue-500 text-white rounded-middle
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7247:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Channels)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1492);
/* harmony import */ var _UserPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3987);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(192);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_downArrowIcon_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8777);
/* harmony import */ var _features_serverSettings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(503);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_5__, _firebase__WEBPACK_IMPORTED_MODULE_9__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_5__, _firebase__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function Channels() {
    const { server , channels  } = (0,_features_servers__WEBPACK_IMPORTED_MODULE_4__/* .useServersState */ .EG)();
    const { serverDropdownOpen  } = (0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_12__/* .useServerSettingsState */ .g$)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .T)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!server.serverID) return;
        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_9__.db, "servers", server.serverID, "channels"));
        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.onSnapshot)(q, (querySnapshot)=>{
            const channelList = [];
            querySnapshot.forEach((doc)=>{
                const docData = doc.data();
                const channel = {
                    name: docData.name,
                    topic: docData.topic,
                    type: docData.type,
                    path: `/channels/${server.serverID}/${doc.id}/`,
                    channelID: doc.id
                };
                channelList.push(channel);
            });
            dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_4__/* .setChannels */ .as)(channelList));
        });
        return ()=>{
            unsubscribe();
        };
    }, [
        server.serverID
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!server.serverID || !server.defaultChannel) return;
        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_9__.db, "servers", server.serverID, "channels", server.defaultChannel), (doc)=>{
            const docData = doc.data();
            const channel = {
                name: docData?.name,
                topic: docData?.topic,
                type: docData?.type,
                path: `${server.serverID}/${doc.id}/`,
                channelID: doc.id
            };
            dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_4__/* .setChannel */ .QC)(channel));
        });
        return ()=>{
            unsubscribe();
        };
    }, [
        server.serverID
    ]);
    function joinChannel(channel) {
        dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_4__/* .setChannel */ .QC)(channel));
    }
    function toggleDropdown() {
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_12__/* .setServerDropdownOpen */ .Z8)(!serverDropdownOpen));
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Header, {
                onClick: toggleDropdown,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Heading, {
                        children: server.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledImage, {
                        src: _assets_downArrowIcon_svg__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChannelListContainer, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChannelList, {
                    children: channels.map((channel, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                            href: channel.path,
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                onClick: ()=>joinChannel(channel),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ChannelContainer, {
                                    channel: channel,
                                    path: router.asPath,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChannelIcon, {
                                            children: channel.type === "text" ? "#" : "*"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChannelName, {
                                            children: channel.name
                                        })
                                    ]
                                })
                            })
                        }, index);
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UserPanel__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
        ]
    });
};
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_8___default().nav)`
  flex flex-col bg-gray-100 w-60 h-full
  dark:bg-dark-200
`;
const ChannelListContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_8___default().div)`
  flex-1 overflow-hidden
  hover:overflow-y-auto
`;
const Header = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_8___default().header)`
  flex flex-none justify-between items-center w-60 h-12 mb-4 px-4 border-b border-gray-300 cursor-pointer
  dark:border-0 dark:shadow-[0_1px_0_0_rgba(4,4,5,0.2),0_1.5px_0_0_rgba(6,6,7,0.05),0_2px_0_0_rgba(4,4,5,0.05)]
`;
const Heading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_8___default().h1)`
  font-semibold truncate
  dark:text-white
`;
const StyledImage = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_8___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default()))`
`;
const ChannelList = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_8___default().ol)`
`;
const ChannelContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_8___default().li)`
  flex items-center cursor-pointer py-1 pr-2 mx-2 pl-2 max-h-8 rounded-md
  ${(props)=>props.path.includes(props.channel.channelID) ? "bg-gray-500/[0.24] dark:text-white" : "hover:bg-gray-500/[0.08] dark:text-text-secondary"}
`;
const ChannelIcon = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_8___default().span)`
  mr-1.5 text-gray-500 font-bold text-2xl font-thin
`;
const ChannelName = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_8___default().span)`
  font-medium truncate
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ UserPanel)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/redux/hooks.ts
var hooks = __webpack_require__(83);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "tailwind-styled-components/dist/tailwind"
var tailwind_ = __webpack_require__(3095);
var tailwind_default = /*#__PURE__*/__webpack_require__.n(tailwind_);
// EXTERNAL MODULE: ./src/features/user.ts
var features_user = __webpack_require__(786);
;// CONCATENATED MODULE: ./src/components/channels/MuteIcon.tsx

function MuteIcon() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "20",
        height: "20",
        className: " fill-text-quinary dark:fill-text-primary",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/channels/DeafenIcon.tsx

function DeafenIcon() {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "20",
        height: "20",
        className: " fill-text-quinary dark:fill-text-primary",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z"
        })
    });
};

;// CONCATENATED MODULE: ./src/components/channels/SettingsIcon.tsx

function SettingsIcon() {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "20",
        height: "20",
        className: " fill-text-quinary dark:fill-text-primary",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
        })
    });
};

// EXTERNAL MODULE: ./src/features/userSettings.ts
var userSettings = __webpack_require__(6627);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/channels/UserPanel.tsx










function UserPanel() {
    const { user  } = (0,features_user/* useUserState */.ec)();
    const { userSettingsOpen  } = (0,userSettings/* useUserSettingsState */.kq)();
    const usernameRef = (0,external_react_.useRef)(null);
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    function handleClick() {
        dispatch((0,userSettings/* setUserSettingsOpen */.qP)(!userSettingsOpen));
    }
    function copyUsername() {
        if (!usernameRef.current || !usernameRef.current.textContent) return;
        navigator.clipboard.writeText(usernameRef.current.textContent);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(UserInfo, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ProfilePicture, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledImage, {
                            loader: ()=>user.avatar,
                            src: user.avatar,
                            width: 32,
                            height: 32,
                            unoptimized: true,
                            alt: "Profile picture"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Username, {
                        onClick: copyUsername,
                        ref: usernameRef,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(DisplayName, {
                                children: user.username
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Tag, {
                                children: [
                                    "#",
                                    user.tag
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(IconsPanel, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(IconContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Mute, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(IconContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Deafen, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(IconContainer, {
                        onClick: handleClick,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Settings, {})
                    })
                ]
            })
        ]
    });
};
const Container = (tailwind_default()).section`
  flex justify-between items-center w-60 h-[52px] px-2 mb-px bg-gray-200/50
  dark:bg-dark-300
`;
const UserInfo = (tailwind_default()).div`
  flex items-center h-min pl-0.5 ml-[-2px] mr-2 rounded
  hover:bg-gray-500/25
  dark:hover:bg-dark-50/60
`;
const ProfilePicture = (tailwind_default()).div`
  flex mr-2 h-8
`;
const StyledImage = tailwind_default()((image_default()))`
  object-cover rounded-full cursor-pointer
`;
const Username = (tailwind_default()).span`
  flex flex-col w-21 py-1 mr-1 overflow-hidden select-text cursor-pointer
`;
const DisplayName = (tailwind_default()).span`
  text-sm font-semibold truncate leading-[1.125rem]
  dark:text-white
`;
const Tag = (tailwind_default()).span`
  text-[#4F5660] text-xs leading-[0.8125rem]
  dark:text-text-primary
`;
const IconsPanel = (tailwind_default()).div`
  flex justify-around align-center w-24
`;
const IconContainer = (tailwind_default()).div`
  flex items-center p-1.5 rounded cursor-pointer
  hover:bg-gray-500/25
  dark:hover:bg-dark-50/60
`;
const Mute = tailwind_default()(MuteIcon)`
`;
const Deafen = tailwind_default()(DeafenIcon)`
`;
const Settings = tailwind_default()(SettingsIcon)`
`;


/***/ }),

/***/ 1125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AddServerIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function AddServerIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: 48,
        height: 48,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                width: 48,
                height: 48
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                className: `group-hover:stroke-white`,
                x1: "24",
                y1: "16",
                x2: "24",
                y2: "32",
                stroke: "#3BA55D",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("line", {
                className: `group-hover:stroke-white`,
                x1: "16",
                y1: "24",
                x2: "32",
                y2: "24",
                stroke: "#3BA55D",
                strokeWidth: "2"
            })
        ]
    });
};


/***/ }),

/***/ 7345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DefaultServerIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function DefaultServerIcon(props) {
    const { 0: initials , 1: setInitials  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getInitials();
    }, [
        props.server.name
    ]);
    function getInitials() {
        const string = props.server.name;
        const matches = string.replace("'", "").match(/\b(\w)/g);
        if (!matches) return setInitials("");
        const initials = matches.join("");
        setInitials(initials);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: 512,
        height: 512,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                width: 512,
                height: 512
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("text", {
                className: `front-medium group-hover:fill-white dark:fill-text-tertiary
        ${props.path.includes(props.server.serverID) ? "fill-white" : "fill-gray-800"}`,
                x: "50%",
                y: "50%",
                dominantBaseline: "middle",
                textAnchor: "middle",
                children: initials
            })
        ]
    });
};


/***/ }),

/***/ 916:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Servers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1492);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(192);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_banterIcon_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7085);
/* harmony import */ var _DefaultServerIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7345);
/* harmony import */ var _features_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(786);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _AddServerIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1125);
/* harmony import */ var _features_addServer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5417);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, _firebase__WEBPACK_IMPORTED_MODULE_7__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, _firebase__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function Servers() {
    const { servers , serverIDs  } = (0,_features_servers__WEBPACK_IMPORTED_MODULE_5__/* .useServersState */ .EG)();
    const { user  } = (0,_features_user__WEBPACK_IMPORTED_MODULE_11__/* .useUserState */ .ec)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!user.userID) return;
        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_7__.db, "users", user.userID, "servers"));
        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.onSnapshot)(q, (querySnapshot)=>{
            const serverIDs = [];
            querySnapshot.forEach((doc)=>{
                serverIDs.push(doc.id);
            });
            dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_5__/* .setServerIDs */ .mh)(serverIDs));
        });
        return ()=>{
            unsubscribe();
        };
    }, [
        user
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_7__.db, "servers"));
        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.onSnapshot)(q, (querySnapshot)=>{
            const serverList = [];
            querySnapshot.forEach((doc)=>{
                if (!serverIDs.includes(doc.id)) return;
                const docData = doc.data();
                const server = {
                    name: docData.name,
                    img: docData.img,
                    path: `/channels/${doc.id}/${docData.defaultChannel}/`,
                    serverID: doc.id,
                    defaultChannel: docData?.defaultChannel,
                    roles: docData.roles,
                    contentFilter: docData.contentFilter
                };
                serverList.push(server);
            });
            dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_5__/* .setServers */ .Nt)(serverList));
        });
        return ()=>{
            unsubscribe();
        };
    }, [
        serverIDs
    ]);
    function handleClick(server) {
        dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_5__/* .setServer */ .CD)(server));
    }
    function addServer() {
        dispatch((0,_features_addServer__WEBPACK_IMPORTED_MODULE_14__/* .setAddServerOpen */ .mP)(true));
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Nav, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Sidebar, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: "/channels/@me",
                    passHref: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(BanterIcon, {
                        onClick: ()=>dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_5__/* .resetServerState */ .gk)()),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ServerBar, {
                                "server-id": "@me",
                                path: router.asPath
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BanterImage, {
                                path: router.asPath,
                                src: _assets_banterIcon_svg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                width: 48,
                                height: 48,
                                alt: "Banter logo"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Separator, {}),
                servers.map((server, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: server.path,
                        passHref: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ServerContainer, {
                            onClick: ()=>handleClick(server),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ServerBar, {
                                    "server-id": server.serverID,
                                    path: router.asPath
                                }),
                                server.img ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomServerIcon, {
                                    "server-id": server.serverID,
                                    path: router.asPath,
                                    loader: ()=>server.img,
                                    src: server.img,
                                    width: 48,
                                    height: 48,
                                    unoptimized: true,
                                    alt: "Server icon"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ServerIcon, {
                                    server: server,
                                    height: 48,
                                    width: 48,
                                    path: router.asPath
                                })
                            ]
                        })
                    }, index);
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AddServerIconContainer, {
                    onClick: addServer,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CreateServerIcon, {})
                })
            ]
        })
    });
};
const Nav = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_3___default().nav)`
  w-18 h-full
`;
const Sidebar = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_3___default().ol)`
  flex flex-col bg-gray-200 pt-3 w-18 h-full items-center overflow-x-hidden overflow-y-auto
  dark:bg-dark-400
`;
const BanterIcon = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_3___default().figure)`
  relative flex justify-center w-full cursor-pointer group
`;
const ServerContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_3___default().li)`
  relative flex justify-center mb-2 w-full cursor-pointer group
`;
const ServerBar = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_3___default().span)`
  absolute left-0 w-1 h-5 bg-black rounded-r-middle top-3.5 hidden
  group-hover:flex
  dark:bg-white
  ${(props)=>props.path.includes(props.serverID) && "flex h-10 top-1"}
`;
const StyledImage = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_3___default()((next_image__WEBPACK_IMPORTED_MODULE_8___default()))`
  rounded-3xl transition-all ease-linear object-cover
  group-hover:rounded-xl
`;
const CustomServerIcon = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_3___default()(StyledImage)`
  rounded-3xl
  ${(props)=>{
    props.path.includes(props.serverID) && "rounded-xl";
}}
`;
const BanterImage = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_3___default()(StyledImage)`
  ${(props)=>{
    switch(props.path){
        case "/channels/@me":
            return "rounded-xl";
        default:
            return null;
    }
}}
`;
const ServerIcon = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_3___default()(_DefaultServerIcon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)`
  text-lg rounded-3xl transition-all ease-linear fill-white
  group-hover:rounded-xl group-hover:fill-primary
  dark:text-white dark:fill-dark-100
  ${(props)=>props.path.includes(props.server.serverID) && "rounded-xl fill-primary"}
`;
const AddServerIconContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_3___default().div)`
  cursor-pointer group
`;
const CreateServerIcon = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_3___default()(_AddServerIcon__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)`
  transition-all ease-linear flex-none rounded-3xl fill-white cursor-pointer
  group-hover:rounded-xl group-hover:fill-active
  dark:fill-dark-100
`;
const Separator = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_3___default().div)`
  w-8 h-0.5 my-2 bg-gray-300
  dark:bg-dark-50/[.48]
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5984:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ChangeUsername)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(192);
/* harmony import */ var _features_userSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6627);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5179);
/* harmony import */ var _features_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(786);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_3__]);
_firebase__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function ChangeUsername() {
    const emailRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { user  } = (0,_features_user__WEBPACK_IMPORTED_MODULE_8__/* .useUserState */ .ec)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useAppDispatch */ .T)();
    function closeWindow() {
        dispatch((0,_features_userSettings__WEBPACK_IMPORTED_MODULE_4__/* .setChangeEmailOpen */ .v9)(false));
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (!emailRef.current || !passwordRef.current) return;
        const newEmail = emailRef.current.value;
        const password = passwordRef.current.value;
        await (0,_firebase__WEBPACK_IMPORTED_MODULE_3__/* .changeEmail */ .Uk)(newEmail, password);
        const newUser = {
            ...user
        };
        newUser.email = newEmail;
        dispatch((0,_features_user__WEBPACK_IMPORTED_MODULE_8__/* .setUser */ .av)(newUser));
        dispatch((0,_features_userSettings__WEBPACK_IMPORTED_MODULE_4__/* .setUserCopy */ .sW)(newUser));
        closeWindow();
    }
    function stopPropagation(e) {
        e.stopPropagation();
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Backdrop, {
        onClick: closeWindow,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
            onClick: stopPropagation,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeadingContainer, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Heading, {
                            children: "Enter an email address"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Body, {
                            children: "Enter a new email address and your existing password."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CloseIcon, {
                            onClick: closeWindow,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledImage, {
                                src: _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                width: 24,
                                height: 24,
                                alt: "Close button"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FormContainer, {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ChangeEmailForm, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FieldContainer, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldHeading, {
                                            children: "EMAIL"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldInput, {
                                            ref: emailRef,
                                            type: "email",
                                            required: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PasswordContainer, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldHeading, {
                                            children: "CURRENT PASSWORD"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldInput, {
                                            ref: passwordRef,
                                            type: "password",
                                            required: true
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ButtonContainer, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CancelButton, {
                                    type: "button",
                                    onClick: closeWindow,
                                    children: "Cancel"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DoneButton, {
                                    type: "submit",
                                    children: "Done"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
const Backdrop = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  fixed w-full h-full bg-black/[0.85] z-10
`;
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  fixed flex flex-col top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-110 bg-white rounded-md
`;
const HeadingContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  px-4 py-6 text-center
`;
const Heading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().h2)`
  w-full text-2xl font-bold
`;
const Body = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().p)`
  w-full mt-2 text-gray-500
`;
const CloseIcon = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  absolute top-4 right-4 p-1
`;
const StyledImage = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()((next_image__WEBPACK_IMPORTED_MODULE_6___default()))`
`;
const FormContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().form)`
`;
const ChangeEmailForm = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  pr-2 pb-2 pl-4
`;
const FieldContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().fieldset)`
  flex flex-col
`;
const PasswordContainer = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()(FieldContainer)`
  mt-4
`;
const FieldHeading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().h5)`
  mb-2 text-xs text-gray-800 font-semibold
`;
const FieldInput = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().input)`
  flex w-full h-10 p-2.5 text-gray-800 font-medium border border-gray-300 outline-none rounded-middle
`;
const ButtonContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex justify-end w-full h-17.5 p-4 bg-gray-100 rounded-b-md
`;
const CancelButton = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  py-0.5 px-4 h-full
`;
const DoneButton = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()(CancelButton)`
  bg-blue-500 text-white rounded-md
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ChangeUsername)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(192);
/* harmony import */ var _features_userSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6627);
/* harmony import */ var _features_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(786);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5179);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_3__]);
_firebase__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function ChangeUsername() {
    const { user  } = (0,_features_user__WEBPACK_IMPORTED_MODULE_5__/* .useUserState */ .ec)();
    const usernameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const passwordRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .T)();
    function closeWindow() {
        dispatch((0,_features_userSettings__WEBPACK_IMPORTED_MODULE_4__/* .setChangeUsernameOpen */ .DZ)(false));
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!usernameRef.current || !passwordRef.current) return;
        const newUsername = usernameRef.current.value;
        const password = passwordRef.current.value;
        (0,_firebase__WEBPACK_IMPORTED_MODULE_3__/* .changeUsername */ .JC)(newUsername, password);
        const newUser = {
            ...user
        };
        newUser.username = newUsername;
        dispatch((0,_features_user__WEBPACK_IMPORTED_MODULE_5__/* .setUser */ .av)(newUser));
        dispatch((0,_features_userSettings__WEBPACK_IMPORTED_MODULE_4__/* .setUserCopy */ .sW)(newUser));
        closeWindow();
    }
    function stopPropagation(e) {
        e.stopPropagation();
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Backdrop, {
        onClick: closeWindow,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
            onClick: stopPropagation,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeadingContainer, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Heading, {
                            children: "Change your username"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Body, {
                            children: "Enter a new username and your existing password."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CloseIcon, {
                            onClick: closeWindow,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledImage, {
                                src: _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                width: 24,
                                height: 24,
                                alt: "Close button"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FormContainer, {
                    onSubmit: handleSubmit,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ChangeUsernameForm, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FieldContainer, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldHeading, {
                                            children: "USERNAME"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(UsernameContainer, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldInput, {
                                                    ref: usernameRef,
                                                    type: "text",
                                                    defaultValue: user.username,
                                                    minLength: 2,
                                                    maxLength: 32,
                                                    required: true
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Separator, {}),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TagInput, {
                                                    type: "text",
                                                    value: `#${user.tag}`,
                                                    disabled: true
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PasswordContainer, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FieldHeading, {
                                            children: "CURRENT PASSWORD"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PasswordInput, {
                                            ref: passwordRef,
                                            type: "password",
                                            required: true
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ButtonContainer, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CancelButton, {
                                    type: "button",
                                    onClick: closeWindow,
                                    children: "Cancel"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DoneButton, {
                                    type: "submit",
                                    children: "Done"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
const Backdrop = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  fixed w-full h-full bg-black/[0.85] z-10
`;
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  fixed flex flex-col top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-110 bg-white rounded-md
`;
const HeadingContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  px-4 py-6 text-center
`;
const Heading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().h2)`
  w-full text-2xl font-bold
`;
const Body = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().p)`
  w-full mt-2 text-gray-500
`;
const CloseIcon = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  absolute top-4 right-4 p-1
`;
const StyledImage = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()((next_image__WEBPACK_IMPORTED_MODULE_7___default()))`
`;
const FormContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().form)`
`;
const ChangeUsernameForm = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  pr-2 pb-2 pl-4
`;
const FieldContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().fieldset)`
  flex flex-col
`;
const PasswordContainer = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()(FieldContainer)`
  mt-4
`;
const FieldHeading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().h5)`
  mb-2 text-xs text-gray-800 font-semibold
`;
const UsernameContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex border border-gray-300 rounded-middle
`;
const FieldInput = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().input)`
  w-full h-10 p-2.5 text-gray-800 font-medium outline-none
`;
const TagInput = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()(FieldInput)`
  w-25 pl-5 cursor-not-allowed
`;
const PasswordInput = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()(FieldInput)`
  border border-gray-300 rounded-middle
`;
const Separator = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  w-px h-7.5 mt-1.25 bg-gray-300
`;
const ButtonContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex justify-end w-full h-17.5 p-4 bg-gray-100 rounded-b-md
`;
const CancelButton = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  py-0.5 px-4 h-full
`;
const DoneButton = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()(CancelButton)`
  bg-blue-500 text-white rounded-md
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 797:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ LogoutConfirm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(192);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _features_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(786);
/* harmony import */ var _features_userSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6627);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_2__]);
_firebase__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function LogoutConfirm() {
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .T)();
    function closeWindow() {
        dispatch((0,_features_userSettings__WEBPACK_IMPORTED_MODULE_5__/* .setLogoutConfirmOpen */ .JD)(false));
    }
    function handleLogOut() {
        (0,_firebase__WEBPACK_IMPORTED_MODULE_2__/* .logOut */ .ni)();
        dispatch((0,_features_userSettings__WEBPACK_IMPORTED_MODULE_5__/* .setLogoutConfirmOpen */ .JD)(false));
        dispatch((0,_features_userSettings__WEBPACK_IMPORTED_MODULE_5__/* .setUserSettingsOpen */ .qP)(false));
        dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_3__/* .resetServerState */ .gk)());
        dispatch((0,_features_user__WEBPACK_IMPORTED_MODULE_4__/* .resetUserState */ .tZ)());
    }
    function stopPropagation(e) {
        e.stopPropagation();
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Backdrop, {
        onClick: closeWindow,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
            onClick: stopPropagation,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Heading, {
                    children: "Log Out"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Body, {
                    children: "Are you sure you want to logout?"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Buttons, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CancelButton, {
                            onClick: closeWindow,
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LogOutButton, {
                            onClick: handleLogOut,
                            children: "Log Out"
                        })
                    ]
                })
            ]
        })
    });
};
const Backdrop = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  fixed w-full h-full bg-black/[0.85] z-10
  dark:text-white
`;
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  fixed flex flex-col top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-110 h-50 bg-white rounded z-20
  dark:bg-dark-100
`;
const Heading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().h2)`
  w-full p-4 text-xl font-semibold leading-6
`;
const Body = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().p)`
  w-full h-18.5 pr-2 pb-5 pl-4 text-gray-500
  dark:text-text-tertiary
`;
const Buttons = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  flex justify-end w-full h-17.5 p-4 bg-gray-100 rounded-b
  dark:bg-dark-200
`;
const CancelButton = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().button)`
  py-0.5 px-4 w-24 h-full text-sm font-medium leading-4
  hover:underline
`;
const LogOutButton = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default()(CancelButton)`
  bg-red-500 text-white rounded-[3px] ease-in duration-[170ms]
  hover:no-underline hover:ease-in
  dark:bg-danger-100 dark:hover:bg-danger-300
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6947:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ UserSettings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _features_userSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6627);
/* harmony import */ var _UserSettingsSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1885);
/* harmony import */ var _userSettingsView_UserSettingsView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6613);
/* harmony import */ var _LogoutConfirm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(797);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_closeButton_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2083);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83);
/* harmony import */ var _ChangeUsername__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2996);
/* harmony import */ var _ChangeEmail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5984);
/* harmony import */ var _userSettingsView_userProfileSettings_ChangeAvatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1558);
/* harmony import */ var _features_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(786);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_userSettingsView_UserSettingsView__WEBPACK_IMPORTED_MODULE_4__, _LogoutConfirm__WEBPACK_IMPORTED_MODULE_5__, _ChangeUsername__WEBPACK_IMPORTED_MODULE_9__, _ChangeEmail__WEBPACK_IMPORTED_MODULE_10__, _userSettingsView_userProfileSettings_ChangeAvatar__WEBPACK_IMPORTED_MODULE_11__]);
([_userSettingsView_UserSettingsView__WEBPACK_IMPORTED_MODULE_4__, _LogoutConfirm__WEBPACK_IMPORTED_MODULE_5__, _ChangeUsername__WEBPACK_IMPORTED_MODULE_9__, _ChangeEmail__WEBPACK_IMPORTED_MODULE_10__, _userSettingsView_userProfileSettings_ChangeAvatar__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function UserSettings() {
    const { logoutConfirmOpen , changeUsernameOpen , changeEmailOpen , changeAvatarOpen , userCopy ,  } = (0,_features_userSettings__WEBPACK_IMPORTED_MODULE_2__/* .useUserSettingsState */ .kq)();
    const { user  } = (0,_features_user__WEBPACK_IMPORTED_MODULE_12__/* .useUserState */ .ec)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAppDispatch */ .T)();
    (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(()=>{
        dispatch((0,_features_userSettings__WEBPACK_IMPORTED_MODULE_2__/* .setUserCopy */ .sW)(user));
    }, []);
    function unsavedChanges() {
        if (!userCopy) return false;
        if (userCopy !== user) {
            dispatch((0,_features_userSettings__WEBPACK_IMPORTED_MODULE_2__/* .setUnsavedChangesError */ .wg)(true));
            setTimeout(()=>{
                dispatch((0,_features_userSettings__WEBPACK_IMPORTED_MODULE_2__/* .setUnsavedChangesError */ .wg)(false));
            }, 1500);
            return true;
        }
    }
    function closeWindow() {
        if (unsavedChanges()) return;
        dispatch((0,_features_userSettings__WEBPACK_IMPORTED_MODULE_2__/* .setUserSettingsOpen */ .qP)(false));
        dispatch((0,_features_userSettings__WEBPACK_IMPORTED_MODULE_2__/* .setUserSettingsScreen */ .Y5)("My Account"));
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            logoutConfirmOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LogoutConfirm__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            changeUsernameOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChangeUsername__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
            changeEmailOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChangeEmail__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
            changeAvatarOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_userSettingsView_userProfileSettings_ChangeAvatar__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UserSettingsSidebar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SettingsContainer, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_userSettingsView_UserSettingsView__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CloseButton, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledImage, {
                                onClick: closeWindow,
                                src: _assets_closeButton_svg__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                width: 36,
                                height: 36,
                                alt: "Close button"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Caption, {
                                children: "ESC"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  flex flex-none w-screen h-screen select-none
  dark:bg-dark-100
`;
const SettingsContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  relative flex w-full h-full
`;
const CloseButton = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().figure)`
  flex-none pt-15 text-center mr-5
`;
const StyledImage = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default()((next_image__WEBPACK_IMPORTED_MODULE_6___default()))`
  cursor-pointer
`;
const Caption = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().figcaption)`
  text-[13px] text-gray-300 font-semibold
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ SettingsSidebar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "tailwind-styled-components/dist/tailwind"
var tailwind_ = __webpack_require__(3095);
var tailwind_default = /*#__PURE__*/__webpack_require__.n(tailwind_);
;// CONCATENATED MODULE: ./src/components/userSettings/TwitterIcon.tsx

function GifIcon() {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 16",
        width: "20",
        height: "16",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M1,14.1538462 L1.95,14.1538462 C3.73125,14.1538462 5.5125,13.5384615 6.81875,12.4307692 C5.15625,12.4307692 3.73125,11.2 3.1375,9.6 C3.375,9.6 3.6125,9.72307692 3.85,9.72307692 C4.20625,9.72307692 4.5625,9.72307692 4.91875,9.6 C3.1375,9.23076923 1.7125,7.63076923 1.7125,5.66153846 C2.1875,5.90769231 2.78125,6.15384615 3.49375,6.15384615 C2.425,5.41538462 1.83125,4.18461538 1.83125,2.70769231 C1.83125,1.96923077 2.06875,1.23076923 2.30625,0.615384615 C4.20625,3.07692308 7.05625,4.67692308 10.38125,4.8 C10.2625,4.67692308 10.2625,4.30769231 10.2625,4.06153846 C10.2625,1.84615385 12.04375,0 14.18125,0 C15.25,0 16.31875,0.492307692 17.03125,1.23076923 C17.8625,1.10769231 18.8125,0.738461538 19.525,0.246153846 C19.2875,1.23076923 18.575,1.96923077 17.8625,2.46153846 C18.575,2.46153846 19.2875,2.21538462 20,1.84615385 C19.525,2.70769231 18.8125,3.32307692 18.1,3.93846154 L18.1,4.43076923 C18.1,9.84615385 14.18125,16 6.9375,16 C4.68125,16 2.6625,15.3846154 1,14.1538462 Z",
                    className: "fill-text-quinary hover:fill-text-septenary dark:fill-text-primary dark:hover:fill-text-tertiary"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                    width: "20",
                    height: "16"
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/userSettings/GithubIcon.tsx

function GithubIcon_GifIcon() {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "16",
        height: "16",
        className: "fill-text-quinary hover:fill-text-septenary dark:fill-text-primary dark:hover:fill-text-tertiary",
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
        })
    });
};

;// CONCATENATED MODULE: ./src/components/userSettings/InstagramIcon.tsx

function InstagramIcon_GifIcon() {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: "16",
        height: "16",
        className: "group",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M4.70012698,0.0531746 C3.84888888,0.092 3.2675238,0.22720635 2.7588254,0.42492063 C2.23292063,0.62926983 1.78692063,0.90273016 1.3422857,1.34733333 C0.89768254,1.79196825 0.62422222,2.23796825 0.41987302,2.76387303 C0.22215872,3.27257143 0.08695238,3.85393651 0.04812698,4.7051746 C0.00920635,5.55819048 0,5.83053968 0,8.00253968 C0,10.1745079 0.00920635,10.4468571 0.04812698,11.299873 C0.08695238,12.1511111 0.22215873,12.7324762 0.41987302,13.2411746 C0.62422222,13.7670794 0.89768254,14.2130794 1.34228572,14.6577143 C1.78692062,15.1023175 2.23292062,15.3757778 2.7588254,15.5801587 C3.2675238,15.7778413 3.8488889,15.9130476 4.70012698,15.951873 C5.55314286,15.9907937 5.82549206,16 7.99749206,16 C10.1694603,16 10.4418095,15.9907937 11.2948254,15.951873 C12.1460635,15.9130476 12.7274286,15.7778413 13.236127,15.5801587 C13.7620317,15.3757778 14.2080317,15.1023175 14.6526667,14.6577143 C15.0972698,14.2130794 15.3707302,13.7670794 15.5751111,13.2411746 C15.7727937,12.7324762 15.908,12.1511111 15.9468254,11.299873 C15.985746,10.4468571 15.9949524,10.1745079 15.9949524,8.00253968 C15.9949524,5.83053968 15.985746,5.55819048 15.9468254,4.7051746 C15.908,3.8539365 15.7727937,3.27257143 15.5751111,2.76387302 C15.3707302,2.23796825 15.0972698,1.79196825 14.6526667,1.34733332 C14.2080317,0.90273016 13.7620317,0.62926984 13.236127,0.42492064 C12.7274286,0.22720634 12.1460635,0.092 11.2948254,0.0531746 C10.4418095,0.01425397 10.1694603,0.00504762 7.99749206,0.00504762 C5.82549206,0.00504762 5.55314286,0.01425397 4.70012698,0.0531746 L4.70012698,0.0531746 Z M8.00001453,2.00504762 C9.95416635,2.00504762 10.185649,2.01251386 10.9573741,2.04772432 C11.6709381,2.08026206 12.0584565,2.19948958 12.3163471,2.29971739 C12.6579641,2.43248289 12.9017646,2.59107525 13.157854,2.84719363 C13.4139723,3.10328295 13.5725647,3.34708347 13.7053302,3.68870053 C13.805558,3.94659105 13.9247856,4.33410953 13.9573233,5.04767346 C13.9925338,5.8193986 14,6.05088127 14,8.00506213 C14,9.95921396 13.9925338,10.1906966 13.9573233,10.9624217 C13.9247856,11.6759857 13.805558,12.0635042 13.7053302,12.3213947 C13.5725647,12.6630117 13.4139723,12.9068123 13.157854,13.1629016 C12.9017646,13.41902 12.6579641,13.5776123 12.3163471,13.7103779 C12.0584565,13.8106057 11.6709381,13.9298332 10.9573741,13.9623709 C10.1857652,13.9975814 9.9543116,14.0050476 8.00001453,14.0050476 C6.04568839,14.0050476 5.81426383,13.9975814 5.04262587,13.9623709 C4.32906195,13.9298332 3.94154347,13.8106057 3.68365294,13.7103779 C3.34203588,13.5776123 3.09823536,13.41902 2.84214604,13.1629016 C2.58605671,12.9068123 2.42743531,12.6630117 2.29466977,12.3213947 C2.19444197,12.0635042 2.07521444,11.6759857 2.04267671,10.9624217 C2.00746628,10.1906966 2,9.95921395 2,8.00506212 C2,6.05088125 2.00746625,5.81939858 2.0426767,5.04767347 C2.07521444,4.33410953 2.19444196,3.94659104 2.29466977,3.68870052 C2.42743531,3.34708346 2.58602767,3.10328294 2.84214604,2.84719362 C3.09823536,2.59107524 3.34203588,2.43248288 3.68365294,2.29971735 C3.94154346,2.19948953 4.32906194,2.08026201 5.04262587,2.04772428 C5.81435097,2.01251381 6.04583365,2.00504758 8.00001453,2.00504758 L8.00001453,2.00504762 Z",
                    className: "fill-text-quinary group-hover:fill-text-septenary dark:fill-text-primary dark:group-hover:fill-text-tertiary"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M8.0000119,10 C6.89542535,10 6,9.10457466 6,8.0000119 C6,6.89542535 6.89542534,6 8.0000119,6 C9.10457467,6 10,6.89542534 10,8.0000119 C10,9.10457467 9.10457466,10 8.0000119,10 L8.0000119,10 Z M8.00001546,4 C5.7908468,4 4,5.7908468 4,8.00001546 C4,10.2091532 5.7908468,12 8.00001546,12 C10.2091532,12 12,10.2091532 12,8.00001546 C12,5.7908468 10.2091532,4 8.00001546,4 L8.00001546,4 Z M13,4.00001654 C13,4.55230644 12.5522734,5 11.9999835,5 C11.4477266,5 11,4.55230645 11,4.00001654 C11,3.44772664 11.4477266,3 11.9999835,3 C12.5522734,3 13,3.44772663 13,4.00001654 L13,4.00001654 Z",
                    className: "fill-text-quinary group-hover:fill-text-septenary dark:fill-text-primary dark:group-hover:fill-text-tertiary"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                    width: "16",
                    height: "16"
                })
            ]
        })
    });
};

// EXTERNAL MODULE: ./src/redux/hooks.ts
var hooks = __webpack_require__(83);
// EXTERNAL MODULE: ./src/features/userSettings.ts
var userSettings = __webpack_require__(6627);
// EXTERNAL MODULE: ./src/features/user.ts
var features_user = __webpack_require__(786);
;// CONCATENATED MODULE: ./package.json
const package_namespaceObject = {"i8":"0.2.0-alpha"};
;// CONCATENATED MODULE: ./src/components/userSettings/UserSettingsSidebar.tsx









function SettingsSidebar() {
    const { userSettingsScreen , userCopy  } = (0,userSettings/* useUserSettingsState */.kq)();
    const { user  } = (0,features_user/* useUserState */.ec)();
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    function unsavedChanges() {
        if (!userCopy) return false;
        if (userCopy !== user) {
            dispatch((0,userSettings/* setUnsavedChangesError */.wg)(true));
            setTimeout(()=>{
                dispatch((0,userSettings/* setUnsavedChangesError */.wg)(false));
            }, 1500);
            return true;
        }
    }
    function viewMyAccount() {
        if (unsavedChanges()) return;
        dispatch((0,userSettings/* setUserSettingsScreen */.Y5)("My Account"));
    }
    function viewUserProfile() {
        if (unsavedChanges()) return;
        dispatch((0,userSettings/* setUserSettingsScreen */.Y5)("User Profile"));
    }
    function viewAppAppearance() {
        if (unsavedChanges()) return;
        dispatch((0,userSettings/* setUserSettingsScreen */.Y5)("Appearance"));
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(Container, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(NavContainer, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(ListHeading, {
                    children: "USER SETTINGS"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SettingsList, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(MyAccount, {
                            className: `${userSettingsScreen === "My Account" && "bg-gray-300 dark:bg-dark-50/60 dark:text-white dark:hover:text-white"}`,
                            onClick: viewMyAccount,
                            children: "My Account"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(UserProfile, {
                            className: `${userSettingsScreen === "User Profile" && "bg-gray-300 dark:bg-dark-50/60 dark:text-white dark:hover:text-white"}`,
                            onClick: viewUserProfile,
                            children: "User Profile"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Divider, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(ListHeading, {
                    children: "APP SETTINGS"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(SettingsList, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Appearance, {
                        className: `${userSettingsScreen === "Appearance" && "bg-gray-300 dark:bg-dark-50/60 dark:text-white dark:hover:text-white"}`,
                        onClick: viewAppAppearance,
                        children: "Appearance"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Divider, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(SettingsList, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ListItem, {
                        onClick: ()=>dispatch((0,userSettings/* setLogoutConfirmOpen */.JD)(true)),
                        children: "Log Out"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Divider, {}),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SocialLinks, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                            href: "https://twitter.com/DevlinRocha",
                            target: "_blank",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Twitter, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                            href: "https://github.com/DevlinRocha/banter",
                            target: "_blank",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Github, {})
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(SocialLink, {
                            href: "https://www.instagram.com/devlinrocha/",
                            target: "_blank",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Instagram, {})
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Info, {
                    children: [
                        "v",
                        package_namespaceObject.i8
                    ]
                })
            ]
        })
    });
};
const Container = (tailwind_default()).div`
  flex flex-col items-end w-1/2 bg-gray-100
  dark:bg-dark-200
`;
const NavContainer = (tailwind_default()).nav`
  w-[218px] py-15 pr-1.5 pl-5
`;
const SettingsList = (tailwind_default()).ol`
`;
const ListHeading = (tailwind_default()).h3`
  px-2.5 pb-1.5 text-xs font-bold
  dark:text-text-secondary
`;
const ListItem = (tailwind_default()).li`
  px-2.5 py-1.5 mb-0.5 font-medium rounded-md cursor-pointer
  hover:bg-gray-200
  dark:text-text-primary dark:hover:bg-dark-50/40 dark:hover:text-tertiary
`;
const MyAccount = tailwind_default()(ListItem)`
`;
const UserProfile = tailwind_default()(ListItem)`
`;
const Appearance = tailwind_default()(ListItem)`
`;
const Divider = (tailwind_default()).div`
  h-px mx-2.5 my-2 bg-gray-200
  dark:bg-dark-50/[.48]
`;
const SocialLinks = tailwind_default()(SettingsList)`
  flex px-2.5 py-2
`;
const SocialLink = (tailwind_default()).a`
  px-0.5 mr-2
`;
const Twitter = tailwind_default()(GifIcon)`
`;
const Github = tailwind_default()(GithubIcon_GifIcon)`
`;
const Instagram = tailwind_default()(InstagramIcon_GifIcon)`
`;
const Info = (tailwind_default()).section`
  px-2.5 py-2 text-xs text-text-muted select-text
  dark:text-text-quaternary
`;


/***/ }),

/***/ 6613:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SettingsView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_userSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6627);
/* harmony import */ var _userProfileSettings_UserProfileSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5150);
/* harmony import */ var _myAccountSettings_MyAccountSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5823);
/* harmony import */ var _UnsavedChanges__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7930);
/* harmony import */ var _appearanceSettings_AppearanceSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4217);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UnsavedChanges__WEBPACK_IMPORTED_MODULE_4__]);
_UnsavedChanges__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function SettingsView() {
    const { userSettingsScreen , userChangesMade  } = (0,_features_userSettings__WEBPACK_IMPORTED_MODULE_1__/* .useUserSettingsState */ .kq)();
    switch(userSettingsScreen){
        case "My Account":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_myAccountSettings_MyAccountSettings__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {});
        case "User Profile":
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_userProfileSettings_UserProfileSettings__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    userChangesMade && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UnsavedChanges__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        changes: "user"
                    })
                ]
            });
        case "Appearance":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_appearanceSettings_AppearanceSettings__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {});
        default:
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_myAccountSettings_MyAccountSettings__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {});
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MyAccountSettings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _features_userSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6627);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83);





function MyAccountSettings() {
    const darkInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const lightInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { theme  } = (0,_features_userSettings__WEBPACK_IMPORTED_MODULE_3__/* .useUserSettingsState */ .kq)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!darkInputRef.current || !lightInputRef.current) return;
        switch(theme){
            case "dark":
                darkInputRef.current.checked = true;
                break;
            case "light":
                lightInputRef.current.checked = true;
                break;
        }
    });
    function handleChange(e) {
        dispatch((0,_features_userSettings__WEBPACK_IMPORTED_MODULE_3__/* .setTheme */ .Dc)(e.target.value));
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Heading, {
                children: "Appearance"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AppearanceSettings, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubHeading, {
                        children: "THEME"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SettingsContainer, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SettingContainer, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingInput, {
                                        onChange: (e)=>handleChange(e),
                                        name: "theme",
                                        value: "dark",
                                        ref: darkInputRef,
                                        id: "off",
                                        type: "radio"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingInputLabel, {
                                        htmlFor: "off",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingLabelText, {
                                            children: "Dark"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SettingContainerLight, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingInput, {
                                        onChange: (e)=>handleChange(e),
                                        name: "theme",
                                        value: "light",
                                        ref: lightInputRef,
                                        id: "low",
                                        type: "radio"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingInputLabel, {
                                        htmlFor: "low",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingLabelText, {
                                            children: "Light"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().main)`
  min-w-[542px] max-w-[740px] pt-15 px-10 pb-20
`;
const Heading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().h2)`
  mb-5 text-xl font-semibold
  dark:text-white
`;
const AppearanceSettings = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().section)`
  flex flex-col
`;
const SubHeading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().h5)`
  mb-2 text-xs text-gray-800 font-semibold
  dark:text-text-primary
`;
const SettingsContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex flex-col min-w-[440px]
`;
const SettingContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex items-center mb-2 pl-2.5 bg-gray-100 rounded-middle cursor-pointer w-full h-[47px] text-text-quinary
  hover:bg-gray-100/75
  dark:bg-dark-50/60 dark:text-white
`;
const SettingContainerLight = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()(SettingContainer)`
  bg-gray-200 text-text-senary
  dark:bg-dark-200 dark:text-text-primary dark:hover:bg-dark-50/40
`;
const SettingInput = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().input)`
  w-5 h-5 cursor-pointer accent-black
  dark:accent-white
`;
const SettingInputLabel = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().label)`
  flex flex-col w-full p-2.5 cursor-pointer
`;
const SettingLabelText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().span)`
`;


/***/ }),

/***/ 5823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MyAccountSettings)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "tailwind-styled-components/dist/tailwind"
var tailwind_ = __webpack_require__(3095);
var tailwind_default = /*#__PURE__*/__webpack_require__.n(tailwind_);
// EXTERNAL MODULE: ./src/features/user.ts
var features_user = __webpack_require__(786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/redux/hooks.ts
var hooks = __webpack_require__(83);
// EXTERNAL MODULE: ./src/features/userSettings.ts
var userSettings = __webpack_require__(6627);
;// CONCATENATED MODULE: ./src/components/userSettings/userSettingsView/myAccountSettings/MyAccountCard.tsx






function MyAccountCard() {
    const { user  } = (0,features_user/* useUserState */.ec)();
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const bannerStyle = {
        backgroundColor: user.banner
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Banner, {
                style: bannerStyle
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ProfileContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ProfilePicture, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledImage, {
                            loader: ()=>user.avatar,
                            src: user.avatar,
                            width: 80,
                            height: 80,
                            unoptimized: true,
                            alt: "Profile picture"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(DisplayName, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(UsernameDisplay, {
                                children: user.username
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Tag, {
                                children: [
                                    "#",
                                    user.tag
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(UserProfileButton, {
                        onClick: ()=>dispatch((0,userSettings/* setUserSettingsScreen */.Y5)("User Profile")),
                        children: "Edit User Profile"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SettingContainer, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(UsernameSettingContainer, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SettingDisplay, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(SettingsLabel, {
                                        children: "USERNAME"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(UsernameContainer, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Username, {
                                                children: user.username
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Tag, {
                                                children: [
                                                    "#",
                                                    user.tag
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(EditButton, {
                                onClick: ()=>dispatch((0,userSettings/* setChangeUsernameOpen */.DZ)(true)),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(EditButtonContent, {
                                    children: "Edit"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(EmailSettingContainer, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SettingDisplay, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(SettingsLabel, {
                                        children: "EMAIL"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Email, {
                                        children: user.email || "This is a guest account :)"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(EditButton, {
                                onClick: ()=>dispatch((0,userSettings/* setChangeEmailOpen */.v9)(true)),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(EditButtonContent, {
                                    children: "Edit"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const Container = (tailwind_default()).section`
  relative flex flex-col min-w-[655px] max-w-[660px] bg-gray-200 rounded-md
  dark:bg-dark-400
`;
const ProfileContainer = (tailwind_default()).section`
  flex h-18 pt-4 pr-4 pl-30 overflow-clip
`;
const SettingContainer = (tailwind_default()).section`
  flex flex-col m-4 mt-2 p-4 bg-gray-100 rounded
  dark:bg-dark-200
`;
const Banner = (tailwind_default()).span`
  w-full h-25 rounded-t-md
`;
const ProfilePicture = (tailwind_default()).div`
  absolute top-19 left-4 flex border-[7px] rounded-full
  dark:border-dark-400
`;
const StyledImage = tailwind_default()((image_default()))`
  object-cover rounded-full
`;
const DisplayName = (tailwind_default()).div`
  text-xl font-semibold
`;
const UsernameDisplay = (tailwind_default()).span`
  dark:text-white
`;
const UserProfileButton = (tailwind_default()).button`
  min-w-[60px] h-8 ml-auto px-4 py-0.5 bg-indigo-500 rounded text-white truncate
`;
const Username = (tailwind_default()).span`
  dark:text-white
`;
const Tag = tailwind_default()(Username)`
  text-gray-600
  dark:text-text-primary
`;
const UsernameSettingContainer = (tailwind_default()).div`
  flex justify-between
`;
const EmailSettingContainer = tailwind_default()(UsernameSettingContainer)`
  mt-6
`;
const SettingDisplay = (tailwind_default()).div`
  mr-4
`;
const SettingsLabel = (tailwind_default()).div`
  mb-1 text-xs font-bold
  dark:text-text-primary
`;
const UsernameContainer = (tailwind_default()).div`
`;
const EditButton = (tailwind_default()).button`
  my-0.5 py-0.5 px-4 w-15 h-8 bg-gray-500 rounded text-sm text-white font-medium
  dark:bg-dark-50
`;
const EditButtonContent = (tailwind_default()).span`
`;
const Email = (tailwind_default()).span`
  dark:text-white
`;

;// CONCATENATED MODULE: ./src/components/userSettings/userSettingsView/myAccountSettings/MyAccountSettings.tsx



function MyAccountSettings() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MyAccountSettings_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                children: "My Account"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MyAccountCard, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Divider, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AccountSettings, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                        children: "Password"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Divider, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SubHeading, {
                        children: "ACCOUNT REMOVAL"
                    })
                ]
            })
        ]
    });
};
const MyAccountSettings_Container = (tailwind_default()).main`
  pt-15 px-10 pb-20
`;
const Heading = (tailwind_default()).h2`
  mb-5 text-xl font-semibold
  dark:text-white
`;
const SubHeading = (tailwind_default()).h5`
  mt-10 text-xs font-semibold
  dark:text-text-primary
`;
const Divider = (tailwind_default()).div`
  max-w-165 h-px border-t mt-10 border-gray-900/[0.08]
`;
const AccountSettings = (tailwind_default()).section`
  mt-10
`;


/***/ }),

/***/ 1558:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ChangeAvatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);
/* harmony import */ var _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5179);
/* harmony import */ var _features_userSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6627);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(192);
/* harmony import */ var _features_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(786);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_6__]);
_firebase__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function ChangeAvatar() {
    const { user  } = (0,_features_user__WEBPACK_IMPORTED_MODULE_7__/* .useUserState */ .ec)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .T)();
    function closeWindow() {
        dispatch((0,_features_userSettings__WEBPACK_IMPORTED_MODULE_5__/* .setChangeAvatarOpen */ .QF)(false));
    }
    function stopPropagation(e) {
        e.stopPropagation();
    }
    async function changeAvatar(e) {
        if (!e.target.files) return;
        const avatarImage = e.target.files[0];
        const avatarURL = await (0,_firebase__WEBPACK_IMPORTED_MODULE_6__/* .uploadAvatarPreview */ .xF)(avatarImage, user.userID);
        closeWindow();
        dispatch((0,_features_user__WEBPACK_IMPORTED_MODULE_7__/* .setUserAvatar */ .iW)(avatarURL));
        dispatch((0,_features_user__WEBPACK_IMPORTED_MODULE_7__/* .setUserAvatarPreview */ .tV)(avatarImage));
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Backdrop, {
        onClick: closeWindow,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
            onClick: stopPropagation,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeadingContainer, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Heading, {
                            children: "Select Image"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CloseIcon, {
                            onClick: closeWindow,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledImage, {
                                src: _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                                width: 24,
                                height: 24,
                                alt: "Close button"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContentContainer, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FileInputContainer, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UploadIconContainer, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UploadIconLabel, {
                                htmlFor: "fileInput",
                                children: "Upload File"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FileInput, {
                                onChange: changeAvatar,
                                type: "file",
                                accept: ".svg, .png, .jpg, .jpeg",
                                id: "fileInput"
                            })
                        ]
                    })
                })
            ]
        })
    });
};
const Backdrop = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  fixed w-full h-full bg-black/[0.85] z-20
`;
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  fixed flex flex-col top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-110 bg-white rounded-md
`;
const HeadingContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  p-4 pl-5
`;
const Heading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().h2)`
  w-full text-2xl font-bold
`;
const CloseIcon = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  absolute top-4 right-4 p-1
`;
const StyledImage = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default()))`
`;
const ContentContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex justify-center pr-2 pb-4 pl-4
`;
const FileInputContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  relative flex flex-col items-center w-[192px] h-[196px] p-4 bg-gray-200 rounded pointer-events-none
`;
const UploadIconContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  w-32 h-32 bg-indigo-500 rounded-full z-20
`;
const UploadIconLabel = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().label)`
  mt-4 text-sm text-gray-600 font-semibold z-20
`;
const FileInput = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().input)`
  absolute top-0 left-0 w-full h-full text-[0px] cursor-pointer pointer-events-auto rounded
  file:w-full file:h-full file:border-0
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ UserProfileSettings)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "tailwind-styled-components/dist/tailwind"
var tailwind_ = __webpack_require__(3095);
var tailwind_default = /*#__PURE__*/__webpack_require__.n(tailwind_);
// EXTERNAL MODULE: ./src/features/user.ts
var features_user = __webpack_require__(786);
// EXTERNAL MODULE: ./src/features/userSettings.ts
var userSettings = __webpack_require__(6627);
// EXTERNAL MODULE: ./src/redux/hooks.ts
var hooks = __webpack_require__(83);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/utilities/functions.tsx
var functions = __webpack_require__(2852);
;// CONCATENATED MODULE: ./src/components/userSettings/userSettingsView/userProfileSettings/UserProfileCard.tsx







function UserProfileCard() {
    const { user  } = (0,features_user/* useUserState */.ec)();
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    const bannerStyle = {
        backgroundColor: user.banner
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Banner, {
                style: bannerStyle
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ProfilePicture, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(HoverTextBackdrop, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(HoverText, {
                            children: "CHANGE AVATAR"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(StyledImage, {
                        onClick: ()=>dispatch((0,userSettings/* setChangeAvatarOpen */.QF)(true)),
                        loader: ()=>user.avatar,
                        src: user.avatar,
                        width: 80,
                        height: 80,
                        unoptimized: true,
                        alt: "Profile picture"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SettingContainer, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(UsernameContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Username, {
                                children: user.username
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Tag, {
                                children: [
                                    "#",
                                    user.tag
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Divider, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ProfileContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(ProfileHeading, {
                                children: "ABOUT ME"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(AboutMeContainer, {
                                children: (0,functions/* parseURLs */.l)(user.about)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const Container = (tailwind_default()).section`
  relative flex flex-col w-[18.75rem] bg-white rounded drop-shadow-xl
  dark:bg-dark-300
`;
const ProfileContainer = (tailwind_default()).section`
  flex flex-col pt-4 pb-3
`;
const SettingContainer = (tailwind_default()).section`
  flex flex-col m-4 mt-16 px-3 bg-gray-100 rounded
  dark:bg-dark-600 dark:text-text-tertiary
`;
const HoverTextBackdrop = (tailwind_default()).div`
  absolute hidden w-full h-full bg-black/50 rounded-full z-10 group pointer-events-none
  group-hover:block
`;
const HoverText = (tailwind_default()).span`
  absolute flex w-full h-full text-center justify-center items-center text-[10px] text-white font-bold
`;
const Banner = (tailwind_default()).span`
  h-15 rounded-t-lg
`;
const ProfilePicture = (tailwind_default()).div`
  absolute top-4 left-4 flex border-[7px] border-white rounded-full group
  dark:border-dark-300
`;
const StyledImage = tailwind_default()((image_default()))`
  object-cover rounded-full cursor-pointer
`;
const UsernameContainer = (tailwind_default()).div`
  pt-3 text-xl font-semibold select-text
`;
const Username = (tailwind_default()).span`
  break-all
  dark:text-white
`;
const Tag = (tailwind_default()).span`
  text-gray-600
  dark:text-text-primary
`;
const Divider = (tailwind_default()).div`
  w-full h-px mt-3 bg-gray-200
  dark:bg-dark-50/[.48]
`;
const ProfileHeading = (tailwind_default()).h3`
  mb-2 text-xs font-bold
  dark:text-white
`;
const AboutMeContainer = (tailwind_default()).div`
  text-sm select-text break-words whitespace-pre-wrap
`;
const LinkText = (tailwind_default()).a`
  text-url-link
  hover:underline
`;

;// CONCATENATED MODULE: ./src/components/userSettings/userSettingsView/userProfileSettings/UserProfileSettings.tsx







function UserProfileSettings() {
    const { user  } = (0,features_user/* useUserState */.ec)();
    const { userCopy  } = (0,userSettings/* useUserSettingsState */.kq)();
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    (0,external_react_.useEffect)(()=>{
        if (!userCopy) return;
        if (user !== userCopy) {
            dispatch((0,userSettings/* setUserChangesMade */.s7)(true));
        } else {
            dispatch((0,userSettings/* setUserChangesMade */.s7)(false));
        }
    }, [
        user,
        userCopy
    ]);
    function handleClick() {
        dispatch((0,features_user/* setUserBanner */.KG)("#7CC6FE"));
    }
    function handleColorChange(e) {
        dispatch((0,features_user/* setUserBanner */.KG)(e.target.value));
    }
    function handleAboutChange(e) {
        dispatch((0,features_user/* setUserAbout */.f)(e.target.value));
    }
    function removeAvatar() {
        dispatch((0,features_user/* setUserAvatar */.iW)("https://firebasestorage.googleapis.com/v0/b/banter-69832.appspot.com/o/assets%2FdefaultAvatar.svg?alt=media&token=2cd07b3e-6ee1-4682-8246-57bb20bc0d1f"));
        dispatch((0,features_user/* setUserAvatarPreview */.tV)(null));
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(UserProfileSettings_Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                children: "User Profile"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Separator, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContentContainer, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(CustomizationContainer, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SettingsContainer, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(SettingsHeading, {
                                        children: "AVATAR"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AvatarButtonsContainer, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(ChangeAvatarButton, {
                                                onClick: ()=>dispatch((0,userSettings/* setChangeAvatarOpen */.QF)(true)),
                                                children: "Change Avatar"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(RemoveAvatarButton, {
                                                onClick: removeAvatar,
                                                children: "Remove Avatar"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SettingsContainer, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(SettingsHeading, {
                                        children: "BANNER COLOR"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ColorInputsContainer, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ColorInputContainer, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ColorButton, {
                                                        onClick: handleClick,
                                                        type: "button"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ColorInputLabel, {
                                                        children: "Default"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ColorInputContainer, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ColorInput, {
                                                        onChange: handleColorChange,
                                                        type: "color",
                                                        value: user.banner
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(ColorInputLabel, {
                                                        children: "Custom"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(AboutContainer, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(SettingsHeading, {
                                        children: "ABOUT ME"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SettingsSubheading, {
                                        children: [
                                            "You can use links if you",
                                            "'",
                                            "d like."
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(AboutMe, {
                                        onChange: handleAboutChange,
                                        value: user.about,
                                        placeholder: "Tell this server a bit about yourself",
                                        maxLength: 190,
                                        rows: 6
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(UserProfileCardContainer, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SettingsHeading, {
                                children: "PREVIEW"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(UserProfileCard, {})
                        ]
                    })
                ]
            })
        ]
    });
};
const UserProfileSettings_Container = (tailwind_default()).main`
  pt-15 px-10 pb-20
`;
const Heading = (tailwind_default()).h1`
  mb-5 text-xl font-semibold w-165
  dark:text-white
`;
const Separator = (tailwind_default()).div`
  w-full mb-6 pb-1 border-b border-gray-200
  dark:border-dark-50/[.48]
`;
const ContentContainer = (tailwind_default()).div`
  flex
`;
const CustomizationContainer = (tailwind_default()).div`
  flex-1 min-w-[270px] max-w-[340px]
`;
const SettingsContainer = (tailwind_default()).div`
  mb-6 pb-6 border-b
  dark:border-dark-50/[.48]
`;
const SettingsHeading = (tailwind_default()).h5`
  mb-2 text-xs text-gray-600 font-semibold
  dark:text-text-primary
`;
const SettingsSubheading = (tailwind_default()).div`
  mb-4 text-sm text-text-primary
`;
const AvatarButtonsContainer = (tailwind_default()).div`
`;
const ChangeAvatarButton = (tailwind_default()).button`
  w-fit h-8 px-4 py-0.5 bg-indigo-500 text-white text-sm font-medium rounded-middle
`;
const RemoveAvatarButton = tailwind_default()(ChangeAvatarButton)`
  bg-white text-sm text-gray-500
  dark:bg-dark-100 dark:text-white
`;
const ColorInputsContainer = (tailwind_default()).div`
  flex
`;
const ColorInputContainer = (tailwind_default()).div`
  flex flex-col mr-4 text-center
`;
const ColorInput = (tailwind_default()).input`
  w-[69px] h-[50px] rounded border-none
`;
const ColorButton = tailwind_default()(ColorInput)`
  bg-primary
`;
const ColorInputLabel = (tailwind_default()).label`
  mt-1 text-xs text-gray-600
  dark:text-text-primary
`;
const AboutContainer = tailwind_default()(SettingsContainer)`
  border-none
`;
const AboutMe = (tailwind_default()).textarea`
  w-full p-2.5 pr-8 bg-gray-50 rounded-middle resize-none
  dark:bg-dark-400 dark:text-text-tertiary
`;
const UserProfileCardContainer = (tailwind_default()).div`
  mb-6 ml-5 pb-6
`;


/***/ }),

/***/ 2852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useParseLinks),
/* harmony export */   "l": () => (/* binding */ parseURLs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83);





function parseURLs(message, link = true) {
    const messageArray = message.split(/(https?:\/\/\w[^ ]+)/);
    const fixedArray = addSlash(messageArray);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: fixedArray.map((message, index)=>{
            return index % 2 === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: message
            }, index) : link ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: message,
                passHref: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkText, {
                    rel: "noreferrer noopener",
                    target: "_blank",
                    children: message
                })
            }, index) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DummyLinkText, {
                children: message
            });
        })
    });
}
function addSlash(messageArray) {
    return messageArray.map((message, index)=>{
        return index % 2 === 0 ? message : message.includes("/", 8) ? message : message.concat("/");
    });
}
function useParseLinks(message, link = true) {
    const { channels  } = (0,_features_servers__WEBPACK_IMPORTED_MODULE_3__/* .useServersState */ .EG)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    if (message && (message.includes("https://") || message.includes("http://"))) return parseURLs(message);
    return findChannels(message);
    function findChannels(message) {
        if (!message || !message.includes("#")) return message;
        const messageArray = message.split(/(#\w[^ ]+)/);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: messageArray.map((message, index)=>{
                const match = channels.find((channel)=>message.includes(channel.name));
                return match ? link ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: match.path,
                    passHref: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            findChannels(message.split(match.name)[0].slice(0, -1)),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ChannelLinkText, {
                                onClick: ()=>dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_3__/* .setChannel */ .QC)(match)),
                                children: [
                                    "#",
                                    match.name
                                ]
                            }),
                            findChannels(message.split(match.name)[1])
                        ]
                    })
                }, index) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DummyChannelLinkText, {
                    children: message
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: message
                }, index);
            })
        });
    }
}
const LinkText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().a)`
  text-url-link
  hover:underline
  dark:text-url-link-dark
`;
const ChannelLinkText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().a)`
  text-channel-link bg-channel-link/[.15] rounded-[3px] px-0.5 cursor-pointer
  hover:text-white hover:bg-channel-link
  dark:bg-channel-link/[.3] dark:text-channel-link-dark
  dark:hover:text-white dark:hover:bg-channel-link
`;
const DummyLinkText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().span)`
  text-url-link
`;
const DummyChannelLinkText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().span)`
  text-channel-link bg-channel-link/[0.15] rounded-[3px] px-0.5 cursor-pointer
`;


/***/ })

};
;