import {ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "./services/auth.service";
import {inject} from "@angular/core";
import {map} from "rxjs";

export const canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.isLoggedIn().pipe(
        map(isLoggedIn => {
            if (isLoggedIn) {
                return true;
            }
            return router.createUrlTree(['signin']);
        })
    );
};

export const canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => canActivate(route, state);
