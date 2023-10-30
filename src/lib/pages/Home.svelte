<script lang="ts">
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
    let tag: string;
    let items = [];

    import data from "../cv-store";

    $: selectedItems = $data[selection];
    $: title = transform_title(selection);
    $: if (selectedItems) items = selectedItems;
    $: xScroll = window.innerWidth <= 500 ? 2740 : 700;

    const tagHandler = (event: Event) => {
        tag = (event as MouseEvent).detail.toString();

        window.scrollTo(0, xScroll);
    };

    const resetTags = () => {
        tag = "";

        window.scrollTo(0, xScroll);
    };
</script>

<main>
    <Hero />
    <div
        class="relative z-10 m-auto bottom-10 md:fixed md:top-10 md:right-[3%] overflow-auto flex flex-col w-[90%] md:w-[350px] rounded-[5px] gap-3 pb-5 bg-[rgba(8,11,13,0.9)] text-black"
    >
        <img
            src={maru}
            class="relative z-10 md:h-full w-full overflow-visible text-white object-cover"
            alt="foto_perfil"
        />
        <Contact />
    </div>
    <Selector bind:selection bind:anio bind:especialidad bind:tag />
    <div class="w-[95%] m-auto pt-[300px] md:pt-[100px] md:ml-20">
        {#if tag}
            <div
                class="fixed z-10 right-[450px] bg-[#fff] border-2 border-black rounded-md flex flex-row items-center gap-3 p-2"
            >
                <p class="italic text-sm">
                    {selection}: {tag.replace(/_/g, " ")}
                </p>
                <button
                    class="btn btn-xs btn-transparent text-xs lowercase border-2 border-black"
                    on:click={resetTags}>x</button
                >
            </div>
        {/if}
        {#if selectedItems && selection !== "perfil"}
            <RubroWrapper {title}>
                <DetallesWrapper
                    bind:anio
                    bind:especialidad
                    bind:items
                    bind:tag
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
                bind:tag
                on:tag-click={tagHandler}
            />
        {/if}
    </div>
</main>

<style>
</style>
