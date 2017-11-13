import { combineReducers } from 'redux';

import userProfileReducer from './profile';

export default combineReducers({
  profile: userProfileReducer,
});
