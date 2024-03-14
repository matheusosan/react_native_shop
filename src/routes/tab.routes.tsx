import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import CartScreen from "../screens/CartScreen";
import Notificaions from "../screens/Notifications";
import { HomeTabScreenProps } from "../navigation/types";
import StackNavigator from "./stack.routes";
import type { HomeTabParamList } from "../navigation/types";

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
        <Tab.Screen name="Profile" component={Notificaions} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
