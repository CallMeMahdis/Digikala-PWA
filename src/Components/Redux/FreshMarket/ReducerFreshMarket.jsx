import { SET_FRESH_MARKET } from "./ActionTypes";

const initialState = {
  marketProducts: [],
};

const ReducerFreshMarket = (state = initialState, action) => {
  switch (action.type) {
    case SET_FRESH_MARKET: {
      return { ...state, marketProducts: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default ReducerFreshMarket;
