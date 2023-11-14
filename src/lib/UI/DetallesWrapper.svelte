<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { fade } from "svelte/transition";

    import { tooltipy } from "./tooltip/tooltip";
    import { sorting_items } from "../../utils/utils";

    const dispatch = createEventDispatcher();

    export let anio: number;
    export let especialidad: string;
    export let tags: { icono: string; nombre: string }[];
    export let items: any[] = [];
    export let title: string;
    export let pdfItems = [];

    let now = new Date().getFullYear().toString();

    let filteredItems = [];
    $: items = sorting_items(items, anio, especialidad);
    $: if (tags?.length) {
        filteredItems = items;
        tags.forEach((t) => {
            filteredItems = [
                ...filteredItems.filter((i) => i.tags?.includes(t.nombre)),
            ];
        });
    } else {
        filteredItems = items;
    }

    const badgeHandler = (item: any) => {
        if (pdfItems.some((p) => p.id === item.id)) {
            pdfItems = pdfItems.filter((p) => p.id !== item.id);
            return;
        }

        if (item.educacion || item.proyecto || item.empresa) {
            pdfItems = [...pdfItems, item];
        }
    };

    const verHandler = (id: number) => {
        const element = document.getElementById(`mas-${id}`);
        const title = document.getElementById(`mas-title-${id}`);

        const isHidden = element.getAttribute("class") === "hidden";
        if (isHidden) {
            element.setAttribute(
                "class",
                "inline-block text-sm text-gris rounded-lg bg-[#fff] p-2 border-white border-2"
            );
            title.innerText = "ver menos";
        } else {
            element.setAttribute("class", "hidden");
            title.innerText = "ver más...";
        }
    };
</script>

