import React from "react";
import { StatusBar, Text } from "react-native";

import image from "../../assets/background_img.png";
import footer_image from "../../assets/footer.png";
import {
  Container,
  Header,
  User,
  Photo,
  Userinfo,
  Icon,
  UserName,
  Main,
  Footer,
} from "./styles";

import { CardInfo } from "../../components/Home/CardInfo";
import { CardList } from "../../components/Home/CardList";
import ButtonFloat from "../../components/Button-Float";
import { useAuth } from "../../hooks/auth";

export function Dashboard() {
  const { user } = useAuth();

  return (
    <Container>
      <Header source={image}>
        <StatusBar backgroundColor="#f8f2d0" />

        {/*
Implementar Funcionalidade na segunda versão
        <Text>Posible button toggle{"\n"} color Dark and White [THEME].</Text> */}
        <User>
          <Photo
            source={{
              uri: user.avatar,
            }}
          />
          {/* <Userinfo>
            <Icon name="edit" />
          </Userinfo> */}

          {/* //Colocar no banco de dados a opção do usuário escolher um nickname */}
          <UserName>{user.username}</UserName>
        </User>
      </Header>
      <Main>
        <CardInfo />
        <CardList />
        <ButtonFloat />
      </Main>

      <Footer source={footer_image}></Footer>
    </Container>
  );
}
