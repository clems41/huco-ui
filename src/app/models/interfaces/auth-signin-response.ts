import {AuthUser} from "../user";

export interface AuthSignInResponse {
    user: AuthUser,
    token: JwtToken
}

export interface JwtToken {
    tokenString: string,
    expirationDate: string
}
