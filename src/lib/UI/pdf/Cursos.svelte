<script lang="ts">
    export let cursos = [];
</script>

{#if cursos.length}
    <div class="my-8">
        <h3 class="uppercase font-bold">
            cursos, capacitaciones y talleres dictados
        </h3>
        {#each cursos as item}
            <div class="grid grid-cols-5 grid-auto-rows my-5">
                <span class="row-span-2">{item.fecha[0].split("|")[0]}</span>
                <span class="col-span-4">{item.titulo.join(", ")}</span>
                <span class="col-span-4 font-semibold">{item.institucion}</span>
            </div>
        {/each}
    </div>
{/if}

<style>
</style>
