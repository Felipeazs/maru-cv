<script lang="ts">
    import data from "./cv-store";

    const { seminarios } = $data;
    seminarios.sort((a, b) => +new Date(b.fecha) - +new Date(+a.fecha));
</script>

<div class="rubro">
    <div class="rubro-content">
        <div class="rubro-title">Participación en Seminarios</div>
        <div class="divider-2" />
        <div class="flex flex-col gap-5">
            {#each seminarios as ps}
                <div
                    class="flex flex-col md:flex-row gap-5 items-start md:items-start"
                >
                    <div
                        class="bg-[#fff] text-md text-black font-bold p-1 rounded-lg"
                    >
                        <div
                            class="flex md:flex-col justify-center items-center md:min-w-[100px] md:min-h-[50px] p-1 border-2 border-[rgba(13,60,85,0.8)] rounded-lg"
                        >
                            <p>{ps.fecha}</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <div>
                            <p class="">{ps.titulo}</p>
                            <hr />
                        </div>
                        <p class="text-sm text-slate-500">{ps.institucion}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
