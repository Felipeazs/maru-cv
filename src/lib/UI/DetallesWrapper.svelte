<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { fade } from "svelte/transition";

    import { tooltipy } from "./tooltip/tooltip";
    import { sorting_items } from "../../utils/utils";
    import check from "/images/check.svg";

    const dispatch = createEventDispatcher();

    export let anio: number;
    export let especialidad: string;
    export let tags: { icono: string; nombre: string }[];
    export let items: any[] = [];
    export let title: string;
    export let pdfItems = [];

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
                                class="absolute hidden md:inline-block z-0 top-10 left-[5%] bg-[rgba(13,60,85,0.1)] h-full pl-[3px]"
                            />
                        {/if}
                        <button
                            class={item.educacion ||
                            item.proyecto ||
                            item.empresa
                                ? "indicator z-10 bg-[#fff] text-md text-black font-bold rounded-lg hover:bg-[rgba(13,60,85,0.8)] hover:text-white hover:cursor-pointer"
                                : "z-10 bg-[#fff] text-md text-black font-bold rounded-lg hover:cursor-auto"}
                            on:click={() => badgeHandler(item)}
                        >
                            {#if pdfItems.find((p) => p.id === item.id)}
                                <span
                                    class="indicator-item badge badge-secondary"
                                    transition:fade={{
                                        delay: 0,
                                        duration: 100,
                                    }}
                                >
                                    <img src={check} alt="check" width={12} />
                                </span>
                            {/if}
                            <div
                                class="flex flex-row-reverse md:flex-col justify-center items-center min-w-[105px] md:min-h-[50px] p-1 border-2 border-[rgba(13,60,85,0.8)] rounded-lg"
                            >
                                {#if item.fecha}
                                    <p>
                                        {item.empresa &&
                                        item.fecha[0] === "2023"
                                            ? "presente"
                                            : item.fecha[0]}
                                    </p>
                                    <span>{item.fecha[1] ? "・" : ""}</span>
                                    <p>{item.fecha[1] ?? ""}</p>
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
                                        item.logo ? "w-[80%]" : "w-full"
                                    }`}
                                >
                                    <div class="py-1">
                                        {#each item.educacion?.split("|") ?? [] as ed}
                                            <p>{ed}</p>
                                        {/each}
                                        {#each item.titulo?.split("|") ?? [] as title}
                                            <p>{title}</p>
                                        {/each}
                                        {#each item.proyecto?.split("|") ?? [] as pro}
                                            <p>{pro}</p>
                                        {/each}
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
                                        <div class="flex flex-col text-sm py-2">
                                            <p class="text-xs text-gray-400">
                                                descripción:
                                            </p>
                                            {#each item.descripcion.split("|") ?? [] as desc}
                                                <p class="text-gray-600">
                                                    {desc}
                                                </p>
                                            {/each}
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
                                    <p class="text-center">tags:</p>
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
