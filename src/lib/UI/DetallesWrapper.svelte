<script lang="ts">
    // javascript code here
    import { createEventDispatcher } from "svelte";

    //@ts-ignore
    import { tooltip } from "@svelte-plugins/tooltips";
    import { sorting_items } from "../../utils/utils";

    const dispatch = createEventDispatcher();

    export let anio: number;
    export let especialidad: string;
    export let tag: string;
    export let items: any[] = [];

    let filteredItems = [];

    $: items = sorting_items(items, anio, especialidad);
    $: if (tag) {
        filteredItems = items.filter((i) => i.tags?.includes(tag));
    } else {
        filteredItems = items;
    }
</script>

{#if filteredItems.length === 0}
    <p>No existen elementos</p>
{/if}
{#each filteredItems as item, i}
    <div class="flex flex-col md:flex-row gap-5 items-start md:items-center">
        <div class="bg-[#fff] text-md text-black font-bold p-1 rounded-lg">
            <div
                class="flex md:flex-col justify-center items-center md:min-w-[125px] md:min-h-[50px] p-1 border-2 border-[rgba(13,60,85,0.8)] rounded-lg"
            >
                {#if item.fecha}
                    <p>{item.fecha[0]}</p>
                    <span>{item.fecha[1] ? "・" : ""}</span>
                    <p>{item.fecha[1] ?? ""}</p>
                {:else}
                    {i + 1}
                {/if}
            </div>
        </div>
        <div class="w-full">
            <p class="">{item.titulo ?? ""}</p>
            <p class="text-sm text-slate-700">{item.cargo ?? ""}</p>
            <p class="text-sm text-slate-500 italic">
                {item.empresa ?? item.institucion ?? item.instituto ?? ""}
            </p>
            <p class="text-sm text-slate-500 py-2">
                {item.descripcion ?? ""}
            </p>
            {#if item.logo}
                <div
                    class="flex flex-col md:flex-row justify-center items-center gap-5 pb-3"
                >
                    <img
                        src={item.logo}
                        width={70}
                        height={50}
                        alt={item.universidad}
                        class="object-contain"
                    />
                    <div>
                        <p class="text-slate-900">
                            {item.formacion ?? ""}
                        </p>
                        <p class="text-sm text-slate-500">
                            {item.universidad}
                        </p>
                        <p class="text-sm text-slate-500 py-2">
                            {item.tesis ?? ""}
                        </p>
                    </div>
                </div>
            {/if}
            {#if item.link}
                <a
                    href={item.link}
                    use:tooltip={{
                        content: "ver publicación",
                        style: { color: "#fff" },
                    }}>🔗</a
                >
            {/if}
            {#if item.tags}
                <div
                    class="flex flex-row items-baseline gap-2 text-xs font-semibold text-slate-500"
                >
                    <p>tags:</p>
                    <div class="flex flex-row flex-wrap gap-1 py-3">
                        {#each item.tags as tag}
                            <button
                                class="btn btn-xs btn-light p-1 lowercase text-xs text-slate-500"
                                on:click={() => dispatch("tag-click", tag)}
                                >{tag.replace(/_/g, " ")}</button
                            >
                        {/each}
                    </div>
                </div>
            {/if}
            <hr class="w-full" />
        </div>
    </div>
{/each}

<style>
</style>
