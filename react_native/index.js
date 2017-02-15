'use strict';
import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import { LenkaNavigator } from 'LenkaCommon';

import { FirstPage, TestScreen } from 'test';

class HelloWorld extends React.Component {

    render() {
        return(
            <LenkaNavigator style={styles.container} initialRoute={{screen:'test.FirstPage'}}></LenkaNavigator>
        )
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
AppRegistry.registerComponent('App', () => HelloWorld);