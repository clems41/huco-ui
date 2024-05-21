import { NgModule } from '@angular/core';
import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./home.component";
import {MediaHighlightComponent} from "./media-highlight/media-highlight.component";
import {RecommendationListComponent} from "./recommendation-list/recommendation-list.component";
import {WatchlistListComponent} from "./watchlist-list/watchlist-list.component";

@NgModule({
    imports: [
        HomeRoutingModule,
        MediaHighlightComponent,
        RecommendationListComponent,
        WatchlistListComponent
    ],
    declarations: [HomeComponent]
})
export class HomeModule { }
