import { NgModule } from '@angular/core';

import { SigninRoutingModule } from './signin-routing.module';
import {SigninComponent} from "./signin.component";
import {TopBarSigninComponent} from "./top-bar-signin/top-bar-signin.component";
import {SigninFormComponent} from "./signin-form/signin-form.component";


@NgModule({
  declarations: [SigninComponent],
    imports: [
        SigninRoutingModule,
        TopBarSigninComponent,
        SigninFormComponent
    ]
})
export class SigninModule { }
