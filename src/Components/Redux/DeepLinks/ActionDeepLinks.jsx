import axios from "axios";
import { SET_DEEP_LINKS } from "./ActionTypes";

export const setDeepLinks = (links) => {
  return {
    type: SET_DEEP_LINKS,
    payload: links,
  };
};

export const fetchLinks = () => {
  return async function (dispatch) {
    try {
      let res = await axios.get(
        "https://raw.githubusercontent.com/CallMeMahdis/digikala_api/main/db.json"
      );
      dispatch(setDeepLinks(res.data.deepLinks));
    } catch (error) {
      console.log(error.message);
    }
  };
};
