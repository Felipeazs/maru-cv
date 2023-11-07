<script lang="ts">
    export let pdfItems: any[];
</script>

<div id="pdf-source">
    <h4 class="title">Formato de Curriculum Vitae</h4>

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
            {#each pdfItems as ed (ed.id)}
                {#if ed.educacion}
                    <tr>
                        <td>{ed.educacion}</td>
                        <td>{ed.institucion}</td>
                        <td
                            >{ed.fecha[1]} - {ed.fecha[0] === "2023"
                                ? "presente"
                                : ed.fecha[0]}</td
                        >
                    </tr>
                {/if}
            {/each}
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
            {#each pdfItems as exp (exp.id)}
                {#if exp.empresa}
                    <tr>
                        <td>{exp.empresa}</td>
                        <td>{exp.especialidad}</td>
                        <td>{exp.titulo}</td>
                        <td />
                        <td>{exp.fecha[1] ?? exp.fecha[0]}</td>
                        <td
                            >{exp.fecha[0] === "2023"
                                ? "presente"
                                : exp.fecha[0]}</td
                        >
                    </tr>
                {/if}
            {/each}
        </tbody>
    </table>
    <h4>
        IV. Proyectos del ámbito del a Investigación y/o Desarrollo u otro en
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
            {#each pdfItems as pr (pr.id)}
                {#if pr.proyecto}
                    <tr>
                        <td>{pr.proyecto}</td>
                        <td>{pr.especialidad}</td>
                        <td />
                        <td>{pr.fecha[1] ?? pr.fecha[0]}</td>
                        <td
                            >{pr.fecha[0] === "2023"
                                ? "presente"
                                : pr.fecha[0]}</td
                        >
                    </tr>
                {/if}
            {/each}
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
    }
    .title {
        padding: 20px;
        text-align: center;
        font-weight: bold;
    }
</style>
