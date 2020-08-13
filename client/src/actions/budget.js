import * as budgetConstants from "../constants/budget";

export const getBudget = () => {
  return {
    type: budgetConstants.GET_BUDGET,
  };
};

export const getBudgetSuccess = (data) => {
  return {
    type: budgetConstants.GET_BUDGET_SUCCESS,
    payload: {
      data,
    },
  };
};

export const getBudgetFail = (error) => {
  return {
    type: budgetConstants.GET_BUDGET_FAIL,
    payload: {
      error,
    },
  };
};

export const editBudget = (cash, card, balancePerMonth, mainCurrency) => {
  return {
    type: budgetConstants.EDIT_BUDGET,
    payload: {
      cash,
      card,
      balancePerMonth,
      mainCurrency,
    },
  };
};

export const editBudgetSuccess = (data) => {
  return {
    type: budgetConstants.EDIT_BUDGET_SUCCESS,
    payload: {
      data,
    },
  };
};

export const editBudgetFail = (error) => {
  return {
    type: budgetConstants.EDIT_BUDGET_FAIL,
    payload: {
      error,
    },
  };
};
