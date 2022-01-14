import React, { useEffect, useState } from "react";
import footer_image from "../../../assets/footer.png";
import background_header from "../../../assets/background_header.png";
import icon_more from "../../../assets/icon_more.png";
import {
  CardContent,
  Phrase,
  House,
  HouseInfo,
  Photo,
  HouseDescription,
  HouseName,
  HouseScroll,
  LordName,
  Container,
  Header,
  CardLords,
  Row,
  CardRow,
  NameAndPhotoRow,
  CardDescription,
  DescriptionLord,
  MoreInfoLord,
  MoreText,
  More,
  LordNameArray,
  Footer,
} from "./styles";

import { Text, TouchableOpacity, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TopTabsProps } from "../../../components/Home/CardList";
import { useNavigation } from "@react-navigation/native";
export function HouseDetail({ route }) {
  type homeScreenProp = StackNavigationProp<TopTabsProps>;
  const navigation = useNavigation<homeScreenProp>();

  return (
    <Container>
      <Header source={background_header} />
      <CardContent>
        <Phrase>"{route.params.phrase}"</Phrase>
        <HouseScroll>
          <HouseName>{route.params.name}</HouseName>
          <House>
            <HouseInfo>
            <HouseDescription>
              {route.params.descriptionHouse}
              </HouseDescription>
              <Photo source={{ uri: route.params.image }} />
             
            </HouseInfo>
          </House>

          <HouseName>Fouter - {route.params.founder}</HouseName>
          <House>
            <HouseInfo>
              <HouseDescription>
              {route.params.descriptionFounder}
              </HouseDescription>
            </HouseInfo>
          </House>
          <HouseName>Região</HouseName>
          <Phrase>{route.params.region}</Phrase>

          <HouseName>Sede</HouseName>
          <Phrase>{route.params.thirst}</Phrase>
          <LordName>Lords</LordName>
          <CardLords>
            {route.params.lords.map((i, index) => (
              <Row key={index}>
                <LordNameArray>{i[0].name}</LordNameArray>
                <CardRow>
                  <NameAndPhotoRow>
                    <Photo
                      source={{
                        uri: i[0].image,
                      }}
                    />
                  </NameAndPhotoRow>

                  <CardDescription>
                    <DescriptionLord>
                     {i[0].description}
                    </DescriptionLord>

                    {/* <MoreInfoLord>
                      <MoreText>Saiba Mais</MoreText>
                      <More source={icon_more} alt="Saiba Mais" />
                    </MoreInfoLord> */}
                  </CardDescription>
                </CardRow>
              </Row>
            ))}
          </CardLords>
          <View style={{ flex: 1, top: 30, height: 90 }}>
            <TouchableOpacity
              key={route.params.id}
              //onPress={() => navigation.navigate("TopTabs")}
              onPress={() =>
                navigation.navigate("Informações", {
                  title: route.params.titles,
                  varsal: route.params.varsalos,
                })
              }
              style={{
                backgroundColor: "#f8f2d0",
                width: 300,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                borderRadius: 15,
                height: 50,
              }}
            >
              <Text style={{ color: "#171A15", fontSize: 18 }}>
                + Informações
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("News")}
              style={{
                backgroundColor: "#f8f2d0",
                width: 300,
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                borderRadius: 15,
                height: 50,
              }}
            >
              <Text style={{ color: "#171A15", fontSize: 18 }}>Noticias</Text>
            </TouchableOpacity>
          </View>
          <Footer source={footer_image} />
        </HouseScroll>
      </CardContent>
    </Container>
  );
}
