import {Injectable} from '@angular/core';
import {AuthUser, User, UserLogin, UserSignUpForm} from "../models/user";
import {map, Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpService} from "./http.service";
import {HttpHeaders} from "@angular/common/http";
import {AppConstants} from "../constants/appConstants";
import {AuthSignInResponse} from "../models/interfaces/auth-signin-response";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private authPath = '/auth';
    private signInPath = this.authPath + '/sign-in';
    private signUpPath = this.authPath + '/sign-up';

    constructor(private httpService: HttpService) {
    }

    public signIn(userLogin: UserLogin): Observable<AuthSignInResponse> {
        let headers = this.getAuthorizationHeaders(userLogin.username, userLogin.password);
        return this.httpService.get(
            this.signInPath,
            headers,
            null,
            true
        ).pipe(
            map((response: AuthSignInResponse) => {
                    localStorage.setItem(AppConstants.ACCESS_TOKEN_LOCAL_STORAGE_ITEM_KEY, response.token.tokenString);
                    localStorage.setItem(AppConstants.ACCESS_TOKEN_EXPIRATION_DATE_LOCAL_STORAGE_ITEM_KEY, response.token.expirationDate);
                    return response;
                }
            ));
    }

    public signUp(userSignUpForm: UserSignUpForm): Observable<AuthUser> {
        return this.httpService
            .post(this.signUpPath, userSignUpForm, true)
            .pipe(
                map((response: AuthUser) => {
                    return response;
                })
            );
    }

    public isLoggedIn(): Observable<boolean> {
        let token = localStorage.getItem(AppConstants.ACCESS_TOKEN_LOCAL_STORAGE_ITEM_KEY);
        let expirationDate: Date = new Date(localStorage.getItem(AppConstants.ACCESS_TOKEN_EXPIRATION_DATE_LOCAL_STORAGE_ITEM_KEY));
        console.log(expirationDate);
        if (token === null) {
            return of(false);
        }
        if (expirationDate < new Date()) {
            return of(false);
        }
        return of(true);
    }

    public logout(): Observable<boolean> {
        localStorage.removeItem(AppConstants.ACCESS_TOKEN_LOCAL_STORAGE_ITEM_KEY);
        return of(true);
    }

    private getAuthorizationHeaders(username: string, password: string): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(username + ':' + password),
        });
    }
}
