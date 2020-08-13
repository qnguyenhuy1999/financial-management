import { call, put, takeEvery } from "redux-saga/effects";

import * as statusCode from "../constants/statusCode";
import * as currencyConstants from "../constants/currency";
import { get } from "../apis/currency";
import { getCurrencySuccess, getCurrencyFail } from "../actions/currency";

function* getSaga() {
  try {
    const res = yield call(get);

    const { status, data } = res;
    if (status === statusCode.SUCCESS) {
      yield put(getCurrencySuccess(data.currencies));
    }
  } catch (err) {
    yield put(getCurrencyFail(err.response.data.message));
  }
}

function* sagas() {
  yield takeEvery(currencyConstants.GET_CURRENCY, getSaga);
}

export default sagas;
