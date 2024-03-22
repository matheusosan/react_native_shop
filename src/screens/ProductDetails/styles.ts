import { styled } from "styled-components/native";

export const ImageContainerView = styled.View`
  flex: 1;
  width: 100%;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ProductContentView = styled.View`
  gap: 16px;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  padding: 20px;
`;

export const ProductTitleAndShare = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TitleText = styled.Text`
  font-size: 20px;
`;

export const DescriptionText = styled.Text`
  flex: 1;
  line-height: 20px;
`;

export const Sizes = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 24px;
`;

export const SizeButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border: 0.5px;
  border-color: #767676;
  flex: 1;
  height: 40px;
`;

export const PriceAndOrder = styled.View`
  width: 100%;
  align-items: center;
  padding-right: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Price = styled.Text`
  font-size: 22px;
`;

export const OrderButton = styled.Pressable`
  width: 150px;
  background-color: black;
  padding: 15px;
  border-radius: 26px;
`;

export const OrderText = styled.Text`
  color: white;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
`;
