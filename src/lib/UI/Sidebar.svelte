<script lang="ts">
    import Contact from "../Contact.svelte";
    import PreviewPdf from "./PreviewPDF.svelte";

    // import maru from "/images/maru.webp";
    import maru from "/images/maru2.png";

    export let pdfItems: any[];
</script>

<div
    class="relative z-30 top-0 lg:right-0 h-full m-auto lg:fixed overflow-auto flex flex-col md:flex-row md:items-start lg:items-center lg:flex-col w-full lg:w-[35%] xl:w-[25%] justify-center text-black items-center bg-transparent"
>
    <div
        class="relative h-1/3 w-1/2 md:w-1/3 lg:h-full lg:w-full bg-transparent"
    >
        <img
            src={maru}
            class="h-full w-full overflow-visible md:overflow-x-hidden lg:overflow-visible text-white object-cover"
            alt="foto_perfil"
            id="side-image"
        />
        <PreviewPdf bind:pdfItems />
    </div>

    <Contact />
</div>
<div
    class="absolute z-20 h-full top-[45%] md:top-[25%] lg:top-0 lg:right-0 lg:h-full m-auto lg:fixed overflow-auto flex flex-col md:flex-row md:items-start lg:items-center lg:flex-col w-full lg:w-[35%] xl:w-[25%] justify-center text-black items-center bg-gris"
>
    <div class="absolute top-0 bg-black bg-right w-full h-2/3 lg:h-1/3" />
</div>
