<script>
  import Transition from "$lib/components/Transition.svelte"
  import "../app.css"

  export let data
</script>

<div class="flex flex-col p-5">
  <Transition url={data.url}>
    <slot />
  </Transition>
</div>