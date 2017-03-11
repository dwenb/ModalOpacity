/**
 * # stores
 *
 *
 */
'use strict';

/**
 * ## Imports
 *
 * redux functions
 */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reactotron from 'reactotron';

/**
 * ## Reducer
 * The reducer contains the 4 reducers from
 * device, global, auth, profile
 */
import reducer from '../reducers';

/**
 * ## States
 * Snowflake explicitly defines initial state
 *
 */
import homeInitialState from '../reducers/home/homeInitialState';


/**
 * ## creatStoreWithMiddleware
 * Like the name...
 */
const createStoreWithMiddleware = applyMiddleware(
    thunk,
    Reactotron.reduxMiddleware
)(createStore);

/**
 *
 * ## Initial state
 * Create instances for the keys of each structure in snowflake
 * @returns {Object} object with 4 keys
 */
function getInitialState() {
    return {
        home: (new homeInitialState),
    };
}

/**
 * ## configureStore
 * @param {Object} the state with for keys:
 * device, global, auth, profile
 *
 */
export default function configureStore(initialState) {
    if (!initialState) {
        initialState = getInitialState();
    }

    return createStoreWithMiddleware(reducer, initialState);
};
