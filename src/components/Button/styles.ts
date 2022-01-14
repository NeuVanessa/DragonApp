import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton)`
 width: ${RFValue(259)}px;
  height: ${RFValue(44)}px;
  height: 60px;
  background:${({ theme }) => theme.colors.title};
  border-radius: 10px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;
export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: #312e38;
  font-size: 18px;
`;
