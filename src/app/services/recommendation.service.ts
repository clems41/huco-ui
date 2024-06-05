import {Injectable} from '@angular/core';
import {Media, MediaWithRating} from "../models/media";
import {map, Observable, of} from "rxjs";
import {MovieUtils} from "../utils/movieUtils";
import {Recommendation} from "../models/recommendation";
import {HttpService} from "./http.service";

@Injectable({
    providedIn: 'root'
})
export class RecommendationService {
    private recommendationPath = '/recommendations';
    private recommendationReceivedPath = this.recommendationPath + '/received';

    constructor(private httpService: HttpService) {
    }

    getHighlightRecommendation(): Observable<MediaWithRating> {
        return of(MovieUtils.getMockMovieWithRating2());
    }

    getRecommendationsReceived(): Observable<MediaWithRating[]> {
        return this.httpService.get(this.recommendationReceivedPath)
            .pipe(
                map((response: any) => {
                    let result: MediaWithRating[] = [];
                    response.content.forEach((media: any) => {
                        let mediaWithRating = new MediaWithRating(media);
                        result.push(mediaWithRating);
                    });
                    return result;
                })

            );
    }

    sendRecommendation(recommendation: Recommendation) {
        return this.httpService.post(this.recommendationPath, recommendation);
    }
}
