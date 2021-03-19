import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./modules/user/user.module').then((m) => (m.UserModule)),
  },
  {
    path: 'posts',
    loadChildren: () => import('./modules/post/post.module').then((m) => (m.PostModule)),
  },
  {
    path: '**',
    redirectTo: 'users',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
