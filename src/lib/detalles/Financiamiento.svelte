<script lang="ts">
    import open_eyes from "/images/open_eyes.svg";
    import close_eyes from "/images/close_eyes.svg";

    export let item: any;

    const verHandler = (id: number) => {
        const element = document.getElementById(`mas-f-${id}`);
        const image = document.getElementById(`image-f-${id}`);
        const button = document.getElementById(`mas-f-button-${id}`);

        const isHidden = element.getAttribute("class").includes("hidden");

        if (isHidden) {
            element.setAttribute(
                "class",
                "inline-block text-sm text-gray-900 mt-2",
            );
            image.setAttribute("src", close_eyes)
            button.setAttribute("data-tip", "ver menos")
        } else {
            image.setAttribute("src", open_eyes)
            element.setAttribute("class", "hidden");
            button.setAttribute("data-tip", "ver más")
        }
    };
</script>

{#if item?.financiamiento?.length}
    <div class="flex flex-col items-start text-sm py-2">
        <p class="text-xs text-gray-400">financiamiento:</p>
        <div class="w-full">
            <div class="flex flex-col">
                <div class="flex flex-row gap-2">
                    <p>{item?.financiamiento[0]?.fecha}</p>
                    <span>-</span>
                    <p>{item?.financiamiento[0]?.titulo}</p>
                </div>
                <p class="text-xs text-slate-500 font-bold">
                    {item?.financiamiento[0]?.institucion?.join(", ") ?? ""}
                </p>
            </div>
        </div>
        <span id={`mas-f-${item.id}`} class="hidden">
            {#each item?.financiamiento as f, i}
                {#if i > 0}
                    <div class="w-full py-2">
                        <div class="flex flex-col">
                            <div class="flex flex-row gap-2">
                                <p>{f?.fecha}</p>
                                <span>-</span>
                                <p>{f?.titulo}</p>
                            </div>
                            <p class="text-xs text-slate-500 font-bold">
                                {f?.institucion?.length
                                    ? f?.institucion?.join(", ") ?? ""
                                    : ""}
                            </p>
                        </div>
                    </div>
                {/if}
            {/each}
        </span>
        {#if item.financiamiento.length > 1}
            <button
                id={`mas-f-button-${item.id}`}
                class="tooltip btn btn-xs btn-ghost text-gray-500 font-normal lowercase mt-1"
                data-tip="ver más"
                on:click={() => verHandler(item.id)
                }
            >
                <img src={open_eyes} alt="ojos" id={`image-f-${item.id}`}/>
            </button>
        {/if}
    </div>
{/if}

<style>
</style>
