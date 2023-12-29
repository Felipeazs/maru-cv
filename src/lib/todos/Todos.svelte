<script lang="ts">
    import DetallesWrapper from "../UI/DetallesWrapper.svelte";

    import Perfil from "./Perfil.svelte";

    import data from "../cv-store";
    import { allItems, extractTitles } from "../../utils/utils";

    export let selection: string;
    export let anio: number;
    export let especialidad: string;
    export let selectedtags: { icono: string; nombre: string }[];
    export let pdfItems = [];

    let foundItems = [];
    let titulos = [];
    $: titulos = extractTitles($data);
    $: foundItems = allItems($data);
</script>

{#if selection === "todos" && !selectedtags.length && especialidad === "todas" && anio === 0}
    <Perfil />
{/if}
{#each foundItems as items, i}
    <DetallesWrapper
        title={titulos[i]}
        {anio}
        {especialidad}
        {selectedtags}
        bind:items
        bind:pdfItems
        on:tag-click
    />
{/each}

<style>
</style>
