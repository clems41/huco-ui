import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SendRecommendationComponent} from "./send-recommendation.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SendRecommendationComponent }
    ])],
    exports: [RouterModule]
})
export class SendRecommendationRoutingModule { }
