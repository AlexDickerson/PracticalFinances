<script lang="ts">
    import NavItem from "./NavItem.svelte";
    import SvelteLogo from 'virtual:icons/logos/svelte-icon'
    import MdiStore24Hour from 'virtual:icons/mdi/store-24-hour'
    import IconAccessibility from '~icons/carbon/accessibility'
</script>

<div class="navmenu">
    <NavItem Label="Overview"><SvelteLogo style="font-size:2em" /></NavItem>
    <NavItem Label="Overview"><SvelteLogo style="font-size:2em" /></NavItem>
    <NavItem Label="Overview"><SvelteLogo style="font-size:2em" /></NavItem>
    <NavItem Label="Overview"><SvelteLogo style="font-size:2em" /></NavItem>
</div>

<style>
    .navmenu {
        & ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
    }
</style>