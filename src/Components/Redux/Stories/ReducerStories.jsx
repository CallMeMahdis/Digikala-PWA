import { SET_STORIES } from "./ActionTypes";

const initialState = {
  stories: [],
};

const ReducerStories = (state = initialState, action) => {
  switch (action.type) {
    case SET_STORIES: {
      return { ...state, stories: action.payload };
    }
    default: {
      return state;
    }
  }
};
export default ReducerStories;
