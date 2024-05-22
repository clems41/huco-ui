import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {Media} from "../models/media";
import {MovieUtils} from "../utils/movieUtils";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
    private localStorageHistoryKey = "searchHistory"
    private localStorageHistoryDelimiter = ";"
    private localStorageHistoryMax = 3;
    private mockResult: Media[] = [
        MovieUtils.getMockMovie1(), MovieUtils.getMockMovie2(), MovieUtils.getMockSerie1(),
        MovieUtils.getMockSerie1(), MovieUtils.getMockMovie2(), MovieUtils.getMockMovie1(),
        MovieUtils.getMockMovie1(), MovieUtils.getMockSerie1(), MovieUtils.getMockMovie2(),
    ]

    private searchQuery: BehaviorSubject<string> = new BehaviorSubject('');

    constructor() { }
    getSearchQuery() { return this.searchQuery; }

    updateSearchQuery(query: string) {
        this.searchQuery.next(query);
    }

    searchMedias(query: string):Observable<Media[]> {
        return of(this.mockResult.sort(() => Math.random() - 0.5));
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
