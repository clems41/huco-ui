import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendRecommendationRoutingModule } from './send-recommendation-routing.module';
import {SendRecommendationComponent} from "./send-recommendation.component";
import {SendRecommendationTopBarComponent} from "./send-recommendation-top-bar/send-recommendation-top-bar.component";
import {SendRecommendationFormComponent} from "./send-recommendation-form/send-recommendation-form.component";


@NgModule({
  declarations: [SendRecommendationComponent],
    imports: [
        CommonModule,
        SendRecommendationRoutingModule,
        SendRecommendationTopBarComponent,
        SendRecommendationFormComponent
    ]
})
export class SendRecommendationModule { }
