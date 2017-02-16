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
                    <View>
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
        justifyContent:'center'
    }
});

module.exports = HomeScreen;