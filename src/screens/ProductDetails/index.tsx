import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { RootStackScreenProps } from "../../navigation/types";
import { useQuery } from "@tanstack/react-query";
import { Entypo } from "@expo/vector-icons";
import * as S from "./styles";
import { fetchPostById } from "../../services/routes";
import { KEYS } from "../../services/query-keys";

const ProductDetails = ({
  route,
  navigation,
}: RootStackScreenProps<"ProductDetails">) => {
  const id = route.params.productId;

  const { data, isLoading } = useQuery({
    queryKey: [KEYS, id],

    queryFn: () => fetchPostById(id),
  });

  return (
    <SafeAreaView
      style={{
        height: "100%",
      }}
    >
      {isLoading && <Text>CARREGANDO...</Text>}
      {data && (
        <>
          <S.ImageContainerView>
            <S.Image
              alt={data.title}
              source={{
                uri: data.images[0],
              }}
            />
          </S.ImageContainerView>

          <S.ProductContentView>
            <S.ProductTitleAndShare>
              <S.TitleText style={{ fontFamily: "Poppins_700Bold" }}>
                {data.title}
              </S.TitleText>
              <Entypo name="share-alternative" size={20} color="black" />
            </S.ProductTitleAndShare>
            <S.DescriptionText
              style={{
                fontFamily: "Poppins_500Medium",
              }}
            >
              {data.description}
            </S.DescriptionText>

            <S.PriceAndOrder>
              <S.Price style={{ fontFamily: "Poppins_700Bold" }}>
                {Number(data.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </S.Price>

              <S.OrderButton onPress={() => navigation.navigate("HomeScreen")}>
                <S.ButtonText>Add to Cart</S.ButtonText>
              </S.OrderButton>
            </S.PriceAndOrder>
          </S.ProductContentView>
        </>
      )}
    </SafeAreaView>
  );
};

export default ProductDetails;
