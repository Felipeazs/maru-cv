<script lang="ts">
    import RubroWrapper from "../UI/RubroWrapper.svelte";
    import DetallesWrapper from "../UI/DetallesWrapper.svelte";

    import data from "../cv-store";
    import { sorting_items } from "../../utils/utils";

    export let anio: number;
    export let especialidad: string;
    export let tag: string;

    const { vinculaciones } = $data;
    $: items = sorting_items(vinculaciones, anio, especialidad);
</script>

<RubroWrapper title="Vinculación con el medio">
    <DetallesWrapper bind:items bind:tag on:tag-click />
</RubroWrapper>
