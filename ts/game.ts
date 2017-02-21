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
        this._whichPlayerTurn = Math.floor(Math.random() * 1) + 0;
        this._rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    //Ends the game
    private _end(player: number) : void {
        console.log(`Game Over! Player ${player} won the game.`);
        process.exit();
        //this._rl.close();
    }

    //Checks if the game is over
    //  FIXME: uses brute force method, can be optimized
    private _gameover(): ({ over: boolean, player: number }) {

        let markAtpos0 = this._board.getMark(0),
            markAtpos1 = this._board.getMark(1),
            markAtpos2 = this._board.getMark(2),
            markAtpos3 = this._board.getMark(3),
            markAtpos4 = this._board.getMark(4),
            markAtpos5 = this._board.getMark(5),
            markAtpos6 = this._board.getMark(6),
            markAtpos7 = this._board.getMark(7),
            markAtpos8 = this._board.getMark(8);

        if(markAtpos0 === markAtpos1 &&
           markAtpos0 === markAtpos2 &&
           markAtpos0 !== null &&
           markAtpos0 !== " ") {
            return { over: true, player: this._playersMark.indexOf(markAtpos0) };
        }


        //if(pos0 === pos1 && pos0 === pos2 && pos0 !== null) {

        //}


        return { over: false, player: -1 };
    }

    //Asks player for input for the position to put the marker on
    private _askUserInput() : void {
        let self = this;

        //Ask for user input
        this._rl.question(`It is player ${self._whichPlayerTurn} turn, select a position: `,
                          function(position: number) {

            console.log(`You selected: ${position}`);

            let gameOverStat = self._gameover();
            if(gameOverStat.over) {
                self._end(gameOverStat.player);
            }
            else {
                //Make the player move
                self._board.makeMove(position,
                                     self._playersMark[self._whichPlayerTurn],
                                     (errorMessage: string) : void => {
                    if(errorMessage) {
                        console.error(errorMessage);
                    }
                    else {
                        self._board.draw();

                        //Change the turn to other player
                        self._whichPlayerTurn = self._whichPlayerTurn === 1 ? 0 : 1;
                    }
                });

                //Ask the other player for input
                self._askUserInput();
            }
        });
    }

    //Starts the game
    start() : void {
        //Show the message to players of assigned marks
        console.log(`Player 0: ${this._playersMark[0]}, Player 1: ${this._playersMark[1]}`);
        console.log("\n");

        this._askUserInput();
    }
}

export { Game };
