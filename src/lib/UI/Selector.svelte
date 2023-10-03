<script lang="ts">
    export let selected: string = "";
</script>

<div
    class="relative z-20 w-[50%] pt-[650px] md:pt-[520px] xl:pt-[35px] ps-[10%] pb-10"
>
    <div class="absolute z-10">
        <p>Selecciona un rubro</p>
        <select
            class="select select-bordered select-sm w-max"
            bind:value={selected}
        >
            <option value="cursos">Cursos</option>
            <option value="educacion">Educación</option>
            <option value="empresas">Empresas</option>
            <option value="experiencia_laboral">Experiencia laboral</option>
            <option value="diplomados">Diplomados</option>
            <option value="perfil">Perfil</option>
            <option value="premios">Premios</option>
            <option value="presentaciones"
                >Presentaciones internacionales</option
            >
            <option value="proyectos">Proyectos</option>
            <option value="publicaciones">Publicaciones</option>
            <option value="seminarios">Seminarios</option>
            <option value="servicios">Servicios</option>
            <option value="vinculaciones">Vinculación con el medio</option>
        </select>
    </div>
</div>
