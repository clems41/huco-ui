import {Injectable} from '@angular/core';
import {Movie} from "../models/movie";
import {Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RecommendationService {
    private mockMovie: Movie = {
        id: '1',
        title: 'Les évadés',
        releaseDate: '1994-09-23',
        posterPath: 'https://image.tmdb.org/t/p/w400/t30GjttOdb5At1sYy8b3TOwFgWV.jpg',
        backdropPath: 'https://image.tmdb.org/t/p/w400/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=UIzBz2hYnwc',
        genres: ['Drame', 'Crime'],
        rating: 4.2,
        runtime: 142
    };

    constructor() {
    }

    getHighlightRecommendation(): Observable<Movie> {
        return of(this.mockMovie);
    }

    getRecommendations(): Observable<Movie[]> {
        return of([this.mockMovie, this.mockMovie, this.mockMovie, this.mockMovie, this.mockMovie]);
    }
}
