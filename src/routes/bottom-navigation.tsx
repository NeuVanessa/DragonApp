import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dashboard } from "../screens/Dashboard/Dashboard";
import { Feather } from "@expo/vector-icons";
import House from "../screens/House/House";
import { News } from "../screens/News";
import { Debate } from "../screens/Debate";
import { Chat } from "../screens/Chat";

const Tab = createBottomTabNavigator();

// Interface


const BottomTabs = () => {


  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: "#DCBE98",
        labelPosition: "beside-icon",
        activeBackgroundColor: "#181B17",
        labelStyle: {
          width: 60,
          fontSize: 15,
        },
        tabStyle: {
          borderRadius: 30,
        },
        style: {
          position: "absolute",
          backgroundColor: "rgba(244,244,244,0.9)",
          elevation: 0,
          borderWidth: 0,
          marginVertical: 10,
          marginHorizontal: 20,
          borderRadius: 30,
          borderTopWidth: 0,
        },
        tabBarStyle: {
          borderRadius: 30,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color }) => (
            <Feather color={color} size={20} name="home" />
          ),
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Debate",
          tabBarIcon: ({ color }) => (
            <Feather color={color} size={20} name="feather" />
          ),
        }}
        name="Debate"
        component={Chat}
      />
      
    </Tab.Navigator>
  );
};

export default BottomTabs;
