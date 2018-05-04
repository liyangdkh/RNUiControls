import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    TextInput,
    TouchableOpacity,
    Modal
} from 'react-native';

const loginUrl = 'https://mServ.test.66buy.com.cn/publics/login/appLogin';

var screenWidth = Dimensions.get('window').width;

var RegisterViewController = require('../../RegisterViewController/RegisterViewController');
var FindPwdViewController = require('../../FindPwdViewController/FindPwdViewController');
var DataRequest = require('../../DataRequest/DataRequest');
var LoadingView = require('../../LoadingView/LoadingView');
var Toast = require('../../Toast/Toast');

class LoginViewController extends Component {
    constructor(props) {
        super(props);
        this.state={
            phoneNum:'',
            pwd:'',
            loginBtnDisabled: true,
            secureEntry: true,
            loadingView: false,
            position:'center'
        };
    }
    render() {
        return(
            <View style={{flex:1, backgroundColor:'#f5f5f5'}}>
                <Modal animationType={'fade'}
                       transparent={true}
                       visible={this.state.loadingView}>
                    <LoadingView></LoadingView>
                </Modal>

                <View style={styles.phoneStyle}>
                    <Image style={styles.imgStyle} source={{uri:'tel_icon'}}/>
                    <TextInput style={styles.inputTextStyle}
                               autoCapitalize={'none'}
                               autoCorrect={false}
                               autoFocus={false}
                               placeholder={'请输入11位手机号码'}
                               clearButtonMode={'while-editing'}
                               maxLength={11}
                               onChangeText={this.cellPhoneTextChanged.bind(this)}/>
                </View>

                <View style={styles.pwdStyle}>
                    <Image style={styles.imgStyle} source={{uri:'comfirm_pwd_icon'}}/>
                    <TextInput style={[styles.inputTextStyle, {width: screenWidth - 60 - 10 - 22}]}
                               autoCapitalize={'none'}
                               autoCorrect={false}
                               autoFocus={false}
                               placeholder={'请输入6-16字母数字组合密码'}
                               clearButtonMode={'while-editing'}
                               secureTextEntry={this.state.secureEntry}
                               maxLength={16}
                               onChangeText={this.pwdTextChanged.bind(this)}/>
                    <TouchableOpacity onPress={this.eyeImagePressed.bind(this)}>
                        <Image style={styles.eyeStyle}
                               source={this.state.secureEntry?{uri:'eye_not_select'}:{uri:'eye_select'}}/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity disable={this.state.loginBtnDisabled}
                                  activeOpacity={this.state.loginBtnDisabled?1.0:0.8}
                                  onPress={this.loginIn.bind(this)}>
                    <View style={[styles.btnBackStyle, this.state.loginBtnDisabled&&styles.btnDisableStyle]}>
                        <Text style={styles.btnTitleStyle}>登录</Text>
                    </View>
                </TouchableOpacity>

                <View style={{height:20, flexDirection:'row', marginTop:10}}>
                    <Text style={styles.regTextStyle}
                          onPress={this.regBtnClicked.bind(this)}>免费注册</Text>
                    <Text style={styles.findTextStyle}
                          onPress={this.findPwdBtnClicked.bind(this)}>找回密码？</Text>
                </View>

                <Toast ref="toast" position={this.state.position}/>
            </View>
        );
    }
    cellPhoneTextChanged(text) {
        this.setState({phoneNum: text});
        this.checkBtnStatus(text, this.state.pwd);
    }
    pwdTextChanged(text) {
        this.setState({pwd: text});
        this.checkBtnStatus(this.state.phoneNum, text);
    }
    regBtnClicked() {
        this.props.navigator.push(
            {
                component:RegisterViewController,
                title:'注册',
                leftButtonIcon:{uri:'nav_back', scale:2},
                onLeftButtonPress:this.popViewController.bind(this),
                passProps:{
                    dismiss: this.props.dismiss
                }
            }
        );
    }
    findPwdBtnClicked() {
        this.props.navigator.push(
            {
                component:FindPwdViewController,
                title:'找回密码',
                leftButtonIcon:{uri:'nav_back', scale:2},
                onLeftButtonPress:this.popViewController.bind(this)
            }
        );
    }
    eyeImagePressed() {
        console.log('eyeImagePressed');
        this.setState({
            secureEntry: !this.state.secureEntry
        });
    }
    checkBtnStatus(cellPhone, pwd){
        if ((cellPhone.length == 11) && (pwd.length > 0)) {
            this.setState({
                loginBtnDisabled: false
            });
        } else {
            this.setState({
                loginBtnDisabled: true
            });
        }
    }
    popViewController() {
        this.props.navigator.pop();
    }
    loginIn() {
        if (!this.state.loginBtnDisabled) {
            this.showLoadingView();
            let param = new FormData();
            param.append('cellPhone', this.state.phoneNum);
            param.append('password', this.state.pwd);
            DataRequest.post(loginUrl, param, (responseData)=> {
                this.hideLoadingView();
                this.timer = setTimeout(this.props.dismiss, 500);
                // this.props.dismiss();
            }, (error)=> {
                this.hideLoadingView();
            });
        }
    }
    showLoadingView() {
        this.setState({loadingView: true});
    }
    hideLoadingView() {
        this.setState({loadingView: false});
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    componentDidMount() {

    }
}
module.exports = LoginViewController;

const styles = StyleSheet.create({
    phoneStyle: {
        marginTop:84,
        backgroundColor:'white',
        height:60,
        flexDirection:'row',
        borderBottomColor:'#eeeeee',
        borderBottomWidth:1
    },
    pwdStyle: {
        backgroundColor:'white',
        height:60,
        flexDirection:'row',
        borderBottomColor:'#eeeeee',
        borderBottomWidth:0.5
    },
    imgStyle: {
        marginTop:15,
        marginLeft:15,
        width:30,
        height:30,
    },
    inputTextStyle: {
        // backgroundColor:'red',
        marginTop:10,
        marginLeft:10,
        fontSize:17,
        height:40,
        width:screenWidth - 60 - 10
    },
    btnBackStyle: {
        backgroundColor:'#ff4c48',
        marginTop:20,
        marginLeft:10,
        height:40,
        width:screenWidth - 20,
        justifyContent:'center',
        borderRadius:8
    },
    btnTitleStyle: {
        fontSize:20,
        color:'white',
        fontWeight:'bold',
        alignSelf:'center'
    },
    btnDisableStyle: {
        backgroundColor:'#e2e2e2',
    },
    regTextStyle: {
        fontSize:15,
        color:'gray',
        height:20,
        alignSelf:'center',
        marginLeft:10
    },
    findTextStyle: {
        fontSize:15,
        color:'gray',
        height:20,
        marginLeft:screenWidth - 10 - 100 - 60,
        textAlign:'right',
        width:100
    },
    eyeStyle: {
        width:22,
        height:13,
        marginTop:23
    }
});