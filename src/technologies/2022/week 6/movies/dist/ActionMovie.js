"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionMovie = void 0;
const Movie_1 = require("./Movie");
class ActionMovie extends Movie_1.Movie {
    constructor(name, director, language, running_time, year_release, explosions_count, guns, martial_arts) {
        super(name, director, language, running_time, year_release);
        {
            this.explosions_count = explosions_count;
            this.guns = guns;
            this.martial_arts = martial_arts;
        }
        ;
    }
    ;
    explosionCount() {
        this.explosions_count += 1;
    }
    ;
    gunsAppearance() {
        if (this.guns)
            return '🔫';
        return '🤡';
    }
    ;
    martialArtsShow() {
        if (this.martial_arts)
            return '😤';
        return '🤥';
    }
    printActionMovie() {
        console.log(`
        =================================

        Name : ${this.name}
        Year: ${this.year_release}
        Director: ${this.director}
        Language: ${this.language}
        Running Time: ${this.running_time}
        Bad Ass Xplosions: ${this.explosions_count}
        Guns: ${this.gunsAppearance()}
        Martial Arts: ${this.martialArtsShow()}

        =================================
        `);
    }
    ;
}
exports.ActionMovie = ActionMovie;
;
