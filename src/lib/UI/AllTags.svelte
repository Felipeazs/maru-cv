<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let alltags = [];
    let isCollapsed = false;

    const collapsableTagHandler = (tag: object) => {
        dispatch("tag-click", tag);
        isCollapsed = false;
    };
</script>

<div
    tabIndex="0"
    class={isCollapsed
        ? "collapse collapse-open bg-base-200 absolute w-[300px] md:w-[400px] lg:w-[500px] right-0 z-50 rounded-md border-2 border-base-200"
        : "collapse collapse-close bg-base-200 absolute h-10 lg:w-[100px] bottom-0 right-0 z-50 rounded-md border-2 border-black"}
>
    <input
        type="checkbox"
        on:click={() => (isCollapsed = !isCollapsed)}
        class="min-h-10"
    />
    <div class="collapse-title text-sm py-2 font-medium">Categorias</div>
    <div class="collapse-content bg-base-100">
        <div class="flex flex-row flex-wrap gap-1 py-1 z-20">
            <button on:click={() => console.log("test")}>test</button>
            {#each alltags as tag}
                <button
                    class="btn btn-xs btn-light p-1 lowercase text-xs text-slate-600"
                    on:click={() => collapsableTagHandler(tag)}
                >
                    <img src={tag.icono} width={16} height={"auto"} alt="tag" />
                    <p>
                        {tag.nombre.replace(/_/g, " ")}
                    </p>
                </button>
            {/each}
        </div>
    </div>
</div>
