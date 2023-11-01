<script lang="ts">
    import { tooltip } from "../UI/tooltip/tooltip";
    import { transform_title } from "../../utils/utils";

    import DetallesWrapper from "../UI/DetallesWrapper.svelte";
    import Hero from "../UI/Hero.svelte";
    import RubroWrapper from "../UI/RubroWrapper.svelte";
    import Selector from "../UI/Selector.svelte";
    import Contact from "../Contact.svelte";

    import Todos from "../todos/Todos.svelte";
    import Perfil from "../todos/Perfil.svelte";

    import maru from "/images/maru.webp";

    let selection: string = "todos";
    let anio: number = 0;
    let especialidad: string = "todas";
    let tags: { icono: string; nombre: string }[] = [];
    let items = [];

    import data from "../cv-store";

    $: selectedItems = $data[selection];
    $: title = transform_title(selection);
    $: if (selectedItems) items = selectedItems;

    const tagHandler = (event: Event) => {
        const tag_selected = Object((event as MouseEvent).detail);

        if (!tags.some((t) => t.nombre === tag_selected.nombre)) {
            tags = [...tags, tag_selected];

            const section = document.querySelector("#tag-ref");
            section.scrollIntoView(true);
        }
    };

    const limpiarTag = (i: number) => {
        tags = tags.filter((_, index) => index !== i);

        const section = document.querySelector("#tag-ref");
        section.scrollIntoView(true);
    };
</script>

<main>
    <Hero />
    <div
        class="relative z-10 top-0 h-full m-auto lg:fixed lg:right-[3%] overflow-auto flex flex-col md:flex-row lg:flex-col w-full lg:w-[25%] rounded-[5px] justify-center gap-3 pb-5 md:pb-0 lg:pb-5 bg-[rgba(8,11,13,0.9)] text-black"
    >
        <img
            src={maru}
            class="relative z-10 md:h-full w-full overflow-visible md:overflow-x-hidden lg:overflow-visible text-white object-cover"
            alt="foto_perfil"
        />
        <Contact />
    </div>
    <Selector bind:selection bind:anio bind:especialidad />
    <div
        class="w-[95%] m-auto pt-[300px] md:pt-[200px] xl:pt-[100px] lg:-ml-20 xl:ml-20"
    >
        {#if tags.length}
            <div
                class="w-max m-auto p-1 md:fixed md:z-50 md:right-[5%] lg:right-[30%] md:bottom-16 flex flex-row flex-wrap justify-center items-center gap-1 bg-[#fff] border-2 border-slate-300 rounded-md"
            >
                <p
                    class="bg-black border-2 border-white rounded-md w-max px-2 py-1 font-semibold text-white"
                >
                    tags
                </p>
                :
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
        {#if selectedItems && selection !== "perfil"}
            <RubroWrapper {title}>
                <DetallesWrapper
                    bind:anio
                    bind:especialidad
                    bind:items
                    bind:tags
                    on:tag-click={tagHandler}
                />
            </RubroWrapper>
        {:else if selection === "perfil"}
            <Perfil />
        {:else}
            <Todos
                bind:anio
                bind:especialidad
                bind:selection
                bind:tags
                on:tag-click={tagHandler}
            />
        {/if}
    </div>
</main>

<style>
</style>
