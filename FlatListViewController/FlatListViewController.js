import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    AlertIOS,
    FlatList,
    Button,
    RefreshControl
} from 'react-native';

var FlatListCell = require('../FlatListCell/FlatListCell');
var FlatListDetailViewController = require('../FlatListDetailViewController/FlatListDetailViewController');

var dataSource = [{title: 'TITLE1', subTitle: 'SUBTITLE1'},
                  {title: 'TITLE2', subTitle: 'SUBTITLE2'},
                  {title: 'TITLE3', subTitle: 'SUBTITLE3'},
                  {title: 'TITLE4', subTitle: 'SUBTITLE4'},
                  {title: 'TITLE5', subTitle: 'SUBTITLE5'},
                  {title: 'TITLE6', subTitle: 'SUBTITLE6'},
                  {title: 'TITLE7', subTitle: 'SUBTITLE7'},
                  {title: 'TITLE8', subTitle: 'SUBTITLE8'},
                  {title: 'TITLE9', subTitle: 'SUBTITLE9'},
                  {title: 'TITLE10', subTitle: 'SUBTITLE10'}];

class FlatListViewController extends PureComponent {
    _flatList;
    constructor(props) {
        super(props);
        this.state = {
            refresh:false
        }
        // this.didSelectRow = this.didSelectRow.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.renderHeader=this.renderHeader.bind(this);
        this.onRefresh=this.onRefresh.bind(this);
    }
    render() {
        return(
            <View style={{flex:1}}>
                <FlatList data={dataSource}
                          ListHeaderComponent={this.renderHeader}
                          ListFooterComponent={this.renderFooter}
                          renderItem={this.renderItem}
                          ItemSeparatorComponent={this.renderSeparator}
                          keyExtractor={this.keyExtractor}
                          ref={(flatList)=>this._flatList = flatList}
                          // getItemLayout={(data, index)=>({
                          //     length: 1000,
                          //     offset:(80+0.5) * index,
                          //     index:index
                          // })}
                          refreshControl={
                              <RefreshControl
                                refreshing={this.state.refresh}
                                tintColor={'red'}
                                title={'正在刷新'}
                                onRefresh={this.onRefresh}
                              >
                              </RefreshControl>
                          }
                ></FlatList>
            </View>
        );
    }
    renderItem(item) {
        return(
            <FlatListCell data={item} didSelectRow={this.didSelectRow.bind(this)}></FlatListCell>
        );
    }
    didSelectRow(data) {
        this.props.navigator.push(
            {
                component:FlatListDetailViewController,
                title:data.item.title
            }
        );
    }
    renderSeparator() {
        return(
            <View style={{height:0.5, backgroundColor:'gray' }}></View>
        );
    }
    renderHeader() {
        return(
            <View style={{backgroundColor:'red',flex:1, height:100, justifyContent:'center'}}>
                <Text style={{color:'black', fontSize:20, alignSelf:'center'}}>这是一个Header</Text>
                <Button title={'点击滚动到指定位置'}
                        onPress={()=>{
                            // this._flatList.scrollToIndex({viewPosition:1, animated:true, index:9});
                            this._flatList.scrollToOffset({animated:true, offset:20});
                        }}
                ></Button>
            </View>);
    }
    renderFooter() {
        return(
            <View style={{flex:1, backgroundColor:'blue', height:50, justifyContent:'center'}}>
                <Text style={{color:'white', fontSize:20, alignSelf:'center'}}>这是一个Footer</Text>
            </View>
        );
    }
    keyExtractor(item, index) {
        return index.toString();
    }
    onRefresh() {
        this.setState({refresh: true});
        this.setToggleTimeout();
    }
    setToggleTimeout() {
        this.timer = setTimeout(()=>{
            this.setState({refresh: false});
        }, 5000);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
}

module.exports = FlatListViewController;