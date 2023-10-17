
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
//const Tab = createMaterialTopTabNavigator();
//const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

import React from "react"
import Bottombar from "./Components/BottomTab";


const App = () => {
  
  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="bottombar" component={Bottombar} />
       
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App