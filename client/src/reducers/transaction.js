import { toast } from "react-toastify";

import * as constants from "../constants/transaction";

const initialState = {
  monthTransactions: [],
  dayTransactions: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_TRANSACTION: {
      return state;
    }

    case constants.GET_TRANSACTION_SUCCESS: {
      const { data } = action.payload;

      return {
        ...state,
        monthTransactions: data.monthTransactions,
        dayTransactions: data.dayTransactions,
      };
    }

    case constants.GET_TRANSACTION_FAIL: {
      const { error } = action.payload;
      toast.error(error);

      return state;
    }

    case constants.CREATE_TRANSACTION: {
      return state;
    }

    case constants.CREATE_TRANSACTION_SUCCESS: {
      const { data, type } = action.payload;

      if (type === "monthly") {
        return {
          ...state,
          monthTransactions: [data.transaction, ...state.monthTransactions],
        };
      } else {
        return {
          ...state,
          dayTransactions: [data.transaction, ...state.dayTransactions],
        };
      }
    }

    case constants.CREATE_TRANSACTION_FAIL: {
      const { error } = action.payload;
      toast.error(error);

      return state;
    }

    default: {
      return state;
    }
  }
};

export default reducer;
