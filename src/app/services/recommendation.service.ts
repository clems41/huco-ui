import {Injectable} from '@angular/core';
import {Media, MediaWithRating} from "../models/media";
import {Observable, of} from "rxjs";
import {MovieUtils} from "../utils/movieUtils";

@Injectable({
    providedIn: 'root'
})
export class RecommendationService {

    constructor() {
    }

    getHighlightRecommendation(): Observable<MediaWithRating> {
        return of(MovieUtils.getMockMovieWithRating2());
    }

    getRecommendations(): Observable<MediaWithRating[]> {
        return of([MovieUtils.getMockMovieWithRating1(), MovieUtils.getMockMovieWithRating2(),
            MovieUtils.getMockMovieWithRating1(), MovieUtils.getMockMovieWithRating2(),
            MovieUtils.getMockMovieWithRating1()]);
    }
}
