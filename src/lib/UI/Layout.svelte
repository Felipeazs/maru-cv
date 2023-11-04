<script lang="ts">
    import Footer from "./layout/Footer.svelte";
</script>

<!-- <Navbar /> -->
<main>
    <slot />
</main>
<Footer />

<style>
    main {
        min-height: 160vh;
    }
</style>
