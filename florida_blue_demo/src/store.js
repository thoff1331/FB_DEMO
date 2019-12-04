import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import axios from "axios";

const initialState = {
  user: "",
  password: ""
};

const LOGIN = "LOGIN";
const SIGNUP = "SIGNUP";
const LOGOUT = "LOGOUT";
const DELETE_ACCOUNT = "DELETE_ACCOUNT";
const GET_USER = "GET_USER";

export function getUser() {
  return {
    type: GET_USER,
    payload: axios.get("/api/auth/getuser")
  };
}

export function login(username, password) {
  return {
    type: LOGIN,
    payload: axios.post("/api/auth/login", { username, password })
  };
}
export function signup(username, password) {
  return {
    type: SIGNUP,
    payload: axios.post("/auth/signup", { username, password })
  };
}
export function logout() {
  return {
    type: LOGOUT,
    payload: axios.delete("/auth/logout")
  };
}
export function deleteAccount() {
  return {
    type: DELETE_ACCOUNT,
    payload: axios.delete("/api/auth/deleteaccount")
  };
}

function reducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case `${GET_USER}_FULFILLED`:
      console.log(action.payload.data);
      return {
        ...state,
        user: action.payload.data
      };

    case `${LOGIN}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data
      };
    case `${SIGNUP}_FULFILLED`:
      return {
        ...state,
        user: action.payload.data
      };
    case `${LOGOUT}_FULFILLED`:
      return {
        ...state,
        user: {}
      };
    case `${DELETE_ACCOUNT}_FULFILLED`:
      return {
        ...state,
        user: {}
      };

    default:
      return state;
  }
}

export default createStore(reducer, applyMiddleware(promise));
