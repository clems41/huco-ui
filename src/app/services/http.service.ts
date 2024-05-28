import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {AppConstants} from "../constants/appConstants";
import {ErrorResponse} from "../models/interfaces/error-response";
import {catchError, map} from "rxjs";
import {AuthUser} from "../models/user";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private httpClient: HttpClient) {
    }

    public get(url: string, headers: HttpHeaders = null, queryParameters: HttpParams = null, disableAuth = false) {
        let options = this.getAuthorizationHeaders(disableAuth);
        if (queryParameters !== null) {
            options['params'] = queryParameters;
        }
        return this.httpClient.get(environment.API_URL + url, options)
            .pipe(
                catchError((error): string => {
                    throw this.handleError(error);
                })
            );
    }

    public post(url: string, body: any, disableAuth = false) {
        return this.httpClient.post(environment.API_URL + url, body, this.getAuthorizationHeaders(disableAuth))
            .pipe(
                catchError((error): string => {
                    throw this.handleError(error);
                })
            );
    }

    public put(url: string, body: any, disableAuth = false) {
        return this.httpClient.put(environment.API_URL + url, body, this.getAuthorizationHeaders(disableAuth))
            .pipe(
                catchError((error): string => {
                    throw this.handleError(error);
                })
            );
    }

    public delete(url: string, disableAuth = false) {
        return this.httpClient
            .delete(environment.API_URL + url, this.getAuthorizationHeaders(disableAuth))
            .pipe(
                catchError((error): string => {
                    throw this.handleError(error);
                })
            );
    }

    private getAuthorizationHeaders(disableAuth: boolean): {} {
        if (disableAuth) {
            return {};
        } else {
            const token = localStorage.getItem(AppConstants.ACCESS_TOKEN_LOCAL_STORAGE_ITEM_KEY);
            return {headers :new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': 'Bearer ' + token,
            })};
        }
    }

    private handleError(error: any): string {
        if (error.error !== null) {
            let response: ErrorResponse = error.error;
            if (response !== null) {
                console.error(response.errorCode);
                return response.errorMessage;
            }
        }
        return 'An unhandled error occurred';
    }
}
