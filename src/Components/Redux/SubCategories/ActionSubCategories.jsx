import axios from "axios";
import { SET_SUB_CATEGORIES } from "./ActionTypes";

export const setSubCategories = (subCategories) => {
  return {
    type: SET_SUB_CATEGORIES,
    payload: subCategories,
  };
};

export const fetchSubCategories = () => {
  return async function (dispatch) {
    try {
      let res = await axios.get("https://raw.githubusercontent.com/CallMeMahdis/digikala_api/main/db.json");
      dispatch(setSubCategories(res.data.subCategories));
    } catch (error) {
      console.log(error.message);
    }
  };
};
