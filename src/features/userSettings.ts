import { createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "../redux/hooks";
import { UserData } from "./user";

export interface UserSettingsState {
  userSettingsOpen: boolean;
  userSettingsScreen: "My Account" | "User Profile" | "Appearance";
  logoutConfirmOpen: boolean;
  changeUsernameOpen: boolean;
  changeEmailOpen: boolean;
  changeAvatarOpen: boolean;
  memberListOpen: boolean;
  userChangesMade: boolean;
  userCopy: UserData | null;
  unsavedChangesError: boolean;
  theme: "dark" | "light";
}

const initialState: UserSettingsState = {
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
  theme: "dark",
};

export const userSettingsSlice = createSlice({
  name: "userSettings",
  initialState,
  reducers: {
    setUserSettingsOpen(state, action) {
      state.userSettingsOpen = action.payload;
      state.logoutConfirmOpen = false;
    },

    setUserSettingsScreen(state, action) {
      state.userSettingsScreen = action.payload;
    },

    setLogoutConfirmOpen(state, action) {
      state.logoutConfirmOpen = action.payload;
    },

    setChangeUsernameOpen(state, action) {
      state.changeUsernameOpen = action.payload;
    },

    setChangeEmailOpen(state, action) {
      state.changeEmailOpen = action.payload;
    },

    setChangeAvatarOpen(state, action) {
      state.changeAvatarOpen = action.payload;
    },

    setMemberListOpen(state, action) {
      state.memberListOpen = action.payload;
    },

    setUserChangesMade(state, action) {
      state.userChangesMade = action.payload;
    },

    setUserCopy(state, action) {
      state.userCopy = action.payload;
    },

    setUnsavedChangesError(state, action) {
      state.unsavedChangesError = action.payload;
    },

    setTheme(state, action) {
      window.document.documentElement.classList.remove(state.theme);
      state.theme = action.payload;
      window.document.documentElement.classList.add(state.theme);
    },
  },
});

export const {
  setUserSettingsOpen,
  setUserSettingsScreen,
  setLogoutConfirmOpen,
  setChangeUsernameOpen,
  setChangeEmailOpen,
  setChangeAvatarOpen,
  setMemberListOpen,
  setUserChangesMade,
  setUserCopy,
  setUnsavedChangesError,
  setTheme,
} = userSettingsSlice.actions;

export const useUserSettingsState = () =>
  useAppSelector((state) => state.userSettings);

export default userSettingsSlice.reducer;
