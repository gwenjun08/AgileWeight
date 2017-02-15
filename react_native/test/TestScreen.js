'use strict'


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

//noinspection JSUnresolvedVariable
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,

} from 'react-native';

class TestScreen extends Component {
    onPressCallback = () => {
        setTimeout(()=> {
            alert('点击了按钮');
        }, 1000);
    };

    render() {
        return (
            <View style={styles.container}>

                <TouchableHighlight
                    style={styles.touchables}
                    onPress={this.onPressCallback}
                    >
                    <Text style={styles.touchablesText}>TouchableHighlight</Text>
                </TouchableHighlight>

                <TouchableOpacity
                    style={styles.touchables}
                    onPress={this.onPressCallback}
                    >
                    <Text style={styles.touchablesText}>TouchableOpacity</Text>
                </TouchableOpacity>

                <TouchableNativeFeedback
                    onPress={this.onPressCallback}
                    background={TouchableNativeFeedback.SelectableBackground()}
                    >
                    <View style={styles.touchables}>
                        <Text style={styles.touchablesText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableWithoutFeedback
                    onPress={this.onPressCallback}
                    background={TouchableNativeFeedback.SelectableBackground()}
                    >
                    <View style={styles.touchables}>
                        <Text style={styles.touchablesText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    touchablesText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    touchables: {
        margin: 10,
        backgroundColor: 'blue',
        width: 250,
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

module.exports = TestScreen;