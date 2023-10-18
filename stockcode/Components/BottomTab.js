import React from "react"
import { View } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home";
import FundsActive from "../assest/FundsActive"
import FundsInActive from "../assest/FundsInActive"
import CandleActive from "../assest/CandleActive"
import CandleInactive from "../assest/CandleInactive"
import MutualFunds from "./mutualFunds";
import Pay from './pay';
import PayActive from "../assest/PayActive"
import PayInActive from "../assest/PayInActive"

const Bottombar = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName="Pay"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    color: "#800080",
                    backgroundColor: "black",
                    borderTopWidth: 10,
                    borderTopColor: "black",
                    shadowColor: "#FFFF",
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10,
                },

            }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarHideOnKeyboard: true,
                tabBarIcon: ({ focused }) => {
                    return focused ? <CandleActive /> : <CandleInactive />
                }
            }} />
            <Tab.Screen name="Mutualfund" component={MutualFunds} options={{
                tabBarHideOnKeyboard: true,
                tabBarIcon: ({ focused }) => {
                    return focused ? <FundsActive /> : <FundsInActive />
                }
            }} />
            <Tab.Screen name="Pay" component={Pay} options={{
                tabBarHideOnKeyboard: true,
                tabBarIcon: ({ focused }) => {
                    return focused ? <PayActive /> : <PayInActive />
                }
            }} />
        </Tab.Navigator>
    )
}
export default Bottombar