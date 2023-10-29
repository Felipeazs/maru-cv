<script lang="ts">
    export let title: string;
    export let tag: string = "";
</script>

<div
    class="flex flex-col gap-[2.5rem] w-[90%] md:w-[75%] m-auto xl:m-0 bg-crema py-[5%] px-[2%] md:px-[10%]"
>
    {#if tag}
        <p class="italic">tag: {tag.replace(/_/g, " ")}</p>
    {/if}
    <div class="flex flex-col gap-[0.75rem]">
        <div class="uppercase font-bold text-[1.5rem] leading-[2rem]">
            {title}
        </div>
        <div class="divider-2" />
        <div class="flex flex-col gap-8">
            <slot />
        </div>
    </div>
</div>
