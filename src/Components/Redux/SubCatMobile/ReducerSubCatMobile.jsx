import { SET_SUBCATMOBILE } from "./ActionTypes";

const initialState = {
  subCatMobile: [],
};

const ReducerSubCatMobile = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUBCATMOBILE: {
      return { ...state, subCatMobile: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default ReducerSubCatMobile;
