<script lang="ts">
    import type { PublicacionTypes } from "../../cv-store";

    export let publicaciones: PublicacionTypes = [];
</script>

{#if publicaciones.length}
    <div class="my-8">
        <h3 class="uppercase font-bold">publicaciones</h3>
        {#each publicaciones as item}
            <div class="grid grid-cols-5 grid-auto-rows my-5">
                <span class="row-span-2">{item.fecha[0].split("|")[0]}</span>
                <span class="col-span-4">{item.titulo.join(", ")}</span>
            </div>
        {/each}
    </div>
{/if}

<style>
</style>
