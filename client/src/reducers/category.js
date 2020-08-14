import { toast } from "react-toastify";

import * as constants from "../constants/category";

const initialState = {
  expenses: [],
  income: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_CATEGORY: {
      return state;
    }

    case constants.GET_CATEGORY_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        expenses: data.expenses,
        income: data.income,
      };
    }

    case constants.GET_CATEGORY_FAIL: {
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
