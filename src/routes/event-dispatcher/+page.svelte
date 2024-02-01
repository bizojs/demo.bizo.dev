<svelte:head>
	<title>Event Dispatcher - bizo demos</title>
</svelte:head>

<script>
	import { Dialog } from "$lib/components/examples"
	import { isValidHex } from "$lib/util"

	$: color = ""
	$: style = ""
	$: dialogOpen = false

	function handleComplete(e) {
		const { response } = e.detail
		color = response.replace("#", "")
		style = isValidHex(color) ? "#" + color : "inherit"
		toggleDialog()
	}
	function toggleDialog() {
		dialogOpen = !dialogOpen
	}
</script>

<div class="flex flex-col gap-10 lg:m-40">
	<p class="text-4xl lg:text-left text-center">
		{#if color}
			Your favourite color is: <span class="font-semibold" style="color: {style}">{color}</span>
		{:else}
			You don't have a favourite color!
		{/if}
	</p>
	<div class="flex flex-col gap-4">
		{#if color}
			<button on:click={() => color = ""} class="bg-secondary-light/80 dark:bg-secondary-dark/40 hover:bg-secondary-light dark:hover:bg-secondary-dark/50 w-fit transition px-5 py-2 rounded">Clear</button>
		{:else}
			<button on:click={toggleDialog} class="bg-secondary-light/80 dark:bg-secondary-dark/40 hover:bg-secondary-light dark:hover:bg-secondary-dark/50 w-fit transition px-5 py-2 rounded">Set your favourite color</button>
		{/if}
	</div>
</div>

{#if dialogOpen}
	<Dialog
		title="Question!"
		message="What's your favorite color?"
		on:complete={handleComplete}
		on:close={toggleDialog}
	/>
{/if}