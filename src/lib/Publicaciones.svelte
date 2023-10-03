<script lang="ts">
    import RubroWrapper from "./UI/RubroWrapper.svelte";
    import data from "./cv-store";

    const { publicaciones } = $data;
    publicaciones
        .map((p) => p.fecha)
        .sort((a, b) => Number(new Date(b)) - Number(new Date(a)));
</script>

<RubroWrapper title="Publicaciones">
    {#each publicaciones as ps}
        <div class="flex flex-col md:flex-row gap-5 items-start md:items-start">
            <div class="bg-[#fff] text-md text-black font-bold p-1 rounded-lg">
                <div
                    class="flex md:flex-col justify-center items-center md:min-w-[100px] md:min-h-[50px] p-1 border-2 border-[rgba(13,60,85,0.8)] rounded-lg"
                >
                    <p>{ps.fecha}</p>
                </div>
            </div>
            <div class="relative flex flex-col gap-2 z-10">
                <p class="">{ps.titulo}</p>
                {#if ps.link}
                    <a href={ps.link}>ver publicación</a>
                {/if}
                <hr />
            </div>
        </div>
    {/each}
</RubroWrapper>
