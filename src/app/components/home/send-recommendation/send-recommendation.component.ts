import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-send-recommendation',
  standalone: true,
    imports: [
        ButtonModule
    ],
  templateUrl: './send-recommendation.component.html',
  styleUrl: './send-recommendation.component.scss'
})
export class SendRecommendationComponent {

}
