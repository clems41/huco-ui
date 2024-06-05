import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MediaWithRating} from "../../../models/media";

@Component({
    selector: 'app-send-recommendation-form',
    standalone: true,
    imports: [],
    templateUrl: './send-recommendation-form.component.html',
    styleUrl: './send-recommendation-form.component.scss'
})
export class SendRecommendationFormComponent implements OnInit, OnDestroy {
    protected media: MediaWithRating;

    constructor(private router: Router) {
        this.media = this.router.getCurrentNavigation() != null ?
            this.router.getCurrentNavigation().extras.state['media'] :
            null;
    }

    ngOnDestroy(): void {
    }

    ngOnInit(): void {
    }

}
