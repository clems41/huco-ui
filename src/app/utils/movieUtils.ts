import {Media, MediaType, MediaWithRating} from "../models/media";

export abstract class MovieUtils {
    static getMockMovie1(): Media {
        return new Media({
            id: '1',
            title: 'Inception',
            releaseDate: new Date('2010-07-16'),
            posterUrl: 'https://image.tmdb.org/t/p/w400/aej3LRUga5rhgkmRP6XMFw3ejbl.jpg',
            backdropUrl: 'https://image.tmdb.org/t/p/w400/28kKbSUvUz6P5RE1AuMJMO7IMfK.jpg',
            trailerUrl: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
            genres: ['Action', 'Science-Fiction'],
            runtime: 148,
            mediaType: MediaType.Movie,
            originalTitle: 'Inception',
            overview: 'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of another person\'s idea into a target\'s subconscious.',
            originalLanguage: 'en'
        });
    }
    static getMockMovie2(): Media {
        return new Media({
            id: '2',
            title: 'The Dark Knight',
            releaseDate: new Date('2008-07-16'),
            posterUrl: 'https://image.tmdb.org/t/p/w400/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
            backdropUrl: 'https://image.tmdb.org/t/p/w400/dqK9Hag1054tghRQSqLSfrkvQnA.jpg',
            trailerUrl: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
            genres: ['Action', 'Crime', 'Drama', 'Thriller'],
            runtime: 152,
            mediaType: MediaType.Movie,
            originalTitle: 'The Dark Knight',
            overview: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
            originalLanguage: 'en'
        });
    }
    static getMockSerie1(): Media {
        return new Media({
            id: '9ae0461e-4ed2-4ad1-87d2-e3fd4fbb48f5',
            title: 'Breaking Bad',
            releaseDate: new Date('2008-01-20'),
            posterUrl: 'https://image.tmdb.org/t/p/w400/1yeVJox3rjo2jBKrrihIMj7uoS9.jpg',
            backdropUrl: 'https://image.tmdb.org/t/p/w400/58PON1Sl5iJbW6vA2lxUq9W8Q3X.jpg',
            trailerUrl: 'https://www.youtube.com/watch?v=HhesaQXLuRY',
            genres: ['Drama'],
            runtime: 45,
            mediaType: MediaType.TvShow,
            originalTitle: 'Breaking Bad',
            overview: 'When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live, he becomes filled with a sense of fearlessness and an unrelenting desire to secure his family\'s financial future at any cost as he enters the dangerous world of drugs and crime.',
            originalLanguage: 'en'
        });
    }
    static getMockMovieWithRating1(): MediaWithRating {
        return new MediaWithRating({
            id: '770561ca-7fda-4c03-8aac-00cf252ca857',
            title: 'Inception',
            releaseDate: new Date('2010-07-16'),
            posterUrl: 'https://image.tmdb.org/t/p/w400/aej3LRUga5rhgkmRP6XMFw3ejbl.jpg',
            backdropUrl: 'https://image.tmdb.org/t/p/w400/28kKbSUvUz6P5RE1AuMJMO7IMfK.jpg',
            trailerUrl: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
            genres: ['Action', 'Science-Fiction'],
            runtime: 148,
            mediaType: MediaType.Movie,
            originalTitle: 'Inception',
            overview: 'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of another person\'s idea into a target\'s subconscious.',
            originalLanguage: 'en',
            ratingAverage: 4.5,
            ratingCount: 3,
            personalComment: 'tiptop',
            personalRating: 4.5
        });
    }
    static getMockMovieWithRating2(): MediaWithRating {
        return new MediaWithRating({
            id: '7a0c4ab8-e59d-4aa7-a867-fc216756f192',
            title: 'The Dark Knight',
            releaseDate: new Date('2008-07-16'),
            posterUrl: 'https://image.tmdb.org/t/p/w400/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
            backdropUrl: 'https://image.tmdb.org/t/p/w400/dqK9Hag1054tghRQSqLSfrkvQnA.jpg',
            trailerUrl: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
            genres: ['Action', 'Crime', 'Drama', 'Thriller'],
            runtime: 152,
            mediaType: MediaType.Movie,
            originalTitle: 'The Dark Knight',
            overview: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
            originalLanguage: 'en',
            ratingAverage: 4.8,
            ratingCount: 5,
            personalComment: 'awesome',
            personalRating: 4.8
        });
    }


}
