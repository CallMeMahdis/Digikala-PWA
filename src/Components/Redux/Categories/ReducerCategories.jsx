import { SET_CATEGORIES } from "./ActionTypes";

const initialState = {
  categories: [],
};

const ReducerCategories = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES: {
      return { ...state, categories: action.payload };
    }
    default: {
      return state;
    }
  }
};
export default ReducerCategories;
