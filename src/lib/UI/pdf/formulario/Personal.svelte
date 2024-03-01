<script lang="ts">
    import type { PDFTypes } from "../../../cv-store";

    const elements = [
        {
            nombre: "Nacionalidad",
            value: "Chilena",
        },
        {
            nombre: "Email",
            value: "maria.martinez@lazofoods.cl",
        },
        {
            nombre: "Celular",
            value: "+56 9 5257 0413",
        },
        { nombre: "LinkedIn", value: "memartinezv" },
        {
            nombre: "Google Scholar",
            value: "María Eugenia Martínez Valenzuela",
        },
        {
            nombre: "ORCID",
            value: "0000-0001-8455-7356",
        },
        {
            nombre: "Scopus Author ID",
            value: "57213207712",
        },
        {
            nombre: "Reseacher ID",
            value: "HDM-3938-2022",
        },
        {
            nombre: "CV Online",
            value: "https://maru-cv.vercel.app",
        },
    ];

    export let pdfItems: PDFTypes;

    let info = false;
    $: pdfItems.items -= pdfItems.personal.length;

    $: if (info) {
        pdfItems.personal = elements;
    } else {
        pdfItems.personal = [];
    }
</script>

<div>
    <h3 class="font-semibold uppercase">Datos personales</h3>
    <div class="divider p-0 m-0"></div>
    <div class="grid grid-cols-2 grid-rows-auto">
        <label>
            <input
                type="checkbox"
                name="personal"
                value={info}
                bind:checked={info}
            />
            Seleccionar todo
        </label>
        {#each elements as ele}
            <label>
                <input
                    type="checkbox"
                    name="personal"
                    value={ele}
                    bind:group={pdfItems.personal}
                />
                {ele.nombre}
            </label>
        {/each}
    </div>
</div>

<style>
</style>
