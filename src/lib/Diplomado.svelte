<script lang="ts">
    import data from "./cv-store";

    const { diplomado } = $data;
</script>

<div class="rubro relative z-10">
    <div class="rubro-content">
        <div class="rubro-title">Diplomados</div>
        <div class="divider-2" />
        <div class="flex flex-col gap-3">
            {#each diplomado as dip}
                <div class="flex flex-row gap-5 items-center">
                    <div
                        class="bg-[#fff] text-md text-black font-bold p-1 rounded-lg"
                    >
                        <div
                            class="flex flex-col justify-center items-center min-w-[125px] min-h-[100px] p-1 border-2 border-[rgba(13,60,85,0.8)] rounded-lg"
                        >
                            <p>{dip.fecha[1] ?? ""}</p>
                            <span>{dip.fecha[1] ? "・" : ""}</span>
                            <p>{dip.fecha[0]}</p>
                        </div>
                    </div>
                    <div>
                        <p class="">{dip.titulo}</p>
                        <p class="text-sm text-slate-500">{dip.instituto}</p>
                        <hr class="py-2" />
                        <a
                            href={dip.certificado}
                            class="text-sm underline"
                            >{dip.certificado ? "Ver certificado" : ""}</a
                        >
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
