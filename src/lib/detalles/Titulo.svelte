<script lang="ts">
    export let item: any;
</script>

{#if item.titulo}
    {#each item.titulo as title, i}
        <div class="flex flex-row gap-1 items-baseline justify-between">
            <p class="max-w-[80%]">
                {item.titulo.length > 1 ? "・" : ""}
                {title}
            </p>
            {#if item.fecha?.length > 1}
                <p class="text-xs text-gray-400 min-w-[107px] text-start">
                    {item.fecha[i].split("|").reverse().join(" - ")}
                </p>
            {/if}
        </div>
    {/each}
{/if}

<style>
</style>
