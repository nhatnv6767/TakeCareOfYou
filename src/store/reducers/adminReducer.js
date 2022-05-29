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
      let copyStateStart = { ...state };
      copyState.isLoadingGender = true;
      console.log("Fire fetch gender start: ", action);
      return {
        ...copyStateStart,
      };

    case actionTypes.FETCH_GENDER_SUCCESS:
      let copyState = { ...state };
      copyState.genders = action.data;
      console.log("Fire fetch gender success: ", copyState);
      return {
        ...copyState,
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
