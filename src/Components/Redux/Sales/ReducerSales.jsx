import { SET_SALE_PRODUCTS } from "./ActionTypes";

const initialState = {
  saleProducts: [],
};

const ReducerSales = (state = initialState, action) => {
  switch (action.type) {
    case SET_SALE_PRODUCTS: {
      return { ...state, saleProducts: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default ReducerSales;
