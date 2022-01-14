import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.text};
  width: ${RFValue(300)}px;
  height: ${RFValue(150)}px;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
`;

export const Content = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
 
`;
