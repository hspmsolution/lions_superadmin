import { GALLARY_IMAGES, SLIDER_IMAGES,DELETE_SLIDER_SUCCESS,DELETE_GALLERY_SUCCESS,DISTRICT_RESOURCES,INTERNATIONAL_RESOURCES,DELETE_INTERNATIONAL_RESOURCES,DELETE_DISTRICT_RESOURCES } from "../constants/actionTypes";

const assetsReducer = (
  state = {
    sliderImages: [{ image: "" }],
    galleryImages: [{ image: "" }],
    districtResources:[],
    internationalResources:[],
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
    case DISTRICT_RESOURCES:
        return { ...state, districtResources: action.payload };
    case INTERNATIONAL_RESOURCES:
        return { ...state, internationalResources: action.payload };
    case DELETE_DISTRICT_RESOURCES:
        return {
            ...state,
            districtResources: state.districtResources.filter(
                (district) => district.id !== action.payload
            ),
        };
    case DELETE_INTERNATIONAL_RESOURCES:
        return {
            ...state,
            internationalResources: state.internationalResources.filter(
                (international) => international.id !== action.payload
            ),
        };
        
    default:
      return state;
  }
};

export default assetsReducer;
