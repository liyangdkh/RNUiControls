import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ListView,
    Dimensions,
    AlertIOS
} from 'react-native';

var screenWidth = Dimensions.get('window').width;

var ListCell = require('../ListCell/ListCell');
var ActionSheetViewController = require('../ActionSheetViewController/ActionSheetViewController');
var ActivityIndicatorViewController = require('../ActivityIndicatorViewController/ActivityIndicatorViewController');
var ProgressViewController = require('../ProgressViewController/ProgressViewController');
var MaskViewController = require('../MaskViewController/MaskViewController');
var SegmentedControlViewController = require('../SegmentedControlViewController/SegmentedControlViewController');
var SliderViewController = require('../SliderViewController/SliderViewController');
var InputTextViewController = require('../InputTextViewController/InputTextViewController');
var FlatListViewController = require('../FlatListViewController/FlatListViewController');
var SectionListViewController = require('../SectionListViewController/SectionListViewController');
var ModalViewController = require('../ModalViewController/ModalViewController');
var ImagePickerViewController = require('../ImagePickerViewController/ImagePickerViewController');
var NetworkViewController = require('../NetworkViewController/NetworkViewController');
var LoginTestViewController = require('../LoginTestViewController/LoginTestViewController');
var TestMineViewController = require('../TestMineViewController/TestMineViewController');

var sourceData = [{title: 'ActionSheet', subTitle:'ios action sheet'},
                  {title: 'ActivityIndicator', subTitle:'ios activity indicator'},
                  {title: 'ProgressView', subTitle:'ios progress view'},
                  {title: 'MaskedView', subTitle:'ios masked view'},
                  {title: 'SegmentedControl', subTitle:'ios segmented control'},
                  {title: 'SliderView', subTitle:'ios slider view'},
                  {title: 'InputText', subTitle:'ios input text'},
                  {title: 'FlatList', subTitle:'ios flat list'},
                  {title: 'SectionList', subTitle:'ios section list'},
                  {title: 'Modal', subTitle:'ios modal'},
                  {title: 'ImagePicker', subTitle:'ios image picker view'},
                  {title: 'Network', subTitle:'ios network request'},
                  {title: 'LoginView', subTitle:'ios login view'},
                  {title: 'MineView', subTitle:'ios mine view'}];

class RootViewController extends Component {
    constructor(props) {
        super(props);
        this.cellClicked=this.cellClicked.bind(this);
        const dataSource = new ListView.DataSource({rowHasChanged:(r1, r2)=>r1!==r2});
        this.state = {
            dataSource: dataSource.cloneWithRows(sourceData)
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
                <ListView dataSource={this.state.dataSource}
                          renderRow={(rowData, sectionId, rowId)=>this.renderRow(rowData, sectionId, rowId)}
                          removeClippedSubviews={false}
                          renderSeparator={(sectionID, rowID, adjacentRowHighlighted)=>
                              this.renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
                ></ListView>
            </View>
        );
    }

    renderRow(rowData, sectionId, rowId) {
        return(
            <ListCell rowData={rowData} rowId={rowId} cellClicked={this.cellClicked}></ListCell>
        );
    }

    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        return(
            <View style={{height:0.5, backgroundColor:'gray'}}/>
        );
    }

    cellClicked(data) {
        if (data['title']==='ActionSheet') {
            this.props.navigator.push(
                {
                    component:ActionSheetViewController,
                    title:data['title']
                }
            );
        } else if (data['title']==='ActivityIndicator') {
            this.props.navigator.push(
                {
                    component:ActivityIndicatorViewController,
                    title:data['title']
                }
            );
        } else if (data['title']==='ProgressView') {
            this.props.navigator.push(
                {
                    component:ProgressViewController,
                    title:data['title']
                }
            );
        } else if (data['title']==='MaskedView') {
            this.props.navigator.push(
                {
                    component:MaskViewController,
                    title:data['title']
                }
            );
        } else if (data['title']==='SegmentedControl') {
            this.props.navigator.push(
                {
                    component:SegmentedControlViewController,
                    title:data['title']
                }
            );
        } else if (data['title']==='SliderView') {
            this.props.navigator.push(
                {
                    component:SliderViewController,
                    title:data['title']
                }
            );
        } else if (data['title']==='InputText') {
            this.props.navigator.push(
                {
                    component:InputTextViewController,
                    title:data['title']
                }
            );
        } else if (data['title']==='FlatList') {
            this.props.navigator.push(
                {
                    component:FlatListViewController,
                    title:data['title']
                }
            );
        } else if (data['title']==='SectionList') {
            this.props.navigator.push(
                {
                    component:SectionListViewController,
                    title:data['title']
                }
            );
        } else if (data['title']==='Modal') {
            this.props.navigator.push(
                {
                    component:ModalViewController,
                    title:data['title']
                }
            );
        } else if (data['title']==='ImagePicker') {
            this.props.navigator.push(
                {
                    component:ImagePickerViewController,
                    title:data['title']
                }
            );
        } else if (data['title']==='Network') {
            this.props.navigator.push(
                {
                    component:NetworkViewController,
                    title:data['title']
                }
            );
        } else if (data['title']==='LoginView') {
            this.props.navigator.push(
                {
                    component:LoginTestViewController,
                    title:data['title']
                }
            );
        } else if (data['title']==='MineView') {
            this.props.navigator.push(
                {
                    component:TestMineViewController,
                    title:data['title']
                }
            );
        }
    }
}
module.exports=RootViewController;