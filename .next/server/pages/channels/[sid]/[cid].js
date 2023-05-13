"use strict";
(() => {
var exports = {};
exports.id = 293;
exports.ids = [293];
exports.modules = {

/***/ 9289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/addRoleIcon.fb9b30eb.svg","height":24,"width":24});

/***/ }),

/***/ 7668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/addRoleIconDark.212462c8.svg","height":24,"width":24});

/***/ }),

/***/ 5081:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AssignRole)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4191);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(192);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37);
/* harmony import */ var _features_serverSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(503);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_3__]);
_firebase__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function AssignRole() {
    const { 0: leftoverRoles , 1: setLeftoverRoles  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { server , member  } = (0,_features_servers__WEBPACK_IMPORTED_MODULE_4__/* .useServersState */ .EG)();
    const { assignRolePosition  } = (0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_5__/* .useServerSettingsState */ .g$)();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .T)();
    function stopPropagation(e) {
        e.stopPropagation();
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        if (!containerRef.current) return;
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_5__/* .setAssignRoleHeight */ .lN)(containerRef.current.getBoundingClientRect().height));
    }, [
        leftoverRoles
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        if (!member.roles) return setLeftoverRoles(server.roles);
        const leftoverRoles = [];
        if (!!server.roles) for (const role of server.roles){
            if (!member.roles.includes(role)) leftoverRoles.push(role);
        }
        setLeftoverRoles(leftoverRoles);
    }, [
        member
    ]);
    function handleClick(roleID) {
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_5__/* .setAssignRoleOpen */ .Mv)(false));
        if (!member.roles) return (0,_firebase__WEBPACK_IMPORTED_MODULE_3__/* .setServerRole */ .nK)(server.serverID, member.userID, [
            roleID
        ]);
        const newRoles = member.roles.map((role)=>role.roleID);
        let duplicate = false;
        for (const role of newRoles){
            if (role === roleID) return duplicate = true;
        }
        if (duplicate) return;
        newRoles.push(roleID);
        (0,_firebase__WEBPACK_IMPORTED_MODULE_3__/* .setServerRole */ .nK)(server.serverID, member.userID, newRoles);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
        onClick: stopPropagation,
        ref: containerRef,
        style: assignRolePosition,
        $roles: leftoverRoles && leftoverRoles.length > 0 ? true : false,
        children: leftoverRoles && leftoverRoles.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ResultsContainer, {
            children: leftoverRoles.map((role, index)=>{
                const RoleColorStyle = {
                    backgroundColor: role.color
                };
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RoleContainer, {
                    onClick: ()=>handleClick(role.roleID),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RoleColor, {
                            style: RoleColorStyle
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RoleName, {
                            children: role.name
                        })
                    ]
                }, index);
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NoResultsContainer, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Heading, {
                children: "Nope!"
            })
        })
    });
};
const Container = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  absolute w-[250px] min-h-[78px] max-h-[256px] p-2 bg-white border rounded
  dark:bg-dark-100 dark:border-dark-50/[.48]
  ${(props)=>props.$roles ? "h-[256px]" : "h-[78px]"}
`;
const ResultsContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  mt-2 py-2
`;
const RoleContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().li)`
  flex items-center w-[232px] px-2 py-2.5 mb-1 font-medium rounded-md cursor-pointer
  hover:bg-gray-100
  dark:hover:bg-text-tertiary
`;
const RoleColor = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex-none w-3 h-3 rounded-full
`;
const RoleName = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().span)`
  ml-2 font-medium truncate
  dark:text-text-tertiary
`;
const NoResultsContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex justify-center p-5
`;
const Heading = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().h4)`
  font-semibold
  dark:text-white
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7261:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MemberProfileCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1492);
/* harmony import */ var _features_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(786);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(192);
/* harmony import */ var _assets_addRoleIcon_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9289);
/* harmony import */ var _assets_addRoleIconDark_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7668);
/* harmony import */ var _features_serverSettings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(503);
/* harmony import */ var _AssignRole__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5081);
/* harmony import */ var _utilities_functions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2852);
/* harmony import */ var _features_userSettings__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6627);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, _firebase__WEBPACK_IMPORTED_MODULE_8__, _AssignRole__WEBPACK_IMPORTED_MODULE_12__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_6__, _firebase__WEBPACK_IMPORTED_MODULE_8__, _AssignRole__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function MemberProfileCard() {
    const { user  } = (0,_features_user__WEBPACK_IMPORTED_MODULE_7__/* .useUserState */ .ec)();
    const { server , member , memberPreview , memberProfileCardPosition  } = (0,_features_servers__WEBPACK_IMPORTED_MODULE_3__/* .useServersState */ .EG)();
    const { assignRoleOpen , assignRoleHeight  } = (0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_11__/* .useServerSettingsState */ .g$)();
    const { theme  } = (0,_features_userSettings__WEBPACK_IMPORTED_MODULE_14__/* .useUserSettingsState */ .kq)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const skippedRender = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(false);
    const addRoleIconRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const onRef = (node)=>{
        if (node) containerRef.current = node;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (skippedRender.current) {
            return;
        }
        skippedRender.current = true;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useLayoutEffect)(()=>{
        if (!memberProfileCardPosition || !memberProfileCardPosition.top || !containerRef.current) return;
        const containerHeight = containerRef.current.getBoundingClientRect().height;
        if (memberProfileCardPosition.top + containerHeight > window.innerHeight) {
            dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_3__/* .setMemberProfileCardPosition */ .tS)({
                ...memberProfileCardPosition,
                top: window.innerHeight - containerHeight - 16
            }));
        }
    }, [
        memberProfileCardPosition,
        onRef
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (!memberPreview.userID) return;
        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_8__.db, "users", memberPreview.userID), (doc)=>{
            if (!doc.exists()) return;
            const docData = doc.data();
            const member = {
                username: docData.username,
                tag: docData.tag,
                avatar: docData.avatar,
                about: docData.about,
                banner: docData.banner,
                // permissions: memberPreview.permissions,
                roles: memberPreview.roles || [],
                serverOwner: memberPreview.serverOwner ? memberPreview.serverOwner : false,
                userID: doc.id
            };
            dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_3__/* .setMember */ .iq)(member));
        });
        return ()=>{
            unsubscribe();
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (!addRoleIconRef.current) return;
        const assignRolePositionX = addRoleIconRef.current.getBoundingClientRect().left - 113;
        const assignRolePositionY = addRoleIconRef.current.getBoundingClientRect().top + 32;
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_11__/* .setAssignRolePosition */ .zb)({
            top: assignRolePositionY + assignRoleHeight > window.innerHeight ? addRoleIconRef.current.getBoundingClientRect().top - (assignRoleHeight + 8) : assignRolePositionY,
            left: assignRolePositionX
        }));
    }, [
        assignRoleHeight
    ]);
    function closeWindow() {
        dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_3__/* .setMemberProfileCardOpen */ .II)(false));
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_11__/* .setAssignRoleOpen */ .Mv)(false));
    }
    function stopPropagation(e) {
        e.stopPropagation();
    }
    function handleClick() {
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_11__/* .setAssignRoleOpen */ .Mv)(!assignRoleOpen));
    }
    function removeRole(member, roleID) {
        if (!user.roles.serverOwner) return;
        const newMember = {
            ...member
        };
        const roleIDList = newMember.roles.map((role)=>role.roleID);
        const newRoles = roleIDList.filter((role)=>role !== roleID);
        (0,_firebase__WEBPACK_IMPORTED_MODULE_8__/* .setServerRole */ .nK)(server.serverID, member.userID, newRoles);
    }
    const bannerStyle = {
        backgroundColor: member.banner
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Backdrop, {
        onClick: closeWindow,
        children: [
            skippedRender.current && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
                onClick: stopPropagation,
                ref: onRef,
                style: memberProfileCardPosition,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Banner, {
                        style: bannerStyle
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProfilePicture, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledImage, {
                            loader: ()=>member.avatar,
                            src: member.avatar,
                            width: 80,
                            height: 80,
                            unoptimized: true,
                            alt: "Profile picture"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ProfileContainer, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(UsernameContainer, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Username, {
                                        children: member.username
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Tag, {
                                        children: [
                                            "#",
                                            member.tag
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Divider, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ProfileDetails, {
                                children: [
                                    member.about && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeadingContainer, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProfileHeading, {
                                                children: "ABOUT ME"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AboutMeContainer, {
                                                children: (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_13__/* .parseURLs */ .l)(member.about)
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Roles, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProfileHeading, {
                                                children: member.roles.length > 0 ? member.roles.length > 1 ? "ROLES" : "ROLE" : "NO ROLES"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RolesList, {
                                                children: [
                                                    member.roles.map((role, index)=>{
                                                        const RoleColorStyle = {
                                                            backgroundColor: role.color
                                                        };
                                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RoleContainer, {
                                                            onClick: ()=>removeRole(member, role.roleID),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RoleColor, {
                                                                    style: RoleColorStyle
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RoleName, {
                                                                    children: role.name
                                                                })
                                                            ]
                                                        }, index);
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AddRoleIconContainer, {
                                                        ref: addRoleIconRef,
                                                        children: user.roles.serverOwner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AddRoleIcon, {
                                                            onClick: handleClick,
                                                            src: theme === "dark" ? _assets_addRoleIconDark_svg__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z : _assets_addRoleIcon_svg__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                                            width: 24,
                                                            height: 22
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            assignRoleOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AssignRole__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {})
        ]
    });
};
const Backdrop = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  fixed w-full h-full z-20
`;
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().section)`
  absolute flex flex-col w-[21.25rem] bg-gray-200 rounded-lg drop-shadow-xl
  dark:bg-dark-300 dark:text-white
`;
const ProfileContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().section)`
  flex flex-col m-4 mt-16 bg-white rounded-lg
  dark:bg-dark-400
`;
const Banner = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().span)`
  h-15 rounded-t-lg
`;
const ProfilePicture = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  absolute top-4 left-4 flex border-[7px] border-gray-200 rounded-full
  dark:text-white dark:border-dark-300
`;
const StyledImage = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default()((next_image__WEBPACK_IMPORTED_MODULE_2___default()))`
  object-cover rounded-full
`;
const UsernameContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  p-3 pb-0 text-xl font-semibold select-text
`;
const Username = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().span)`
  break-all
`;
const Tag = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().span)`
  text-gray-600
  dark:text-text-primary
`;
const Divider = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  h-px m-3 mb-0 bg-gray-200
  dark:bg-dark-50/[.48]
`;
const ProfileDetails = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  pl-4
  dark:text-text-tertiary
`;
const HeadingContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  pt-3
`;
const Roles = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  flex flex-col pt-3
`;
const RolesList = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  flex
`;
const RoleContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  flex h-6 items-center p-1 mr-1 mb-1 rounded bg-gray-100 cursor-pointer
  hover:bg-gray-100
  dark:bg-dark-300
`;
const RoleColor = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  w-3 h-3 mx-1 rounded-full
`;
const RoleName = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().span)`
  text-xs font-medium
