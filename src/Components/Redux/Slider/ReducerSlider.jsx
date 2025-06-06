import { SET_SLIDER } from "./ActionTypes";

const initialState = {
  slides: [],
};

const ReducerSlider = (state = initialState, action) => {
  switch (action.type) {
    case SET_SLIDER: {
      return { ...state, slides: action.payload };
    }
    default: {
      return state;
    }
  }
};
export default ReducerSlider;
