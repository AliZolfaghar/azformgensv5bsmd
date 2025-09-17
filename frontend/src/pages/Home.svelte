<script>
    // @ts-nocheck
    import { onMount } from 'svelte';
    import axios from '../lib/axios';
    
    import Card from '../components/Card.svelte';
    import Colors from '../components/Colors.svelte';
    import Modal from '../components/Modal.svelte';
    import ChangeLanguage from '../shared/changeLanguage.svelte';
    import NumericInput from '../components/NumericInput.svelte';
    // import toastr from '../assets/toastr/_toastr.js';

    import { t , lang } from '../lib/i18n/i18n.js'

    
    let showModal1 = $state(false);
    let iNumber = $state(0);

    const toast = () => {        
        toastr.success('success');
    }

    // const getUserInfo = async () => {
    //     // fetch user info from api
    //     try {
    //         const response = await axios.get('v1/auth/login');
    //         console.log('user info : ' , response.data);
    //     } catch (error) {
    //         console.error('get user info failed : ' , error);
    //         toastr.error(error.message || 'get user info failed');              
    //     }
    // }

    onMount( () => {
        console.log('home mounted');
        // getUserInfo();
    })
</script>


<main class="animated fadeInDown faster mb-3">
    <h3>{$t('welcome')}</h3>
    <hr>
    <button class="btn btn-primary btn-raised" onclick={() => showModal1 = true }> show modal </button>
    <button class="btn btn-primary btn-raised" onclick={ toast }> show toast </button>
    <hr>
</main>

<!-- MODAL -->
<Modal bind:show={showModal1} size="modal-lg" title="sample modal" >
    <h4> modal data </h4>
    <hr>
    <button class="btn w-130px btn-block-sm btn-raised btn-primary " > save </button>
    <button class="btn w-130px btn-block-sm btn-raised btn-secondary" onclick={ () => showModal1 = false } > cancel </button>
    <button class="btn w-130px btn-block-sm btn-raised btn-danger float-right" > delete </button>
</Modal>

<div class="row mb-3">
    <div class="col-md-3">
        <!-- CARD -->
        <Card title="card title">
            <h3>Card Data</h3>
            <br>
            translate welcome : { $t('Welcome') } <br>
            translate fooBar : { $t('fooBar') } <br>
        </Card>    

    </div>
    
    <div class="col-md-2">
        <div class="shadow p-3 border ">            
            <div class="bg-yellow-400 rounded-t-2xl rounded-b-2xl ">
                test tailwind css 
            </div>
        </div>
        
    </div>

    <div class="col-md-2">
        <!-- NUMERIC INPUT -->
        <NumericInput bind:value={iNumber} cssClass="form-control" ></NumericInput>
        {iNumber}
    </div>

    <div class="col-md-2">
        <Colors />
    </div>

    <div class="col-md-4">
        <div data-slot="card" class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm w-full max-w-sm"><div data-slot="card-header" class="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"><div data-slot="card-title" class="leading-none font-semibold">Login to your account</div><div data-slot="card-description" class="text-muted-foreground text-sm">Enter your email below to login to your account</div><div data-slot="card-action" class="col-start-2 row-span-2 row-start-1 self-start justify-self-end"><button data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary underline-offset-4 hover:underline h-9 px-4 py-2 has-[&gt;svg]:px-3">Sign Up</button></div></div><div data-slot="card-content" class="px-6"><form><div class="flex flex-col gap-6"><div class="grid gap-2"><label data-slot="label" class="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50" for="email">Email</label><input data-slot="input" class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive" id="email" placeholder="m@example.com" required="" type="email"></div><div class="grid gap-2"><div class="flex items-center"><label data-slot="label" class="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50" for="password">Password</label><a href="#" class="ml-auto inline-block text-sm underline-offset-4 hover:underline">Forgot your password?</a></div><input data-slot="input" class="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive" id="password" required="" type="password"></div></div></form></div><div data-slot="card-footer" class="flex items-center px-6 [.border-t]:pt-6 flex-col gap-2"><button data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3 w-full" type="submit">Login</button><button data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 w-full">Login with Google</button></div></div>        
    </div>

    <div class="col-md-4">
<!-- https://gist.github.com/goodreds/5b8a4a2bf11ff67557d38c5e727ea86c -->

<div
    class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
    <div class="rounded-t-lg h-32 overflow-hidden">
        <img class="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain'>
    </div>
    <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img class="object-cover object-center h-32" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front'>
    </div>
    <div class="text-center mt-2">
        <h2 class="font-semibold">Sarah Smith</h2>
        <p class="text-gray-500">Freelance Web Designer</p>
    </div>
    <ul class="py-4 mt-2 text-gray-700 flex items-center justify-around">
        <li class="flex flex-col items-center justify-around">
            <svg class="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <div>2k</div>
        </li>
        <li class="flex flex-col items-center justify-between">
            <svg class="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                    d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
            </svg>
            <div>10k</div>
        </li>
        <li class="flex flex-col items-center justify-around">
            <svg class="w-4 fill-current text-blue-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                    d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
            </svg>
            <div>15</div>
        </li>
    </ul>
    <div class="p-4 border-t mx-8 mt-2">
        <button class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button>
    </div>
</div>        
    </div>


</div>



