import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { retrievePostList } from 'src/app/store/actions/post.actions';
import { getLoadingPost, getPosts } from 'src/app/store/selectors/post.selector';
import { IAppState } from 'src/app/store/states/app.states';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {

  loadingPost$ = this.store.select(getLoadingPost);
  posts$ = this.store.select(getPosts);

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.getPostsList();
  }

  getPostsList(): void {
    this.store.dispatch(retrievePostList());
  }
}
