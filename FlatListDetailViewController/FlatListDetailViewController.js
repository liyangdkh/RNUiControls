import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    AlertIOS,
} from 'react-native';

class FlatListDetailViewController extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={{marginTop:64, flex:1}}>
                <Text>Flat list detail view controller</Text>
            </View>
        );
    }
}

module.exports = FlatListDetailViewController;
