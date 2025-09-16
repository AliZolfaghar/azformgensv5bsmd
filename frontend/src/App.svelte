<script>
    import { onMount } from 'svelte';
    import { location } from 'svelte-spa-router';
    import Router from 'svelte-spa-router';
    import routes from './routes';
    import axios from './lib/axios';
    import { userStore } from "./stores/userStore.js";


    import Header from './shared/Header.svelte';
    import { loadTranslation } from './lib/i18n';
    import { loadUserInfo } from './lib/loadUserInfo';



    onMount(()=>{
        console.log('app mounted')
        console.log('load i18n')
        loadTranslation();
        console.log('load userInfo')
        loadUserInfo();

    })


</script>


<!-- <svelte:head>
	<script src="https://cdn.tailwindcss.com"></script>
</svelte:head> -->

<main>
    <Header />
    
    <div class="container-fluid mt-4 " >
        <Router {routes} restoreScrollState={true} />
    </div>
    
</main>

<style>

</style>
