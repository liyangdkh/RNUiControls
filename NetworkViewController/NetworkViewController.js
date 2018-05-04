import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    AlertIOS,
} from 'react-native';

var DataRequest = require('../DataRequest/DataRequest');

class NetworkViewController extends Component {
    constructor(props) {
        super(props);
        this.state= {
            responseData: ''
        }
    }
    render() {
        return(
            <View style={{flex:1}}>
                <Text style={{marginTop:84, color:'black', fontSize:20, alignSelf:'center'}}
                      onPress={this.requestData.bind(this)}
                >请求数据</Text>
            </View>
        );
    }
    requestData() {
        let formData = new FormData();
        formData.append('cellPhone', '15013519108');
        formData.append('password', 'a123456');
        DataRequest.post('https://mServ.test.66buy.com.cn/publics/login/appLogin', formData, (responseData)=>{
            console.log(responseData);
        }, (error)=>{
            console.log(error);
        });
    }
}

module.exports = NetworkViewController;

// http://www.pm25.in/api/querys/pm10.json
// https://mServ.test.66buy.com.cn/publics/login/appLogin    cellPhone = 15013519108; password = 123456;
//https://midway.test.66buy.com.cn/mine/index/init.node
