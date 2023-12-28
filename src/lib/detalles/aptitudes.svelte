<script lang="ts">
    export let item: any;
</script>

{#if item.aptitudes}
    <div
        class="flex flex-col justify-center items-baseline text-xs text-gray-400 py-1"
    >
        <p class="text-center">aptitudes:</p>
        <div class="flex flex-row flex-wrap gap-1 py-1 text-gray-900">
            {item?.aptitudes?.join(" ・ ").replace(/_/g, " ")}
        </div>
    </div>
{/if}

<style>
</style>
