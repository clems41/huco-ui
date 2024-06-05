import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-send-recommendation-top-bar',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './send-recommendation-top-bar.component.html',
  styleUrl: './send-recommendation-top-bar.component.scss'
})
export class SendRecommendationTopBarComponent {
    constructor(private location: Location) {
    }


    backClicked() {
        this.location.back();
    }

}
