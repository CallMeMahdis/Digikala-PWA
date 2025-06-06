import axios from "axios";
import { SET_SHOP_CATEGORY } from "./ActionTypes";

export const setShopCategory = (shopCategories) => {
  return {
    type: SET_SHOP_CATEGORY,
    payload: shopCategories,
  };
};

export const fetchShopCategory = () => {
  return async function (dispatch) {
    try {
      let res = await axios.get(
        "https://raw.githubusercontent.com/CallMeMahdis/digikala_api/main/db.json"
      );
      dispatch(setShopCategory(res.data.categories));
    } catch (error) {
      console.log(error.message);
    }
  };
};
