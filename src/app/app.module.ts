import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import {RecommendationService} from "./services/recommendation.service";
import {MessageService} from "primeng/api";
import {DialogService} from "primeng/dynamicdialog";

@NgModule({
    declarations: [AppComponent],
    imports: [AppRoutingModule, AppLayoutModule],
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        RecommendationService,
        MessageService,
        DialogService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
