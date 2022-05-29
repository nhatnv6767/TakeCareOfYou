import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoadingGender: false,
  genders: [],
  roles: [],
  position: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      state.isLoadingGender = true;
      console.log("Fire fetch gender start: ", action);
      return {
        ...state,
      };

    case actionTypes.FETCH_GENDER_SUCCESS:
      state.genders = action.data;
      state.isLoadingGender = false;
      console.log("Fire fetch gender success: ", state);
      return {
        ...state,
      };

    case actionTypes.FETCH_GENDER_FAILED:
      state.genders = [];
      state.isLoadingGender = false;
      console.log("Fire fetch gender failed: ", action);
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default adminReducer;
