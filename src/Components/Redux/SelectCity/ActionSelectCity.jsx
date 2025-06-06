import axios from "axios";
import { SET_CITY } from "./ActionTypes";

export const setCity = (cities) => {
  return {
    type: SET_CITY,
    payload: cities,
  };
};

export const fetchCities = () => {
  return async function (dispatch) {
    try {
      let res = await axios.get(
        "https://raw.githubusercontent.com/CallMeMahdis/digikala_api/main/db.json"
      );
      dispatch(setCity(res.data.searchCity));
    } catch (error) {
      console.log(error.message);
    }
  };
};
