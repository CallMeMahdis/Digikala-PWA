import { SET_POPULAR_BRANDS } from "./ActionTypes";

const initialState = {
  brands: [],
};

const ReducerPopularBrands = (state = initialState, action) => {
  switch (action.type) {
    case SET_POPULAR_BRANDS: {
      return { ...state, brands: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default ReducerPopularBrands;
