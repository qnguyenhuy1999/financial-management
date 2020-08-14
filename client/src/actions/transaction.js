import * as transactionConstants from "../constants/transaction";

export const getTransaction = () => {
  return {
    type: transactionConstants.GET_TRANSACTION,
  };
};

export const getTransactionSuccess = (data) => {
  return {
    type: transactionConstants.GET_TRANSACTION_SUCCESS,
    payload: {
      data,
    },
  };
};

export const getTransactionFail = (error) => {
  return {
    type: transactionConstants.GET_TRANSACTION_FAIL,
    payload: {
      error,
    },
  };
};

export const createTransaction = (amount, category, recurrence, date) => {
  return {
    type: transactionConstants.CREATE_TRANSACTION,
    payload: {
      amount,
      category,
      recurrence,
      date,
    },
  };
};

export const createTransactionSuccess = (data, type) => {
  return {
    type: transactionConstants.CREATE_TRANSACTION_SUCCESS,
    payload: {
      data,
      type,
    },
  };
};

export const createTransactionFail = (error) => {
  return {
    type: transactionConstants.CREATE_TRANSACTION_FAIL,
    payload: {
      error,
    },
  };
};

export const editTransaction = () => {
  return {
    type: transactionConstants.EDIT_TRANSACTION,
  };
};

export const editTransactionSuccess = (data) => {
  return {
    type: transactionConstants.EDIT_TRANSACTION_SUCCESS,
    payload: {
      data,
    },
  };
};

export const editTransactionFail = (error) => {
  return {
    type: transactionConstants.EDIT_TRANSACTION_FAIL,
    payload: {
      error,
    },
  };
};

export const deleteTransaction = () => {
  return {
    type: transactionConstants.DELETE_TRANSACTION,
  };
};

export const deleteTransactionSuccess = (data) => {
  return {
    type: transactionConstants.DELETE_TRANSACTION_SUCCESS,
    payload: {
      data,
    },
  };
};

export const deleteTransactionFail = (error) => {
  return {
    type: transactionConstants.DELETE_TRANSACTION_FAIL,
    payload: {
      error,
    },
  };
};
