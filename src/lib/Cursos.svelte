<script lang="ts">
    import RubroWrapper from "./UI/RubroWrapper.svelte";
    import data from "./cv-store";

    const { cursos } = $data;
</script>

<RubroWrapper title="cursos">
    {#each cursos as cs}
        <div
            class="flex flex-col md:flex-row gap-5 items-start md:items-center"
        >
            <div class="bg-[#fff] text-md text-black font-bold p-1 rounded-lg">
                <div
                    class="flex md:flex-col justify-center items-center md:min-w-[125px] md:min-h-[50px] p-1 border-2 border-[rgba(13,60,85,0.8)] rounded-lg"
                >
                    <p>{cs.fecha?.split("/")[2]}</p>
                </div>
            </div>
            <div>
                <p class="">{cs.institucion}</p>
            </div>
        </div>
    {/each}
</RubroWrapper>