{#if filteredItems.length > 0}
    <div
        class="relative z-10 flex flex-col gap-[2.5rem] w-[90%] lg:w-[75%] m-auto xl:m-0 bg-crema top-16 py-[2%] px-[2%] lg:px-[10%]"
    >
        <div class="flex flex-col gap-2">
            <div class="sticky top-0 pt-[50px] z-20 bg-crema">
                <div class="uppercase font-bold text-[1.5rem] leading-[2rem]">
                    {title}
                </div>
                <div class="divider-2 opacity-60" />
            </div>
            <div class="flex flex-col gap-8 pt-10">
                {#each filteredItems as item, i (item.id)}
                    <div
                        class="relative flex flex-col md:flex-row gap-5 md:gap-10 items-start"
                    >
                        {#if i !== filteredItems.length - 1}
                            <div
                                class="absolute hidden md:inline-block z-0 top-10 left-[5%] bg-[rgba(78,87,98,0.2)] h-full pl-[3px]"
                            />
                        {/if}
                        <button
                            class={item.educacion ||
                            item.proyecto ||
                            item.empresa
                                ? "indicator z-10 bg-[#fff] text-md text-black font-bold border-2 border-[rgba(78,87,98,0.8)] rounded-lg hover:cursor-pointer hover:border-yellow"
                                : "z-10 bg-[#fff] text-md text-black font-bold border-2 border-[rgba(78,87,98,0.8)] rounded-lg hover:cursor-auto"}
                            on:click={() => badgeHandler(item)}
                        >
                            {#if pdfItems.some((p) => p.id === item.id)}
                                <span
                                    class="indicator-item text-crema align-baseline badge badge-secondary bg-yellow border-yellow shadow-sm shadow-black"
                                    transition:fade={{
                                        delay: 0,
                                        duration: 100,
                                    }}
                                >
                                    {pdfItems.findIndex(
                                        (p) => p.id === item.id
                                    ) + 1}
                                </span>
                            {/if}
                            <div
                                class="flex flex-row-reverse md:flex-col justify-center items-center min-w-[105px] md:min-h-[50px]"
                            >
                                {#if item.fecha}
                                    {#each item.fecha[0]?.split("|") as fecha, i}
                                        <p>
                                            {fecha === now ? "presente" : fecha}
                                        </p>
                                        {#if i < item.fecha[0]?.split("|").length - 1}
                                            ・
                                        {/if}
                                    {/each}
                                {:else}
                                    {i + 1}
                                {/if}
                            </div>
                        </button>
                        <div class="w-full">
                            <div
                                class={`${
                                    item.logo
                                        ? "flex flex-col md:flex-row gap-5 md:gap-10 pb-3"
                                        : "flex flex-row"
                                }`}
                            >
                                <div
                                    class={`${
                                        item.logo
                                            ? "w-full md:w-[80%]"
                                            : "w-full"
                                    }`}
                                >
                                    <div class="py-1">
                                        {#if item.educacion}
                                            {#each item?.educacion as ed}
                                                <p>{ed}</p>
                                            {/each}
                                        {/if}
                                        {#if item.titulo}
                                            {#each item.titulo as title, i}
                                                <div
                                                    class="flex flex-row flex-wrap gap-1 items-baseline justify-between"
                                                >
                                                    <p class="w-max">
                                                        {item.titulo.length > 1
                                                            ? "・"
                                                            : ""}
                                                        {title}
                                                    </p>
                                                    {#if item.fecha?.length > 1}
                                                        <p
                                                            class="text-xs text-gray-400 min-w-[107px] text-start"
                                                        >
                                                            {item.fecha[i]
                                                                .split("|")
                                                                .reverse()
                                                                .join(" - ")}
                                                        </p>
                                                    {/if}
                                                </div>
                                            {/each}
                                        {/if}
                                        {#if item.proyecto}
                                            {#each item.proyecto as pro}
                                                <p>{pro}</p>{/each}
                                        {/if}
                                    </div>
                                    <p class="text-sm text-slate-500 italic">
                                        {item.cargo ?? ""}
                                    </p>
                                    <p
                                        class="text-sm text-slate-500 font-semibold"
                                    >
                                        {item.empresa ??
                                            item.institucion ??
                                            item.instituto ??
                                            ""}
                                    </p>
                                    {#if item.descripcion}
                                        <div
                                            class="flex flex-col items-start text-sm py-2 gap-1"
                                        >
                                            <p class="text-xs text-gray-400">
                                                descripción:
                                            </p>
                                            {#each item.descripcion.split("|") ?? [] as desc}
                                                <p class="text-gray-600">
                                                    {desc}
                                                </p>
                                            {/each}
                                            {#if item.mas}
                                                <button
                                                    id={`mas-title-${item.id}`}
                                                    class="btn btn-xs btn-gray text-gray-500 font-normal lowercase"
                                                    on:click={() =>
                                                        verHandler(item.id)}
                                                >
                                                    ver más...
                                                </button>
                                                <span
                                                    id={`mas-${item.id}`}
                                                    class="hidden"
                                                >
                                                    {#each item.mas[0].split("|") as mas}
                                                        <p>{mas}</p>
                                                        <br />
                                                    {/each}
                                                </span>
                                            {/if}
                                        </div>
                                    {/if}
                                    {#if item.aptitudes}
                                        <div
                                            class="flex flex-col justify-center items-baseline text-xs text-gray-400 py-1"
                                        >
                                            <p class="text-center">
                                                aptitudes:
                                            </p>
                                            <div
                                                class="flex flex-row flex-wrap gap-1 py-1 text-gray-500"
                                            >
                                                {item?.aptitudes
                                                    ?.join(" ・ ")
                                                    .replace(/_/g, " ")}
                                            </div>
                                        </div>
                                    {/if}
                                    {#if item.social.length}
                                        <p class="text-xs text-gray-400 py-1">
                                            rr.ss:
                                        </p>
                                        {#each item?.social as social}
                                            <a
                                                href={social.link}
                                                target="_blank"
                                                type="button"
                                                class="btn btn-xs w-max"
                                            >
                                                <img
                                                    src={social.icono}
                                                    alt={social.nombre}
                                                    width={15}
                                                />
                                            </a>
                                        {/each}
                                    {/if}
                                </div>
                                <div
                                    class={`${
                                        item.logo
                                            ? "flex justify-center w-[15%]"
                                            : ""
                                    }`}
                                >
                                    {#if item.logo}
                                        <img
                                            src={item.logo}
                                            alt={item.institucion ?? ""}
                                            class="object-contain"
                                        />
                                    {/if}
                                </div>
                            </div>
                            <div class="flex flex-row gap-1 items-center py-1">
                                {#if item.link || item.certificado}
                                    <p class="text-xs text-gray-400">
                                        {item.link
                                            ? "publicación"
                                            : "certificado"}:
                                    </p>
                                    <a
                                        use:tooltipy={{
                                            content: item.link
                                                ? "ver publicación"
                                                : "ver certificado",
                                        }}
                                        href={item.link || item.certificado}
                                        target="_blank"
                                        id="link-ref"
                                    >
                                        {item.link ? "📄" : "🔖"}</a
                                    >
                                {/if}
                            </div>
                            {#if item.tags}
                                <div
                                    class="flex flex-col justify-center items-baseline text-xs text-gray-400 pb-3"
                                >
                                    <p class="text-center">categorías:</p>
                                    <div
                                        class="flex flex-row flex-wrap gap-1 py-1"
                                    >
                                        {#each item.iconos as tag}
                                            <button
                                                class="btn btn-xs btn-light p-1 lowercase text-xs text-slate-600"
                                                on:click={() =>
                                                    dispatch("tag-click", tag)}
                                            >
                                                <img
                                                    src={tag.icono}
                                                    width={16}
                                                    height={"auto"}
                                                    alt="tag"
                                                />
                                                <p>
                                                    {tag.nombre.replace(
                                                        /_/g,
                                                        " "
                                                    )}
                                                </p>
                                            </button>
                                        {/each}
                                    </div>
                                </div>
                            {/if}
                            <hr class="w-full" />
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
{/if}
