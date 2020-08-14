import authSaga from "./auth";
import budgetSaga from "./budget";
import categorySaga from "./category";
import transactionSaga from "./transaction";

function* rootSagas() {
  yield* authSaga();
  yield* budgetSaga();
  yield* categorySaga();
  yield* transactionSaga();
}

export default rootSagas;
