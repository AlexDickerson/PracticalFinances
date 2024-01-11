<script lang="ts">
    import TransacitonGrid from "./lib/TransacitonGrid.svelte";
    import LeftHandNav from "./lib/LeftHandNav.svelte";
    import Header from "./lib/Header.svelte";
</script>

<div id="header">
    <Header></Header>
</div>
<div id="body">
    <div id="navmenu">
        <LeftHandNav></LeftHandNav>
    </div>
    <div id="content">
        <TransacitonGrid></TransacitonGrid>
    </div>
</div>

<style>
    #body {
        display: grid;
        grid-template-columns: 10% 90%;
        height: 100%
    }

    #navmenu {
        border-right: 3px solid var(--theme-color);
    }

    #header {
        border-bottom: 3px solid var(--theme-color);
        height: 5%;
    }

    #content {
        padding: 10px;
    }
</style>