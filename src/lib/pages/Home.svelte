<script lang="ts">
    import ExperienciaLaboral from "../ExperienciaLaboral.svelte";
    import Perfil from "../Perfil.svelte";
    import Hero from "../UI/Hero.svelte";
    import Selector from "../UI/Selector.svelte";

    let selected: string = "perfil";
</script>

<Hero />
<Selector bind:selected />
{#if selected === "perfil"}
    <Perfil />
{:else if selected === "experiencia_laboral"}
    <ExperienciaLaboral />
{:else}
    <Perfil />
{/if}

<style>
</style>
