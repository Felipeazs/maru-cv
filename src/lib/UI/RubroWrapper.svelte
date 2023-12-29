<script lang="ts">
    export let title: string;
</script>

<div
    class="relative z-0 flex flex-col gap-[2.5rem] w-[90%] lg:w-[75%] m-auto xl:m-0 bg-crema top-16 py-[5%] px-[2%] lg:px-[10%]"
>
    <div class="flex flex-col gap-2">
        <div class="sticky top-0 pt-[50px] z-20 bg-crema">
            <div class="uppercase font-bold text-[1.5rem] leading-[2rem]">
                {title}
            </div>
            <div class="divider-2 opacity-60" />
        </div>
        <div class="flex flex-col gap-8 pt-10">
            <slot />
        </div>
    </div>
</div>
