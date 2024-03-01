<script lang="ts">
    import type { PublicacionTypes } from "../../cv-store";

    export let publicaciones: PublicacionTypes = [];
</script>

{#if publicaciones.length}
    <div class="my-8">
        <h3 class="uppercase font-bold">publicaciones</h3>
        {#each publicaciones as item}
            <div class="grid grid-cols-9 grid-auto-rows my-5">
                <span class="row-span-2 col-span-2">
                    {item.fecha[0].split("|").reverse().join(" - ")}
                </span>
                <span class="col-span-7">
                    {#each item.titulo as titulo}
                        {titulo}
                    {/each}
                </span>
            </div>
        {/each}
    </div>
{/if}

<style>
</style>

