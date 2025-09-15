<script>
    let { params } = $props();
    import { link } from "svelte-spa-router";
    import active from "svelte-spa-router/active";
    

    const pageLinks = [
        { name: "login history", path: "/user/setting/loginhistory" },
        { name: "profile", path: "/user/setting/profile" }
    ]
</script>


<h1> user settings</h1>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-2 ">
            <div class="card">
                <div class="card-body">
                    <ul class="list-group">
                        {#each pageLinks as pl}
                        <li class="list-group-item list-group-item-action">
                                <a use:link use:active class="text-nowrap active" href={pl.path}> {pl.name} </a>
                            </li>
                        {/each}

                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-10 ">
            {#if params.subpage === 'loginhistory'}
                <div class="animated fadeIn">
                    <h2> Login History </h2>
                    <p> Here is your login history... </p>
                </div>
            {:else if params.subpage === 'profile'}
            <div class="animated fadeIn">

                <h2> Profile Settings </h2>
                <p> Here you can update your profile... </p>
            </div>
            {:else}
            <div class="animated fadeIn">

                <h2> Welcome to User Settings </h2>
                <p> Please select an option from the menu. </p>
            </div>
            {/if}
            
        </div>
    </div>

</div>

<style>
    .active{
        font-weight: bold;
        font-size: larger;
        color: red;
    }
</style>