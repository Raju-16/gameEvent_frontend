import * as Types from "./actionTypes";

const initialState = {
  games: [],
  cart: [],
  userinfo: {},
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
      console.log("Payload", payload);
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

    //-----

    case Types.GET_ADDTOCART_SUCCESS:
      console.log("ADD to cart reducr", payload);
      return {
        ...state,
        cart: [...state.cart, payload],
      };

    case Types.DELETE_PRODUCT:
      console.log(payload, "payload Delete");
      const newData1234 = state.cart.filter((item) => item.id !== payload);
      console.log("NewData1234", newData1234);

      return {
        ...state,
        cart: newData1234,
      };

    case Types.POST_CHECKOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case Types.POST_CHECKOUT_SUCCESS:
      console.log("checkout Payload", payload);
      return {
        ...state,
        isLoading: false,
        userinfo: payload,
      };
    case Types.POST_CHECKOUT_FAILURE:
      return {
        ...state,
        isError: true,
        userinfo: payload,
      };

    default:
      return state;
  }
};
