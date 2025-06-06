import axios from "axios";
import { SET_SLIDER } from "./ActionTypes";

export const setSlider = (slides) => {
  return {
    type: SET_SLIDER,
    payload: slides,
  };
};

export const fetchSlider = () => {
  return async function (dispatch) {
    try {
      let res = await axios.get("https://raw.githubusercontent.com/CallMeMahdis/digikala_api/main/db.json");
      dispatch(setSlider(res.data.slider));
    } catch (error) {
      console.log(error.message);
    }
  };
};
