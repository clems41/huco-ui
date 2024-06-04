import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MediaInfoRoutingModule} from './media-info-routing.module';
import {MediaInfoComponent} from "./media-info.component";
import {MediaDetailsComponent} from "./media-details/media-details.component";
import {TopBarMediaInfoComponent} from "./top-bar-media-info/top-bar-media-info.component";


@NgModule({
    declarations: [MediaInfoComponent],
    imports: [
        CommonModule,
        MediaInfoRoutingModule,
        MediaDetailsComponent,
        TopBarMediaInfoComponent
    ]
})
export class MediaInfoModule {
}
