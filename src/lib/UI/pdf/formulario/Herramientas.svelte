<script lang="ts">
    import type { PDFTypes } from "../../../cv-store";

    export let pdfItems: PDFTypes;

    const elements = [
        {
            nombre: "Desarrolladora Full Stack",
            value: "Desarrolladora Full Stack (Talento Digital)",
        },
        {
            nombre: "Python",
            value: "Python (Python Software Foundation)",
        },
        {
            nombre: "RISK",
            value: "@RISK and Decision Tool Suite (Palisade Corporation, USA)",
        },
        {
            nombre: "eSankey!",
            value: "eSankey! (iFu Hamburg, Germany)",
        },
        {
            nombre: "UMBERTO",
            value: "UMBERTO LCA+ (iFu Hamburg, Germany)",
        },
        {
            nombre: "Simapro",
            value: "Simapro (PRÉ Consultans, The Netherlands)",
        },
        {
            nombre: "SuperPro",
            value: "SuperPro Design (Intelligent Inc., USA)",
        },
        {
            nombre: "KNIME",
            value: "KNIME Analytic Software",
        },
    ];

    let info = false;

    const changeHandler = () => {
        if (info) {
            pdfItems.herramientas = elements;
            pdfItems.items += pdfItems.herramientas.length;
        } else {
            pdfItems.items -= pdfItems.herramientas.length;
            pdfItems.herramientas = [];
        }
    };

    const selectHandler = (event: any) => {
        const isChecked = event.target.checked;
        if (isChecked) pdfItems.items++;
        else pdfItems.items--;

        info = elements.length === pdfItems.herramientas.length ? true : false;
    };
</script>

<div>
    <h3 class="uppercase font-semibold">Herramientas computacionales</h3>
    <div class="divider m-0"></div>
    <div class="grid grid-cols-2 grid-rows-auto">
        <label>
            <input
                type="checkbox"
                name="herramientas"
                value={info}
                bind:checked={info}
                on:change={changeHandler}
            />
            Seleccionar todo
        </label>
        {#each elements as ele}
            <label>
                <input
                    type="checkbox"
                    name="herramientas"
                    value={ele}
                    bind:group={pdfItems.herramientas}
                    on:change={selectHandler}
                />
                {ele.nombre}
            </label>
        {/each}
    </div>
</div>

<style>
</style>
