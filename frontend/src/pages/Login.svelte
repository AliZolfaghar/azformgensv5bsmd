<script>
    // @ts-ignore for for this module
    // @ts-nocheck
    import axios from "../lib/axios.js";
    import {push, pop, replace} from 'svelte-spa-router';
    import { userStore } from "../stores/userStore.js";

    let formData = $state({ userName:'', password:'' });
    let showPassword = $state(false);

    // document this function 
    const login = async () => {

        try {
            const response = await axios.post( '/v1/auth/login', formData);
            toastr.success('Login successful');
            console.log('Login successful:', response.data);
            localStorage.setItem('authToken', response.data.token);
            // get user info from /v1/auth/userinfo
            const userInfoResponse = await axios.get('/v1/auth/userinfo');
            userStore.set(userInfoResponse.data);
            // redirect to dashboard
            replace('/home');
        } catch (error) {
            console.error('Login failed:', error);
            toastr.error(error.message || 'Login failed');
        }
    }

</script>

{ JSON.stringify(formData)}

<div class="row justify-content-center">
    <div class="col-md-6 col-sm-8 col-lg-5 col-xl-4">
        <div class="card shadow border " >
            <div class="card-header bg-primary text-white text-center h4">
                Login
            </div>
            <div class="card-body p-4">
                <div class="row mb-3 ">
                    <label for="username"> username : </label>
                    <!-- add a user name icon to input -->
                    <div class="input-group">
                        <div class="input-group-text">
                            <i class="fa fa-user"></i>
                        </div>
                        <input id="username" type="text" class="form-control p-2" bind:value={formData.userName}>
                    </div>
                </div>

                <div class="row mb-3 ">
                    <label for="password"> password : </label>
                    <!-- add a lock icon to input -->
                    <div class="input-group">
                        <div class="input-group-text">
                            <i class="fa fa-lock"></i>
                        </div>
                        <!-- login if user press enter in password field -->
                        <input onkeypress={(e)=>{
                            if(e.key === 'Enter'){
                                login();
                            }
                        }} id="password" type="{ showPassword ? 'text' : 'password' }" class="form-control p-2" bind:value={formData.password}>
                        <!-- add a toggle show password after password input -->
                        <div class="input-group-text">
                            <!-- svelte-ignore a11y_click_events_have_key_events -->
                            <!-- svelte-ignore a11y_no_static_element_interactions -->
                            <i  class="fa pointer { showPassword ? 'fa-eye-slash' : 'fa-eye' }" onclick={() => showPassword = !showPassword}></i>
                        </div>
                    </div>

                </div>
            </div>
            <div class="card-footer">
                <div class="row">
                    <div class="col-12 text-center">
                        <button class="btn btn-success btn-raised ripple" onclick={login}> 
                                &nbsp; &nbsp; LOGIN &nbsp;
                            <i class="fa fa-key"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>