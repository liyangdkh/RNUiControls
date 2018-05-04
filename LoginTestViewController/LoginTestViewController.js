import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    NavigatorIOS
} from 'react-native';

var LoginViewController = require('../LoginTestViewController/LoginViewController/LoginViewController');

class LoginTestViewController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        };
    }
    render() {
        return(
            <View style={{flex:1}}>
                <Modal animationType={'slide'}
                       transparent={false}
                       visible={this.state.isLogin}
                >
                    <NavigatorIOS style={styles.navStyle}
                                  barTintColor={'white'}
                                  tintColor={'black'}
                                  titleTextColor={'black'}
                                  leftButtonTitle={'取消'}
                                  onLeftButtonPress={this.dismissLoginView.bind(this)}
                                  initialRoute={
                                      {
                                          title:'登录',
                                          component:LoginViewController
                                      }
                                  }
                    >
                    </NavigatorIOS>
                </Modal>
                <Text style={{marginTop:84, alignSelf:'center', fontSize:30, color:'black'}}
                      onPress={this.startLoginIn.bind(this)}>
                    去登录
                </Text>
            </View>
        );
    }
    startLoginIn() {
        this.setState({isLogin: true});
    }
    dismissLoginView() {
        this.setState({isLogin: false});
    }
}
module.exports = LoginTestViewController;

const styles = StyleSheet.create({
    navStyle: {
        flex:1
    }
});