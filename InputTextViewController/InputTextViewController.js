import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    AlertIOS,
    TextInput,
    TouchableOpacity
} from 'react-native';

var screenWidth = Dimensions.get('window').width;

class InputTextViewController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    render() {
        return(
            <View style={{flex:1}}>
                <TextInput style={styles.inputStyle}
                           autoCapitalize={'none'}
                           autoCorrect={false}
                           autoFocus={false}
                           placeholder={'placeHolder'}
                           // multiline={true}
                           secureTextEntry={true}
                           clearButtonMode={'while-editing'}
                           // selectionColor={'red'}
                           // placeholderTextColor={'red'}
                           // keyboardType={}
                           // maxLength={5}
                           onFocus={this.textOnFocus}
                           // onChange={this.textOnChange}
                           onChangeText={this.textInputOnChange.bind(this)}
                           onEndEditing={this.textOnEndEditing}
                ></TextInput>
                <TouchableOpacity onPress={this.showText.bind(this)}>
                    <View style={{backgroundColor:'red', borderRadius:5, height:40, marginTop:20, marginLeft:20,
                                    marginRight:20, alignItems:'center', justifyContent:'center',}}>
                        <Text style={styles.btnStyle}>显示Text值</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    textOnFocus() {
        console.log('Text input on focus!!!!');
    }
    // textOnChange() {
    //     console.log('Text input on changed!!!!');
    // }
    textInputOnChange(text) {
        console.log('input text on changed with ' + text);
        this.setState({text: text});
    }
    textOnEndEditing() {
        console.log('input text on end editing');
    }
    showText() {
        var txt = this.state.text;
        AlertIOS.alert('The text input is: ' + txt);
    }
}

module.exports = InputTextViewController;

const styles = StyleSheet.create({
    inputStyle: {
        marginTop:84,
        marginLeft:10,
        width:screenWidth-20,
        height:40,
        borderWidth:0.5,
        borderColor:'gray',
        borderRadius:5
    },
    btnStyle: {
        // marginTop:20,
        marginLeft:40,
        marginRight:40,
        alignSelf:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    }
});