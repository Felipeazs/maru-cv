<script lang="ts">
    import type { PDFTypes } from "../../cv-store";

    export let pdfItems: PDFTypes;
    export let tipo: string;
</script>

{#if pdfItems[tipo].length}
    <div class="mb-8">
        <h3 class="uppercase font-bold">Herramientas computacionales</h3>
        <div class="my-5">
            {#each pdfItems[tipo] as h}
                <p class="col-span-4">{h.titulo}</p>
            {/each}
        </div>
    </div>
{/if}

<style>
</style>
