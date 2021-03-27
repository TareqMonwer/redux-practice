import counterReducer from './counter';
import loggedInReducer from './isLoggedIn';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    counter: counterReducer,
    isLoggedIn: loggedInReducer
})

export default rootReducer;