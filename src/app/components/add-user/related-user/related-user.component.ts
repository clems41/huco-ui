import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthUser, User} from "../../../models/user";
import {UserService} from "../../../services/user.service";
import {TableModule} from "primeng/table";
import {NgIf} from "@angular/common";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-related-user',
  standalone: true,
    imports: [
        TableModule,
        NgIf
    ],
  templateUrl: './related-user.component.html',
  styleUrl: './related-user.component.scss'
})
export class RelatedUserComponent implements OnInit, OnDestroy  {
    protected relatedUsers: User[] = [];
    private refreshRelatedUsersSubscription: Subscription;

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.userService.getOwnInfo().subscribe(
            (user: AuthUser) => {
                this.relatedUsers = user.relatedUsers;
            }
        );
        this.refreshRelatedUsersSubscription = this.userService.getRefreshRelatedUsers().subscribe(
            (authUser: AuthUser) => {
                this.relatedUsers = authUser?.relatedUsers;
            }
        )
    }

    removeRelatedUser(userId: string) {
        this.userService.removeRelatedUser(userId).subscribe(
            (user: AuthUser) => {
                this.relatedUsers = user.relatedUsers;
            }
        );
    }

    ngOnDestroy(): void {
        this.refreshRelatedUsersSubscription.unsubscribe();
    }

}
