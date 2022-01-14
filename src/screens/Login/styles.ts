import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  flex-direction: column;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  padding: 115px 0px 18px;
`;
export const Logo = styled.Image``;
export const Main = styled.View`
  align-items: center;
`;
export const Inputs = styled.View`
  align-items: center;
`;
export const TermAndPolicies = styled.Text`
  margin-top: -15px;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  align-self: center;
`;
export const TextContent = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Footer = styled.View`
  align-items: center;
`;
export const PasswordAndAccount = styled.View`
  flex-direction: row;
  padding: 8px 0px;
`;
export const ForgotPassword = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
export const CreateaAccount = styled.TouchableOpacity`
 
`;
export const CreateaAccountText = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
