<script lang="ts">
    export let title: string;
</script>

<div class="w-full">
    <div class="collapse p-1 collapse-arrow">
        <input type="checkbox" class="p-1" />
        <div
            class="collapse-title text-xl uppercase font-bold bg-crema text-black"
        >
            {title}
        </div>
        <div class="collapse-content p-0">
            <div
                class="flex flex-col bg-gris gap-1 py-5 border-crema border-[1px] rounded-2xl rounded-t-none w-full px-3"
            >
                <slot />
            </div>
        </div>
    </div>
</div>
