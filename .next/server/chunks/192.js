"use strict";
exports.id = 192;
exports.ids = [192];
exports.modules = {

/***/ 192:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$": () => (/* binding */ saveUserProfileChanges),
/* harmony export */   "BX": () => (/* binding */ uploadMessageImagePreview),
/* harmony export */   "Bu": () => (/* binding */ saveServerChanges),
/* harmony export */   "I2": () => (/* binding */ signInAsGuest),
/* harmony export */   "JC": () => (/* binding */ changeUsername),
/* harmony export */   "K8": () => (/* binding */ createServerRole),
/* harmony export */   "KE": () => (/* binding */ uploadServerImagePreview),
/* harmony export */   "Os": () => (/* binding */ createGifMessage),
/* harmony export */   "Uk": () => (/* binding */ changeEmail),
/* harmony export */   "YP": () => (/* binding */ joinServer),
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "ft": () => (/* binding */ uploadServerImage),
/* harmony export */   "gg": () => (/* binding */ uploadAvatar),
/* harmony export */   "mi": () => (/* binding */ createChannel),
/* harmony export */   "n0": () => (/* binding */ createServer),
/* harmony export */   "nK": () => (/* binding */ setServerRole),
/* harmony export */   "ni": () => (/* binding */ logOut),
/* harmony export */   "o1": () => (/* binding */ createAccount),
/* harmony export */   "tn": () => (/* binding */ createMessage),
/* harmony export */   "xF": () => (/* binding */ uploadAvatarPreview),
/* harmony export */   "zB": () => (/* binding */ signIn)
/* harmony export */ });
/* unused harmony exports updateUserDatabase, uploadMessageImage, updateDefaultChannel, app */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyBzZmxEt70ItQo2QXzIjLUpfCzGP7z-nok",
    authDomain: "discord-clone-d5718.firebaseapp.com",
    projectId: "discord-clone-d5718",
    storageBucket: "discord-clone-d5718.appspot.com",
    messagingSenderId: "381168334156",
    appId: "1:381168334156:web:32c689bc21b84bf99a8be9",
    measurementId: "G-QX8NW428TD"
};
async function createAccount(email, password, username) {
    try {
        const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.createUserWithEmailAndPassword)(auth, email, password);
        // Signed in
        const user = userCredential.user;
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.updateProfile)(user, {
            displayName: username,
            photoURL: "https://firebasestorage.googleapis.com/v0/b/banter-69832.appspot.com/o/assets%2FdefaultAvatar.svg?alt=media&token=2cd07b3e-6ee1-4682-8246-57bb20bc0d1f"
        });
        // Profile updated
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "users", user.uid), {
            username: user.displayName,
            avatar: user.photoURL,
            tag: "0000",
            about: "",
            banner: "#7CC6FE",
            email: user.email,
            theme: "dark"
        });
        // Database updated
        await joinServer("ke6NqegIvJEOa9cLzUEp");
    // User joins global chat
    } catch (error) {
        console.error(error);
    }
}
async function updateUserDatabase(property, newValue) {
    if (!auth.currentUser) return;
    const user = auth.currentUser;
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "users", user.uid), {
        [property]: newValue
    });
}
async function saveUserProfileChanges(newUser, oldUser) {
    if (!auth.currentUser) return;
    const user = auth.currentUser;
    switch(true){
        case oldUser.avatar !== newUser.avatar:
            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.updateProfile)(user, {
                photoURL: newUser.avatar
            });
            await updateUserDatabase("avatar", newUser.avatar);
        case oldUser.banner !== newUser.banner:
            await updateUserDatabase("banner", newUser.banner);
        case oldUser.about !== newUser.about:
            await updateUserDatabase("about", newUser.about);
    }
}
async function signIn(email, password) {
    try {
        const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithEmailAndPassword)(auth, email, password);
        // Signed in
        const user = userCredential.user;
        return user;
    } catch (error) {
        console.error(error);
    }
}
async function signInAsGuest() {
    try {
        const guestCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInAnonymously)(auth);
        const guest = guestCredential.user;
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.updateProfile)(guest, {
            displayName: "Guest",
            photoURL: "https://firebasestorage.googleapis.com/v0/b/banter-69832.appspot.com/o/assets%2FdefaultAvatar.svg?alt=media&token=2cd07b3e-6ee1-4682-8246-57bb20bc0d1f"
        });
        // Profile updated
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "users", guest.uid), {
            username: guest.displayName,
            avatar: guest.photoURL,
            tag: "0000",
            about: "",
            banner: "#7CC6FE",
            email: guest.email,
            theme: "dark"
        });
        // Database updated
        await joinServer("ke6NqegIvJEOa9cLzUEp");
    // User joins global chat
    } catch (error) {
        console.error(error);
    }
}
async function reauthenticateUser(password) {
    if (!auth.currentUser || !auth.currentUser.email) return;
    const credential = firebase_auth__WEBPACK_IMPORTED_MODULE_2__.EmailAuthProvider.credential(auth.currentUser.email, password);
    await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.reauthenticateWithCredential)(auth.currentUser, credential);
}
async function logOut() {
    try {
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(auth);
    // Sign-out successful.
    } catch (error) {
        console.error(error);
    // An error happened.
    }
}
async function changeUsername(newUsername, password) {
    if (!auth.currentUser || !auth.currentUser.email) return;
    const user = auth.currentUser;
    try {
        if (!user.displayName) return;
        await reauthenticateUser(password);
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.updateProfile)(user, {
            displayName: newUsername
        });
        // Profile updated!
        await updateUserDatabase("username", user.displayName);
    } catch (error) {
        console.error(error);
    }
}
async function changeEmail(newEmail, password) {
    if (!auth.currentUser || !auth.currentUser.email) return;
    const user = auth.currentUser;
    try {
        if (!user.email) return;
        await reauthenticateUser(password);
        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.updateEmail)(user, newEmail);
        await updateUserDatabase("email", user.email);
    } catch (error) {
        console.error(error);
    }
}
async function uploadAvatarPreview(file, userID) {
    const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)();
    const avatarRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage, `users/${userID}/temp/avatar`);
    await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.uploadBytes)(avatarRef, file);
    return await getAvatarPreviewURL(userID);
}
async function getAvatarPreviewURL(userID) {
    const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)();
    return await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage, `users/${userID}/temp/avatar`));
}
async function uploadAvatar(file, userID) {
    const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)();
    const avatarRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage, `users/${userID}/avatar`);
    await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.uploadBytes)(avatarRef, file);
    return await getAvatarURL(userID);
}
async function getAvatarURL(userID) {
    const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)();
    return await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage, `users/${userID}/avatar`));
}
async function createMessage(serverID, channelID, userID, content, image) {
    // Compatibility shim for older browsers, such as IE8 and earlier:
    if (!Date.now) {
        Date.now = function() {
            return new Date().getTime();
        };
    }
    try {
        const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, "servers", serverID, "channels", channelID, "messages"), {
            content: content,
            date: Date(),
            edited: false,
            reactions: [],
            timestamp: Date.now(),
            userID: userID
        });
        if (!image) return;
        uploadMessageImage(image, serverID, channelID, docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
async function uploadMessageImagePreview(file, userID) {
    const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)();
    const messageImageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage, `users/${userID}/temp/messageImage`);
    await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.uploadBytes)(messageImageRef, file);
    return await getMessageImagePreviewURL(userID);
}
async function getMessageImagePreviewURL(userID) {
    const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)();
    return await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage, `users/${userID}/temp/messageImage`));
}
async function uploadMessageImage(file, serverID, channelID, messageID) {
    const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)();
    const messageImageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage, `servers/${serverID}/messages/${messageID}/${file.name}`);
    await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.uploadBytes)(messageImageRef, file);
    const messageImageURL = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(messageImageRef));
    await updateMessageDatabase(serverID, channelID, messageID, "image", messageImageURL);
    return messageImageURL;
}
async function updateMessageDatabase(serverID, channelID, messageID, property, newValue) {
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "servers", serverID, "channels", channelID, "messages", messageID), {
        [property]: newValue
    });
}
async function createGifMessage(serverID, channelID, userID, url) {
    // Compatibility shim for older browsers, such as IE8 and earlier:
    if (!Date.now) {
        Date.now = function() {
            return new Date().getTime();
        };
    }
    try {
        const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, "servers", serverID, "channels", channelID, "messages"), {
            video: url,
            date: Date(),
            edited: false,
            reactions: [],
            timestamp: Date.now(),
            userID: userID
        });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
