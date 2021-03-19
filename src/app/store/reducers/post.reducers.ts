import { createReducer, on } from '@ngrx/store';
import { createPost, createPostFail, createPostSuccess, retrievePostList, retrievePostListFail, retrievePostListSuccess } from '../actions/post.actions';
import { postInitialState } from '../states/post.states';

export const postReducers = createReducer(
  postInitialState,
  on(retrievePostList, (state) => ({
    ...state,
    loading: true,
  })),
  on(retrievePostListSuccess, (state, { posts }) => ({
    ...state,
    posts,
    loading: false,
  })),
  on(retrievePostListFail, (state) => ({
    ...state,
    loading: false,
    // More logic here
  })),

  on(createPost, (state) => ({
    ...state,
    loading: true,
  })),
  on(createPostSuccess, (state) => ({
    ...state,
    loading: false,
  })),
  on(createPostFail, (state, { statusCode, error }) => ({
    ...state,
    errorMessage: error,
    errorStatusCode: statusCode,
    loading: false,
  })),
);
