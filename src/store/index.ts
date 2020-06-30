import {combineReducers, createStore, applyMiddleware} from "redux";
import {GoodData} from "./good/Reducer";
import thunk from 'redux-thunk';
import {storeState} from "./store/Reducer";

export default createStore(
  combineReducers({
    goodData: GoodData,
    storeData: storeState
  }),
  applyMiddleware(thunk)
);