import axios from "axios";
const ROOT_URL = window.location.href;
export let API_URL;
export let DOMAIN_URL;

if (ROOT_URL.includes(".up.railway.app")) {
  API_URL =
    "https://lionsinternationalbackend-production.up.railway.app/api/admin";
    DOMAIN_URL = "https://lionsinternationalbackend-production.up.railway.app";
} else if (ROOT_URL.includes("lionsdistrict317f.org")) {
  API_URL = "https://lionsdistrict317f.org/api/admin";
  DOMAIN_URL = "https://lionsdistrict317f.org";
} else if (ROOT_URL.includes("lions317b.org")) {
  API_URL = "https://lions317b.org/api/admin";
  DOMAIN_URL = "https://lions317b.org";
} else if (ROOT_URL.includes("lions317f.org")) {
  API_URL = "https://lions317f.org/api/admin";
  DOMAIN_URL = "https://lions317f.org";
} else {
  // Default to local development URL
  API_URL = "http://localhost:5000/api/admin";
  DOMAIN_URL = "http://localhost:3001";
}

const API = axios.create({ baseURL: API_URL });

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
export const getStats = () => API.get("activity/stats");
export const getRegion = () => API.get("regiondata");
export const addGallery = (formData) => API.post("assets/addGallery", formData);
export const gallery = () => API.get("assets/addGallery");
export const addSlider = (formData) => API.post("assets/addSlider", formData);
export const slider = () => API.get("assets/slider");
export const addClubs = (formData) => API.post("clubs/addclubs", formData);
export const getClubs = () => API.get("clubs/getclubs");
export const deleteClub = (clubId) =>
  API.delete(`clubs/deleteclub?clubId=${clubId}`);
export const getMembers = () => API.get("members/getMembers");
export const getContacts = () => API.get("contact/getContacts");
export const clubInfo = (clubId) =>
  API.get(`clubs/club-summary?clubId=${clubId}`);
export const clubActivites = (clubId) =>
  API.get(`clubs/clubactivities?clubId=${clubId}`);
export const clubNews = (clubId) => API.get(`clubs/clubnews?clubId=${clubId}`);
export const clubAdminReport=(clubId,month)=>API.get(`clubs/clubadminreport?clubId=${clubId}&month=${month}`)
export const AllAdminReport=(month)=>API.get(`clubs/alladminreport?month=${month}`)
export const getUpcomingActivity = () =>
  API.get("activity/getUpcomingActivity");
export const addActivity = (formData) =>
  API.post("activity/addActivity", formData);
export const getActivities = () => API.get("activity/activities");
export const selectRegion = () => API.get("members/regions");
export const selectZone = (region) => API.get(`members/zones?region=${region}`);
export const selectClub = (region, zone) =>
  API.get(`members/clubs?region=${region}&zone=${zone}`);
export const checkMemberId = (id) => API.get(`members/validate?id=${id}`);
export const addMember = (data) => API.post("members/add", data);

