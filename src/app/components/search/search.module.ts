import { NgModule } from '@angular/core';
import {SearchRoutingModule} from "./search-routing.module";
import {SearchComponent} from "./search.component";
import {TopBarSearchComponent} from "./top-bar-search/top-bar-search.component";
import {RecentSearchComponent} from "./recent-search/recent-search.component";
import {ResultSearchComponent} from "./result-search/result-search.component";

@NgModule({
    imports: [
        SearchRoutingModule,
        TopBarSearchComponent,
        RecentSearchComponent,
        ResultSearchComponent
    ],
    declarations: [SearchComponent]
})
export class SearchModule { }
