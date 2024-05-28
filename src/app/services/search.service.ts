import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable, of} from "rxjs";
import {Media, MediaWithRating} from "../models/media";
import {MovieUtils} from "../utils/movieUtils";
import {HttpService} from "./http.service";
import {HttpParams} from "@angular/common/http";
import {AuthUser} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
    private localStorageHistoryKey = "searchHistory"
    private localStorageHistoryDelimiter = ";"
    private localStorageHistoryMax = 3;
    private searchPath = '/medias';

    private searchQuery: BehaviorSubject<string> = new BehaviorSubject('');

    constructor(private httpService: HttpService) { }
    getSearchQuery() { return this.searchQuery; }

    updateSearchQuery(query: string) {
        this.searchQuery.next(query);
    }

    searchMedias(query: string):Observable<MediaWithRating[]> {
        let queryParameters = new HttpParams();
        queryParameters = queryParameters.append('query', query);
        return this.httpService.get(
            this.searchPath,
            null,
            queryParameters,
            false
        )
            .pipe(
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

    private getSearchHistory(): string[] {
        let searchHistory = localStorage.getItem(this.localStorageHistoryKey);
        return searchHistory == null ? [] : searchHistory
            .split(this.localStorageHistoryDelimiter);
    }

    getSearchHistoryOrderByDateDesc(): string[] {
        return this.getSearchHistory().reverse();
    }

    addQueryToSearchHistory(query: string) {
        let searchHistory = this.getSearchHistory();
        if (!searchHistory.includes(query) && query != "") {
            // add element into history
            if (searchHistory.length >= this.localStorageHistoryMax) {
                searchHistory.shift();
            }
            searchHistory.push(query);
            localStorage.setItem(this.localStorageHistoryKey, searchHistory.join(this.localStorageHistoryDelimiter));
        }
    }
}