`;
const ProfileHeading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().h3)`
  mb-2 text-[#060607] text-xs font-bold
  dark:text-white
`;
const AboutMeContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  text-sm select-text
`;
const AddRoleIconContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  flex-none mr-1 mb-1
`;
const AddRoleIcon = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default()((next_image__WEBPACK_IMPORTED_MODULE_2___default()))`
  rounded select-text whitespace-pre-wrap
  hover:cursor-pointer
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9542:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Members)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(192);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Members() {
    const { server , members , memberRoles , memberProfileCardOpen  } = (0,_features_servers__WEBPACK_IMPORTED_MODULE_5__/* .useServersState */ .EG)();
    const memberRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
    const { 0: assignedRoles , 1: setAssignedRoles  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: unassignedRoles , 1: setUnassignedRoles  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .T)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!server.serverID) return;
        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, "servers", server.serverID, "members"));
        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)(q, (querySnapshot)=>{
            const memberRolesList = [];
            querySnapshot.forEach((doc)=>{
                const docData = doc.data();
                const memberRoles = {
                    userID: doc.id,
                    serverOwner: docData.serverOwner,
                    roles: docData.roles
                };
                memberRolesList.push(memberRoles);
            });
            dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_5__/* .setMemberRoles */ .EH)(memberRolesList));
        });
        return ()=>{
            unsubscribe();
        };
    }, [
        server
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, "users"));
        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)(q, (querySnapshot)=>{
            const memberList = [];
            const memberIDs = [];
            const members = getRoles(server.roles, memberRoles);
            members.map((member)=>memberIDs.push(member.userID));
            querySnapshot.forEach((doc)=>{
                if (!memberIDs.includes(doc.id)) return;
                const docData = doc.data();
                const member = {
                    username: docData.username,
                    avatar: docData.avatar,
                    userID: doc.id
                };
                memberList.push(member);
            });
            memberList.sort((a, b)=>a.username.localeCompare(b.username));
            const newMembers = [];
            for(let i = 0; i < memberList.length; i++){
                newMembers.push({
                    ...memberList[i],
                    ...members.find((member)=>member.userID === memberList[i].userID)
                });
            }
            dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_5__/* .setMembers */ .jk)(newMembers));
        });
        return ()=>{
            unsubscribe();
        };
    }, [
        memberRoles
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const membersWithRoles = members.filter((member)=>member.roles);
        const membersWithoutRoles = members.filter((member)=>!member.roles);
        const rolesList = [];
        for(let i = 0; i < membersWithRoles.length; i++){
            const roleLength = membersWithRoles[i].roles.length;
            for(let j = 0; j < roleLength; j++){
                rolesList.push(membersWithRoles[i].roles[j]);
            }
        }
        const organizedRoles = organizeRoles(Array.from(new Set(rolesList)), membersWithRoles);
        setUnassignedRoles(membersWithoutRoles);
        setAssignedRoles(organizedRoles);
    }, [
        members
    ]);
    function getRoles(serverRoles, memberRoles) {
        const newMembers = JSON.parse(JSON.stringify(memberRoles));
        const members = newMembers.map((member)=>{
            if (!member.roles || member.roles.length <= 0 || serverRoles.length <= 0) return member;
            for(let i = 0; i < member.roles.length; i++){
                for(let j = 0; j < serverRoles.length; j++){
                    if (member.roles[i] === serverRoles[j].roleID) {
                        member.roles[i] = serverRoles[j];
                    }
                }
            }
            return member;
        });
        return members;
    }
    function organizeRoles(rolesList, membersWithRoles) {
        const results = [];
        for(const role in rolesList){
            const item = {
                ...rolesList[role],
                members: []
            };
            results.push(item);
        }
        for(const role1 in rolesList){
            for(const member in membersWithRoles){
                if (rolesList[role1].roleID === membersWithRoles[member].roles[0].roleID) {
                    results[role1].members.push(membersWithRoles[member]);
                }
            }
        }
        return results.sort((a, b)=>a.sort < b.sort ? -1 : 1);
    }
    function viewProfile(member, index) {
        dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_5__/* .setMemberProfileCardOpen */ .II)(!memberProfileCardOpen));
        if (!memberRef.current) return;
        const memberProfileCardY = memberRef.current[index].getBoundingClientRect().top;
        dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_5__/* .setMemberPreview */ .wH)(member));
        dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_5__/* .setMemberProfileCardPosition */ .tS)({
            top: memberProfileCardY,
            right: 248
        }));
    }
    function findLength(array) {
        let sum = 0;
        for (const role of array){
            sum += role.members.length;
        }
        return sum;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Sidebar, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MemberList, {
                children: [
                    assignedRoles.length ? assignedRoles.map((role, outerIndex)=>{
                        const roleStyle = {
                            color: role.color
                        };
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Heading, {
                                    children: [
                                        role.name.toUpperCase(),
                                        " — ",
                                        role.members.length
                                    ]
                                }),
                                role.members.map((member, index)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MemberContainer, {
                                        onClick: ()=>viewProfile(member, outerIndex > 0 ? assignedRoles[outerIndex - 1].members.length + index : index),
                                        ref: (el)=>memberRef.current[index + (outerIndex > 0 ? assignedRoles[outerIndex - 1].members.length : 0)] = el,
                                        style: roleStyle,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Member, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledImage, {
                                                    loader: ()=>member.avatar,
                                                    src: member.avatar,
                                                    width: 32,
                                                    height: 32,
                                                    unoptimized: true,
                                                    alt: `${member.username}'s profile picture`
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(UsernameContainer, {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Username, {
                                                            children: member.username
                                                        }),
                                                        member.serverOwner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ServerOwnerIcon, {
                                                            children: "\uD83D\uDC51"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, member.userID);
                                })
                            ]
                        }, role.roleID);
                    }) : null,
                    unassignedRoles.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Heading, {
                                children: [
                                    "ONLINE - ",
                                    unassignedRoles.length
                                ]
                            }),
                            unassignedRoles.map((member, index)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MemberContainer, {
                                    onClick: ()=>viewProfile(member, assignedRoles.length > 0 ? index + findLength(assignedRoles) : 0),
                                    ref: (el)=>memberRef.current[index + findLength(assignedRoles)] = el,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Member, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledImage, {
                                                loader: ()=>member.avatar,
                                                src: member.avatar,
                                                width: 32,
                                                height: 32,
                                                unoptimized: true,
                                                alt: `${member.username}'s profile picture`
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(UsernameContainer, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Username, {
                                                        children: member.username
                                                    }),
                                                    member.serverOwner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ServerOwnerIcon, {
                                                        children: "\uD83D\uDC51"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, member.userID);
                            })
                        ]
                    }) : null
                ]
            })
        })
    });
};
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().div)`
  relative flex-none w-60 h-full bg-gray-100
  dark:bg-dark-200 dark:text-text-secondary
`;
const Sidebar = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().aside)`
  absolute flex flex-none w-full h-full
`;
const MemberList = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().ol)`
  pb-5 overflow-hidden
  hover:overflow-y-auto
`;
const Heading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().h2)`
  pt-6 pr-2 pl-4 text-xs font-semibold
`;
const MemberContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().li)`
  w-56 h-11 ml-2 py-px
`;
const Member = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().div)`
  flex items-center h-full px-2 rounded cursor-pointer
  hover:bg-gray-200
  dark:hover:bg-dark-50/40 dark:hover:text-text-tertiary
`;
const StyledImage = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default()((next_image__WEBPACK_IMPORTED_MODULE_7___default()))`
  object-cover rounded-full
`;
const UsernameContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().div)`
  flex w-[164px] items-center
`;
const Username = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().span)`
  ml-3 overflow-hidden truncate
`;
const ServerOwnerIcon = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().span)`
  ml-1 text-xs
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Title)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "tailwind-styled-components"
var external_tailwind_styled_components_ = __webpack_require__(4191);
var external_tailwind_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_tailwind_styled_components_);
// EXTERNAL MODULE: ./src/features/servers.ts
var servers = __webpack_require__(37);
;// CONCATENATED MODULE: ./assets/memberListIcon.svg
/* harmony default export */ const memberListIcon = ({"src":"/_next/static/media/memberListIcon.b47a7066.svg","height":512,"width":512});
// EXTERNAL MODULE: ./src/features/userSettings.ts
var userSettings = __webpack_require__(6627);
// EXTERNAL MODULE: ./src/redux/hooks.ts
var hooks = __webpack_require__(83);
;// CONCATENATED MODULE: external "react-icons/io"
const io_namespaceObject = require("react-icons/io");
;// CONCATENATED MODULE: ./src/components/Title.tsx








function Title() {
    const { channel  } = (0,servers/* useServersState */.EG)();
    const { memberListOpen  } = (0,userSettings/* useUserSettingsState */.kq)();
    const dispatch = (0,hooks/* useAppDispatch */.T)();
    function toggleMembersList() {
        dispatch((0,userSettings/* setMemberListOpen */.ai)(!memberListOpen));
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HeadingContainer, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(HeadingIcon, {
                        children: "#"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                        children: channel.name
                    }),
                    channel.topic && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Divider, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(Topic, {
                                children: channel.topic
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(io_namespaceObject.IoMdVideocam, {
                            className: "text-gray-300 text-xl mr-2"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Toolbar, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledImage, {
                            onClick: toggleMembersList,
                            src: memberListIcon,
                            width: 24,
                            height: 24
                        })
                    })
                ]
            })
        ]
    });
};
const Container = (external_tailwind_styled_components_default()).section`
  flex flex-none h-12 px-2 items-center justify-between bg-white z-10 border-b border-gray-300
  dark:bg-dark-100 dark:border-0 dark:shadow-[0_1px_0_0_rgba(4,4,5,0.2),0_1.5px_0_0_rgba(6,6,7,0.05),0_2px_0_0_rgba(4,4,5,0.05)]
`;
const HeadingContainer = (external_tailwind_styled_components_default()).div`
  flex items-center
  dark:text-[#8E9297]
`;
const HeadingIcon = (external_tailwind_styled_components_default()).div`
  mx-2 text-3xl font-thin
`;
const Heading = (external_tailwind_styled_components_default()).h3`
  mr-2 font-semibold
  dark:text-white
`;
const Divider = (external_tailwind_styled_components_default()).div`
  w-px h-6 mx-2 bg-gray-300
`;
const Topic = (external_tailwind_styled_components_default()).span`
  p-2 text-xs
`;
const Toolbar = (external_tailwind_styled_components_default()).div`
  mx-2
`;
const StyledImage = external_tailwind_styled_components_default()((image_default()))`
  cursor-pointer
`;


/***/ }),

/***/ 1634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ViewMedia)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83);





function ViewMedia() {
    const { viewMedia  } = (0,_features_servers__WEBPACK_IMPORTED_MODULE_3__/* .useServersState */ .EG)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    function closeWindow() {
        dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_3__/* .setViewMediaOpen */ .aS)(false));
    }
    function stopPropagation(e) {
        e.stopPropagation();
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Backdrop, {
        onClick: closeWindow,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
            onClick: stopPropagation,
            children: [
                viewMedia.type === "image" && viewMedia.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledImage, {
                    onClick: closeWindow,
                    loader: ()=>viewMedia.src,
                    src: viewMedia.src,
                    width: 992,
                    height: 609,
                    unoptimized: true
                }),
                viewMedia.type === "video" && viewMedia.src && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledVideo, {
                    src: viewMedia.src,
                    autoPlay: true,
                    loop: true,
                    preload: "auto"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkText, {
                    href: viewMedia.src,
                    rel: "noreferrer noopener",
                    target: "_blank",
                    children: "Open original"
                })
            ]
        })
    });
};
const Backdrop = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  fixed w-full h-full bg-black/[0.85] z-20
`;
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  fixed flex flex-col w-fit h-fit top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]
`;
const StyledImage = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default()))`
  object-contain
