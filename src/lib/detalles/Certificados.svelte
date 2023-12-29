<script lang="ts">
    import { tooltipy } from "../UI/tooltip/tooltip";

    export let item: any
</script>

<div class="flex flex-row gap-1 items-center py-1">
    {#if item.link || item.certificado}
        <p class="text-xs text-gray-400">
            {item.link ? "publicación" : "certificado"}:
        </p>
        <a
            use:tooltipy={{
                content: item.link ? "ver publicación" : "ver certificado",
            }}
            href={item.link || item.certificado}
            target="_blank"
            id="link-ref"
        >
            {(item.link || item.certificado) && "🔗"}</a
        >
    {/if}
</div>

<style>
</style>
