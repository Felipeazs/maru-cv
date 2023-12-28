<script lang="ts">
    export let item: any
</script>

<div class={`${item.logo ? "flex justify-center w-[15%]" : ""}`}>
    {#if item.logo}
        <img
            src={item.logo}
            alt={item.institucion ?? ""}
            class="object-contain"
        />
    {/if}
</div>

<style>
</style>