`;
const StyledVideo = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().video)`
  object-contain
`;
const LinkText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().a)`
  text-sm text-gray-400 font-medium cursor-pointer leading-[30px]
  hover:underline
`;


/***/ }),

/***/ 781:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Chat)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4191);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _features_sendGif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3619);
/* harmony import */ var _Messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5774);
/* harmony import */ var _SendGif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5074);
/* harmony import */ var _textArea_TextArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2364);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Messages__WEBPACK_IMPORTED_MODULE_3__, _SendGif__WEBPACK_IMPORTED_MODULE_4__, _textArea_TextArea__WEBPACK_IMPORTED_MODULE_5__]);
([_Messages__WEBPACK_IMPORTED_MODULE_3__, _SendGif__WEBPACK_IMPORTED_MODULE_4__, _textArea_TextArea__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function Chat() {
    const { sendGifOpen  } = (0,_features_sendGif__WEBPACK_IMPORTED_MODULE_2__/* .useSendGifState */ .rk)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MessagesContainer, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Messages__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    sendGifOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SendGif__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_textArea_TextArea__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
};
const Container = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_1___default().main)`
  flex flex-col w-full h-full
  dark:bg-dark-100
`;
const MessagesContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
  relative flex flex-1
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Message)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4191);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37);
/* harmony import */ var _features_userSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6627);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83);
/* harmony import */ var _utilities_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2852);








function Message(props) {
    const { 0: sender , 1: setSender  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        userID: "",
        username: "",
        avatar: "https://firebasestorage.googleapis.com/v0/b/banter-69832.appspot.com/o/defaultProfilePicture.svg?alt=media&token=e0ee525e-6ad5-4098-9198-77608ec38f3a",
        tag: "",
        about: "",
        banner: "",
        serverOwner: false,
        roles: []
    });
    const { 0: senderStyle , 1: setSenderStyle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const avatarRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const messageRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { members , memberProfileCardOpen  } = (0,_features_servers__WEBPACK_IMPORTED_MODULE_4__/* .useServersState */ .EG)();
    const { theme  } = (0,_features_userSettings__WEBPACK_IMPORTED_MODULE_5__/* .useUserSettingsState */ .kq)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .T)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const userID = props.message.userID;
        const member = members.find((member)=>member.userID === userID);
        if (!member) return;
        setSender(member);
    }, [
        props.message.userID,
        members
    ]);
    function getDate() {
        const timestamp = props.message.timestamp;
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = date.getMonth();
        const monthDay = date.getDate();
        const day = getDay(date, monthDay);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let period = "";
        if (hours === 12) {
            period = "PM";
        } else if (hours > 12) {
            period = "PM";
            hours = hours - 12;
        } else if (hours === 0) {
            hours = 12;
            period = "AM";
        } else {
            period = "AM";
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        let format = "";
        if (day === "Today" || day === "Yesterday") {
            format = `${day} at ${hours}:${minutes} ${period}`;
        } else {
            format = `${month + 1}/${monthDay}/${year}`;
        }
        return format;
    }
    function getDay(dateSent, monthDay) {
        const date = new Date();
        const today = new Date().getDate();
        if (dateSent.getFullYear() === date.getFullYear() && dateSent.getMonth() === date.getMonth()) {
            switch(monthDay){
                case today:
                    return "Today";
                case today - 1:
                    return "Yesterday";
                default:
                    return monthDay;
            }
        } else {
            return monthDay;
        }
    }
    function viewProfile(member, ref) {
        dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_4__/* .setMemberProfileCardOpen */ .II)(!memberProfileCardOpen));
        if (!ref.current) return;
        const memberProfileCardX = ref.current.getBoundingClientRect().right;
        const memberProfileCardY = ref.current.getBoundingClientRect().top;
        dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_4__/* .setMemberPreview */ .wH)(member));
        dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_4__/* .setMemberProfileCardPosition */ .tS)({
            top: memberProfileCardY,
            left: memberProfileCardX + 6
        }));
    }
    function viewMedia(src, type) {
        dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_4__/* .setViewMediaOpen */ .aS)(true));
        dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_4__/* .setViewMedia */ .Z6)({
            src,
            type
        }));
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!sender.roles || sender.roles.length <= 0) return setSenderStyle({
            color: theme === "dark" ? "#FFF" : "#060607"
        });
        const senderStyle = {
            color: sender.roles[0].color
        };
        setSenderStyle(senderStyle);
    }, [
        sender
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MessageContainer, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProfilePictureContainer, {
                    onClick: ()=>viewProfile(sender, avatarRef),
                    ref: avatarRef,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProfilePicture, {
                        loader: ()=>sender.avatar,
                        src: sender.avatar,
                        width: 40,
                        height: 40,
                        unoptimized: true,
                        alt: "Profile picture"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ContentContainer, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MessageContent, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MessageInfo, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Username, {
                                            onClick: ()=>viewProfile(sender, messageRef),
                                            ref: messageRef,
                                            style: senderStyle,
                                            children: sender.username
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MessageDate, {
                                            children: getDate()
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Content, {
                                    children: (0,_utilities_functions__WEBPACK_IMPORTED_MODULE_7__/* .useParseLinks */ .a)(props.message.content)
                                })
                            ]
                        }),
                        props.message.image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MessageAccessories, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MessageImage, {
                                onClick: ()=>viewMedia(props.message.image, "image"),
                                src: props.message.image
                            })
                        }),
                        props.message.video && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MessageAccessories, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MessageVideo, {
                                onClick: ()=>viewMedia(props.message.video, "video"),
                                src: props.message.video,
                                autoPlay: true,
                                loop: true,
                                preload: "auto"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
const Container = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().li)`
  flex w-full select-text
`;
const MessageContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex w-full mt-3 py-0.5 pr-12 pl-4
  hover:bg-gray-50
  dark:hover:bg-dark-150
`;
const ProfilePictureContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex-none mt-0.5 cursor-pointer select-none
`;
const ContentContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex flex-col pl-4
`;
const MessageContent = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex flex-col
`;
const ProfilePicture = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default()((next_image__WEBPACK_IMPORTED_MODULE_3___default()))`
  object-cover rounded-full
`;
const MessageInfo = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex flex-wrap
  dark:text-text-quaternary
`;
const Username = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().h2)`
  mr-1 text-gray-900 font-semibold cursor-pointer break-all
  hover:underline hover:decoration-gray-900
  dark:text-white
`;
const MessageDate = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().span)`
  flex items-center ml-1 text-xs font-medium font-gray-500
`;
const Content = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  font-medium text-gray-800
  dark:text-text-tertiary
`;
const MessageAccessories = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex w-full h-full max-w-[400px] max-h-[300px] py-0.5
`;
const MessageImage = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`
  object-contain rounded-middle cursor-pointer
`;
const MessageVideo = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_2___default().video)`
  object-contain rounded-middle cursor-pointer
`;


/***/ }),

/***/ 5774:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Messages)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _features_userSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6627);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4191);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(118);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1492);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(192);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_7__, _firebase__WEBPACK_IMPORTED_MODULE_8__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_7__, _firebase__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function Messages() {
    const { server , channel , messages  } = (0,_features_servers__WEBPACK_IMPORTED_MODULE_3__/* .useServersState */ .EG)();
    const { theme  } = (0,_features_userSettings__WEBPACK_IMPORTED_MODULE_4__/* .useUserSettingsState */ .kq)();
    const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .T)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        if (!scrollRef.current) return;
        scrollRef.current.scrollIntoView();
    }, [
        messages
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!server.serverID || !channel.channelID) return;
        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_8__.db, "servers", server.serverID, "channels", channel.channelID, "messages"));
        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_7__.onSnapshot)(q, (querySnapshot)=>{
            const messageList = [];
            querySnapshot.forEach((doc)=>{
                const docData = doc.data();
                const message = {
                    content: docData.content,
                    userID: docData.userID,
                    date: docData.date,
                    timestamp: docData.timestamp,
                    reactions: docData.reactions,
                    edited: docData.edited,
                    image: docData.image,
                    video: docData.video
                };
                messageList.push(message);
            });
            messageList.sort((a, b)=>{
                return a.timestamp - b.timestamp;
            });
            dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_3__/* .setMessages */ .Z)(messageList));
        });
        return ()=>{
            unsubscribe();
        };
    }, [
        channel.channelID
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
        style: {
            scrollbarColor: theme === "dark" ? "#202225 #2F3136" : "#E3E5E8 #F2F3F5"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(List, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(WelcomeMessage, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Heading, {
                            children: [
                                "Welcome to #",
                                channel.name,
                                "!"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Subtext, {
                            children: [
                                "This is the start of the #",
                                channel.name,
                                " channel."
                            ]
                        })
                    ]
                }),
                messages.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Separator, {}),
                messages.map((message, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Message__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        message: message
                    }, index);
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Scroll, {
                    ref: scrollRef
                })
            ]
        })
    });
};
const Container = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_5___default().div)`
  absolute flex w-full h-full overflow-x-clip overflow-y-scroll break-words whitespace-pre-wrap
`;
const List = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_5___default().ol)`
  flex flex-col flex-1 mt-auto pr-1
`;
const WelcomeMessage = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_5___default().div)`
  m-4 select-none
`;
const Heading = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_5___default().h1)`
  my-2 font-bold text-double text-ellipsis
  dark:text-white
`;
const Subtext = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_5___default().span)`
  text-gray-500
  dark:text-text-primary
`;
const Separator = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_5___default().div)`
  flex h-0 mr-3.5 mt-2 mb-2 ml-4 border-t border-gray-300
  dark:border-dark-50/[.48]
`;
const Scroll = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_5___default().span)`
  w-px h-3
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5074:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SendGif)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(192);
/* harmony import */ var _features_sendGif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3619);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);
/* harmony import */ var _features_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(786);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_3__]);
_firebase__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function SendGif() {
    const { 0: searchInput , 1: setSearchInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: searchResults , 1: setSearchResults  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: categories , 1: setCategories  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { server , channel  } = (0,_features_servers__WEBPACK_IMPORTED_MODULE_5__/* .useServersState */ .EG)();
    const { user  } = (0,_features_user__WEBPACK_IMPORTED_MODULE_6__/* .useUserState */ .ec)();
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useAppDispatch */ .T)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!searchInput) return setSearchResults(null);
        const url = `https://g.tenor.com/v1/search?q=${searchInput}&key=${process.env.NEXT_PUBLIC_TENOR_API_KEY}&limit=8&contentfilter=${server.contentFilter}`;
        fetchGifs(url);
    }, [
        searchInput
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (searchResults) return;
        fetchCategories();
    }, [
        searchResults
    ]);
    async function fetchGifs(url) {
        const fetchedGifs = await fetch(url);
        const gifsData = await fetchedGifs.json();
        setSearchResults(gifsData.results);
    }
    async function fetchCategories() {
        const baseURL = `https://g.tenor.com/v1/categories?&key=${process.env.NEXT_PUBLIC_TENOR_API_KEY}&limit=8&contentfilter=${server.contentFilter}`;
        const fetchedGifs = await fetch(baseURL);
        const gifsData = await fetchedGifs.json();
        setCategories(gifsData.tags);
    }
    function closeWindow() {
        dispatch((0,_features_sendGif__WEBPACK_IMPORTED_MODULE_4__/* .setSendGifOpen */ .vB)(false));
    }
    function stopPropagation(e) {
        e.stopPropagation();
    }
    function sendGif(url) {
        (0,_firebase__WEBPACK_IMPORTED_MODULE_3__/* .createGifMessage */ .Os)(server.serverID, channel.channelID, user.userID, url);
        closeWindow();
    }
    async function openCategory(category) {
        const url = `https://g.tenor.com/v1/search?q=${category}&key=${process.env.NEXT_PUBLIC_TENOR_API_KEY}&limit=8&contentfilter=${server.contentFilter}`;
        await fetchGifs(url);
        if (!inputRef.current) return;
        setSearchInput(category);
        inputRef.current.value = category;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Backdrop, {
        onClick: closeWindow,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
            onClick: stopPropagation,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(GifPicker, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GifSearchContainer, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GifSearch, {
                                onChange: (e)=>setSearchInput(e.target.value),
                                ref: inputRef,
                                type: "text",
                                placeholder: "Search Tenor"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContentContainer, {
                        style: {
                            scrollbarWidth: "thin"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GifContainer, {
                            children: !searchResults ? categories && categories.map((result, index)=>{
                                const url = result.image;
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CategoryContainer, {
                                    onClick: ()=>openCategory(result.searchterm),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CategoryBackdrop, {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CategoryText, {
                                            children: result.searchterm
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GifCategory, {
                                            loader: ()=>url,
                                            src: url,
                                            width: 231,
                                            height: 110,
                                            unoptimized: true
                                        })
                                    ]
                                }, index);
                            }) : searchResults.map((result)=>{
                                const url = result.media[0].loopedmp4.url;
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Gif, {
                                    onClick: ()=>sendGif(url),
                                    src: url,
                                    autoPlay: true,
                                    loop: true,
                                    preload: "auto"
                                }, result.id);
                            })
                        })
                    })
                ]
            })
        })
    });
};
const Backdrop = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  absolute w-full h-full z-50
`;
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().section)`
  absolute right-4 bottom-0 w-[498px] h-[498px] bg-gray-100 rounded-lg drop-shadow-lg
  dark:bg-dark-200
