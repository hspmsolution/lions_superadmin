import {  All_MEMBERS} from "../constants/actionTypes";

const membersReducer = (state = { memberData:[] }, action) => {
  switch (action.type) {

    case All_MEMBERS:
      return { ...state, memberData: action.payload };
    default:
      return state;
  }
};

export default membersReducer;
