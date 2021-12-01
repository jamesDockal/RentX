import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Load } from "../Load";

import { Container, Title } from "./styles";

interface Props extends RectButtonProps {
  name: string;
  color?: string;
  isEnabled?: boolean;
  isLoading?: boolean;
}

export const Button: React.FC<Props> = ({
  name,
  color,
  isEnabled = true,
  isLoading = false,
  ...rest
}) => {
  return (
    <Container
      color={color}
      enabled={isEnabled}
      style={{
        opacity: isEnabled === false || isLoading === true ? 0.5 : 1,
      }}
      {...rest}
    >
      {isLoading ? <Load /> : <Title>{name}</Title>}
    </Container>
  );
};