`;
const GifPicker = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex flex-col pt-4 w-full h-full
`;
const Header = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().header)`
  px-4 pb-3 h-[46px] shadow-[0_1px_0_0_rgba(185,187,190,0.3)]
  dark:shadow-[0_1px_0_0_rgba(24,25,28,0.3),0_1px_2px_0_rgba(24,25,28,0.3)]
`;
const GifSearchContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex w-full h-[34px] bg-gray-200 rounded-middle
  dark:bg-dark-400 dark:text-text-tertiary
`;
const GifSearch = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().input)`
  w-full h-[30px] m-px px-2 bg-transparent placeholder-gray-500 outline-none
`;
const ContentContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  relative w-full h-full p-[11px] overflow-hidden
  hover:overflow-y-scroll
`;
const GifContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  absolute flex flex-wrap gap-3
`;
const CategoryContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  relative w-[231px] h-[110px] rounded-[5px] cursor-pointer
  hover:outline hover:outline-2 hover:outline-primary hover:drop-shadow-md
`;
const CategoryBackdrop = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()(Backdrop)`
  absolute bg-black/[0.4] rounded-[5px]
`;
const CategoryText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().span)`
  absolute w-max top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semibold z-50
`;
const GifCategory = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()((next_image__WEBPACK_IMPORTED_MODULE_8___default()))`
  object-cover rounded-[5px]
`;
const Gif = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().video)`
  w-[231px] h-fit rounded-[5px] object-cover cursor-pointer
  hover:outline hover:outline-2 hover:outline-primary hover:drop-shadow-md
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GifIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function GifIcon() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
        className: " fill-text-quinary dark:fill-text-primary",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM9.76445 11.448V15.48C8.90045 16.044 7.88045 16.356 6.74045 16.356C4.11245 16.356 2.66045 14.628 2.66045 12.072C2.66045 9.504 4.23245 7.764 6.78845 7.764C7.80845 7.764 8.66045 8.004 9.32045 8.376L9.04445 10.164C8.42045 9.768 7.68845 9.456 6.83645 9.456C5.40845 9.456 4.71245 10.512 4.71245 12.06C4.71245 13.62 5.43245 14.712 6.86045 14.712C7.31645 14.712 7.64045 14.616 7.97645 14.448V12.972H6.42845V11.448H9.76445ZM11.5481 7.92H13.6001V16.2H11.5481V7.92ZM20.4724 7.92V9.636H17.5564V11.328H19.8604V13.044H17.5564V16.2H15.5164V7.92H20.4724Z"
        })
    });
};


/***/ }),

/***/ 2364:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TextArea)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(192);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4191);
/* harmony import */ var tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37);
/* harmony import */ var _features_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(786);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _UploadImageIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4867);
/* harmony import */ var _GifIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2563);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83);
/* harmony import */ var _features_sendGif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3619);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var emoji_picker_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1243);
/* harmony import */ var emoji_picker_react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(emoji_picker_react__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_2__]);
_firebase__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













function TextArea() {
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { server , channel  } = (0,_features_servers__WEBPACK_IMPORTED_MODULE_4__/* .useServersState */ .EG)();
    const { user  } = (0,_features_user__WEBPACK_IMPORTED_MODULE_5__/* .useUserState */ .ec)();
    const { sendGifOpen  } = (0,_features_sendGif__WEBPACK_IMPORTED_MODULE_10__/* .useSendGifState */ .rk)();
    const { 0: messageImageURL , 1: setMessageImageURL  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: messageImage , 1: setMessageImage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useAppDispatch */ .T)();
    const { 0: showEmoji , 1: setShowEmoji  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    function handleKeyDown(e) {
        if (e.key === "Enter" && e.shiftKey === false) {
            e.preventDefault();
            sendMessage();
            return;
        }
    }
    function handlePaste(e) {
        e.preventDefault();
        if (!e.clipboardData) return;
        const target = e.target;
        target.textContent = e.clipboardData.getData("text/plain");
    }
    function getText() {
        if (!inputRef.current?.textContent || inputRef.current.textContent.trim() === "") return "";
        const messageContent = inputRef.current.textContent.trim();
        inputRef.current.textContent = "";
        return messageContent;
    }
    async function sendMessage() {
        const content = getText();
        if (!content && !messageImageURL) return;
        (0,_firebase__WEBPACK_IMPORTED_MODULE_2__/* .createMessage */ .tn)(server.serverID, channel.channelID, user.userID, content, messageImage);
        setMessageImageURL("");
    }
    async function uploadImage(e) {
        if (!e.target.files) return;
        const messageImage = e.target.files[0];
        const messageImageURL = await (0,_firebase__WEBPACK_IMPORTED_MODULE_2__/* .uploadMessageImagePreview */ .BX)(messageImage, user.userID);
        setMessageImageURL(messageImageURL);
        setMessageImage(messageImage);
    }
    function openGif() {
        dispatch((0,_features_sendGif__WEBPACK_IMPORTED_MODULE_10__/* .setSendGifOpen */ .vB)(!sendGifOpen));
    }
    const handleShowEmojiBox = ()=>{
        setShowEmoji(!showEmoji);
    };
    const handleEmojiClick = (emoji)=>{
        if (inputRef.current) {
            const message = inputRef.current.innerText;
            inputRef.current.innerText = message + emoji.emoji;
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MessageContainer, {
            children: [
                messageImageURL && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MessageImagePreviewContainer, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MessageImagePreviewList, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MessageImagePreview, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UploadedImageContainer, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UploadedImage, {
                                            loader: ()=>messageImageURL,
                                            src: messageImageURL,
                                            layout: "fill",
                                            unoptimized: true
                                        })
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Divider, {})
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FormContainer, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AttachButtonContainer, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AttachButton, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FileInput, {
                                    type: "file",
                                    onChange: uploadImage
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextInput, {
                            onClick: ()=>setShowEmoji(false),
                            ref: inputRef,
                            contentEditable: true,
                            onKeyDown: handleKeyDown,
                            placeholder: `Message #${channel.name}`,
                            onPaste: handlePaste
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GifButtonContainer, {
                            onClick: openGif,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GifButton, {})
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_11__.BsEmojiSmileFill, {
                                    className: "text-gray-400 hover:text-white ml-4",
                                    onClick: handleShowEmojiBox
                                }),
                                showEmoji && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute bottom-20 right-5",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((emoji_picker_react__WEBPACK_IMPORTED_MODULE_12___default()), {
                                        onEmojiClick: handleEmojiClick
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
const Container = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  flex-none w-full mt-2 mb-6 px-4 z-10
`;
const MessageContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  flex flex-col w-full bg-gray-200/50 rounded-lg
  dark:bg-dark-50/40
`;
const MessageImagePreviewContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  flex-1
`;
const MessageImagePreviewList = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().ul)`
  ml-1.5 pt-5 pr-7.5 pb-2.5 pl-2.5
`;
const MessageImagePreview = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().li)`
  w-[216px] h-[216px] p-2 bg-gray-50
`;
const UploadedImageContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
 relative w-[200px] h-[200px] object-contain
`;
const UploadedImage = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default()((next_image__WEBPACK_IMPORTED_MODULE_6___default()))`
  mt-auto object-contain
`;
const Divider = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  w-full h-px border-t border-gray-300
`;
const FormContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().form)`
  flex items-center px-4
`;
const AttachButtonContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  relative flex items-center w-12
`;
const AttachButton = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_UploadImageIcon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)`
`;
const FileInput = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().input)`
  absolute top-0 left-0 w-full h-full text-[0px] invisible
  file:w-full file:h-full file:bg-transparent file:border-0
`;
const TextInput = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  py-2.5 w-full h-full bg-transparent font-medium text-gray-800 outline-none break-all whitespace-pre-wrap
  empty:before:content-[attr(placeholder)] empty:before:text-text-muted
  dark:text-text-tertiary
`;
const GifButtonContainer = (tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
  flex flex-none items-center w-max h-max cursor-pointer
`;
const GifButton = tailwind_styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_GifIcon__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)`
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GifIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function GifIcon() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
        className: " fill-text-quinary dark:fill-text-primary",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
        })
    });
};


/***/ }),

/***/ 9386:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CreateChannel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);
/* harmony import */ var _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5179);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(192);
/* harmony import */ var _features_serverSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(503);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_6__]);
_firebase__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function CreateChannel() {
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);
    const { 0: isInputEmpty , 1: setIsInputEmpty  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);
    const { server  } = (0,_features_servers__WEBPACK_IMPORTED_MODULE_8__/* .useServersState */ .EG)();
    const { 0: channelType , 1: setChannelType  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("text");
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .T)();
    function closeWindow() {
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_7__/* .setCreateChannelOpen */ .UC)(false));
    }
    function stopPropagation(e) {
        e.stopPropagation();
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!inputRef.current || isInputEmpty) return;
        let channelName = inputRef.current.value;
        if (channelName[channelName.length - 1] === "-") channelName = channelName.slice(0, -1);
        (0,_firebase__WEBPACK_IMPORTED_MODULE_6__/* .createChannel */ .mi)(server.serverID, channelName, channelType);
        closeWindow();
    }
    function handleChange() {
        if (!inputRef.current) return;
        switch(inputRef.current.value){
            case " ":
            case "-":
                return inputRef.current.value = "";
        }
        if (!inputRef.current.value) {
            setIsInputEmpty(true);
        } else {
            setIsInputEmpty(false);
            const newValue = correctInput(inputRef.current.value);
            inputRef.current.value = newValue;
        }
    }
    function correctInput(input) {
        switch(input.slice(-2)){
            case "--":
            case "- ":
            case " ":
            case "-":
                return input.slice(0, -1);
        }
        return input.replace(/\s+/g, "-").toLowerCase();
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Backdrop, {
        onClick: closeWindow,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
            onClick: stopPropagation,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeadingContainer, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Heading, {
                            children: "Create Channel"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Body, {
                            children: "Send messages, images, GIFs, opinions, and puns"
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
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FormContainer, {
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContentLabel, {
                                htmlFor: "createChannelInput",
                                children: "CHANNEL NAME"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContentInput, {
                                type: "text",
                                placeholder: "new-channel",
                                ref: inputRef,
                                onChange: handleChange,
                                minLength: 2,
                                maxLength: 100,
                                required: true,
                                id: "createChannelInput"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FooterContainer, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CancelButton, {
                            onClick: closeWindow,
                            children: "Cancel"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CreateButton, {
                            isInputEmpty: isInputEmpty,
                            onClick: handleSubmit,
                            type: "submit",
                            children: "Create Channel"
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
  fixed flex flex-col top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-115 bg-white rounded-xl
  dark:bg-dark-100
`;
const HeadingContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  p-4
`;
const Heading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().h2)`
  w-full my-1 text-xl font-medium leading-6
  dark:text-white
