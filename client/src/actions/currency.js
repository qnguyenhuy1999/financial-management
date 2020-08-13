import * as currencyConstants from "../constants/currency";

export const getCurrency = () => {
  return {
    type: currencyConstants.GET_CURRENCY,
  };
};

export const getCurrencySuccess = (data) => {
  return {
    type: currencyConstants.GET_CURRENCY_SUCCESS,
    payload: {
      data,
    },
  };
};

export const getCurrencyFail = (error) => {
  return {
    type: currencyConstants.GET_CURRENCY_FAIL,
    payload: {
      error,
    },
  };
};
