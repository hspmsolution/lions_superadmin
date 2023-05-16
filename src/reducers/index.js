import {combineReducers} from 'redux';
import auth from './auth';
import activity from './activity';
import adminReporting from './adminReports';
import news from './news';
import clubs from "./clubs";

export default combineReducers({
  auth,activity,adminReporting,news,clubs
});