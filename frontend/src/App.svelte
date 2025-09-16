<script>
    import { onMount } from 'svelte';
    import { location } from 'svelte-spa-router';
    import Router from 'svelte-spa-router';
    import routes from './routes';


    import Header from './shared/Header.svelte';



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
