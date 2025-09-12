<script>
    import { fullFilter } from "../lib/fullFilter";

    let { data = [] , addNew , editItem , hide = []  , customFields = [] } = $props();

    let filteredData = $state([]);    
    let searchTerm = $state('');

    // filter data 
    $effect(() => {        
        filteredData = fullFilter(data, searchTerm);
    });

    const renderAs = (fieldName) => {
        let rv = 'text';
        customFields.map( i => {
            if( i.fieldName == fieldName ) {
                rv = i.control
            }
        })
        return rv 
    }; // determine how to render the value

    // export addNew to call from parent component
 
</script>

{#snippet renderCell( control , data )}
    {#if control == 'text'}
        { data }
    {:else if control == 'csvBadge'}
        {#each data.toString().split(',') as i }        
        <span class="badge badge-info me-1 fs-7 bg-info text-white">{i}</span>
        {/each}
    {:else}
        {data} 
    {/if}
{/snippet}


<input class="form-control" placeholder="search..." type="text" aria-label="Search" bind:value={searchTerm} />
<table class="table table-bordered table-hover table-striped shadow">
    <thead>
        <tr>
            <th class="bg-primary text-white">#</th>
            {#each Object.keys(data[0] || {}) as key}
                {#if !hide.includes(key)}
                    <th class="bg-primary text-white">{key}</th>
                {/if}
            {/each}
            <th class="bg-primary text-white w-1">
                <button onclick={addNew} type="button" class="btn btn-success btn-sm text-nowrap btn-block ripple"><li class="fa fa-plus pe-1"></li> Add New</button>
            </th>
        </tr>
    </thead>
    <tbody>
        {#each filteredData as row , index (index)}
            <tr>
                <td>{index + 1}</td>
                {#each Object.keys(row) as key}
                    {#if !hide.includes(key)}
                        <!-- Skip rendering this cell -->                         
                        <!-- <td>{row[key]}</td> -->
                        <td>{@render renderCell( renderAs(key) , row[key])}</td>
                    {/if}
                {/each}
                <td>
                    <button onclick={() => editItem(row)} type="button" class="btn btn-info btn-sm text-nowrap btn-block ripple"><i class="fa fa-pen pe-1"></i> Edit</button>
                </td>
            </tr>
        {/each}
    </tbody>
</table>


<style>
    .table th {
        text-align: center;
        padding: 9px;
    }  

    .table td {
        padding: 8px;
    }
</style>
