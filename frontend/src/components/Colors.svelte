<script>

    const colors = ['primary' , 'secondary' , 'purple' , 'yellow' , 'danger' , 'dark' , 'info' , 'light' ,'success' , 'warning' , 'orange' ] 
</script>

{#each colors as color }
    <button class="btn btn-raised btn-block btn-{color} ripple"> {color}</button>
{/each}

