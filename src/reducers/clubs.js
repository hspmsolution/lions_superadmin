import { REGION_DATA, All_CLUBS} from "../constants/actionTypes";

const clubsReducer = (state = { region: [],registeredClubs:[] }, action) => {
  switch (action.type) {

    case All_CLUBS:
      return { ...state, registeredClubs: action.payload };
    case REGION_DATA:
      return { ...state, region: action.payload };
    default:
      return state;
  }
};

export default clubsReducer;
