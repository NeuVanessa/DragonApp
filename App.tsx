import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import { useFonts, Lalezar_400Regular } from "@expo-google-fonts/lalezar";
import { Ledger_400Regular } from "@expo-google-fonts/ledger";
import theme from "./src/global/styles/theme";
import Routes from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/hooks/auth";
export default function App() {
  const [fontsLoaded] = useFonts({
    Lalezar_400Regular,
    Ledger_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#181B17" />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
