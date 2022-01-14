import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { TextInputProps } from "react-native";
import { Container, Icon, TextInput } from "./styles";
import { useField } from "@unform/core";

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface inputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}
const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon, ...rest },
  ref
) => {
  const [isFocused, SetIsFocused] = useState(false);
  const [isFilled, SetIsFilled] = useState(false);

  return (
    <Container isFocused={isFocused}>
      <Icon
        name={icon}
        size={20}
        color={isFocused || isFilled ? "#ff9000" : "#666360"}
      />
      <TextInput placeholderTextColor="#666360" {...rest} />
    </Container>
  );
};

export default forwardRef(Input);
