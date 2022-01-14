import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.ImageBackground`
  height: ${RFPercentage(20)}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const User = styled.View`
  margin-left: 17px;
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;
  border-radius: 80px;
  padding: 19px 23px;
  margin-right: 16px;
  margin-top: ${RFValue(50)}px;
  border: ${({ theme }) => theme.colors.title};
  border-width: 8px;
  align-items: center;
  justify-content: center;
`;
export const Photo = styled.Image`
  width: ${RFValue(140)}px;
  height: ${RFValue(140)}px;
  border-radius: 80px;
`;
export const Userinfo = styled.View`
  position: absolute;
  right: 10px;
  bottom: -10px;
  border-radius: 80px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.title};
  width: ${RFValue(34)}px;
  height: ${RFValue(34)}px;
`;
export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(24)}px;
  position: absolute;
`;
export const UserName = styled.Text`
  position: absolute;
  color: ${({ theme }) => theme.colors.secundary};
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  top: 145px;
  right: 10px;

`;

export const Main = styled.View`
  flex: 1;
  align-items: center;
background-color: red;
  margin-top: ${RFValue(100)}px;
  background: ${({ theme }) => theme.colors.background};
  flex-direction: column;
`;

export const CardInfoScroll = styled.ScrollView.attrs({
  horizontal: true,
  //Remove a barra de rolagem padrão
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 20 },
})`
flex: 1;
  width: 100%;
  margin-top: ${RFPercentage(0)}px;
`;

export const Footer = styled.ImageBackground`
height: 90px;

`;
