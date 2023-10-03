<script lang="ts">
    export let title: string;
</script>

<div class="rubro">
    <div class="rubro-content">
        <div class="rubro-title">{title}</div>
        <div class="divider-2" />
        <div class="flex flex-col gap-8">
            <slot />
        </div>
    </div>
</div>

<style>
    .rubro {
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        width: 75%;
        min-height: 100hv;
        background-color: theme("colors.crema");
        padding: 10%;
    }
    .rubro-content {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }
    .rubro-title {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.5rem;
        line-height: 2rem;
    }
</style>
