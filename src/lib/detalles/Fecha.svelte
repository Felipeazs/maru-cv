<script lang="ts">
    let now = new Date().getFullYear().toString();

    export let item: any;
</script>

<div
    class="flex flex-row-reverse md:flex-col justify-around items-center min-w-[120px] max-w-[170px]
    md:min-h-[100px] md:max-h-[150px]"
>
    {#if item.fecha}
        {#if item.fecha.length > 1}
            {#each item.fecha[0]?.split("|") as fecha, inf}
                <p class="px-1">
                    {fecha === now ? "presente" : fecha}
                </p>
                {#if inf < item.fecha[0]?.split("|").length - 1}
                    ・
                {/if}
            {/each}
        {:else}
            <p class="px-1">
                {item.fecha}
            </p>
        {/if}
    {:else if item.imagen}
        <img
            src={item.imagen}
            width={120}
            height={120}
            alt="logo empresa"
            class="rounded-md w-[120px] h-[120px] object-contain bg-[#13733B]"
        />
    {:else}
        {"🔧"}
    {/if}
</div>

<style>
</style>
