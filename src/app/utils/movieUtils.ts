import {Media, MediaType, MediaWithRating} from "../models/media";

export abstract class MovieUtils {
    static getMockMovie1(): Media {
        return new Media(
            '1',
            'Les évadés',
            new Date('1994-09-23'),
            'https://image.tmdb.org/t/p/w400/t30GjttOdb5At1sYy8b3TOwFgWV.jpg',
            'https://image.tmdb.org/t/p/w400/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
            'https://www.youtube.com/watch?v=UIzBz2hYnwc',
            ['Drame', 'Crime'],
            142,
            MediaType.Movie
        );
    }
    static getMockMovie2(): Media {
        return new Media(
            '2',
            'The Dark Knight',
            new Date('2008-07-16'),
            'https://image.tmdb.org/t/p/w400/pyNXnq8QBWoK3b37RS6C3axwUOy.jpg',
            'https://image.tmdb.org/t/p/w400/dqK9Hag1054tghRQSqLSfrkvQnA.jpg',
            'https://www.youtube.com/watch?v=XGqgxGBn7Qw',
            ['Action', 'Crime'],
            152,
            MediaType.Movie
        );
    }
    static getMockSerie1(): Media {
        return new Media(
            '3',
            'Dark',
            new Date('2017-12-01'),
            'https://image.tmdb.org/t/p/w400/vbG0zu0lIVDZZaUVOZuBIE9kno3.jpg',
            'https://image.tmdb.org/t/p/w400/75HgaphatW0PDI3XIHQWZUpbhn6.jpg',
            'https://www.youtube.com/watch?v=vx9HQwjTcXI',
            ['Mystère', 'Drame'],
            50,
            MediaType.TvShow
        );
    }
    static getMockMovieWithRating1(): MediaWithRating {
        return new MediaWithRating(this.getMockMovie1(), 3.7, 12);
    }
    static getMockMovieWithRating2(): MediaWithRating {
        return new MediaWithRating(this.getMockMovie2(), 4.5, 3);
    }


}
