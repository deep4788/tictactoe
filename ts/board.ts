class Board {
    private _spots: string[] = ["", "", "",
                                "", "", "",
                                "", "", ""];

    constructor() {
        //Fill board with numbers so player can choose position
        for(let i in this._spots) {
            this._spots[i] = i;
        }

        //Show initial board
        console.log(`
         ${this._spots[0]} | ${this._spots[1]} | ${this._spots[2]}
        ---|---|---
         ${this._spots[3]} | ${this._spots[4]} | ${this._spots[5]}
        ---|---|---
         ${this._spots[6]} | ${this._spots[7]} | ${this._spots[8]}
        `);

        //Empty the spots; we don't need numbers at them anymore
        for(let i in this._spots) {
            this._spots[i] = " ";
        }
    }

    //Checks if the spot at @position is empty or not
    private _spotEmpty(position: number): boolean {
        if(position >= 0 && position <= 8) {
            return this._spots[position] === " ";
        }
    }

    //Draws the current board
    draw() : void {
        console.log(`
         ${this._spots[0]} | ${this._spots[1]} | ${this._spots[2]}
        ---|---|---
         ${this._spots[3]} | ${this._spots[4]} | ${this._spots[5]}
        ---|---|---
         ${this._spots[6]} | ${this._spots[7]} | ${this._spots[8]}
        `);
    }

    //Put the marker @mark on the @position and calls the callback
    makeMove(position: number, mark: string, callback: (err: string) => any) : void {
        if(position < 0 || position > 8) {
            callback("Your selection should be between 0 and 8.");
        }
        else if(this._spotEmpty(position) === false) {
            callback("That spot is taken.");
        }
        else {
            this._spots[position] = mark;
            callback(undefined);
        }
    }

    //Returns the marker at the @position
    getMark(position: number) : string {
        return this._spots[position];
    }
}

export { Board };
