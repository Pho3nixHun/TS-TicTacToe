import Board from "./board.js";
import Player from "./player.js";

export default class Game {
    constructor(private player1: Player, private player2: Player, private board: Board) {

    }
}