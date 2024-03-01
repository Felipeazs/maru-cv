<script lang="ts">
    // javascript code here
    export let idiomas: { nombre: string; value: string }[];
</script>

{#if idiomas.length}
    <div class="mb-8">
        <h3 class="uppercase font-bold">Idiomas</h3>
        <div class="my-5">
            {#each idiomas as h}
                <div class="grid grid-cols-9 grid-rows-auto my-5">
                    <span>{h.nombre}</span>
                    <span class="col-span-7">
                        {#each h.value.split(";") as v}
                            <p>{v}</p>
                        {/each}
                    </span>
                </div>
            {/each}
        </div>
    </div>
{/if}

<style>
</style>

