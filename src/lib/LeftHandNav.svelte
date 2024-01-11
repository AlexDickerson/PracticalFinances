<div class="navmenu">
    <ul>
        {#each GetNavMenuItems() as item, i}
            <li>
                {item.Label}
            </li>
        {/each}
    </ul>
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

<script lang="ts">
    function GetNavMenuItems(): NavMenuItem[] {
        let navItems : NavMenuItem[] = [];

        navItems.push(new NavMenuItem("test", "test"));
        navItems.push(new NavMenuItem("test1", "test1"));
        navItems.push(new NavMenuItem("test2", "test2"));
        navItems.push(new NavMenuItem("test3", "test3"));

        return navItems;
    }

    class NavMenuItem {
        Label: string;
        Link: string;
        constructor(label: string, link: string){
            this.Label = label;
            this.Link = link;
        }
    }
</script>