import axios from "axios";

const ROOT_URL = window.location.href;
const rootUrlRegex = /http:\/\/localhost:3000\/*/gm;

export let API_URL;
if (rootUrlRegex.test(ROOT_URL)) {
  API_URL = "http://localhost:5000/api" ;
} else {
  API_URL = "https://lionsinternationalbackend-production.up.railway.app/api";
}

const API = axios.create({ baseURL:API_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("profile")}`;
  }
  return req;
});
export const signIn = (formData) => API.post("auth/login", formData);
export const resetPass=(formData)=>API.post("auth/resetpass",formData);
export const addActivity = (formData) =>
  API.post("activity/addactivity", formData);
export const getActivity = () => API.get("activity/type");
export const getSubtype = (type) => API.get(`activity/subtype?type=${type}`);
export const getCategory = (subtype) =>
  API.get(`activity/category?subtype=${subtype}`);
export const getPlaceHolder = (Category) =>
  API.get(`activity/placeholder?category=${Category}`);
export const getReportedActivity=()=>API.get("activity/reportedactivity");
export const getAdminReports=(month)=>API.get(`adminreporting/reports?month=${month}`);
export const getPoints=()=>API.get("adminreporting/points");
export const addReport=(data)=>API.post("adminreporting/addreport",data);
export const updateMember=(formData)=>API.post("member/updateprofile",formData);
export const memberProfile=()=>API.get("member/profile");
export const getReportedNews=()=>API.get("news/reportedNews");
export const newsReporting=(formData)=>API.post("news/newsReporting",formData);
