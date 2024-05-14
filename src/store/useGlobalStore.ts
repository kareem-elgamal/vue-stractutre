import { defineStore } from "pinia";

import { reactive, ref } from "vue";

// @ts-ignore
import Cookies from "js-cookie";

import {
  Type_User_Data,
  Type_Lang_Model,
  Type_Modal_types,
} from "@/constants/types";

import { default_config } from "@/constants";

type UserGlobalState = Type_User_Data | null | undefined;
type ThemeGlobalState = "light" | "dark";
type LangGlobalState = Type_Lang_Model | null | undefined;
type ModalGlobalState = {
  type: Type_Modal_types;
  isOpen: boolean;
  data: {};
  id: string | number | undefined | null;
};

/**
 * Retrieves the values of cookies related to the user, theme, and language.
 * @returns The values of the cookies.
 */
function getcookiesValues(): {
  user: UserGlobalState;
  theme: ThemeGlobalState;
  lang: LangGlobalState;
} {
  const user = Cookies.get("user");
  const theme = Cookies.get("theme") || default_config.default_theme;
  const lang = Cookies.get("lang");

  document.documentElement.dataset.theme = theme;

  return {
    user: user ? JSON.parse(user) : null,
    theme,
    lang: lang ? JSON.parse(lang) : null,
  };
}

const useGlobalStore = defineStore("globalStore", () => {
  const user = ref<UserGlobalState>(getcookiesValues().user);

  const lang = ref<LangGlobalState>(getcookiesValues().lang);

  const theme = ref<ThemeGlobalState>(getcookiesValues().theme);

  const modal = reactive<ModalGlobalState>({
    type: undefined,
    isOpen: false,
    data: {},
    id: "",
  });

  /**
   * save data
   * Saves user data to cookies and updates the state.
   * @param state - The current state.
   * @param action - The action containing the token and user data.
   */
  function saveUserData(payload: { token: string; data: Type_User_Data }) {
    Cookies.set("token", payload.token);
    Cookies.set("user", JSON.stringify(payload.data));
    user.value = payload.data;
  }

  /**
   * Logs out the user by removing the relevant cookies and reloading the page.
   */
  function logoutUser() {
    Cookies.remove("token");
    Cookies.remove("user");
    window.location.reload();
  }

  /**
   * Toggles the theme and updates the state and document element.
   * @param state - The current state.
   * @param action - The action containing the new theme.
   */
  function toggleTheme(payload: "dark" | "light") {
    Cookies.set("theme", payload);
    theme.value = payload;
    document.documentElement.dataset.theme = payload;
  }

  /**
   * Opens a modal and updates the state with the provided data.
   * @param state - The current state.
   * @param action - The action containing the modal data.
   */
  function openModal(payload: {
    data: {};
    id: string | number;
    type: Type_Modal_types;
  }) {
    modal.isOpen = true;
    modal.data = payload.data;
    modal.type = payload.type;
    modal.id = payload.id;
  }

  /**
   * Closes the modal and resets the state.
   * @param state - The current state.
   */
  function closeModal() {
    modal.isOpen = false;
    modal.data = {};
    modal.type = undefined;
    modal.id = "";
  }

  return {
    user,
    lang,
    theme,
    modal,
    saveUserData,
    logoutUser,
    toggleTheme,
    openModal,
    closeModal,
  };
});

export default useGlobalStore;
