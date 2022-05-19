import actionTypes from './actionTypes';

export const adminLoginSuccess = (adminInfo) => ({
    type: actionTypes.ADMIN_LOGIN_SUCCESS,
    adminInfo: adminInfo
})

export const adminLoginFail = () => ({
    type: actionTypes.ADMIN_LOGIN_FAIL
})

export const processLogout = () => ({
    type: actionTypes.PROCESS_LOGOUT
})

export const userLoginSuccess = (userInfo) => ({
    type: actionTypes.USER_LOGIN_SUCCESS,
    userInfo: userInfo
})