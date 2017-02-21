'use strict'

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    ScrollView
} from 'react-native';

import { BaseComponent, fonts } from 'LenkaCommon';
import LenkaNavBar from 'LenkaNavBar';
import LenkaButton from 'LenkaButton';
import LenkaRatio from 'LenkaRatio';
import {TickMarkView} from 'nativeView';


let A = fonts.Grid.A;
let a = fonts.Grid.a;
let Grid = fonts.Grid;
let Font = fonts.Font;

// 第一页. 使用Component可以自动生成注释, 符合标准
class HomeScreen extends BaseComponent {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this._onCheckChange = this._onCheckChange.bind(this);
      }

    _onCheckChange(isChecked, ref) {
        if(ref === this.refs.food) {
            this.refs.sport.setNativeProps({
                isChecked:!isChecked
            });
        } else if(ref === this.refs.sport){
            this.refs.food.setNativeProps({
                isChecked:!isChecked
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <LenkaNavBar
                    titleColor="white"
                    buttonTextColor="white"
                    title="敏捷减肥"
                    rightText="历史"/>
                <ScrollView style={styles.contentViewStyle}>
                    <View style={styles.upContentView}>
                        <Text style={[styles.normalTextStyle, {fontSize:Font.H1, marginTop:5*a}]}>当前并无减肥计划</Text>
                        <Text style={styles.normalTextStyle}>请添加计划</Text>
                    </View>
                    <LenkaButton
                        imageSrc={require('../image/add_paint.png')}
                        imageStyle={{width:10 * a, height:10 * a}}
                        style={{marginTop:2 * a}}/>

                    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', marginBottom:2 * a}}>
                        <LenkaRatio
                            isChecked={true}
                            ref='food'
                            onCheckChange={this._onCheckChange}
                            imageSrc={{unCheckImage:require('../image/food_uncheck.png'), checkedImage:require('../image/food_checked.png')}}
                            imageStyle={{width:5 * a, height:5 * a}}
                            style={{marginTop:2 * a, flexDirection:'column'}}
                            text="饮食"
                            textColor={{unCheckColor:"#ffffff66", checkedColor:'white'}}/>
                        <LenkaRatio
                            isChecked={false}
                            ref='sport'
                            onCheckChange={this._onCheckChange}
                            imageSrc={{unCheckImage:require('../image/sport_uncheck.png'), checkedImage:require('../image/sport_checked.png')}}
                            imageStyle={{width:5 * a, height:5 * a}}
                            style={{marginTop:2 * a, flexDirection:'column'}}
                            text="运动"
                            textColor={{unCheckColor:"#ffffff66", checkedColor:'white'}}/>
                    </View>

                    <View style={styles.downContentView}>
                        <TickMarkView
                            style={{width:4*A, height:300}}/>
                    </View>

                </ScrollView>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor:'red'
    },
    contentViewStyle:{
        flex:1,
        backgroundColor:'#44305d'
    },
    upContentView:{
        justifyContent:'center',
        alignItems:'center'
    },
    normalTextStyle:{
        color:'white',
        fontSize:Font.H3
    },
    downContentView:{
        height:60 * A,
        backgroundColor:'#3d2b57'
    }
});

module.exports = HomeScreen;