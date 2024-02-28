<script lang="ts">
    import type { PDFTypes } from "../../cv-store";
    import Cursos from "./Cursos.svelte";
    import Educacion from "./Educacion.svelte";
    import Empresa from "./Empresa.svelte";
    import Especializacion from "./Especializacion.svelte";
    import Experiencia from "./Experiencia.svelte";
    import HerramientasEIdiomas from "./HerramientasEIdiomas.svelte";
    import Presentaciones from "./Presentaciones.svelte";
    import Proyectos from "./Proyectos.svelte";
    import Publicaciones from "./Publicaciones.svelte";
    import { pdfMaker } from "./pdf-maker";

    export let pdfItems: PDFTypes;

    let educaciones = [];
    let experiencias = [];
    let empresas = [];
    let proyectos = [];
    let cursos = [];
    let presentaciones = [];
    let publicaciones = [];
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
    <h3 class="title uppercase text-center font-bold">
        María Eugenia Martinez Valenzuela
    </h3>

    <div class="grid grid-cols-2 grid-rows-5 w-1/2 my-5">
        <span>Nacionalidad:</span>
        <span>Chilena</span>
        <span>Celular:</span>
        <span>+56 9 5257 0413</span>
        <span>Email:</span>
        <span>maria.martinez@lazofoods.cl</span>
        <span>LinkedIn:</span>
        <span>memartinezv</span>
        <span>Google Scholar:</span>
        <span>123</span>
    </div>

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
        padding: 0 60px 0 60px;
    }
    .title {
        padding: 20px;
        text-align: center;
        font-weight: bold;
    }
</style>
