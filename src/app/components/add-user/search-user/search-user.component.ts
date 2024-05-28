import {Component, OnDestroy, OnInit} from '@angular/core';
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {AuthUser, User} from "../../../models/user";
import {UserService} from "../../../services/user.service";
import {query} from "@angular/animations";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-search-user',
  standalone: true,
    imports: [
        SharedModule,
        TableModule
    ],
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.scss'
})
export class SearchUserComponent implements OnInit, OnDestroy{
    protected result: User[] = [];
    searchQuerySubscription: Subscription;

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.searchQuerySubscription = this.userService.getSearchQuery().subscribe(
            (query: string) => {
                if (query.length < 3) {
                    return;
                }
                this.userService.searchUsers(query).subscribe(
                    (users: User[]) => {
                        this.result = users;
                    }
                );
            }
        );
    }

    addRelatedUser(userId: string) {
        this.userService.addRelatedUser(userId).subscribe(
            (user: AuthUser) => {
                this.userService.triggerRefreshRelatedUsers(user);
            }
        );
    }

    ngOnDestroy(): void {
        this.searchQuerySubscription.unsubscribe();
    }

}
