import { combineReducers } from 'redux';

import auth from './auth/';

import global from './global';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'jwt',
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  auth: auth,

  global,
});

export default persistReducer(persistConfig, rootReducer);
