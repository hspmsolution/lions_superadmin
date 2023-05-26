import axios from "axios";

const ROOT_URL = window.location.href;
const rootUrlRegex = /http:\/\/localhost:3000\/*/gm;

export let API_URL;
if (rootUrlRegex.test(ROOT_URL)) {
  API_URL = "http://localhost:5000/admin" ;
} else {
  API_URL = "https://lionsinternationalbackend-production.up.railway.app/admin";
}

const API = axios.create({ baseURL:API_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});
export const signIn = (formData) => API.post("auth/login", formData);

export const getActivity = () => API.get("activity/type");
export const getSubtype = (type) => API.get(`activity/subtype?type=${type}`);
export const getCategory = (subtype) =>
  API.get(`activity/category?subtype=${subtype}`);
export const getPlaceHolder = (Category) =>
  API.get(`activity/placeholder?category=${Category}`);
export const getStats=()=>API.get('activity/stats');
export const getRegion=()=>API.get("regiondata");
export const addGallery=(formData)=>API.post("assets/addGallery",formData);
export const addSlider=(formData)=>API.post("assets/addSlider",formData)
export const addClubs=(formData)=>API.post("clubs/addClubs",formData);
export const getClubs=()=>API.get("clubs/getClubs");
export const deleteClub = (clubId) => API.delete(`clubs/deleteClubs?clubId=${clubId}`);
export const getMembers=()=>API.get("members/getMembers");
export const getContacts=()=>API.get("contact/getContacts");
export const getUpcomingActivity=()=>API.get("activity/getUpcomingActivity");
export const addActivity=(formData)=>API.post("activity/addActivity",formData);
export const getActivities=()=>API.get("activity/activities");