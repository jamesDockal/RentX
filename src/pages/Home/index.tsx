import React from "react";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";

import AppLoading from "expo-app-loading";

import { Container, Title } from "./styles";

type Props = {};

export const Home: React.FC<Props> = ({}) => {
  const [isFontLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!isFontLoaded) {
    return <AppLoading />;
  }

  return (
    <Container>
      <Title>Home</Title>
    </Container>
  );
};
