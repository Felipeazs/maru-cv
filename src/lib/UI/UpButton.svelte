<script lang="ts">
    import up from "/images/up.svg";

    $: window.addEventListener("scroll", (event) => {
        const section = document.getElementById("btn-section");
        if (section === null) return;

        const innerWidth = window.innerWidth;

        if (innerWidth > 1023) {
            if (window.scrollY < 969) {
                section.style.opacity = "0%";
                section.style.transition = "opacity 0.2s ease-out";
            } else {
                section.style.opacity = "100%";
                section.style.transition = "opacity 0.2s ease-out";
            }
        } else {
            if (window.scrollY < 1722) {
                section.style.opacity = "0%";
                section.style.transition = "opacity 0.2s ease-out";
            } else {
                section.style.opacity = "100%";
                section.style.transition = "opacity 0.2s ease-out";
            }
        }
    });

    const upHandler = () => {
        const element = document.querySelector("#tag-ref");

        element.scrollIntoView({ behavior: "smooth" });
    };
</script>

<div id="btn-section" class="fixed bottom-20 right-[3%] lg:right-[29%] z-30">
    <button class="btn btn-black" on:click={upHandler}>
        <img src={up} width={20} height={"auto"} alt="up" />
    </button>
</div>
