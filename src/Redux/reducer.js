import * as Types from "./actionTypes";

const initialState = {
  games: [],
  isLoading: false,
  isError: true,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.GET_GAME_EVENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case Types.GET_GAME_EVENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        games: payload,
      };
    case Types.GET_GAME_EVENT_FAILURE:
      return {
        ...state,
        isError: true,
      };
      
    default:
      return state;
  }
};
