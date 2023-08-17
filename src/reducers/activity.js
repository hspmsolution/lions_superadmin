import {
  ACTIVITY_CATEGORY,
  ACTIVITY_SUBTYPE,
  ACTIVITY_TYPE,
  ACTIVITY_PLACEHOLDER,
  REPORTED_ACTIVITY,
  UPCOMING_ACTIVITY,
  ALL_ACTIVITY,
  STATS,
  DELETE_ACTIVITY_SUCCESS
} from "../constants/actionTypes";

const activityReducer = (
  state = {
    type: [],
    subType: [],
    category: [],
    reportedActivity: [],
    allActivity:[],
    placeHolder: "",
    stats: [],
  },
  action
) => {
  switch (action.type) {
    case STATS:
      return { ...state, stats: action.payload };
    case ACTIVITY_TYPE:
      return { ...state, type: action.payload };

    case ACTIVITY_SUBTYPE:
      return { ...state, subType: action.payload };

    case ACTIVITY_CATEGORY:
      return { ...state, category: action.payload };

    case ACTIVITY_PLACEHOLDER:
      return { ...state, placeHolder: action.payload };

    case REPORTED_ACTIVITY:
      return { ...state, reportedActivity: action.payload };
    
    case  UPCOMING_ACTIVITY:
        return { ...state, upcomingActivity: action.payload };
    case ALL_ACTIVITY:
        return { ...state, allActivity: action.payload };
    case DELETE_ACTIVITY_SUCCESS:
      return {
        ...state,
        allActivity: state.allActivity.filter(
          (activity) => activity.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default activityReducer;
