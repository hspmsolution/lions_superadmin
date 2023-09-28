import {
  REGION_DATA,
  All_CLUBS,
  DELETE_CLUB_SUCCESS,
  CLUB_INFO,
  CLUB_ACTIVITIES,
  CLUB_NEWS,
  CLUB_ADMIN_REPORT,
  ALL_ADMIN_REPORT,
  EDIT_CLUB_INFO
} from "../constants/actionTypes";

const clubsReducer = (
  state = { region: [], registeredClubs: [], clubInfo: [], clubActivities: [],clubNews:[],clubAdminReport:{},allAdminReport:{reportedClubs:[],nonReportedClubs:[]},clubEditInfo:{}},
  action
) => {
  switch (action.type) {
    case CLUB_INFO:
      return { ...state, clubInfo: action.payload };

    case DELETE_CLUB_SUCCESS:
      return {
        ...state,
        registeredClubs: state.registeredClubs.filter(
          (club) => club.clubId !== action.payload
        ),
      };

    case CLUB_NEWS:
      return {...state,clubNews:action.payload}
    case CLUB_ADMIN_REPORT:
      return {...state,clubAdminReport:action.payload}
    case ALL_ADMIN_REPORT:
      return {...state,allAdminReport:action.payload}
    case CLUB_ACTIVITIES:
      return { ...state, clubActivities: action.payload };
    case All_CLUBS:
      return { ...state, registeredClubs: action.payload };
    case REGION_DATA:
      return { ...state, region: action.payload };
    case EDIT_CLUB_INFO:
      return {...state,clubEditInfo:action.payload}
    default:
      return state;
  }
};

export default clubsReducer;
