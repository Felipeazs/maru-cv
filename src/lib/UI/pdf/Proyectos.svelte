<script lang="ts">
    // javascript code here
    export let proyectos = [];
</script>

{#if proyectos.length}
    <div class="my-8">
        <h3 class="uppercase font-bold">participación en proyectos y asesorías a empresas</h3>
        {#each proyectos as item}
            <div class="grid grid-cols-5 grid-auto-rows my-5">
                <span class="row-span-2"
                    >{item.fecha[0].split("|")[1] ?? ''} - {item.fecha[0].split(
                        "|",
                    )[0]}</span
                >
                <span class="col-span-4 font-semibold">{item.cargo}</span>
                <span class="col-span-4">{item.proyecto.join(", ")}</span>
            </div>
        {/each}
    </div>
{/if}

<style>
</style>
