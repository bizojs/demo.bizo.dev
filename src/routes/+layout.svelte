<script>
  import Transition from "$lib/components/Transition.svelte"
  import "../app.css"
</script>

<div class="flex flex-col p-5">
  <Transition>
    <slot />
  </Transition>
</div>