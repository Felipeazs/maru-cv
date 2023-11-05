<script lang="ts">
    import { tooltipy } from "../UI/tooltip/tooltip";

    import up from "/images/up.svg";

    $: window.addEventListener("scroll", (event) => {
        const section = document.getElementById("btn-section");
        if (section === null) return;

        const innerWidth = window.innerWidth;
        section.style.visibility = "hidden";
        section.style.opacity = "0";

        if (innerWidth > 1023) {
            if (window.scrollY > 969) {
                section.style.visibility = "visible";
                section.style.opacity = "1";
            } else {
            }
        } else {
            if (window.scrollY > 1722) {
                section.style.visibility = "visible";
                section.style.opacity = "1";
            }
        }

        section.style.transition = "visibility 0.5s, opacity 0.2s ease-out";
    });

    const upHandler = () => {
        const element = document.querySelector("#tag-ref");

        element.scrollIntoView({ behavior: "smooth" });
    };
</script>

<div
    id="btn-section"
    class="fixed bottom-20 right-[3%] lg:right-[29%] z-30"
    use:tooltipy={{ content: "subir" }}
>
    <button
        class="btn bg-[#fff] border-2 border-[rgba(13,60,85,0.8)] hover:border-[#fff]"
        on:click={upHandler}
    >
        <img src={up} width={20} height={"auto"} alt="up" />
    </button>
</div>
