import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';

var {width, height} = Dimensions.get('window');

class MineCell extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={{flex:1, backgroundColor:'red'}}>
                <Text style={{marginLeft:10, alignSelf:'flex-start'}}>{this.props.info.item}</Text>
            </View>
        );
    }
}
module.exports = MineCell;

const styles = StyleSheet.create({

});
