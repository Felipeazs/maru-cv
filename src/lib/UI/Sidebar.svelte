<script lang="ts">
    import Contact from "../Contact.svelte";
    import PreviewPdf from "./PreviewPDF.svelte";

    import maru from "/images/maru.webp";

    export let pdfItems: any[];
</script>

<div
    class="relative z-20 top-0 h-full m-auto lg:fixed lg:right-[3%] overflow-auto flex flex-col md:flex-row lg:flex-col w-full lg:w-[25%] justify-center bg-licorice text-black items-center"
>
    <div class="relative h-full">
        <img
            src={maru}
            class="h-full w-full overflow-visible md:overflow-x-hidden lg:overflow-visible text-white object-cover"
            alt="foto_perfil"
        />
        <div>
            <PreviewPdf bind:pdfItems />
        </div>
    </div>

    <Contact />
</div>
