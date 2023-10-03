<script lang="ts">
    import RubroWrapper from "./UI/RubroWrapper.svelte";
    import data from "./cv-store";

    const { diplomado } = $data;
</script>

<RubroWrapper title="diplomados">
    {#each diplomado as dip}
        <div
            class="flex flex-col md:flex-row gap-5 items-start md:items-center"
        >
            <div class="bg-[#fff] text-md text-black font-bold p-1 rounded-lg">
                <div
                    class="flex md:flex-col justify-center items-center md:min-w-[125px] md:min-h-[100px] p-1 border-2 border-[rgba(13,60,85,0.8)] rounded-lg"
                >
                    <p>{dip.fecha[1] ?? ""}</p>
                    <span>{dip.fecha[1] ? "・" : ""}</span>
                    <p>{dip.fecha[0]}</p>
                </div>
            </div>
            <div class="relative pb-5">
                <p class="">{dip.titulo}</p>
                <p class="text-sm text-slate-500">{dip.instituto}</p>
                <hr class="py-1" />
                <a
                    href={dip.certificado}
                    class="text-sm underline absolute z-10"
                    >{dip.certificado ? "Ver certificado" : ""}</a
                >
            </div>
        </div>
    {/each}
</RubroWrapper>
