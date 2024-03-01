<script lang="ts">
    export let personal: { nombre: string; value: string }[] = [];
</script>

<div class="mb-8">
    <h3 class="uppercase text-center font-bold">
        María Eugenia Martinez Valenzuela
    </h3>
    {#if personal.length}
        <div class="grid grid-cols-5 grid-rows-5 my-5">
            {#each personal as p}
                <span>{p.nombre}</span>
                <span class="col-span-4">{p.value}</span>
            {/each}
        </div>
    {/if}
</div>

<style>
</style>
