<script lang="ts">
    import Contact from "../Contact.svelte";

    import maru from "/images/maru.webp";
</script>

<div
    class="relative z-20 top-0 h-full m-auto lg:fixed lg:right-[3%] overflow-auto flex flex-col md:flex-row lg:flex-col w-full lg:w-[25%] justify-center gap-3 pb-5 md:pb-0 lg:pb-5 bg-black text-black"
>
    <img
        src={maru}
        class="relative z-10 h-full w-full overflow-visible md:overflow-x-hidden lg:overflow-visible text-white object-cover"
        alt="foto_perfil"
    />
    <Contact />
</div>

<style>
</style>
