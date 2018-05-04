import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    AlertIOS,
    Dimensions,
    ActionSheetIOS,
    // DeviceEventEmitter
} from 'react-native';

var screenWidth = Dimensions.get('window').width;

class ActionSheetViewController extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, marginTop: 64}}>
                <TouchableOpacity onPress={this.actionSheetBtnClicked} activeOpacity={0.8}>
                    <View style={[styles.actionsheetStyle, styles.btnBlueColor]}>
                        {/*<Image source={require('./image/ic_search.png')}>*/}
                        {/*</Image>*/}
                        <Text style={styles.titleStyle}>Action Sheet</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.shareActionSheetBtnClicked} activeOpacity={0.8}>
                    <View style={[styles.actionsheetStyle, styles.btnPurpleColor]}>
                        <Text style={styles.titleStyle}>Share Action Sheet</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    actionSheetBtnClicked() {
        var btns = ['option1', 'option2', 'option3', '取消'];
        ActionSheetIOS.showActionSheetWithOptions(
            {
                title: 'actionSheet',
                message: 'test action sheet',
                options: btns,
                cancelButtonIndex: 1987
            },
            (buttonIndex) => {
                var msg = btns[buttonIndex];
                console.log(msg);
            }
        );
    }

    shareActionSheetBtnClicked() {
        ActionSheetIOS.showShareActionSheetWithOptions({
                url: 'http://www.baidu.com',
                message: 'message to go with the shared url',
                subject: 'a subject to go in the email heading',
                excludedActivityTypes: [
                    'com.apple.UIKit.activity.PostToTwitter'
                ]
            },
            (error) => alert(error),
            (success, method) => {

            });
    }
}

module.exports = ActionSheetViewController;

const styles = StyleSheet.create({
    actionsheetStyle: {
        marginTop:40,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        height:40,
        marginRight:20,
        marginLeft:20,
        borderRadius:5
    },

    btnBlueColor: {
        backgroundColor:'blue',
    },

    btnPurpleColor: {
        backgroundColor:'purple'
    },

    titleStyle: {
        color:'white',
        fontSize:20,
        fontWeight:'bold'
    },
});