import React, { useState } from "react";

import { Button } from "../../components/Button";
import {Text, TouchableOpacity}from 'react-native';
import Input from "../../components/Input";
import logo from "../../assets/logo.png";
import {
  Container,
  Header,
  Logo,
  Main,
  Inputs,
  TermAndPolicies,
  TextContent,
  Footer,
  PasswordAndAccount,
  ForgotPassword,
  CreateaAccount,
  CreateaAccountText
} from "./styles";
import { useAuth } from "../../hooks/auth";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";


export type RootStackParamList = {
  Cadastro: undefined;
};

export default function SignIn() {
  const { signIn } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  type homeScreenProp = StackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<homeScreenProp>();

  function logar() {
    try {
      signIn({ username, password });
    } catch (error) {
      console.log("Erro" + username);
    }
  }
  return (
    <Container>
      <Header>
        <Logo source={logo} alt="Logo Tipo" />
      </Header>

      <Main>
        <Inputs>
          <Input
            name="username"
            icon="user"
            placeholder="Usuário [Nick]"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            value={username}
            onChangeText={(username) => setUsername(username)}
          />
          <Input
            name="password"
            icon="lock"
            placeholder="Senha"
            secureTextEntry
            returnKeyType="send"
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </Inputs>

        <TermAndPolicies>
          Ao se cadastrar na plataforma, você declara {"\n"}que esta ciente com
          os{""}
          <TextContent> Termos e Politica.</TextContent>
      
        </TermAndPolicies>
      
      </Main>
      <Footer>
        <Button children="Login" onPress={logar} />
        <PasswordAndAccount>
          <ForgotPassword>
            Esqueceu senha? {""} |{""}{" "}
          </ForgotPassword>
          <CreateaAccount onPress={()=> navigation.navigate("Cadastro")}>
            <CreateaAccountText>Criar Conta</CreateaAccountText>
          </CreateaAccount>
        </PasswordAndAccount>
      </Footer>
    </Container>
  );
}
