import actionTypes from "../actions/actionTypes";

const initialState = {
  genders: [],
  roles: [],
  position: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      console.log("Fire fetch gender start: ", action);
      return {
        ...state,
      };

    case actionTypes.FETCH_GENDER_SUCCESS:
      console.log("Fire fetch gender success: ", action);
      return {
        ...state,
      };

    case actionTypes.FETCH_GENDER_FAILED:
      console.log("Fire fetch gender failed: ", action);
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default adminReducer;
