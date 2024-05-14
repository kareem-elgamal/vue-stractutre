// @ts-ignore
import Cookies from "js-cookie";

import axios, { AxiosInstance } from "axios";

export default function setupAxios(): AxiosInstance {
  const token = Cookies.get("token");

  const lang = Cookies.get("lang") || "en";

  const appClient = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {
      Authorization: `Bearer ${token ?? ""}`,
      Accept: "application/json",
      ContentType: "application/json",
      "Accept-Language": lang,
      "Content-Language": lang,
    },
  });

  appClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // if the user unauthenticated
      if (error.response?.status === 401) {
        Cookies.remove("token");
        Cookies.remove("user");
        const path = window.location.pathname;
        if (!path.includes("auth")) {
          window.location.reload();
        }
      }
      return Promise.reject(error);
    },
  );

  return appClient;
}
