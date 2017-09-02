import * as types from '../actions/actionTypes';

const initialState = {}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {

    case types.INPUT_VALUE_CHANGE:
      return Object.assign({}, state, { [action.fieldKey]: action.value })

    case types.SET_PROFILE:
      return Object.assign({}, state, { ...action.payload })

    default:
      return state;
  }

}

export default profileReducer;
