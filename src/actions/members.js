import { All_MEMBERS } from '../constants/actionTypes';
import * as api from '../api';

export const getMembers = () => async (dispatch) => {
  try {
    const response = await api.getMembers();
    const data = response.data;

    dispatch({ type: All_MEMBERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
