<script>
    export let show = false ; 
    export const show_loader = ()=>{
        console.log('show loader')
    }; 
</script>

{#if show }
    <div class="backdrop">

        <div class="lds-ripple"><div></div><div></div></div>

    </div>
{/if}


<style>
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  top: 300px;        
  left: 47vw;

}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}




    .backdrop {
        background-color: rgba(0, 0, 0, .3);
        width: 100%;
        height: 100vmax;
        display: block;
        /* position: absolute; */
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999
    }

</style>