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

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
    }

    nextPage() {
        let page = {};
        page.name = '李四';
        page.age = '24';
        this.props.actions.getInfo(page);
        this.props.actions.routerGoToNextPage();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>姓名: {this.props.info.name}</Text>
                <Text>年龄: {this.props.info.age}</Text>
                <TouchableOpacity style={{height: 80, backgroundColor: '#f5f6f6', alignItems: 'center'}}
                                  onPress={()=>this.nextPage()}>
                    <Text style={{fontSize: 20, color: 'red', marginTop: 20}}> 欢迎来react native世界!</Text>
                    <Text style={{fontSize: 20, color: 'red', marginTop: 20}}> 请点击我进入下一页!</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});