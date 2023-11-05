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
    export let title: string;

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

{#if filteredItems.length > 0}
    <div
        class="relative z-10 flex flex-col gap-[2.5rem] w-[90%] lg:w-[75%] m-auto xl:m-0 bg-crema top-16 py-[5%] px-[2%] lg:px-[10%]"
    >
        <div class="flex flex-col gap-2">
            <div class="uppercase font-bold text-[1.5rem] leading-[2rem]">
                {title}
            </div>
            <div class="divider-2 opacity-60" />
            <div class="flex flex-col gap-8 pt-10">
                {#each filteredItems as item, i}
                    <div
                        class="relative flex flex-col md:flex-row gap-5 md:gap-10 items-start"
                    >
                        {#if i !== filteredItems.length - 1}
                            <div
                                class="absolute hidden md:inline-block z-0 top-10 left-[5%] bg-stone-200 h-full pl-[3px]"
                            />
                        {/if}
                        <div
                            class="z-10 bg-[#fff] text-md text-black font-bold rounded-lg"
                        >
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
                            <div
                                class={`${
                                    item.logo
                                        ? "flex flex-col md:flex-row gap-5 md:gap-10 pb-3"
                                        : "flex flex-row"
                                }`}
                            >
                                <div
                                    class={`${
                                        item.logo ? "w-[80%]" : "w-full"
                                    }`}
                                >
                                    <p class="">
                                        {item.titulo ?? ""}
                                    </p>
                                    <p class="text-sm text-slate-500 italic">
                                        {item.cargo ?? ""}
                                    </p>
                                    <p
                                        class="text-sm text-slate-500 font-semibold"
                                    >
                                        {item.empresa ??
                                            item.institucion ??
                                            item.instituto ??
                                            ""}
                                    </p>
                                    <div
                                        class="flex flex-col text-sm text-slate-500 py-2"
                                    >
                                        {#if item.descripcion}
                                            <p class="underline">
                                                descripción:
                                            </p>
                                            <p>
                                                {item.descripcion}
                                            </p>
                                        {/if}
                                    </div>
                                </div>
                                <div
                                    class={`${
                                        item.logo ? "w-[15%]" : ""
                                    }`}
                                >
                                    {#if item.logo}
                                        <img
                                            src={item.logo}
                                            alt={item.institucion ?? ""}
                                            class="object-cover"
                                        />
                                    {/if}
                                </div>
                            </div>
                            <div class="py-1">
                                {#if item.link || item.certificado}
                                    <a
                                        href={item.link || item.certificado}
                                        use:tooltip
                                        data-tooltip={item.link
                                            ? "ver publicación"
                                            : "ver certificado"}>🔗</a
                                    >
                                {/if}
                            </div>
                            {#if item.tags}
                                <div
                                    class="flex flex-col justify-center items-baseline text-xs text-gray-400 pb-3"
                                >
                                    <p class="text-center">tags:</p>
                                    <div
                                        class="flex flex-row flex-wrap gap-1 py-1"
                                    >
                                        {#each item.iconos as tag}
                                            <button
                                                class="btn btn-xs btn-light p-1 lowercase text-xs text-slate-600"
                                                on:click={() =>
                                                    dispatch("tag-click", tag)}
                                            >
                                                <img
                                                    src={tag.icono}
                                                    width={16}
                                                    height={"auto"}
                                                    alt=""
                                                />
                                                <p>
                                                    {tag.nombre.replace(
                                                        /_/g,
                                                        " "
                                                    )}
                                                </p>
                                            </button>
                                        {/each}
                                    </div>
                                </div>
                            {/if}
                            <hr class="w-full" />
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
{/if}

<style>
</style>
