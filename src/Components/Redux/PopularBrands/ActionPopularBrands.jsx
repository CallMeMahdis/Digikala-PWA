import axios from "axios";
import { SET_POPULAR_BRANDS } from "./ActionTypes";

export const setPopularBrands = (brands) => {
  return {
    type: SET_POPULAR_BRANDS,
    payload: brands,
  };
};

export const fetchPopularBrands = () => {
  return async function (dispatch) {
    try {
      let res = await axios.get(
        "https://raw.githubusercontent.com/CallMeMahdis/digikala_api/main/db.json"
      );
      dispatch(setPopularBrands(res.data.popularBrands));
    } catch (error) {
      console.log(error.message);
    }
  };
};
