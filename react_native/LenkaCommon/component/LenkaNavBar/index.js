/**
 * @providesModule LenkaNavBar
 */

'use strict'

import Platform from 'Platform';
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import { fonts } from 'LenkaCommon';
import LenkaButton from 'LenkaButton';

let navBarHeight = Platform.OS === 'android' ? 50 : 44;
let A = fonts.Grid.A;
let a = fonts.Grid.a;

class LenkaNavBar extends Component {

    render() {
        let { titleColor, buttonTextColor, title, leftText, rightText } = this.props;

        let titleTextStyle = {
            color:titleColor
        };

        return(
            <View>
                <View style={styles.container}>
                    <Text style={[styles.titleTextStyle, titleTextStyle]}>{title}</Text>
                    <View style={styles.buttonsViewStyle}>
                        <LenkaButton text={leftText}
                                     textColor={buttonTextColor}/>
                        <LenkaButton text={rightText}
                                     textColor={buttonTextColor}/>
                    </View>
                </View>
                <View style={styles.lineStyle} />
            </View>);
    }

}

var styles = StyleSheet.create({
    container:{
        height:navBarHeight,
        backgroundColor:'#44305d',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    titleTextStyle: {
        color:'white',
        fontSize:fonts.Font.H1,
        fontWeight:fonts.FontWeight.H1
    },
    buttonsViewStyle: {
        position:'absolute',
        flex:1,
        top:0,
        bottom:0,
        right:3 * a,
        left:3 * a,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    lineStyle:{
        height:1,
        backgroundColor:'#4b385f'
    }
});

module.exports = LenkaNavBar;