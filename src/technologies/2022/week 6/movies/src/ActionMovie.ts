import { Movie } from "./Movie";

export class ActionMovie extends Movie {
    explosions_count: number;
    guns: boolean;
    martial_arts: boolean;

    constructor (
        name: string,
        director: string,
        language: string,
        running_time: number,
        year_release: number,
        explosions_count: number,
        guns: boolean,
        martial_arts: boolean,
        ) {
            super (name, director, language, running_time, year_release); {
                this.explosions_count = explosions_count;
                 this.guns = guns;
                 this.martial_arts = martial_arts;
                };
            };

    explosionCount () {
        this.explosions_count += 1;
    };
    
    gunsAppearance(): string {
        if (this.guns) return '🔫';
        return '🤡';
    };

    martialArtsShow () : string {
        if (this.martial_arts) return '😤';
        return '🤥';
    }

    printActionMovie () {
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
    };
};