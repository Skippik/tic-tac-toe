class TicTacToe {
    constructor() {
        this.step = true;
        this.stepGame = 9;
        this.areaPlay = Array.from(Array(3), () => new Array(3));
    }

    getCurrentPlayerSymbol() {
        return this.step ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.areaPlay[rowIndex][columnIndex]) return;

        this.areaPlay[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
        
        this.step = !this.step;

        this.stepGame--;
    }

    isFinished() {
        return (this.getWinner() ||  this.isDraw() ) ? true : false;
    }

    getWinner() {
        if(this.stepGame > 4) return null;


        if  (
            this.areaPlay[0][0] === this.areaPlay[1][1] && this.areaPlay[0][0] === this.areaPlay[2][2]) {
            return this.areaPlay[0][0];
        }

        if (
            this.areaPlay[0][2] === this.areaPlay[1][1] && this.areaPlay[0][2] === this.areaPlay[2][0]) {
            return this.areaPlay[0][2];
            }
        for (var i=0; i<3; i++) {

            if (this.areaPlay[i][0] && this.areaPlay[i][0] === this.areaPlay[i][1] && this.areaPlay[i][0] === this.areaPlay[i][2]) {
                return this.areaPlay[i][0];
            }

            if (this.areaPlay[0][i] && this.areaPlay[0][i] === this.areaPlay[1][i] && this.areaPlay[0][i] === this.areaPlay[2][i]) {
                return this.areaPlay[0][i];
            }

    }
    return null;
    }

    noMoreTurns() {
        return this.stepGame === 0;
    }

    isDraw() {
        if(!this.stepGame && !this.getWinner()) return true;
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.areaPlay[rowIndex][colIndex] || null;
    }
}

module.exports = TicTacToe;