"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuElement = void 0;
// import { prompt } from 'enquirer';
const uuid_1 = require("uuid");
class MenuElement {
    constructor(name, price, emoji) {
        this.name = name;
        this.price = price;
        this.emoji = emoji;
        this.id = (0, uuid_1.v4)();
    }
    ;
    printOption() {
        return `${this.name}....$${this.price}`;
    }
    ;
}
exports.MenuElement = MenuElement;
;
