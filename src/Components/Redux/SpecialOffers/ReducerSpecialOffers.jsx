import { SET_SPECIAL_OFFERS } from "./ActionTypes";

const initialState = {
  offers: [],
};

const ReducerSpecialOffers = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPECIAL_OFFERS: {
      return { ...state, offers: action.payload };
    }
    default: {
      return state;
    }
  }
};
export default ReducerSpecialOffers;
