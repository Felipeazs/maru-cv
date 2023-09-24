<script lang="ts">
    export let selected: string = "";
</script>

<div
    class="relative w-[50%] pt-[480px] md:pt-[420px] xl:pt-[35px] ps-[10%] pb-10"
>
    <div class="absolute z-10">
        <p>Selecciona un rubro</p>
        <select
            class="select select-bordered select-sm w-[200px]"
            bind:value={selected}
        >
            <option value="perfil">Perfil</option>
            <option value="experiencia_laboral">Experiencia laboral</option>
        </select>
    </div>
</div>

<style>
</style>
