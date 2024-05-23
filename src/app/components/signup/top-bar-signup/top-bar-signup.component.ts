import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-top-bar-signup',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './top-bar-signup.component.html',
  styleUrl: './top-bar-signup.component.scss'
})
export class TopBarSignupComponent {

}
