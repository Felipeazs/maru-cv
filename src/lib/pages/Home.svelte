<script lang="ts">
    import Cursos from "../Cursos.svelte";
    import Diplomado from "../Diplomado.svelte";
    import Educacion from "../Educacion.svelte";
    import ExperienciaLaboral from "../ExperienciaLaboral.svelte";
    import Perfil from "../Perfil.svelte";
    import Proyectos from "../Proyectos.svelte";
    import Seminarios from "../Seminarios.svelte";
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
{:else}
    <Perfil />
{/if}

<style>
</style>
