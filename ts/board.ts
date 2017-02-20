class Board {
    _spots: string[] = ["", "", "",
                        "", "", "",
                        "", "", ""];

    //TODO add comments everywhere
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

    draw() {
        console.log(`
         ${this._spots[0]} | ${this._spots[1]} | ${this._spots[2]}
        ---|---|---
         ${this._spots[3]} | ${this._spots[4]} | ${this._spots[5]}
        ---|---|---
         ${this._spots[6]} | ${this._spots[7]} | ${this._spots[8]}
        `);
    }

    spotEmpty(position: number): boolean {
        return this._spots[position] === " ";
    }

    makeMove(position: number, mark: string) {
        this._spots[position] = mark;
    }

    /*
    update() {

    }

    clear() {

    }
    */
}








export { Board };
