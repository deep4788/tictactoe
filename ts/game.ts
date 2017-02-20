import * as readline from "readline";
import * as shuffle from "shuffle-array";

import * as board from "./board";

class Game {
    private _board: board.Board;
    private _playersMark: string[];
    private _whichPlayerTurn: number;
    private _rl: any;

    constructor() {
        this._board = new board.Board();
        this._playersMark = shuffle(["x", "o"]);
        console.log(this._playersMark);
        this._whichPlayerTurn = Math.floor(Math.random() * 2) + 1;
        this._rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    private _end() {
        console.log("Game Over!");
        //this._rl.close();
    }

    private _gameover(): boolean {
        return false;
    }

    private _askUserInput() {
        let self = this;

        //Ask for user input
        this._rl.question(`It is player ${self._whichPlayerTurn} turn, select a position: `, function(position: number) {
            console.log(`You selected: ${position}`);

            if(position < 1 || position > 9) {
                console.log("Your selection should be between 1 and 9.");
                self._askUserInput();
            }

            if(self._board.spotEmpty(position) === false) {
                console.log("That spot is taken.");
                self._askUserInput();
            }

            if(self._gameover()) {
                self._end();
            }
            else {
                self._whichPlayerTurn = self._whichPlayerTurn === 1 ? 2 : 1;

                //Ask the other player for input
                self._askUserInput();
            }
        });
    }

    start() {
        this._askUserInput();
        //this._board.draw();
    }
}

export { Game };