`;
const Body = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().p)`
  w-full text-gray-500
  dark:text-text-primary
`;
const CloseIcon = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  absolute top-4 right-4 p-1
`;
const StyledImage = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default()))`
`;
const ContentContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  mb-4 px-4
`;
const FormContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().form)`
`;
const ContentLabel = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().label)`
  text-xs text-gray-800 font-semibold
  dark:text-text-tertiary
`;
const ContentInput = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().input)`
  w-full h-10 p-2.5 mt-1 rounded-middle text-gray-800 font-medium outline-none
  dark:bg-dark-400 dark:text-white
  dark:placeholder:text-text-secondary
`;
const FooterContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex justify-end items-center p-4 bg-gray-50 text-sm font-medium rounded-b-xl
  dark:bg-dark-200
`;
const CancelButton = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  w-24 h-9.5 px-1 py-0.5 text-sm font-medium text-gray-500
  hover:underline
  dark:text-white
`;
const CreateButton = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  w-fit h-9.5 px-4 py-0.5 bg-indigo-500 text-white rounded-middle
  ${(props)=>props.isInputEmpty && "opacity-50 cursor-not-allowed"}
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InviteFriends)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);
/* harmony import */ var _assets_closeIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5179);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37);
/* harmony import */ var _features_serverSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(503);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);








function InviteFriends() {
    const { server  } = (0,_features_servers__WEBPACK_IMPORTED_MODULE_5__/* .useServersState */ .EG)();
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(null);
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .T)();
    const { 0: copySuccess , 1: setCopySuccess  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    function closeWindow() {
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_6__/* .setInviteFriendsOpen */ .Yk)(false));
    }
    function stopPropagation(e) {
        e.stopPropagation();
    }
    function copyInput() {
        if (!inputRef.current) return;
        navigator.clipboard.writeText(inputRef.current.value);
        setCopySuccess(true);
        setTimeout(()=>{
            setCopySuccess(false);
        }, 1500);
    }
    function highlightInput() {
        if (!inputRef.current) return;
        inputRef.current.select();
        inputRef.current.setSelectionRange(0, 100); // For mobile devices
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Backdrop, {
        onClick: closeWindow,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
            onClick: stopPropagation,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeadingContainer, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Heading, {
                            children: [
                                "INVITE FRIENDS TO ",
                                server.name.toUpperCase()
                            ]
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
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ContentContainer, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InviteCodeLabel, {
                            children: "Share this link with others to grant access to your server!"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InviteCodeContainer, {
                            copySuccess: copySuccess,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InviteCodeInput, {
                                    type: "text",
                                    value: server.serverID,
                                    maxLength: 999,
                                    ref: inputRef,
                                    onClick: highlightInput,
                                    id: "inviteCode"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CopyButton, {
                                    onClick: copyInput,
                                    copySuccess: copySuccess,
                                    children: copySuccess ? "Copied" : "Copy"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubText, {
                            children: "Your invite link will never expire."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FooterContainer, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkExpiryInput, {
                            type: "checkbox",
                            defaultChecked: true,
                            disabled: true,
                            id: "linkExpiry"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LinkExpiryLabel, {
                            htmlFor: "linkExpiry",
                            children: "Set this link to never expire"
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
  fixed flex flex-col top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-110 bg-white rounded-md select-none
`;
const HeadingContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  p-4
`;
const Heading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().h2)`
  w-full font-semibold
`;
const CloseIcon = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  absolute top-4 right-4 p-1
`;
const StyledImage = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default()))`
`;
const ContentContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex flex-col mb-5 pr-2 pl-4
`;
const InviteCodeContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex justify-between items-center bg-gray-100 border rounded-middle
  ${(props)=>props.copySuccess ? "border-green-600" : "border-gray-400"}
`;
const InviteCodeInput = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().input)`
  w-full p-2.5 bg-gray-100 font-medium outline-none leading-[.5rem]
`;
const InviteCodeLabel = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().h5)`
  mb-4 text-sm text-gray-600 font-semibold
`;
const CopyButton = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  flex-none w-[75px] h-8 mr-1 px-4 py-0.5  text-white font-medium rounded-middle
  ${(props)=>props.copySuccess ? "bg-green-600 hover:bg-green-700" : "bg-indigo-500 hover:bg-indigo-600"}
`;
const LinkExpiryInput = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().input)`
  cursor-not-allowed
`;
const LinkExpiryLabel = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().label)`
  ml-2 cursor-not-allowed text-gray-600 text-sm
`;
const SubText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().span)`
  mt-2 text-xs text-gray-800
`;
const FooterContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  items-center p-4 bg-gray-50
`;


/***/ }),

/***/ 544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ServerDropdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _features_serverSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(503);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);
/* harmony import */ var _features_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(786);





function ServerDropdown() {
    const { user  } = (0,_features_user__WEBPACK_IMPORTED_MODULE_4__/* .useUserState */ .ec)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .T)();
    function closeWindow(e) {
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_2__/* .setServerDropdownOpen */ .Z8)(false));
    }
    function stopPropagation(e) {
        e.stopPropagation();
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Backdrop, {
        onClick: closeWindow,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
            onClick: stopPropagation,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ListContainer, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItemInvite, {
                        onClick: ()=>dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_2__/* .setInviteFriendsOpen */ .Yk)(true)),
                        children: "Invite People"
                    }),
                    user.roles.serverOwner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                        onClick: ()=>dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_2__/* .setServerSettingsOpen */ .fd)(true)),
                        children: "Server Settings"
                    }),
                    user.roles.serverOwner && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                        onClick: ()=>dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_2__/* .setCreateChannelOpen */ .UC)(true)),
                        children: "Create Channel"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Separator, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItemLeave, {
                        children: "Leave Server"
                    })
                ]
            })
        })
    });
};
const Backdrop = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  fixed w-full h-full z-50
`;
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  absolute flex flex-col w-[220px] top-[50px] left-20.5 px-2 py-1.5 bg-white rounded-middle drop-shadow-xl
  dark:bg-dark-600
`;
const ListContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().ol)`
`;
const ListItem = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().li)`
  flex items-center my-0.5 py-1.5 pl-2 h-8 text-sm font-medium rounded-middle cursor-pointer
  hover:bg-indigo-800 hover:text-white
  dark:text-text-primary dark:hover:bg-dark-secondary dark:hover:text-white
`;
const ListItemInvite = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default()(ListItem)`
  text-indigo-500
  dark:text-dark-primary
`;
const ListItemLeave = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default()(ListItem)`
  text-danger-100
  hover:bg-danger-100
  dark:text-danger-200 dark:hover:bg-danger-100
`;
const Separator = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  w-[196px] h-px m-1 border-b border-gray-300
  dark:border-dark-50/[.48]
`;


/***/ }),

/***/ 5448:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ServerSettings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ServerSettingsSidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7385);
/* harmony import */ var _serverSettingsView_ServerSettingsView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8042);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_closeButton_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2083);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _features_serverSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(503);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37);
/* harmony import */ var _features_userSettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6627);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_serverSettingsView_ServerSettingsView__WEBPACK_IMPORTED_MODULE_3__]);
_serverSettingsView_ServerSettingsView__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function ServerSettings() {
    const { server  } = (0,_features_servers__WEBPACK_IMPORTED_MODULE_9__/* .useServersState */ .EG)();
    const { serverCopy  } = (0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_8__/* .useServerSettingsState */ .g$)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .T)();
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_8__/* .setServerCopy */ .z4)(server));
    }, []);
    function unsavedChanges() {
        if (!serverCopy) return false;
        if (serverCopy !== server) {
            dispatch((0,_features_userSettings__WEBPACK_IMPORTED_MODULE_10__/* .setUnsavedChangesError */ .wg)(true));
            setTimeout(()=>{
                dispatch((0,_features_userSettings__WEBPACK_IMPORTED_MODULE_10__/* .setUnsavedChangesError */ .wg)(false));
            }, 1500);
            return true;
        }
    }
    function closeWindow() {
        if (unsavedChanges()) return;
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_8__/* .setServerSettingsOpen */ .fd)(false));
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_8__/* .setServerSettingsScreen */ .l$)("Overview"));
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ServerSettingsSidebar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SettingsContainer, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_serverSettingsView_ServerSettingsView__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CloseButton, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledImage, {
                                onClick: closeWindow,
                                src: _assets_closeButton_svg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
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
const StyledImage = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default()((next_image__WEBPACK_IMPORTED_MODULE_4___default()))`
  cursor-pointer
`;
const Caption = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().figcaption)`
  text-[13px] text-gray-300 font-semibold
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ServerSettingsSidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _features_serverSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(503);
/* harmony import */ var _features_userSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6627);






function ServerSettingsSidebar() {
    const { serverSettingsScreen , serverCopy  } = (0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_4__/* .useServerSettingsState */ .g$)();
    const { server  } = (0,_features_servers__WEBPACK_IMPORTED_MODULE_3__/* .useServersState */ .EG)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .T)();
    function unsavedChanges() {
        if (!serverCopy) return false;
        if (serverCopy !== server) {
            dispatch((0,_features_userSettings__WEBPACK_IMPORTED_MODULE_5__/* .setUnsavedChangesError */ .wg)(true));
            setTimeout(()=>{
                dispatch((0,_features_userSettings__WEBPACK_IMPORTED_MODULE_5__/* .setUnsavedChangesError */ .wg)(false));
            }, 1500);
            return true;
        }
    }
    function changeServerSettings(screen) {
        if (unsavedChanges()) return;
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_4__/* .setServerSettingsScreen */ .l$)(screen));
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_4__/* .setEditRoleOpen */ .Dt)(false));
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Container, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(NavContainer, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListHeading, {
                    children: server.name.toUpperCase() || "SERVER SETTINGS"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SettingsList, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                            className: `${serverSettingsScreen === "Overview" && "bg-gray-300 dark:bg-dark-50/60 dark:text-white dark:hover:text-white"}`,
                            onClick: ()=>changeServerSettings("Overview"),
                            children: "Overview"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                            className: `${serverSettingsScreen === "Roles" && "bg-gray-300 dark:bg-dark-50/60 dark:text-white dark:hover:text-white"}`,
                            onClick: ()=>changeServerSettings("Roles"),
                            children: "Roles"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ListItem, {
                            className: `${serverSettingsScreen === "Moderation" && "bg-gray-300 dark:bg-dark-50/60 dark:text-white dark:hover:text-white"}`,
                            onClick: ()=>changeServerSettings("Moderation"),
                            children: "Moderation"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Divider, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingsList, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DeleteServer, {
                        onClick: ()=>dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_4__/* .setDeleteServerConfirmOpen */ .yH)(true)),
                        children: "Delete Server"
                    })
                })
            ]
        })
    });
};
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  flex flex-col items-end w-1/2 bg-gray-100
  dark:bg-dark-200
