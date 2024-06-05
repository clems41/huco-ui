import {Injectable} from '@angular/core';
import {Media, MediaWithRating} from "../models/media";
import {catchError, map, Observable, of} from "rxjs";
import {MovieUtils} from "../utils/movieUtils";
import {HttpService} from "./http.service";
import {HttpParams} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class WatchlistService {
    private watchlistPath = '/watchlist';

    constructor(private httpService: HttpService) {
    }

    getWatchlist(): Observable<MediaWithRating[]> {
        let queryParameters: HttpParams = new HttpParams();
        queryParameters = queryParameters.set('page', '0');
        queryParameters = queryParameters.set('sort', 'addedAt,desc');
        return this.httpService.get(this.watchlistPath, null, queryParameters).pipe(
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

    addMediaToWatchlist(mediaId: string) {
        return this.httpService.put(this.watchlistPath + '/' + mediaId, null);
    }

    removeMediaFromWatchlist(mediaId: string) {
        return this.httpService.delete(this.watchlistPath + '/' + mediaId);
    }

    isMediaInWatchlist(mediaId: string): Observable<boolean> {
        return this.httpService.get(this.watchlistPath + '/' + mediaId)
            .pipe(
                map((response: boolean) => {
                    return response;
                })
            );
    }
}
