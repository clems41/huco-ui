import {Component, OnInit} from '@angular/core';
import {RecommendationService} from "../../../services/recommendation.service";
import {Movie} from "../../../models/movie";
import {CarouselModule} from "primeng/carousel";
import {TagModule} from "primeng/tag";
import {ButtonModule} from "primeng/button";
import {ScrollerModule} from "primeng/scroller";
import {Utils} from "../../../utils/utils";

@Component({
  selector: 'app-recommendation-list',
  standalone: true,
    imports: [
        CarouselModule,
        TagModule,
        ButtonModule,
        ScrollerModule
    ],
  templateUrl: './recommendation-list.component.html',
  styleUrl: './recommendation-list.component.scss'
})
export class RecommendationListComponent implements OnInit{
    protected recommendations: Movie[] = [];
    constructor(private recommendationService: RecommendationService) {
    }
    ngOnInit(): void {
        this.recommendationService.getRecommendations().subscribe((recommendations) => {
            this.recommendations = recommendations;
        })
    }

    protected readonly Math = Math;
    protected readonly Utils = Utils;
}
