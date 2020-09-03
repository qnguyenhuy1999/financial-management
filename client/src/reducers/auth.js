import { toast } from "react-toastify";

import * as constants from "../constants/auth";

const initialState = {
  isAuth: false,
  profile: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.CHECK_AUTH: {
      const profile = JSON.parse(localStorage.getItem("profile")) || [];
      if (profile.token) {
        return {
          ...state,
          isAuth: true,
          profile,
        };
      }

      return state;
    }

    case constants.LOGIN: {
      return state;
    }

    case constants.LOGIN_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        isAuth: true,
        profile: data,
      };
    }

    case constants.LOGIN_FAIL: {
      const { error } = action.payload;
      toast.error(error);
      return state;
    }

    case constants.REGISTER: {
      return state;
    }

    case constants.REGISTER_SUCCESS: {
      const { data } = action.payload;
      toast.success(data.message);
      return state;
    }

    case constants.REGISTER_FAIL: {
      const { error } = action.payload;
      toast.error(error);
      return state;
    }

    case constants.LOGOUT: {
      return state;
    }

    case constants.LOGOUT_SUCCESS: {
      const { data } = action.payload;
      toast.success(data.message);
      return {
        ...state,
        isAuth: false,
        profile: {},
      };
    }

    case constants.LOGOUT_FAIL: {
      const { error } = action.payload;
      toast.error(error);
      return {
        ...state,
        isAuth: false,
        profile: {},
      };
    }

    default:
      return state;
  }
};

export default reducer;
