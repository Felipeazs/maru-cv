<script lang="ts">
    import { fade } from "svelte/transition";

    import PdfPage from "./pdf/PdfPage.svelte";

    export let pdfItems: any[];
</script>

{#if pdfItems.length}
    <div
        class="absolute bottom-1 right-1 z-30"
        transition:fade={{ delay: 0, duration: 200 }}
    >
        <label
            for="my_modal_6"
            class="btn btn-xs bg-transparent text-white border-2 border-slate-500 hover:bg-black lowercase"
            >preview cv</label
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
