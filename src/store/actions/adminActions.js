import actionTypes from "./actionTypes";
import { getAllCodeService } from "../../services/userService";

// export const fetchGenderStart = () => ({
//   type: actionTypes.FETCH_GENDER_START,
// });

export const fetchGenderStart = async (dispatch, getState) => {
  try {
    let res = await getAllCodeService("GENDER");
    if (res && res.errCode === 0) {
      fetchGenderSuccess();
    } else {
      fetchGenderFailed();
    }
  } catch (e) {
    fetchGenderFailed();
    console.log("FetchGenderStart error: ", e);
  }
};

export const fetchGenderSuccess = () => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
});

export const fetchGenderFailed = () => ({
  type: actionTypes.FETCH_GENDER_FAILED,
});

// start doing end
