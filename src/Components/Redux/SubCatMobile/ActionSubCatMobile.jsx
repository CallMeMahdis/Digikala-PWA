import axios from "axios";
import { SET_SUBCATMOBILE } from "./ActionTypes";

export const setSubCatMobile = (subCatMobile) => {
  return {
    type: SET_SUBCATMOBILE,
    payload: subCatMobile,
  };
};

export const fetchSubCatMobile = () => {
  return async function (dispatch) {
    let res = await axios.get("https://raw.githubusercontent.com/CallMeMahdis/digikala_api/main/db.json");
    dispatch(setSubCatMobile(res.data.subCategoriesMobile));
    try {
    } catch (error) {
      console.log(error.message);
    }
  };
};
