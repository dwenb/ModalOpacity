/**
 * # routerActions.js
 *
 * The actions to support the router
 */
'use strict';

/**
 * ## Imports
 *
 * The actions for router
 */
const {
    ROUTER_GO_TO_HOME_PAGE,
    ROUTER_GO_TO_NEXT_PAGE,
} = require('../../lib/constants').default;

import {Actions as RouterActions} from 'react-native-router-flux';
//import Detail from '../../containers/DetailPage'
/**
 * ## State actions
 */

export function routerGoToHomePage() {
    return dispatch => {
        dispatch({
            type: ROUTER_GO_TO_HOME_PAGE,
        });
        RouterActions.HomeIndex();
    };
}

export function routerGoToNextPage() {
    return dispatch => {
        dispatch({
            type: ROUTER_GO_TO_NEXT_PAGE,
        });
        RouterActions.NextPage();
    }
}

