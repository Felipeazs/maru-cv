<script lang="ts">
    export let item: any;

    const verHandler = (id: number) => {
        const element = document.getElementById(`mas-${id}`);
        const title = document.getElementById(`mas-title-${id}`);

        const isHidden = element.getAttribute("class").includes("hidden");

        if (isHidden) {
            element.setAttribute(
                "class",
                "inline-block text-sm text-gray-900 mt-2",
            );
            title.innerText = "ver menos";
        } else {
            element.setAttribute("class", "hidden");
            title.innerText = "ver más...";
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
                id={`mas-title-${item.id}`}
                class="btn btn-xs btn-gray text-gray-500 font-normal lowercase mt-1"
                on:click={() => verHandler(item.id)}
            >
                ver más...
            </button>
        {/if}
    </div>
{/if}

<style>
</style>
