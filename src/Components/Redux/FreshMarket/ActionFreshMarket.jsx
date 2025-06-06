import axios from "axios";
import { SET_FRESH_MARKET } from "./ActionTypes";

export const setFreshMarket = (marketProducts) => {
  return {
    type: SET_FRESH_MARKET,
    payload: marketProducts,
  };
};

export const fetchFreshMarket = () => {
  return async function (dispatch) {
    try {
      let res = await axios.get(
        "https://raw.githubusercontent.com/CallMeMahdis/digikala_api/main/db.json"
      );
      dispatch(setFreshMarket(res.data.fresh_shortcut));
    } catch (error) {
      console.log(error.message);
    }
  };
};
