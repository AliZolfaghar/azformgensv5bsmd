<script>
    import { onMount } from 'svelte';
    import axios from '../lib/axios.js';
    import { replace } from 'svelte-spa-router';
    import { userStore } from '../stores/userStore.js';

    onMount( () => {
        console.log('logout mounted');
        // clear token from localstorage, and clear userStore then redirect to login page
        localStorage.removeItem('authToken');
        userStore.set({
            id: null,
            name: '',
            email: '',
        });
        replace('/login');
    })
</script>