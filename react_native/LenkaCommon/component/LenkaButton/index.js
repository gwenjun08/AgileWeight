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
        let textable = true;
        if(!this.props.text || this.props.text == "") {
            textable = false;
        }

        return(
            <TouchableOpacity style={styles.container}
                onPress={this.props.onPress}>
                {this.props.imageSrc && <Image source={this.props.imageSrc} style={{width:40, height:40}}/>}
                {textable && <Text style={{color:this.props.textColor}}>{this.props.text}</Text>}
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
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
});

module.exports = LenkaButton;