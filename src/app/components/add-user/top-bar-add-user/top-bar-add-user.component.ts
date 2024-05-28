import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {SearchService} from "../../../services/search.service";
import {Location} from "@angular/common";
import {debounceTime} from "rxjs";
import {UserService} from "../../../services/user.service";
import {AppConstants} from "../../../constants/appConstants";

@Component({
  selector: 'app-top-bar-add-user',
  standalone: true,
    imports: [
        FormsModule,
        InputTextModule,
        ReactiveFormsModule
    ],
  templateUrl: './top-bar-add-user.component.html',
  styleUrl: './top-bar-add-user.component.scss'
})
export class TopBarAddUserComponent {
    searchControl: FormControl;

    constructor(private userService: UserService,
                private location: Location) {
        this.searchControl = new FormControl();

        this.searchControl.valueChanges.pipe(debounceTime(500)).subscribe(query => {
            console.log('here');
            if (query.length < 3) {
                return;
            }
            this.userService.updateSearchQuery(query);
        });
    }

    backClicked() {
        this.location.back();
    }

}
