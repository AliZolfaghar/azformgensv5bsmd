<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import axios from 'axios';
    import { link } from 'svelte-spa-router';
    import Loader1 from "../components/Loader1.svelte";
    // @ts-ignore
    import { location , querystring } from 'svelte-spa-router';
    import Loader2 from "../components/Loader2.svelte";
    import Loader3 from "../components/Loader3.svelte";
    import Loader4 from "../components/Loader4.svelte";
    import Loader5 from "../components/Loader5.svelte";
    import Loader6 from "../components/Loader6.svelte";
    import Loader7 from "../components/Loader7.svelte";

    import { fullFilter } from "../lib/fullFilter.js";

    const { params } = $props();

    const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';

    let posts = $state([]);
    let currentPost = $state({});
    let isLoading = $state(false);

    const loadAllPosts = async () => {
        try {
            isLoading = true
            setTimeout( async () => {                
                const response = await axios.get(API_ENDPOINT)
                posts = response.data ; 
                console.log(response);
                toastr.success('read all posts success')
                isLoading = false ; 
            }, 1000);
        } catch (error) {
            toastr.error(error.message)
            isLoading = false; 
        } 
    }


    const loadOnePost = async (post_id) => {
        try {
            isLoading = true ; 
            const response = await axios.get(API_ENDPOINT + `/${post_id}`)
            currentPost = response.data ; 
            console.log(response);
            toastr.success('load one posts success')
            isLoading = false ; 
        } catch (error) {
            toastr.error(error.message) ;
            isLoading = false ; 
        }
    }

    onMount(() => {
        console.log('Component mounted');
        // loadAllPosts()
    });

    $effect( () => {
        const post_id = params?.post_id;
        if (post_id) {
            loadOnePost(post_id); // load one post 
        } else {
            loadAllPosts(); // load all posts 
        }
    });

    let searchTerm = $state('');
    let filteredPosts = $state([])
    $effect( () => {
        filteredPosts = fullFilter( posts , searchTerm)
    })

</script>


{#if params?.post_id }
    <main class="animated fadeInUp faster">

        <div class="row justify-content-center">
            <div class="col-md-4">

                <div class="card">
                    <div class="card-header bg-primary text-white">
                        {currentPost.title}
                    </div>
                    <div class="card-body">
                        {currentPost.body}
                    </div>                
                    <div class="card-footer">
                        <a class="btn btn-raised btn-danger " href="/posts" use:link> <i class="fa fa-arrow-alt-left"></i> Back </a>
                    </div>
                </div>
                            
            </div>
        </div>

    </main>
{:else}

    <main class="animated fadeInUp faster">

        <h3>posts</h3>
        <hr>
        <div class="col mb-3">
            <input type="text" class="form-control" bind:value={searchTerm} placeholder="filter data ... ">
        </div>
        <table class="table table-bordered table-hover table-striped shadow">
            <thead class="bg-primary text-white">
                <tr class="text-white">
                    <td>id</td>
                    <td>userId</td>
                    <td>title</td>
                    <td>body</td>
                    <td class="w-1"></td>
                </tr>
            </thead>

            <tbody>
                {#each filteredPosts as post}                
                <tr>
                    <td>{post.id}</td>
                    <td>{post.userId}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td class="text-nowrap">
                        <a href="/posts/{post.id}" use:link > view <i class="fa fa-arrow-alt-circle-right"></i></a>
                    </td>
                </tr>
                {/each}

            </tbody>
        </table>

    </main>
{/if}

<Loader7 show={isLoading}></Loader7>