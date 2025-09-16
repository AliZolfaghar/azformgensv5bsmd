<script>
  // @ts-nocheck
  import axios from "../lib/axios.js";
  import { push, pop, replace } from "svelte-spa-router";
  import { userStore } from "../stores/userStore.js";

  let formData = $state({ userName: "", password: "" });
  let showPassword = $state(false);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      login();
    }
  };

  // document this function
  const login = async () => {
    if (!formData.userName || !formData.password)       return toastr.error("Please enter username and password"); 

    try {
      const response = await axios.post("/v1/auth/login", formData);      
      localStorage.setItem("authToken", response.data.token);      
      const userInfoResponse = await axios.get("/v1/auth/userinfo");
      userStore.set(userInfoResponse.data);
      toastr.success("Login successful");      
      replace("/home"); // redirect to dashboard
    } catch (error) {
      console.error("Login failed:", error);
      toastr.error(error.message || "Login failed");
    }
  };
</script>

<div class="bg">
  <div class="row justify-content-center">
    <div class="col-sm-8 col-md-6 col-lg-5 col-xl-4" style="max-width: 400px;">
      <div class="card shadow border animated fadeInDown faster">
        <div class="card-header bg-primary text-white text-center h4">
          Login
        </div>
        <div class="card-body p-4">
          <div class="row mb-3">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user mr-2"></i>
                </span>
              </div>
              <input
                placeholder="username"
                id="username"
                type="text"
                class="form-control"
                bind:value={formData.userName}
              />
            </div>
          </div>

          <div class="row mb-3">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-lock mr-2"></i>
                </span>
              </div>

              <input
                placeholder="password"
                onkeypress={handleKeyPress}
                id="password"
                type={showPassword ? "text" : "password"}
                class="form-control"
                bind:value={formData.password}
              />

              <div class="input-group-append">
                <button
                  aria-label="show password"
                  type="button"
                  class="btn btn-sm btn-primary btn-raised ripple"
                  onclick={() => (showPassword = !showPassword)}
                >
                  <i
                    class="fa pointer {showPassword
                      ? 'fa-eye-slash'
                      : 'fa-eye'} "
                  ></i>
                </button>
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
</div>

<style>
  .bg {
    background-image: url("/images/login-bg.jpg");
    background-size: cover;
    background-attachment: fixed;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;

    top: 0px;
    left: 0px;
    padding-top: 100px;
  }
</style>
