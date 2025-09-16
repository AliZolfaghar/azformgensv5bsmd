<script>
    import { onMount } from 'svelte';

    // add fadeup animation
    import { fade, fly } from 'svelte/transition';

    import Header from './shared/Header.svelte';

    import Router from 'svelte-spa-router';
    import { location } from 'svelte-spa-router';
    import routes from './routes';



</script>

<main>
    <Header />
    
    <div class="container-fluid mt-4 " >
        <Router {routes} restoreScrollState={true} />
    </div>
    
</main>

<style>

</style>
