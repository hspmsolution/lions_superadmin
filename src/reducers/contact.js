import {  All_CONTACTS} from "../constants/actionTypes";

const contactReducer = (state = { contactData:[] }, action) => {
  switch (action.type) {

    case All_CONTACTS:
      return { ...state, contactData: action.payload };
    default:
      return state;
  }
};

export default contactReducer;
