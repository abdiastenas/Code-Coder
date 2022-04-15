"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(nickname) {
        this.nickname = nickname;
    }
    get name() {
        return this.nickname;
    }
    set name(name) {
        this.nickname = name;
    }
}
exports.Player = Player;
