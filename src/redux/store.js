// core
import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';

// rootReducer
import {reducer} from "./reducers/reducer";

// sagas

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

export {store}