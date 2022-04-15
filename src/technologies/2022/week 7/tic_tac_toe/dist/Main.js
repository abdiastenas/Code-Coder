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
exports.Main = void 0;
const TicTacToe_1 = require("./TicTacToe");
const Input_1 = require("./Input");
class Main {
    constructor() {
        this.gameMenu = [
            { option: 1, message: 'Start Game' },
            { option: 2, message: 'Show Last Game' },
            { option: 3, message: 'Exit' },
        ];
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            let option = -1;
            let input;
            let ticTacToe2 = new TicTacToe_1.TicTacToe();
            while (option !== 3) {
                input = yield Input_1.Input.getSelect('====TicTacToe====', this.gameMenu);
                option = input.data;
                switch (option) {
                    case 1:
                        yield ticTacToe2.startGame();
                        break;
                    case 2:
                        yield ticTacToe2.showHistory();
                        break;
                    case 3:
                        console.log(`\n
                    *******************************************************
                            ===========================================
                                         Let's Play! 😤🤪🐱‍👤
                            ===========================================
                    *******************************************************\n`);
                        break;
                }
            }
        });
    }
}
exports.Main = Main;
