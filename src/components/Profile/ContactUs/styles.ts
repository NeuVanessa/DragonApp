import styled from 'styled-components/native';

import {RFValue } from "react-native-responsive-fontsize";


export const Term_Of_Use = styled.View`
justify-content: center;

`

export const TermTitle = styled.Text`
font-size: ${RFValue(32)}px;
font-family: ${({theme})=> theme.fonts.regular};
color: ${({theme})=> theme.colors.text_dark};
`
export const Content = styled.Text`
font-size: ${RFValue(20)}px;
font-family: ${({theme})=> theme.fonts.medium};
color: ${({theme})=> theme.colors.text_dark};

`

export const ContentBlack = styled.Text`
font-size: ${RFValue(22)}px;
font-family: ${({theme})=> theme.fonts.medium};
color: ${({theme})=> theme.colors.attention};

`