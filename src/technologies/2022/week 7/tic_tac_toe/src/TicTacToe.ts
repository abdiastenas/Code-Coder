import { Board, UserOption } from "./Board";
import { Input, UserInput } from "./Input";
import { Player } from "./Player";

type History = {
    player: Player;
    move: number;
    value: UserOption;
};

export class TicTacToe {
    private history: History[] = [];
    private endMessage: string = '';
    private board: Board;
    private players!: [Player, Player];

    constructor() {
        this.board = new Board(3, 3);
    }

    private checkFirstRowIsFull(): boolean {
        return (
            this.board.getBoardCellValue(1) === this.board.getBoardCellValue(2) &&
            this.board.getBoardCellValue(2) === this.board.getBoardCellValue(3) &&
            this.board.getBoardCellValue(3) !== -1
        );
    }

    private checkSecondRowIsFull(): boolean {
        return (
            this.board.getBoardCellValue(4) === this.board.getBoardCellValue(5) &&
            this.board.getBoardCellValue(5) === this.board.getBoardCellValue(6) &&
            this.board.getBoardCellValue(6) !== -1
        );
    }

    private checkThirdRowIsFull(): boolean {
        return (
            this.board.getBoardCellValue(7) === this.board.getBoardCellValue(8) &&
            this.board.getBoardCellValue(8) === this.board.getBoardCellValue(9) &&
            this.board.getBoardCellValue(9) !== -1
        );
    }

    private checkFirstColumnIsFull(): boolean {
        return (
            this.board.getBoardCellValue(1) === this.board.getBoardCellValue(4) &&
            this.board.getBoardCellValue(4) === this.board.getBoardCellValue(7) &&
            this.board.getBoardCellValue(7) !== -1
        );
    }

    private checkSecondColumnIsFull(): boolean {
        return (
            this.board.getBoardCellValue(2) === this.board.getBoardCellValue(5) &&
            this.board.getBoardCellValue(5) === this.board.getBoardCellValue(8) &&
            this.board.getBoardCellValue(8) !== -1
        );
    }

    private checkThirdColumnIsFull(): boolean {
        return (
            this.board.getBoardCellValue(3) === this.board.getBoardCellValue(6) &&
            this.board.getBoardCellValue(6) === this.board.getBoardCellValue(9) &&
            this.board.getBoardCellValue(9) !== -1
        );
    }

    private checkDiagonal1IsFull(): boolean {
        return (
            this.board.getBoardCellValue(1) === this.board.getBoardCellValue(5) &&
            this.board.getBoardCellValue(5) === this.board.getBoardCellValue(9) &&
            this.board.getBoardCellValue(9) !== -1
        );
    }

    private checkInverseDiagonal1IsFull(): boolean {
        return (
            this.board.getBoardCellValue(3) === this.board.getBoardCellValue(5) &&
            this.board.getBoardCellValue(5) === this.board.getBoardCellValue(7) &&
            this.board.getBoardCellValue(7) !== -1
        );
    }

    private checkValidMove(move: number): boolean {
        return this.board.checkValidCellValue(move);
    }

    private checkEndOfGameByWinning(): boolean {
        let lastMove = this.history[this.history.length - 1].move;
        if (lastMove >= 1 && lastMove <= 3) {
            if (this.checkFirstRowIsFull()) return true;
        } else if (lastMove >= 4 && lastMove <= 6) {
            if (this.checkSecondRowIsFull()) return true;
        } else if (lastMove >= 7 && lastMove <= 9) {
            if (this.checkThirdRowIsFull()) return true;
        }
        if (lastMove === 1 || lastMove === 4 || lastMove === 7) {
            if (this.checkFirstColumnIsFull()) return true;
        } else if (lastMove === 2 || lastMove === 5 || lastMove === 8) {
            if (this.checkSecondColumnIsFull()) return true;
        } else if (lastMove === 3 || lastMove === 6 || lastMove === 9) {
            if (this.checkThirdColumnIsFull()) return true;
        }
        if (lastMove === 1 || lastMove === 5 || lastMove === 9) {
            if (this.checkDiagonal1IsFull()) return true;
        }
        if (lastMove === 3 || lastMove === 5 || lastMove === 7) {
            if (this.checkInverseDiagonal1IsFull()) return true;
        }
        return false;
    }

    private checkEndOfGameByTie (): boolean {
        return this.board.checkFullBoard();
    }
    
    private move(player: Player, move: number, value: UserOption): boolean {
        if (this.board.setBoardCellValue(move, value)) {
            this.history.push({ player, move, value });
            return true;
        }
        return false;
    }

    private displayGame(): void {
        console.log(this.board.displayBoard(this.players[0], this.players[1]));
    }

    async playersSetup() {
        console.clear();
        let inputUserOne = await Input.getInput('What is the name of the player1?');
        let inputUserTwo = await Input.getInput('What is the name of the player2?');
        let startPlayer = Math.floor(Math.random() * 2);
        this.players = [
            new Player(inputUserOne.data),
            new Player(inputUserTwo.data),
        ];
        if (startPlayer === 1) {
            this.players = [this.players[1], this.players[0]];
        }
        console.log(`\n==== Player: ${this.players[0].name} is starting ====\n`);
    }

    async startGame() {
        this.endMessage = '';
        this.board.clearBoard();
        await this.playersSetup();
        let endOfGameByWinning = false;
        let endOfGameByTie = false;
        let activePlayer = 0;
        let cellNumber = 0;
        let input: UserInput;
        let errorMessage = '';
        while (!(endOfGameByWinning || endOfGameByTie)) {
          console.clear();
          if (errorMessage) console.log(errorMessage);
          this.displayGame();
          input = await Input.getInput(
            `${this.players[activePlayer].name} choose your cell`
          );
          cellNumber = Number(input.data);
          errorMessage = `⚠️⚠️That is not a valid cell, try again.⚠️⚠️`;
          if (this.checkValidMove(cellNumber)) {
            errorMessage = `⚠️⚠️That cell is already selected, try again.⚠️⚠️`;
            if (
              this.move(
                this.players[activePlayer],
                cellNumber,
                activePlayer === 0 ? 1 : 0
              )
            ) {
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
          this.endMessage = `🥳🥳🥳 ${
            this.players[activePlayer === 0 ? 1 : 0].name
          } won the game!!!`;
        if (endOfGameByTie)
          this.endMessage = `🥴🥴🥴 Nobody won, best luck the next one...`;
        console.log(this.endMessage);
      }
    
      showHistory(): void {
        console.clear();
        console.log(
          '\n========================PREVIOUS GAME========================================'
        );
        this.board.clearBoard();
        this.displayGame();
        const lastHistory = [...this.history];
        this.history = [];
        lastHistory.forEach((h: History) => {
          this.move(h.player, h.move, h.value);
          this.displayGame();
        });
        console.log(`
          ========================================
          ${this.endMessage}
          ========================================`);
    }
}