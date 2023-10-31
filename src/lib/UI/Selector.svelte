<script lang="ts">
    export let selection: string = "todos";
    export let anio: number = 0;
    export let especialidad: string = "todas";

    $: anio = 0;

    const rubros = [
        { value: "todos", opcion: "Todos" },
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
        { value: "empresas", opcion: "Empresas" },
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
        { value: "ciencias_ingenieria", opcion: "Ciencias de la ingeniería" },
        { value: "ciencia_datos", opcion: "Ciencia de datos / TI" },
        { value: "direccion_empresas", opcion: "Dirección de empresas" },
        { value: "educacion", opcion: "Educación" },
        { value: "sostenibilidad", opcion: "Sostenibilidad" },
    ];

    const resetValues = () => {
        anio = 0;
        especialidad = "todas";
    };
</script>

<div
    class="relative z-20 w-[90%] m-auto md:w-[50%] top-[50px] md:top-[50px] md:left-28 md:m-0"
>
    <p class="font-bold text-xl">¿Quieres saber más de mí?</p>
    <div
        class="absolute md:z-10 flex flex-row flex-wrap gap-5 border-black rounded-md p-4 bg-[rgba(8,11,13,0.8)] text-white"
    >
        <label class="flex flex-col">
            Selecciona un tema
            <select
                class="select select-bordered select-sm min-w-[200px] text-black"
                bind:value={selection}
                on:change={resetValues}
            >
                {#each rubros as rubro}
                    <option value={rubro.value}>{rubro.opcion}</option>
                {/each}
            </select>
        </label>
        <label class="flex flex-col">
            Año
            <select
                class="select select-bordered select-sm min-w-[150px] text-black"
                bind:value={anio}
            >
                {#each anios as anio}
                    <option value={anio.value}>{anio.opcion}</option>
                {/each}
            </select>
        </label>
        <label class="flex flex-col">
            Especialidad
            <select
                class="select select-bordered select-sm min-w-[200px] text-black"
                bind:value={especialidad}
            >
                {#each especialidades as esp}
                    <option value={esp.value}>{esp.opcion}</option>
                {/each}
            </select>
        </label>
    </div>
</div>
