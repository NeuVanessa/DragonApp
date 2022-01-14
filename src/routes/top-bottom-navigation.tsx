import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Varsalos } from "../components/Houses/Varsalos";
import { Titles } from "../components/Houses/Titles";
import { RootStackParamList } from "../components/Home/CardList";
import { RouteProp, useRoute } from "@react-navigation/native";

const TabNavigator = createMaterialTopTabNavigator();

type Info = RouteProp<RootStackParamList, "HouseDetail">;

const TopTabs = () => {
  const { params } = useRoute<Info>();

  return (
    <TabNavigator.Navigator
      style={{ marginHorizontal: 20, marginTop: 20, marginBottom: 50 }}
      tabBarOptions={{
        style: { elevation: 3, backgroundColor: "#DCBE98" },
        labelStyle: {
          fontSize: 18,
          fontFamily: "Ledger_400Regular",

          textTransform: "capitalize",
        },
        indicatorStyle: { borderBottomColor: "red", borderBottomWidth: 2 },
      }}
    >
      <TabNavigator.Screen
        children={(i) => <Titles />}
        options={{ tabBarLabel: "Titulos" }}
        name="Titles"
        initialParams={params}
      />
      <TabNavigator.Screen
        children={() => <Varsalos />}
        options={{ tabBarLabel: "Varsalos" }}
        name="Varsalos"
        initialParams={params}
      />
    </TabNavigator.Navigator>
  );
};

export default TopTabs;
