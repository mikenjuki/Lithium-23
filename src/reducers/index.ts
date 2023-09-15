import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  Reducer,
} from "redux";
import localforage from "localforage";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import dataReducer from "./DataReducer";

interface Action {
    type: string;
    payload: any;
}

const persistConfigApp = {
  key: "app",
  storage: localforage,
};

const allReducers = combineReducers({
  app: persistReducer(persistConfigApp, dataReducer as Reducer),
});

const rootReducer = (state: any, action: { payload: Action; type: string }) => {
  return allReducers(state, action);
};

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
