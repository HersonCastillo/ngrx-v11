import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserPageComponent } from './pages/create-user-page/create-user-page.component';
import { EditUserPageComponent } from './pages/edit-user-page/edit-user-page.component';
import { ListUserPageComponent } from './pages/list-user-page/list-user-page.component';

const routes: Routes = [
  {
    path: '',
    component: ListUserPageComponent,
  },
  {
    path: 'new',
    component: CreateUserPageComponent,
  },
  {
    path: 'edit/:id',
    component: EditUserPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
