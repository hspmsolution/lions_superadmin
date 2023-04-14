import {  ACTIVITY_CATEGORY,ACTIVITY_SUBTYPE,ACTIVITY_TYPE,ACTIVITY_PLACEHOLDER,REPORTED_ACTIVITY} from '../constants/actionTypes';

const activityReducer = (state = { type:[],subType:[],category:[],reportedActivity:[],placeHolder:'' }, action) => {
  switch (action.type) {
 
    case ACTIVITY_TYPE :
        return {...state,type:action.payload}
    
    case ACTIVITY_SUBTYPE:
        return {...state,subType:action.payload}
    
    case ACTIVITY_CATEGORY:
        return {...state,category:action.payload}
    
    case ACTIVITY_PLACEHOLDER:
        return {...state,placeHolder:action.payload}
    
    case REPORTED_ACTIVITY:
         return {...state,reportedActivity:action.payload}
    default:
      return state;
  }
};

export default activityReducer;
