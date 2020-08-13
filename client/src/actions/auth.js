import * as constants from "../constants/auth";

export const checkAuth = () => {
  return {
    type: constants.CHECK_AUTH,
  };
};

export const login = (email, password) => {
  return {
    type: constants.LOGIN,
    payload: {
      email,
      password,
    },
  };
};

export const loginSuccess = (data) => {
  return {
    type: constants.LOGIN_SUCCESS,
    payload: {
      data,
    },
  };
};

export const loginFail = (error) => {
  return {
    type: constants.LOGIN_FAIL,
    payload: {
      error,
    },
  };
};

export const register = (email, username, password) => {
  return {
    type: constants.REGISTER,
    payload: {
      email,
      username,
      password,
    },
  };
};

export const registerSuccess = (data) => {
  return {
    type: constants.REGISTER_SUCCESS,
    payload: {
      data,
    },
  };
};

export const registerFail = (error) => {
  return {
    type: constants.REGISTER_FAIL,
    payload: {
      error,
    },
  };
};

export const logout = () => {
  return {
    type: constants.LOGOUT,
  };
};

export const logoutSuccess = (data) => {
  return {
    type: constants.LOGOUT_SUCCESS,
    payload: {
      data,
    },
  };
};

export const logoutFail = (error) => {
  return {
    type: constants.LOGOUT_FAIL,
    payload: {
      error,
    },
  };
};
