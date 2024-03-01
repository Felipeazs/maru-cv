<script lang="ts">
    import type { PDFTypes } from "../../../cv-store";

    export let pdfItems: PDFTypes;

    const elements = [
        {
            nombre: "Español",
            value: "Lengua materna.",
        },
        {
            nombre: "Inglés",
            value: "Intermediate level in speaking and writing.; GRE test: Verbal 520 points, Mathematics 730 points.; Cambridge English Test C1 - Effective Proficiency.; TOEIC 900 points. Level 2+.; Cursando Business English Program. ENEB - Escuala de Negocios Europea de Barcelona, España",
        },
        {
            nombre: "Alemán",
            value: "Nivel B1 Deutscher Akademischer Austausch Dienst (DAAD) - Pontificia Universidad Católica de Valparaíso, Chile.",
        },
    ];

    let info = false;

    $: if (info) {
        pdfItems.idiomas = elements;
    } else {
        pdfItems.idiomas = [];
    }
</script>

<div>
    <h3 class="uppercase font-semibold">Idiomas</h3>
    <div class="divider m-0"></div>
    <div class="grid grid-rows-auto">
        <label>
            <input
                type="checkbox"
                name="idiomas"
                value={info}
                bind:checked={info}
            />
            Seleccionar todo
        </label>
        {#each elements as ele}
            <label>
                <input
                    type="checkbox"
                    name="idiomas"
                    value={ele}
                    bind:group={pdfItems.idiomas}
                />
                {ele.nombre}
            </label>
        {/each}
    </div>
</div>

<style>
</style>
