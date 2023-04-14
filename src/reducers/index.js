import {combineReducers} from 'redux';
import auth from './auth';
import activity from './activity';
import adminReporting from './adminReports';
import news from './news';


export default combineReducers({
  auth,activity,adminReporting,news
});