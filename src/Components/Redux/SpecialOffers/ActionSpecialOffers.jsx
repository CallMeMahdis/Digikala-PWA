import axios from "axios";
import { SET_SPECIAL_OFFERS } from "./ActionTypes";

export const setSpecialOffers = (offers) => {
  return {
    type: SET_SPECIAL_OFFERS,
    payload: offers,
  };
};

export const fetchSpecialOffers = () => {
  return async function (dispatch) {
    try {
      let res = await axios.get("https://raw.githubusercontent.com/CallMeMahdis/digikala_api/main/db.json");
      dispatch(setSpecialOffers(res.data.specialOffers));
    } catch (error) {
      console.log(error.message);
    }
  };
};
