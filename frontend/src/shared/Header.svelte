<script>
  import { link } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import { userStore } from "../stores/userStore.js";
  import { onMount } from "svelte";
  import axios from "../lib/axios.js";

  const loadUserInfo = async () => {
    axios
      .get("/v1/auth/userinfo")
      .then((response) => {
        userStore.set(response.data);
        console.log("User info loaded:", response.data);
      })
      .catch((error) => {
        console.error("Failed to load user info:", error.message);
      });
  };

  onMount(() => {
    // console.log('header mounted');
    if ($userStore.id) {
      // console.log('User is logged in:', $userStore.id);
    } else {
      // console.log('User is not logged in');
      // get userinfo
      loadUserInfo();
    }
  });
</script>

<!-- {$userStore.id ? $userStore.id : 'not logged in'} -->

<nav class="navbar navbar-expand-lg navbar-dark bg-primary rtl">
  <a class="navbar-brand" href="/" use:link>
    <img
      alt="Logo"
      src="/images/logo.png"
      style="height: 40px; margin-left: 15px;margin-top: -10px;"
      class="d-none"
    />
    APP NAME
  </a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/home" use:link use:active>home</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="/about" use:link use:active>about</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="/posts" use:link use:active>posts</a>
      </li>

      <li class="nav-item">
        <a class="nav-link disabled" href="/foobar" use:link> ... </a>
      </li>

      {#if $userStore.id}
        <ul class="navbar-nav" id="currentUserMenu">
          <li class="nav-item dropdown rtl">
            <a
              class="nav-link dropdown-toggle"
              href="/#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              &nbsp; {$userStore.displayName} &nbsp;
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item text-right" href="/usercp" use:link
                >page 1</a
              >

              <div>
                <a class="dropdown-item text-right" href="/manage/cats" use:link
                  >page 2</a
                >
                <a class="dropdown-item" href="/manage/depts" use:link>page 3</a
                >
                <a class="dropdown-item" href="/manage/users" use:link>page 4</a
                >
                <a class="dropdown-item" href="/" use:link>Another action</a>
              </div>

              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#/logout" use:link>Logout</a>
            </div>
          </li>
        </ul>
      {/if}
    </ul>

    <form class="form-inline my-2 my-lg-0 d-none">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit"
        >Search</button
      >
    </form>
  </div>
</nav>
