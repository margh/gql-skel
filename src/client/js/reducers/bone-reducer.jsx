import { SET_BONE } from '../actions';
const defaultState = '';

export default function boneReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_BONE:
      return action.value;
    default:
      return state;
  }
}
