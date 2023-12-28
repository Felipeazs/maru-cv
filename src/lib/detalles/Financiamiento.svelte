<script lang="ts">
    export let item: any;

    $: console.log(item);
</script>

{#if item?.financiamiento}
    <div class="flex flex-col items-start text-sm py-2">
        <p class="text-xs text-gray-400">financiamiento:</p>
        {#each item?.financiamiento as f}
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
        {/each}
    </div>
{/if}

<style>
</style>
