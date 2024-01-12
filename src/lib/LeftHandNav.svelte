<script lang="ts">
    import NavItem from "./NavItem.svelte";
    import SvelteLogo from 'virtual:icons/logos/svelte-icon';
    import Overview from 'virtual:icons/material-symbols/overview-key-outline';
    import Retire from 'virtual:icons/material-symbols/stacked-line-chart-rounded';
    import Income from 'virtual:icons/mdi/cash-fast';
    import Transaction from 'virtual:icons/mdi/bank';
</script>

<div class="navmenu">
    <NavItem Label="Overview"><Overview style="font-size:2em" /></NavItem>
    <NavItem Label="Transactions"><Transaction style="font-size:2em" /></NavItem>
    <NavItem Label="Income"><Income style="font-size:2em" /></NavItem>
    <NavItem Label="Retirement"><Retire style="font-size:2em" /></NavItem>
</div>

<style>
</style>