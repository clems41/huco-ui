import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-top-bar-media-info',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './top-bar-media-info.component.html',
  styleUrl: './top-bar-media-info.component.scss'
})
export class TopBarMediaInfoComponent {
    constructor(private location: Location) {
    }


    backClicked() {
        this.location.back();
    }
}
