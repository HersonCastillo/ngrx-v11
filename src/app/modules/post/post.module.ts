import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './pages/post-list/post-list.component';
import { PostListTableComponent } from './components/post-list-table/post-list-table.component';
import { SharedModule } from '../shared/shared.module';
import { PostRoutingModule } from './post-routing.module';

const components = [
  PostListTableComponent,
];

const pages = [
  PostListComponent,
];

@NgModule({
  declarations: [
    ...pages,
    ...components,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedModule,
  ]
})
export class PostModule { }
