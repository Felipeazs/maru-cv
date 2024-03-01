<script lang="ts">
    import type { PDFTypes } from "../../../cv-store";

    export let pdfItems: PDFTypes;

    const elements = [
        {
            nombre: "Profesión",
            value: "Ingeniero Civil Bioquímico, 2010, Pontificia Universidad Católica de Valparaíso.",
        },
        {
            nombre: "Grados académicos",
            value: "Magíster en Ciencias de la Ingeniería con mención en Ingeniería Bioquímica, 2012, Pontificia Universidad Católica de Valparaíso",
        },
    ];
</script>

<div>
    <h3 class="uppercase font-semibold">Formación profesional</h3>
    <div class="divider m-0"></div>

    <div class="grid grid-rows-auto">
        {#each elements as e}
            <label>
                <input
                    type="checkbox"
                    name="formacion"
                    value={e}
                    bind:group={pdfItems.formacion}
                />
                {e.nombre}
            </label>
        {/each}
    </div>
</div>

<style>
</style>
