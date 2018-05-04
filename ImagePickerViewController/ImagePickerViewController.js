import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    AlertIOS,
    ImagePickerIOS,
    Image
} from 'react-native';

var screenWidth = Dimensions.get('window').width;

class ImagePickerViewController extends Component {
    constructor(props) {
        super(props);
        this.state={imageUrl:'default'};
    }
    render() {
        return(
            <View style={{flex:1}}>
                <View style={styles.textBackStyle}>
                    <Text style={styles.textStyle}
                          onPress={this.textPress.bind(this)}
                    >打开相册</Text>
                </View>
                <Image style={{marginTop:20, marginLeft:10, width:screenWidth - 20, height:400, backgroundColor:'gray'}}
                       source={{uri:this.state.imageUrl}}
                       resizeMode={'contain'}
                >
               </Image>
            </View>
        );
    }
    textPress() {
        // ImagePickerIOS.canRecordVideos(()=>{AlertIOS.alert('可以录制视频')});
        // ImagePickerIOS.canUseCamera(()=>{AlertIOS.alert('可以获取相机')});
        ImagePickerIOS.openSelectDialog({}, (imageUri)=>{
            console.log(imageUri);
            this.setState({imageUrl:imageUri});
        }, (error)=>{
            console.log(error);
        });
    }
}
module.exports = ImagePickerViewController;

const styles = StyleSheet.create({
    textBackStyle: {
        marginLeft:40,
        marginTop:84,
        justifyContent:'center',
        width:screenWidth-80,
        height:50,
        backgroundColor:'red',
        borderRadius:8
    },
    textStyle: {
        fontSize:20,
        color:'black',
        alignSelf:'center'
    }
});