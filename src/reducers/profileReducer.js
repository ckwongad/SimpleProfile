import * as types from '../actions/actionTypes';

const initialState = {
  firstName: "",
  lastName: "",
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {

    case types.INPUT_VALUE_CHANGE:
      return Object.assign({}, state, { [action.fieldKey]: action.value })

    default:
      return state;
  }

}

export default profileReducer;
