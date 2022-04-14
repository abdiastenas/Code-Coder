import { Input, Choice, SelectChoice } from './Input';
import { Movie } from './Movie';
import { ActionMovie } from './ActionMovie';
import { HorrorMovie } from './HorrorMovie';

type ActionMovieInput = {
    name: string;
    director: string;
    language: string;
    running_time: string;
    release_year: string;
    explosions_count: string;
    guns: boolean;
    martial_arts: boolean;
}

type HorrorMovieInput = {
    name: string;
    director: string;
    language: string;
    running_time: number;
    release_year: number;
    jump_scares_count: number;
    ghost: boolean;
    visions: boolean;
}

export class Main {
    movies: Movie[] = [];
    menuOptions: SelectChoice[] = [
        { option: 1, message: 'Add Action Movie'},
        { option: 2, message: 'Add Horror Movie'},
        { option: 3, message: 'Show Action Movie'},
        { option: 4, message: 'Show Horror Movie'},
        { option: 5, message: 'How Many Cool Explosions in the Movie?'},
        { option: 6, message: 'How many Pants-wetting moments are there in the Movie'},
        { option: 7, message: 'Get me out of here'},
    ];
    actionMovieForm: Choice [] = [
        { name: 'name', message: 'Name' },
        { name: 'director', message: 'Director' },
        { name: 'language', message: 'Language' },
        { name: 'running_time', message: 'Running Time' },
        { name: 'release_year', message: 'Release Year' },
        { name: 'explosions_count', message: 'Explosion Count' },
        { name: 'guns', message: 'Guns' },
        { name: 'martial_arts', message: 'Martial Arts' },
    ];
    horrorMovieForm: Choice [] = [
        { name: 'name', message: 'Name' },
        { name: 'director', message: 'Director' },
        { name: 'language', message: 'Language' },
        { name: 'running_time', message: 'Running Time' },
        { name: 'release_year', message: 'Release Year' },
        { name: 'jump_scares_count', message: 'Holy Shirt! I wet my pants X times!' },
        { name: 'ghost', message: 'Spookies' },
        { name: 'visions', message: 'Visions' },
    ];
    async addActionMovie() {
        const info: ActionMovieInput = (
            await Input.getForm('Fill the following: ', this.actionMovieForm)
        ).data;
        const guns: boolean = (
            await Input.getConfirm('Are there guns int this movie?')
        ).data;
        const martial_arts: boolean = (
            await Input.getConfirm('Are there martial arts in this movie?')
        ).data;
        this.movies.push(
            new ActionMovie(
                info.name,
                info.director,
                info.language,
                Number(info.running_time),
                Number(info.release_year),
                Number(info.explosions_count),
                info.guns,
                info.martial_arts,
            )
        );
    };
    async addHorrorMovie() {
        const info: HorrorMovieInput = (
            await Input.getForm('Fill the following: ', this.horrorMovieForm)
        ).data;
        const ghost: boolean = (
            await Input.getConfirm('Are there ghosts in this film?')
        ).data;
        const visions: boolean = (
            await Input.getConfirm('Are there visions in this film?')
        ).data;
        this.movies.push(
            new HorrorMovie(
                info.name,
                info.director,
                info.language,
                Number(info.running_time),
                Number(info.release_year),
                Number(info.jump_scares_count),
                info.ghost,
                info.visions,
            )
        );
        showActionMovies() {
            this.movies.forEach((movie: Movie) => {
                if (movie instanceof ActionMovie) movie.printActionMovie();
            });
        }
        showHorrorMovies() {
            this.movies.forEach((movie: Movie) => {
                if (movie instanceof HorrorMovie) movie.printHorrorMovie();
            });
        }
        async incrementJumpScares() {
            const horrorMovieOptions: Choice [] = this.movies
            .filter((movie: Movie) => movie instanceof HorrorMovie)
            .map((movie: Movie) => ({
                name: movie.id,
                message: movie.name,
            }));
            if (horrorMovieOptions.length === 0) {
                return console.log('No Horror Movies Available');
            }
            const idOfMovieToIncrementJumpScares = (
                await Input.getSelectById('Select The Horror Movie', horrorMovieOptions)
            ).data;
            this.movies.forEach((movie: Movie) => {
                if (movie.id === idOfMovieToIncrementJumpScares) {
                    if (movie instanceof HorrorMovie) return movie.incrementJumpScares();
                }
            });
            console.log('😨😱💀 Jump Scare has been added!');
        }
        async incrementExplosions() {
            const actionMoviesOptions: Choice [] = this.movies
            .filter((movie: Movie) => movie instanceof ActionMovie)
            .map((movie: Movie) => ({
                name: movie.id,
                message: movie.name,
            }));
            if (actionMoviesOptions.length === 0) {
                return console.log('No Action Movies Available');
            }
            const idOfMovieToIncrementExplosions = (
                await Input.getSelectById('Select The Action Movie', actionMoviesOptions)
            ).data;
            this.movies.forEach((movie: Movie) => {
                if (movie instanceof ActionMovie) return movie.incrementExplosions();
            });
            };
            console.log('💣💥 Explosion has been added!');
        }

        async start() {
            let running = true;
            let option: number;
            while (running) {
                option = (await Input.getSelect('Blockbuster', this.menuOptions)).data;
                console.clear();
                switch (option) {
                    case 1: {
                        await this.addActionMovie();
                        break;
                    }
                    case 2: {
                        await this.addActionMovie();
                        break;
                    }
                    case 3: {
                        this.showActionMovies();
                        break;
                    }
                    case 4: {
                        this.showHorrorMovies();
                        break;
                    }
                    case 5: {
                        await this.incrementExplosions();
                        break;
                    }
                    case 6: {
                        await this.incrementJumpScares();
                        break;
                    }
                    case 7: {
                        running =false;
                        break;
                    }
                    default: {
                        console.log('No valid option selected');
                    }
                }
            }
        }


    }
};

