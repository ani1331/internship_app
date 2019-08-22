import { RECEIVE_ARTICLE, UPDATE_ARTICLE } from '../actions';

export default function articleReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ARTICLE:
      return action.article;
    case UPDATE_ARTICLE:
      return {
        id: action.id,
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        email: action.payload.email,
      }
    default:
      return state;
  }
};
