import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {SearchService} from "../../../services/search.service";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-top-bar-search',
  standalone: true,
    imports: [
        RouterLink,
        FormsModule,
        InputTextModule,
        ReactiveFormsModule,
    ],
  templateUrl: './top-bar-search.component.html',
  styleUrl: './top-bar-search.component.scss'
})
export class TopBarSearchComponent {
    searchControl: FormControl;

    constructor(private searchService: SearchService) {
        this.searchControl = new FormControl();

        this.searchControl.valueChanges.pipe(debounceTime(500)).subscribe(query => {
            this.searchService.updateSearchQuery(query);
        });

        this.searchService.getSearchQuery().subscribe(query => {
            this.searchControl.setValue(query, {emitEvent: false});
        });
    }

}
