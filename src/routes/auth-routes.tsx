import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";

const Stack = createStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        
      }}
    >
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Login}
      />
      <Stack.Screen name="Cadastro" component={Register} options={{headerTransparent:true,headerTintColor:'#F7F7F8'}} />
    </Stack.Navigator>
  );
}
