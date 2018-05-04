import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    AlertIOS,
    Image,
    TouchableOpacity
} from 'react-native';

var screenWidth = Dimensions.get('window').width;

class FlatListCell extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        var title = this.props.data.item.title;
        var index = this.props.data.index;
        var showTitle = 'Index ' + index + ' '+ title;
        var subTitle = this.props.data.item.subTitle;
        return(
            <TouchableOpacity onPress={()=>this.didSelectRow(this.props.data)}>
                <View style={{flex:1, flexDirection:'row', height:80}}>
                    <Image style={styles.imageStyle}></Image>
                    <View style={{flex:screenWidth - 20 - 10 - 70}}>
                        <Text style={styles.titleStyle}>{showTitle}</Text>
                        <Text style={styles.subTitleStyle}>{subTitle}</Text>
                    </View>
                    <View style={{flex:20}}>
                        <Image style={styles.rightImageStyle}
                               source={{uri:'arrow'}}
                        ></Image>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
    didSelectRow(data) {
        this.props.didSelectRow(data);
    }
}

module.exports = FlatListCell;

const styles = StyleSheet.create({
    imageStyle: {
        marginTop:10,
        marginLeft:10,
        width:60,
        height:60,
        backgroundColor:'blue',
        borderRadius:5
    },
    titleStyle: {
        marginTop:10,
        marginLeft:10,
        fontSize:20,
    },
    subTitleStyle: {
        marginTop:10,
        marginLeft:10,
        fontSize:16,
        color:'gray'
    },
    rightImageStyle: {
        width:10,
        height:16,
        marginTop:32,
        marginLeft:5
    }
});