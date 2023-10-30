<script lang="ts">
    export let title: string;
</script>

<div
    class="relative z-0 flex flex-col gap-[2.5rem] w-[90%] md:w-[75%] m-auto xl:m-0 bg-crema py-[5%] px-[2%] md:px-[10%]"
>
    <div class="flex flex-col gap-2">
        <div class="uppercase font-bold text-[1.5rem] leading-[2rem]">
            {title}
        </div>
        <div class="divider-2 opacity-60" />
        <div class="flex flex-col gap-8 pt-10">
            <slot />
        </div>
    </div>
</div>
