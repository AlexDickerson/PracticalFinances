import type { SvelteComponent } from "svelte";

export class NavMenuItem {
    Label: string;
    Link: string;
    Icon: SvelteComponent;
    constructor(label: string, link: string, icon: SvelteComponent){
        this.Label = label;
        this.Link = link;
        this.Icon = icon;
    }
}
