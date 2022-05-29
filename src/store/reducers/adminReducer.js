import actionTypes from "../actions/actionTypes";

const initialState = {};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default adminReducer;
