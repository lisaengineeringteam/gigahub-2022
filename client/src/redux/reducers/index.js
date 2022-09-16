import { combineReducers } from 'redux';

// Reducers
import alert from './alertReducer';
import user from './userReducer';

export default combineReducers({ alert, user });
