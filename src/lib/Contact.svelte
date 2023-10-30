<script lang="ts">
    import CollapsableWrapper from "./UI/CollapsableWrapper.svelte";

    import whatsapp from "/images/whatsapp.svg";
    import email from "/images/email.svg";
    import linkedin from "/images/linkedin.svg";
    import phone from "/images/phone.svg";

    import data from "./cv-store";
    const { competencias, idiomas, herramientas } = $data;

    let collapsable = false;
</script>

<div class="flex flex-col gap-3 items-center text-white text-sm bg-black px-3">
    <div
        class={`collapse p-1 collapse-arrow ${
            collapsable ? "collapse-open" : "collapse-close"
        }`}
    >
        <input
            type="checkbox"
            on:click={() => (collapsable = !collapsable)}
            class="hover:cursor-pointer"
        />
        <div
            class="collapse-title text-xl uppercase font-bold bg-crema text-black"
        >
            Contacto
        </div>
        <div class="collapse-content p-0">
            <div
                class="flex flex-col justify-around items-start gap-5 py-5 border-crema border-[1px] rounded-2xl rounded-t-none w-full px-3"
            >
                <p class="uppercase font-semibold text-center md:hidden">
                    maría eugenia martínez valenzuela
                </p>
                <div class="flex flex-row gap-2 items-center w-full">
                    <div class="w-1/3">
                        <img src={phone} alt="phone" width={40} height={40} />
                    </div>
                    <a href="tel:+56952570413" class="w-full text-lg"
                        >+56 9 5257 0413</a
                    >
                </div>
                <div class="flex flex-row items-center gap-2 w-full">
                    <div class="w-1/3">
                        <img
                            src={whatsapp}
                            alt="whatsapp"
                            width={40}
                            height={40}
                        />
                    </div>
                    <a class="w-full text-lg" href="http://wa.me/56952570413"
                        >+56 9 5257 0413</a
                    >
                </div>
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
                            alt="whatsapp"
                            width={40}
                            height={40}
                        />
                    </div>
                    <a
                        class="w-full text-lg"
                        href="https://www.linkedin.com/in/memartinezv/">🔗</a
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
                <p class="text-slate-400 w-2/3">
                    {i.descripcion ?? ""}
                </p>
            </div>
        {/each}
    </CollapsableWrapper>
    <CollapsableWrapper title="herramientas">
        {#each herramientas as hs}
            <div class="py-2">
                <p class="text-crema">{hs.titulo ?? ""}</p>
                <p class="text-slate-400">{hs.tipo ?? ""}</p>
                <p class="text-gris">
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
                    <p class="text-md text-crema">
                        {cs.titulo ?? ""}
                    </p>
                </div>
                <p class="text-slate-400">
                    {cs.descripcion ?? ""}
                </p>
            </div>
            <div class="divider-3" />
        {/each}
    </CollapsableWrapper>
</div>
