import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import api from "../../../services/api";
import { HouseListProvider, House } from "./styles";

export interface HouseList {
  id: string;
  image: string;
  name: string;
  motto: string;
  thirst: string;
  region: string;
  arms: string;
  phrase: string;
  founder: string;
  varsalos: [];
  titles: any;
  lords: Array<{
    id: string;
    name: string;
  }>;
  dead: [];
  alive: [];
}

export type RootStackParamList = {
  HouseDetail: {
    image: string;
    name: string;
    motto: string;
    thirst: string;
    region: string;
    arms: string;
    phrase: string;
    founder: string;
    descriptionHouse:string;
    descriptionFounder:string;
    varsalos: [];
    titles: Array<{
      id: string;
      name: string;
      image:string;
      description:string;
    }>;
    lords: Array<{
      id: string;
      name: string;
      image:string;
      description:string;
    }>;
    dead: [];
    alive: [];
  };
};

export type TopTabsProps = {
  Informações: any;
  Varsalos: any;
  News: any;
};
export function CardList() {
  const [house, setHouse] = useState<HouseList[]>([]);
  type homeScreenProp = StackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<homeScreenProp>();

  useEffect(() => {
    async function puxarDados() {
      try {
        const response = await api.get("/houses");
        setHouse(response.data);
        // house.map((i,index) => (
        //   <>
        //     {i.titles.find((x) => (
        //       <>
        //         <Text>{x.name}</Text>
        //         {console.log(x[0].name)}
        //       </>
        //     ))}
        //   </>
        // ));
      } catch (error) {
        console.log(error);
      }
    }
    puxarDados();
  }, []);

  return (
    <HouseListProvider
      horizontal={true}
      data={house}
      //numColumns={1} <<Colunas no Flatlist
      keyExtractor={(item, index) => {
        return index.toString();
      }}
      renderItem={({ item: provider }) => (
        <View key={provider.id}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("HouseDetail", {
                name: provider.name,
                motto: provider.motto,
                image: provider.image,
                descriptionHouse:provider.descriptionHouse,
                descriptionFounder:provider.descriptionFounder,
                thirst: provider.thirst,
                region: provider.region,
                phrase: provider.phrase,
                alive: provider.alive,
                arms: provider.arms,
                dead: provider.dead,
                titles: provider.titles,
                founder: provider.founder,
                lords: provider.lords,
                varsalos: provider.varsalos,
              })
            }
          >
            <House key={provider.id} source={{ uri: provider.image }} />
          </TouchableOpacity>
        </View>
      )}
    />
  );
}
