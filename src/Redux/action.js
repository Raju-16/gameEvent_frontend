import * as Types from "./actionTypes";
import axios from "axios";

export const getGameEvents = () => (dispatch) => {
  dispatch({ type: Types.GET_GAME_EVENT_REQUEST });
  return axios
    .get("http://localhost:8080/game")
    .then((res) => {
      dispatch({ type: Types.GET_GAME_EVENT_SUCCESS, payload: res.data });
      return Types.GET_GAME_EVENT_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: Types.GET_GAME_EVENT_FAILURE });
      return Types.GET_GAME_EVENT_FAILURE;
    });
};

export const userRegister = (payload) => (dispatch) => {
  dispatch({ type: Types.USER_REGISTER_REQUEST });
  return axios
    .post("http://localhost:8080/signup", payload)
    .then((res) => {
      dispatch({ type: Types.USER_REGISTER_SUCCESS, payload: res.data });
      return Types.USER_REGISTER_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: Types.USER_REGISTER_FAILURE });
      return Types.USER_REGISTER_FAILURE;
    });
};

export const userLogin = (payload) => (dispatch) => {
  dispatch({ type: Types.USER_LOGIN_REQUEST });
  return axios
    .post("http://localhost:8080/signin", payload)
    .then((res) => {
      dispatch({ type: Types.USER_LOGIN_SUCCESS, payload: res.data });
      return Types.USER_LOGIN_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: Types.USER_LOGIN_FAILURE });
      return Types.USER_LOGIN_FAILURE;
    });
};

export const addToCart = (ele) => (dispatch) => {
  return dispatch({ type: Types.GET_ADDTOCART_SUCCESS, payload: ele });
};

export const deleteProduct = (id) => (dispatch) => {
  return dispatch({ type: Types.DELETE_PRODUCT, payload: id });
};

export const checkout = (payload) => (dispatch) => {
  console.log(payload, "this is payload in checkout");
  dispatch({ type: Types.POST_CHECKOUT_REQUEST });
  return axios
    .post("http://localhost:8080/checkout", payload)
    .then((res) => {
      console.log("this is checkout res", res);
      dispatch({ type: Types.POST_CHECKOUT_SUCCESS, payload: res.data });
      return Types.POST_CHECKOUT_SUCCESS;
    })
    .catch((err) => {
      dispatch({ type: Types.POST_CHECKOUT_FAILURE, payload: err.data });
      return Types.POST_CHECKOUT_FAILURE;
    });
};
