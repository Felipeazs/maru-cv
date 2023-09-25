<script lang="ts">
    import data from "./cv-store";

    const { educacion } = $data;
</script>

<div class="rubro">
    <div class="rubro-content">
        <div class="rubro-title">Educación</div>
        <div class="divider-2" />
        <div class="flex flex-col gap-3">
            {#each educacion as ed}
                <div class="flex flex-row gap-5 items-start h-[120px]">
                    <div
                        class="bg-[#fff] text-md text-black font-bold p-1 rounded-lg"
                    >
                        <div
                            class="flex flex-col justify-center items-center min-w-[125px] min-h-[100px] p-1 border-2 border-[rgba(13,60,85,0.8)] rounded-lg"
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
        </div>
    </div>
</div>

<style>
</style>
