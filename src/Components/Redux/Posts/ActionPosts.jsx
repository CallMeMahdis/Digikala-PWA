import axios from "axios";
import { SET_POSTS } from "./ActionTypes";

export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    payload: posts,
  };
};

export const fetchPosts = () => {
  return async function (dispatch) {
    try {
      let res = await axios.get(
        "https://raw.githubusercontent.com/CallMeMahdis/digikala_api/main/db.json"
      );
      dispatch(setPosts(res.data.magazinePosts));
    } catch (error) {
      console.log(error.message);
    }
  };
};
