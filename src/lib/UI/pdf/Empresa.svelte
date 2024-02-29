<script lang="ts">
    import type { EmpresaTypes } from "../../cv-store";

    export let empresas: EmpresaTypes = [];
</script>

{#if empresas.length}
    <div class="my-8">
        <h3 class="uppercase font-bold">Empresas</h3>
        {#each empresas as item}
            <div class="grid grid-cols-9 grid-auto-rows my-5">
                <span class="row-span-3 col-span-2"
                    >{item.titulo.join(", ")}</span
                >
                <span class="col-span-7 font-semibold">{item.cargo}</span>
                <span class="col-span-7">{item.descripcion ?? ""}</span>
                <span class="col-span-7">
                    <ul>
                        {#if item.mas}
                            {#each item.mas[0].split("|") as descripcion}
                                <li class="list-inside">{descripcion}</li>
                            {/each}
                        {/if}
                    </ul>
                </span>
            </div>
        {/each}
    </div>
{/if}

<style>
</style>
