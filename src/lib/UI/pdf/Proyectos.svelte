<script lang="ts">
    import type { ProyectoTypes } from "../../cv-store";

    export let proyectos: ProyectoTypes = [];
</script>

{#if proyectos.length}
    <div class="my-8">
        <h3 class="uppercase font-bold">
            participación en proyectos y asesorías a empresas
        </h3>
        {#each proyectos as item}
            <div class="grid grid-cols-9 grid-auto-rows my-5">
                <span class="row-span-2 col-span-2">
                    {item.fecha[0].split("|").reverse().join(" - ")}
                </span>
                <span class="col-span-7 font-semibold">{item.cargo}</span>
                <span class="col-span-7">
                    {#each item.proyecto as proyecto}
                        {proyecto}
                    {/each}
                </span>
            </div>
        {/each}
    </div>
{/if}

<style>
</style>
