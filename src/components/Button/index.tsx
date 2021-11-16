import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface Props extends RectButtonProps {
  name: string;
  color?: string;
}

export const Button: React.FC<Props> = ({ name, color }) => {
  return (
    <Container color={color}>
      <Title>{name}</Title>
    </Container>
  );
};
