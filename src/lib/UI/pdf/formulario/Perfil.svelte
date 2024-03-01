<script lang="ts">
    import type { PDFTypes } from "../../../cv-store";

    export let pdfItems: PDFTypes;

    const selectHandler = (event: any) => {
        const isChecked = event.target.checked;
        if (isChecked) pdfItems.items++;
        else pdfItems.items--;
    };
</script>

<div>
    <h3 class="uppercase font-semibold">Perfil</h3>
    <div class="divider m-0"></div>
    <label>
        <input type="checkbox" name="perfil" bind:checked={pdfItems.perfil} on:change={selectHandler} />
        Resumen profesional
    </label>
</div>

<style>
</style>
