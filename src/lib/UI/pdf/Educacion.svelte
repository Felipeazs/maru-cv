<script lang="ts">
    export let educaciones: any[];
</script>

{#if educaciones.length > 0}
    <div class="my-8">
        <h3 class="font-bold uppercase">Formación profesional</h3>
        {#each educaciones as item}
            {#each item.educacion[0].split("|") as ed}
                <div class="grid grid-cols-5 grid-rows-auto my-5">
                    <span>Título:</span>
                    <span class="col-span-4">{ed.split("・")[1] ?? ed}</span>
                    <span class="">Año:</span>
                    <span class="col-span-4"
                        >{item.fecha[0].split("|")[1]} -
                        {item.fecha[0].split("|")[0]}</span
                    >
                    <span class="">Institución:</span>
                    <span class="col-span-4 font-semibold"
                        >{item.institucion}</span
                    >
                </div>
            {/each}
        {/each}
    </div>
{/if}

<style>
</style>
