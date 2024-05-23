import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-top-bar-signin',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './top-bar-signin.component.html',
  styleUrl: './top-bar-signin.component.scss'
})
export class TopBarSigninComponent {

}
