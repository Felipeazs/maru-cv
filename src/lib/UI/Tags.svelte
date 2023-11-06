<script lang="ts">
    import { fade } from "svelte/transition";

    import { tooltipy } from "../UI/tooltip/tooltip";

    export let tags = [];

    $: window.addEventListener("scroll", (event) => {
        const section = document.getElementById("tags-section");
        if (section === null) return;

        section.style.visibility = "hidden";
        section.style.opacity = "0";

        if (window.scrollY > 380) {
            section.style.visibility = "visible";
            section.style.opacity = "1";
        }

        section.style.transition = "visibility 0.5s, opacity 0.2s ease-out";
    });

    const limpiarTag = (i: number) => {
        tags = tags.filter((_, index) => index !== i);

        const section = document.querySelector("#tag-ref");
        section.scrollIntoView(true);
    };
</script>

{#if tags.length}
    <div
        class="flex flex-row flex-wrap gap-1 h-min justify-center items-center p-2 mx-3 mt-16 md:fixed md:z-50 md:right-[10%] md:bottom-[75px] lg:m-0 lg:left-10 lg:top-80 lg:w-min lg:h-min bg-[#fff] border-4 border-crema rounded-md"
        id="tags-section"
    >
        <p class="w-max font-semibold text-black">tags:</p>
        {#each tags as tag, i}
            <button
                class="relative w-max bg-black border-2 border-gray-300 rounded-md justify-center items-center px-4 py-1 transition ease-in-out delay-75 hover:scale-110 hover:text-red-500"
                use:tooltipy={{
                    content: tag.nombre.replace(/_/g, " "),
                    placement: "right",
                }}
                transition:fade={{ delay: 0, duration: 200 }}
                on:click={() => limpiarTag(i)}
            >
                <img src={tag.icono} width={20} alt="icono" />
                <span
                    class="absolute top-0 right-1 text-white p-0 m-0 lowercase text-[10px]"
                    >✕</span
                >
            </button>
        {/each}
    </div>
{/if}
