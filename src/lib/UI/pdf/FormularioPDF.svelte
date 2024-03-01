<script lang="ts">
    import type { PDFTypes } from "../../cv-store";
    import FormTemplate from "./formulario/FormTemplate.svelte";
    import Formacion from "./formulario/Formacion.svelte";
    import Herramientas from "./formulario/Herramientas.svelte";
    import Idiomas from "./formulario/Idiomas.svelte";
    import Perfil from "./formulario/Perfil.svelte";
    import Personal from "./formulario/Personal.svelte";

    export let pdfItems: PDFTypes;
</script>

<div class="flex flex-col gap-5 text-sm my-10">
    <Personal bind:pdfItems />
    <Perfil bind:pdfItems />
    <Formacion bind:pdfItems />
    <Herramientas bind:pdfItems />
    <Idiomas bind:pdfItems />
    <FormTemplate
        bind:pdfItems
        title="Experiencia Laboral"
        seccion="experiencias"
    />
    <FormTemplate bind:pdfItems title="Empresas" seccion="empresas" />
    <FormTemplate bind:pdfItems title="Proyectos" seccion="proyectos" />
    <FormTemplate bind:pdfItems title="Cursos" seccion="cursos" />
    <FormTemplate
        bind:pdfItems
        title="Presentaciones"
        seccion="presentaciones"
    />
    <FormTemplate bind:pdfItems title="Educación" seccion="educacion" />
</div>

<style>
</style>
