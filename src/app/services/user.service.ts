import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpService} from "./http.service";
import {AuthUser, User} from "../models/user";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private usersPath = '/users';
    private ownInfoPath = '/auth/me';

    private searchQuery: BehaviorSubject<string> = new BehaviorSubject('');
    private refreshRelatedUsers: BehaviorSubject<AuthUser> = new BehaviorSubject(null);

    constructor(private httpService: HttpService) { }
    getSearchQuery() { return this.searchQuery; }
    getRefreshRelatedUsers() { return this.refreshRelatedUsers; }

    updateSearchQuery(query: string) {
        this.searchQuery.next(query);
    }

    triggerRefreshRelatedUsers(authUser: AuthUser) {
        this.refreshRelatedUsers.next(authUser);
    }

    searchUsers(query: string): Observable<User[]> {
        let queryParameters = new HttpParams();
        queryParameters = queryParameters.append('query', query);
        queryParameters = queryParameters.append('pageSize', 5);
        return this.httpService.get(
            this.usersPath,
            null,
            queryParameters,
            false
        )
            .pipe(
                map((response: any) => {
                    let result: User[] = [];
                    response.content.forEach((json: string) => {
                        result.push(new User(json));
                    });
                    return result;
                })
            );
    }

    getOwnInfo(): Observable<AuthUser> {
        return this.httpService.get(this.ownInfoPath)
            .pipe(
                map((response: AuthUser) => {
                    return response;
                })
            );
    }

    addRelatedUser(userId: string): Observable<AuthUser> {
        return this.httpService.put(this.ownInfoPath + '/related/' + userId, {})
            .pipe(
                map((response: AuthUser) => {
                    return response;
                })
            );
    }

    removeRelatedUser(userId: string): Observable<AuthUser> {
        return this.httpService.delete(this.ownInfoPath + '/related/' + userId)
            .pipe(
                map((response: AuthUser) => {
                    return response;
                })
            );
    }
}
