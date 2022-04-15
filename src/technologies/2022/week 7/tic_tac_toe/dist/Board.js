"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
class Board {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.board = [];
        this.positionMap = new Map();
        this.playerOne = '👽';
        this.playerTwo = '🤖';
        this.createBoard();
    }
    createBoard() {
        this.board = [];
        this.positionMap = new Map();
        let indicator = 1;
        for (let i = 0; i < this.rows; i++) {
            this.board.push([]);
            for (let j = 0; j < this.columns; j++) {
                this.board[i].push(-1);
                this.positionMap.set(indicator, [i, j]);
                indicator++;
            }
        }
    }
    checkBoardCellToDisplay(cellValue) {
        if (cellValue === 1)
            return this.playerOne;
        return this.playerTwo;
    }
    clearBoard() {
        for (let i = 0, rowslenght = this.board.length; i < rowslenght; i++) {
            for (let j = 0, colslenght = this.board[i].length; j < colslenght; j++) {
                this.board[i][j] = -1;
            }
        }
    }
    checkValidCellValue(cellNumber) {
        return !(typeof this.positionMap.get(cellNumber) === 'undefined');
    }
    checkFullBoard() {
        let full = true;
        for (let i = 0, rowslenght = this.board.length; i < rowslenght; i++) {
            for (let j = 0, colslenght = this.board[i].length; j < colslenght; j++) {
                if (this.board[i][j] === -1)
                    full = false;
            }
        }
        return full;
    }
    setBoardCellValue(cellNumber, value) {
        let position = this.positionMap.get(cellNumber);
        if (this.board[position[0]][position[1]] !== -1)
            return false;
        this.board[position[0]][position[1]] = value;
        return true;
    }
    getBoardCellValue(cellNumber) {
        let position = this.positionMap.get(cellNumber);
        return this.board[position[0]][position[1]];
    }
    displayBoard(playerOne, playerTwo) {
        let indicator = 1;
        let displayedBoard = '';
        for (let i = 0, rowslenght = this.board.length; i < rowslenght; i++) {
            displayedBoard += '\n';
            for (let j = 0, colslenght = this.board[i].length; j < colslenght; j++) {
                displayedBoard += `  ${this.board[i][j] === -1
                    ? `${indicator} `
                    : this.checkBoardCellToDisplay(this.board[i][j])}  |`;
                indicator++;
            }
            displayedBoard = displayedBoard.slice(0, -1);
            if (i !== rowslenght - 1) {
                displayedBoard += '\n ------------------';
            }
        }
        return `\n============================\n${playerOne.name}: ${this.playerOne}\n${playerTwo.name}: ${this.playerTwo}\n============================\n${displayedBoard}\n`;
    }
}
exports.Board = Board;
