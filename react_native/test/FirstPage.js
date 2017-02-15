'use strict'

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import { BaseComponent, fonts } from 'LenkaCommon';
import LenkaNavBar from 'LenkaNavBar';


// 第一页. 使用Component可以自动生成注释, 符合标准
class FirstPage extends BaseComponent {


    // ...

    componentWillMount() {
        console.log(fonts.Grid.A);
        console.log(fonts.Grid.a);
    }

    toDetail(){
        this.props.navigator.push({screen:"test.TestScreen"});
    }

    onKeyDown(keyCode) {
        if(keyCode == 0) {
            return true;
        } else {
            super.onKeyDown(keyCode);
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <LenkaNavBar />
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.toDetail.bind(this)}
                    underlayColor="#B5B5B5">
                    <Text style={styles.blackText}>=>详情页</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    hello: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        padding: 15,
    },
    containView:{
        flex: 1,
        justifyContent: 'center',
    },
    detailContainView:{
        flex:1,
        justifyContent: 'center',
        backgroundColor:'green',
    },
    blackText:{
        fontSize:20,
        textAlign:'center',
    },
});

module.exports = FirstPage;