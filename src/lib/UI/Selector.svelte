<script lang="ts">
    export let selection: string = "todos";
    export let anio: number = 0;
    export let especialidad: string = "todas";

    $: anio = 0;

    const rubros = [
        { value: "todos", opcion: "Todos" },
        { value: "perfil", opcion: "Perfil" },
        { value: "experiencia_laboral", opcion: "Experiencia laboral" },
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
    class="relative z-20 w-[50%] pt-[350px] md:pt-[520px] xl:pt-[35px] ps-[10%] pb-10"
>
    <div class="md:absolute md:z-10 flex flex-row flex-wrap gap-5">
        <label class="flex flex-col">
            Pincha en la sección
            <select
                class="select select-bordered select-sm min-w-[200px]"
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
                class="select select-bordered select-sm min-w-[150px]"
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
                class="select select-bordered select-sm min-w-[200px]"
                bind:value={especialidad}
            >
                {#each especialidades as esp}
                    <option value={esp.value}>{esp.opcion}</option>
                {/each}
            </select>
        </label>
    </div>
</div>
