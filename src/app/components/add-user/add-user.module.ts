import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUserRoutingModule } from './add-user-routing.module';
import {AddUserComponent} from "./add-user.component";
import {TopBarAddUserComponent} from "./top-bar-add-user/top-bar-add-user.component";
import {SearchUserComponent} from "./search-user/search-user.component";
import {RelatedUserComponent} from "./related-user/related-user.component";


@NgModule({
  declarations: [AddUserComponent],
    imports: [
        CommonModule,
        AddUserRoutingModule,
        TopBarAddUserComponent,
        SearchUserComponent,
        RelatedUserComponent
    ]
})
export class AddUserModule { }
