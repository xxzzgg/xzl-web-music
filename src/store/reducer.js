import { combineReducers } from 'redux-immutable';
import {reducer as recommendReducer} from "../pages/discover/c-pages/recommend/store";

import {reducer as playerReducer} from '../pages/player/store';

const cReducer = combineReducers({
  recommend: recommendReducer,
  player :playerReducer
});
function test() {
  console.log('just test git test2 commit')
}

export default cReducer;