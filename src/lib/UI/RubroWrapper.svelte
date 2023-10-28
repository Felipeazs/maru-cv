<script lang="ts">
    export let title: string;
</script>

<div
    class="flex flex-col gap-[2.5rem] w-[75%] m-auto xl:m-0 bg-crema py-[5%] px-[10%]"
>
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
