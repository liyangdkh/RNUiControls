import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
} from 'react-native';

var MineViewController = require('../MineViewController/MineViewController');

class TestMineViewController extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={{flex:1}}>
                <Text style={{marginTop:84, alignSelf:'center', fontSize:30, color:'black'}}
                      onPress={this.startMineView.bind(this)}>
                    我的页面
                </Text>
            </View>
        );
    }
    startMineView() {
        this.props.navigator.push(
            {
                component:MineViewController,
                title:'我的'
            }
        );
    }
}

module.exports = TestMineViewController;