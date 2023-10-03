<script lang="ts">
    import Cursos from "../Cursos.svelte";
    import Diplomado from "../Diplomado.svelte";
    import Educacion from "../Educacion.svelte";
    import Empresas from "../Empresas.svelte";
    import ExperienciaLaboral from "../ExperienciaLaboral.svelte";
    import Perfil from "../Perfil.svelte";
    import Premios from "../Premios.svelte";
    import Presentaciones from "../Presentaciones.svelte";
    import Proyectos from "../Proyectos.svelte";
    import Publicaciones from "../Publicaciones.svelte";
    import Seminarios from "../Seminarios.svelte";
    import Servicios from "../Servicios.svelte";
    import Hero from "../UI/Hero.svelte";
    import Selector from "../UI/Selector.svelte";
    import Vinculacion from "../Vinculacion.svelte";

    let selected: string = "perfil";
</script>

<Hero />
<Selector bind:selected />
{#if selected === "perfil"}
    <Perfil />
{:else if selected === "experiencia_laboral"}
    <ExperienciaLaboral />
{:else if selected === "diplomados"}
    <Diplomado />
{:else if selected === "educacion"}
    <Educacion />
{:else if selected === "cursos"}
    <Cursos />
{:else if selected === "vinculaciones"}
    <Vinculacion />
{:else if selected === "proyectos"}
    <Proyectos />
{:else if selected === "seminarios"}
    <Seminarios />
{:else if selected === "servicios"}
    <Servicios />
{:else if selected === "empresas"}
    <Empresas />
{:else if selected === "publicaciones"}
    <Publicaciones />
{:else if selected === "presentaciones"}
    <Presentaciones />
{:else if selected === "premios"}
    <Premios />
{:else}
    <Perfil />
{/if}

<style>
</style>
