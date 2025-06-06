import axios from "axios";
import { SET_SALE_PRODUCTS } from "./ActionTypes";

export const setSaleProducts = (saleProducts) => {
  return {
    type: SET_SALE_PRODUCTS,
    payload: saleProducts,
  };
};

export const fetchSaleProducts = () => {
  return async function (dispatch) {
    try {
      let res = await axios.get(
        "https://raw.githubusercontent.com/CallMeMahdis/digikala_api/main/db.json"
      );
      dispatch(setSaleProducts(res.data.Sales));
    } catch (error) {
      console.log(error.message);
    }
  };
};
