<script lang="ts">
    import Contact from "../Contact.svelte";
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

    let selection: string = "todos";
    let anio: number = 0;
    let especialidad: string = "todas";
</script>

<main>
    <Hero />
    <div
        class="fixed top-10 bottom-0 right-[5%] overflow-auto flex flex-col w-[350px] rounded-[5px] py-5 px-10 bg-black text-black"
    >
        <img class="h-[400px]" alt="foto" />
        <Contact />
    </div>
    <Selector bind:selection bind:anio bind:especialidad />
    {#if selection === "perfil"}
        <Perfil />
    {:else if selection === "experiencia_laboral"}
        <ExperienciaLaboral bind:anio bind:especialidad />
    {:else if selection === "diplomados"}
        <Diplomado bind:anio bind:especialidad />
    {:else if selection === "educacion"}
        <Educacion bind:anio bind:especialidad />
    {:else if selection === "cursos"}
        <Cursos bind:anio bind:especialidad />
    {:else if selection === "vinculaciones"}
        <Vinculacion bind:anio bind:especialidad />
    {:else if selection === "proyectos"}
        <Proyectos bind:anio bind:especialidad />
    {:else if selection === "seminarios"}
        <Seminarios bind:anio bind:especialidad />
    {:else if selection === "servicios"}
        <Servicios bind:anio bind:especialidad />
    {:else if selection === "empresas"}
        <Empresas bind:anio bind:especialidad />
    {:else if selection === "publicaciones"}
        <Publicaciones bind:anio bind:especialidad />
    {:else if selection === "presentaciones"}
        <Presentaciones bind:anio bind:especialidad />
    {:else if selection === "premios"}
        <Premios bind:anio bind:especialidad />
    {:else}
        <Perfil />
        <ExperienciaLaboral bind:anio bind:especialidad />
        <Proyectos bind:anio bind:especialidad />
        <Educacion bind:anio bind:especialidad />
        <Publicaciones bind:anio bind:especialidad />
        <Presentaciones bind:anio bind:especialidad />
        <Diplomado bind:anio bind:especialidad />
        <Cursos bind:anio bind:especialidad />
        <Seminarios bind:anio bind:especialidad />
        <Premios bind:anio bind:especialidad />
        <Vinculacion bind:anio bind:especialidad />
        <Empresas bind:anio bind:especialidad />
        <Servicios bind:anio bind:especialidad />
    {/if}
</main>

<style>
</style>
