import React, { useRef, useState } from "react";
import {
  Alert,
  Animated,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import home from "../../assets/icon_more.png";
import profile from "../../assets/perfil.png";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";
import term from "../../assets/term.png";
import { Terms_Of_Use } from "../../components/Profile/Terms";
import { useAuth } from "../../hooks/auth";
import { Privacity } from "../../components/Profile/Politics";
import { ContactUs } from "../../components/Profile/ContactUs";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type Navigation = {
  Dashboard: undefined;
};

export function Profile() {
  const { user, signOut } = useAuth();
  const [currentTab, setCurrentTab] = useState("Profile");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);
  // Animated Properties...
  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  type homeScreenProp = StackNavigationProp<Navigation>;
  const navigation = useNavigation<homeScreenProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "flex-start", padding: 15 }}>
        <Image
          source={{
            uri: user.avatar,
          }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
            marginTop: 8,
          }}
        />

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            marginTop: 20,
          }}
        >
          {user.name}
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              marginTop: 6,
              color: "white",
            }}
          >
            {user.email}
          </Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }

          {TabButton(currentTab, setCurrentTab, "Perfil", profile, <></>)}
          {TabButton(currentTab, setCurrentTab, "Termos de Uso", term, <></>)}
          {TabButton(currentTab, setCurrentTab, "Politicas", home, <></>)}
          {TabButton(currentTab, setCurrentTab, "Fale Conosco", home, <></>)}
          {TabButton(currentTab, setCurrentTab, "Voltar", home, <></>)}
        </View>

        <View>
          {TabButton(currentTab, setCurrentTab, "Sair do App", home, signOut)}
        </View>
      </View>

      {
        // Over lay View...
      }

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: "#f8f2d0",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          // Transforming View...
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        {
          // Menu Button...
        }

        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}
        >
          <TouchableOpacity
            onPress={() => {
              // Do Actions Here....
              // Scaling the view...
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                // YOur Random Value...
                toValue: showMenu ? 0 : 230,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(closeButtonOffset, {
                // YOur Random Value...
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}
          >
            <Image
              source={showMenu ? close : menu}
              style={{
                width: 20,
                height: 20,
                tintColor: "black",
                marginTop: 40,
              }}
            />
          </TouchableOpacity>

          {currentTab === "Termos de Uso" ? (
            <Terms_Of_Use />
          ) : currentTab === "Politicas" ? (
            <Privacity />
          ) : currentTab === "Fale Conosco" ? (
            <ContactUs />
          ) : currentTab === "Voltar" ? (
            <View></View>
          ) : (
            <View>
              <Image
                source={{
                  uri: user.avatar,
                }}
                style={{
                  width: "100%",
                  height: 300,
                  borderRadius: 15,
                  marginTop: 25,
                }}
              ></Image>

              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  paddingTop: 15,
                  paddingBottom: 5,
                }}
              >
                {user.name}
              </Text>

              <Text style={{}}>
                Caro fã de Game Of Thrones, Você Está cm acesso{"\n"}
                em primeira mão, as informações da série, pedimos que esteja de
                acordo com os termos de uso e a politica de privacidade desse
                software, Vale lembrar que, qualquer uso indevido será cabivel
                de banimento.{"\n"}.
              </Text>

              <Text style={{}}>
                Agradecemos a comprieensão: Equipe Neu Apps
              </Text>
            </View>
          )}
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image, signOut) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == "Sair do App") {
          signOut();
        } else if (title == "Voltar") {
        } else {
          setCurrentTab(title);
        }
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor: currentTab == title ? "white" : "transparent",
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == title ? "#DCBE98" : "white",
          }}
        ></Image>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 15,
            color: currentTab == title ? "#DCBE98" : "white",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181B17",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
function goBack() {
  throw new Error("Function not implemented.");
}
