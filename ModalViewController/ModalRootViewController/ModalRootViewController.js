import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    AlertIOS,
} from 'react-native';

var screenWidth = Dimensions.get('window').width;

class ModalRootViewController extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={{flex:1}}>
                <Text style={{marginTop:100, alignSelf:'center', fontSize:40}}>哈哈哈哈哈哈哈哈</Text>
            </View>
        );
    }
}
module.exports = ModalRootViewController;