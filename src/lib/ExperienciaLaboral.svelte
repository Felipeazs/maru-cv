<script lang="ts">
    import data from "./cv-store";

    const { experiencia } = $data;
</script>

<div class="rubro">
    <div class="rubro-content">
        <div class="rubro-title">Experiencia laboral</div>
        <div class="divider-2" />
        <div class="flex flex-col gap-3">
            {#each experiencia as exp}
                <div
                    class="flex flex-col md:flex-row gap-5 items-start md:items-center"
                >
                    <div
                        class="bg-[#fff] text-md text-black font-bold p-1 rounded-lg"
                    >
                        <div
                            class="flex md:flex-col justify-center items-center md:min-w-[125px] md:min-h-[100px] p-1 border-2 border-[rgba(13,60,85,0.8)] rounded-lg"
                        >
                            <p>{exp.fecha[1] ?? ""}</p>
                            <span>{exp.fecha[1] ? "・" : ""}</span>
                            <p>{exp.fecha[0]}</p>
                        </div>
                    </div>
                    <div>
                        <p class="">{exp.cargo}</p>
                        <p class="text-sm text-slate-500">{exp.empresa}</p>
                        <hr class="py-2" />
                        <p class="text-sm">{exp.descripcion}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
</style>
