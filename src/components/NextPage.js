'use strict';

/**
 * The necessary React components
 */
import React, {Component} from 'react';
import{
    StyleSheet,
    Modal,
    View,
    Text,
    TouchableOpacity,
}from 'react-native';

export default class NextPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        }
        this.modalShow = this.modalShow.bind(this);
    }

    modalShow(visible) {
        this.setState({
            modalVisible: visible,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{marginBottom: 30, backgroundColor: 'yellow'}}>
                    <Text>姓名: {this.props.info.name}</Text>
                    <Text>年龄: {this.props.info.age}</Text>
                </View>
                <TouchableOpacity style={{height: 90, backgroundColor: '#f5f6f6', alignItems: 'center'}}
                                  onPress={()=>this.modalShow(true)}>
                    <Text style={{fontSize: 20, color: 'red', marginTop: 20}}> 欢迎来Modal演示页!</Text>
                    <Text style={{fontSize: 20, color: 'red', marginTop: 20}}> 请点击我!</Text>
                </TouchableOpacity>
                <Modal
                    style={styles.testModalStyle}
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.modalVisible}
                >
                    <View style={styles.subContainer}
                    >
                        <View style={styles.subView}>
                            <TouchableOpacity style={styles.buttonStyle}
                                              onPress={()=> {
                                                  this.modalShow(!this.state.modalVisible)
                                              }}
                            >
                                <Text style={styles.buttonText}>Hide Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    subContainer: {
        flex: 1,
        height: 264,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    subView: {
        justifyContent: 'flex-end',
        height: 264,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 15,
        backgroundColor: 'white',
    },
    testModalStyle: {
        height: 0,
        marginLeft: 10,
        marginBottom: 10,
        justifyContent: 'flex-end',
    },
    buttonStyle: {
        justifyContent: 'center',
        height: 50,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 8,
        backgroundColor: '#E62622'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#FFFFFF',
    }
});