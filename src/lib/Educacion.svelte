<script lang="ts">
    import RubroWrapper from "./UI/RubroWrapper.svelte";
    import data from "./cv-store";

    const { educacion } = $data;
</script>

<RubroWrapper title="Educación">
    {#each educacion as ed}
        <div
            class="flex flex-col md:flex-row gap-5 items-start md:items-center"
        >
            <div class="bg-[#fff] text-md text-black font-bold p-1 rounded-lg">
                <div
                    class="flex md:flex-col justify-center items-center md:min-w-[125px] md:min-h-[100px] p-1 border-2 border-[rgba(13,60,85,0.8)] rounded-lg"
                >
                    <p>{ed.fecha[1] ?? ""}</p>
                    <span>{ed.fecha[1] ? "・" : ""}</span>
                    <p>{ed.fecha[0]}</p>
                </div>
            </div>
            <div class="flex flex-row gap-5">
                <img
                    src={ed.logo}
                    width={70}
                    height={50}
                    alt={ed.institucion}
                    class="object-contain"
                />
                <div>
                    <p>{ed.formacion}</p>
                    <p class="text-sm text-slate-500">
                        {ed.institucion}
                    </p>
                    <hr class="py-1" />
                </div>
            </div>
        </div>
    {/each}
</RubroWrapper>

<style>
</style>
