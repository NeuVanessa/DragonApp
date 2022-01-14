import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootStackParamList } from "../../Home/CardList";

type Info = RouteProp<RootStackParamList, "HouseDetail">;

export function Varsalos() {
  const { params } = useRoute<Info>();
  type homeScreenProp = StackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<homeScreenProp>();

  useEffect(() => {
   // console.log("Retornando o Varsalos = > ", params["teste"]);
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
          Varsalos da Casas
        </Text>
        {params["varsal"].map((item, index) => (
          <View key={index} style={{ top: 50 }}>
            {item.map((index2) => (
              <>
                <View
                  key={index2.id}
                  
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
       
      </View>
    </View>
  );
}
