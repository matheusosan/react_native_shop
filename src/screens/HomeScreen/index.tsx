import React from "react";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackScreenProps } from "../../navigation/types";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../services/routes";
import { KEYS } from "../../services/query-keys";

const HomeScreen = ({ navigation }: RootStackScreenProps<"HomeScreen">) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [KEYS.ALL_PRODUCTS],

    queryFn: () => fetchPosts(),
  });

  return (
    <SafeAreaView>
      {isLoading && <Text>Carregando...</Text>}
      {error && <Text>{error.message}</Text>}
      <Text>HOMEPAGE</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Text
            onPress={() =>
              navigation.navigate("ProductDetails", {
                productId: String(item.id),
              })
            }
            style={{
              color: "#ff0000",
              paddingVertical: 20,
            }}
          >
            {item.title}
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
