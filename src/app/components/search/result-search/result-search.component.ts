import {Component} from '@angular/core';
import {SearchService} from "../../../services/search.service";
import {Media, MediaType} from "../../../models/media";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {DataViewModule} from "primeng/dataview";
import {SkeletonModule} from "primeng/skeleton";
import {ButtonModule} from "primeng/button";
import {TagModule} from "primeng/tag";
import {Constants} from "../../../constants";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

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
        NgForOf
    ],
  templateUrl: './result-search.component.html',
  styleUrl: './result-search.component.scss'
})
export class ResultSearchComponent {
    protected searchResultSeries: Media[] = [];
    protected searchResultMovies: Media[] = [];
    protected loading: boolean = false;
    constructor(private searchService: SearchService) {
        this.searchService.getSearchQuery().subscribe(query => {
            this.updateSearchResults(query);
        });
    }

    updateSearchResults(query: string) {
        this.loading = true;
        this.searchService.searchMedias(query).subscribe(result => {
            this.searchResultMovies = result.filter(media => media.mediaType === MediaType.Movie);
            this.searchResultSeries= result.filter(media => media.mediaType === MediaType.TvShow);
            this.loading = false;
        });
        this.searchService.addQueryToSearchHistory(query);

    }
}
