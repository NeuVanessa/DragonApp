import React, { useEffect, useState } from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  Modal,
} from "react-native";
import Input from "../../components/Input";
import { Container, Scroll, TextInput } from "./styles";
import * as ImagePicker from "expo-image-picker";
import { Button } from "../../components/Button";
import { RootStackParamList, useAuth } from "../../hooks/auth";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export default function Register() {
  type registerScreenProp = StackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<registerScreenProp>();
  const [submitted, SetSubmitted] = useState(false);
  const [showWarning, SetshowWarning] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [active, setActive] = useState();
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [type, setType] = useState("usuario");
  const [avatar, setAvatar] = useState(null);
  const [validationEmail, setValidationEmail] = useState("");
  const [validationPassword, setValidatioPassword] = useState("");
  const [validationPasswordCheck, setValidatioPasswordCheck] = useState("");

  const { signUp, user } = useAuth();

  //Funão Para abrir o modal
  const onPressHandler = () => {
    if (username === username) {
      SetSubmitted(!submitted);
    } else {
      SetshowWarning(true);
    }
  };

  //Função para a validação de email
  const handleValidEmail = (val) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (val.length === 0) {
      setValidationEmail("O endereço de email deverá ser insirido!");
    } else if (reg.test(val) === false) {
      setValidationEmail("Informe um email valido");
    } else if (reg.test(val) === true) {
      setValidationEmail("");
    }
  };

  //Função para a validação de senha
  const handleValidPassword = (val) => {
    if (password.length === 0) {
      setValidatioPassword("Senha é Obrigatório");
    } else if (password.length < 5) {
      setValidatioPassword("Senha deverá ter no minimo 6 caracteres");
    } else {
      setValidatioPassword("");
    }
  };
  //Função para a validação de senha
  const handleValidPasswordCheck = (val) => {
    if (passwordCheck.length <= 5) {
      setValidatioPasswordCheck(
        "Confirmação da senha deverá ter no minimo 6 caracteres"
      );
    } else if (password.length != passwordCheck.length) {
      setValidatioPasswordCheck("As senhas não são iguais.");
      return;
    } else {
      setValidatioPasswordCheck("");
    }
  };

  function handleSubmit() {
    signUp({
      username,
      password,
      name,
      passwordCheck,
      email,
      type,
      active,
      avatar,
      _id: "",
    });
    //Alert.alert("Cadastrado com sucesso", "Vamos lá realizar o Login!");
    handlePress();
    //navigation.navigate("Login");
    //
  }
  // }
  const handlePress = () => {
    onPressHandler();
  };
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setAvatar(result.uri);
    }
  };

  return (
    <Container>
      <View
        style={{
          backgroundColor: "##181B17",
          height: 150,
          marginTop: 100,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          alignSelf: "center",
        }}
      >
        <>
          <Scroll>
            <View>
              {avatar && (
                <Image
                  source={{ uri: avatar }}
                  style={{ width: 150, height: 150, borderRadius: 50 }}
                />
              )}
              {avatar === null ? (
                <View
                  style={{
                    height: 100,
                    width: 100,
                    backgroundColor: "#979797",
                    borderRadius: 50,
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: "#DCBE98",
                    borderWidth: 2,
                  }}
                >
                  <Text style={{ fontSize: 18 }} onPress={pickImage}>
                    Adicionar{"\n"} Avatar
                  </Text>
                </View>
              ) : (
                <Text onPress={pickImage} style={{ color: "#F7F7F8" }}>
                  Avatar Adicionado
                </Text>
              )}
              <View style={{ marginTop: 30 }}>
                <TextInput>Nome</TextInput>
                <Input
                  name="name"
                  placeholder="Exemplo: Khall Santos"
                  icon="user"
                  value={name}
                  onChangeText={(name) => setName(name)}
                />
                <TextInput>E-mail</TextInput>
                <Input
                  name="email"
                  placeholder="Exemplo: dragon.admin@gmail.com"
                  icon="mail"
                  value={email}
                  autoCorrect={false}
                  onChangeText={(password) => {
                    setEmail(password);
                    handleValidEmail(password);
                  }}
                />
                {validationEmail ? (
                  <TextInput style={{ color: "red" }}>
                    {validationEmail}
                  </TextInput>
                ) : null}
                <TextInput>Usuário</TextInput>
                <Input
                  name="username"
                  placeholder="Exemplo: vanessa.lopes"
                  icon="user"
                  value={username}
                  onChangeText={(username) => setUsername(username)}
                />
                <TextInput>Senha</TextInput>
                <Input
                  name="password"
                  placeholder="Exemplo: 1234@teste"
                  icon="user"
                  value={password}
                  onChangeText={(password) => {
                    setPassword(password);
                    handleValidPassword(password);
                  }}
                />
                {validationPassword ? (
                  <TextInput style={{ color: "red" }}>
                    {validationPassword}
                  </TextInput>
                ) : null}
                <TextInput>Confirmação de Senha</TextInput>
                <Input
                  name="passwordCheck"
                  placeholder="Exemplo: 1234@teste"
                  icon="user"
                  value={passwordCheck}
                  onChangeText={(passwordCheck) => {
                    setPasswordCheck(passwordCheck);
                    handleValidPasswordCheck(passwordCheck);
                  }}
                />
                {validationPasswordCheck ? (
                  <TextInput style={{ color: "red" }}>
                    {validationPasswordCheck}
                  </TextInput>
                ) : null}
                {active === true ? (
                  <Input
                    name="active"
                    placeholder="Ativo"
                    icon="user"
                    value={active}
                    onChangeText={(active) => setPassword(active)}
                  />
                ) : null}
                <View style={{ alignSelf: "center" }}>
                  <Button children="Ola mUNDO" onPress={handleSubmit} />
                </View>
              </View>
            </View>
          </Scroll>
        </>

        <Modal
          visible={showWarning}
          transparent
          onRequestClose={() => SetshowWarning(false)}
          animationType="slide"
          hardwareAccelerated
        >
          <View style={styles.centered_view}>
            <View style={styles.warning_modal}>
              <View style={styles.warning_title}>
                <Text style={styles.text}>WARNING!</Text>
              </View>
              <View style={styles.warning_body}>
                <Text style={styles.text}>
                  The name must be longer than 3 charachters
                </Text>
              </View>
              <Pressable
                onPress={() => SetshowWarning(false)}
                style={styles.warning_button}
                android_ripple={{ color: "#fff" }}
              >
                <Text style={styles.text}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  text: {
    color: "#000000",
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: "center",
  },
  centered_view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000099",
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
  },
  warning_title: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff0",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  warning_button: {
    backgroundColor: "#00ffff",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
