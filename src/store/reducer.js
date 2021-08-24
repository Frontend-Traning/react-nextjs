import { combineReducers } from 'redux'
import { counterActionTypes, sceneActionTypes } from './actionTypes'
import initialState from './state';

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case counterActionTypes.INCREMENT:
      return {
        ...state,
        counter: {
          value: state.counter.value + 1
        }
      }
    case counterActionTypes.DECREMENT:
      return {
        ...state,
        counter: {
          value: state.counter.value - 1
        }
      }
    case counterActionTypes.INCREMENT_BY_AMOUNT:
      return {
        ...state,
        counter: {
          value: state.counter.value + action.payload
        }
      }
    case sceneActionTypes.LOAD_SCENES_SUCCESS:
      return {
        ...state,
        scenes: action.data
      }
    case sceneActionTypes.CHANGE_TITLE:
      state.scenes.map((e) => {
        if (e.id === action.id) {
          e.title = action.title
        }
      });
    default:
      return state
  }
}

export default combineReducers({
  root: appReducer
});
