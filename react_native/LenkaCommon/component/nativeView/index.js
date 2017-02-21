/**
 * @providesModule nativeView
 */


'use strict'

import {PropTypes} from 'react';
import { requireNativeComponent, View } from 'react-native'

var tick = {
    name:'TickMarkView',
    propTypes:{
        ...View.propTypes
    }

};

module.exports = {
    TickMarkView:requireNativeComponent("TickMarkView", tick)
}