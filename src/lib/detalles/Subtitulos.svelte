<script lang="ts">
    export let item: any;
</script>

<p class="text-sm text-slate-500 italic pb-3">
    {item.cargo ?? ""}
</p>
<p class="text-sm text-slate-500 font-semibold pb-3">
    {item.empresa ?? item.institucion ?? item.instituto ?? ""}
</p>

<style>
</style>
