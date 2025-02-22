<script lang="ts">
    import { fade } from "svelte/transition";

    import { allowedElements, sorting_items } from "../../utils/utils";
    import type { DataTypes, PDFTypes } from "../cv-store";

    import Sociales from "../detalles/Sociales.svelte";
    import Descripcion from "../detalles/Descripcion.svelte";
    import Logo from "../detalles/Logo.svelte";
    import Certificados from "../detalles/Certificados.svelte";
    import Categorias from "../detalles/Categorias.svelte";
    import Fecha from "../detalles/Fecha.svelte";
    import Educacion from "../detalles/Educacion.svelte";
    import Titulo from "../detalles/Titulo.svelte";
    import Proyecto from "../detalles/Proyecto.svelte";
    import Subtitulos from "../detalles/Subtitulos.svelte";
    import Financiamiento from "../detalles/Financiamiento.svelte";
    import Perfil from "../todos/Perfil.svelte";

    export let anio: number;
    export let especialidad: string;
    export let selectedtags: { icono: string; nombre: string }[];
    export let items: DataTypes[] = [];
    export let title: string;
    export let pdfItems: PDFTypes;

    let filteredItems: any[] = [];
    $: items = sorting_items(items, anio, especialidad);
    $: if (selectedtags?.length) {
        filteredItems = items;
        selectedtags.forEach((t) => {
            filteredItems = [
                ...filteredItems.filter((i) => i.tags?.includes(t.nombre)),
            ];
        });
    } else {
        filteredItems = items;
    }

    const badgeHandler = (item: any) => {
        if (allowedElements.includes(item.tipo)) {
            let itemPDF = pdfItems[item.tipo];

            const isItem = itemPDF?.some((p: typeof item) => p.id === item.id);

            if (isItem) {
                pdfItems[item.tipo] = itemPDF.filter(
                    (p: typeof item) => p.id !== item.id,
                );
                pdfItems.items--;
            } else {
                pdfItems = {
                    ...pdfItems,
                    [item.tipo]: [...itemPDF, item],
                };

                pdfItems.items++;
            }
        }
    };

    const seleccionarTodoHandler = (title: string) => {
        if (!allowedElements.includes(title)) return;

        const items = filteredItems.filter((fi) => fi.tipo === title);

        const isElement = pdfItems[title].length;

        if (isElement > 0) {
            pdfItems.items -= pdfItems[title].length;
            pdfItems[title] = [];
        } else {
            pdfItems[title] = items;
            pdfItems.items += pdfItems[title].length;
        }
    };
</script>

{#if filteredItems.length > 0}
    <div
        class="relative z-0 flex flex-col gap-[2.5rem] w-[90%] lg:w-[75%] m-auto xl:m-0 bg-crema
        top-16 py-[2%] px-[2%] lg:px-[10%]"
    >
        <div class="flex flex-col gap-2">
            <div class="sticky top-0 pt-[50px] z-20 bg-crema">
                <div
                    class="flex justify-between items-center uppercase font-bold text-[1.5rem] leading-[2rem]"
                >
                    {title}
                    {#if allowedElements.includes(title)}
                        <input
                            type="checkbox"
                            checked={pdfItems[title]?.length ===
                            filteredItems.length
                                ? true
                                : false}
                            class="tooltip"
                            data-tip={`seleccionar ${title}`}
                            on:click={() => seleccionarTodoHandler(title)}
                        />
                    {/if}
                </div>
                <div class="divider-2 opacity-60" />
            </div>
            <div class="flex flex-col gap-8 pt-10">
                {#each filteredItems as item, index (item.id)}
                    {#if item.tipo !== "perfil"}
                        <div
                            class="relative flex flex-col md:flex-row gap-5 md:gap-10 items-start"
                        >
                            {#if index !== filteredItems.length - 1}
                                <div
                                    class="absolute hidden md:inline-block z-0 top-10 left-[5%]
                                bg-[rgba(78,87,98,0.2)] h-full pl-[3px]"
                                />
                            {/if}
                            <button
                                class={allowedElements.includes(item.tipo)
                                    ? "indicator z-10 bg-[#fff] text-md text-black font-bold border-2 border-[rgba(78,87,98,0.8)] rounded-lg hover:cursor-pointer hover:border-yellow"
                                    : "z-10 bg-[#fff] text-md text-black font-bold border-2 border-[rgba(78,87,98,0.8)] rounded-lg hover:cursor-auto"}
                                on:click={() => badgeHandler(item)}
                            >
                                {#if pdfItems[item.tipo]?.some((p) => p.id === item.id)}
                                    <span
                                        class="indicator-item text-crema align-baseline badge
                                    badge-secondary bg-yellow border-yellow shadow-sm shadow-black"
                                        transition:fade={{
                                            delay: 0,
                                            duration: 100,
                                        }}
                                    >
                                        {pdfItems[item.tipo]?.findIndex(
                                            (p) => p.id === item.id,
                                        ) + 1}
                                    </span>
                                {/if}
                                <Fecha bind:item />
                            </button>
                            <div class="w-full">
                                <div
                                    class={`${
                                        item.logo
                                            ? "flex flex-col gap-5 md:flex-row md:gap-1 md:items-start pb-3"
                                            : "flex flex-row"
                                    }`}
                                >
                                    <div
                                        class={`${
                                            item.logo
                                                ? "w-full md:w-[80%]"
                                                : "w-full"
                                        }`}
                                    >
                                        <div class="py-1">
                                            <Educacion bind:item />
                                            <Titulo bind:item />
                                            <Proyecto bind:item />
                                        </div>
                                        <Subtitulos bind:item />
                                        <Descripcion bind:item />
                                        <Financiamiento bind:item />
                                        <Sociales bind:item />
                                    </div>
                                    <Logo bind:item />
                                </div>
                                <Certificados bind:item />
                                <Categorias
                                    bind:item
                                    bind:selectedtags
                                    on:tag-click
                                />
                                <hr class="w-full" />
                            </div>
                        </div>
                    {:else}
                        <Perfil />
                    {/if}
                {/each}
            </div>
        </div>
    </div>
{/if}
