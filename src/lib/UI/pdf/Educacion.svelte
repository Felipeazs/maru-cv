<script lang="ts">
    import type { EducacionTypes } from "../../cv-store";

    export let educaciones: EducacionTypes;
</script>

{#if educaciones.length > 0}
    <div class="my-8">
        <h3 class="font-bold uppercase">Formación profesional</h3>
        {#each educaciones as item}
            {#each item.educacion[0].split("|") as ed}
                <div class="grid grid-cols-9 grid-rows-auto my-5">
                    <span class="col-span-2">Título</span>
                    <span class="col-span-7">{ed.split("・")[1] ?? ed}</span>
                    <span class="col-span-2">Año</span>
                    <span class="col-span-7"
                        >{item.fecha[0].split("|").reverse().join(" - ")}</span
                    >
                    <span class="col-span-2">Institución</span>
                    <span class="col-span-7 font-semibold"
                        >{item.institucion}</span
                    >
                </div>
            {/each}
        {/each}
    </div>
{/if}

<style>
</style>
