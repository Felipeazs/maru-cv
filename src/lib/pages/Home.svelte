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
        class="absolute top-20 right-[6.5%] bottom-10 md:fixed md:top-10 md:right-[3%] overflow-auto flex flex-col w-[350px] rounded-[5px] gap-3 pb-5 px-5 bg-[rgba(8,11,13,0.9)] text-black"
    >
        <img
            src={maru}
            class="h-full w-full overflow-visible text-white object-top object-cover rounded-md"
            alt="foto_perfil"
        />
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
            class="fixed bottom-[50px] right-5 md:left-[50px] md:w-[80px] md:h-[80px] transition ease-in-out"
        >
            <button
                class="btn bg-black gap-0 text-white hover:text-black rounded-md w-full h-full btn-xs"
                on:click={resetTags}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    ><path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M7.32.029a8 8 0 0 1 7.18 3.307V1.75a.75.75 0 0 1 1.5 0V6h-4.25a.75.75 0 0 1 0-1.5h1.727A6.5 6.5 0 0 0 1.694 6.424A.75.75 0 1 1 .239 6.06A8 8 0 0 1 7.319.03Zm-3.4 14.852A8 8 0 0 0 15.76 9.94a.75.75 0 0 0-1.455-.364A6.5 6.5 0 0 1 2.523 11.5H4.25a.75.75 0 0 0 0-1.5H0v4.25a.75.75 0 0 0 1.5 0v-1.586a8 8 0 0 0 2.42 2.217Z"
                        clip-rule="evenodd"
                    /></svg
                >
                reiniciar tags</button
            >
        </div>
    {/if}
</main>

<style>
</style>
