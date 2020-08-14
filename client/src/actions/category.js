import * as constants from "../constants/category";

export const getCategory = () => {
  return {
    type: constants.GET_CATEGORY,
  };
};

export const getCategorySuccess = (data) => {
  return {
    type: constants.GET_CATEGORY_SUCCESS,
    payload: {
      data,
    },
  };
};

export const getCategoryFail = (error) => {
  return {
    type: constants.GET_CATEGORY_FAIL,
    payload: {
      error,
    },
  };
};
