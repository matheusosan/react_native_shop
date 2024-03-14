import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type HomeTabParamList = {
  Home: BottomTabScreenProps<RootStackParamList>;
  Cart: undefined;
  Profile: undefined;
  Notifications: undefined;
};

export type RootStackParamList = {
  HomeScreen: undefined;
  ProductDetails: { productId: string };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends HomeTabParamList {}
  }
}
