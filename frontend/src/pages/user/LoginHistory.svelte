<script>
    import { onMount } from "svelte";
    import axios from "../../lib/axios.js";

    let loginHistory = [];

    const loadHistory = async () => {
        try {
            const response = await axios.get("/v1/user/login-history");
            loginHistory = response.data;
            console.log("Login history loaded:", loginHistory);
        } catch (error) {
            console.error("Error loading login history:", error);
        }
    };

    onMount(()=>{
        loadHistory(); 
    });
</script>

<div class="animated fadeIn">
    <h1>Login History</h1>
    <ul>
        {#each loginHistory as entry}
            <li>{entry.timestamp}: {entry.ipAddress}</li>
        {/each}
    </ul>
</div>
