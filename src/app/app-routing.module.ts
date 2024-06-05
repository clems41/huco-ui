import { RouterModule } from '@angular/router';
import {Injectable, NgModule} from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";
import {canActivate} from "./auth.guard";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule), canActivate: [canActivate] },
                    { path: 'search', loadChildren: () => import('./components/search/search.module').then(m => m.SearchModule), canActivate: [canActivate] },
                    { path: 'add-user', loadChildren: () => import('./components/add-user/add-user.module').then(m => m.AddUserModule), canActivate: [canActivate] },
                    { path: 'media/:id', loadChildren: () => import('./components/media-info/media-info.module').then(m => m.MediaInfoModule), canActivate: [canActivate] },
                    { path: 'recommendation', loadChildren: () => import('./components/send-recommendation/send-recommendation.module').then(m => m.SendRecommendationModule), canActivate: [canActivate] },
                    { path: 'signup', loadChildren: () => import('./components/signup/signup.module').then(m => m.SignupModule) },
                    { path: 'signin', loadChildren: () => import('./components/signin/signin.module').then(m => m.SigninModule) },
                ]
            },
            { path: '**', redirectTo: '' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
