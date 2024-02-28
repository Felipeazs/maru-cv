<script lang="ts">
    import type { CursoTypes, EducacionTypes, EmpresaTypes, ExperienciaTypes, PDFTypes, PresentacionTypes, ProyectoTypes, PublicacionTypes } from "../../cv-store";
    import Cursos from "./Cursos.svelte";
    import Educacion from "./Educacion.svelte";
    import Empresa from "./Empresa.svelte";
    import Especializacion from "./Especializacion.svelte";
    import Experiencia from "./Experiencia.svelte";
    import HerramientasEIdiomas from "./HerramientasEIdiomas.svelte";
    import InfoPersonal from "./InfoPersonal.svelte";
    import Presentaciones from "./Presentaciones.svelte";
    import Proyectos from "./Proyectos.svelte";
    import Publicaciones from "./Publicaciones.svelte";
    import { pdfMaker } from "./pdf-maker";

    export let pdfItems: PDFTypes;

    let educaciones: EducacionTypes = [];
    let experiencias: ExperienciaTypes = [];
    let empresas: EmpresaTypes = [];
    let proyectos: ProyectoTypes = [];
    let cursos: CursoTypes = [];
    let presentaciones: PresentacionTypes = [];
    let publicaciones: PublicacionTypes = [];

    $: educaciones = pdfItems.educacion;
    $: experiencias = pdfItems.experiencia;
    $: empresas = pdfItems.empresa;
    $: proyectos = pdfItems.proyecto;
    $: cursos = pdfItems.curso;
    $: presentaciones = pdfItems.presentacion;
    $: publicaciones = pdfItems.publicacion;

    const generatePDF = (element: string) => {
        pdfMaker(element);
    };
</script>

<button
    class="btn btn-sm btn-primary"
    on:click={() => generatePDF("custom-pdf")}>descargar pdf</button
>
<div id="custom-pdf" class="font-raleway text-sm">
    <InfoPersonal />
    <Educacion bind:educaciones />
    <Especializacion />
    <Experiencia bind:experiencias />
    <Empresa bind:empresas />
    <Proyectos bind:proyectos />
    <Cursos bind:cursos />
    <Presentaciones bind:presentaciones />
    <Publicaciones bind:publicaciones />
    <HerramientasEIdiomas />
</div>

<style>
    #custom-pdf {
        width: 800px;
        padding: 0 70px 0 70px;
    }
</style>
