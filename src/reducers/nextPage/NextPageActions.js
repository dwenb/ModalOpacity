'use strict';
/**
 * ## Imports
 *
 * The actions for wallet
 */
const {
    HOME,
    ROUTER_GO_TO_SHOW_INFO,
} = require('../../lib/constants').default;

export function getInfo(json) {
    return {
        type: ROUTER_GO_TO_SHOW_INFO,
        payload: json,
    }
}