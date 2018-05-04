import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    AlertIOS,
    SegmentedControlIOS
} from 'react-native';

class SegmentedControlViewController extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={{flex:1}}>
                <SegmentedControlIOS style={styles.segmentedStyle}
                                     selectedIndex={0}
                                     values={['one', 'two', 'three', 'four']}
                                     onChange={(event)=>{
                                         AlertIOS.alert('clicked' + event.nativeEvent.selectedSegmentIndex);
                                     }}
                                     // tintColor={'red'}
                >
                </SegmentedControlIOS>
            </View>
        );
    };
}

module.exports = SegmentedControlViewController;

const styles = StyleSheet.create({
    segmentedStyle: {
        marginTop:84
    }
});