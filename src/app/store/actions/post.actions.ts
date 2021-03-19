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

// Create Post

export const createPost = createAction(
  '[Post] Create a new Post',
  props<{ post: IPost }>(),
);

export const createPostSuccess = createAction(
  '[Post] Create a new Post (Success)',
);

export const createPostFail = createAction(
  '[Post] Create a new Post',
  props<{ error: string, statusCode: number }>(),
);
