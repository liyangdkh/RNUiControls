import React, { Component } from 'react';
// import {
//     AsyncStorage
// } from 'react-native';

class DataRequest extends Component {

    static get(url, params, successCallback, failCallback) {
        var option = {
            method:'GET',
            headers: {
                // 'Content-Type': ['application/json', 'text/html', 'text/json', 'text/javascript']
                'Content-Type': 'application/json; charset=utf-8'
            },
            // body:JSON.stringify(params)
        };
        fetch(url, option)
            .then((response)=>{
                response.json().then((data) => {
                    successCallback(data);
                });
            })
            .catch((error)=>{
                failCallback(error);
            })
            .done();
    }
    static post(url, params, successCallback, failCallback) {
        var option = {
            method: 'POST',
            // headers: {
            // //     'Content-Type': ['application/json', 'text/html', 'text/json', 'text/javascript']
            // //     'Content-Type': 'text/html'
            // },
            body: params,
        };
        fetch(url, option)
            .then((response)=>{
                response.json().then((data) => {
                    successCallback(data);
                });
            })
            .catch((error)=>{
                failCallback(error);
            })
            .done();
    }
}

module.exports = DataRequest;