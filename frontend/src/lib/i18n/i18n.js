import { writable, derived } from "svelte/store";
console.log('setup i18n')
// import translation json files
import en from "./en.json";
import fr from "./fr.json";
import fa from "./fa.json";

const DEFAULT_LANG = "en"; // default app lang 
const STORAGE_KEY = "lang"; // local storage key to store lang 

const initialLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG; // get lang from local storage 

if (!localStorage.getItem(STORAGE_KEY)) { 
    localStorage.setItem(STORAGE_KEY, DEFAULT_LANG); // set lang in localstorage if there is nothing stored 
}

export const lang = writable(initialLang); // create a reactive lang store 

lang.subscribe((value) => {
    localStorage.setItem(STORAGE_KEY, value); // save lang in localstorage in lang store change 
});

export const translations = writable({ en, fr, fa }); // create a store for language translation ( for reactivity )

export const t = derived([lang, translations], ([$lang, $translations]) => { // create a reactive function ( rerun if lang or translation change )
    return (key) => $translations[$lang][key.toLowerCase()] || key; // return translated value base on language and key (word) or return the word exactly if nothing found
});

export const languageStore = writable([]);
