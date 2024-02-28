<script lang="ts">
    import type { ExperienciaTypes } from "../../cv-store";

    export let experiencias: ExperienciaTypes;
</script>

{#if experiencias.length}
    <div class="my-8">
        <h3 class="uppercase font-bold">Experiencia laboral</h3>
        {#each experiencias as item}
            <div class="grid grid-cols-5 grid-rows-auto my-5">
                <span class="row-span-2"
                    >{item.fecha[0].split("|")[1]} - {item.fecha[0].split(
                        "|",
                    )[0]}</span
                >
                <span class="col-span-4">
                    {#each item.titulo as titulo}
                        <p>{titulo}</p>
                    {/each}
                    <span class="col-span-4 font-semibold">{item.empresa}</span>
                </span>
            </div>
        {/each}
    </div>
{/if}

<style>
</style>
