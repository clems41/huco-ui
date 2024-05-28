import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchComponent} from "../search/search.component";
import {AddUserComponent} from "./add-user.component";

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: AddUserComponent }
    ])],
    exports: [RouterModule]
})
export class AddUserRoutingModule { }
