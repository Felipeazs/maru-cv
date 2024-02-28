<script lang="ts">
    import { transform_title, extract_tags } from "../../utils/utils";

    import data, { type PDFTypes } from "../cv-store";
    import Tags from "../UI/Tags.svelte";
    import Sidebar from "../UI/Sidebar.svelte";
    import DetallesWrapper from "../UI/DetallesWrapper.svelte";
    import Hero from "../UI/Hero.svelte";
    import Selector from "../UI/Selector.svelte";
    import UpButton from "../UI/UpButton.svelte";

    import Todos from "../todos/Todos.svelte";
    import Perfil from "../todos/Perfil.svelte";

    let selection: string = "todos";
    let anio: number = 0;
    let especialidad: string = "todas";
    let selectedtags: { icono: string; nombre: string }[] = [];
    let alltags: { icono: string; nombre: string }[] = [];
    let items = [];
    let pdfItems: PDFTypes = {
        experiencia: [],
        empresa: [],
        educacion: [],
        proyecto: [],
        curso: [],
        presentacion: [],
        publicacion: [],
        items: 0,
    };

    $: selectedItems = $data[selection];
    $: title = transform_title(selection);
    $: if (selectedItems) items = selectedItems;
    $: alltags = extract_tags($data);

    const tagHandler = (event: Event) => {
        const tag_selected = Object((event as MouseEvent).detail);

        if (!selectedtags.some((t) => t.nombre === tag_selected.nombre)) {
            selectedtags = [...selectedtags, tag_selected];
        } else {
            selectedtags = selectedtags.filter(
                (s) => s.nombre !== tag_selected.nombre,
            );
        }

        const section = document.querySelector("#tag-ref");
        section.scrollIntoView(true);
    };
</script>

<main>
    <Hero />
    <Sidebar bind:pdfItems />
    <Selector
        bind:selection
        bind:anio
        bind:especialidad
        bind:alltags
        bind:selectedtags
        on:tag-click={tagHandler}
    />
    <div
        class="relative w-[95%] md:w-[87%] xl:w-[95%] m-auto h-full pt-[330px] md:pt-[200px] xl:pt-[120px] mb-32 lg:-ml-20 xl:ml-20"
    >
        <Tags bind:selectedtags />
        {#if selectedItems && selection !== "perfil"}
            <DetallesWrapper
                bind:title
                bind:anio
                bind:especialidad
                bind:items
                bind:selectedtags
                bind:pdfItems
                on:tag-click={tagHandler}
            />
        {:else if selection === "perfil"}
            <Perfil />
        {:else}
            <Todos
                bind:anio
                bind:especialidad
                bind:selection
                bind:selectedtags
                bind:pdfItems
                on:tag-click={tagHandler}
            />
        {/if}

        <UpButton />
    </div>
</main>