`;
const NavContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().nav)`
  w-[218px] py-15 pr-1.5 pl-5
`;
const SettingsList = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().ol)`
`;
const ListHeading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().h3)`
  px-2.5 pb-1.5 text-xs font-bold
  dark:text-text-secondary
`;
const ListItem = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().li)`
  px-2.5 py-1.5 mb-0.5 font-medium rounded-md cursor-pointer
  hover:bg-gray-200
  dark:text-text-primary dark:hover:bg-dark-50/40 dark:hover:text-tertiary
`;
const Divider = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  h-px mx-2.5 my-2 bg-gray-200
  dark:bg-dark-50/[.48]
`;
const DeleteServer = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default()(ListItem)`
  text-red-500
`;


/***/ }),

/***/ 6374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ServerModeration)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _features_serverSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(503);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83);






function ServerModeration() {
    const offInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const lowInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const mediumInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const highInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { server  } = (0,_features_servers__WEBPACK_IMPORTED_MODULE_3__/* .useServersState */ .EG)();
    const { serverCopy  } = (0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_4__/* .useServerSettingsState */ .g$)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useAppDispatch */ .T)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!offInputRef.current || !lowInputRef.current || !mediumInputRef.current || !highInputRef.current) return;
        switch(server.contentFilter){
            case "off":
                offInputRef.current.checked = true;
                break;
            case "low":
                lowInputRef.current.checked = true;
                break;
            case "medium":
                mediumInputRef.current.checked = true;
                break;
            case "high":
                highInputRef.current.checked = true;
                break;
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!serverCopy) return;
        if (server !== serverCopy) {
            dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_4__/* .setServerChangesMade */ .pN)(true));
        } else {
            dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_4__/* .setServerChangesMade */ .pN)(false));
        }
    }, [
        server,
        serverCopy
    ]);
    function handleChange(e) {
        const newContentFilter = e.target.value;
        dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_3__/* .setServerContentFilter */ .KO)(newContentFilter));
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Heading, {
                children: "Moderation"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ServerSettings, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubHeading, {
                        children: "EXPLICIT MEDIA CONTENT FILTER"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubTextContainer, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SubText, {
                            children: [
                                "Automatically prevent sharing gifs sent in this server that contains explicit content. Please choose how broadly the filter will apply to members in your server.",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Bold, {
                                    children: "We recommend setting a filter for a public Banter."
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SettingsContainer, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SettingContainer, {
                                className: server.contentFilter === "off" ? "bg-gray-200" : "bg-gray-100 hover:bg-gray-100/75",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingInput, {
                                        onChange: (e)=>handleChange(e),
                                        name: "contentFilter",
                                        value: "off",
                                        ref: offInputRef,
                                        id: "off",
                                        type: "radio"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SettingInputLabel, {
                                        htmlFor: "off",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingLabelText, {
                                                children: "Don't scan any media content."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingLabelSubText, {
                                                children: "My friends are nice most of the time."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SettingContainer, {
                                className: server.contentFilter === "low" ? "bg-gray-200" : "bg-gray-100 hover:bg-gray-100/75",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingInput, {
                                        onChange: (e)=>handleChange(e),
                                        name: "contentFilter",
                                        value: "low",
                                        ref: lowInputRef,
                                        id: "low",
                                        type: "radio"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SettingInputLabel, {
                                        htmlFor: "low",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingLabelText, {
                                                children: "Keep a low filter."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingLabelSubText, {
                                                children: "Gets rid of the harder stuff."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SettingContainer, {
                                className: server.contentFilter === "medium" ? "bg-gray-200" : "bg-gray-100 hover:bg-gray-100/75",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingInput, {
                                        onChange: (e)=>handleChange(e),
                                        name: "contentFilter",
                                        value: "medium",
                                        ref: mediumInputRef,
                                        id: "medium",
                                        type: "radio"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SettingInputLabel, {
                                        htmlFor: "medium",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingLabelText, {
                                                children: "Filter out some media content."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingLabelSubText, {
                                                children: "Helps keep everything PG-rated."
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SettingContainer, {
                                className: server.contentFilter === "high" ? "bg-gray-200" : "bg-gray-100 hover:bg-gray-100/75",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingInput, {
                                        onChange: (e)=>handleChange(e),
                                        name: "contentFilter",
                                        value: "high",
                                        ref: highInputRef,
                                        id: "high",
                                        type: "radio"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SettingInputLabel, {
                                        htmlFor: "high",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingLabelText, {
                                                children: "Safe space."
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingLabelSubText, {
                                                children: "Recommended option for when you want that squeaky clean shine."
                                            })
                                        ]
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
const ServerSettings = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().section)`
  flex flex-col
`;
const SubHeading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().h5)`
  mb-2 text-xs text-gray-800 font-semibold
  dark:text-white
`;
const SubTextContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  mb-4
`;
const SubText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().span)`
  text-sm text-gray-600 font-medium
  dark:text-text-primary
`;
const Divider = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  max-w-165 h-px border-t mt-10 border-gray-900/[0.08]
`;
const Bold = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()(SubText)`
  font-[600]
`;
const SettingsContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex flex-col max-w-[660px]
`;
const SettingContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex items-center mb-2 p-2.5 rounded-middle cursor-pointer
  dark:bg-dark-50/40 dark:text-white
`;
const SettingInput = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().input)`
  w-5 h-5 cursor-pointer accent-black
  dark:accent-white
`;
const SettingInputLabel = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().label)`
  flex flex-col w-full mr-2 ml-4 cursor-pointer
`;
const SettingLabelText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().span)`
`;
const SettingLabelSubText = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()(SettingLabelText)`
  dark:text-text-primary
`;


/***/ }),

/***/ 7559:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ServerOverview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(192);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37);
/* harmony import */ var _features_serverSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(503);
/* harmony import */ var _features_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(786);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83);
/* harmony import */ var _servers_DefaultServerIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7345);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_5__]);
_firebase__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











function ServerOverview() {
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const fileRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const { user  } = (0,_features_user__WEBPACK_IMPORTED_MODULE_8__/* .useUserState */ .ec)();
    const { server  } = (0,_features_servers__WEBPACK_IMPORTED_MODULE_6__/* .useServersState */ .EG)();
    const { serverCopy  } = (0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_7__/* .useServerSettingsState */ .g$)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useAppDispatch */ .T)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!serverCopy) return;
        if (server !== serverCopy) {
            dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_7__/* .setServerChangesMade */ .pN)(true));
        } else {
            dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_7__/* .setServerChangesMade */ .pN)(false));
        }
    }, [
        server,
        serverCopy
    ]);
    function handleChange() {
        if (!inputRef.current) return;
        dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_6__/* .setServerName */ .$f)(inputRef.current.value));
    }
    function handleClick() {
        if (!fileRef.current) return;
        fileRef.current.click();
    }
    async function changeIcon(e) {
        if (!e.target.files) return;
        const iconImage = e.target.files[0];
        const iconURL = await (0,_firebase__WEBPACK_IMPORTED_MODULE_5__/* .uploadServerImagePreview */ .KE)(iconImage, user.userID);
        dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_6__/* .setServerImage */ .uc)(iconURL));
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_7__/* .setServerIconPreview */ .YS)(iconImage));
    }
    function removeIcon() {
        dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_6__/* .setServerImage */ .uc)(""));
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_7__/* .setServerIconPreview */ .YS)(null));
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Heading, {
                children: "Server Overview"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ServerSettings, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(UploadIconContainer, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ServerIconDisplay, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ServerIconContainer, {
                                        onClick: handleClick,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HoverTextBackdrop, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HoverText, {
                                                        children: "CHANGE"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HoverText, {
                                                        children: "ICON"
                                                    })
                                                ]
                                            }),
                                            server.img ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledImage, {
                                                loader: ()=>server.img,
                                                src: server.img,
                                                width: 100,
                                                height: 100,
                                                unoptimized: true
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ServerIcon, {
                                                server: server,
                                                width: 100,
                                                height: 100,
                                                path: router.asPath
                                            })
                                        ]
                                    }),
                                    server.img ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubText, {
                                        onClick: removeIcon,
                                        children: "Remove"
                                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SmallText, {
                                        children: [
                                            "Minimum Size: ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Bold, {
                                                children: "128x128"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(UploadImageContainer, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UploadImageText, {
                                        children: "We recommend an image of at least 512x512 for the server."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(UploadImageButton, {
                                        children: [
                                            "Upload Image",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FileInput, {
                                                onChange: changeIcon,
                                                type: "file",
                                                accept: ".svg, .png, .jpg, .jpeg",
                                                ref: fileRef
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ServerNameInputContainer, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ServerNameInputLabel, {
                                children: "SERVER NAME"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ServerNameInput, {
                                type: "text",
                                value: server.name,
                                onChange: handleChange,
                                ref: inputRef
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Divider, {})
        ]
    });
};
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().main)`
  min-w-[542px] max-w-[740px] pt-15 px-10 pb-20
`;
const Heading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().h2)`
  mb-5 text-xl font-semibold
  dark:text-white
`;
const ServerSettings = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().section)`
  flex
`;
const UploadIconContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().div)`
  flex mr-2.5
`;
const SubText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().a)`
  mt-2.5 text-sm text-gray-600 font-semibold leading-[14px] cursor-pointer
  dark:text-text-primary
`;
const Divider = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().div)`
  max-w-165 h-px border-t mt-10 border-gray-900/[0.08]
`;
const ServerIconDisplay = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().div)`
  flex flex-col items-center text-center mr-2.5
`;
const ServerIconContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().div)`
  relative w-[100px] h-[100px] drop-shadow-xl group cursor-pointer
`;
const HoverTextBackdrop = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().div)`
  absolute hidden w-full h-full bg-black/50 rounded-full z-10 group pointer-events-none leading-3
  group-hover:flex group-hover:flex-col group-hover:justify-center
`;
const HoverText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().span)`
  text-[10px] text-white font-bold
`;
const SmallText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().small)`
  mt-2.5 text-gray-500 text-[10px] leading-[10px]
`;
const Bold = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default()(SmallText)`
  font-bold
`;
const UploadImageContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().div)`
  flex flex-col ml-2.5 min-w-[128px] max-w-[180px]
`;
const UploadImageText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().span)`
  mb-2 text-sm text-gray-600 font-medium
  dark:text-text-primary
`;
const UploadImageButton = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().button)`
  relative mt-2 px-4 py-0.5 w-fit h-[38px] text-sm text-gray-500 border border-gray-500 rounded-[3px]
  dark:border-dark-50 dark:text-white
`;
const FileInput = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().input)`
  absolute top-0 left-0 w-full h-full text-[0] cursor-pointer
  file:border-0 file:bg-transparent
`;
const ServerIcon = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default()(_servers_DefaultServerIcon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)`
  fill-primary rounded-full text-black text-[40px] group
  group-hover:text-[0]
`;
const StyledImage = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default()((next_image__WEBPACK_IMPORTED_MODULE_1___default()))`
  rounded-full
`;
const ServerNameInputContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().div)`
  flex flex-col mb-5 ml-2.5 min-w-[206px] w-[320px] max-w-[320px]
`;
const ServerNameInputLabel = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().label)`
  mb-2 text-xs text-gray-800 font-semibold
  dark:text-text-primary
`;
const ServerNameInput = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_4___default().input)`
  w-full h-10 p-2.5 rounded-middle text-gray-800 font-medium bg-gray-50
  dark:bg-dark-400 dark:text-text-tertiary
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8042:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ServerSettingsView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_serverSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(503);
/* harmony import */ var _UnsavedChanges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7930);
/* harmony import */ var _ServerModeration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6374);
/* harmony import */ var _ServerOverview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7559);
/* harmony import */ var _serverRoles_ServerRoles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7413);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UnsavedChanges__WEBPACK_IMPORTED_MODULE_2__, _ServerOverview__WEBPACK_IMPORTED_MODULE_4__, _serverRoles_ServerRoles__WEBPACK_IMPORTED_MODULE_5__]);
([_UnsavedChanges__WEBPACK_IMPORTED_MODULE_2__, _ServerOverview__WEBPACK_IMPORTED_MODULE_4__, _serverRoles_ServerRoles__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function ServerSettingsView() {
    const { serverSettingsScreen , serverChangesMade  } = (0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_1__/* .useServerSettingsState */ .g$)();
    switch(serverSettingsScreen){
        case "Overview":
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ServerOverview__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    serverChangesMade && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UnsavedChanges__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        changes: "server"
                    })
                ]
            });
        case "Roles":
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_serverRoles_ServerRoles__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    serverChangesMade && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UnsavedChanges__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        changes: "server"
                    })
                ]
            });
        case "Moderation":
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ServerModeration__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    serverChangesMade && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UnsavedChanges__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        changes: "server"
                    })
                ]
            });
        default:
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ServerOverview__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {});
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7413:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ServerRoles)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(192);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37);
/* harmony import */ var _features_serverSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(503);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83);
/* harmony import */ var _ServerRolesSidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6295);
/* harmony import */ var _SeverEditRole__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1904);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_3__, uuid__WEBPACK_IMPORTED_MODULE_9__]);
([_firebase__WEBPACK_IMPORTED_MODULE_3__, uuid__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function ServerRoles() {
    const { server  } = (0,_features_servers__WEBPACK_IMPORTED_MODULE_4__/* .useServersState */ .EG)();
    const { serverCopy , editRoleOpen , serverChangesMade  } = (0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_5__/* .useServerSettingsState */ .g$)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .T)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_5__/* .setRolesCopy */ .jR)(server.roles));
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!serverCopy) return;
        if (server !== serverCopy) {
            dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_5__/* .setServerChangesMade */ .pN)(true));
        } else {
            dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_5__/* .setServerChangesMade */ .pN)(false));
        }
    }, [
        server,
        serverCopy
    ]);
    function createRole() {
        if (!serverCopy) return;
        const newRoleID = (0,uuid__WEBPACK_IMPORTED_MODULE_9__.v4)();
        (0,_firebase__WEBPACK_IMPORTED_MODULE_3__/* .createServerRole */ .K8)(serverCopy, newRoleID);
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_5__/* .setEditRoleOpen */ .Dt)(true));
        const newServer = {
            ...server
        };
        const serverVersion = {
            ...serverCopy
        };
        newServer.roles = server.roles ? [
            ...server.roles,
            {
                name: "new role",
                color: "#99AAB5",
                separateDisplay: false,
                sort: server.roles.length,
                permissions: {
                    manageChannels: false,
                    manageRoles: false,
                    manageServer: false
                },
                roleID: newRoleID
            }, 
        ] : [
            {
                name: "new role",
                color: "#99AAB5",
                separateDisplay: false,
                sort: 0,
                permissions: {
                    manageChannels: false,
                    manageRoles: false,
                    manageServer: false
                },
                roleID: newRoleID
            }, 
        ];
        serverVersion.roles = serverCopy.roles ? [
            ...serverCopy.roles,
            {
                name: "new role",
                color: "#99AAB5",
                separateDisplay: false,
                sort: server.roles.length,
                permissions: {
                    manageChannels: false,
                    manageRoles: false,
                    manageServer: false
                },
                roleID: newRoleID
            }, 
        ] : [
            {
                name: "new role",
                color: "#99AAB5",
                separateDisplay: false,
                sort: 0,
                permissions: {
                    manageChannels: false,
                    manageRoles: false,
                    manageServer: false
                },
                roleID: newRoleID
            }, 
        ];
        const role = newServer.roles.find((role)=>role.sort === newServer.roles.length - 1);
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_5__/* .setCurrentRole */ .me)(role));
        dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_4__/* .setServer */ .CD)(newServer));
        if (serverChangesMade) return dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_5__/* .setServerCopy */ .z4)(serverVersion));
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_5__/* .setServerCopy */ .z4)(newServer));
    }
    function editRole(sort) {
        const role = server.roles.find((role)=>role.sort === sort);
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_5__/* .setCurrentRole */ .me)(role));
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_5__/* .setEditRoleOpen */ .Dt)(true));
    }
    return editRoleOpen ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(EditContainer, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ServerRolesSidebar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SeverEditRole__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
        ]
    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Heading, {
                children: "ROLES"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ServerSettings, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubHeading, {
                        children: "Organize your members"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubTextContainer, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SubText, {
                            children: "Use roles to organize your server members and customize their permissions."
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CreateRoleButton, {
                        onClick: createRole,
                        children: "Create Role"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Divider, {}),
            server.roles && server.roles.map((role, index)=>{
                const RoleColorStyle = {
                    backgroundColor: role.color
                };
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RoleContainer, {
                    onClick: ()=>editRole(role.sort),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RoleColor, {
                            style: RoleColorStyle
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RoleName, {
                            children: role.name
                        })
                    ]
                }, index);
            })
        ]
    });
};
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().main)`
  min-w-[542px] max-w-[740px] pt-15 px-10 pb-20
