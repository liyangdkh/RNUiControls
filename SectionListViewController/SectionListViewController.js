import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    AlertIOS,
    SectionList,
    TouchableOpacity
} from 'react-native';

var cityJsonData = require('../JsonData/cityData');
var screenWidth = Dimensions.get('window').width;

class SectionListViewController extends PureComponent {
    constructor(props) {
        super(props);
        this.state={sectionsData: cityJsonData};
    }
    render() {
        return(
            <View style={{flex:1}}>
                <SectionList ListHeaderComponent={this.renderHeader}
                             ListFooterComponent={this.renderFooter}
                             SectionSeparatorComponent={this.renderSectionSeparator}
                             ItemSeparatorComponent={this.renderItemSeparator}
                             renderItem={this.renderItem}
                             renderSectionHeader={this.renderSectionHeader}
                             keyExtractor={(item,index)=>("index"+index+item)}
                             sections={this.state.sectionsData.provinces}
                             initialNumToRender={10}
                             stickySectionHeadersEnabled={true}
                             // legacyImplementation={true}
                >
                </SectionList>
            </View>
        );
    }
    renderItem(info) {
        return(
            <TouchableOpacity onPress={()=>{
                AlertIOS.alert('当前选择', info.section.key + ' ' + info.item, [
                    {
                        text:'取消',
                    },
                    {
                        text:'确定',
                    }
                ]);
            }}>
                <View style={{flex:1, height:50, justifyContent:'center'}}>
                    <Text style={{marginLeft:10, alignSelf:'flex-start'}}>{info.item}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    renderHeader() {
        return(
            <View style={{backgroundColor:'#e0e', flex:1, height:50, justifyContent:'center'}}>
                <Text style={{fontSize:20, color:'black', alignSelf:'center'}}>城市列表</Text>
            </View>
        );
    }
    renderFooter() {
        return(
            <View style={{backgroundColor:'red', flex:1, justifyContent:'center', height:40}}>
                <Text style={{alignSelf:'center', fontSize:18, color:'white'}}>Section list footer</Text>
            </View>
        );
    }
    renderSectionSeparator() {
        return(
            <View style={{}}></View>
        );
    }
    renderItemSeparator() {
        return(
            <View style={{marginLeft:10, backgroundColor:'gray', flex:1, height:0.5, width:screenWidth - 10}}></View>
        );
    }
    renderSectionHeader(info) {
        return(
            <View style={{backgroundColor:'red', flex:1, justifyContent:'center', height:30}}>
                <Text style={{fontSize:17, color:'white', alignSelf:'flex-start', fontWeight:'bold', marginLeft:5}}
                >{info.section.key}</Text>
            </View>
        );
    }
    componentDidMount() {

    }

    componentWillUnmount() {
    }
}

module.exports = SectionListViewController;