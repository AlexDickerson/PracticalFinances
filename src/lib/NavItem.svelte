<script lang="ts">
    export let Label : string;
</script>

<div class="nav-item">
    <div class="nav nav-icon">
        <slot />
    </div>
    <div class="nav nav-text">
        {Label}
    </div>
</div>

<style>
    .nav-item {
        display: grid;
        grid-template-columns: 50px 50px;
        margin-left: 20px;
        margin-top: 20px;
        padding: 0px;
        column-gap: 10px;
    }

    .nav {
        display: flex;
        align-items: center;
    }

    .nav-icon {
        justify-content: center;
    }

    .nav-text {
        justify-content: left;
    }
</style>