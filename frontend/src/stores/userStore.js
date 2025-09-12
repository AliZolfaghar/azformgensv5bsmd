// store logged in user info in this store globally accessable for entire application 
import { writable } from "svelte/store";

export const userStore = writable({
    id: null,
    name: '',
    email: '',
    // add other user fields as needed
});

