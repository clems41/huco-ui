import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchService} from "../../../services/search.service";
import {TableModule} from "primeng/table";
import {Subscription} from "rxjs";
import {query} from "@angular/animations";

@Component({
  selector: 'app-recent-search',
  standalone: true,
    imports: [
        TableModule
    ],
  templateUrl: './recent-search.component.html',
  styleUrl: './recent-search.component.scss'
})
export class RecentSearchComponent implements OnInit {
    searchHistory: string[] = [];
    constructor(private searchService: SearchService) {
    }

    onHistoryClick(query: string) {
        this.searchService.updateSearchQuery(query);
    }

    ngOnInit(): void {
        this.searchHistory = this.searchService.getSearchHistoryOrderByDateDesc();
    }

}
