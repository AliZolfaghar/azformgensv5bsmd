import axiosInstance from "./axios";
import { userStore } from "../stores/userStore";
import { get } from "svelte/store";
let user = get(userStore);

export const loadUserInfo = async () => {
    console.log('refresh user info')
  axiosInstance
    .get("/v1/auth/userinfo")
    .then((response) => {
      userStore.set(response.data);
      console.log("User info loaded:", response.data);
    })
    .catch((error) => {
      console.error("Failed to load user info:", error.message);
    });
};
