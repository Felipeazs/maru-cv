<script lang="ts">
    // javascript code here
    import { createEventDispatcher } from "svelte";

    import { tooltip } from "./tooltip/tooltip";
    import { sorting_items } from "../../utils/utils";

    const dispatch = createEventDispatcher();

    export let anio: number;
    export let especialidad: string;
    export let tags: { icono: string; nombre: string }[];
    export let items: any[] = [];

    let filteredItems = [];
    $: items = sorting_items(items, anio, especialidad);
    $: if (tags?.length) {
        filteredItems = items;
        tags.forEach((t) => {
            filteredItems = [
                ...filteredItems.filter((i) => i.tags?.includes(t.nombre)),
            ];
        });
    } else {
        filteredItems = items;
    }
</script>

{#if filteredItems.length === 0}
    <p>No existen elementos</p>
{/if}
{#each filteredItems as item, i}
    <div class="relative flex flex-col md:flex-row gap-5 md:gap-10 items-start">
        {#if i !== filteredItems.length - 1}
            <div
                class="absolute hidden md:inline-block z-0 top-10 left-[5%] bg-stone-200 h-full pl-[3px]"
            />
        {/if}
        <div class="z-10 bg-[#fff] text-md text-black font-bold rounded-lg">
            <div
                class="flex md:flex-col justify-center items-center min-w-[105px] md:min-h-[50px] p-1 border-2 border-[rgba(13,60,85,0.8)] rounded-lg"
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
            <p class="text-sm text-slate-500 italic">{item.cargo ?? ""}</p>
            <p class="text-sm text-slate-500 italic">
                {item.empresa ?? item.institucion ?? item.instituto ?? ""}
            </p>
            {#if item.description}
                <p class="text-sm text-slate-500 py-2">
                    {item.descripcion ?? ""}
                </p>
            {/if}
            {#if item.logo}
                <div class="flex flex-col md:flex-row gap-5 md:gap-10 pb-3">
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
                <div class="pt-3">
                    <a
                        href={item.link}
                        use:tooltip
                        data-tooltip="ver publicación">🔗</a
                    >
                </div>
            {/if}
            {#if item.tags}
                <div
                    class="flex flex-row items-baseline gap-2 text-xs font-semibold text-slate-500"
                >
                    <p>tags:</p>
                    <div class="flex flex-row flex-wrap gap-1 py-3">
                        {#each item.iconos as tag}
                            <button
                                class="btn btn-xs btn-light p-1 lowercase text-xs text-slate-600"
                                on:click={() => dispatch("tag-click", tag)}
                            >
                                <img
                                    src={tag.icono}
                                    width={16}
                                    height={"auto"}
                                    alt=""
                                />
                                <p>{tag.nombre.replace(/_/g, " ")}</p>
                            </button>
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
