import { combineReducers } from "redux";

import auth from "./auth";
import budget from "./budget";
import category from "./category";
import transaction from "./transaction";

const rootReducers = combineReducers({
  auth,
  budget,
  category,
  transaction,
});

export default rootReducers;
