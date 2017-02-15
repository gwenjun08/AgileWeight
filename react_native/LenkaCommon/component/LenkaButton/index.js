/**
 * @providesModule LenkaButton
 */

'use strict'

import React, {Component} from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    Image
} from 'react-native';

class LenkaButton extends Component {
    render(){
        return(
            <TouchableOpacity style={styles.container}
                onPress={this.props.onPress}>
                {this.props.imageSrc && <Image source={this.props.imageSrc} style={{width:40, height:40}}/>}
                {this.props.text && <Text style={{color:this.props.textColor}}>{this.props.text}</Text>}
            </TouchableOpacity>
        )
    }

}

LenkaButton.propTypes = {
    text:React.PropTypes.string,
    textColor:React.PropTypes.string,
    onPress:React.PropTypes.func,
    imageSrc:React.PropTypes.object
};

LenkaButton.defaultProps = {
    text:'',
    textColor:'white'
}

var styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
});

module.exports = LenkaButton;