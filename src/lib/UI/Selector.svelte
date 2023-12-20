<script lang="ts">
    import AllTags from "./AllTags.svelte";

    import { tooltipy } from "./tooltip/tooltip";

    export let selection: string = "todos";
    export let anio: number = 0;
    export let especialidad: string = "todas";
    export let alltags = [];
    export let selectedtags = [];

    $: anio = 0;

    const rubros = [
        { value: "todos", opcion: "Todos" },
        { value: "empresas", opcion: "Empresas" },
        { value: "perfil", opcion: "Perfil" },
        { value: "experiencias", opcion: "Experiencia laboral" },
        { value: "proyectos", opcion: "Proyectos" },
        { value: "educacion", opcion: "Educación" },
        { value: "publicaciones", opcion: "Publicaciones" },
        { value: "presentaciones", opcion: "Presentaciones" },
        { value: "diplomados", opcion: "Diplomados" },
        { value: "cursos", opcion: "Cursos" },
        { value: "seminarios", opcion: "Seminarios" },
        { value: "premios", opcion: "Premios" },
        { value: "vinculaciones", opcion: "Vinculaciones" },
        { value: "servicios", opcion: "Servicios" },
    ];

    const anios = [
        { value: 0, opcion: "Todos" },
        { value: 2023, opcion: "2023" },
        { value: 2022, opcion: "2022" },
        { value: 2021, opcion: "2021" },
        { value: 2020, opcion: "2020" },
        { value: 2019, opcion: "2019" },
        { value: 1, opcion: "Antes" },
    ];

    const especialidades = [
        { value: "todas", opcion: "Todas" },
        {
            value: "ciencias_de_la_ingeniería",
            opcion: "Ciencias de la ingeniería",
        },
        { value: "ciencia_de_datos_/_TI", opcion: "Ciencia de datos / TI" },
        { value: "dirección_de_empresas", opcion: "Dirección de empresas" },
        { value: "educación", opcion: "Educación" },
        { value: "sostenibilidad", opcion: "Sostenibilidad" },
    ];

    const resetValues = () => {
        anio = 0;
        especialidad = "todas";
    };
    const resetAll = () => {
        selection = "todos";
        anio = 0;
        especialidad = "todas";
    };
</script>

<div
    class="relative z-10 m-auto w-[90%] left-0 lg:left-11 lg:w-[58%] xl:w-[45%] top-[50px] md:top-[90px] lg:top-[50px] lg:m-0 xl:left-32"
    id="selector-ref"
>
    <div class="flex flex-row justify-between">
        <p class="w-max font-bold text-xl" id="tag-ref">
            ¿Quieres saber más de mí?
        </p>
    </div>
    <div
        class="absolute lg:z-10 flex flex-col gap-2 border-2 border-gray-200 rounded-md"
    >
        <div
            class="flex flex-row flex-wrap xl:flex-nowrap justify-center gap-5 p-4 bg-transparent text-black"
        >
            <label class="flex flex-col w-full md:w-[200px]">
                Selecciona un tema
                <select
                    class="select select-bordered select-sm min-w-[100px] text-black"
                    bind:value={selection}
                    on:change={resetValues}
                >
                    {#each rubros as rubro}
                        <option value={rubro.value}>{rubro.opcion}</option>
                    {/each}
                </select>
            </label>
            <label class="flex flex-col w-full md:w-[200px]">
                Año
                <select
                    class="select select-bordered select-sm min-w-[100px] text-black"
                    bind:value={anio}
                >
                    {#each anios as anio}
                        <option value={anio.value}>{anio.opcion}</option>
                    {/each}
                </select>
            </label>
            <label class="flex flex-col w-full md:w-[200px]">
                Especialidad
                <select
                    class="select select-bordered select-sm min-w-[100px] text-black"
                    bind:value={especialidad}
                >
                    {#each especialidades as esp}
                        <option value={esp.value}>{esp.opcion}</option>
                    {/each}
                </select>
            </label>
            <button
                class="w-max p-1 text-black border-2 border-gris rounded-md bg-crema transition ease-in-out delay-75 hover:scale-110 hover:border-yellow"
                on:click={resetAll}
                use:tooltipy={{ content: "reiniciar campos" }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    ><path
                        fill="#2A1206"
                        d="M7.207 2.543a1 1 0 0 1 0 1.414L5.414 5.75h7.836a8 8 0 1 1-8 8a1 1 0 1 1 2 0a6 6 0 1 0 6-6H5.414l1.793 1.793a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1 0-1.414l3.5-3.5a1 1 0 0 1 1.414 0Z"
                    /></svg
                >
            </button>
            <div class="relative w-[100px] z-20">
                <AllTags bind:alltags bind:selectedtags on:tag-click />
            </div>
        </div>
    </div>
</div>
