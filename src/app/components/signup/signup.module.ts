import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import {SignupComponent} from "./signup.component";
import {TopBarSignupComponent} from "./top-bar-signup/top-bar-signup.component";
import {SignupFormComponent} from "./signup-form/signup-form.component";


@NgModule({
  declarations: [SignupComponent],
    imports: [
        SignupRoutingModule,
        TopBarSignupComponent,
        SignupFormComponent
    ]
})
export class SignupModule { }
