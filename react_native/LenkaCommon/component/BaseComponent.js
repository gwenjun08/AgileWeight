'use strict'

import React from 'react';
import {
    BackAndroid
} from 'react-native';

import  KeyEvent  from '../constant/KeyEvent';


class BaseComponent extends React.Component {

    onKeyDown(keyCode) {
        if(keyCode === KeyEvent.KEYCODE_BACK){
            let navigator = this.props.navigator;
            let routes = navigator.getCurrentRoutes();
            console.log(routes);
            if(routes.length > 1) {
                navigator.pop();
                return true;
            } else {
                return false;
            }
        }

        return false;
    }

    componentWillMount() {
        let navigator = this.props.navigator;
        let onKeyDown = this.onKeyDown.bind(this);
        BackAndroid.addEventListener('hardwareBackPress', function () {
            return onKeyDown(KeyEvent.KEYCODE_BACK);
        });
    }
}

module.exports = BaseComponent;