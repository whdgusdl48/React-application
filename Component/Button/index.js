import React from 'react';
import PropTypes from 'prop-types';
import{View,TouchableOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
function Button({iconName,onPress}) {
    return (
        <TouchableOpacity onPressOut={onPress}> 
            <FontAwesome name={iconName} size={80} color="white" />
        </TouchableOpacity>
    )
}
//TouchableOpacity는 터치했을때 희미하게 한다 즉 터치를 가능하게 함.
Button.propTypes = {
    iconName : PropTypes.string.isRequired,
    onPress : PropTypes.func.isRequired
}
export default Button;

//버튼 구현 컴포넌트 리액트 네이티브로 구현
