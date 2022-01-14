import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Term_Of_Use, Content, ContentBlack, TermTitle } from "./styles";
import { Divider } from "react-native-paper";
export function Terms_Of_Use() {
  return (
    <Term_Of_Use>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TermTitle>TERMOS DE USO</TermTitle>
          <Content>
            Bem vindo ao Dragon App. Leia para conhecer os termos e condições
            que regem o uso do nosso site, produtos, serviços, aplicações e
            programações audiovisuais nele contidas (os “Serviços”). Se Você
            tiver alguma dúvida ou comentário a estes Termos de Uso (os
            “Termos”) ou aos Serviços, entre em contato conosco.{"\n"}
            {"\n"} Estes Termos configuram contrato vinculante entre Você e a
            NeuApps, Ltda. (“DeagonApp”, “Nós”, “Nossos”) relativo aos Serviços.
            {"\n"}
            {"\n"}
            <Content>
              <ContentBlack>
                Você deve aceitar os Termos, ou não poderá acessar nem utilizar
                os Serviços. O seu uso e acesso aos Serviços indicam que Você
                aceita estes Termos. Estes Termos permanecerão em vigor enquanto
                Você utilizar os Serviços.
              </ContentBlack>{" "}
              Estes Termos incluem as disposições deste documento, bem como
              qualquer outro documento publicado nos Serviços.{"\n"}
              {"\n"}
            </Content>
            Para entender como Nós tratamos os seus dados pessoais, incluindo a
            coleta, uso, armazenamento, processamento, compartilhamento,
            segurança e controle destes dados, Você deve consultar a Política de
            Privacidade da DragonApp, disponível{" "}
            <ContentBlack>aqui</ContentBlack>.{"\n"}
          </Content>
          <Divider />
          <View>
            <TermTitle>{"\n"}ACERCA DAS REGRAS</TermTitle>
            <Content>
              1 - Para acessar e utilizar determinadas características e
              funcionalidades dos Serviços, Você deverá se cadastrar para obter
              uma conta pessoal e intransferível, com senha e login pessoais.
              Poderemos solicitar que Você crie códigos e senhas adicionais para
              acessar e utilizar os Serviços. É seu dever proteger e manter em
              sigilo suas senhas de acesso.{"\n"}2 - Os Serviços são destinados
              a uso pessoal e Você é o único responsável pelas atividades
              associadas à sua conta da DragonApp. A NeuApps{" "}
              <ContentBlack>
                {" "}
                NÃO SERÁ RESPONSÁVEL POR QUALQUER DANO, DIRETO OU INDIRETO,
                CAUSADO COMO RESULTADO DA VIOLAÇÃO DAS DISPOSIÇÕES DESSA
                CLÁUSULA POR VOCÊ OU DO SEU MAU USO OU DA SUA INABILIDADE DO USO
                DA APLICAÇÃO, INLCUINDO DANOS DECORRENTE DO ACESSO POR QUAISQUER
                TERCEIROS DA CONTA COM O SEU LOGIN E SENHA.
              </ContentBlack>
              {"\n"}
              {"\n"}Você declara, garante e aceita que não utilizará ou
              interagirá com os Serviços de modo:{"\n"}
              {"\n"}
              a. A infringir ou violar os direitos de propriedade intelectual ou
              qualquer outro direito de qualquer terceiro (incluindo a NeuApps);
              {"\n"}
              {"\n"}
              b. A violar ou estimular a violação de qualquer lei, regulamento,
              ordem judicial ou governamental ou qualquer tratado; a violar ou
              infringir os direitos autorais ou outros direitos de propriedade
              intelectual, direitos de publicidade ou privacidade ou qualquer
              outro direito da NeuApps ou de terceiro; a permitir o acesso não
              autorizado aos Serviços ou qualquer característica ou
              funcionalidade dos Serviços, contas de outros usuários, logins,
              senhas, informação de identificação pessoal ou de outros
              computadores, sites ou páginas da Internet, conectados ou
              vinculados à utilização dos Serviços de maneira que viole ou seja
              incompatível com estes Termos;
              {"\n"}
              {"\n"}
              c. Prejudicial, fraudulento, calunioso, enganoso, difamatório,
              indecente, vulgar ou obsceno, pornográfico, sexualmente explícito
              ou sugestivo, racial, cultural ou etnicamente ofensivo, danoso,
              assediante, intimidante, discriminatório, abusivo, ou que seja ou
              possa parecer representar a terceiros;
              {"\n"}
              {"\n"}
              d. A colocar em perigo a segurança da NeuApps, sua conta ou a
              conta de qualquer terceiro (como permitir que outra pessoa faça
              login aos Serviços se passando por Você);
              {"\n"}
              {"\n"}
              e. A tentar, de qualquer maneira, obter a senha, conta ou outra
              informação de segurança de qualquer outro usuário;
              {"\n"}
              {"\n"}
              f. A interferir ou danificar os Serviços, incluindo, sem limitação
              o uso de vírus, trojans, códigos danosos, ataques de negação de
              serviço, roubo de pacotes ou IP, informação de roteamento,
              endereço de correio eletrônico falsificado, métodos de tecnologias
              similares, ou descumprir quaisquer requisitos, procedimentos,
              políticas e/ou regulamentação das redes conectadas aos nossos
              Serviços;
              {"\n"}
              {"\n"}
              j. A descompilar, fazer engenharia reversa ou tentar violar o
              código-fonte ou ideias ou informações subjacentes ou relacionadas
              aos Serviços;
              {"\n"}
              {"\n"}
              l. A ajudar terceiro a participar de atividades proibidas por
              estes Termos ou pelas normas aplicáveis;
            </Content>
            <Divider />
          </View>
          <View style={{ flex: 1, height: 600 }}>
            <Text style={{ fontSize: 16 }}>
              {"\n"}
              <Content>Copyright</Content>
              {"\n"}
              {"\n"}Copyright©2021, NeuApps. Todos os direitos reservados. Todos
              os textos, imagens, gráficos, animações, vídeos, músicas, sons e
              outros materiais são protegidos por direitos autorais e outros
              direitos de propriedade intelectual pertencentes à NeuApps, suas
              subsidiárias, afiliadas e licenciantes. A NeuApps e, também,
              proprietária dos direitos autorais de desenvolvimento, seleção,
              coordenação, diagramação e disposição dos materiais neste
              aplicativo ou site. É expressamente vedada a cópia ou reprodução
              destes materiais para uso ou distribuição comercial, a modificação
              destes materiais, sua inclusão em outros websites e o seu envio e
              publicação em outros meios digitais e físicos, ou de qualquer
              outra forma dispor de tais materiais sem a devida autorização,
              estando sujeito às responsabilidades e sanções legais.
              {"\n"}
              {"\n"}
              Agradecemos a comprieensão desejamos boa utilização no aplicativo
              e qualquer dúvida estamos a disposição.
            </Text>
          </View>
        </ScrollView>
      </View>
    </Term_Of_Use>
  );
}
