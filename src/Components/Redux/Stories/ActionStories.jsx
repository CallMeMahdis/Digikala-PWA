import axios from "axios";
import { SET_STORIES } from "./ActionTypes";

export const setStories = (stories) => {
  return {
    type: SET_STORIES,
    payload: stories,
  };
};

export const fetchStories = () => {
  return async function (dispatch) {
    try {
      let res = await axios.get("https://raw.githubusercontent.com/CallMeMahdis/digikala_api/main/db.json");      
      dispatch(setStories(res.data.lives));
    } catch (error) {
      console.log(error.message);
    }
  };
};
