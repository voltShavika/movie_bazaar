export const LOGIN_REQ = "LOGIN_REQ";
export const LOGIN_SUC = "LOGIN_SUC";
export const LOGIN_ERR = "LOGIN_ERR";
export const LOGOUT_REQ = "LOGOUT_REQ";

export const loginReq = () => {
    return {
        type: LOGIN_REQ
    }
}

export const loginSuc = (user) => {
    return {
        type: LOGIN_SUC,
        payload: user
    }
}

export const loginErr = () => {
    return {
        type: LOGIN_ERR
    }
}

export const logoutReq = () => {
    return {
        type: LOGOUT_REQ
    }
}