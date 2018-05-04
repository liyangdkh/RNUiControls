import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ProgressViewIOS
} from 'react-native';

class ProgressViewController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0.0
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
                <ProgressViewIOS style={styles.progressStyle}
                                 progressTintColor={'purple'}
                                 progressViewStyle={'bar'}
                                 trackTintColor={'yellow'}
                                 progress={this.state.progress}
                >
                </ProgressViewIOS>
            </View>
        );
    }
    setToggleTimeout() {
        this.timer = setTimeout(()=>{
            console.log('this is a timer!!!');
            this.setState({progress: this.state.progress + 0.01});
            if (this.state.progress >=1.0) {
                this.timer && clearTimeout(this.timer);
            }
            else {
                this.setToggleTimeout();
            }
            }, 50);
    }
    componentDidMount() {
        this.setToggleTimeout();
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
}

module.exports = ProgressViewController;

const styles = StyleSheet.create({
    progressStyle: {
        marginTop:84
    }
});