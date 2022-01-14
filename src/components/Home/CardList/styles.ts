import { FlatList } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { HouseList } from './index';


export const Content = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
  color: red;
`;

export const House = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;
  border-radius: 80px;
  margin-left:15px;
`;

export const HouseListProvider = styled(FlatList as new () => FlatList<HouseList>)`
  flex: 1;
  width: 100%;
  margin-top: ${RFPercentage(7)}px;
  margin-right: 10px;  

`;