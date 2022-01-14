import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Term_Of_Use, Content, TermTitle } from "./styles";
export function Privacity() {
  return (
    <Term_Of_Use>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TermTitle>POLITICA DE PRIVACIDADE</TermTitle>
          <Content>
            Essa politica descreve como a NeuApps e parceiros. (Parcerias)
            coleta, divulga as informações.
            {"\n"}
            {"\n"} os 4 pilares que descrevem melhor a NeuApps são: {"\n"}{" "}
            {"\n"} * Segurança - As informações coletadas por meio do aplicativo
            é protegida de modo que os dados não serão vazados.
            {"\n"}
            {"\n"} * Responsabilidade - O processamento dos dados são protegidos
            de tal modo que, acerca da escolha daremos a voce a informação de
            como os dados em si são coletados.
            {"\n"}
            {"\n"} * Usuabilidade - Presamos pelo modo como o aplicativo
            funciona de tal forma que, võce poderá opninar (sugerir), algo novo
            no aplicativo, sendo ele (melhorias).
            {"\n"}
            {"\n"}* Pessoas são especiais - Gostamos muito de um dialogo, não
            toleramos, qualquer tipo de ato que possa prejudicar a integridade
            de outro usuário ou do proprio aplicativo, caso aconteça, voce será
            banido de todas as plataforma da NeuApps.
          </Content>

          <View style={{ flex: 1, height: 600 }}>
            <Text style={{ fontSize: 16 }}>
              {"\n"}
              <Content>
                Acerca das demais informaçõs de Politica de privacidade
              </Content>
              {"\n"}
              {"\n"}Copyright©2021, NeuApps. Todos os direitos reservados. Todos
              {"\n"}
              {"\n"} 1 - Coleta de informação fornecidade
              {"\n"}
              {"\n"}
              Em Breve mais informações
            </Text>
          </View>
        </ScrollView>
      </View>
    </Term_Of_Use>
  );
}
