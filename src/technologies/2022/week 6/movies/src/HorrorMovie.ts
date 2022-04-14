import { Movie } from "./Movie";

export class HorrorMovie extends Movie {
    jump_scares_count: number; 
    ghost: boolean;
    visions: boolean;

    constructor (
        name: string,
        director: string,
        language: string,
        running_time: number,
        year_release: number,
        jump_scares_count: number, 
        ghost: boolean,
        visions: boolean,
    ) {
        super (name, director, language, running_time, year_release); {
            this.jump_scares_count = jump_scares_count;
            this.ghost = ghost;
            this.visions = visions;
        };    
    };
    jumpScaresCount () {
        this.jump_scares_count += 1;
    };

    ghostSighting() : string {
        if (this.ghost) return '👻';
        return '😅';
    };

    realVisions () : string {
        if (this.visions) return '😱';
        return '🤐';
    };

    printHorrorMovie(){
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
    }; 
};