<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let item: any
    export let selectedtags: { icono: string; nombre: string }[];

    let sc = [];
    $: sc = selectedtags.map((s) => s.nombre);
</script>

                            {#if item.tags}
<div
    class="flex flex-col justify-center items-baseline text-xs text-gray-400 pb-3"
>
    <p class="text-center">categorías:</p>
    <div class="flex flex-row flex-wrap gap-1 py-1">
        {#each item.iconos as tag}
            <button
                class={sc.includes(tag.nombre)
                    ? "btn btn-xs btn-light lowercase text-xs text-white bg-yellow"
                    : "btn btn-xs btn-light lowercase text-xs text-slate-600"}
                on:click={() => dispatch("tag-click", tag)}
            >
                <img src={tag.icono} width={16} height={"auto"} alt="tag" />
                <p>
                    {tag.nombre.replace(/_/g, " ")}
                </p>
            </button>
        {/each}
    </div>
</div>
{/if}

<style>
</style>
