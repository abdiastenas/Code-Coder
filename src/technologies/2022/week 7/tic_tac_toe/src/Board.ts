import { Player } from "./Player";

type BoardValues = -1 | 0 | 1;
export type UserOption = 0 | 1;
export class Board {
  private board: BoardValues[][] = [];
  private positionMap: Map<number, [number, number]> = new Map();
  private playerOne: string = '👽';
  private playerTwo: string = '🤖';

  constructor(private rows: number, private columns: number) {
    this.createBoard();
  }

  private createBoard(): void {
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

  private checkBoardCellToDisplay(cellValue: number): string {
    if (cellValue === 1) return this.playerOne;
    return this.playerTwo;
  }

  clearBoard(): void {
    for (let i = 0, rowslenght = this.board.length; i < rowslenght; i++) {
      for (let j = 0, colslenght = this.board[i].length; j < colslenght; j++) {
        this.board[i][j] = -1;
      }
    }
  }

  checkValidCellValue(cellNumber: number): boolean {
    return !(typeof this.positionMap.get(cellNumber) === 'undefined');
  }

  checkFullBoard(): boolean {
    let full = true;
    for (let i = 0, rowslenght = this.board.length; i < rowslenght; i++) {
      for (let j = 0, colslenght = this.board[i].length; j < colslenght; j++) {
        if (this.board[i][j] === -1) full = false;
      }
    }
    return full;
  }

  setBoardCellValue(cellNumber: number, value: UserOption): boolean {
    let position = this.positionMap.get(cellNumber)!;
    if (this.board[position[0]][position[1]] !== -1) return false;
    this.board[position[0]][position[1]] = value;
    return true;
  }

  getBoardCellValue(cellNumber: number): BoardValues {
    let position = this.positionMap.get(cellNumber)!;
    return this.board[position[0]][position[1]];
  }

  displayBoard(playerOne: Player, playerTwo: Player): string {
    let indicator = 1;
    let displayedBoard = '';
    for (let i = 0, rowslenght = this.board.length; i < rowslenght; i++) {
      displayedBoard += '\n';
      for (let j = 0, colslenght = this.board[i].length; j < colslenght; j++) {
        displayedBoard += `  ${
          this.board[i][j] === -1
            ? `${indicator} `
            : this.checkBoardCellToDisplay(this.board[i][j])
        }  |`;
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