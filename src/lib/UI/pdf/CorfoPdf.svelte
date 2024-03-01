<script lang="ts">
    import type {
        EducacionTypes,
        ExperienciaTypes,
        PDFTypes,
        ProyectoTypes,
    } from "../../cv-store";

    export let pdfItems: PDFTypes;

    let educacion: EducacionTypes = [];
    let experiencias: ExperienciaTypes = [];
    let proyectos: ProyectoTypes = [];
    $: educacion = pdfItems.educacion;
    $: experiencias = pdfItems.experiencias;
    $: proyectos = pdfItems.proyectos;
</script>

<div id="pdf-source">
    <h4 class="title">Formato de Curriculum Vitae CORFO</h4>

    <h4>II. Antecedentes académicos</h4>
    <table class="table table-fixed">
        <thead>
            <tr>
                <th>Título universitario y/o grado académico</th>
                <th>Institución que otogó título o grado</th>
                <th>Período en que cursó estudios</th>
            </tr>
        </thead>
        <tbody>
            {#if educacion.length}
                {#each educacion as ed (ed.id)}
                    <tr>
                        <td>
                            {#each ed?.titulo[0]?.split("|") as eds}
                                <p>{eds}</p>
                            {/each}
                        </td>
                        <td>{ed.institucion ?? ""}</td>
                        <td>{ed.fecha[0].split("|").reverse().join(" - ")}</td>
                    </tr>
                {/each}
            {/if}
        </tbody>
    </table>
    <h4>
        III. Experiencia profesional en el ámbito de la Investigación y/o
        Desarrollo
    </h4>
    <table class="table table-fixed">
        <thead>
            <tr>
                <th>Institución</th>
                <th>Línea o área investigación</th>
                <th>Cargo</th>
                <th>Descripción actividades desarrolladas</th>
                <th>Inicio (mm/aaaa)</th>
                <th>Término (mm/aaaa)</th>
            </tr>
        </thead>
        <tbody>
            {#if experiencias.length}
                {#each experiencias as exp (exp.id)}
                    <tr>
                        <td>
                            {exp.empresa}
                        </td>
                        <td>{exp.especialidad.replace(/_/g, " ")}</td>
                        <td
                            >{#each exp.titulo as titulo}
                                <p>{titulo}</p>
                            {/each}
                        </td>
                        <td />
                        <td
                            >{exp.fecha[0].split("|")[1] ??
                                exp.fecha[0].split("|")[0]}</td
                        >
                        <td
                            >{exp.fecha[0] === "2023"
                                ? "presente"
                                : exp.fecha[0].split("|")[0]}</td
                        >
                    </tr>
                {/each}
            {/if}
        </tbody>
    </table>
    <h4>
        IV. Proyectos del ámbito de la Investigación y/o Desarrollo u otro en
        los que el prefesional ha participado
    </h4>
    <table class="table table-fixed">
        <thead>
            <tr>
                <th>Título del proyecto</th>
                <th>Línea o área investigación</th>
                <th>Descripción actividades desarrolladas</th>
                <th>Inicio (mm/aaaa)</th>
                <th>Término (mm/aaaa)</th>
            </tr>
        </thead>
        <tbody>
            {#if proyectos.length}
                {#each proyectos as pr (pr.id)}
                    <tr>
                        <td>{pr.proyecto}</td>
                        <td>{pr.cargo}</td>
                        <td />
                        <td>{pr.fecha[1] ?? pr.fecha[0]}</td>
                        <td
                            >{pr.fecha[0] === "2023"
                                ? "presente"
                                : pr.fecha[0]}</td
                        >
                    </tr>
                {/each}
            {/if}
        </tbody>
    </table>
</div>

<style>
    #pdf-source {
        width: 100%;
    }
    table td,
    th {
        font-style: normal;
        font-size: 12px;
        white-space: normal;
        word-wrap: normal;
    }
    h4 {
        font-size: 14px;
        font-weight: bold;
    }
    .title {
        padding: 20px;
        text-align: center;
        font-weight: bold;
    }
</style>
