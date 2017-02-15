'use strict'

import React, {Component} from 'react'
import {
    Navigator,
    StyleSheet
} from 'react-native';

class LenkaNavigator extends Component {

    /**
     *
     * @param route
     * @param navigator
     */
    configureScene(route, navigator) {
        if (route.type == 'Bottom') {
            return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
        }
        return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
    }

    /**
     * 渲染场景, 通过不同参数, 设置不同页面
     * @param route 路由, 场景信息
     * @param navigator 导航器
     * @returns {XML} 页面
     */
    renderScene(route, navigator) {

        let Screen;
        if(route.screen && typeof route.screen === 'string') {
            let screens = route.screen.split('.');
            if(screens.length <= 1) {
                Screen = require(screens[0])['mainScreen'];
            } else {
                Screen = require(screens[0])[screens[1]];
            }

        } else if(route.screen && typeof route.screen === 'object'){
            Screen = route.screen;

        }
        if(!Screen) {

        }

        return <Screen navigator={navigator} {...route.props}/>
    }


    render() {

        return (
            <Navigator
                style={styles.container}
                initialRoute={this.props.initialRoute}
                configureScene={this.configureScene}
                renderScene={this.renderScene}/>
        )
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

module.exports = LenkaNavigator;