import { useNavigation } from "@react-navigation/core";
import {
  StackNavigationProp,
} from "@react-navigation/stack";
import * as React from "react";
import { FAB, Portal, Provider } from "react-native-paper";

export type RootStackParamList = {
  Event: undefined;
  News: undefined;
  Profile: undefined;
  Chat:undefined;
};

//const Stack = createStackNavigator<RootStackParamList>();

export function ButtonFloat() {
  const [state, setState] = React.useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  type homeScreenProp = StackNavigationProp<RootStackParamList>;
  const navigation = useNavigation<homeScreenProp>();

  const { open } = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          style={{ bottom:10, position: "absolute" }}
          visible={true}
          open={open}
          icon={open ? "home" : "plus"}
          actions={[
            {
              icon: "account-settings",
              label: "Perfil",
              onPress: () => navigation.navigate("Profile"),
            },
            {
              icon: "barley",
              label: "Chat",
              onPress: () => navigation.navigate("Chat"),
            },

            {
              icon: "heart",
              label: "Noticias",
              onPress: () => navigation.navigate("News"),
            },

            // {
            //   icon: "bell",
            //   label: "Remind",
            //   onPress: () => console.log("Pressed notifications"),
            //   small: false,
            // },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              //   console.log("Aberto Menu Opção");
            }
          }}
        />
      </Portal>
    </Provider>
  );
}

export default ButtonFloat;
