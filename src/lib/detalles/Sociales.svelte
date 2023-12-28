<script lang="ts">
    export let item: any;
</script>

{#if item.social.length}
    <p class="text-xs text-gray-400 py-1">rr.ss:</p>
    {#each item?.social as social}
        <a
            href={social.link}
            target="_blank"
            type="button"
            class="btn btn-xs w-max mx-1"
        >
            <img src={social.icono} alt={social.nombre} width={15} />
        </a>
    {/each}
{/if}

<style>
</style>
