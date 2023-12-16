import {
  All_MEMBERS,
  SELECT_REGION,
  SELECT_ZONE,
  SELECT_CLUB,
  UPDATE_MEMBER_INFO,
  RESET_MEMBER_INFO,
  MEMBER_INFO,
  DELETE_MEMBER_SUCCESS
} from "../constants/actionTypes";
const memberDetails = {
  clubName: "",
  clubId: "",
  regionName: "",
  title: [],
  zoneName: "",
  firstName: "",
  middleName: "",
  lastName: "",
  id: "",
  spouseName: "",
  dob: "",
  email: "",
  phone: "",
  gender: "",
  occupation: "",
  postalCode: "",
  state: "",
  city: "",
  address1: "",
  address2: "",
  id_available: false,
};
const membersReducer = (
  state = {
    memberData: [],
    selectRegion: [],
    selectZone: [],
    selectClub: [],
    memberInfo: memberDetails,
  },
  action
) => {
  switch (action.type) {
    case UPDATE_MEMBER_INFO:
      return {
        ...state,
        memberInfo: {
          ...state.memberInfo,
          [action.payload.name]: action.payload.value,
        },
      };
    case RESET_MEMBER_INFO:
      return {...state,memberInfo:memberDetails}
    case MEMBER_INFO:
      return {...state,memberInfo:action.payload}
    case SELECT_REGION:
      return { ...state, selectRegion: action.payload };
    case SELECT_ZONE:
      return { ...state, selectZone: action.payload };
    case SELECT_CLUB:
      return { ...state, selectClub: action.payload };
    case All_MEMBERS:
      return { ...state, memberData: action.payload };
    
    case DELETE_MEMBER_SUCCESS:
      return {
        ...state,
        memberData: state.memberData.filter(
          (member) => member.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default membersReducer;
