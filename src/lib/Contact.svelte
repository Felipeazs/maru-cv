<script lang="ts">
    import { tooltipy } from "./UI/tooltip/tooltip";

    import CollapsableWrapper from "./UI/CollapsableWrapper.svelte";

    import email from "/images/email.svg";
    import linkedin from "/images/linkedin.svg";

    import data from "./cv-store";
    const { competencias, idiomas, herramientas } = $data;
</script>

<div
    class="flex flex-col md:w-1/2 lg:w-full gap-1 items-center text-white text-sm lg:bg-transparent p-3 pt-0"
>
    <div class="collapse p-1 collapse-arrow">
        <input type="checkbox" class="p-1" />
        <div
            class="collapse-title text-xl uppercase font-bold bg-yellow text-crema"
        >
            Contacto
        </div>
        <div class="collapse-content p-0">
            <div
                class="flex flex-col justify-around items-start text-black bg-crema gap-5 py-5 border-crema border-[1px] rounded-2xl rounded-t-none w-full px-3"
            >
                <p class="uppercase font-semibold text-center md:hidden">
                    maría eugenia martínez valenzuela
                </p>
                <div class="flex flex-row items-center gap-2 w-full">
                    <div class="w-1/3">
                        <img src={email} alt="email" width={40} height={40} />
                    </div>
                    <a href="mailto:maru.27@gmail.com" class="w-full text-lg"
                        >maru.27@gmail.com</a
                    >
                </div>
                <div class="flex flex-row items-center gap-2 w-full">
                    <div class="w-1/3">
                        <img
                            src={linkedin}
                            alt="linkedin"
                            width={40}
                            height={40}
                        />
                    </div>
                    <a
                        use:tooltipy={{
                            content: "enlace linkedin",
                            theme: "light",
                            placement: "bottom",
                        }}
                        class="w-full text-lg text-start"
                        href="https://www.linkedin.com/in/memartinezv/"
                        target="_blank"
                        rel="noreferrer">memartinezv 🔗</a
                    >
                </div>
            </div>
        </div>
    </div>
    <CollapsableWrapper title="idiomas">
        {#each idiomas as i}
            <div class="flex flex-row gap-3">
                <p class="text-crema w-[50px]">{i.idioma ?? ""}</p>
                <p>
                    {i.idioma === "Español"
                        ? "🇪🇸"
                        : i.idioma === "Inglés"
                          ? "🇬🇧"
                          : "🇩🇪"}
                </p>
                <p class="text-slate-300 w-2/3">
                    {i.descripcion ?? ""}
                </p>
            </div>
        {/each}
    </CollapsableWrapper>
    <CollapsableWrapper title="herramientas">
        {#each herramientas as hs}
            <div class="py-2">
                <p class="text-white">{hs.titulo ?? ""}</p>
                <p class="text-slate-400">{hs.tipo ?? ""}</p>
                <p class="text-white">
                    nivel {hs.nivel.toLowerCase() ?? ""}
                </p>
            </div>
            <div class="divider-3" />
        {/each}
    </CollapsableWrapper>
    <CollapsableWrapper title="competencias">
        {#each competencias as cs}
            <div class="flex flex-col">
                <div class="flex flex-row gap-3">
                    <p class="text-md text-white">
                        {cs.titulo ?? ""}
                    </p>
                </div>
                <p class="text-slate-300">
                    {cs.descripcion ?? ""}
                </p>
            </div>
            <div class="divider-3" />
        {/each}
    </CollapsableWrapper>
</div>
