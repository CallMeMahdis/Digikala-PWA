import { SET_DEEP_LINKS } from "./ActionTypes";

const initialState = {
  links: [],
};

const ReducerDeepLinks = (state = initialState, action) => {
  switch (action.type) {
    case SET_DEEP_LINKS: {
      return { ...state, links: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default ReducerDeepLinks;
