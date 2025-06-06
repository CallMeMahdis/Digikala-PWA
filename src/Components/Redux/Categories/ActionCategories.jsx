import axios from "axios";
import { SET_CATEGORIES } from "./ActionTypes";

export const setCategories = (categories) => {
  return {
    type: SET_CATEGORIES,
    payload: categories,
  };
};

export const fetchCategories = () => {
  return async function (dispatch) {
    try {
      let res = await axios.get(
        "https://raw.githubusercontent.com/CallMeMahdis/digikala_api/main/db.json"
      );
      dispatch(setCategories(res.data.categories));
    } catch (error) {
      console.log(error.message);
    }
  };
};
