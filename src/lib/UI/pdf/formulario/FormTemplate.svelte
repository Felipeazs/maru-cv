<script lang="ts">
    import data, { type PDFTypes } from "../../../cv-store";

    export let pdfItems: PDFTypes;
    export let title: string;
    export let seccion: string;
    let elements = $data[seccion];

    let info = false;
    $: info = elements.length === pdfItems[seccion].length ? true : false;

    const changeHandler = () => {
        if (info) {
            pdfItems.items -= pdfItems[seccion].length;
            pdfItems[seccion] = [];
        } else {
            pdfItems.items += pdfItems[seccion].length;
            pdfItems[seccion] = elements;
        }
    };

    const selectHandler = (event: any) => {
        const isChecked = event.checked as HTMLInputElement;
        if (isChecked) pdfItems.items++;
        else pdfItems.items--;
    };

    let stitle: string;
    $: switch (seccion) {
        case "experiencias":
            stitle = "empresa";
            break;
        default:
            stitle = "titulo";
    }
</script>

<div class="collapse bg-base-200">
    <input type="checkbox" />
    <h3 class="collapse-title font-semibold uppercase">{title}</h3>
    <div class="collapse-content">
        <div class="grid grid-cols-1 grid-rows-auto">
            <label>
                <input
                    type="checkbox"
                    name={seccion}
                    value={info}
                    bind:checked={info}
                    on:change={changeHandler}
                />
                Seleccionar todo
            </label>
            {#each elements as e}
                <label>
                    <input
                        type="checkbox"
                        name={seccion}
                        value={e}
                        bind:group={pdfItems[seccion]}
                        on:change={selectHandler}
                    />
                    {e[stitle][0].split("|").join(" ").split("・")[1] ??
                        e[stitle]}
                </label>
            {/each}
        </div>
    </div>
</div>

<style>
</style>
