<script lang="ts">
    import Footer from "./layout/Footer.svelte";
    import Navbar from "./layout/Navbar.svelte";
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
