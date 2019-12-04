import axios from "axios";
import { stat } from "fs";
const initialState = {
  username: "",
  error: "",
  logout: false
};
//Action types

const SIGNUP = "SIGNUP";
const LOGIN = "LOGIN";
const GET_SESSION = "GET_SESSION";
const LOGOUT = "LOGOUT";

// Action creator

export function signup(username, password) {
  return {
    type: SIGNUP,
    payload: axios.post("/auth/signup", { username, password })
  };
}
export function login(username, password) {
  return {
    type: LOGIN,
    payload: axios.post("/auth/login", { username, password })
  };
}
export function getSession() {
  return {
    type: GET_SESSION,
    payload: axios.get("/auth/cookie")
  };
}
export function logout() {
  return {
    type: LOGOUT,
    payload: axios.delete("/auth/logout")
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${SIGNUP}_FULFILLED`:
      return {
        ...state,
        username: action.payload.data.username
      };
    case `${LOGIN}_FULFILLED`:
      return {
        ...state,
        username: action.payload.data.username
      };
    case `${SIGNUP}_REJECTED`:
      return {
        ...state,
        error: "Username already taken"
      };
    case `${GET_SESSION}_FULFILLED`:
      return {
        ...state,
        username: action.payload.data.username
      };
    case `${LOGOUT}_PENDING`:
      return {
        username: ""
      };
    case `${LOGOUT}_FULFILLED`:
      return {
        username: ""
      };
    case `${LOGOUT}_REJECTED`:
      return {
        username: ""
      };

    default:
      return state;
  }
}
