import { SET_CITY } from "./ActionTypes";

const initialState = {
  cities: [],
};

const ReducerSelectCity = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY: {
      return { ...state, cities: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default ReducerSelectCity;
