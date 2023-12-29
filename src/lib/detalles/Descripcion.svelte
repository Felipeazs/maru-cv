<script lang="ts">
    import open_eyes from "/images/open_eyes.svg";
    import close_eyes from "/images/close_eyes.svg";

    export let item: any;

    const verHandler = (id: number) => {
        const element = document.getElementById(`mas-${id}`);
        const image = document.getElementById(`mas-image-${id}`);
        const button = document.getElementById(`mas-button-${id}`);

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

{#if item.descripcion}
    <div class="flex flex-col items-start text-sm py-2">
        <p class="text-xs text-gray-400">descripción:</p>
        {#each item.descripcion.split("|") ?? [] as desc}
            <p class="flex felx-col text-gray-900">
                {desc}
            </p>
        {/each}
        {#if item.mas}
            <span id={`mas-${item.id}`} class="hidden">
                {#each item.mas[0]?.split("|") ?? [] as mas}
                    <p>
                        {mas}
                    </p>
                {/each}
            </span>
            <button
                id={`mas-button-${item.id}`}
                class="tooltip btn btn-xs btn-gray text-gray-500 font-normal lowercase mt-1"
                data-tip="ver más"
                on:click={() => verHandler(item.id)}
            >
                <img src={open_eyes} alt="ojos" id={`mas-image-${item.id}`}/>
            </button>
        {/if}
    </div>
{/if}

<style>
</style>
