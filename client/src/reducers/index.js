import { combineReducers } from "redux";

import auth from "./auth";
import budget from "./budget";
import currency from "./currency";

const rootReducers = combineReducers({
  auth,
  budget,
  currency,
});

export default rootReducers;
