import actionTypes from "./actionTypes";
import {
    getAllCodeService,
    createNewUserService,
    getAllUsers,
    deleteUserService,
    editUserService,
    getTopDoctorHomeService,
    getAllDoctorsService,
    saveDetailDoctorService,
} from "../../services/userService";

import {toast} from "react-toastify";

// export const fetchGenderStart = () => ({
//   type: actionTypes.FETCH_GENDER_START,
// });

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_GENDER_START,
            });

            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log("FetchGenderStart error: ", e);
        }
    };
};

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData,
});

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED,
});

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_POSITION_START,
            });

            let res = await getAllCodeService("POSITION");
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data));
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
            dispatch(fetchPositionFailed());
            console.log("FetchPositionStart error: ", e);
        }
    };
};

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData,
});

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED,
});

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_ROLE_START,
            });

            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
            dispatch(fetchRoleFailed());
            console.log("FetchRoleStart error: ", e);
        }
    };
};

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData,
});

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED,
});

export const createUserStart = (data) => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.CREATE_USER_START,
            });

            let res = await createNewUserService(data);

            if (res && res.errCode === 0) {
                toast.success("Create a new user succeed");
                dispatch(createUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                dispatch(createUserFailed());
            }
        } catch (e) {
            dispatch(createUserFailed());
            console.log("createUserStart error: ", e);
        }
    };
};

export const createUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS,
});

export const createUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED,
});

export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_ALL_USERS_START,
            });

            let res = await getAllUsers("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse()));
            } else {
                toast.error("Fetch all users error");
                dispatch(fetchAllUsersFailed());
            }
        } catch (e) {
            toast.error("Fetch all users error");
            dispatch(fetchAllUsersFailed());
            console.log("FetchAllUsersStart error: ", e);
        }
    };
};

export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data,
});

export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED,
});

// DELETE USER

export const deleteUserStart = (userId) => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.DELETE_USERS_START,
            });

            let res = await deleteUserService(userId);

            if (res && res.errCode === 0) {
                toast.success("Delete user succeed");
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("Delete user error");
                dispatch(deleteUserFailed());
            }
        } catch (e) {
            toast.error("Delete user error");
            dispatch(deleteUserFailed());
            console.log("deleteUserStart error: ", e);
        }
    };
};

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USERS_SUCCESS,
});

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USERS_FAILED,
});

// EDIT USER

export const editUserStart = (data) => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.EDIT_USERS_START,
            });

            let res = await editUserService(data);

            if (res && res.errCode === 0) {
                toast.success("Update the user succeed");
                dispatch(editUserSuccess());
                dispatch(fetchAllUsersStart());
            } else {
                toast.error("Update the user error");
                dispatch(editUserFailed());
            }
        } catch (e) {
            toast.error("Update the user error");
            dispatch(editUserFailed());
            console.log("editUserStart error: ", e);
        }
    };
};

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USERS_SUCCESS,
});

export const editUserFailed = () => ({
    type: actionTypes.EDIT_USERS_FAILED,
});

// start doing end
// let res1 = await getTopDoctorHomeService(3);

// FETCH TOP DOCTORS

export const fetchTopDoctorStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_START,
            });
            let res = await getTopDoctorHomeService("");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctors: res.data,
                });
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
                });
            }
        } catch (e) {
            console.log("FETCH_TOP_DOCTORS_FAILED: ", e);
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
            });
        }
    };
};

export const fetchTopDoctorSuccess = (data) => ({
    // type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
    // users: data,
});

export const fetchTopDoctorFailed = () => ({
    // type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
});

// FETCH ALL DOCTORS

export const fetchAllDoctorsStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTORS_START,
            });
            let res = await getAllDoctorsService();
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                    dataDoctors: res.data,
                });
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_FAILED,
                });
            }
        } catch (e) {
            console.log("FETCH_ALL_DOCTORS_FAILED: ", e);
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTORS_FAILED,
            });
        }
    };
};

export const fetchAllDoctorsSuccess = (data) => ({
    // type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
    // users: data,
});

export const fetchAllDoctorsFailed = () => ({
    // type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
});

// SAVE DETAIL DOCTOR

export const saveDetailDoctorStart = (data) => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_START,
            });
            let res = await saveDetailDoctorService(data);
            if (res && res.errCode === 0) {
                toast.success("Saving succeed");
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
                });
            } else {
                toast.error("Saving error...");
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
                });
            }
        } catch (e) {
            toast.error("Saving error...");
            console.log("SAVE_DETAIL_DOCTOR_FAILED: ", e);
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
            });
        }
    };
};

export const saveDetailDoctorSuccess = (data) => ({
    // type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
    // users: data,
});

export const saveDetailDoctorFailed = () => ({
    // type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
});


// FETCH ALLCODE SCHEDULE TIME

export const fetchAllScheduleTimeStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_START,
            });
            let res = await getAllCodeService('TIME');
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
                    dataTime: res.data,
                });
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED,
                });
            }
        } catch (e) {
            console.log("FETCH_ALLCODE_SCHEDULE_TIME_FAILED: ", e);
            dispatch({
                type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED,
            });
        }
    };
};

export const fetchAllScheduleTimeSuccess = (data) => ({
    // type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
    // users: data,
});

export const fetchAllScheduleTimeFailed = () => ({
    // type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED,
});
