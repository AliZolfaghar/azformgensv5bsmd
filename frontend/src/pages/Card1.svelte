<script>
    let { title , children } = $props();
</script>

<div class="card">
    <div>
        {title}
    </div>
    <div class="card-body">
        {@render children()}        
    </div>
</div>