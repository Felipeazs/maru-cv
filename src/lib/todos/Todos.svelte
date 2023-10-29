<script lang="ts">
    import Cursos from "./Cursos.svelte";
    import Diplomado from "./Diplomado.svelte";
    import Educacion from "./Educacion.svelte";
    import Empresas from "./Empresas.svelte";
    import ExperienciaLaboral from "./ExperienciaLaboral.svelte";
    import Premios from "./Premios.svelte";
    import Presentaciones from "./Presentaciones.svelte";
    import Proyectos from "./Proyectos.svelte";
    import Publicaciones from "./Publicaciones.svelte";
    import Seminarios from "./Seminarios.svelte";
    import Servicios from "./Servicios.svelte";
    import Vinculacion from "./Vinculacion.svelte";
    import Perfil from "./Perfil.svelte";

    // javascript code here
    export let selection: string;
    export let anio: number;
    export let especialidad: string;
    export let tag: string;
</script>

<div>
    {#if selection === "todos"}
        <Perfil />
    {/if}
    <ExperienciaLaboral bind:anio bind:especialidad bind:tag on:tag-click />
    <Proyectos bind:anio bind:especialidad bind:tag on:tag-click />
    <Educacion bind:anio bind:especialidad bind:tag on:tag-click />
    <Publicaciones bind:anio bind:especialidad bind:tag on:tag-click />
    <Presentaciones bind:anio bind:especialidad bind:tag on:tag-click />
    <Diplomado bind:anio bind:especialidad bind:tag on:tag-click />
    <Cursos bind:anio bind:especialidad bind:tag on:tag-click />
    <Seminarios bind:anio bind:especialidad bind:tag on:tag-click />
    <Premios bind:anio bind:especialidad bind:tag on:tag-click />
    <Vinculacion bind:anio bind:especialidad bind:tag on:tag-click />
    <Empresas bind:anio bind:especialidad bind:tag on:tag-click />
    <Servicios bind:anio bind:especialidad bind:tag on:tag-click />
</div>

<style>
</style>
