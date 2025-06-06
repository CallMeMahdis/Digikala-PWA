import { SET_SUB_CATEGORIES } from "./ActionTypes";

const initialState = {
  subCategories: [],
};

const ReducerSubCategories = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUB_CATEGORIES: {
      return { ...state, subCategories: action.payload };
    }
    default: {
      return state;
    }
  }
};
export default ReducerSubCategories;
