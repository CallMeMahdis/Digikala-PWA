import { SET_SHOP_CATEGORY } from "./ActionTypes";

const initialState = {
  shopCategories: [],
};

const ReducerShopCategory = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHOP_CATEGORY: {
      return { ...state, shopCategories: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default ReducerShopCategory;
