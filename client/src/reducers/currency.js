import { toast } from "react-toastify";

import * as constants from "../constants/currency";

const initialState = {
  data: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_CURRENCY: {
      return state;
    }

    case constants.GET_CURRENCY_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        data,
      };
    }

    case constants.GET_CURRENCY_FAIL: {
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
