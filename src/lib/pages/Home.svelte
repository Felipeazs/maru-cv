<script lang="ts">
    import { transform_title } from "../../utils/utils";

    import DetallesWrapper from "../UI/DetallesWrapper.svelte";
    import Hero from "../UI/Hero.svelte";
    import Selector from "../UI/Selector.svelte";

    import Todos from "../todos/Todos.svelte";
    import Perfil from "../todos/Perfil.svelte";

    let selection: string = "todos";
    let anio: number = 0;
    let especialidad: string = "todas";
    let tags: { icono: string; nombre: string }[] = [];
    let items = [];

    import data from "../cv-store";
    import Tags from "../UI/Tags.svelte";
    import Sidebar from "../UI/Sidebar.svelte";

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
</script>

<main class="flex flex-col">
    <Hero />
    <Sidebar />
    <Selector bind:selection bind:anio bind:especialidad />
    <div
        class="w-[95%] m-auto h-full pt-[300px] mb-32 md:pt-[200px] xl:pt-[100px] lg:-ml-20 xl:ml-20"
    >
        <Tags bind:tags />
        {#if selectedItems && selection !== "perfil"}
            <DetallesWrapper
                bind:title
                bind:anio
                bind:especialidad
                bind:items
                bind:tags
                on:tag-click={tagHandler}
            />
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
