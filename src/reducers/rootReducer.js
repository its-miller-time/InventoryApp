// This is the root reducer 
// To make a rootReducer, get a method from redux called combine reducers
// 1. Get each individual reducer
import { combineReducers } from 'redux';
// 2. Get each individual reducer 
// the store is managed by this thing (root reducer) 
// the manager need individual departments....the reducers 

import frozenReducer from './frozenReducer';
import dairyReducer from './dairyReducer';
import meatReducer from './meatReducer';

// 3. Call combine reducers and hand it an object
// 3.1 Each key in the object we pass to combine reducers will be a piece of state in the redux store 
// 3.2 Each value will be a value of that peice of state in the redux store 

const rootReducer =  combineReducers({
    frozen: frozenReducer,
    dairy: dairyReducer,
    meat: meatReducer
})

export default rootReducer;