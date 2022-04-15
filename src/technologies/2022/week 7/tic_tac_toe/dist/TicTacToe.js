"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicTacToe = void 0;
const Board_1 = require("./Board");
const Input_1 = require("./Input");
const Player_1 = require("./Player");
class TicTacToe {
    constructor() {
        this.history = [];
        this.endMessage = '';
        this.board = new Board_1.Board(3, 3);
    }
    checkFirstRowIsFull() {
        return (this.board.getBoardCellValue(1) === this.board.getBoardCellValue(2) &&
            this.board.getBoardCellValue(2) === this.board.getBoardCellValue(3) &&
            this.board.getBoardCellValue(3) !== -1);
    }
    checkSecondRowIsFull() {
        return (this.board.getBoardCellValue(4) === this.board.getBoardCellValue(5) &&
            this.board.getBoardCellValue(5) === this.board.getBoardCellValue(6) &&
            this.board.getBoardCellValue(6) !== -1);
    }
    checkThirdRowIsFull() {
        return (this.board.getBoardCellValue(7) === this.board.getBoardCellValue(8) &&
            this.board.getBoardCellValue(8) === this.board.getBoardCellValue(9) &&
            this.board.getBoardCellValue(9) !== -1);
    }
    checkFirstColumnIsFull() {
        return (this.board.getBoardCellValue(1) === this.board.getBoardCellValue(4) &&
            this.board.getBoardCellValue(4) === this.board.getBoardCellValue(7) &&
            this.board.getBoardCellValue(7) !== -1);
    }
    checkSecondColumnIsFull() {
        return (this.board.getBoardCellValue(2) === this.board.getBoardCellValue(5) &&
            this.board.getBoardCellValue(5) === this.board.getBoardCellValue(8) &&
            this.board.getBoardCellValue(8) !== -1);
    }
    checkThirdColumnIsFull() {
        return (this.board.getBoardCellValue(3) === this.board.getBoardCellValue(6) &&
            this.board.getBoardCellValue(6) === this.board.getBoardCellValue(9) &&
            this.board.getBoardCellValue(9) !== -1);
    }
    checkDiagonal1IsFull() {
        return (this.board.getBoardCellValue(1) === this.board.getBoardCellValue(5) &&
            this.board.getBoardCellValue(5) === this.board.getBoardCellValue(9) &&
            this.board.getBoardCellValue(9) !== -1);
    }
    checkInverseDiagonal1IsFull() {
        return (this.board.getBoardCellValue(3) === this.board.getBoardCellValue(5) &&
            this.board.getBoardCellValue(5) === this.board.getBoardCellValue(7) &&
            this.board.getBoardCellValue(7) !== -1);
    }
    checkValidMove(move) {
        return this.board.checkValidCellValue(move);
    }
    checkEndOfGameByWinning() {
        let lastMove = this.history[this.history.length - 1].move;
        if (lastMove >= 1 && lastMove <= 3) {
            if (this.checkFirstRowIsFull())
                return true;
        }
        else if (lastMove >= 4 && lastMove <= 6) {
            if (this.checkSecondRowIsFull())
                return true;
        }
        else if (lastMove >= 7 && lastMove <= 9) {
            if (this.checkThirdRowIsFull())
                return true;
        }
        if (lastMove === 1 || lastMove === 4 || lastMove === 7) {
            if (this.checkFirstColumnIsFull())
                return true;
        }
        else if (lastMove === 2 || lastMove === 5 || lastMove === 8) {
            if (this.checkSecondColumnIsFull())
                return true;
        }
        else if (lastMove === 3 || lastMove === 6 || lastMove === 9) {
            if (this.checkThirdColumnIsFull())
                return true;
        }
        if (lastMove === 1 || lastMove === 5 || lastMove === 9) {
            if (this.checkDiagonal1IsFull())
                return true;
        }
        if (lastMove === 3 || lastMove === 5 || lastMove === 7) {
            if (this.checkInverseDiagonal1IsFull())
                return true;
        }
        return false;
    }
    checkEndOfGameByTie() {
        return this.board.checkFullBoard();
    }
    move(player, move, value) {
        if (this.board.setBoardCellValue(move, value)) {
            this.history.push({ player, move, value });
            return true;
        }
        return false;
    }
    displayGame() {
        console.log(this.board.displayBoard(this.players[0], this.players[1]));
    }
    playersSetup() {
        return __awaiter(this, void 0, void 0, function* () {
            console.clear();
            let inputUserOne = yield Input_1.Input.getInput('What is the name of the player1?');
            let inputUserTwo = yield Input_1.Input.getInput('What is the name of the player2?');
            let startPlayer = Math.floor(Math.random() * 2);
            this.players = [
                new Player_1.Player(inputUserOne.data),
                new Player_1.Player(inputUserTwo.data),
            ];
            if (startPlayer === 1) {
                this.players = [this.players[1], this.players[0]];
            }
            console.log(`\n==== Player: ${this.players[0].name} is starting ====\n`);
        });
    }
    startGame() {
        return __awaiter(this, void 0, void 0, function* () {
            this.endMessage = '';
            this.board.clearBoard();
            yield this.playersSetup();
            let endOfGameByWinning = false;
            let endOfGameByTie = false;
            let activePlayer = 0;
            let cellNumber = 0;
            let input;
            let errorMessage = '';
            while (!(endOfGameByWinning || endOfGameByTie)) {
                console.clear();
                if (errorMessage)
                    console.log(errorMessage);
                this.displayGame();
                input = yield Input_1.Input.getInput(`${this.players[activePlayer].name} choose your cell`);
                cellNumber = Number(input.data);
                errorMessage = `⚠️⚠️That is not a valid cell, try again.⚠️⚠️`;
                if (this.checkValidMove(cellNumber)) {
                    errorMessage = `⚠️⚠️That cell is already selected, try again.⚠️⚠️`;
                    if (this.move(this.players[activePlayer], cellNumber, activePlayer === 0 ? 1 : 0)) {
                        activePlayer = activePlayer === 0 ? 1 : 0;
                        errorMessage = '';
                    }
                }
                endOfGameByTie = this.checkEndOfGameByTie();
                endOfGameByWinning = this.checkEndOfGameByWinning();
            }
            console.clear();
            this.displayGame();
            if (endOfGameByWinning)
                this.endMessage = `🥳🥳🥳 ${this.players[activePlayer === 0 ? 1 : 0].name} won the game!!!`;
            if (endOfGameByTie)
                this.endMessage = `🥴🥴🥴 Nobody won, best luck the next one...`;
            console.log(this.endMessage);
        });
    }
    showHistory() {
        console.clear();
        console.log('\n========================PREVIOUS GAME========================================');
        this.board.clearBoard();
        this.displayGame();
        const lastHistory = [...this.history];
        this.history = [];
        lastHistory.forEach((h) => {
            this.move(h.player, h.move, h.value);
            this.displayGame();
        });
        console.log(`
          ========================================
          ${this.endMessage}
          ========================================`);
    }
}
exports.TicTacToe = TicTacToe;
