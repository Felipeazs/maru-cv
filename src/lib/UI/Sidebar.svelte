<script lang="ts">
    import Contact from "../Contact.svelte";
    import PreviewPdf from "./PreviewPDF.svelte";

    import maru from "/images/maru.webp";

    export let pdfItems: any[];
</script>

<div
    class="relative z-20 top-0 lg:right-0 h-full m-auto lg:fixed overflow-auto flex flex-col md:flex-row md:items-start lg:items-center md:bg-crema lg:flex-col w-full lg:w-[35%] xl:w-[25%] justify-center lg:bg-gris text-black items-center"
>
    <div class="relative h-full md:w-1/2">
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
