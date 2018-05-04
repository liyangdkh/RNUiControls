import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    AlertIOS,
    Dimensions
    // DeviceEventEmitter
} from 'react-native';

var screenWidth = Dimensions.get('window').width;

class ListCell extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity activeOpacity={0.8}
                              onPress={this.cellClicked.bind(this, this.props.rowData)}
            >
                <View style={styles.cellStyle}>
                    <View style={{flex:screenWidth - 20}}>
                        <Text style={styles.titleStyle}>{this.props.rowData['title']}</Text>
                        <Text style={styles.subTitleStyle}>{this.props.rowData['subTitle']}</Text>
                    </View>
                    <View style={{flex:20}}>
                        <Image style={styles.arrowStyle}
                               source={{uri: 'arrow'}}
                        ></Image>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    cellClicked(data) {
        this.props.cellClicked(data);
    }
}

module.exports=ListCell;

const styles = StyleSheet.create({
    titleStyle:{
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        alignSelf:'center',
        fontSize:25,
        color:'black',
        fontWeight:'bold',
    },
    subTitleStyle:{
        marginTop:10,
        marginLeft:10,
        alignSelf:'center',
        fontSize:21,
        color:'gray',
    },
    cellStyle:{
        width:screenWidth,
        height:90,
        flexDirection:'row'
        // justifyContent:'center',
        // backgroundColor:'red'
    },
    arrowStyle:{
        width:10,
        height:16,
        marginTop:37,
        marginLeft:5
    }
});