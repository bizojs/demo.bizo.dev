<script>
    import { fade, scale } from "svelte/transition"
    import { createEventDispatcher } from "svelte"
    import { clickOutside } from "$lib/util"
    import { quintOut } from "svelte/easing"

    const dispatch = createEventDispatcher()

    $: input = ""

    export let title
    export let message

    function submit() {
        dispatch("complete", {
            response: input
        })
    }

    function cancel() {
        dispatch("close")
    }
</script>

<div transition:fade={{ duration: 100 }} class="flex items-center justify-center z-50 w-full h-full fixed top-0 left-0 bg-black/40 backdrop-blur-sm">
    <div
        use:clickOutside
        on:outclick={cancel}
        on:escape={cancel}
        transition:scale={{ duration: 150, start: 0.9, easing: quintOut }}
        class="flex flex-col lg:min-w-[30%] lg:w-[30%] w-[90%] min-h-[15rem] bg-dialog-light dark:bg-dialog-dark rounded-lg justify-between p-5 border-2 border-border-light/10 dark:border-border-dark/10"
    >
        <div class="flex flex-col gap-4">
            <h1 class="text-xl font-semibold">{title}</h1>
            <p class="text-base text-primary-light/80 dark:text-primary-dark/80">{message}</p>
        </div>
        <input type="text" bind:value={input} class="bg-btn-light/40 dark:bg-btn-dark/40 hover:bg-btn-light/60 dark:hover:bg-btn-dark/50 py-2 px-3 text-base rounded focus:bg-btn-light/60 dark:focus:bg-btn-dark/50" required>
        <div class="flex self-end gap-2">
            <button on:click={cancel} class="bg-btn-light/80 dark:bg-btn-dark/80 hover:bg-btn-light dark:hover:bg-btn-dark transition px-5 py-2 rounded">Cancel</button>
            <button on:click={submit} class="bg-btn-light/80 dark:bg-btn-dark/80 hover:bg-btn-light dark:hover:bg-btn-dark transition px-5 py-2 rounded">Submit</button>
        </div>
    </div>
</div>