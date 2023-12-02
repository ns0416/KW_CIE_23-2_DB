import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist';
import user from './user'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "root",
    storage,   // local storage에 저장.
    whitelist: ["user"],
}

const rootReducer = combineReducers({ user });

export default persistReducer(persistConfig, rootReducer)