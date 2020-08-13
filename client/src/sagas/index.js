import authSaga from "./auth";
import budgetSaga from "./budget";
import currencySaga from "./currency";

function* rootSagas() {
  yield* authSaga();
  yield* budgetSaga();
  yield* currencySaga();
}

export default rootSagas;
