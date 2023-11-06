<script lang="ts">

    import up from "/images/up.svg";

    const callback = (entries) => {
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

    $: document.addEventListener("scroll", (event) => {
        let observer = new IntersectionObserver(callback, options);
        observer.observe(document.getElementById("selector-ref"));
    });

    const upHandler = () => {
        const element = document.querySelector("#tag-ref");

        element.scrollIntoView({ behavior: "smooth" });
    };
</script>

<div id="btn-section" class="fixed bottom-20 right-[3%] lg:right-[29%] z-30">
    <button
        class="btn btn-sm bg-[#fff] border-2 border-[rgba(13,60,85,0.8)] hover:border-[#fff] transition ease-in-out delay-75 hover:scale-110"
        on:click={upHandler}
    >
        <img src={up} width={20} height={"auto"} alt="up" />
    </button>
</div>
