import {
  AUTH,
  LOGOUT,
  CLIENT_MSG,
  ADMIN,
  MEMBER_PROFILE,
} from "../constants/actionTypes";
import decodeJWT from "../utils/jwtDecode";

const authReducer = (
  state = {
    authData: null,
    message: null,
    admin: false,
    role: null,
    memberProfile: {
      regionName:"",
      zoneName:"",
      title:"",
      clubId:"",
      clubName:"",
      profilePicture:"",
      firstName: "",
      middleName: "",
      lastName: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      postalCode: "",
      email: "",
      phone: "",
      spouseName: "",
      dob: "",
      occupation: "",
      gender: "",
    },
  },
  action
) => {
  switch (action.type) {
    case AUTH: {
      const memberData = decodeJWT(action.payload.token);
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        authData: memberData,
        admin: true,
        role: memberData.title,
      };
    }

    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, authData: null, admin: false, role: null };

    case ADMIN: {
      if (state.admin) return state;
      const token = localStorage.getItem("token");
      if (!token) return state;
      const decoded = decodeJWT(token);
      if (decoded.exp * 1000 < new Date().getTime()) {
        localStorage.removeItem("token");
        return { ...state, authData: null, admin: false, role: null };
      }
      if (token)
        return {
          ...state,
          authData: decoded,
          admin: true,
          role: decoded.title,
        };
      return state;
    }

    case CLIENT_MSG:
      return { ...state, message: action.message };

    case MEMBER_PROFILE:
      return { ...state, memberProfile: action.payload };

     
    default:
      return state;
  }
};

export default authReducer;
