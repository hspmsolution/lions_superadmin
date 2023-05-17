import * as api from '../api';
import { CLIENT_MSG ,All_CLUBS,DELETE_CLUB_SUCCESS} from '../constants/actionTypes';

export const addClubs = (formData) => async (dispatch) => {
  try {
    const { data, status } = await api.addClubs(formData);
   
    dispatch({
      type: CLIENT_MSG,
      message: { info: data.successMessage, status },
    });
  } catch (error) {
    dispatch({
      type: CLIENT_MSG,
      message: {
        info: error.response.data?.message,
        status: error.response.status,
      },
    });
    console.log(error);
  }
};
export const getClubs = () => async (dispatch) => {
  try {
    const { data } = await api.getClubs();
    console.log(data);
    dispatch({ type: All_CLUBS, payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const deleteClub = (clubId) => async (dispatch) => {
  try {
    const { data, status }= await api.deleteClub(clubId);
    dispatch({
      type: CLIENT_MSG,
      message: { info: data.successMessage, status },
    });
  } catch (error) {
    dispatch({
      type: CLIENT_MSG,
      message: {
        info: error.response.data?.message,
        status: error.response.status,
      },
    });
    console.log(error);
  }
};
import * as api from "../api";
import { REGION_DATA } from "../constants/actionTypes";

export const getRegion = () => async (dispatch) => {
  try {
    const { data } = await api.getRegion();
    dispatch({ type: REGION_DATA, payload: data });
  } catch (error) {
    console.log(error);
  }
};
