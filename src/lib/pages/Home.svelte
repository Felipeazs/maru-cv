<script lang="ts">
    import { transform_title } from "../../utils/utils";

    import DetallesWrapper from "../UI/DetallesWrapper.svelte";
    import Hero from "../UI/Hero.svelte";
    import RubroWrapper from "../UI/RubroWrapper.svelte";
    import Selector from "../UI/Selector.svelte";
    import Contact from "../Contact.svelte";

    import Todos from "../todos/Todos.svelte";
    import Perfil from "../todos/Perfil.svelte";

    let selection: string = "todos";
    let anio: number = 0;
    let especialidad: string = "todas";
    let tag: string;
    let items = [];
    let showTagHandler: boolean = false;
    let xScroll = 0;

    import data from "../cv-store";

    $: selectedItems = $data[selection];
    $: title = transform_title(selection);
    $: if (selectedItems) items = selectedItems;
    $: xScroll = window.innerWidth <= 400 ? 2340 : 700;

    const tagHandler = (event: Event) => {
        tag = (event as MouseEvent).detail.toString();
        showTagHandler = true;

        window.scrollTo(0, xScroll);
    };

    const resetTags = () => {
        tag = "";
        showTagHandler = false;

        window.scrollTo(0, xScroll);
    };
</script>

<main>
    <Hero />
    <div
        class="absolute top-20 right-[6.5%] bottom-0 md:fixed md:top-10 md:right-[3%] overflow-auto flex flex-col w-[350px] rounded-[5px] py-5 px-5 bg-black text-black"
    >
        <img class="h-[400px] text-white" alt="foto_perfil" />
        <Contact />
    </div>
    <Selector
        bind:showTagHandler
        bind:selection
        bind:anio
        bind:especialidad
        bind:tag
    />
    <div class="w-[95%] m-auto pt-[500px] md:pt-[100px] md:ml-20">
        {#if selectedItems && selection !== "perfil"}
            <RubroWrapper {title} {tag}>
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
    {#if showTagHandler}
        <div
            class="fixed bottom-[50px] right-5 md:left-[80px] md:w-[80px] md:h-[80px] transition ease-in-out"
        >
            <button
                class="btn bg-black text-white hover:text-black rounded-full w-full h-full btn-xs"
                on:click={resetTags}>🛠️ reiniciar tags</button
            >
        </div>
    {/if}
</main>

<style>
</style>
