<script lang="ts">
    import TransacitonGrid from "./lib/TransacitonGrid.svelte";
    import LeftHandNav from "./lib/LeftHandNav.svelte";
    import Header from "./lib/Header.svelte";
</script>

<!-- <div id="header">
    <Header></Header>
</div> -->
<div id="body">
    <div id="navmenu">
        <LeftHandNav />
    </div>
    <div id="content">
        <TransacitonGrid />
    </div>
</div>

<style>
    #body {
        display: grid;
        grid-template-columns: 10% 90%;
        height: 100%;
        background-color: white;
    }

    #navmenu {
        background-color: var(--theme-color);
    }

    #header {
        background-color: var(--theme-header);
        height: 5%;
    }

    #content {
        padding: 100px;
    }
</style>