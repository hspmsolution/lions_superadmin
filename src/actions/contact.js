import { All_CONTACTS} from '../constants/actionTypes';
import * as api from '../api';

export const getContact = () => async (dispatch) => {
  try {
    const response = await api.getContacts();
    const data = response.data;

    dispatch({ type: All_CONTACTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
