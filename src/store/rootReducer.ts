import { reportReducer } from './Report/reducer';
import { userReducer } from './User/reducer';
import { combineReducers } from 'redux';

import authReducer from './Auth/reducer';
import loadingReducer from './Loading/reducer';
import navigationService from '@mobile/services/navigation';
import StorageService from '@mobile/services/storage';
import { StorageItems } from '@mobile/enum/storage';

const reducers = combineReducers({
  loading: loadingReducer,
  auth: authReducer,
  user: userReducer,
  report: reportReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return reducers(state, action);
};

export default rootReducer;
