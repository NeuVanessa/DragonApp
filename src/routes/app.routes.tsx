import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Dashboard } from "../screens/Dashboard/Dashboard";
import TopTabs from "./top-bottom-navigation";
import { News } from "../screens/News";
import BottomTabs from "./bottom-navigation";

import { Profile } from "../screens/Profile";
import { DetailNews } from "../screens/News/DetailNews";
import { HouseDetail } from "../screens/Dashboard/HouseDetail/HouseDetail";


const App = createStackNavigator();

const AppRouthes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      cardStyle: { backgroundColor: "#312e38" },
    }}
  >
    <App.Screen
      name="BottomTabs"
      component={BottomTabs}
      options={{ headerShown: false }}
    />
    <App.Screen
      name="Dashboard"
      component={Dashboard}
      options={{ headerShown: false }}
    />
   
    <App.Screen
      name="Profile"
      component={Profile}
      options={{ headerShown: false }}
    />
    <App.Screen name="News" 
    component={News} 
    options={{ headerShown: false }} 
    />

    <App.Screen name="DetailNews" 
    component={DetailNews} 
    options={{ headerShown: false }}
     />

    <App.Screen name="HouseDetail" 
    component={HouseDetail} 
    options={{ headerShown: false }} 
    />

   
    <App.Screen
      name="Informações"
      component={TopTabs}
        options={{ headerShown: false,cardStyle:{backgroundColor:'#f8f2d0'}, headerStyle:{backgroundColor:'blue'}, title:'Informações',headerTitleStyle:{fontSize:20,textDecorationColor:'red',color:'yellow'}}}
      
    />
    
  </App.Navigator>
);

export default AppRouthes;
