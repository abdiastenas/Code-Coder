"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorrorMovie = void 0;
const Movie_1 = require("./Movie");
class HorrorMovie extends Movie_1.Movie {
    constructor(name, director, language, running_time, year_release, jump_scares_count, ghost, visions) {
        super(name, director, language, running_time, year_release);
        {
            this.jump_scares_count = jump_scares_count;
            this.ghost = ghost;
            this.visions = visions;
        }
        ;
    }
    ;
    jumpScaresCount() {
        this.jump_scares_count += 1;
    }
    ;
    ghostSighting() {
        if (this.ghost)
            return '👻';
        return '😅';
    }
    ;
    realVisions() {
        if (this.visions)
            return '😱';
        return '🤐';
    }
    ;
    printHorrorMovie() {
        console.log(`
        ===============================
        Name : ${this.name}
        Year: ${this.year_release}
        Director: ${this.director}
        Language: ${this.language}
        Running Time: ${this.running_time}
        Jump Scares Count: ${this.jumpScaresCount()}
        Ghosts: ${this.ghostSighting()}
        Visions: ${this.realVisions()}
        `);
    }
    ;
}
exports.HorrorMovie = HorrorMovie;
;
