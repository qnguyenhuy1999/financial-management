import { call, put, takeEvery } from "redux-saga/effects";

import * as statusCode from "../constants/statusCode";
import * as budgetConstants from "../constants/budget";
import { get, edit } from "../apis/budget";
import {
  getBudgetSuccess,
  getBudgetFail,
  editBudgetSuccess,
  editBudgetFail,
} from "../actions/budget";
import { logoutSuccess } from "../actions/auth";

function* getSaga() {
  try {
    const res = yield call(get);

    const { status, data } = res;
    if (status === statusCode.SUCCESS) {
      yield put(getBudgetSuccess(data.budget));
    }
  } catch (err) {
    if (err.response.status === 401) {
      yield put(logoutSuccess({ message: "Logout success." }));
      return;
    }

    yield put(getBudgetFail(err.response.data.message));
  }
}

function* editSaga({ payload }) {
  try {
    const { cash, card, balancePerMonth } = payload;

    const res = yield call(edit, { cash, card, balancePerMonth });

    const { status, data } = res;
    if (status === statusCode.SUCCESS) {
      yield put(editBudgetSuccess(data.budget));
    }
  } catch (err) {
    yield put(editBudgetFail(err.response.data.message));
  }
}

function* sagas() {
  yield takeEvery(budgetConstants.GET_BUDGET, getSaga);
  yield takeEvery(budgetConstants.EDIT_BUDGET, editSaga);
}

export default sagas;
