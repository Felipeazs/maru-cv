<script lang="ts">
    // javascript code here
    import { tooltip } from "../UI/tooltip/tooltip";

    export let tags = [];

    const limpiarTag = (i: number) => {
        tags = tags.filter((_, index) => index !== i);

        const section = document.querySelector("#tag-ref");
        section.scrollIntoView(true);
    };
</script>

{#if tags.length}
    <div
        class="flex flex-row flex-wrap gap-1 h-min justify-center items-center p-2 mx-3 mt-16 md:fixed md:z-50 md:right-[5%] md:bottom-16 lg:m-0 lg:left-10 lg:top-80 lg:w-min lg:h-mingap-1 bg-[#fff] border-2 border-slate-300 rounded-md"
    >
        <p class="bg-[#fff] w-max font-semibold text-black">tags:</p>
        {#each tags as tag, i}
            <div
                class="flex flex-row w-max bg-black border-2 border-gris rounded-md justify-center items-center px-2 py-1"
            >
                <img
                    src={tag.icono}
                    width={20}
                    alt="icono"
                    use:tooltip
                    data-tooltip={tag.nombre.replace(/_/g, " ")}
                />
                <button
                    class="btn btn-xs btn-ghost text-xs text-white"
                    on:click={() => limpiarTag(i)}
                >
                    <span>✕</span>
                </button>
            </div>
        {/each}
    </div>
{/if}

<style>
</style>
