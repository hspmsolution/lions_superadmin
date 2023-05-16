import { All_CLUBS, DELETE_CLUB_SUCCESS } from '../constants/actionTypes';

const clubReducer = (state = { registeredClubs: [], deletedClub: [] }, action) => {
  switch (action.type) {
    case All_CLUBS:
      return { ...state, registeredClubs: action.payload };
    case DELETE_CLUB_SUCCESS:
      const updatedClubs = state.registeredClubs.filter(
        (club) => club.clubId !== action.payload
      );
      return { ...state, registeredClubs: updatedClubs, deletedClub: action.payload };
    default:
      return state;
  }
};

export default clubReducer;
