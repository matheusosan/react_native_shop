import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartScreen from "../screens/CartScreen";
import Notificaions from "../screens/Notifications";
import StackNavigator from "./stack.routes";
import type { HomeTabParamList } from "../navigation/types";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator<HomeTabParamList>();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        backBehavior="history"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#000",
          tabBarInactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Home"
          component={StackNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Notifications" component={Notificaions} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
