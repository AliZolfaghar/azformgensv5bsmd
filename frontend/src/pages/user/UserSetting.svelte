<script>
    let { params } = $props();
    import { link , location } from "svelte-spa-router";
    import active from "svelte-spa-router/active";
    import LoginHistory from "./LoginHistory.svelte";
    import Dashboard from "./Dashboard.svelte";
    

    const pageLinks = [
        { name: "dashboard", path: "/user/setting" },
        { name: "login history", path: "/user/setting/loginhistory" },
        { name: "profile", path: "/user/setting/profile" }
    ]
</script>

<!-- {$location} -->
<h1> user settings</h1>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-2 ">
            <div class="card">
                <div class="card-body">
                    <ul class="list-group">
                        {#each pageLinks as pl}
                        <a use:link use:active class="text-nowrap active" href={pl.path}> 
                                <li class="list-group-item list-group-item-action { $location === pl.path ? 'active-item' : '' }">
                                    {pl.name} 
                                </li>
                            </a>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>

        <div class="col-md-10 ">
            {#if params.subpage === 'loginhistory'}
                <LoginHistory />
            {:else if params.subpage === 'profile'}
            <div class="animated fadeIn">

                <h2> Profile Settings </h2>
                <p> Here you can update your profile... </p>
            </div>
            {:else}
                <Dashboard />
            {/if}
            
        </div>
    </div>

</div>

<style>
    a{
        text-decoration: none;
        color: inherit;
    }
    .active{
        font-weight: bold;
        /* color: #3f51b5; */
    }
    .active-item{
        color: #3f51b5;
    }
</style>