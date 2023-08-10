import {
  CLIENT_MSG,
  GALLARY_IMAGES,
  SLIDER_IMAGES,
  DELETE_SLIDER_SUCCESS,
  DELETE_GALLERY_SUCCESS
} from "../constants/actionTypes";
import * as api from "../api";

export const addGallery = (formData) => async (dispatch) => {
  try {
    const { data, status } = await api.addGallery(formData);
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
  }
};
export const addSlider = (formData) => async (dispatch) => {
  try {
    const { data, status } = await api.addSlider(formData);
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
  }
};

export const getSlider = () => async (dispatch) => {
  try {
    const { data } = await api.slider();
    dispatch({ type: SLIDER_IMAGES, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getGallery = () => async (dispatch) => {
  try {
    const { data } = await api.gallery();
    dispatch({ type: GALLARY_IMAGES, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteSlider = (id) => async (dispatch) => {
  try {
    const { data, status } = await api.deleteSlider(id);
    dispatch({
      type: CLIENT_MSG,
      message: { info: data.successMessage, status },
    });
    dispatch({type:DELETE_SLIDER_SUCCESS,payload:id})
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

export const deleteGallery = (id) => async (dispatch) => {
  try {
    const { data, status } = await api.deleteGallery(id);
    dispatch({
      type: CLIENT_MSG,
      message: { info: data.successMessage, status },
    });
    dispatch({type:DELETE_GALLERY_SUCCESS,payload:id})
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
