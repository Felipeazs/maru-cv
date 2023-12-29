<script lang="ts">
    import { fade } from "svelte/transition";
    import { tooltipy } from "./tooltip/tooltip";

    import trash from "/images/trash.svg";

    import PdfPage from "./pdf/PdfPage.svelte";

    export let pdfItems: any[];
</script>

{#if pdfItems.length}
    <div
        class="absolute bottom-1 right-3 z-30 flex flex-row items-center gap-2"
        transition:fade={{ delay: 0, duration: 200 }}
    >
        <label
            for="my_modal_6"
            class="btn btn-xs bg-transparent text-white border-2 border-gris hover:bg-transparent hover:border-yellow lowercase transition ease-in-out delay-75 hover:scale-110"
            >preview cv</label
        >
        <input type="checkbox" id="my_modal_6" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box max-w-[90%]">
                <PdfPage bind:pdfItems />
            </div>
            <label class="modal-backdrop" for="my_modal_6">Close</label>
        </div>
        <button
            class="indicator btn btn-xs bg-transparent text-white border-2 border-gris hover:bg-transparent hover:border-yellow lowercase transition ease-in-out delay-75 hover:scale-110"
            use:tooltipy={{ content: "limpiar cv" }}
            on:click={() => (pdfItems = [])}
        >
            <span
                class="indicator-item text-crema align-baseline badge badge-secondary bg-gris border-gris shadow-sm shadow-black w-0 text-xs"
                transition:fade={{
                    delay: 0,
                    duration: 100,
                }}
            >
                {pdfItems.length}
            </span>
            <img src={trash} alt="el" width={15} height={15} />
        </button>
    </div>
{/if}
