<script>
    export let show = false ; 
    export const show_loader = ()=>{
        console.log('show loader')
    }; 
</script>

{#if show }
    <div class="backdrop">
        <!-- <div class="loader-05"></div> -->
        <div class="lds-dual-ring"></div>
    </div>
{/if}

<style>
    .lds-dual-ring {
        display: inline-block;
        width: 80px;
        height: 80px;
        position: fixed;
        top: 300px;
        left: 47vw;

    }

    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-dual-ring 1.2s linear infinite;
        top: 100px;
    }

    @keyframes lds-dual-ring {
        0% {transform: rotate(0deg);}
        100% {transform: rotate(360deg);}
    }


    .backdrop {
        background-color: rgba(0, 0, 0, .3);
        width: 100%;
        height: 100vmax;
        display: block;
        /* position: absolute; */
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999
    }

</style>