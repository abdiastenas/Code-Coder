import { v4 as uuidv4 } from 'uuid';

export class Movie {
    id: string = '';
    name: string;
    director: string;
    language: string;
    running_time: number;
    year_release: number;

    constructor (
    name: string,
    director: string,
    language: string,
    running_time: number,
    year_release: number,
    ) {
        this.name = name;
        this.director = director;
        this.language = language;
        this.running_time = running_time;
        this.year_release = year_release;
        id: uuidv4();
    };
};