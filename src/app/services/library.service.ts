import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {map, Observable} from "rxjs";
import {MediaWithRating} from "../models/media";

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
    private libraryPath = '/library';

    constructor(private httpService: HttpService) { }

    getWatchlist(): Observable<MediaWithRating[]> {
        return this.httpService.get(this.libraryPath).pipe(
            map((response: any[]) => {
                let result: MediaWithRating[] = [];
                response.forEach((media: any) => {
                    let mediaWithRating = new MediaWithRating(media);
                    result.push(mediaWithRating);
                });
                return result;
            })
        );
    }

    addMediaToLibrary(mediaId: string) {
        return this.httpService.put(this.libraryPath + '/' + mediaId, null);
    }

    removeMediaFromLibrary(mediaId: string) {
        return this.httpService.delete(this.libraryPath + '/' + mediaId);
    }

    isMediaInLibrary(mediaId: string): Observable<boolean> {
        return this.httpService.get(this.libraryPath + '/' + mediaId)
            .pipe(
                map((response: boolean) => {
                    return response;
                })
            );
    }
}
