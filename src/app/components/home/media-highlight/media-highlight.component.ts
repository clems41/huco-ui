import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecommendationService} from "../../../services/recommendation.service";
import {MediaWithRating} from "../../../models/media";
import {ImageModule} from "primeng/image";
import {NgOptimizedImage} from "@angular/common";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {AppConstants} from "../../../constants/appConstants";
import {DialogService} from "primeng/dynamicdialog";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-media-highlight',
    standalone: true,
    imports: [
        ImageModule,
        NgOptimizedImage,
        RatingModule,
        FormsModule,
        RouterLink
    ],
    templateUrl: './media-highlight.component.html',
    styleUrl: './media-highlight.component.scss',
    providers: [DialogService]
})
export class MediaHighlightComponent implements OnInit {
    protected movie: MediaWithRating;

    constructor(private recommendationService: RecommendationService) {
    }

    ngOnInit(): void {
        this.recommendationService.getHighlightRecommendation()
            .subscribe((res) => {
                this.movie = res;
            });
    }

    protected readonly Constants = AppConstants;
}
