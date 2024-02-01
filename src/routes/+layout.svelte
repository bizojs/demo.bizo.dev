<script>
  import Transition from "$lib/components/Transition.svelte"
  import Nav from "$lib/components/Nav.svelte"
  import "../app.css"
</script>


<div class="flex flex-col lg:p-5 p-2">
  <Nav />
  <Transition>
    <slot />
  </Transition>
</div>