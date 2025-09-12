<script>
    let { title , children , ...props } = $props();
</script>

<div class="card">
    <div class="card-header text-white bg-primary">
        {title}
    </div>
    <div class="card-body">
        {@render children()}
    </div>
</div>