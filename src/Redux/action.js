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
