import React, { useEffect, useState } from "react";
import { CarouselItem, Category, Container, Index } from "./styles";

import {
  Text,
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import vector_next from "../../assets/vector-next.png";
import api from "../../services/api";

export type RootStackParamList = {
  DetailNews: {
    title: string;
  };
};

export function News() {
  type homeScreenProp = StackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<homeScreenProp>();
  const [indexProps, setIndecPros] = useState(0);
  const [date, SetDate] = useState([]);

  useEffect(() => {
    async function pushDate() {
      try {
        const response = await api.get("/blog");
        SetDate(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    pushDate();
  }, []);


  const onChange = (eventNative) => {
    if (eventNative) {
      const date = Math.ceil(
        eventNative.contentOffset.x / eventNative.layoutMeasurement.width
      );
      if (date != indexProps) {
        setIndecPros(date);
      }
    }
  };

  return (
    <Container>
      <View style={{ flex: 0.5 }}>
        <ScrollView
          scrollEventThrottle={18}
          onScroll={({ nativeEvent }) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          horizontal
          key={indexProps}
          pagingEnabled
          contentContainerStyle={{ height: 250, padding: 15 }}
          style={{ flex: 1 }}
        >
          {date.map((val, index) => {
            if (index < 1 + 1) {
              return (
                <View style={styles.img} key={index}>
                  <ImageBackground
                    style={styles.img}
                    source={{
                      uri: val.image,
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 5,
                        backgroundColor: "rgba(0,0,0,0.3)",
                        justifyContent: "flex-end",
                      }}
                    ></TouchableOpacity>
                  </ImageBackground>
                  <Text style={{ marginLeft: 15 }}>{val.date}</Text>
                  <Text style={{ marginLeft: 15 }}>{val.title}</Text>
                  <TouchableOpacity
                    style={{
                      width: 165,
                      height: 40,
                      marginTop: 5,
                      borderColor: "black",
                      borderWidth: 3,
                      borderRadius: 5,
                      marginLeft: 15,
                      justifyContent: "space-between",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    onPress={() =>
                      navigation.navigate("DetailNews", {
                        title: val.title,
                      })
                    }
                  >
                    <Text style={{ fontSize: 15, marginLeft: 5 }}>
                      Continuar Lendo
                    </Text>
                    <Image
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 50,
                        marginRight: 5,
                      }}
                      source={vector_next}
                    />
                  </TouchableOpacity>
                </View>
              );
            }
          })}
        </ScrollView>
        <View
          style={{
            width: 100,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <CarouselItem>
            {date.map((val, index) => {
              if (index < 1 + 1) {
                return (
                  <TouchableOpacity key={index}>
                    <Index active={index === indexProps} />
                  </TouchableOpacity>
                );
              }
            })}
          </CarouselItem>
        </View>
      </View>

      <View style={{ flex: 0.7, padding: 20 }}>
        <View
          style={{
            width: 50,
            height: 2,
            backgroundColor: "#069",
            position: "absolute",
            left: 40,
            top: 40,
          }}
        ></View>
        <Text style={{ color: "#181B17", fontSize: 15 }}> Mais Noticias </Text>
        <ScrollView
          scrollEventThrottle={10}
          contentContainerStyle={{ padding: 20 }}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          key={indexProps}
        >
          {date.map((val, index) => {
            if (index >= 10) {
              return (
                <View
                  key={val.id}
                  style={{
                    flexDirection: "row",
                    marginBottom: 10,
                  }}
                >
                  <TouchableOpacity
                    style={{ flexDirection: "row" }}
                    onPress={() =>
                      navigation.navigate("DetailNews", {
                        title: val.title,
                      })
                    }
                  >
                    <Image
                      style={{ width: 175, height: 101, borderRadius: 5 }}
                      resizeMode="cover"
                      source={{
                        uri: val.uri,
                      }}
                    />
                    <View style={{ flexDirection: "column" }}>
                      <Text style={{ padding: 5 }}>{val.title}</Text>
                      <View style={{ flexDirection: "column" }}>
                        <Text style={{ fontSize: 15, marginLeft: 10 }}>
                          Categoria
                        </Text>
                        {val.category === "Global" ? (
                          <Category type>
                            <Text
                              style={{
                                flex: 1,
                                flexWrap: "wrap",
                                color: "#171A15",
                                alignSelf: "center",
                              }}
                            >
                              {val.category}
                            </Text>
                          </Category>
                        ) : (
                          <>
                            {val.category === "Comun" ? (
                              <Category>
                                <Text
                                  style={{
                                    flex: 1,
                                    flexWrap: "wrap",
                                    color: "#171A15",
                                    alignSelf: "center",
                                  }}
                                >
                                  {val.category}
                                </Text>
                              </Category>
                            ) : null}
                          </>
                        )}
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }
          })}
        </ScrollView>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    width: "100%",
    marginLeft: 5,
    borderRadius: 5,
  },
});
