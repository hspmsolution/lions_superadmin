import { REGION_DATA } from "../constants/actionTypes";

const clubsReducer = (state = { region: [] }, action) => {
  switch (action.type) {

    case REGION_DATA:
      return { ...state, region: action.payload };
    default:
      return state;
  }
};

export default clubsReducer;
