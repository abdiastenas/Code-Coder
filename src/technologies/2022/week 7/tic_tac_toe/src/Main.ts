import { TicTacToe } from "./TicTacToe";
import { Input, UserOption } from "./Input";

export class Main {
    gameMenu = [
        { option: 1, message: 'Start Game' },
        { option: 2, message: 'Show Last Game' },
        { option: 3, message: 'Exit' },
    ];

    async start() {
        let option = -1;
        let input: UserOption;
        let ticTacToe2 = new TicTacToe();
        while (option !== 3) {
            input = await Input.getSelect('====TicTacToe====', this.gameMenu);
            option = input.data;
            switch (option) {
                case 1:
                    await ticTacToe2.startGame();
                    break;
                case 2:
                    await ticTacToe2.showHistory();
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
    }
}