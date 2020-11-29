export enum PlayerSimbol {
    x = 'x',
    o = 'o'
}

export default class Player {
    constructor(
        public readonly isAi: boolean,
        public readonly playerSimbol: PlayerSimbol
    ) { }

    

}