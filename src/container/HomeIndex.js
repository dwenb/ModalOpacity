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

import Home from '../components/Home';

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
import * as nextPageActions from '../reducers/nextPage/NextPageActions';

/**
 * ### Translations
 */
//import I18n from '../../I18n';

/**
 * ## Redux boilerplate
 */

function mapStateToProps(state) {
    return {
        info: state.nextPageInfo.info,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...routerActions, ...nextPageActions}, dispatch)
    };
}

class HomeIndex extends Component {
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
                <Home
                    info={this.props.info}
                    actions={this.props.actions}
                />
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
    placeholder: {
        flex: 1,
        textAlign: 'center',
        marginTop: 200
    },
    appointFinanceNavigation: {
        marginTop: 32,
        height: 24,
        marginBottom: 22,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    backImage: {
        marginLeft: 14,
        height: 23,
        width: 23,
        resizeMode: 'contain',
        tintColor: '#1b88ee',
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex);
