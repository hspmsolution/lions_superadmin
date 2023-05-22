import {combineReducers} from 'redux';
import auth from './auth';
import activity from './activity';
import adminReporting from './adminReports';
import clubs from './clubs';



export default combineReducers({
  auth,activity,adminReporting,clubs
});