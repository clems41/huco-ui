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
        if (!disableAuth) {
            headers = this.getAuthorizationHeaders();
        }
        return this.httpClient.get(environment.API_URL + url, {
            headers: headers,
            params: queryParameters
        })
            .pipe(
                catchError((error): string => {
                    throw this.handleError(error);
                })
            );
    }

    public post(url: string, body: any, disableAuth = false) {
        let headers = {};
        if (!disableAuth) {
            headers = this.getAuthorizationHeaders();
        }
        return this.httpClient.post(environment.API_URL + url, body, headers)
            .pipe(
                catchError((error): string => {
                    throw this.handleError(error);
                })
            );
    }

    public put(url: string, body: any, disableAuth = false) {
        let headers = {};
        if (!disableAuth) {
            headers = this.getAuthorizationHeaders();
        }
        return this.httpClient.put(environment.API_URL + url, body, headers)
            .pipe(
                catchError((error): string => {
                    throw this.handleError(error);
                })
            );
    }

    public delete(url: string, disableAuth = false) {
        let headers = {};
        if (!disableAuth) {
            headers = this.getAuthorizationHeaders();
        }
        return this.httpClient
            .delete(environment.API_URL + url, headers)
            .pipe(
                catchError((error): string => {
                    throw this.handleError(error);
                })
            );
    }

    private getAuthorizationHeaders(): HttpHeaders {
        const token = localStorage.getItem(AppConstants.ACCESS_TOKEN_LOCAL_STORAGE_ITEM_KEY);
        return new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': 'Bearer ' + token,
        });
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
