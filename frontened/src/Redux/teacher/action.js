import axios from "axios";

import {
  GET_TEACHER_ATTEMPT,
  GET_TEACHER_FAILURE,
  GET_TEACHER_SUCCESS,
  ADD_TEACHER_ATTEMPT,
  ADD_TEACHER_FAILURE,
  ADD_TEACHER_SUCCESS,
  UPDATE_TEACHER_ATTEMPT,
  UPDATE_TEACHER_FAILURE,
  UPDATE_TEACHER_SUCCESS,
  REMOVE_TEACHER_ATTEMPT,
  REMOVE_TEACHER_FAILURE,
  REMOVE_TEACHER_SUCCESS,
  SEARCH_TEACHER_ATTEMPT,
  SEARCH_TEACHER_FAILURE,
  SEARCH_TEACHER_SUCCESS,
} from "./actionTypes";

const getTeacherAttempt = (payload) => ({
  type: GET_TEACHER_ATTEMPT,
  payload
});
const getTeacherSuccess = (payload) => ({
  type: GET_TEACHER_SUCCESS,
  payload
});
const getTeacherFailure = () => ({
  type: GET_TEACHER_FAILURE,
});

export const getTeacher = (payload,sort,gender,page) => (dispatch) => {
dispatch(getTeacherAttempt())
  return axios
    .get( `http://localhost:5000/api/getTeacher?teacher_id=${payload}&sort=${sort}&gender=${gender}&page=${page}`)
    .then((res) => dispatch(getTeacherSuccess(res.data)))
    .catch((err) => dispatch(getTeacherFailure(err.response.data)));
};

const addTeacherAttempt = (payload) => ({
  type: ADD_TEACHER_ATTEMPT,
  payload,
});
const addTeacherSuccess = (payload) => ({
  type: ADD_TEACHER_SUCCESS,
  payload,
});
const addTeacherFailure = () => ({
  type: ADD_TEACHER_FAILURE,
});


export const addTeacher = (payload) => (dispatch) => {
  dispatch(addTeacherAttempt());
  return axios
    .post("http://localhost:5000/api/addTeacher",payload)
    .then((res) => dispatch(addTeacherSuccess(res.data)))
    .catch((err) => dispatch(addTeacherFailure(err.response.data)));
};


const updateTeacherAttempt = (payload) => ({
  type: UPDATE_TEACHER_ATTEMPT,
  payload,
});
const updateTeacherSuccess = (payload) => ({
  type: UPDATE_TEACHER_SUCCESS,
  payload,
});
const updateTeacherFailure = () => ({
  type: UPDATE_TEACHER_FAILURE,
});

export const updateTeacher = (payload,id) => (dispatch) => {
  dispatch(updateTeacherAttempt());
  return axios
    .post(`http://localhost:5000/api/updateTeacher/${id}`,payload)
    .then((res) => dispatch(updateTeacherSuccess(res.data)))
    .catch((err) => dispatch(updateTeacherFailure(err.response.data)));
};


const removeTeacherAttempt = (payload) => ({
  type: REMOVE_TEACHER_ATTEMPT,
  payload,
});
const removeTeacherSuccess = (payload) => ({
  type: REMOVE_TEACHER_SUCCESS,
  payload,
});
const removeTeacherFailure = () => ({
  type: REMOVE_TEACHER_FAILURE,
});
export const removeTeacher = (payload) => (dispatch) => {
  dispatch(removeTeacherAttempt());
  return axios
    .delete(`http://localhost:5000/api/removeTeacher/${payload}`)
    .then((res) => dispatch(removeTeacherSuccess(res.data)))
    .catch((err) => dispatch(removeTeacherFailure(err.response.data)));
  
};
 

const searchTeacherAttempt = (payload) => ({
  type: SEARCH_TEACHER_ATTEMPT,
  payload,
});
const searchTeacherSuccess = (payload) => ({
  type: SEARCH_TEACHER_SUCCESS,
  payload,
});
const searchTeacherFailure = () => ({
  type: SEARCH_TEACHER_FAILURE,
});
export const searchTeacher = (id, payload) => (dispatch) => {
  dispatch(searchTeacherAttempt());
  return axios
    .get(`http://localhost:5000/api/teacher?teacher_id=${id}/&name=${payload}`)
    .then((res) => dispatch(searchTeacherSuccess(res.data)))
    .catch((err) => dispatch(searchTeacherFailure(err.response.data)));
};



