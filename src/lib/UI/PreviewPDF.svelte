<script lang="ts">
    import { fade } from "svelte/transition";
    import { tooltipy } from "../UI/tooltip/tooltip";

    import PdfPage from "./pdf/PdfPage.svelte";

    export let pdfItems: any[];
</script>

{#if pdfItems.length}
    <div
        class="absolute bottom-0 right-0 z-30"
        transition:fade={{ delay: 0, duration: 200 }}
    >
        <label
            for="my_modal_6"
            class="btn btn-xs bg-transparent text-gray-300 border-2 border-slate-800 hover:bg-black"
            use:tooltipy={{ content: "preview cv", placement: "left" }}>p</label
        >
        <input type="checkbox" id="my_modal_6" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box max-w-[1000px]">
                <PdfPage bind:pdfItems />
            </div>
            <label class="modal-backdrop" for="my_modal_6">Close</label>
        </div>
    </div>
{/if}
