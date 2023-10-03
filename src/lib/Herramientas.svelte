<script lang="ts">
    import data from "./cv-store";

    const { herramientas } = $data;
</script>

<div class="rubro">
    <div class="rubro-content">
        <div class="rubro-title">Herramientas</div>
        <div class="divider-2" />
        <div class="flex flex-col gap-5">
            {#each herramientas as hs, i}
                <div
                    class="flex flex-col md:flex-row gap-5 items-start md:items-start"
                >
                    <div
                        class="bg-[#fff] text-md text-black font-bold p-1 rounded-lg"
                    >
                        <div
                            class="flex md:flex-col justify-center items-center md:min-w-[100px] md:min-h-[50px] p-1 border-2 border-[rgba(13,60,85,0.8)] rounded-lg"
                        >
                            <p>{i + 1}</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2">
                        <div>
                            <p class="">{hs.titulo}</p>
                            <div class="divider-2" />
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
