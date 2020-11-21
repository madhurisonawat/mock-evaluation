import {
  GET_TEACHER_ATTEMPT,
  GET_TEACHER_SUCCESS,
  GET_TEACHER_FAILURE,
  ADD_TEACHER_ATTEMPT,
  ADD_TEACHER_SUCCESS,
  ADD_TEACHER_FAILURE,
  UPDATE_TEACHER_ATTEMPT,
  UPDATE_TEACHER_SUCCESS,
  UPDATE_TEACHER_FAILURE,
  REMOVE_TEACHER_ATTEMPT,
  REMOVE_TEACHER_SUCCESS,
  REMOVE_TEACHER_FAILURE,
  SEARCH_TEACHER_ATTEMPT,
  SEARCH_TEACHER_SUCCESS,
  SEARCH_TEACHER_FAILURE,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  teacherData: [],
  page: "",
  limit: "",
  total:""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TEACHER_ATTEMPT:
      return { ...state, isLoading: true };
    case GET_TEACHER_SUCCESS: {
     
      return {
        ...state,
        isLoading: false,
        teacherData: payload.teacherData,
        page: payload.page,
        limit: payload.limit,
        total: payload.total,
      };
    }
    case GET_TEACHER_FAILURE: {
       
      return { ...state, isLoading: false };
    }
    case ADD_TEACHER_ATTEMPT:
      return { ...state, isLoading: true };
    case ADD_TEACHER_SUCCESS: {
      console.log(payload)
      return {
        ...state,
        isLoading: false,
      };
    }
    case ADD_TEACHER_FAILURE: {
      return { ...state, isLoading: false };
    }
    case UPDATE_TEACHER_FAILURE: {
      return { ...state, isLoading: false };
    }
    case UPDATE_TEACHER_ATTEMPT:
      return { ...state, isLoading: true };
    case UPDATE_TEACHER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case REMOVE_TEACHER_FAILURE: {
      return { ...state, isLoading: false };
    }
    case REMOVE_TEACHER_ATTEMPT:
      return { ...state, isLoading: true };
    case REMOVE_TEACHER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case SEARCH_TEACHER_FAILURE: {
      return { ...state, isLoading: false };
    }
    case SEARCH_TEACHER_ATTEMPT:
      return { ...state, isLoading: true };
    case SEARCH_TEACHER_SUCCESS: {
      console.log(payload)
      return {
        ...state,
        isLoading: false,
        teacherData:payload
      };
    }

    default:
      return state;
  }
};
