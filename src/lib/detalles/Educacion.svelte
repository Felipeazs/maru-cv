<script lang="ts">
    export let item: any;
</script>

{#if item.educacion}
    {#each item?.educacion[0]?.split("|") as ed}
        <div class="flex flex-row gap-1 items-baseline justify-between">
            <p class="w-full">
                {ed}
            </p>
        </div>
    {/each}
{/if}

<style>
</style>
