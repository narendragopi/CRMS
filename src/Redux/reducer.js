import { combineReducers } from "redux";
import Cars from "./reducers/CarReducers";
import Notification from './reducers/NotificationReducer';
import Customers from './reducers/CustomerReducer';

export default combineReducers({
   Cars,
   Customers,
   Notification
})


