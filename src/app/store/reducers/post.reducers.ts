import { createReducer, on } from '@ngrx/store';
import { retrievePostList, retrievePostListFail, retrievePostListSuccess } from '../actions/post.actions';
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
);
