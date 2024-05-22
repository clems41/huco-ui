import { Component } from '@angular/core';
import {SearchService} from "../../../services/search.service";
import {TableModule} from "primeng/table";

@Component({
  selector: 'app-recent-search',
  standalone: true,
    imports: [
        TableModule
    ],
  templateUrl: './recent-search.component.html',
  styleUrl: './recent-search.component.scss'
})
export class RecentSearchComponent {
    searchHistory: string[] = [];
    constructor(private searchService: SearchService) {
        this.searchHistory = searchService.getSearchHistoryOrderByDateDesc();
    }

    onHistoryClick(query: string) {
        this.searchService.updateSearchQuery(query);
    }

}
