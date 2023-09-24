<script lang="ts">
    import data from "../../data.json";

    const competencias = data.competencias;
</script>

<div class="rubro">
    <div class="rubro-content">
        <h1 class="rubro-title">Perfil</h1>
        <div class="divider-2" />
        <div class="flex flex-col gap-5">
            <p>
                Soy un profesional altamente comprometido y apasionado por la
                excelencia técnica. Mi carrera se ha caracterizado por una
                búsqueda constante de conocimiento y un enfoque metódico en la
                aplicación de habilidades técnicas avanzadas en diversas áreas.
                A lo largo de mi trayecto profesional, he adquirido una sólida
                base en ingeniería y ciencias, respaldada por una amplia
                experiencia práctica en el diseño y simulación de procesos
                industriales, así como en el uso de herramientas de análisis de
                datos de vanguardia.
            </p>

            <p>
                Mi compromiso con la sostenibilidad y la innovación ha sido una
                constante en mi carrera, lo que se refleja en mi experiencia en
                la gestión de proyectos orientados a la revalorización de
                residuos, la evaluación de la huella de carbono y el análisis de
                ciclo de vida. Además, mi formación y experiencia me han
                permitido liderar proyectos de investigación y desarrollo tanto
                a nivel nacional como internacional, buscando soluciones
                innovadoras y sostenibles para desafíos contemporáneos.
            </p>

            <p>
                Mi habilidad para trabajar con técnicas cromatográficas de
                laboratorio, realizar ensayos de toxicidad, medir el potencial
                de biogás y aplicar análisis de datos avanzados mediante Big
                Data y Machine Learning, me posiciona como un profesional
                versátil y capacitado para abordar una amplia gama de proyectos
                técnicos y científicos.
            </p>

            <p>
                En este currículum, presentaré mi historial de logros técnicos y
                mi capacidad demostrada para enfrentar desafíos técnicos
                complejos. Estoy entusiasmado por la oportunidad de contribuir
                con mis habilidades técnicas y mi pasión por la innovación a
                proyectos futuros que busquen marcar una diferencia
                significativa en el mundo.
            </p>
        </div>
    </div>
    <div class="rubro-content z-10">
        <h1 class="rubro-title">
            Competencias y habilidades blandas
        </h1>
        <div class="divider-2" />
        <div class="flex flex-row flex-wrap justify-center items-center gap-2">
            {#each competencias as competencia}
                <div
                    class="w-[250px] h-[170px] border-2 border-black rounded-[5px] p-[10px] bg-[#fff]"
                >
                    <span class="font-bold text-sm">{competencia.titulo}</span>
                    <br />
                    <hr class="py-1" />
                    <p class="text-sm">
                        {competencia.descripcion}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
</style>
