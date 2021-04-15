// core
import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';

// rootReducer
import {rootReducer} from "./reducers/rootReducer";

// sagas
import {watchFetchUser} from "./sagas/userSagas";
import {watchFetchFeeds} from "./sagas/feedsSagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchFetchUser);
sagaMiddleware.run(watchFetchFeeds);

export {store}