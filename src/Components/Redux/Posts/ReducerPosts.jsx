import { SET_POSTS } from "./ActionTypes";

const initialState = {
  posts: [],
};

const ReducerPosts = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS: {
      return { ...state, posts: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default ReducerPosts;
