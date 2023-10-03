<script lang="ts">
    import RubroWrapper from "./UI/RubroWrapper.svelte";
    import data from "./cv-store";

    const { proyectos } = $data;
    proyectos.sort((a, b) => +new Date(b.fecha) - +new Date(+a.fecha));
</script>

<RubroWrapper title="Proyectos">
    {#each proyectos as ps}
        <div class="flex flex-col md:flex-row gap-5 items-start md:items-start">
            <div class="bg-[#fff] text-md text-black font-bold p-1 rounded-lg">
                <div
                    class="flex md:flex-col justify-center items-center md:min-w-[100px] md:min-h-[50px] p-1 border-2 border-[rgba(13,60,85,0.8)] rounded-lg"
                >
                    <p>{ps.fecha}</p>
                </div>
            </div>
            <div class="flex flex-col gap-2">
                <div>
                    <p class="">{ps.titulo}</p>
                </div>
                <div>
                    <p>cargo:</p>
                    <hr />
                    <p>{ps.cargo}</p>
                </div>
                <p class="text-sm text-slate-500">{ps.institucion}</p>
                <hr class="py-1" />
            </div>
        </div>
    {/each}
</RubroWrapper>
