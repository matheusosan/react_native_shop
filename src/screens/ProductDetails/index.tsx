import React from "react";
import { Text, View, Share, ActivityIndicator } from "react-native";
import type { RootStackScreenProps } from "../../navigation/types";
import { useQuery } from "@tanstack/react-query";
import { Entypo } from "@expo/vector-icons";
import * as S from "./styles";
import { fetchPostById } from "../../services/routes";
import { KEYS } from "../../services/query-keys";

const ProductDetails = ({ route }: RootStackScreenProps<"ProductDetails">) => {
  const id = route.params.productId;
  const url = `${route.name}/${route.params.productId}`;

  const { data, isLoading } = useQuery({
    queryKey: [KEYS.PRODUCT, id],
    queryFn: () => fetchPostById(id),
  });

  const onShare = async () => {
    await Share.share({
      message: `http://localhost:3001/${url}`,
    });
  };

  return (
    <View
      style={{
        height: "100%",
      }}
    >
      {isLoading && <ActivityIndicator />}
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
              <S.TitleText style={{ fontFamily: "Poppins_600SemiBold" }}>
                {data.title}
              </S.TitleText>
              <Entypo
                onPress={() => onShare()}
                name="share-alternative"
                size={20}
                color="black"
              />
            </S.ProductTitleAndShare>

            <S.Sizes>
              {data.sizes.map((size, index) => (
                <S.SizeButton key={index}>
                  <Text style={{ fontFamily: "Poppins_600SemiBold" }}>
                    {size}
                  </Text>
                </S.SizeButton>
              ))}
            </S.Sizes>

            <S.DescriptionText
              style={{
                fontFamily: "Poppins_500Medium",
              }}
            >
              {data.description}
            </S.DescriptionText>

            <S.PriceAndOrder>
              <S.Price style={{ fontFamily: "Poppins_600SemiBold" }}>
                {Number(data.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </S.Price>

              <S.OrderButton>
                <S.OrderText>Add to Cart</S.OrderText>
              </S.OrderButton>
            </S.PriceAndOrder>
          </S.ProductContentView>
        </>
      )}
    </View>
  );
};

export default ProductDetails;
