
'use strict';

/**
 * ### React
 *
 * Necessary components from ReactNative
 */
import React from 'react';
import {
    AppRegistry,
}
    from 'react-native';
import Reactotron from 'reactotron'

/**
 * ### Redux
 *
 * ```Provider``` will tie the React-Native to the Redux store
 */
import {
    Provider,
    connect
} from 'react-redux';

import {Actions as RouterActions} from 'react-native-router-flux';

import configureStore from './stores';
import NavigationRouter from './routers'

/**
 * ## Actions
 *  The necessary actions for dispatching our bootstrap values
 */
// import {setPlatform, setVersion} from './reducers/device/deviceActions';
// import {setStore} from './reducers/global/globalActions';

/**
 *  The version of the app but not  displayed yet
 */
// import pack from '../package';
// var VERSION = pack.version;

/**
 * ## Native
 *
 * ```configureStore``` with the ```initialState``` and set the
 * ```platform``` and ```version``` into the store by ```dispatch```.
 * *Note* the ```store``` itself is set into the ```store```.  This
 * will be used when doing hot loading
 */

export default function native(platform) {
    // connect with defaults
    Reactotron.connect({enabled: __DEV__})
    let App = React.createClass({
        render() {
            const store = configureStore();
            if (__DEV__){
                Reactotron.addReduxStore(store);
            }
            // configureStore will combine reducers from snowflake and main application
            // it will then create the store based on aggregate state from all reducers
            // store.dispatch(setPlatform(platform));
            // store.dispatch(setStore(store));

            return (
                <Provider store={store}>
                    <NavigationRouter />
                </Provider>
            );
        }
    });

    AppRegistry.registerComponent('ModalOpacity', () => App);
}
