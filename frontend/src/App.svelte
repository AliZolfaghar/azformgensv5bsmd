<script>
    import { onMount } from 'svelte';
    import Router from 'svelte-spa-router';
    import routes from './routes';
    import axios from './lib/axios';
    import { location } from 'svelte-spa-router';
    import { userStore } from "./stores/userStore.js";

    import Header from './shared/Header.svelte';    
    import { loadUserInfo } from './lib/loadUserInfo';

    onMount(()=>{
        console.log('app mounted')                
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
