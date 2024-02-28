<script lang="ts">
    import { fade } from "svelte/transition";
    import { tooltipy } from "./tooltip/tooltip";

    import trash from "/images/trash.svg";

    import CorfoPdf from "./pdf/CorfoPdf.svelte";
    import CustomPdf from "./pdf/CustomPdf.svelte";
    import type { PDFTypes } from "../cv-store";

    export let pdfItems: PDFTypes;

    const resetPDF = () => {
        pdfItems = {
            experiencia: [],
            empresa: [],
            educacion: [],
            proyecto: [],
            curso: [],
            presentacion: [],
            publicacion: [],
            items: 0,
        };
    };
</script>

{#if pdfItems.items > 0}
    <div
        class="absolute bottom-1 right-3 z-30 flex flex-row items-center gap-2"
        transition:fade={{ delay: 0, duration: 200 }}
    >
        <label
            for="my_modal_6"
            class="btn btn-xs bg-transparent text-white border-2 border-gris hover:bg-transparent hover:border-yellow lowercase transition ease-in-out delay-75 hover:scale-110"
            >corfo cv</label
        >
        <input type="checkbox" id="my_modal_6" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box max-w-[90%]">
                <CorfoPdf bind:pdfItems />
            </div>
            <label class="modal-backdrop" for="my_modal_6">Close</label>
        </div>
        <label
            for="my_modal_7"
            class="btn btn-xs bg-transparent text-white border-2 border-gris hover:bg-transparent hover:border-yellow lowercase transition ease-in-out delay-75 hover:scale-110"
            >custom cv</label
        >
        <input type="checkbox" id="my_modal_7" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box max-w-[55%] overflow-y-auto">
                <CustomPdf bind:pdfItems />
            </div>
            <label class="modal-backdrop" for="my_modal_7">Close</label>
        </div>
        <button
            class="indicator btn btn-xs bg-transparent text-white border-2 border-gris hover:bg-transparent hover:border-yellow lowercase transition ease-in-out delay-75 hover:scale-110"
            use:tooltipy={{ content: "limpiar cv" }}
            on:click={resetPDF}
        >
            <span
                class="indicator-item text-crema align-baseline badge badge-secondary bg-gris border-gris shadow-sm shadow-black w-0 text-xs"
                transition:fade={{
                    delay: 0,
                    duration: 100,
                }}
            >
                {pdfItems.items}
            </span>
            <img src={trash} alt="el" width={15} height={15} />
        </button>
    </div>
{/if}
