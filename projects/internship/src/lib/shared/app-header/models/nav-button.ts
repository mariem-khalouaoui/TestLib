export class NavButton {

    selected: boolean = false;


    constructor(public description: string, selected: boolean) {
        this.selected = selected

    }

    selectButton() {
        this.selected = true;
    }

    deselectButton() {
        this.selected = false;
    }
}