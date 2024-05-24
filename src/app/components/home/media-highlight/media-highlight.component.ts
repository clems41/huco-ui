import {Component, OnInit} from '@angular/core';
import {RecommendationService} from "../../../services/recommendation.service";
import {Media, MediaWithRating} from "../../../models/media";
import {ImageModule} from "primeng/image";
import {NgOptimizedImage} from "@angular/common";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {AppConstants} from "../../../constants/appConstants";

@Component({
  selector: 'app-media-highlight',
  standalone: true,
    imports: [
        ImageModule,
        NgOptimizedImage,
        RatingModule,
        FormsModule
    ],
  templateUrl: './media-highlight.component.html',
  styleUrl: './media-highlight.component.scss'
})
export class MediaHighlightComponent implements OnInit {
    protected movie: MediaWithRating;
    constructor(private recommendationService: RecommendationService) {}

    ngOnInit(): void {
        this.recommendationService.getHighlightRecommendation()
            .subscribe((res) => {
                this.movie = res;
            });
    }

    protected readonly Constants = AppConstants;
}
