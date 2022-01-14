import React  from "react";
import { Dimensions, SafeAreaView, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from "rn-placeholder";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const height = HEIGHT / 2;


const _onScroll = (e) => {
  var offset_y = e.nativeEvent.contentOffset.y;
  if (offset_y > 0) {
    if (height >= 0) {
      ({ height: height - offset_y });
    }
  }
 
}

const drawPlaceholders = (amount) => {
  var placeholder_arr = [];
  for (var i = 0; i < amount; i++) {
    placeholder_arr.push(
      <Placeholder
        key={i}
        Animation={Fade}
        Left={PlaceholderMedia}
        Right={PlaceholderMedia}
      >
        <PlaceholderLine width={80} />
        <PlaceholderLine />
        <PlaceholderLine width={30} />
      </Placeholder>
    );
  }
  return placeholder_arr;
};
export function DetailNews({ navigation, route }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: HEIGHT, width: WIDTH }}>
        <View
          pointerEvents="box-none"
          style={{ height: HEIGHT, width: WIDTH, position: "absolute" }}
        >
          <View
            pointerEvents="none"
            style={{ height: height, backgroundColor: "trasparent" }}
          />
          <View
            style={{
              height: HEIGHT - height,
              backgroundColor: "white",
            }}
          >
            <ScrollView onScroll={(e) => _onScroll(e)} scrollEventThrottle={10}>
              <View
                style={{
                  width: 50,
                  height: 5,
                  backgroundColor: "gray",
                  alignSelf: "center",
                  borderRadius: 2,
                  marginTop: 5,
                  marginBottom: 5,
                }}
              />
              {drawPlaceholders(10)}
            </ScrollView>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
