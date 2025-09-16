import axiosInstance from "./axios";
import { languageStore } from "../stores/languageStore";

// get default lang from localstorage 

export const loadTranslation = async () => {
    const lang = localStorage.getItem('defaultLanguage') || 'en'; 
    console.log('load i18n from backend' , lang )
    axiosInstance
        .get(`/v1/translation/${lang}`)
        .then((response) => {
            // save in store 
            languageStore.set(response.data)
        })
        .catch((error) => {
            console.error("Failed to load user info:", error.message);
        });
};
