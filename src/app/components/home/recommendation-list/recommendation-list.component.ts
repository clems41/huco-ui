import {Component, OnInit} from '@angular/core';
import {RecommendationService} from "../../../services/recommendation.service";
import {Media, MediaWithRating} from "../../../models/media";
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import {ButtonModule} from "primeng/button";
import {ScrollerModule} from "primeng/scroller";
import {MovieUtils} from "../../../utils/movieUtils";
import {AppConstants} from "../../../constants/appConstants";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {TooltipModule} from "primeng/tooltip";
import {RouterLink} from "@angular/router";
import {Recommendation} from "../../../models/sendRecommendationForm";
import {WatchlistService} from "../../../services/watchlist.service";

@Component({
  selector: 'app-recommendation-list',
  standalone: true,
    imports: [
        CarouselModule,
        TagModule,
        ButtonModule,
        ScrollerModule,
        RatingModule,
        FormsModule,
        TooltipModule,
        RouterLink
    ],
  templateUrl: './recommendation-list.component.html',
  styleUrl: './recommendation-list.component.scss'
})
export class RecommendationListComponent implements OnInit{
    protected recommendations: Recommendation[] = [];
    constructor(private recommendationService: RecommendationService,
                private watchlistService: WatchlistService) {
    }
    ngOnInit(): void {
        this.recommendationService.getRecommendationsReceived().subscribe((recommendations) => {
            this.recommendations = recommendations;
        })
    }
    protected readonly Constants = AppConstants;
}
