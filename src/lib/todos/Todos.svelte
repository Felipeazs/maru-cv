<script lang="ts">
    import DetallesWrapper from "../UI/DetallesWrapper.svelte";

    import Perfil from "./Perfil.svelte";

    import data from "../cv-store";
    import { allItems, extractTitles } from "../../utils/utils";

    export let selection: string;
    export let anio: number;
    export let especialidad: string;
    export let tags: { icono: string; nombre: string }[];

    let foundItems = [];
    let titulos = [];
    $: titulos = extractTitles($data);
    $: foundItems = allItems($data);
</script>

<div>
    {#if selection === "todos" && !tags.length && especialidad === "todas" && anio === 0}
        <Perfil />
    {/if}
    {#each foundItems as items, i}
        <DetallesWrapper
            title={titulos[i]}
            {anio}
            {especialidad}
            {tags}
            bind:items
            on:tag-click
        />
    {/each}
</div>

<style>
</style>
