import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    SectionList,
    Image,
    ImageBackground,
    TouchableOpacity,
    Modal,
    NavigatorIOS
} from 'react-native';

var DataRequest = require('../DataRequest/DataRequest');
var MineCell = require('./MineCell/MineCell');
var LoginViewController = require('../LoginTestViewController/LoginViewController/LoginViewController');
const mineUrl = 'https://midway.test.66buy.com.cn/mine/index/init.node';

var {width, height} = Dimensions.get('window');

class MineViewController extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            responseData: null,
            headerData: null,
            isLogin:false
        }
    }
    render() {
        let view = <View style={{flex:1}}></View>;
        if (this.state.responseData && (this.state.responseData.length > 0)) {
            view = <View style={{flex:1, backgroundColor:'#f2f2f2'}}>
                <Modal animationType={'slide'}
                       transparent={false}
                       visible={this.state.isLogin}>
                    <NavigatorIOS style={{flex:1}}
                                  barTintColor={'white'}
                                  titleTextColor={'black'}
                                  leftButtonIcon={{uri:'nav_back', scale:2}}
                                  onLeftButtonPress={this.dismissLoginView.bind(this)}
                                  tintColor={'black'}
                                  initialRoute={
                                      {
                                          title:'登录',
                                          component:LoginViewController,
                                      }
                                  }
                    >
                    </NavigatorIOS>
                </Modal>
                <SectionList style={{marginTop:64, backgroundColor:'#f2f2f2'}}
                             // SectionSeparatorComponent={}
                             // ItemSeparatorComponent={}
                             // contentContainerStyle={{flexDirection: 'row', alignItems: 'flex-start',
                    //     flexWrap: 'wrap'}}
                             renderItem={this.renderItem.bind(this)}
                             renderSectionHeader={this.renderSectionHeader}
                             keyExtractor={(item,index)=>("index"+index+item)}
                             sections={this.state.responseData}
                             ListHeaderComponent={this.renderHeader.bind(this)}
                             stickySectionHeadersEnabled={true}>
                </SectionList>
            </View>
        }
        return view;
    }
    renderItem(info) {
        if (info.section.key === 'callCenter') {
            return (
                <TouchableOpacity>
                    <View style={{width:width, height:44, flexDirection:'row', alignItems:'center', backgroundColor:'white'}}>
                        <Image style={{width:22, height:22, marginLeft:10}}
                               source={{uri:'https:' + info.item.imageUrl}}></Image>
                        <Text style={{marginLeft:10}}>{info.item.title}</Text>
                    </View>
                </TouchableOpacity>
            );
        } else {
            return (
                <View style={{flexDirection:'row', alignItems:'flex-start', backgroundColor: 'white', flexWrap: 'wrap'}}>
                    {
                        info.item.map((item, i) => {
                            return (
                                <TouchableOpacity key={i} onPress={this.itemClicked.bind(this, item)}>
                                    <View style={{height:width/5, width:width/5}}>
                                        <Image style={{width:22, height:22, marginTop:10, marginLeft:(width/5 - 22)/2}}
                                               source={{uri:'https:' + item.imageUrl}}></Image>
                                        <Text style={{marginTop:10, alignSelf:'flex-start',
                                            width:width/5, textAlign:'center'}}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        })
                    }
                </View>
            );
        }
    }
    renderHeader() {
        let view = null;
        if (this.state.headerData.key == 'unlogined') {
            view = <ImageBackground style={styles.imageBackStyle}
                          source={{uri:'user_bg_unlogin'}}>
                <View style={{marginLeft:10, alignItems:'center', justifyContent:'center'}}>
                    <Text style={styles.unloginTextStyle}>{this.state.headerData.data.title}</Text>
                </View>

                <TouchableOpacity onPress={this.loginBtnClicked.bind(this)}>
                    <View style={{height:30, width:70, borderColor:'black', borderRadius:4,
                        borderWidth:0.5, justifyContent:'center', marginTop:10, marginLeft:70, marginRight:10}}>
                        <Text style={styles.login_btn_Style}>立即登录</Text>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        } else if (this.state.headerData.key == 'logined') {
            view = null;
        }
        return view;
    }
    loginBtnClicked() {
        this.setState({isLogin: true});
    }
    renderSectionHeader(section) {
        if (section.section.key == 'orderNav') {
            return null;
        }
        return (
            <View style={{backgroundColor:'#f2f2f2', height:20, width:width}}/>
        );
    }
    dismissLoginView() {
        this.setState({isLogin: false});
    }
    itemClicked(item) {
        alert(item.title);
    }
    componentDidMount() {
        DataRequest.get(mineUrl, null, (responseData)=> {
           this.configureData(responseData.data);
        }, (error)=> {
        });
    }
    componentWillUnmount() {
    }
    configureData(data) {
        var datas=[];
        var hData = null;
        for (var i = 0; i<data.length; i++) {
            var testData = data[i];
            if ((testData['key'] === 'unlogined') || (testData['key'] === 'logined')) {
                hData = testData;
            } else if (testData['key'] === 'orderNav') {
                var items = testData.data.items;
                delete(testData.data.items);
                items.push(testData.data);
                testData.data = [items];
                datas.push(testData);
            } else if (testData['key'] === 'navigation') {
                testData.data = [testData.data.items];
                datas.push(testData);
            } else if (testData['key'] === 'callCenter') {
                testData.data = [testData.data];
                datas.push(testData);
            }
        }
        this.setState({responseData: datas, headerData: hData});
    }
}
module.exports = MineViewController;

const styles = StyleSheet.create({
    imageBackStyle: {
        height:50,
        width:width,
        flexDirection:'row'
    },
    unloginTextStyle: {
        fontSize:16,
        color:'black',
    },
    login_btn_Style: {
        fontSize:15,
        alignSelf:'center',
    }
});