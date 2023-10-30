<script lang="ts">
    import RubroWrapper from "../UI/RubroWrapper.svelte";
    import DetallesWrapper from "../UI/DetallesWrapper.svelte";

    import Perfil from "./Perfil.svelte";

    import data from "../cv-store";
    import { allItems, extractTitles } from "../../utils/utils";

    export let selection: string;
    export let anio: number;
    export let especialidad: string;
    export let tag: string;

    let foundItems = [];
    let titulos = [];
    $: titulos = extractTitles($data);
    $: foundItems = allItems($data);
</script>

<div>
    {#if selection === "todos" && !tag && especialidad === "todas" && anio === 0}
        <Perfil />
    {/if}
    {#each foundItems as items, i}
        <RubroWrapper title={titulos[i]}>
            <DetallesWrapper
                bind:anio
                bind:especialidad
                bind:tag
                bind:items
                on:tag-click
            />
        </RubroWrapper>
    {/each}
</div>

<style>
</style>
