import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Dimensions,
    AlertIOS,
    Slider
} from 'react-native';

class SliderViewController extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={{flex:1}}>
                <Slider maximumTrackTintColor={'red'}
                        minimumTrackTintColor={'purple'}
                        style={styles.sliderStyle}
                        onValueChange={(value)=>{
                            console.log(value);
                        }}
                >
                </Slider>
            </View>
        );
    }
}

module.exports = SliderViewController;

const styles = StyleSheet.create({
    sliderStyle: {
        marginTop:84
    }
});