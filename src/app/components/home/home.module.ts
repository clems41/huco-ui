import { NgModule } from '@angular/core';
import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./home.component";
import {MediaHighlightComponent} from "./media-highlight/media-highlight.component";
import {RecommendationListComponent} from "./recommendation-list/recommendation-list.component";
import {WatchlistListComponent} from "./watchlist-list/watchlist-list.component";
import {TopBarHomeComponent} from "./top-bar-home/top-bar-home.component";
import {ButtonModule} from "primeng/button";

@NgModule({
    imports: [
        HomeRoutingModule,
        MediaHighlightComponent,
        RecommendationListComponent,
        WatchlistListComponent,
        TopBarHomeComponent,
        ButtonModule,
    ],
    declarations: [HomeComponent]
})
export class HomeModule { }
