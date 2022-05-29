import actionTypes from "../actions/actionTypes";

const initialState = {};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        userInfo: action.userInfo,
      };

    default:
      return state;
  }
};

export default adminReducer;
