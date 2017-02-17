'use strict'

/**
 * @providesModule LenkaRatio
 *
 */


import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableWithoutFeedback
} from 'react-native';

class LenkaRatio extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {isChecked:props.isChecked};
      }

    _onPress(){
        this.setState({
            isChecked:true
        });
        if(this.props.onCheckChange) {
            this.props.onCheckChange(true, this);
        }
    }

    setNativeProps(nativeProps){
        this.setState(nativeProps);
    }

    render() {

        let textable = true;
        if(!this.props.text || this.props.text == "") {
            textable = false;
        }

        return(
            <TouchableWithoutFeedback onPress={this._onPress.bind(this)}>
                <View style={[styles.container, this.props.style]}>
                    {this.props.imageSrc &&
                        this.state.isChecked ? <Image source={this.props.imageSrc.checkedImage} style={this.props.imageStyle}/> :
                        <Image source={this.props.imageSrc.unCheckImage} style={this.props.imageStyle}/>}
                    {textable &&
                        this.state.isChecked ? <Text style={{color:this.props.textColor.checkedColor}}>{this.props.text}</Text> :
                        <Text style={{color:this.props.textColor.unCheckColor}}>{this.props.text}</Text>}
                </View>
            </TouchableWithoutFeedback>
        );
    }

}

LenkaRatio.propTypes = {
    text:React.PropTypes.string,
    textColor:React.PropTypes.shape({
        unCheckColor:React.PropTypes.string,
        checkedColor:React.PropTypes.string
    }),
    onCheckChange:React.PropTypes.func,
    imageSrc:React.PropTypes.shape({
        unCheckImage:React.PropTypes.object,
        checkedImage:React.PropTypes.object,
    }),
    imageStyle:React.PropTypes.object,
    isChecked:React.PropTypes.bool
};

LenkaRatio.defaultProps = {
    text:'',
    textColor:'white',
    imageStyle:{width:40, height:40},
    isChecked:false
}

var styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    }
});

module.exports = LenkaRatio;