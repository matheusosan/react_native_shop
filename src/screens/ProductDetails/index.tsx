import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import type { RootStackScreenProps } from "../../navigation/types";
import * as S from "./styles";
import { Text } from "react-native";

const imageURL =
  "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const ProductDetails = ({
  route,
  navigation,
}: RootStackScreenProps<"ProductDetails">) => {
  const id = route.params.productId;

  return (
    <SafeAreaView
      style={{
        height: "100%",
      }}
    >
      <S.ImageContainerView>
        <S.Image
          source={{
            uri: imageURL,
          }}
        />
      </S.ImageContainerView>

      <S.ProductContentView>
        <S.ProductTitleAndShare>
          <S.TitleText style={{ fontFamily: "Poppins_700Bold" }}>
            Roller Rabbit
          </S.TitleText>
          <Entypo name="share-alternative" size={20} color="black" />
        </S.ProductTitleAndShare>
        <Text>{id}</Text>
        <S.DescriptionText style={{ fontFamily: "Poppins_500Medium" }}>
          Descrição da Camiseta: Esta camiseta é uma peça essencial para
          qualquer guarda-roupa. Feita com material de alta qualidade, ela
          oferece conforto durante o uso diário. Seu design moderno e elegante
          combina facilmente com uma variedade de estilos, tornando-a perfeita
          para uso casual ou para ocasiões especiais.
        </S.DescriptionText>

        <S.PriceAndOrder>
          <S.Price style={{ fontFamily: "Poppins_700Bold" }}>R$99,90</S.Price>

          <S.OrderButton onPress={() => navigation.navigate("HomeScreen")}>
            <S.ButtonText>Add to Cart</S.ButtonText>
          </S.OrderButton>
        </S.PriceAndOrder>
      </S.ProductContentView>
    </SafeAreaView>
  );
};

export default ProductDetails;
