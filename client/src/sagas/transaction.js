import { call, put, takeEvery } from "redux-saga/effects";

import * as statusCode from "../constants/statusCode";
import * as transactionConstants from "../constants/transaction";
import { get, create } from "../apis/transaction";
import {
  getTransactionSuccess,
  getTransactionFail,
  createTransactionSuccess,
  createTransactionFail,
} from "../actions/transaction";

function* getSaga() {
  try {
    const res = yield call(get);

    const { status, data } = res;
    if (status === statusCode.SUCCESS) {
      yield put(getTransactionSuccess(data));
    }
  } catch (err) {
    yield put(getTransactionFail(err.response.data.message));
  }
}

function* createSaga({ payload }) {
  try {
    const { amount, category, recurrence, date } = payload;
    const res = yield call(create, { amount, category, recurrence, date });

    const { status, data } = res;
    if (status === statusCode.SUCCESS) {
      yield put(createTransactionSuccess(data, recurrence));
    }
  } catch (err) {
    yield put(createTransactionFail(err.response.data.message));
  }
}

function* sagas() {
  yield takeEvery(transactionConstants.GET_TRANSACTION, getSaga);
  yield takeEvery(transactionConstants.CREATE_TRANSACTION, createSaga);
}

export default sagas;
