import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchService} from "../../../services/search.service";
import {Media, MediaType} from "../../../models/media";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {DataViewModule} from "primeng/dataview";
import {SkeletonModule} from "primeng/skeleton";
import {ButtonModule} from "primeng/button";
import {TagModule} from "primeng/tag";
import {AppConstants} from "../../../constants/appConstants";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {Subscription} from "rxjs";
import {query} from "@angular/animations";

@Component({
    selector: 'app-result-search',
    standalone: true,
    imports: [
        ProgressSpinnerModule,
        DataViewModule,
        SkeletonModule,
        ButtonModule,
        TagModule,
        RatingModule,
        FormsModule,
        NgForOf,
        NgIf
    ],
    templateUrl: './result-search.component.html',
    styleUrl: './result-search.component.scss'
})
export class ResultSearchComponent implements OnDestroy, OnInit{
    protected searchResultSeries: Media[] = [];
    protected searchResultMovies: Media[] = [];
    protected loading: boolean = false;
    private searchQuerySubscription: Subscription;

    constructor(private searchService: SearchService) {
    }

    updateSearchResults(query: string) {
        if (query.length < 3) {
            return;
        }
        this.loading = true;
        this.searchService.searchMedias(query).subscribe(result => {
            result = result.filter(media => media.posterPath !== null)
            this.searchResultMovies = result
                .filter(media => media.mediaType === MediaType.Movie)
                .slice(0, AppConstants.MAX_SEARCH_RESULTS_BY_MEDIA_TYPE);
            this.searchResultSeries = result
                .filter(media => media.mediaType === MediaType.TvShow)
                .slice(0, AppConstants.MAX_SEARCH_RESULTS_BY_MEDIA_TYPE);
            this.loading = false;
        });
        this.searchService.addQueryToSearchHistory(query);

    }

    ngOnDestroy(): void {
        this.searchQuerySubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.searchQuerySubscription = this.searchService.getSearchQuery().subscribe(query => {
            this.updateSearchResults(query);
        });
    }
}
