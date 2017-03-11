'use strict';

/**
 * ## Actions
 *
 */
const {
    HOME,
} = require('../../lib/constants').default;

/**
 * ## Initial State
 *
 */
import InitialState from './homeInitialState';
const initialState = new InitialState;

/**
 *  # walletReducer function
 */
export default function investReducer(state = initialState, action) {
    if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

    switch (action.type) {
        case HOME:
            return state;
    }
    return state;
}