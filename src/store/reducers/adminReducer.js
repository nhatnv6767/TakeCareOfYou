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
      copyStateStart.isLoadingGender = true;
      console.log("Fire fetch gender start: ", action);
      return {
        ...copyStateStart,
      };

    case actionTypes.FETCH_GENDER_SUCCESS:
      let copyStateSuccess = { ...state };
      copyStateSuccess.genders = action.data;
      copyStateSuccess.isLoadingGender = false;
      console.log("Fire fetch gender success: ", copyStateSuccess);
      return {
        ...copyStateSuccess,
      };

    case actionTypes.FETCH_GENDER_FAILED:
      let copyStateFailed = { ...state };
      copyStateFailed.genders = [];
      copyStateFailed.isLoadingGender = false;
      console.log("Fire fetch gender failed: ", action);
      return {
        ...copyStateFailed,
      };

    default:
      return state;
  }
};

export default adminReducer;
