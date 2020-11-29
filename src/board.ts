import Player from "./player";

export type BoardOptions = {
    symbols: SymbolResources
}
export type SymbolResources = {
    x: string,
    o: string
}
export class Cell {
    private _owner: Player;

    constructor(public readonly element: HTMLElement, private readonly symbols: SymbolResources) {
        
    }

    set owner(val: Player) {
        this._owner = val;
        this.element.setAttribute('data-owner', val.playerSimbol)
    }

    static fromElement(element: HTMLElement, symbols: SymbolResources) {
        return new Cell(element);
    }
}

export default class Board {

    public readonly cells = this.cellElements.map(Cell.fromElement)

    constructor(private cellElements: HTMLElement[], public readonly options: BoardOptions) {}

    get freeCells() {

    }
}