`;
const EditContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().main)`
  flex min-w-[524px] max-w-[740px] pr-10
`;
const Heading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().h2)`
  mb-5 font-semibold
  dark:text-white
`;
const ServerSettings = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().section)`
  flex flex-col items-center
`;
const SubHeading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().h3)`
  mb-2 text-2xl text-gray-800 font-semibold
  dark:text-white
`;
const SubTextContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  mb-4
`;
const SubText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().span)`
  text-sm text-gray-600 font-medium
  dark:text-text-primary
`;
const CreateRoleButton = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  w-fit h-[34px] px-4 py-0.5 bg-channel-link rounded-middle text-sm text-white font-medium
`;
const Divider = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  max-w-165 h-px border-t my-8 border-gray-900/[0.08]
`;
const RoleContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex w-[700px] h-15 items-center rounded border-y border-gray-100 cursor-pointer
  hover:bg-gray-100
  dark:border-dark-50/[.48]
`;
const RoleColor = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  w-3 h-3 mr-2.5 rounded-full
`;
const RoleName = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().span)`
  dark:text-white
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ServerRolesSidebar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _features_serverSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(503);





function ServerRolesSidebar() {
    const { server  } = (0,_features_servers__WEBPACK_IMPORTED_MODULE_3__/* .useServersState */ .EG)();
    const { currentRole  } = (0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_4__/* .useServerSettingsState */ .g$)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .T)();
    function goBack() {
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_4__/* .setEditRoleOpen */ .Dt)(false));
    }
    function handleClick(roleID) {
        const role = server.roles.find((role)=>role.roleID === roleID);
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_4__/* .setCurrentRole */ .me)(role));
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TitleContainer, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BackButtonContainer, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BackButton, {
                        onClick: goBack,
                        children: "BACK"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavContainer, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingsList, {
                    children: server.roles.map((role, index)=>{
                        const RoleColorStyle = {
                            backgroundColor: role.color
                        };
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(RoleContainer, {
                            currentRole: currentRole,
                            roleID: role.roleID,
                            onClick: ()=>handleClick(role.roleID),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RoleColor, {
                                    style: RoleColorStyle
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RoleName, {
                                    children: role.name
                                })
                            ]
                        }, index);
                    })
                })
            })
        ]
    });
};
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  flex flex-col items-end w-fit border-r
  dark:border-r-dark-50/[.48]
`;
const NavContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().nav)`
  w-[232px] pr-2 pb-24 pl-10
`;
const SettingsList = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().ol)`
`;
const TitleContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  w-full
`;
const BackButtonContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  mr-2 mb-2 ml-4 pt-15 px-2 pb-4 font-semibold
`;
const BackButton = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().span)`
  text-gray-600 cursor-pointer
  hover:text-black
  dark:text-text-primary
  dark:hover:text-white
`;
const RoleContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  flex items-center w-[181px] min-h-[34px] px-2.5 py-1.5 mb-0.5 -ml-1.5 font-medium rounded-md cursor-pointer
  hover:bg-gray-100
  dark:text-white
  dark:hover:bg-dark-50/60
  ${(props)=>props.currentRole.roleID === props.roleID && "bg-gray-300 dark:bg-dark-50/60"}
`;
const RoleColor = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().div)`
  flex-none w-3 h-3 rounded-full
`;
const RoleName = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_1___default().span)`
  text-sm ml-2 truncate
