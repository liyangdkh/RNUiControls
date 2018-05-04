import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    AlertIOS,
    ActivityIndicator
} from 'react-native';

class ActivityIndicatorViewController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: true
        }
    }
    render(){
        return(
            <View style={{backgroundColor:'#f2f2f2', flex:1, marginTop:64}}>
                <ActivityIndicator animating={this.state.animating}
                                   size={'large'}
                                   hidesWhenStopped={true}
                                   color={'red'}
                                   style={[styles.indicatorStyle, {height:80}]}
                ></ActivityIndicator>
            </View>
        );
    }
    setToggleTimeout() {
        this.timer = setTimeout(()=>{
            console.log('this is a timer!!!');
            this.setState({animating: !this.state.animating});
            this.setToggleTimeout();
        }, 5000);
    }
    componentDidMount() {
        this.setToggleTimeout();
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
}

module.exports = ActivityIndicatorViewController;

const styles = StyleSheet.create({
    indicatorStyle: {
        marginTop:64,
    }
});