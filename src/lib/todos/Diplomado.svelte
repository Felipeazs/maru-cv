<script lang="ts">
    import RubroWrapper from "../UI/RubroWrapper.svelte";
    import DetallesWrapper from "../UI/DetallesWrapper.svelte";

    import data from "../cv-store";
    import { sorting_items } from "../../utils/utils";

    export let anio: number;
    export let especialidad: string;
    export let tag: string;

    const { diplomados } = $data;

    $: items = sorting_items(diplomados, anio, especialidad);
</script>

<RubroWrapper title="diplomados">
    <DetallesWrapper bind:items bind:tag on:tag-click />
</RubroWrapper>
