import axios from "axios";

import {
  LOGIN_ATTEMPT,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REG_ATTEMPT,
  REG_SUCCESS,
  REG_FAILURE,
  LOGOUT,
} from "./actionTypes";

const loginAttempt = () => ({
  type: LOGIN_ATTEMPT,
});

const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

const loginFailure = (payload) => ({
  type: LOGIN_FAILURE,
  payload,
});

export const loginUser = (payload) => (dispatch) => {
  dispatch(loginAttempt());
  return axios
    .post("http://localhost:5000/api/login", payload)
    .then((res) => dispatch(loginSuccess(res.data)))
    .catch((err) => dispatch(loginFailure(err.response.data)));
};

const regAttempt = () => ({
  type: REG_ATTEMPT,
});

const regSuccess = (payload) => ({
  type: REG_SUCCESS,
  payload,
});

const regFailure = (payload) => ({
  type: REG_FAILURE,
  payload,
});

export const registerUser = (payload) => (dispatch) => {
  dispatch(regAttempt());
  return axios
    .post("http://localhost:5000/api/register", payload)
    .then((res) => dispatch(regSuccess(res.data)))
    .catch((err) => dispatch(regFailure(err.response.data)));
};

export const logout = () => ({
  type: LOGOUT,
});
