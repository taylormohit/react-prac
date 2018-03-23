import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userManagement from './userManagement'
import classesChange from './classesChange'

import eventLog from './eventLog'

import auth from './auth';

export default combineReducers({
  router: routerReducer,
  auth,
    userManagement,
    eventLog,
    classesChange
});
