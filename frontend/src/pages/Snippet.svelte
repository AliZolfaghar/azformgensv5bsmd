<script>


    import Card1 from './Card1.svelte';

    let data = $state([
        {name : 'ali' , age : 47 } , 
        {name : 'mosi' , age : 40 } , 
        {name : 'sahar' , age : 45 } , 
    ])



</script>

<h1>snippet</h1>


<hr>
<Card1 title='sample card'  >
    <h1>test</h1>
    <button class="btn btn-raised btn-primary" type="button"> test</button>
</Card1>


<div class="rounded-lg overflow-hidden p-2 flex items-center justify-center">
    <img 
        src="https://github.com/gaearon.png"
        alt="Profile avatar"
        class="h-12 w-12 rounded-full object-cover"
    />
    <div class="flex flex-col justify-start ml-2">
        <div class="text-black font-medium">John Anderson</div>
        <div class="text-xs text-zinc-500 -mt-[2px]">@janderson</div>
    </div>
</div>

<table class="table">
    <thead>
        <tr>
            <td>name</td>
            <td>age</td>
        </tr>
    </thead>
    <tbody>

        {#each data as i }            
            {@render dataRow(i)}
        {/each}


    </tbody>
</table>


{#snippet dataRow(i)}
    <tr>
        <td>{i.name}</td>
        <td>{i.age}</td>
    </tr>
{/snippet}