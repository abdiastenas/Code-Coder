// import { prompt } from 'enquirer';
import { v4 as uuidv4 } from 'uuid';

export class MenuElement {
    id: string;
    name: string;
    price: number;
    emoji: string;

    constructor( name: string, price: number, emoji: string ) {
        this.name = name;
        this.price = price;
        this.emoji = emoji;
        this.id = uuidv4();
    };

    printOption () {
        return `${this.name}....$${this.price}`;
    };
};