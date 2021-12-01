import React from "react";

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
import { Car } from "../../@types/Cars";
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

interface Props extends RectButtonProps {
  car: Car;
}

export const CardCard: React.FC<Props> = ({ car, ...rest }) => {
  const MotorIcon = getAccessoryIcon(car?.fuel_type);
  return (
    <Container {...rest}>
      <CarInfo>
        <Brand>{car.brand}</Brand>
        <Name>{car.name}</Name>

        <About>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ ${car.rent.price}</Price>
          </Rent>
          <Type>
            <MotorIcon />
          </Type>
        </About>
      </CarInfo>

      <CardImage source={{ uri: car.thumbnail }} />
    </Container>
  );
};
