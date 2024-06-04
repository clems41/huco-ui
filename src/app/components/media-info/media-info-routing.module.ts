import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MediaInfoComponent} from "./media-info.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: MediaInfoComponent }
    ])],
    exports: [RouterModule]
})
export class MediaInfoRoutingModule { }
