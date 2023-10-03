<script lang="ts">
    import RubroWrapper from "./UI/RubroWrapper.svelte";
    import data from "./cv-store";

    const { vinculaciones } = $data;
</script>

<RubroWrapper title="Vinculación con el medio">
    {#each vinculaciones as vs, i}
        <div class="flex flex-col md:flex-row gap-5 items-start md:items-start">
            <div class="bg-[#fff] text-md text-black font-bold p-1 rounded-lg">
                <div
                    class="flex md:flex-col justify-center items-center p-3 border-2 border-[rgba(13,60,85,0.8)] rounded-lg"
                >
                    <p>{i + 1}</p>
                </div>
            </div>
            <div class="relative pb-5">
                <p class="">{vs.titulo}</p>
                <p class="text-sm text-slate-500">{vs.institucion}</p>
                <hr class="py-1" />
            </div>
        </div>
    {/each}
</RubroWrapper>
