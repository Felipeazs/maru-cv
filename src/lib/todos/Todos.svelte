<script lang="ts">
    import DetallesWrapper from "../UI/DetallesWrapper.svelte";

    import data, { type PDFTypes } from "../cv-store";
    import { allItems, extractTitles } from "../../utils/utils";

    export let anio: number;
    export let especialidad: string;
    export let selectedtags: { icono: string; nombre: string }[];
    export let pdfItems: PDFTypes;

    let foundItems = [];
    let titulos = [];
    $: titulos = extractTitles($data);
    $: foundItems = allItems($data);
</script>

{#each foundItems as items, i}
    {#if titulos[i] !== "personal"}
        <DetallesWrapper
            title={titulos[i + 1]}
            {anio}
            {especialidad}
            {selectedtags}
            bind:items
            bind:pdfItems
            on:tag-click
        />
    {/if}
{/each}

<style>
</style>
