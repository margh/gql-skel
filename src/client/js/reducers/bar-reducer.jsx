import { CHANGE_BAR } from '../actions';
const defaultState = '';

export default function barReducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_BAR:
      return action.value;
    default:
      return state;
  }
}
