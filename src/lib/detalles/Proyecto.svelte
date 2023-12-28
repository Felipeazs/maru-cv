<script lang="ts">
    export let item: any;
</script>

{#if item.proyecto}
    {#each item.proyecto[0]?.split("|") as pro}
        <div class="flex flex-row gap-1 items-baseline justify-between">
            <p class="w-full">
                {pro}
            </p>
        </div>
    {/each}
{/if}

<style>
</style>
