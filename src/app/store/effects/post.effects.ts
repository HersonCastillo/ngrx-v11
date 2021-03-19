import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CoreModule } from 'src/app/modules/core/core.module';
import { PostService } from 'src/app/modules/core/services/post.service';
import {
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
}
