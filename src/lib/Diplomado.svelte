<script lang="ts">
    import RubroWrapper from "./UI/RubroWrapper.svelte";
    import DetallesWrapper from "./UI/DetallesWrapper.svelte";

    import data from "./cv-store";
    import { sorting_items } from "../utils/utils";

    export let anio: number;
    export let especialidad: string;

    const { diplomado } = $data;

    $: items = sorting_items(diplomado, anio, especialidad);
</script>

<RubroWrapper title="diplomados">
    <DetallesWrapper bind:items />
</RubroWrapper>
