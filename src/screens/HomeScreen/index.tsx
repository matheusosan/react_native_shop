import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackScreenProps } from "../../navigation/types";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = ({ navigation }: RootStackScreenProps<"HomeScreen">) => {
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Button
        title="Ir para detalhes do produto"
        onPress={() =>
          navigation.navigate("ProductDetails", { productId: "2" })
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
