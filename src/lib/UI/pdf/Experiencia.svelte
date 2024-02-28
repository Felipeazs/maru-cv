<script lang="ts">
    export let experiencias: any[];
</script>

{#if experiencias.length}
    <div class="my-8">
        <h3 class="uppercase font-bold">Experiencia laboral</h3>
        {#each experiencias as item}
            <div class="grid grid-cols-5 grid-rows-2 my-5">
                <span class="row-span-2"
                    >{item.fecha[0].split("|")[1]} - {item.fecha[0].split(
                        "|",
                    )[0]}</span
                >
                <span class="col-span-4">{item.titulo.join(", ")}</span>
                <span class="col-span-4 font-semibold">{item.empresa}</span>
            </div>
        {/each}
    </div>
{/if}

<style>
</style>
