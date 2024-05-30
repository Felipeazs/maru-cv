<script lang="ts">
    import type {
        AnaliticaTypes,
        BecaTypes,
        CursoTypes,
        EducacionTypes,
        EmpresaTypes,
        ExperienciaTypes,
        HerramientasTypes,
        PDFTypes,
        PremioTypes,
        PresentacionTypes,
        ProyectoTypes,
        PublicacionTypes,
    } from "../../cv-store";
    import Perfil from "../../todos/Perfil.svelte";
    import Cursos from "./Cursos.svelte";
    import DisplayElements from "./DisplayElements.svelte";
    import Educacion from "./Educacion.svelte";
    import Empresa from "./Empresa.svelte";
    import Experiencia from "./Experiencia.svelte";
    import Formacion from "./Formacion.svelte";
    import FormularioPdf from "./FormularioPDF.svelte";
    import Herramientas from "./Herramientas.svelte";
    import Idiomas from "./Idiomas.svelte";
    import InfoPersonal from "./InfoPersonal.svelte";
    import Presentaciones from "./Presentaciones.svelte";
    import Proyectos from "./Proyectos.svelte";
    import Publicaciones from "./Publicaciones.svelte";
    import { pdfMaker } from "./pdf-maker";

    export let pdfItems: PDFTypes;

    let personal: { nombre: string; value: string }[] = [];
    let perfil: boolean;
    let formacion: { nombre: string; value: string }[] = [];
    let educaciones: EducacionTypes = [];
    let experiencias: ExperienciaTypes = [];
    let empresas: EmpresaTypes = [];
    let proyectos: ProyectoTypes = [];
    let cursos: CursoTypes = [];
    let presentaciones: PresentacionTypes = [];
    let publicaciones: PublicacionTypes = [];
    let herramientas: HerramientasTypes = [];
    let analiticas: AnaliticaTypes = [];
    let premios: PremioTypes = [];
    let becas: BecaTypes = [];
    let idiomas: { nombre: string; value: string }[] = [];

    $: personal = pdfItems.personal;
    $: perfil = pdfItems.perfil;
    $: formacion = pdfItems.formacion;
    $: educaciones = pdfItems.educacion;
    $: experiencias = pdfItems.experiencias;
    $: empresas = pdfItems.empresas;
    $: proyectos = pdfItems.proyectos;
    $: cursos = pdfItems.cursos;
    $: presentaciones = pdfItems.presentaciones;
    $: publicaciones = pdfItems.publicaciones;
    $: herramientas = pdfItems.herramientas;
    $: analiticas = pdfItems.analitica;
    $: premios = pdfItems.premios;
    $: becas = pdfItems.becas;
    $: idiomas = pdfItems.idiomas;

    const generatePDF = (element: string) => {
        pdfMaker(element);
    };
</script>

<button
    class="btn btn-sm btn-primary"
    on:click={() => generatePDF("custom-pdf")}>descargar pdf</button
>

<FormularioPdf bind:pdfItems />

<h3 class="text-center font-bold uppercase my-5">Preview CV</h3>
<div class="border-2 w-[800px] m-auto py-8">
    <div id="custom-pdf" class="font-raleway text-sm">
        <InfoPersonal bind:personal />
        {#if perfil}
            <Perfil />
        {/if}
        <Formacion bind:formacion />
        <Experiencia bind:experiencias />
        <Empresa bind:empresas />
        <Proyectos bind:proyectos />
        <Cursos bind:cursos />
        <Presentaciones bind:presentaciones />
        <Publicaciones bind:publicaciones />
        <Educacion bind:educaciones />
        <DisplayElements bind:pdfItems tipo="herramientas" />
        <Idiomas bind:idiomas />
    </div>
</div>

<style>
    #custom-pdf {
        width: 800px;
        padding: 0 70px 0 70px;
    }
</style>