`;


/***/ }),

/***/ 1904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ServerEditRole)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _features_serverSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(503);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83);






function ServerEditRole() {
    const { server  } = (0,_features_servers__WEBPACK_IMPORTED_MODULE_3__/* .useServersState */ .EG)();
    const { currentRole , rolesCopy  } = (0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_4__/* .useServerSettingsState */ .g$)();
    const { 0: updateTimeout , 1: setUpdateTimeout  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const nameRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const colorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useAppDispatch */ .T)();
    const topColors = [
        "rgb(26, 188, 156)",
        "rgb(46, 204, 113)",
        "rgb(52, 152, 219)",
        "rgb(155, 89, 182)",
        "rgb(233, 30, 99)",
        "rgb(241, 196, 15)",
        "rgb(230, 126, 34)",
        "rgb(231, 76, 60)",
        "rgb(149, 165, 166)",
        "rgb(96, 125, 139)", 
    ];
    const bottomColors = [
        "rgb(17, 128, 106)",
        "rgb(31, 139, 76)",
        "rgb(32, 102, 148)",
        "rgb(113, 54, 138)",
        "rgb(173, 20, 87)",
        "rgb(194, 124, 14)",
        "rgb(168, 67, 0)",
        "rgb(153, 45, 34)",
        "rgb(151, 156, 159)",
        "rgb(84, 110, 122)", 
    ];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!nameRef.current || !colorRef.current) return;
        nameRef.current.value = currentRole.name;
        colorRef.current.value = currentRole.color.includes("rgb") ? "#FFFFFF" : currentRole.color;
    }, [
        currentRole
    ]);
    function handleColorChange(e) {
        const color = e.target.value;
        changeColor(color);
    }
    function changeColor(color) {
        const newRole = {
            ...currentRole
        };
        newRole.color = color;
        const index = server.roles.findIndex((role)=>role.sort === currentRole.sort);
        dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_3__/* .updateServerRole */ .x4)({
            index: index,
            newRole: newRole
        }));
        dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_4__/* .setCurrentRole */ .me)(newRole));
    }
    function handleRoleRename(e) {
        if (!rolesCopy) return;
        if (updateTimeout) clearTimeout(updateTimeout);
        const newRole = {
            ...currentRole
        };
        newRole.name = e.target.value;
        const index = server.roles.findIndex((role)=>role.sort === newRole.sort);
        const timer = setTimeout(()=>{
            dispatch((0,_features_servers__WEBPACK_IMPORTED_MODULE_3__/* .updateServerRole */ .x4)({
                index: index,
                newRole: newRole
            }));
            dispatch((0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_4__/* .setCurrentRole */ .me)(newRole));
        }, 500);
        setUpdateTimeout(timer);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Header, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Heading, {
                        children: [
                            "EDIT ROLE — ",
                            currentRole.name.toUpperCase()
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Separator, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContentContainer, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CustomizationContainer, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SettingsContainer, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SettingsHeading, {
                                    children: [
                                        "ROLE NAME ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RedText, {
                                            children: "*"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RoleName, {
                                    onChange: (e)=>handleRoleRename(e),
                                    ref: nameRef,
                                    type: "text",
                                    defaultValue: currentRole.name,
                                    maxLength: 100,
                                    required: true
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SettingsContainer, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SettingsHeading, {
                                    children: [
                                        "ROLE COLOR ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RedText, {
                                            children: "*"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SettingsText, {
                                    children: "Members use the color of the highest role they have on the roles list."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ColorInputsContainer, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ColorInputContainer, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DefaultColorButton, {
                                                    onClick: ()=>changeColor("rgb(153, 170, 181)"),
                                                    type: "button"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ColorInputLabel, {
                                                    children: "Default"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ColorInputContainer, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ColorInput, {
                                                    onChange: handleColorChange,
                                                    ref: colorRef,
                                                    type: "color",
                                                    defaultValue: currentRole.color.includes("rgb") ? "#FFFFFF" : currentRole.color
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ColorInputLabel, {
                                                    children: "Custom"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SmallColorsContainer, {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ColorsRowContainer, {
                                                    children: topColors.map((color, index)=>{
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SmallColorButton, {
                                                            style: {
                                                                backgroundColor: color
                                                            },
                                                            onClick: ()=>changeColor(color)
                                                        }, index);
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BottomColorsRowContainer, {
                                                    children: bottomColors.map((color, index)=>{
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SmallColorButton, {
                                                            style: {
                                                                backgroundColor: color
                                                            },
                                                            onClick: ()=>changeColor(color)
                                                        }, index);
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PermissionsContainer, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PermissionLabel, {
                                    children: "Display role members separately from online members"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PermissionInput, {
                                    type: "checkbox"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  pt-15 pl-6 pb-20 min-w-[293px] max-w-[508px]
`;
const Header = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex flex-col min-w-[243px] max-w-[508px]
`;
const Heading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().h1)`
  mb-5 font-semibold truncate leading-5
  dark:text-white
`;
const Separator = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  w-full mb-6 pb-1 border-b border-gray-200
  dark:border-dark-50/[.48]
`;
const ContentContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex
`;
const CustomizationContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex-1 min-w-[293px] max-w-[508px]
`;
const SettingsContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  mb-6 pb-6 border-b
  dark:border-dark-50/[.48]
`;
const SettingsHeading = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().h5)`
  mb-2 text-xs text-gray-600 font-semibold
  dark:text-text-primary
`;
const SettingsText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().span)`
  flex mb-2 text-sm text-gray-800
  dark:text-text-primary
`;
const ColorInputsContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex
`;
const ColorInputContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex flex-col mr-4 text-center
`;
const ColorInput = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().input)`
  w-[66px] h-[50px] rounded border-none cursor-pointer
`;
const DefaultColorButton = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()(ColorInput)`
  bg-[#99AAB5]
`;
const ColorInputLabel = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().label)`
  mt-1 text-xs text-gray-600
  dark:text-text-primary
`;
const SmallColorsContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex flex-col
`;
const ColorsRowContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex
`;
const BottomColorsRowContainer = tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default()(ColorsRowContainer)`
  mt-2.5
`;
const SmallColorButton = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().button)`
  w-5 h-5 rounded-middle border mr-2.5
  ${(props)=>`bg-[${props.color}]`}
`;
const RoleName = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().input)`
  w-full h-10 p-2.5 pr-8 bg-gray-50 rounded-middle resize-none
  dark:bg-dark-400 dark:text-text-tertiary
`;
const RedText = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().span)`
  text-red-500
`;
const PermissionsContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().div)`
  flex items-center mb-5
`;
const PermissionLabel = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().label)`
  min-w-[187px] max-w-[402px] font-medium cursor-pointer
  dark:text-white
`;
const PermissionInput = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_2___default().input)`
  w-10 h-6 cursor-pointer
`;


/***/ }),

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

/***/ 4970:
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
/* harmony import */ var _components_chat_Chat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(781);
/* harmony import */ var _components_userSettings_UserSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6947);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3095);
/* harmony import */ var tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _features_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(786);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1492);
/* harmony import */ var _features_servers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(37);
/* harmony import */ var _features_userSettings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6627);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(192);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_Members__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9542);
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9318);
/* harmony import */ var _features_addServer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5417);
/* harmony import */ var _components_addServer_AddServer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7404);
/* harmony import */ var _components_serverDropdown_ServerDropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(544);
/* harmony import */ var _features_serverSettings__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(503);
/* harmony import */ var _components_serverDropdown_InviteFriends__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(5616);
/* harmony import */ var _components_MemberProfileCard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(7261);
/* harmony import */ var _components_serverDropdown_CreateChannel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(9386);
/* harmony import */ var _components_serverSettings_ServerSettings__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(5448);
/* harmony import */ var _components_ViewMedia__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(1634);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_servers_Servers__WEBPACK_IMPORTED_MODULE_3__, _components_channels_Channels__WEBPACK_IMPORTED_MODULE_4__, _components_chat_Chat__WEBPACK_IMPORTED_MODULE_5__, _components_userSettings_UserSettings__WEBPACK_IMPORTED_MODULE_6__, firebase_auth__WEBPACK_IMPORTED_MODULE_10__, firebase_firestore__WEBPACK_IMPORTED_MODULE_11__, _firebase__WEBPACK_IMPORTED_MODULE_14__, _components_Members__WEBPACK_IMPORTED_MODULE_16__, _components_addServer_AddServer__WEBPACK_IMPORTED_MODULE_19__, _components_MemberProfileCard__WEBPACK_IMPORTED_MODULE_23__, _components_serverDropdown_CreateChannel__WEBPACK_IMPORTED_MODULE_24__, _components_serverSettings_ServerSettings__WEBPACK_IMPORTED_MODULE_25__]);
([_components_servers_Servers__WEBPACK_IMPORTED_MODULE_3__, _components_channels_Channels__WEBPACK_IMPORTED_MODULE_4__, _components_chat_Chat__WEBPACK_IMPORTED_MODULE_5__, _components_userSettings_UserSettings__WEBPACK_IMPORTED_MODULE_6__, firebase_auth__WEBPACK_IMPORTED_MODULE_10__, firebase_firestore__WEBPACK_IMPORTED_MODULE_11__, _firebase__WEBPACK_IMPORTED_MODULE_14__, _components_Members__WEBPACK_IMPORTED_MODULE_16__, _components_addServer_AddServer__WEBPACK_IMPORTED_MODULE_19__, _components_MemberProfileCard__WEBPACK_IMPORTED_MODULE_23__, _components_serverDropdown_CreateChannel__WEBPACK_IMPORTED_MODULE_24__, _components_serverSettings_ServerSettings__WEBPACK_IMPORTED_MODULE_25__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



























const Home = ()=>{
    const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_10__.getAuth)();
    const { user  } = (0,_features_user__WEBPACK_IMPORTED_MODULE_8__/* .useUserState */ .ec)();
    const { channel , memberProfileCardOpen , server , viewMediaOpen  } = (0,_features_servers__WEBPACK_IMPORTED_MODULE_12__/* .useServersState */ .EG)();
    const { userSettingsOpen , memberListOpen  } = (0,_features_userSettings__WEBPACK_IMPORTED_MODULE_13__/* .useUserSettingsState */ .kq)();
    const { addServerOpen  } = (0,_features_addServer__WEBPACK_IMPORTED_MODULE_18__/* .useAddServerState */ .n_)();
    const { serverDropdownOpen , serverSettingsOpen , inviteFriendsOpen , createChannelOpen ,  } = (0,_features_serverSettings__WEBPACK_IMPORTED_MODULE_21__/* .useServerSettingsState */ .g$)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_15__.useRouter)();
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useAppDispatch */ .T)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const authStateListener = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_10__.onAuthStateChanged)(auth, async (user)=>{
            if (!user) return redirect();
            const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_14__.db, "users", user.uid);
            const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.getDoc)(docRef);
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
            dispatch((0,_features_user__WEBPACK_IMPORTED_MODULE_8__/* .setUser */ .av)(currentUser));
        });
        return ()=>{
            authStateListener();
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!user.userID) return;
        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_14__.db, "users", user.userID), (doc)=>{
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
            dispatch((0,_features_user__WEBPACK_IMPORTED_MODULE_8__/* .setUser */ .av)(currentUser));
        });
        return ()=>{
            unsubscribe();
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!server.serverID || !user.userID) return;
        const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_14__.db, "servers", server.serverID, "members", user.userID);
        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.onSnapshot)(docRef, (doc)=>{
            const docData = doc.data();
            const roles = {
                userID: doc.id,
                serverOwner: docData?.serverOwner,
                roles: docData?.roles
            };
            dispatch((0,_features_user__WEBPACK_IMPORTED_MODULE_8__/* .setUser */ .av)({
                ...user,
                roles
            }));
        });
        return ()=>{
            unsubscribe();
        };
    }, [
        server
    ]);
    function redirect() {
        dispatch((0,_features_user__WEBPACK_IMPORTED_MODULE_8__/* .resetUserState */ .tZ)());
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
            memberProfileCardOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MemberProfileCard__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {}),
            userSettingsOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_userSettings_UserSettings__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            addServerOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_addServer_AddServer__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {}),
            serverDropdownOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_serverDropdown_ServerDropdown__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {}),
            serverSettingsOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_serverSettings_ServerSettings__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {}),
            inviteFriendsOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_serverDropdown_InviteFriends__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {}),
            createChannelOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_serverDropdown_CreateChannel__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {}),
            viewMediaOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ViewMedia__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_servers_Servers__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_channels_Channels__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ChatContainer, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Title__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ContentContainer, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_chat_Chat__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                                    memberListOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Members__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {})
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const PageContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_7___default().div)`
  flex w-screen h-screen overflow-hidden select-none
`;
const Container = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_7___default().div)`
  flex w-full h-full
`;
const ChatContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_7___default().div)`
  flex flex-col flex-1
`;
const ContentContainer = (tailwind_styled_components_dist_tailwind__WEBPACK_IMPORTED_MODULE_7___default().div)`
  flex flex-1
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1243:
/***/ ((module) => {

module.exports = require("emoji-picker-react");

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

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

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

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,675,786,192,573,643], () => (__webpack_exec__(4970)));
module.exports = __webpack_exports__;

})();