<script lang="ts">
    import type { HerramientasTypes } from "../../cv-store";

    export let herramientas: HerramientasTypes
</script>

{#if herramientas.length}
    <div class="mb-8">
        <h3 class="uppercase font-bold">Herramientas computacionales</h3>
        <div class="my-5">
            {#each herramientas as h}
                <p class="col-span-4">{h.titulo}</p>
            {/each}
        </div>
    </div>
{/if}

<style>
</style>
