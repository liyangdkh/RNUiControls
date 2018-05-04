import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Animated,
    Dimensions,
    Text,
} from 'react-native'

const {height, width} = Dimensions.get('window');

class Toast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            text: '',
            opacityValue: new Animated.Value(0.8),
        }
    }

    show(text, duration) {
        this.setState({
            isShow: true,
            text: text,
        });
        Animated.timing(
            this.state.opacityValue,
            {
                toValue: 0.8,
                duration: 500,
            }
        ).start(() => {
            this.close(duration);
        });
    }

    close(duration) {
        this.timer && clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            Animated.timing(
                this.state.opacityValue,
                {
                    toValue: 0.0,
                    duration: duration,
                }
            ).start(() => {
                this.setState({
                    isShow: false,
                });
            });
        }, duration);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        const view = this.state.isShow ?
            <View
                style={[styles.container, {top:(height / 2) - 50}]}
                pointerEvents="none"
            >
                <Animated.View
                    style={[styles.content, {opacity: this.state.opacityValue}]}
                >
                    <Text style={styles.text}>{this.state.text}</Text>
            </Animated.View>
            </View> : null;
        return view;
    }
}

module.exports = Toast;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        elevation: 999,
        alignItems: 'center',
        zIndex: 10,
    },
    content: {
        backgroundColor: 'black',
        borderRadius: 5,
        padding: 10,
    },
    text: {
        color: 'white',
        fontSize:18
    }
});
