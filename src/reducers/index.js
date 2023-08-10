import {combineReducers} from 'redux';
import auth from './auth';
import activity from './activity';
import adminReporting from './adminReports';
import clubs from './clubs';
import members from './members';
import contact from './contact';
import assets from './assets'

export default combineReducers({
  auth,activity,adminReporting,clubs,members,contact,assets
});