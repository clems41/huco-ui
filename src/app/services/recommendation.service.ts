import {Injectable} from '@angular/core';
import {Media, MediaWithRating} from "../models/media";
import {map, Observable, of} from "rxjs";
import {MovieUtils} from "../utils/movieUtils";
import {Recommendation, SendRecommendationForm} from "../models/sendRecommendationForm";
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

    getRecommendationsReceived(): Observable<Recommendation[]> {
        return this.httpService.get(this.recommendationReceivedPath)
            .pipe(
                map((response: any) => {
                    let result: Recommendation[] = [];
                    response.content.forEach((json: any) => {
                        result.push(new Recommendation(json));
                    });
                    return result;
                })

            );
    }

    sendRecommendation(recommendation: SendRecommendationForm) {
        return this.httpService.post(this.recommendationPath, recommendation);
    }
}
