/**
 * # reducers
 *
 * This class combines all the reducers into one
 *
 */
'use strict';
/**
 * ## Imports
 *
 * our 4 reducers
 */
import home from './home/homeReducer';
import nextPageInfo from './nextPage/NextPageReducer'
import {combineReducers} from 'redux';

/**
 * ## CombineReducers
 *
 * the rootReducer will call each and every reducer with the state and action
 * EVERY TIME there is a basic action
 */
const rootReducer = combineReducers({
    home,
    nextPageInfo,
});

export default rootReducer;