import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-top-bar-home',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './top-bar-home.component.html',
  styleUrl: './top-bar-home.component.scss'
})
export class TopBarHomeComponent {

}
