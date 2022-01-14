import React from 'react';
import {Input} from 'react-native-elements';
import Icon from '@expo/vector-icons/Feather';

import style from './styles';

const BasicInput = ({
  iconName = 'user',
  iconSize = 24,
  iconColor = '#CCCBCA',
  ...rest
}) => (
  <Input
    {...rest}
    leftIcon={<Icon name={iconName} size={iconSize} color={iconColor} />}
    inputContainerStyle={style.InputContainerStyle}
    leftIconContainerStyle={style.LeftIconContainerStyle}
    errorStyle={style.ErrorStyle}
  />
);

export default BasicInput;