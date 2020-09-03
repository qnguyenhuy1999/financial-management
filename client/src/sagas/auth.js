import { call, put, takeEvery } from "redux-saga/effects";

import * as statusCode from "../constants/statusCode";
import * as authConstants from "../constants/auth";
import { login, register, logout } from "../apis/auth";
import axiosService from "../commons/axiosService";
import {
  loginSuccess,
  loginFail,
  registerSuccess,
  registerFail,
  logoutSuccess,
  logoutFail,
} from "../actions/auth";

function* loginSaga({ payload }) {
  try {
    const { email, password } = payload;

    const res = yield call(login, { email, password });

    const { status, data } = res;
    if (status === statusCode.SUCCESS) {
      localStorage.setItem("profile", JSON.stringify(data));
      axiosService.updateToken(data.token);
      yield put(loginSuccess(data));
    }
  } catch (err) {
    yield put(loginFail(err.response.data.message));
  }
}

function* registerSaga({ payload }) {
  try {
    const { email, username, password } = payload;

    const res = yield call(register, { email, username, password });

    const { status, data } = res;
    if (status === statusCode.SUCCESS) {
      yield put(registerSuccess(data));
    }
  } catch (err) {
    yield put(registerFail(err.response.data.message));
  }
}

function* logoutSaga() {
  try {
    const res = yield call(logout);

    const { status, data } = res;
    if (status === statusCode.SUCCESS) {
      yield put(logoutSuccess(data));
      localStorage.removeItem("profile");
    }
  } catch (err) {
    yield put(logoutFail(err.response.data.message));
    localStorage.removeItem("profile");
  }
}

function* sagas() {
  yield takeEvery(authConstants.LOGIN, loginSaga);
  yield takeEvery(authConstants.REGISTER, registerSaga);
  yield takeEvery(authConstants.LOGOUT, logoutSaga);
}

export default sagas;
