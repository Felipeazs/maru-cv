<script lang="ts">
    // javascript code here
    export let herramientas: { nombre: string; value: string }[];
</script>

{#if herramientas.length}
    <div class="mb-8">
        <h3 class="uppercase font-bold">Herramientas computacionales</h3>
        <div class="my-5">
            {#each herramientas as h}
                <p class="col-span-4">{h.value}</p>
            {/each}
        </div>
    </div>
{/if}

<style>
</style>
