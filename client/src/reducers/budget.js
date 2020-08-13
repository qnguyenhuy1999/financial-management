import { toast } from "react-toastify";

import * as constants from "../constants/budget";

const initialState = {
  data: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_BUDGET: {
      return state;
    }

    case constants.GET_BUDGET_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        data,
      };
    }

    case constants.GET_BUDGET_FAIL: {
      const { error } = action.payload;
      toast.error(error);
      return state;
    }

    case constants.EDIT_BUDGET: {
      return state;
    }

    case constants.EDIT_BUDGET_SUCCESS: {
      const { data } = action.payload;
      toast.success("Wallet edited successfully.");
      return {
        ...state,
        data,
      };
    }

    case constants.EDIT_BUDGET_FAIL: {
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
