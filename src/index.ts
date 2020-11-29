import ready from './ready.js';

import Board from './board.js';
import Game from './game.js';
import Player from './player.js';

(async () => {
    const temp1 = await ready();
    console.log(temp1);
})();