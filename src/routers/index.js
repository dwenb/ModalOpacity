/**
 * # routers
 *
 *
 */
'use strict';
/**
 * ### React
 *
 * Necessary components from ReactNative
 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image
} from 'react-native';

/**
 * ### Router-Flux
 *
 * Necessary components from Router-Flux
 */
import {
    Scene,
    Router,
    Actions
} from 'react-native-router-flux';

import HomeIndex from '../container/HomeIndex';
import NextPage from '../container/InfoIndex';

export default class NavigationRouter extends React.Component {

    constructor(props) {
        super(props);
        //this.renderKnowledgeBaseTitle = this.renderKnowledgeBaseTitle.bind(this);
    }

    render() {
        return (
            // setup the router table with App selected as the initial component
            // note: See https://github.com/aksonov/react-native-router-flux/issues/948
            <Router sceneStyle={{backgroundColor: 'white'}}
                    navigationBarStyle={{
                        backgroundColor: 'white',
                        //backgroundColor:'gray',
                        height: 64,
                        borderBottomColor: 'transparent',
                        borderBottomWidth: 0
                    }}
                    titleStyle={styles.titleStyle}
            >
                <Scene key="root"
                       hideNavBar={true}>
                    <Scene key="HomeIndex"
                           component={HomeIndex}
                           type="replace"
                           initial={true}/>
                    <Scene key="NextPage"
                           title="Modal展示页"
                           component={NextPage}
                           hideNavBar={false}/>
                </Scene>
            </Router>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        color: '#000f1a',
        fontSize: 17,
        fontWeight: '600'
    },
})