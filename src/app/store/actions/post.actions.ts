import { createAction, props } from '@ngrx/store';
import { IPost } from 'src/app/modules/post/interfaces/post';

export const retrievePostList = createAction(
  '[Post] Retrieve list of post from API'
);

export const retrievePostListSuccess = createAction(
  '[Post] Retrieve list of post from API (Success)',
  props<{ posts: IPost[] }>()
);

export const retrievePostListFail = createAction(
  '[Post] Retrieve list of post from API (Fail)',
);
