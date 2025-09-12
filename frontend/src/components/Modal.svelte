
<script>
    let { show = $bindable() , title = ''  , size = ''  , children , ...props } = $props();
    import { fly } from 'svelte/transition';
</script>



{#if show}
<div transition:fly={{ y: -20, duration: 400 }} id="sampleModal" class="modal animated fade show " tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false" 
    style="display: block"  >
    
    <div class="modal-dialog modal-dialog-centered {size} " role="document">
        <div class="modal-content">
            <div class="modal-header bg-primary text-white pt-3 pb-2">
                {title}
                <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close" onclick={()=> show = false}><span aria-hidden="true">&times;</span></button>
            </div>

            <div class="modal-body">
                {@render children()}
            </div>

        </div>
    </div>
</div>
{/if}

{#if show} <!-- backdrop -->
<div class="modal-backdrop fade show" ></div>
{/if}