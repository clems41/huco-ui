import { Injectable } from '@angular/core';
import {AuthUser, User, UserLogin, UserSignUpForm} from "../models/user";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor() { }
    public signIn(userLogin: UserLogin): Observable<AuthUser> {
        localStorage.setItem('ACCESS_TOKEN', "access_token");
        return of(new AuthUser());
    }
    public signUp(userSignUpForm: UserSignUpForm): Observable<AuthUser> {
        return of(new AuthUser());
    }
    public isLoggedIn(): Observable<boolean>{
        return of(localStorage.getItem('ACCESS_TOKEN') !== null);
    }
    public logout(): Observable<boolean> {
        localStorage.removeItem('ACCESS_TOKEN');
        return of(true);
    }
}
