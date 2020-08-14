import { call, put, takeEvery } from "redux-saga/effects";

import * as statusCode from "../constants/statusCode";
import * as categoryConstants from "../constants/category";
import { get } from "../apis/category";
import { getCategorySuccess, getCategoryFail } from "../actions/category";

function* getSaga() {
  try {
    const res = yield call(get);

    const { status, data } = res;
    if (status === statusCode.SUCCESS) {
      yield put(getCategorySuccess(data));
    }
  } catch (err) {
    yield put(getCategoryFail(err.response.data.message));
  }
}

function* sagas() {
  yield takeEvery(categoryConstants.GET_CATEGORY, getSaga);
}

export default sagas;
