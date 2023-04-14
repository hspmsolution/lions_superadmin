import {  REPORTED_NEWS} from '../constants/actionTypes';

const newsReducer = (state ={ reportedNews:[]} , action) => {
  switch (action.type) {
    case REPORTED_NEWS:
         return {...state,reportedNews:action.payload}
    default:
      return state;
  }
};

export default newsReducer;
