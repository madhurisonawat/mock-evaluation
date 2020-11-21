import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REG_ATTEMPT,
  REG_SUCCESS,
  REG_FAILURE,
  LOGOUT,
} from "./actionTypes";

const initialState = {
  loginStatus: false,//false krna h
  isLoading: false,
  isError: false,
  user_id: "",
  message: "",
  validation: "",
  registerStatus: false,
  loginData:[]
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_ATTEMPT:
      return { ...state, isLoading: true, message: "", validation: "" };
    case LOGIN_SUCCESS: {
      const { _id } = payload;
      return { ...state, isLoading: false, loginStatus: true,  user_id :_id,loginData:payload};
    }
    case LOGIN_FAILURE: {
      const { message, validation } = payload;
      return { ...state, isLoading: false, isError: true, message, validation };
    }
    case REG_ATTEMPT:
      return {
        ...state,
        isLoading: true,
        message: "",
        validation: "",
        isError: false,
      };
    case REG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        registerStatus: true,
      };
    case REG_FAILURE: {
      const { validation, message } = payload;
      return {
        ...state,
        isLoading: false,
        isError: true,
        validation,
        message: payload,
        registerStatus: false,
      };
    }
    case LOGOUT:
      return {
        ...state,
        loginStatus: false,
            registerStatus: false,
        message: "",
        validation: "",
        user_id: "",
      };
    default:
      return state;
  }
};
