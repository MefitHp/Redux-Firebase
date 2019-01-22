import { combineReducers } from 'redux'
import authReducer from './AuthReducer';
import projectReducer from './ProjectReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})

export default rootReducer