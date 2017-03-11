/**
 * #
 *
 */
'use strict';

/**
 * The necessary React components
 */
import React, {Component} from 'react';
import{
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
}from 'react-native';

import NextPage from '../components/NextPage';

/**
 * ## Imports
 *
 * Redux
 */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

/**
 * The actions we need
 */
import * as routerActions from '../reducers/router/routerActions';



/**
 * ## Redux boilerplate
 */

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions:bindActionCreators({...routerActions,},dispatch)
    };
}

class InfoIndex extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    /**
     * ### render
     */
    render() {
        return (
            <View style={styles.container}>
                <NextPage/>
            </View>
        );
    }
}

/**
 * ## Styles
 */
var styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 49,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoIndex);
