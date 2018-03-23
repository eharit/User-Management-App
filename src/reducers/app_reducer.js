import { APP_LOADING, APP_LOADING_FINISHED } from '../actions/types';

export default function appReducer(state=false, action) {
  switch(action.type) {
    case APP_LOADING:
      return { loading: true };
    case APP_LOADING_FINISHED:
      return { loading: false };
  }
  return state;
}
