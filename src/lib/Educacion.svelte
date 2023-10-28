<script lang="ts">
    import RubroWrapper from "./UI/RubroWrapper.svelte";
    import DetallesWrapper from "./UI/DetallesWrapper.svelte";

    import data from "./cv-store";
    import { sorting_items } from "../utils/utils";

    export let anio: number;
    export let especialidad: string;

    const { educacion } = $data;
    $: items = sorting_items(educacion, anio, especialidad);
</script>

<RubroWrapper title="Educación">
    <DetallesWrapper bind:items />
</RubroWrapper>

<style>
</style>
