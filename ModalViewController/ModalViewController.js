import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    AlertIOS,
    Button,
    Modal,
    NavigatorIOS
} from 'react-native';

var ModalRootViewController = require('./ModalRootViewController/ModalRootViewController');

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

class ModalViewController extends Component {
    constructor(props) {
        super(props);
        this.state={
            isModal:false,
            customViewShow:false
        }
    }
    render() {
        return(
            <View style={{flex:1, marginTop:64}}>
                <Modal animationType={'slide'}
                       transparent={false}
                       visible={this.state.isModal}
                >
                    <NavigatorIOS style={styles.navStyle}
                                  barTintColor={'purple'}
                                  titleTextColor={'white'}
                                  leftButtonTitle={'取消'}
                                  onLeftButtonPress={this.dismissModal.bind(this)}
                                  initialRoute={
                                      {
                                          title:'Modal Test',
                                          component:ModalRootViewController
                                      }
                                  }
                    >
                    </NavigatorIOS>
                </Modal>

                <Modal animationType={'none'}
                       transparent={true}
                       visible={this.state.customViewShow}
                >
                    <View style={{backgroundColor:'rgba(0, 0, 0, 0.5)', flex:1}}>
                        <View style={{backgroundColor:'white', marginTop:(screenHeight-200)/2,
                            marginLeft:(screenWidth-200)/2, width:200, height:200, borderColor:'gray', borderWidth:0.5,
                            borderRadius:5
                        }}>
                            <Text style={{fontSize:15, color:'red', alignSelf:'center'}}>这是第一行数据</Text>
                            <Text style={{fontSize:20, color:'black', alignSelf:'center'}}>这是第二行数据</Text>
                            <Text style={{fontSize:25, color:'yellow', alignSelf:'center'}}>这是第三行数据</Text>
                            <Button title={'取消'}
                                    color={'purple'}
                                    onPress={this.dismissCustomView.bind(this)}
                            ></Button>
                        </View>
                    </View>
                </Modal>
                <Button title={'Model Test'}
                        color={'red'}
                        onPress={this.btnPress.bind(this)}
                ></Button>

                <Button title={'Custom View'}
                        color={'blue'}
                        onPress={this.customBtnPress.bind(this)}
                ></Button>
            </View>
        );
    }
    btnPress() {
        this.showModal();
    }
    showModal() {
        this.setState({isModal:true});
    }
    dismissModal() {
        this.setState({isModal: false});
    }

    customBtnPress() {
        this.showCustomView();
    }
    showCustomView() {
        this.setState({customViewShow: true});
    }
    dismissCustomView() {
        this.setState({customViewShow: false});
    }
}
module.exports = ModalViewController;

const styles = StyleSheet.create({
    btnStyle: {
        flex:1,
        marginLeft:40,
        marginTop:64,
        width:screenWidth-80,
        height:50,
        backgroundColor:'blue',
        borderRadius:5
    },
    navStyle: {
        flex:1
    }
});