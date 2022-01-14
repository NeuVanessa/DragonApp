import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

interface ContainerPorps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerPorps>`
  width: ${RFValue(320)}px;
  height: ${RFValue(44)}px;
  background: ${({ theme }) => theme.colors.secundary};
  border-radius: 10px;
  margin-bottom: ${RFValue(23)}px;
  flex-direction: row;
  align-items: center;
  /* ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `} */
`;

export const TextInput = styled.TextInput`
  flex: 1;
  margin-left: 12px;
  color: #fff;
  font-size: 16px;
 background: ${({ theme }) => theme.colors.secundary};
 font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Icon = styled(Feather)`
  margin-left: 19px;
`;
