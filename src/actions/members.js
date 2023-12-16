import {
  All_MEMBERS,
  SELECT_REGION,
  SELECT_ZONE,
  SELECT_CLUB,
  UPDATE_MEMBER_INFO,
  CLIENT_MSG,
  RESET_MEMBER_INFO,
  MEMBER_INFO,
  DELETE_MEMBER_SUCCESS
} from "../constants/actionTypes";
import * as api from "../api";

export const getMembers = () => async (dispatch) => {
  try {
    const response = await api.getMembers();
    const data = response.data;
  
    dispatch({ type: All_MEMBERS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const memberDetails = (id) => async (dispatch) => {
  try {
    const {data,status}= await api.memberDetails(id);   
    dispatch({ type: MEMBER_INFO, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CLIENT_MSG,
      message: {
        info: error.response.data?.message,
        status: error.response.status,
      },
    });
  }
};

export const getSelectRegion = () => async (dispatch) => {
  try {
    const response = await api.selectRegion();
    const data = response.data;
    dispatch({ type: SELECT_REGION, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getSelectZone = (region) => async (dispatch) => {
  try {
    const response = await api.selectZone(region);
    const data = response.data;

    dispatch({ type: SELECT_ZONE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getSelectClub = (region, zone) => async (dispatch) => {
  try {
    const response = await api.selectClub(region, zone);
    const data = response.data;

    dispatch({ type: SELECT_CLUB, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const checkMemberId = (id) => async (dispatch) => {
  try {
    const {data,status} = await api.checkMemberId(id);
    dispatch({
      type: UPDATE_MEMBER_INFO,
      payload: { name: "id_available", value: true },
    });
    dispatch({
      type: CLIENT_MSG,
      message: { info: data.successMessage, status },
    });
  } catch (error) {
    dispatch({
      type: UPDATE_MEMBER_INFO,
      payload: { name: "id_available", value:false},
    });
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

export const addMember = (formData) => async (dispatch) => {
  try {
    const {data,status} = await api.addMember(formData);
    dispatch({
      type: CLIENT_MSG,
      message: { info: data.successMessage, status },
    });
    dispatch({
      type:RESET_MEMBER_INFO
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CLIENT_MSG,
      message: {
        info: error.response.data?.message,
        status: error.response.status,
      },
    });
  }
};

export const updateMemberInfo = (formData,handleClose) => async (dispatch) => {
  try {
    const {data,status} = await api.updateMemberInfo(formData);
    dispatch({
      type: CLIENT_MSG,
      message: { info: data.successMessage, status },
    });
    dispatch(getMembers());
    dispatch({
      type:RESET_MEMBER_INFO
    });
    handleClose();
  } catch (error) {
    console.log(error);
    dispatch({
      type: CLIENT_MSG,
      message: {
        info: error.response.data?.message,
        status: error.response.status,
      },
    });
  }
};


export const deleteMember = (id,handleCloseDel) => async (dispatch) => {
  try {
    const { data, status } = await api.deleteMember(id);
    dispatch({
      type: CLIENT_MSG,
      message: { info: data.successMessage, status },
    });
    dispatch({type:DELETE_MEMBER_SUCCESS,payload:id})
    handleCloseDel();
  } catch (error) {
    console.log(error);
    dispatch({
      type: CLIENT_MSG,
      message: {
        info: error.response.data?.message,
        status: error.response.status,
      },
    });
  }
};
