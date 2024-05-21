import { Injectable } from '@angular/core';
import {Movie} from "../models/movie";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
    private mockMovie: Movie = {
        id: '1',
        title: 'The Dark Knight',
        releaseDate: '2008-07-16',
        posterPath: 'https://image.tmdb.org/t/p/w400/pyNXnq8QBWoK3b37RS6C3axwUOy.jpg',
        backdropPath: 'https://image.tmdb.org/t/p/w400/dqK9Hag1054tghRQSqLSfrkvQnA.jpg',
        trailerUrl: 'https://www.youtube.com/watch?v=XGqgxGBn7Qw',
        genres: ['Drame', 'Action', 'Crime', 'Thriller'],
        rating: 4.2,
        runtime: 142
    };

  constructor() { }

    getWatchlist(): Observable<Movie[]> {
        return of([this.mockMovie, this.mockMovie, this.mockMovie, this.mockMovie, this.mockMovie]);
    }
}
