'use strict';

/**
 * ## Actions
 *
 */
const {
    HOME,
    ROUTER_GO_TO_SHOW_INFO,
} = require('../../lib/constants').default;

/**
 * ## Initial State
 *
 */
import InitialState from './NextPageInitialState';
const initialState = new InitialState;

/**
 *  # walletReducer function
 */
export default function investReducer(state = initialState, action) {
    let nextState = null;
    if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

    switch (action.type) {
        case ROUTER_GO_TO_SHOW_INFO:
            nextState=state.setIn(['info', 'name'], action.payload.name)
                .setIn(['info', 'age'], action.payload.age);
            return nextState;
    }
    return state;
}