<script lang="ts">
    import { tooltipy } from "./tooltip/tooltip";

    import up from "/images/up.svg";

    const callback = (entries: any) => {
        const section = document.getElementById("btn-section");
        if (section === null) return;

        if (entries[0].isIntersecting) {
            section.style.visibility = "hidden";
            section.style.opacity = "0";
        } else {
            section.style.visibility = "visible";
            section.style.opacity = "1";
        }

        section.style.transition = "visibility 0.5s, opacity 0.2s ease-out";
    };

    const options = {
        rootMargin: "0px",
        threshold: 1.0,
    };

    $: document.addEventListener("scroll", () => {
        let observer = new IntersectionObserver(callback, options);
        observer.observe(document.getElementById("selector-ref"));
    });

    const upHandler = () => {
        const element = document.querySelector("#tag-ref");

        element.scrollIntoView({ behavior: "smooth" });
    };
</script>

<div id="btn-section" class="fixed bottom-20 right-[3%] lg:right-[26%] z-10">
    <button
        class="btn btn-sm bg-crema border-2 border-gris hover:bg-crema hover:border-yellow transition ease-in-out delay-75 hover:scale-110"
        use:tooltipy={{ content: "temario" }}
        on:click={upHandler}
    >
        <img src={up} width={20} height={"auto"} alt="up" />
    </button>
</div>
