import React from "react";

import GasolineSvg from "../../assets/gasoline.svg";
import EnergySvg from "../../assets/energy.svg";

import {
  Container,
  CarInfo,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CardImage,
} from "./styles";
import { RectButtonProps } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

interface Props extends RectButtonProps {
  car: {
    type: "electric" | "gasoline";
    name: string;
    brand: string;
    thumbnail: string;
    rent: {
      price: number;
      period: string;
    };
  };
}

export const CardCard: React.FC<Props> = ({ car }) => {
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate("CarDetails");
  }

  return (
    <Container onPress={handlePress}>
      <CarInfo>
        <Brand>{car.brand}</Brand>
        <Name>{car.name}</Name>

        <About>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>{`R$ ${car.rent.price}`}</Price>
          </Rent>
          <Type>
            {car.type === "gasoline" ? <GasolineSvg /> : <EnergySvg />}
          </Type>
        </About>
      </CarInfo>

      <CardImage source={{ uri: car.thumbnail }} />
    </Container>
  );
};
