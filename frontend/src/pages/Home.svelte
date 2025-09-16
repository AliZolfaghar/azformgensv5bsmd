<script>
    // @ts-nocheck
    import { onMount } from 'svelte';
    import axios from '../lib/axios';
    
    import Card from '../components/Card.svelte';
    import Colors from '../components/Colors.svelte';
    import Modal from '../components/Modal.svelte';
    import NumericInput from '../components/NumericInput.svelte';
    // import toastr from '../assets/toastr/_toastr.js';

    let showModal1 = $state(false);

    let iNumber = $state(0);

    const toast = () => {
        // @ts-ignore
        toastr.success('success');
    }

    const getUserInfo = async () => {
        // fetch user info from api
        try {
            const response = await axios.get('v1/auth/login');
            console.log('user info : ' , response.data);
        } catch (error) {
            console.error('get user info failed : ' , error);
            toastr.error(error.message || 'get user info failed');              
        }
    }

    onMount( () => {
        console.log('home mounted');
        getUserInfo();
    })
</script>


<main class="animated fadeInDown faster mb-3">
    <h1>home</h1>
    <button class="btn btn-primary btn-raised" onclick={() => showModal1 = true }> show modal </button>
    <button class="btn btn-primary btn-raised" onclick={ toast }> show toast </button>
</main>

<Modal bind:show={showModal1} size="modal-lg" title="sample modal" >
    <h4> modal data </h4>
    <hr>
    <button class="btn w-130px btn-block-sm btn-raised btn-primary " > save </button>
    <button class="btn w-130px btn-block-sm btn-raised btn-secondary" onclick={ () => showModal1 = false } > cancel </button>
    <button class="btn w-130px btn-block-sm btn-raised btn-danger float-right" > delete </button>
</Modal>

<div class="row mb-3">
    <div class="col-md-3">
        <Card title="card title">
            <h3>Card Data</h3>
        </Card>    

        
    </div>
    
    <div class="col-md-3">
        <div class="shadow p-3 border ">
            test
        </div>
        <div class="bg-yellow-400 rounded-t-2xl rounded-b-2xl ">
            tailwind css 
        </div>
    </div>

    <div class="col-md-3">
        <NumericInput bind:value={iNumber} cssClass="form-control" ></NumericInput>
        {iNumber}
    </div>

    <div class="col-md-3">
        <Colors />
    </div>


</div>



