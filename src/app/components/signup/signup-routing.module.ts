import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "../search/search.component";
import {SignupComponent} from "./signup.component";

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: SignupComponent }
    ])],
    exports: [RouterModule]
})
export class SignupRoutingModule { }