async function createServer(serverName, userID, serverImage) {
    const serverDocRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, "servers"), {
        name: serverName,
        img: "",
        defaultChannel: "",
        isPublic: false,
        contentFilter: "off"
    });
    const serverID = serverDocRef.id;
    if (serverImage) await uploadServerImage(serverImage, serverID);
    const defaultChannelRef = await createChannel(serverDocRef.id, "general", "text");
    await updateDefaultChannel(serverDocRef, defaultChannelRef);
    await joinServer(serverDocRef.id);
    await setServerOwner(serverID, userID);
    return serverDocRef.id;
}
async function createChannel(serverID, channelName, type) {
    const channelDocRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, "servers", serverID, "channels"), {
        name: channelName,
        type: type
    });
    return channelDocRef;
}
async function updateDefaultChannel(server, channel) {
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(server, {
        defaultChannel: channel.id
    });
}
async function setServerOwner(serverID, userID) {
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "servers", serverID, "members", userID), {
        serverOwner: true
    });
}
async function saveServerChanges(newServer, oldServer) {
    switch(true){
        case newServer.img !== oldServer.img:
            await updateServerDatabase(newServer.serverID, "img", newServer.img);
        case newServer.name !== oldServer.name:
            await updateServerDatabase(newServer.serverID, "name", newServer.name);
        case newServer.roles !== oldServer.roles:
            await updateServerDatabase(newServer.serverID, "roles", newServer.roles);
        case newServer.contentFilter !== oldServer.contentFilter:
            await updateServerDatabase(newServer.serverID, "contentFilter", newServer.contentFilter);
    }
}
async function uploadServerImagePreview(file, userID) {
    const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)();
    const serverImageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage, `users/${userID}/temp/serverImage`);
    await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.uploadBytes)(serverImageRef, file);
    return await getServerImagePreviewURL(userID);
}
async function getServerImagePreviewURL(userID) {
    const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)();
    return await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage, `users/${userID}/temp/serverImage`));
}
async function uploadServerImage(file, serverID) {
    const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)();
    const serverImageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage, `servers/${serverID}/serverImage`);
    await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.uploadBytes)(serverImageRef, file);
    const serverImageURL = await getServerImageURL(serverID);
    await updateServerDatabase(serverID, "img", serverImageURL);
    return serverImageURL;
}
async function getServerImageURL(serverID) {
    const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)();
    return await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)((0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(storage, `servers/${serverID}/serverImage`));
}
async function createServerRole(server, newRoleID) {
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "servers", server.serverID), {
        roles: server.roles ? [
            ...server.roles,
            {
                name: "new role",
                color: "rgb(153,170,181)",
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
                color: "rgb(153,170,181)",
                separateDisplay: false,
                sort: 0,
                permissions: {
                    manageChannels: false,
                    manageRoles: false,
                    manageServer: false
                },
                roleID: newRoleID
            }, 
        ]
    });
}
async function setServerRole(serverID, userID, newRoles) {
    newRoles.length > 0 ? await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "servers", serverID, "members", userID), {
        roles: newRoles
    }) : await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "servers", serverID, "members", userID), {
        roles: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteField)()
    });
}
async function updateServerDatabase(serverID, property, newValue) {
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "servers", serverID), {
        [property]: newValue
    });
}
async function joinServer(serverID) {
    if (!auth.currentUser) return;
    const user = auth.currentUser.uid;
    const docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "servers", serverID);
    const docSnap = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(docRef);
    if (!docSnap.exists()) throw new Error("Please enter a valid link or invite code.");
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "servers", serverID, "members", user), {});
    await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, "users", user, "servers", serverID), {});
}
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
const user = auth.currentUser;

// const firestore = firebase.firestore();
// server config
const servers = {
    iceServers: [
        {
            urls: [
                "stun:stun1.l.google.com:19302",
                "stun:stun2.l.google.com:19302"
            ]
        }, 
    ],
    iceCandidatePoolSize: 10
};
// global states
const pc = new RTCPeerConnection(servers);
let localStream = null;
let remoteStream = null;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;