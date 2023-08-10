import { GALLARY_IMAGES, SLIDER_IMAGES,DELETE_SLIDER_SUCCESS,DELETE_GALLERY_SUCCESS } from "../constants/actionTypes";

const assetsReducer = (
  state = {
    sliderImages: [{ image: "" }],
    galleryImages: [{ image: "" }],
  },
  action
) => {
  switch (action.type) {
    case SLIDER_IMAGES:
      return { ...state, sliderImages: action.payload };

    case GALLARY_IMAGES:
      return { ...state, galleryImages: action.payload };
    
    case DELETE_SLIDER_SUCCESS:
        return {
            ...state,
            sliderImages: state.sliderImages.filter(
                (slider) => slider.id !== action.payload
            ),
        };
    case DELETE_GALLERY_SUCCESS:
        return {
            ...state,
            galleryImages: state.galleryImages.filter(
                (gallery) => gallery.id !== action.payload
            ),
        };

    default:
      return state;
  }
};

export default assetsReducer;
