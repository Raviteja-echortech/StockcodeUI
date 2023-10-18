import React, { useRef } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import Explore from "./Explore";
import Holding from "./Holding";
import Order from "./Order";
import WatchList from './myWatchList';
import BottomComponent from "./BottomComponent"
// import RBSheet from "react-native-raw-bottom-sheet";
const TopNavigation = (props) => {
  const Tab = createMaterialTopTabNavigator()
  const refRBSheet = useRef();

  return (
    <Tab.Navigator
      initialRouteName="explore"
      screenOptions={{
        tabBarItemStyle: { width: Dimensions.get("window").width * 0.37, borderWidth: 0 },
        tabBarStyle: { backgroundColor: "black", },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "black",
        activeColor: "#e91e63",
        tabBarScrollEnabled: true,
        tabBarIndicatorContainerStyle: { height: 0, width: 0 },
        tabBarGap: 0,
      }}

    >
      <Tab.Screen name="explore" component={Explore} options={{
        tabBarLabel: ({ focused }) => {
          return <Text style={{ color: "white", borderWidth: 1, fontSize: 13, borderColor: focused ? "white" : "rgba(120, 120, 120,0.8)", backgroundColor: focused ? "rgba(255,255,255, 0.3)" : "black", height: 30, width: 120, textAlignVertical: "center", textAlign: "center", borderRadius: 20, fontWeight: "600" }} >Explore</Text>
        }
      }} />
      <Tab.Screen name="holdings" component={Holding} options={{
        tabBarLabel: ({ focused }) => {

          return <Text style={{ color: "white", borderWidth: 1, borderColor: focused ? "white" : "rgba(120, 120, 120,0.8)", backgroundColor: focused ? "rgba(255,255,255, 0.3)" : "black", fontSize: 13, height: 30, width: 120, textAlignVertical: "center", textAlign: "center", borderRadius: 20, fontWeight: "600" }} >Holding</Text>
        }
      }} />
      <Tab.Screen name="Order" component={Order} options={{
        tabBarLabel: ({ focused }) => {

          return <Text style={{ color: "white", borderWidth: 1, borderColor: focused ? "white" : "rgba(120, 120, 120,0.8)", backgroundColor: focused ? "rgba(255,255,255, 0.3)" : "black", fontSize: 13, height: 30, width: 120, textAlignVertical: "center", textAlign: "center", borderRadius: 20, fontWeight: "600" }} >Orders</Text>
        }
      }} />
      <Tab.Screen name="My WatchList" component={WatchList} options={{
        tabBarLabel: ({ focused }) => {
          return <Text style={{ color: "white", borderWidth: 1, borderColor: focused ? "white" : "rgba(120, 120, 120,0.8)", backgroundColor: focused ? "rgba(255,255,255, 0.3)" : "black", fontSize: 13, height: 30, width: 120, textAlignVertical: "center", textAlign: "center", borderRadius: 20, fontWeight: "600" }} >My WatchList</Text>
        }
      }} />
      <Tab.Screen name="+ WatchList" children={() => <BottomComponent sheet={() => refRBSheet.current.open()} />} options={{
        tabBarLabel: ({ focused }) => {
          return <Text on style={{ color: "white", borderWidth: 1, borderColor: focused ? "white" : "rgba(120, 120, 120,0.8)", backgroundColor: focused ? "rgba(255,255,255, 0.3)" : "black", fontSize: 13, height: 30, width: 120, textAlignVertical: "center", textAlign: "center", borderRadius: 20, fontWeight: "600" }} >+ WatchList</Text>
        }
      }} />
    </Tab.Navigator>
  )
}
export default TopNavigation