import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { CreateUserPageComponent } from './pages/create-user-page/create-user-page.component';
import { ListUserPageComponent } from './pages/list-user-page/list-user-page.component';
import { EditUserPageComponent } from './pages/edit-user-page/edit-user-page.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListTableComponent } from './components/user-list-table/user-list-table.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const pages = [
  CreateUserPageComponent,
  ListUserPageComponent,
  EditUserPageComponent,
];

const components = [
  UserFormComponent,
  UserListTableComponent
];

@NgModule({
  declarations: [
    ...pages,
    ...components,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class UserModule { }
