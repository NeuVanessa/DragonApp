import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Term_Of_Use, Content, TermTitle } from "./styles";
export function ContactUs() {
  return (
    <Term_Of_Use>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TermTitle>FALE CONOSCO</TermTitle>
          <Content>
           Para entrar em contato conosco, basta acessar nossas redes socias.
            {"\n"}
            {"\n"} Discord: {"\n"}{" "}
            {"\n"} * https://discord.gg/XeVycUeK *
            {"\n"}
            {"\n"} E-mail: {"\n"}{" "}
            {"\n"} * vanessasamira1996@gmail.com *
            {"\n"}
            {"\n"} Whatssap: {"\n"}{" "}
            {"\n"} * (071) 98514 - 8742 *
            {"\n"}
            {"\n"}* Nosso principal meio de comunicação é através de e-mail, não iremos atender
            via whatssap, até sair a proxima atualização.
          </Content>

          <View style={{ flex: 1, height: 600 }}>
            <Text style={{ fontSize: 16 }}>
              {"\n"}
              <Content>
                AGRADECEMOS A COMPRIEENSÃO
              </Content>
              {"\n"}
              {"\n"}Copyright©2021, NeuApps. Todos os direitos reservados. Todos
              {"\n"}
              {"\n"}
              {"\n"}
              @2022
            </Text>
          </View>
        </ScrollView>
      </View>
    </Term_Of_Use>
  );
}
