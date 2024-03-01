<script lang="ts">
    export let formacion: { nombre: string; value: string }[] = [];
</script>

{#if formacion.length}
    <div class="mb-8">
        <h3 class="uppercase font-bold">Formación profesional</h3>
        {#each formacion as p}
            <div class="grid grid-cols-9 grid-rows-auto my-5">
                <span class="col-span-2">{p.nombre}</span>
                <span class="col-span-7">
                    {#each p.value.split(",") as v}
                        <p>{v}</p>
                    {/each}
                </span>
            </div>
        {/each}
    </div>
{/if}
