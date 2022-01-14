import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList, TopTabsProps } from "../../Home/CardList";

type Info = RouteProp<RootStackParamList, "HouseDetail">;

export function Titles() {
  const { params } = useRoute<Info>();
  type homeScreenProp = StackNavigationProp<TopTabsProps>;
  const navigation = useNavigation<homeScreenProp>();

  useEffect(() => {
  }, [params]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 0.9 }}>
        <View
          style={{
            width: "80%",
            height: 2,
            backgroundColor: "#DCBE98",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 40,
          }}
        ></View>
        <Text
          style={{
            color: "#181B17",
            fontSize: 20,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            top: 10,
          }}
        >
          {" "}
          Titulos da Casas
        </Text>
        {params["title"].map((item, index) => (
          <View key={index} style={{ top: 50 }}>
            {item.map((index2) => (
              <>
                <View
                  key={index2}
                  style={{ width: "100%", alignItems: "center" }}
                >
                  <Text
                    style={{
                      color: "#171A15",
                      fontSize: 25,
                      textAlign: "left",
                    }}
                  >
                    {index2?.name}
                  </Text>
                </View>
              </>
            ))}
          </View>
        ))}
      </View>
      <View style={{ flex: 0.1 }}>
        <TouchableOpacity
        onPress={()=> navigation.goBack()}
          style={{
            backgroundColor: "#DCBE98",
            width: 300,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            borderRadius: 15,
            height: 50,
          }}
        >
          <Text style={{ color: "#171A15", fontSize: 18 }}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
