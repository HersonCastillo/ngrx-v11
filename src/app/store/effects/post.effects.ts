import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CoreModule } from 'src/app/modules/core/core.module';
import { PostService } from 'src/app/modules/core/services/post.service';
import {
  createPost,
  createPostFail,
  createPostSuccess,
  retrievePostList,
  retrievePostListFail,
  retrievePostListSuccess
} from '../actions/post.actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: CoreModule,
})
export class PostEffects {
  constructor(
    private actions$: Actions,
    private postService: PostService,
  ) { }

  retrievePosts$ = createEffect(() => this.actions$.pipe(
    ofType(retrievePostList),
    exhaustMap(() => this.postService.retrievePosts().pipe(
      map((posts) => retrievePostListSuccess({ posts })),
      catchError(() => of(retrievePostListFail())),
    )),
  ));

  createPost$ = createEffect(() => this.actions$.pipe(
    ofType(createPost),
    exhaustMap((props) => this.postService.createPost(props.post).pipe(
      map(() => createPostSuccess()),
      catchError(({ message, statusCode }) => of(createPostFail({
        error: message,
        statusCode,
      }))),
    )),
  ));
}
