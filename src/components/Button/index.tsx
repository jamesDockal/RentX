import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface Props extends RectButtonProps {
  name: string;
  color?: string;
  isEnabled?: boolean;
}

export const Button: React.FC<Props> = ({
  name,
  color,
  isEnabled = true,
  ...rest
}) => {
  return (
    <Container color={color} {...rest} isEnabled={isEnabled}>
      <Title>{name}</Title>
    </Container>
  );
};
