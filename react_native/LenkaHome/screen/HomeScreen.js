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


let A = fonts.Grid.A;
let a = fonts.Grid.a;
let Grid = fonts.Grid;
let Font = fonts.Font;

// 第一页. 使用Component可以自动生成注释, 符合标准
class HomeScreen extends BaseComponent {

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
                    <LenkaButton
                        imageSrc={require('../image/food_uncheck.png')}
                        imageStyle={{width:5 * a, height:5 * a}}
                        style={{marginTop:2 * a, flexDirection:'column'}}
                        text="饮食"
                        textColor="#ffffff66"/>
                    <LenkaButton
                        imageSrc={require('../image/food_checked.png')}
                        imageStyle={{width:5 * a, height:5 * a}}
                        style={{marginTop:2 * a}}/>
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
    }
});

module.exports = HomeScreen;