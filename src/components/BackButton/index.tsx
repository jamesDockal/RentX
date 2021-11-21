import React from "react";

import { useTheme } from "styled-components";
import { BorderlessButtonProps } from "react-native-gesture-handler";

import { MaterialIcons } from "@expo/vector-icons";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/core";

interface Props extends BorderlessButtonProps {
  color?: string;
}

export const BackButton: React.FC<Props> = ({ color, ...rest }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  return (
    <Container {...rest} onPress={goBack}>
      <MaterialIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.colors.text}
      />
    </Container>
  );
};
